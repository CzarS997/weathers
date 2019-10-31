export const keys = {

    gglKey: 'AIzaSyAKJZ21PHQzpPMtHpUyMUi3Q2b9u3R3jDc',
    darkKey: '607616d1687c28ba3936b200f64118be'
};

export const attach = {

    today: document.querySelector('.weather_today'),
    hitEle: document.querySelector('.head1'),
    eleHit: document.querySelector('.eleHit'),
    eleEveryHit: document.querySelectorAll('.eleHit'),
    arrRight: document.querySelector('.arr_right'),
    arrLeft: document.querySelector('.arr_left'),
    capitals: document.querySelectorAll('.cap'),
    subBtn: document.querySelector('.search-btn'),
    cityValue: document.querySelector('.search_field'),
    mesBox: document.querySelector('.mesBox')
};

export const toNormalTime = (time) => {

    let tempTime = new Date(time * 1000);
    let utcTime = tempTime.toUTCString();
    let final = utcTime.slice(-11, -4);

    return utcTime;
};

export const directions = (direction) => {

    switch(direction){
        case 'S':
            return 'South';
            break;
        case 'N':
            return 'North';
            break;
        case 'E':
            return 'East';
            break;
        case 'W':
            return 'West';
            break;
        case 'SE':
            return 'South-East';
            break;
        case 'NE':
           return 'North-West';
            break;
        case 'SW':
            return 'South-West';
            break;
        case 'NW':
            return 'North-West';
            break;


    }


}

//TO develop ---> only 3 icons have an animation
export const animateIcons = (el) => {

    if($(el).attr("src").includes('clear-day')){

        $(el).css({'animation': 'rotateMe 5s infinite'});
        console.log(`I'm in that block!`);
    }else if($(el).attr("src").includes('cloudy')){

        $(el).css({'animation': 'soWindy 5s infinite'});


    }else if($(el).attr("src").includes('rain')){

        $(el).css({'animation': 'itPersp 5s infinite'});
    }
    else if($(el).attr("src").includes('fog')){

        $(el).css({'animation': 'fogReal 5s infinite'});

    }
    else {

        $(el).css({'animation': 'none'});

    }

};



