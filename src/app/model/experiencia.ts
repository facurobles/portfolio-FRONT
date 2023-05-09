export class Experiencia {

    id? : number;
    nombreE : string;
    empresaE : string;
    periodoE : string;
    ubicacionE : string;
    descripcionE : string;

    constructor(nombreE : string, empresaE : string,periodoE : string,ubicacionE : string,descripcionE : string){
        this.nombreE = nombreE;
        this.empresaE = empresaE;
        this.periodoE = periodoE;
        this.ubicacionE = ubicacionE;
        this.descripcionE = descripcionE;
        }


}
