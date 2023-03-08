import { Digimon } from './digimon';
export interface PageableResponse{
    content: Digimon[],
    pageable: Pageable,
    size: number,
    empty: boolean,
    first: boolean,
    last: boolean,
    number: number,
    numberOfElements: number,
    totalElements: number,
    totalPages: number,
    sort: Sort
}

interface Pageable{
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    sort: Sort
}

interface Sort{
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
}