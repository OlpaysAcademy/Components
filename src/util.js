import React from 'react';
import PageTitle from './PageTitle'
import Main from './Main'

import type { MatchComponentProps } from './types'

const getScreenWidth = () => window.innerWidth;

type GeneratePageOptions = {
    subtitle?: string,
    icon?: Glyphicon.props,
    padded?: boolean
}

const generatePage = (
    component: React$Component,
    title: string,
    {subtitle, icon, padded}: GeneratePageOptions = {}
) => (props: MatchComponentProps) => (
    <div>
        <PageTitle title={title} subtitle={subtitle} icon={icon} />
        <Main padded={padded} >
            {component(props)}
        </Main>
    </div>
)

export { getScreenWidth, generatePage }
