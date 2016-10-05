// @flow
import React from 'react';
import classNames from 'classnames'
import {
    Glyphicon,
} from 'react-bootstrap';

import './PageTitle.css';

type PageTitleProps = {
    actions?: React$Element<{}>,
    icon?: Glyphicon.props,
    title: string,
    subtitle?: string,
}

const PageTitle = ({
    actions,
    title,
    subtitle,
    icon,
}: PageTitleProps) => (
        <div className={classNames('PageTitle', { 'PageTitle--has-actions': !!actions }) }>
            <div className='PageTitle-wrapper'>
                <h3 className='PageTitle-title'>
                    {icon && <Glyphicon {...icon} className='PageTitle-Glyphicon' /> }
                    {" "}
                    {title}
                </h3>
                {subtitle && <h4 className='PageTitle-subtitle'>{subtitle}</h4> }
            </div>
            {actions &&
                <div className='PageTitle-actions'>
                    {actions}
                </div> 
            }
        </div>
    )

export default PageTitle