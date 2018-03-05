// This is explicitly for the responseHandler
// So we can handle scenarios where the error is part of
// a success call
export interface ServiceResponse {
    response: {};
    error?: {};
}

export interface BookResponse extends ServiceResponse {
    response: {
        books: (Book)[];
    };
}

export interface Book {
    id: number;
    title: string;
    author: string;
}
