import { HttpMethod } from './HttpMethod';

export class Request {
    id: string;
    name: string;
    template: string;
    http_method: HttpMethod;

    resource_id: string;

    created_timestamp: string;
    updated_timestamp: string;
}
