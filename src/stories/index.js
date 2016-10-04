import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import PageTitle from '../PageTitle';

import '../index.css'

storiesOf('PageTitle', module)
    .add('simple', () => (
        <PageTitle title='Simple' />
    ))
    .add('with icon', () => (
        <PageTitle title='Icon' icon='th' />
    ))
