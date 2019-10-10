export const checkArr = () => {

    const actMargin = document.querySelector('.forecast_results ul').style.marginLeft;
    const leftArr = document.querySelector('.arr_left');
    const rightArr = document.querySelector('.arr_right');
    const attWidth = document.querySelector('.forecast_results ul li'),
    temp = window.getComputedStyle(attWidth),
    singlWidth = temp.width,
    quatro = Math.round(parseFloat(singlWidth.replace('px', ''))) * 4;
   
    
    

    if((Math.round(parseFloat(actMargin.replace('px',''))) + 'px') === '0px'){

        //leftArr.style.display = 'none';
        console.log(`Block 1`);
        $('.arr_left').css('pointer-events', 'none');
        $('.arr_left').fadeOut();

    } else if((Math.round(parseFloat(actMargin.replace('px',''))) + 'px') === `-${quatro}px`){

        //rightArr.style.display = 'none';
        console.log(`Block 2`);
        $('.arr_right').css('pointer-events', 'none');
        $('.arr_right').fadeOut();
    }
    else{

        console.log(`Block 3`);
        if(leftArr.style.display === 'none'){

            $('.arr_left').fadeIn();
            $('.arr_left').css('pointer-events', 'auto');
            $('.arr_right').css('pointer-events', 'auto');

        } else if(rightArr.style.display === 'none'){

           $('.arr_right').fadeIn(); 
           $('.arr_right').css('pointer-events', 'auto');
           $('.arr_left').css('pointer-events', 'auto');
        }
        else{

        leftArr.style.display = 'inline-block';
        rightArr.style.display = 'inline-block';
        $('.arr_left').css('pointer-events', 'auto');
        $('.arr_right').css('pointer-events', 'auto');

        }
    }
};








