// @flow
import { defineMessages } from 'react-intl';

export default defineMessages({
    logout: {
        id: `App.logout`,
        defaultMessage: `Logout`,
    },
    home: {
        id: `App.home`,
        defaultMessage: `Home`,
    },
    extractions: {
        id: `App.extractions`,
        defaultMessage: `{plural, select, true{Extractions} false{Extraction}}`,
    }
});
