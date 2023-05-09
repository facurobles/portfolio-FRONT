export class Educacion {

    id? : number;
    nombreEd : string;
    nivelEd : string;
    periodoEd : string;
    ubicacionEd : string;
    tituloEd : string;

    constructor(nombreEd : string, nivelEd : string,periodoEd  : string,ubicacionEd : string,tituloEd : string){
        this.nombreEd = nombreEd;
        this.nivelEd = nivelEd;
        this.periodoEd = periodoEd;
        this.ubicacionEd = ubicacionEd;
        this.tituloEd = tituloEd;
        }


}
