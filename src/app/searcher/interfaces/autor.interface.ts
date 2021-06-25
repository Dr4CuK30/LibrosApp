import { Libro } from "./libro.interface";

export interface Autor{
    id: number,
    nombre: string,
    ciudad: string,
    correo: string,
    fecha: Date,
    libros?: Libro[]
}