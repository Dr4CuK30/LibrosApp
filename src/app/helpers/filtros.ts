export class Filtros {
  static libro: Filtro[] = [
    { name: 'Título', value: 'titulo', type: 'text' },
    { name: 'Año', value: 'anho', type: 'number' },
    { name: 'Paginas', value: 'paginas', type: 'number' },
    { name: 'Género', value: 'genero', type: 'text' },
  ];

  static autor: Filtro[] = [
    { name: 'Nombre', value: 'nombre', type: 'text' },
    { name: 'Ciudad', value: 'ciudad', type: 'text' },
    { name: 'Correo', value: 'correo', type: 'email' },
    { name: 'Fecha-nacimiento', value: 'fecha', type: 'date' },
  ];

  static editorial: Filtro[] = [
    { name: 'Nombre', value: 'nombre', type: 'text' },
    { name: 'Dirección', value: 'direccion', type: 'text' },
    { name: 'Correo', value: 'correo', type: 'text' },
    { name: 'Teléfono', value: 'telefono', type: 'text' },
  ];
}
export interface Filtro {
  name: string;
  value: string;
  type: string;
}
