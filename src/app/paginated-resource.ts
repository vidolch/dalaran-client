export class PaginatedResource<T> {
    contents: T[];
    page: number;
    size: number;
    total_size: number;
}
