import { Tode } from "./todo.class";

export class TodeList {

    constructor(){
        // this.todes = [];
        this.cargarLocalStorage();
    }

    nuevoTode( tde ){
        this.todes.push( tde );
        this.guardarLocalStorage();
    }

    deleteTode( id ){
        this.todes = this.todes.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    controlTode( id ){

        for( const todo of this.todes ){

            if( todo.id == id ){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
                
            }
        }
    }
    
    dropCompletes(){
        this.todes = this.todes.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',  JSON.stringify(this.todes) );
    }

    cargarLocalStorage(){

      this.todes = ( localStorage.getItem('todo') ) ? JSON.parse(localStorage.getItem('todo')) : [];

      this.todes = this.todes.map( Tode.fromJson );
       
    }

}