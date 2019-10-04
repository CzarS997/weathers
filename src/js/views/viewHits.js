import * as base from '../base'
export const renderHits = (obj) => {

const markup = `<li class="eleHit"><span class="cap">${obj.capital}</span>
<span class="coun">${obj.country}</span></li>`;

base.attach.hitEle.insertAdjacentHTML('afterend', markup);
document.querySelector('.eleHit').style.display = 'none';
$('.eleHit').fadeIn();


};