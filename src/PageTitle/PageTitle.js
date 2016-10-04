// @flow
import React from 'react';
import {
    Glyphicon,
} from 'react-bootstrap';

import './PageTitle.css';

type PageTitleProps = {
    title: string,
    subtitle?: string,
    icon?: Glyphicon.props,
}

const PageTitle = ({title, subtitle, icon}: PageTitleProps) => (
    <div className='PageTitle'>
        <h3 className='PageTitle-title'>
            {icon && <Glyphicon {...icon} className='PageTitle-Glyphicon' /> }
            {" "}
            {title}
        </h3>
        {subtitle && <h4 className='PageTitle-subtitle'>{subtitle}</h4> }

    </div>
)

export default PageTitle