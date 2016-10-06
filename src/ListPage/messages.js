// @flow
import { defineMessages } from 'react-intl';

export default defineMessages({
    noPayments: {
        id: `ListPage.no-payments`,
        defaultMessage: `You don't have any payments right now. As soon as you receive the first one it will be shown here`,
    },
    payments: {
        id: `ListPage.payments`,
        defaultMessage: `Payments`
    },
    business: {
        id: `ListPage.business`,
        defaultMessage: `{plural, select, true{Business} false{Business} other{Business}}`
    },
    filters: {
        id: `ListPage.filters`,
        defaultMessage: `Filters`
    }
});
