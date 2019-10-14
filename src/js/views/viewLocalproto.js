import Localproto from '../models/Localproto';
import * as base from '../base';

export const renderLocal = (obj) => {

    /*
    THERE SHOULD BE SOME FUNCTION, WHICH WILL PROVIDE CONTROL OF ERRORS
    IN CASE OF UNEXPECTED ICON, SVG -> MORE ON https://darksky.net/dev/docs#forecast-request

    */
    /* MAIN SCREEN SECTION */
    let conv = obj.gglData.plus_code.compound_code.split(' ');
       
    let xd = obj.result.daily.updatedDateTime._d + ' ';
    console.log(xd);
    const temp = xd.split(' ');
    let upd = temp[1] + ' ' + temp[2] + ' ' + temp[3] + ' ' + temp[4];
    let tmz = temp[5];

    let markUpper = `<img class="g_icon" role="img" title="${obj.result.daily.icon}" src="../../img/${obj.result.daily.icon }.svg"></br>
    City: ${conv[1] + ' ' + conv[2]}</br>
    Timezone: ${obj.result.timezone}  (${tmz}) </br>
    Summary of week: ${obj.result.daily.summary} 
    </br>
    Last update: ${upd}</br>
    `;
    base.attach.today.innerHTML = markUpper;
    // Fade in text
    base.attach.today.style.display = 'none';
    $('.weather_today').fadeIn();

    base.animateIcons('.g_icon');
    
    /********************************* FORECAST(DAYS) SECTION ****************************************/

        const items = document.querySelectorAll('.forecast_results li'), tab = [];
        let i = 0, short = obj.result.daily.data;
        items.forEach((el) => {

        let bee = base.toNormalTime(short[i].temperatureHighTime) + ' ';
        let theta = bee.split(' '); 

        let markup = `<div class="bush"><span>${theta[0] + ' ' + theta[1] + ' ' + theta[2] + ' ' + theta[3]}</span></br>
        <img class="f_icon" src="../img/${short[i].icon}.svg" alt="It's raining man!"></br>
        ${short[i].summary} </br>Max temp: ${short[i].temperatureHigh} &#176;C 
        </br>Min Temp: ${short[i].temperatureLow} &#176;C</br>
        Wind speed: ${short[i].windSpeed}, direction: ${base.directions(short[i].windDirection)}</div>`;

        el.innerHTML = markup;
        i++;
        el.style.display = 'none';
        $(el).fadeIn();
        /*********************** ADD EVENT LISTENER -> CLICK: DISPLAY ON 'BIG SCREEN' **************/

        el.addEventListener('click', () => {

            
            let temp = $('.weather_today');
            // INNER HTML
            temp.html(markup);
            //REMOVE AND ADD CLASS
            $('.f_icon').first().removeClass().addClass('g_icon');
            $('.bush').first().css('display', 'none');
            $('.bush').first().fadeIn();
           base.animateIcons('.g_icon');

        });


    });


};




