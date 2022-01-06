$(document).ready(function(){

  var  signFlag = false;
  var winWidth = $( window ).width(); 
  var flag =false;;
  $(".sp-menu").on("click",function(){
   
   
      $(".menu.spp").addClass("sp-add-div");
      $(".menu.spp ul").css("display","block");
      $(".menu.spp").slideToggle();
      if(!flag)
      {
        $(".sp-menu span:first-child").css("transform","rotate(45deg)"); 
        $(".sp-menu span:first-child").css("top","14px"); 
        $(".sp-menu span:last-child").css("transform","rotate(-45deg)"); 
        $(".sp-menu span:last-child").css("top","14px"); 
        $(".sp-menu span:nth-child(2)").css("opacity","0");
        flag = true;
      }
      else
      {
        $(".sp-menu span:first-child").css("transform","rotate(0deg)"); 
        $(".sp-menu span:first-child").css("top","5px"); 
        $(".sp-menu span:last-child").css("transform","rotate(0deg)"); 
        $(".sp-menu span:last-child").css("top","21px"); 
        $(".sp-menu span:nth-child(2)").css("opacity","1");
        flag = false;
      }
    

  });



    $(".select-div ul li").on("click",function(){

      var elmId = $(this).attr("id");
          
           if(elmId != "all")
           {
              elmId = "#"+ elmId;
              elmId = ".s2-div-3 " + elmId;
    
              $(".s2-div-3").each(function() {
              $(this).children().hide();
            });
    
            $(elmId).show();
           }
           else
           {
              $(".s2-div-3").each(function() {
                $(this).children().show();
              });
           }
    });

   $(".select-div").on("click",function(){
    $(".kind").slideToggle();
    

    if(!signFlag)
    {
      $(this ).find(">:first-child").html('<p class="font-16">条件を指定して探す<i class="fa fa-minus p-pos"></i></p>');
      signFlag=true;
    }
    else
    {
      signFlag=false;
      $(this ).find(">:first-child").html('<p class="font-16">条件を指定して探す<i class="fa fa-plus p-pos"></i></p>');
    }
  });
  $(".s2-div-2 button").on("click",function(){

    var elmId = $(this).attr("id");

         if(elmId != "all")
         {
            elmId = "#"+ elmId;
            elmId = ".s2-div-3 " + elmId;
  
            $(".s2-div-3").each(function() {
            $(this).children().hide();
          });
  
          $(elmId).show();
         }
         else
         {
            $(".s2-div-3").each(function() {
              $(this).children().show();
            });
         }
  });

  $('.slide1').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 2000,
    slidesToShow: 4,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    dots: false,//下部ドットナビゲーションの表示
    responsive: [
      {
      breakpoint: 1000,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 510,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.3,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
  });



  var anim = function(){
                    
    var st1 = ( $('html').scrollTop() > 0 ) ? $('html').scrollTop() : 0;
    var st2 = ( $('body').scrollTop() > 0 ) ? $('body').scrollTop() : 0;
    var st = ( st1 > st2 ) ? st1 : st2;
    
    $('.anim').each(function(){
        var triggerPos = st + (window.innerHeight*0.65);
        if( triggerPos >= $(this).offset().top && !$(this).hasClass('on') ){
            $(this).addClass('on');
        }
        else if( triggerPos < $(this).offset().top && $(this).hasClass('on') ){
            $(this).removeClass('on');
        }
    });
};

anim();

$(window).scroll(function(){
    anim();
});
  
});
new WOW().init();


