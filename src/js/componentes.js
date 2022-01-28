
// Referencias HTML
import { todeList } from '../index'
import { Tode } from "../classes";

const divTodeList   = document.querySelector('.todo-list');
const inputTxt      = document.querySelector('.new-todo');
const btnDelete     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltres = document.querySelectorAll('.filtro')

export const crearTodeHtml = ( tode ) => {

    const htmlTode = `
    <li class="${ (tode.completado) ? 'completed' : ''}" data-id="${ tode.id }">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (tode.completado) ? 'checked' : ''}>
			<label>${ tode.tarea }</label>
			<button class="destroy"></button>
		</div>
	    <input class="edit" value="Create a TodoMVC template">
	</li>`;
    

    const div = document.createElement('div');
    div.innerHTML = htmlTode;

    divTodeList.append( div.firstElementChild );

    return div.firstElementChild;

}

// Eventos 

inputTxt.addEventListener('keyup', ( evento )=>{

	if( evento.keyCode === 13  && inputTxt.value.length > 0 ){

		console.log( inputTxt.value );
		const newTode = new Tode( inputTxt.value );
		todeList.nuevoTode( newTode );

		crearTodeHtml( newTode );

		inputTxt.value = '';
	}
});

divTodeList.addEventListener('click', ( event ) =>{

	const nameElement = event.target.localName; // input -- label -- button
	const todoElemet  = event.target.parentElement.parentElement;
	const todoId      = todoElemet.getAttribute('data-id')

	if( nameElement.includes('input')) { // click en chekbox
		todeList.controlTode( todoId );
		todoElemet.classList.toggle('completed');
	} else if( nameElement.includes('button') ){ // borrar todo
		todeList.deleteTode( todoId );
		divTodeList.removeChild( todoElemet );
	}

});


btnDelete.addEventListener('click', () => {

	todeList.dropCompletes();
	
	for( let i = divTodeList.children.length - 1 ; i >= 0; i--){

		const element = divTodeList.children[i];

		if( element.classList.contains('completed') ){
			divTodeList.removeChild( element );
		}
	}

});

ulFiltros.addEventListener('click', ( evento )=>{
	
	const filter = evento.target.text;
	if( !filter ) { return; }

	anchorFiltres.forEach( element => element.classList.remove('selected') );
	evento.target.classList.add('selected');

	for( const elemento of divTodeList.children ){

		elemento.classList.remove('hidden');
		const complete = elemento.classList.contains('completed');
		
		switch( filter ){

		case 'Pendientes':
			if( complete ){
				elemento.classList.add('hidden');
			}
		break;

		case 'Completados':
			if( !complete ){
				elemento.classList.add('hidden');
			}
		break;

		}
	}

});
