export abstract class HttpAdapter {

    /* Algo muy genérico
    abstract get(url:string, options: any): Promise<any>; */

    abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;

}