
import './styles.css'
import { Tode , TodeList } from './classes'
import { crearTodeHtml } from './js/componentes';

export const todeList = new TodeList();

todeList.todes.forEach( crearTodeHtml );

console.log('todos', todeList.todes);
