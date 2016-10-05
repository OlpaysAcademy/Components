//@flow
import React from 'react';
import PageTitle from '../PageTitle'
import Main from '../Main'

type LayoutProps = {
    actions?: React$Element<{}>,
    children?: React$Element<{}>, 
    icon?: string,
    padded?: boolean,
    subtitle?: string,
    title: string,
} 

const Layout = ({
    actions,
    children,
    icon,
    padded,
    subtitle,
    title,
}: LayoutProps) => (
    <div>
        <PageTitle title={title} subtitle={subtitle} icon={icon} actions={actions} />
        <Main padded={padded} >
            { children }
        </Main>
    </div>
)

export default Layout