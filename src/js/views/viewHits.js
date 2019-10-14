import * as base from '../base';
import Hitproto from '../models/Hitproto';
import { renderLocal } from './viewLocalproto';


export const renderHits = (obj) => {

const markup = `<li class="eleHit"><span class="cap">${obj.capital}</span>
<span class="coun">${obj.country}</span></li>`;

base.attach.hitEle.insertAdjacentHTML('afterend', markup);
document.querySelector('.eleHit').style.display = 'none';
$('.eleHit').fadeIn();

document.querySelector('.eleHit').addEventListener('click', () => { 
    

  // Location string should disappear!  
 $('.curr').fadeOut();  
// Insert new location string
const [city, country] = [$(event.target.children[0]).text(), $(event.target.children[1]).text()]

var markup = `<a href="https://en.wikipedia.org/wiki/${city}" target="_blank">${city}</a>, ${country}`;


 setTimeout(() => {

  //and fadeIn!
  $('.curr').html(markup);
  $('.curr').fadeIn();

 }, 400);



//RESET EVERY ANIMATIONS OF 'CHANGING COLOR'
document.querySelectorAll('.cap').forEach((el) => {

   $(el).css('animation', 'none');
    //el.style.animation = ' ';
    
});

    //Display loader
    $('.weather_today').html('<div class="spinner"></div>');

    //I have to change that --> too static
    $('.spinner').css({'margin-top':'280px','margin-left':'340px'});

    // Turn on animation of color(Selected town will be pulsing)
    $(event.target.children[0]).css('animation', 'colorChanges 1s infinite');
    
    //New city and set Tools
    let hitMe = new Hitproto(obj.capital, obj.country);
    hitMe.setTools();
    hitMe.getSet();

    setTimeout(()=> {

        //Clean area
        $('.weather_today').html('');

       renderLocal(hitMe);
       
    
    }, 1500);


});

};