import { Libro } from "./libro.interface";

export interface Editorial{
    id: number,
    nombre: string,
    direccion: string,
    correo: string,
    telefono: string,
    max_libros?: number,
    total_libros: number
    libros?: Libro[]
}