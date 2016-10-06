import http from './http';

import type { Headers } from './http'

class Resource<T> {
    constructor(resource: string, headers: )

    get(): Promise<T[]> {
        return http.get(`${resource}/`)
    }

    show(id: string): Promise<T> {
        return http.get(`${resource}/${id}`)
    }

    post(body: T): Promise<T> {
        return http.post(`${resource}/`, body)
    }

    put(id: string, body: T): Promise<T> {
        return http.post(`${resource}/${id}/`, body)
    }

    remove(id: string): Promise<T> {
        return http.post(`${resource}/${id}/`, body)
    }
}