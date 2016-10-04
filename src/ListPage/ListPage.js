// @flow
import React from 'react';

import type { MatchComponentProps } from '../types'

import { List, ListItem, LoadingListItem } from '../List'

import './ListPage.css';

type Item = {
    _id: string,
    amount: number,
    nameOnCard: string
}

const items = [
    { _id: '57f2ae54842412e9daffc71f', amount: 10000, nameOnCard: 'Alberto Spinetta' },
    { _id: '57f2ae54842412e9daffc711', amount: 20000, nameOnCard: 'Charly Garcia' },
    { _id: '57f2ae54842412e9daffc712', amount: 1000000, nameOnCard: 'Maria de la Torre Albertico Saramugra El Santo Garota' },
    { _id: '57f2ae54842412e9daffc713', amount: 5000, nameOnCard: 'Alberto Spinetta' },
    { _id: '57f2ae54842412e9daffc714', amount: 10000, nameOnCard: 'Alberto Spinetta' },
]

const ListPage = (props: MatchComponentProps) => {
    return (
        <List>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <LoadingListItem key={i} />
            )) }
        </List>
    )
}
// {items.map((item: Item) =>
//     <ListItem key={item._id} className='ListPageItem'>
//         <div>
//             <span className='ListPageItem-amount'>{item.amount / 100}</span>
//             {" - "}
//             <span className='ListPageItem-amount'>{item._id}</span>
//         </div>
//         <div>
//             <span className='ListPageItem-nameOnCard'>{item.nameOnCard}</span>
//         </div>
//     </ListItem>
// ) }

export default ListPage