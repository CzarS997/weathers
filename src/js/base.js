export const keys = {

    gglKey: 'AIzaSyAKJZ21PHQzpPMtHpUyMUi3Q2b9u3R3jDc',
    darkKey: '607616d1687c28ba3936b200f64118be'
};

export const attach = {

    today: document.querySelector('.weather_today'),
    hitEle: document.querySelector('.head1'),
    eleHit: document.querySelector('.eleHit')
};

export const toNormalTime = (time) => {

    let tempTime = new Date(time * 1000);
    let utcTime = tempTime.toUTCString();
    let final = utcTime.slice(-11, -4);

    return utcTime;

}
