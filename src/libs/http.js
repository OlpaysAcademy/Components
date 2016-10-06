// @flow
import _ from 'lodash';
import superagent from 'superagent';

export type Headers = {
    [header: string]: string|number
}

type Body = {
    [key: string]: any
}

export default class HTTP {
    headers: Headers

    constructor(headers?: Headers) {
        this.headers = {
            'Content-Type': 'application/json'
        };
        if (!headers) {
            return;
        }
        this.setHeaders(headers);
    }

    get<T>(url: string): Promise<T> {
        return superagent
            .get(url)
            .set(this.headers)
            .then((res, err) => {
                return res.body;
            });
    }

    post<T>(url: string, body: Body): Promise<T> {
        return superagent
            .post(url)
            .send(body)
            .set(this.headers)
            .then((res, err) => {
                return res.body;
            });
    }

    put<T>(url: string, body: Body): Promise<T> {
        return superagent
            .put(url)
            .send(body)
            .set(this.headers)
            .then((res, err) => {
                return res.body;
            });
    }

    remove<T>(url: string): Promise<T> {
        return superagent
            .delete(url)
            .set(this.headers)
            .then((res, err) => {
                return res.body;
            })
    }

    setHeaders(fieldOrHeaders: Headers|string, value?: string|number) {
        if (typeof fieldOrHeaders === 'object') {
            _.forOwn(fieldOrHeaders, (val, key) => { this.setHeaders(key, val) });
            return;
        }
        if (value) {
            this.headers[fieldOrHeaders] = value;
            return;
        }
        throw new Error('Bad Parameters')
    }
}