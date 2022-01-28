
export class Tode {

    static fromJson( { id, tarea , completado , creado } ){

        const todoTemp      = new Tode( tarea );
        todoTemp.id         = id;
        todoTemp.completado = completado;
        todoTemp.creado     = creado;

        return todoTemp;

    }

    constructor( tarea ){

        this.tarea      = tarea;
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
        
    }

    pintarClase(){
        console.log(`${ this.tarea } - ${ this.id }`);
    }

}