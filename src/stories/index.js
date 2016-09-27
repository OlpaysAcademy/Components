import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Filters from '../Filters';
import SelectFilter from '../SelectFilter';

storiesOf('Filters', module)
    .add('a simple example', () => (
        <Filters onChange={action('Filters Changed') }>
            {onChange => (
                <SelectFilter
                    name="status"
                    options={['first', 'second']}
                    onChange={value => onChange({ status: value }) }
                    />

            )}
        </Filters>
    ));

storiesOf('SelectFilter', module)
    .add('with Array<string>', () => (
        <SelectFilter
            onChange={action('Select Changed') }
            name="strings"
            options={['first', 'second']} />
    ))
    .add('with Array<{value: string, message?: string}>', () => {
        return (<SelectFilter
            name="objects"
            onChange={action('Select Changed') }
            options={[
                { value: '1', message: 'first' },
                { value: '2' },
            ]} />)
    });

