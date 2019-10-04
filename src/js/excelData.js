import XLSX from 'xlsx';
import * as hits from './views/viewHits';

export const Capitals = () => {

    //fast request to server
    var url = "Capitals.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = (e) => {

        //assign data from xlsx to variable
        const info = readData();
        const capExpo = [];
        for(var j = 0; j < 10; j++){

            capExpo.push(info[Math.round(Math.random() * 200)]);
            
            
        }
        capExpo.forEach((el) => {

            hits.renderHits(el);
        });

        return capExpo;
   
    function readData(){

    var arraybuffer = oReq.response;
    /* convert data to binary string */
    var data = new Uint8Array(arraybuffer);
    var arr = new Array();
    for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

    /* Call XLSX */
    var workbook = XLSX.read(bstr, {type:"binary"});

    /* DO SOMETHING WITH workbook HERE */
    var first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    var alpha = XLSX.utils.sheet_to_json(worksheet,{raw:true});

    return alpha;

        }

    }

   oReq.send();
    console.log('Data received! ;)');
};

export const randCap = () => {






};