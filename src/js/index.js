import DarkSkyApi from 'dark-sky-api';
import * as base from './base';
import Localproto from './models/Localproto';
import Hitproto from './models/Hitproto';
import { renderLocal } from './views/viewLocalproto';
//import {displayHit} from './views/viewHitproto';
import * as excel from './excelData';
import { scrollS } from './views/scrollForecast';



const state = {};
excel.Capitals();
//Set arrows to scroll

scrollS.scrollLeft();
scrollS.scrollRight();
/******************LOCAL WEATHER SECTION ***************/

state.mainW = new Localproto();
// SET TOOLS
state.mainW.setTools();
state.mainW.loadPos();
state.mainW.getLocFor();

setTimeout(()=> {

    if(state.mainW.result){

        renderLocal(state.mainW);

    } else console.log('Cannot read data!');

}, 2000);


//CLICK BUTTON TO FIND WEATHER IN SOME AREA!
base.attach.subBtn.addEventListener('click', () => {

const searchField = document.querySelector('.search_field');
let input = searchField.value;
console.log(input);

let arrLoc = input.split(',');
console.log(arrLoc);
arrLoc[1].replace(' ', '');

//To DO:
//Do something, when input is incorrect (not: Town, Country)

state.cityW = new Hitproto(arrLoc[0], arrLoc[1]);
state.cityW.setTools();
state.cityW.getSet();


setTimeout(()=> {

    if(state.cityW.result){

        renderLocal(state.cityW);

    } else console.log('Cannot read data!');

}, 2000);


//Clean search field 
searchField.value='';


});




