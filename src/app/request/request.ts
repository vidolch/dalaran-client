import { HttpMethod } from './http-method';
import { HttpStatusCode } from './http-status-code';
import { ResponseType } from './response-type';

export class Request {
    id: string;
    name: string;
    path: string;
    template: string;
    http_method: HttpMethod;
    response_type: ResponseType;
    response_code: HttpStatusCode;

    resource_id: string;

    created_timestamp: string;
    updated_timestamp: string;
}
