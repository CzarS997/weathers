import * as base from '../base';
import DarkSkyApi from 'dark-sky-api';


export default class Hitproto{

    constructor(city, country){

        this.city = city;
        this.country = country;
    }

    setTools(){

    DarkSkyApi.apiKey = base.keys.darkKey;
    DarkSkyApi.proxy = false;
    DarkSkyApi.units = 'si';
    DarkSkyApi.postProcessor = (item) => {
    item.day = item.dateTime.format('ddd');
    return item;

        }
    }

    getSet(){

        $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.city}, ${this.country}&key=${base.keys.gglKey}`, (data) => {

           // this.gglData = data;
           // console.log(this.gglData);
            
            this.latitude = data.results[0].geometry.location.lat;
            this.longitude = data.results[0].geometry.location.lng;
            this.position = {
                latitude: this.latitude,
                longitude: this.longitude
            };

            DarkSkyApi.loadForecast(this.position)
            .then (res => {
                console.log(res);                
                this.result = res; 
            })
            .catch(err => console.log(`Something went wrong ;/ ${err}`));

        });

        setTimeout(() => {

            $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+ this.latitude + "," + this.longitude + "&sensor=false&key=" + base.keys.gglKey, (data) => {

                this.gglData = data;
                console.log(this.gglData);
                //console.log('Californication!');
                
            })


        }, 1000);
    }
/*
    getCapFor(){

        DarkSkyApi.loadCurrent(this.position)




    }
*/

};