(function (win,config){
        config.div ='<div id="zoom_clipboard_314159265" style="cursor:pointer;background-color:rgb(173,255,254);border:1px solid;border-color:#92CDCC;text-transform:none;visibility:visible;white-space:normal;word-break:normal;word-spacing:normal;z-index:999999;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:0px;border-bottom-right-radius:0px;box-shadow:none;-webkit-box-shadow:none;background-attachment:scroll;text-align:left;text-indent:0px;widows:2;opacity:1!important;display:block!important;border-top-width:10px!important;border-bottom-width:10px!important;border-right-width:10px!important;border-left-width:10px!important;position:absolute!important;left:0px;top:0px;overflow-x:hidden!important;overflow-y:hidden!important;width:1306px;height:226px;"></div>';
       
            config.main=function(){
                var cloneStyle= function(o){};
                  
                $('body').append(config.div);
                $('#zoom_clipboard_314159265').hide();
                $('*').mouseenter(function(e){
                       var t_width =$(this).width();
                       var t_heigth =$(this).height();
                    if ($(this).attr('id')=='zoom_clipboard_314159265')return;
                    if (t_width>500 && t_heigth>600) return;
                    if ($(this).html().length<=0)return; 
                   
                      $('#zoom_clipboard_314159265').empty();
                      $('#zoom_clipboard_314159265').show();
                      $('#zoom_clipboard_314159265').stop(true,true);
                
                       var X = $(this).offset().top; 
                       var Y = $(this).offset().left;
                       var self =$(this);
                      var styles = cloneStyle(self[0]);
                      var copyThis = $(this).clone();
                      
                     $('#zoom_clipboard_314159265').append(copyThis);
                     $('#zoom_clipboard_314159265').animate({width:t_width,height:t_heigth,top:X,left:Y});
                     $('#zoom_clipboard_314159265').unbind('click');
                     $('#zoom_clipboard_314159265').click(function(){
                       alert($(this).html());
                      return false;
                     });
                       return false;
                   
                });
             };
               if (!win.JQuery){
                       var script = win.document.createElement('script');  
                           script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';  
                           script.onload =script.onreadystatechange
                                         =function(){
                                        if(!this.readyState || this.readyState=='loaded' || this.readyState=='complete')
                                            {config.main()}                         
                                         };
                           win.document.body.appendChild(script);  

               }else
               {
                alert(2222);
               
               }
        })(window,{})