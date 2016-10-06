// @flow
import R from 'ramda';
import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';

import type { MatchComponentProps } from '../types'

import { List, ListItem, ListItemsWrapper } from '../List'
import { Filters, InputFilter } from '../List';
import Layout from '../Layout';
import messages from './messages';
import Translation from '../Translation';

import './ListPage.css';

type Item = {
    _id: string,
    amount: number,
    nameOnCard: string
}

const items = [];

class ListPage extends Component {
    props: MatchComponentProps;
    state: {
        loading: boolean
    }

    loadingTimeout: number | void

    constructor(props: MatchComponentProps) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.loadingTimeout = setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
    }

    componentWillUnmount() {
        if (!R.isNil(this.loadingTimeout)) {
            clearTimeout(this.loadingTimeout);
            this.loadingTimeout = undefined;
        }
    }

    render() {
        const {loading} = this.state;
        const Messages = Translation({filter: messages.filters, business: messages.business});
        const actions = (
            <Messages values={{ business: { plural: true }}}>
                {
                    ({filter, business}) =>{
                        return (
                            <Filters filterText={filter}>
                                <InputFilter label={business}/>
                            </Filters>
                        );
                    }
                }
            </Messages>
        )

        return (
            <Layout title={<FormattedMessage {...messages.payments} />} padded={false} actions={actions} >
                <List>
                    <ListItemsWrapper
                        emptyIcon='credit-card'
                        emptyMessage={<FormattedMessage {...messages.noPayments} />}
                        itemsCount={items.length}
                        loading={loading}
                        times={10} >
                        {items.map((item: Item) =>
                            <ListItem key={item._id} className='ListPageItem'>
                                <div>
                                    <span className='ListPageItem-amount'>{item.amount / 100}</span>
                                    {" - "}
                                    <span className='ListPageItem-amount'>{item._id}</span>
                                </div>
                                <div>
                                    <span className='ListPageItem-nameOnCard'>{item.nameOnCard}</span>
                                </div>
                            </ListItem>
                        ) }
                    </ListItemsWrapper>
                </List>
            </Layout >
        )
    }
}

export default ListPage