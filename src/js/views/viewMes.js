import * as base from '../base';
export const showMess = () => {

    const markup = 'Type <span>appropriate</span> values!';

    $('.mesBox').html(markup);
    $('.mesBox').fadeIn();
    $('.search-btn').css('pointer-events', 'none');

    setTimeout(() => {

        $('.mesBox').fadeOut();
        $('.search-btn').css('pointer-events', 'auto');
    }, 3000);

};

export const showCity = () => {

$(document).ready(() => {

$('.curr').fadeOut();
setTimeout(() => {

const value = $('.weather_today').text();
const valArr = value.split(' ');
const [capital, country] = [valArr[5], valArr[6]];

const name = `<a href="https://en.wikipedia.org/wiki/${capital.replace(',', '')}" target="_blank">${capital}</a> ${country}`;
$('.curr').html(name);
$('.curr').fadeIn();

}, 400);


});


}