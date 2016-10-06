// @flow
const fs = require('fs');
const R = require('ramda');
const { sync: globSync } = require('glob');

type file = { filename: string, content: string };
type message = { [filename: string]: string[] };

type loadFilesType = (pattern: string) => file[]
const loadFiles = R.curry(function (pattern) {
    return globSync(pattern)
        .map(filename => ({
            filename,
            content: fs.readFileSync(filename, 'utf8')
        }));
});

type loadTranslationsType = (pattern: string) => string[]
const loadTranslations: loadTranslationsType = R.curry(pattern => {
    return loadFiles(pattern).map(file => JSON.parse(file.content));
});

type extractMessagesType = (files: file[]) => message
const extractMessages: extractMessagesType = R.curry(files => {
    return files.reduce((collection, file) => {
        const { metadata } = require('babel-core').transform(file.content, {
            presets: ['react'],
            plugins: ['react-intl', 'transform-es2015-destructuring', 'babel-plugin-transform-object-rest-spread']
        });
        if (!metadata['react-intl'].messages.length) {
            return collection;
        }
        return R.merge({
            [file.filename]: metadata['react-intl'].messages
        })(collection);
    }, {});
});

type loadMessagesType = (pattern: string) => message
const loadMessages: loadMessagesType = R.pipe(
    loadFiles,
    extractMessages
);

type extractIdsType = (translation: {id: string, defaultMessage: string}[]) => string[]
const extractIds = function (translation) {
    return translation.map(t => t.id);
}

const concatIds = (collection, ids) => collection.concat(ids);
const collectDuplicates = (collection, element, index, array) => {
    const appearances = array.filter(elem => elem === element).length;
    if (appearances > 1) {
        return R.merge({ [element]: appearances })(collection);
    }
    return collection;
};

type detectDuplicatedKeysType = (data: { translations: string[] }) => {[filename: string]: string[]}
const detectDuplicatedKeys = R.curry(({ translations }) => {
    return translations.map(extractIds).reduce(concatIds, []).reduce(collectDuplicates, {});
});

const appendUntranslated = R.curry((translations, messageIdsMap) => {
    const translationIds = R.flatten(translations).map(t => t.id);
    const isUntranslated = messageId => {
        return !translationIds.includes(messageId);
    };
    return R.map(messageIds => {
        return messageIds.filter(isUntranslated)
    })(messageIdsMap);
});

const pruneFilesWithoutUntranslatedMessages = R.curry(messageIdsMap => {
    return R.filter(messages => messages.length)(messageIdsMap)
});

type detectUntranslatedKeysType = (data: { translations: string[], messages: message }) => {[filename: string]: string[]}
const detectUntranslatedKeys = R.curry(({ translations, messages }) => {
    return R.pipe(
        R.map(extractIds),
        appendUntranslated(translations),
        pruneFilesWithoutUntranslatedMessages
    )(messages);
});

const checkTranslations = ({ translationsPattern, componentsPattern }: { translationsPattern: string, componentsPattern: string}) => R.pipe(
    R.assoc('translations', loadTranslations(translationsPattern)),
    R.assoc('messages', loadMessages(componentsPattern)),
    data => R.assoc('duplicates', detectDuplicatedKeys(data))(data),
    data => R.assoc('untranslated', detectUntranslatedKeys(data))(data)
)({});

module.exports = checkTranslations;
