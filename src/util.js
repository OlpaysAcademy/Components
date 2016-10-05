import React, {createElement} from 'react';
import Layout from './Layout'

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
    <Layout
        title={title}
        subtitle={subtitle}
        icon={icon}
        padded={padded} >
            { createElement(component, props) }
    </Layout>
)

export { getScreenWidth, generatePage }
