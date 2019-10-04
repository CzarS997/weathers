import DarkSkyApi from 'dark-sky-api';
import * as base from '../base';

export default class Localproto{


    // Setting up tools
    setTools(){ 
    DarkSkyApi.apiKey = base.keys.darkKey;
    DarkSkyApi.proxy = false;
    DarkSkyApi.units = 'si';
    DarkSkyApi.postProcessor = (item) => {
    item.day = item.dateTime.format('ddd');
    return item;
    };

}
    //Load current position
    loadPos(){
    DarkSkyApi.loadPosition()
    .then(pos => {

        this.position = pos;
    })
    .catch((err) => alert('Cannot load current position :/'));
}

    getLocFor(){

        DarkSkyApi.loadForecast(this.position)
        .then(res => { 

            console.log(res);
            this.result = res;
            
            $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+ res.latitude + "," + res.longitude + "&sensor=false&key=" + base.keys.gglKey, (data) => {

                this.gglData = data;
                console.log(this.gglData);
                //console.log('Californication!');
                
            })
        })
        .catch((err)=> 
        {
            base.attach.today.innerHTML = '';
        let markup = `<p class="par1" style="display: none;">Some problems appeared ;/</p>`;
        console.log(`Something went wrong!\n${err}`);
        base.attach.today.insertAdjacentHTML('beforeend', markup);
        $('.par1').fadeIn();

        })

    }

};