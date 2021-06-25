import { Autor } from "./autor.interface";
import { Editorial } from "./editorial.interface";

export interface Libro{
    id: number,
    titulo: string,
    anho: number,
    paginas: number,
    genero: string,
    autor?: Autor
    editorial?: Editorial
}