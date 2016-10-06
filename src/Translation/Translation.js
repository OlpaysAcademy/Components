// @flow
import { Component } from 'react';
import R from 'ramda';
import { intlShape } from 'react-intl/dist/react-intl';

/**
 * Higher Order Component(HOC) that allows you to access react-intl translated messages as strings.
 * This HOC should be used only when you need a translated message string, for every other case you should use react-intl FormatMessage and similar components.
 * Usage:
 * const Messages = Translation({filter: messages.filters, business: messages.business});
 * <Messages values={{ business: { plural: true }}}>
 * {
 *  ({business}) => console.log(business)
 * }
 * </Messages>
 */
function Translation(messages: { [key: string]: { id: string, defaultMessage: string} }) {
    class Message extends Component {
        props: {
            children: (messages: { [key: string]: string }) => void,
            values: {
                [key: string]: {}
            }
        }
        render() {
            const translatedMessages = Object.keys(messages).reduce((collection, key) => {
                const message = messages[key];
                return R.merge({ [key]: this.context.intl.formatMessage(message, this.props.values[key])})(collection);
            }, {});
            return this.props.children(translatedMessages);
        }
    }
    Message.contextTypes = {
        intl: intlShape
    };
    return Message;
}

export default Translation;