//@flow
export type Business = {
    id: string,
    name: string,
    logo: string,
}

export type NavigationSubItem = {
    label: string,
    route: string
}

export type NavigationItem = {
    icon: string,
    label: string,
    route: string,
    opened?: boolean,
    items?: NavigationSubItem[],
}

type Location = {
    hash: string,
    pathname: string,
    query: { [key: string]: string },
    search: string,
}

export type MatchComponentProps = {
    pattern: string,
    pathname: string,
    isExact: boolean,
    location: Location,
    params: { [key: string]: string }
}

export type ClassNamesParams = string |
    { [className: string]: ?boolean } |
    Array<string> |
    void |
    null