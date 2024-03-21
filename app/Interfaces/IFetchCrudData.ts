export interface IFetchCrudData {
    urlGeneral: string;
    methods: string ;
    body: string | object | "";
    idParams?: number | string | ""; // Propiedad opcional
}