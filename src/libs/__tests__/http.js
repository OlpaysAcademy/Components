import HTTP from '../http';
import nock from 'nock';

describe('HTTP Lib', () => {
    it('should make a GET request successfully', () => {
        nock('https://www.whattimeisit.com', {
            reqheaders: {
                'Content-Type': 'application/json'
            }
        })
            .get('/')
            .reply(200, { time: 'Sunflower Time!' });

        const http = new HTTP();
        return http.get('https://www.whattimeisit.com')
            .then(res => {
                expect(res).toEqual({ time: 'Sunflower Time!' });
            });
    });

    it('should make a GET request with custom headers successfully', () => {
        nock('https://www.whattimeisit.com')
            .matchHeader('custom-header', 'rawr')
            .get('/')
            .reply(200, { time: 'Sunflower Time!' });

        const http = new HTTP({ 'custom-header': 'rawr' });
        return http.get('https://www.whattimeisit.com')
            .then(res => {
                expect(res).toEqual({ time: 'Sunflower Time!' });
            });
    });

    it('should make a POST request successfully', () => {
        nock('https://www.pimp.com')
            .post('/new', { id: 1, body: 'Dimelo delante de ella' })
            .reply(200, { description: 'Cállate, por favor' });

        const http = new HTTP();
        return http.post('https://www.pimp.com/new', { id: 1, body: 'Dimelo delante de ella' })
            .then(res => {
                expect(res).toEqual({ description: 'Cállate, por favor' });
            });
    });

    it('should make a PUT request successfully', () => {
        nock('https://www.boop.com')
            .put('/boop/1', { id: 1, description: 'Update this' })
            .reply(200, { id: 1, description: 'Update this', status: 'succcess' });

        const http = new HTTP();
        return http.put('https://www.boop.com/boop/1', { id: 1, description: 'Update this' })
            .then(res => {
                expect(res).toEqual({ id: 1, description: 'Update this', status: 'succcess' });
            });
    });
});