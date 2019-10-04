import DarkSkyApi from 'dark-sky-api';
import * as base from './base';
import Localproto from './models/Localproto';
import { renderLocal } from './views/viewLocalproto';
import * as excel from './excelData';


const state = {};
excel.Capitals();



state.mainW = new Localproto();

state.mainW.setTools();
state.mainW.loadPos();
state.mainW.getLocFor();
setTimeout(()=> {

    if(state.mainW.result){

        renderLocal(state.mainW);

    } else console.log('Cannot read data!');

}, 2000);






/*
let position, xik;
const result = DarkSkyApi.loadForecast(position)
.then(res => {
    
   
    console.log(res);
    
    console.log(res.time);
    let unixTime = res.time;
    let dateObj = new Date(unixTime * 1000);
    let utcString = dateObj.toUTCString();
    console.log(utcString);
    console.log(utcString.toLocaleString());
    
    console.log(res.dateTime._d);

})
.catch(err => alert('Something went wrong with data. Try again later.'));

*/

