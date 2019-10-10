import  * as base from '../base'

import {checkArr} from './check'

export const scrollS = {

    scrollRight: () => {

        
       //$('.arr_left').prop('disabled', false);
       
       
        $(document).ready(() => {

            
            const forResult = $('.forecast_results ul li');
            const forecast_width =  (forResult.width() + 1);
            const actMargin = document.querySelector('.forecast_results ul').style.marginLeft;
            if(actMargin === ''){ $('.arr_left').fadeOut(); };
            console.log(actMargin);
            $('.arr_right').click(() => {
            

                
                
                if(forResult.css("margin-left") == forecast_width + "px" && !forResult.is(':animated')){
            
                   $('.forecast_results ul').animate({"margin-left": '+=' + forecast_width});
                   console.log(`Scrolled right! 1`);
                    //Don't click so fast!
                    $('.arr_right').css('pointer-events','none'); 

                }else{
            
                    if(!forResult.is(':animated')){
            
                        $('.forecast_results ul').animate({"margin-left": '-=' + forecast_width});
                        console.log(`Scrolled right! 2`);
                        //Don't click so fast!
                        $('.arr_right').css('pointer-events', 'none');                      

                    }
                }

                    //After slide, check the arrow
                    setTimeout(checkArr,400);

                    });
                });



    },


    scrollLeft: () => {

       

        $(document).ready(() => {



            const forResult = $('.forecast_results ul li');
            const forecast_width =  (forResult.width() + 1);
            
            $('.arr_left').click(() => {
            

                
                if(forResult.css("margin-left") == forecast_width + "px" && !forResult.is(':animated')){
            
                   $('.forecast_results ul').animate({"margin-left": '-=' + forecast_width});
                   console.log(`Scrolled left! 1`);
                    //Don't click so fast!
                    $('.arr_left').css('pointer-events', 'none');

                }else{
            
                    if(!forResult.is(':animated')){
            
                        $('.forecast_results ul').animate({"margin-left": '+=' + forecast_width});
                        console.log('Scrolled left! 2');
                        //Don't click so fast!
                        $('.arr_left').css('pointer-events', 'none');
                    }
                }

                    //After click and slide, check the arrow
                    setTimeout(checkArr,400);
               
                });
            });




    

    }

};



