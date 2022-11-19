export class Student {
    controlnumber: string;
    name: string; //requerida
    curp: string; //requerida
    age: number; //mayor e 17
    nip: number; //de 10 en adelante
    email: string; //requerido y tenga la extructurww correcta
    career: string; //requerida, lista seleccionable
    photo?: string; //requerida y que siga un aexpresion regular crorracta de URL
}
