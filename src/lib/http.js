import superagent from 'superagent';
import _ from 'lodash';

export default class HTTP {
    constructor(field, value) {
        this.headers = {};
        if(!field) return;
        this.setHeaders(field, value);
    }
    get(url) {
        return superagent
            .get(url)
            .set(this.headers)
            .then((res, err) => {
                return res.body;
            });
    }
    post(url, body) {
        return superagent
            .post(url)
            .send(body)
            .set(this.headers)
            .then((res, err) => {
                return res.body;
            });
    }
    put(url, body) {
        return superagent
            .put(url)
            .send(body)
            .set(this.headers)
            .then((res, err) => {
                return res.body;
            });
    }
    setHeaders(field, value) {
        if (_.isObject(field)) {
            _.forOwn(field, (val, key) => { this.setHeaders(key, val) });
            return;
        }
        this.headers[field] = value;
        return;
    }
}
