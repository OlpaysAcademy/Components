// @flow
import moment from 'moment'
import queryString from 'query-string';
import React, { Component } from 'react';
import Switch from 'react-toolbox/lib/switch';
import { Button } from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';
import Collapse from 'react-collapse'
import AppBar from 'react-toolbox/lib/app_bar';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

import classes from './App.scss'

import {
    Filters,
    SelectFilter,
    InputFilter,
    DateFilter,
    DateRangeFilter,
    AutocompleteFilter,
    // AsyncAutocompleteFilter,
} from './Filters';

type Props = {}
type Item = { status: string, id: number, business: string, description: string }

const TooltipButton = Tooltip(Button);

const items = [
    { id: 1, status: 'approved', business: 'MostroNet', description: 'Un pago' },
    { id: 2, status: 'approved', business: 'Pedobear Official Store', description: 'Dos pago' },
    { id: 3, status: 'approved', business: 'La Veneciana', description: 'Un pago' },
    { id: 4, status: 'rejected', business: 'CatShop', description: 'Tres pago' },
    { id: 5, status: 'pending', business: 'MostroNet', description: 'Un pago' },
]

const MyListItem = (props: Item) => (
    <div>
        <span>{props.id} - {props.status} - {props.business} - {props.description}</span>

    </div>
)

class App extends Component {
    state: {
        params: Object,
        automaticUpdate: boolean,
        filtersOpened: boolean,
        items: Item[],
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            items,
            params: {},
            automaticUpdate: false,
            filtersOpened: false,
        }
    }

    handleChange(params: Object) {
        console.log(params)
        this.setState({ ...this.state, params }, () => {
            if (this.state.automaticUpdate) {
                this.updateList();
            }
        })
    }

    updateList() {
        const { status, description, business } = this.state.params;
        const maybeMatch = (query: string, value: string) => query ? (new RegExp(query)).test(value) : true;
        const filteredItems = items.filter(i => {
            return maybeMatch(status, i.status) &&
                maybeMatch(business, i.business) &&
                maybeMatch(description, i.description);
        })
        this.setState({
            items: filteredItems
        });
    }

    handleAutomaticChange(automaticUpdate: boolean) {
        this.setState({ automaticUpdate })
    }

    handleClear() {
        this.setState({
            params: {},
            items,
        })
    }

    toggleFilters() {
        this.setState({ filtersOpened: !this.state.filtersOpened })
    }

    render() {
        return (
            <div className="App">
                <h2>Welcome to Filter</h2>
                <h3>This is the current filter state</h3>
                <code className={classes.Code}>{JSON.stringify(this.state.params, null, 4) }</code>

                <Switch
                    className={classes.Switch}
                    checked={this.state.automaticUpdate}
                    label="Update URL automatically after filter change"
                    onChange={this.handleAutomaticChange.bind(this) }
                    />
                <AppBar flat
                    rightIcon="filter_list"
                    onRightIconClick={this.toggleFilters.bind(this) }>
                    <h3>Listado Loco</h3>
                </AppBar>
                <Collapse isOpened={this.state.filtersOpened}>
                    <Filters
                        params={this.state.params}
                        onChange={this.handleChange.bind(this) }>
                        {onChange => (
                            <div>
                                <div className={classes.Container}>
                                    <SelectFilter
                                        value={this.state.params.status}
                                        onChange={value => onChange({ status: value }) }
                                        label="Status"
                                        options={[
                                            { value: 'approved', label: 'Aprobado' },
                                            { value: 'rejected', label: 'Rechazado' },
                                            { value: 'pending', label: 'Pendiente' },
                                        ]}/>
                                    <InputFilter name="description" label="Description"
                                        onChange={ value => onChange({ description: value }) }/>
                                    <DateFilter
                                        label="Date"
                                        onChange={ value => onChange({ date: value }) } />
                                </div>
                                <div className={classes.Container}>
                                    <DateRangeFilter
                                        fromLabel='Desde'
                                        toLabel='Hasta'
                                        minDate={moment() }
                                        onChange={ (from, to) => onChange({ from, to }) } />
                                </div>
                                <div className={classes.Container}>
                                    <AutocompleteFilter
                                        className={classes.Autocomplete}
                                        label="Business"
                                        onChange={ value => onChange({ business: value }) }
                                        items={['MostroNet', 'CatShop', 'Pedobear Official Store', 'La Veneciana']}
                                        />
                                    <TooltipButton icon='motorcycle'
                                        tooltip='Clear'
                                        className={classes.Button}
                                        onClick={this.handleClear.bind(this) } />
                                    <TooltipButton icon='rowing'
                                        tooltip='Filter'
                                        className={classes.Button}
                                        onClick={this.updateList.bind(this) } />
                                </div>
                            </div>
                        ) }
                    </Filters>
                </Collapse>
                <List>
                <ListSubHeader caption='Explore characters' />
                    {this.state.items.map(item => (
                        <ListItem key={item.id}
                            itemContent={ <MyListItem {...item} /> }
                            />
                    ))}
                </List>
            </div>
        );
    }
    // <AsyncAutocompleteFilter
    //     label="AsyncAutocomplete"
    //     onChange={ value => onChange({ autocomplete: value }) }
    //     source={param => `https://restcountries.eu/rest/v1/name/${param}`}
    //     transform={res => res.map(r => r.name) }
    //     />
}

export default App;
