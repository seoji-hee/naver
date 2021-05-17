$(function(){       
    $('#upBtn').click(function(){
     $('html,body').animate({scrollTop:0},0); 
    
    });
 });

/*nav_menu tab*/
/*되는것*/
  $(document).ready(function(){
     $('.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
     $('.tabs li').removeClass('current');
     $('.news_tab').removeClass('current');
       $(this).addClass('current');
          $("#"+tab_id).addClass('current');
   
       }); 
     });

/*뉴스스탠드*/
  $(document).ready(function(){
     $('.nav_menu .on_tab').click(function(){
      var tab_i = $(this).attr('data-tab');
     $('.nav_menu .on_tab').removeClass('b_current');
     $('.news_tab').removeClass('current');
       $(this).addClass('b_current');
          $("#"+tab_i).addClass('current');
   
       }); 
     });
/*-----------오늘 읽을만한 글----------*/

$(document).ready(function(){
      $('.news li').click(function(){
        var tab_id_02 = $(this).attr('data-tab');
     $('.news li').removeClass('c_current');
    
     $('.tab-content').removeClass('current');
       
          $(this).addClass('c_current');
         
      $("#"+tab_id_02).addClass('current');
      
      }); 
    });
/*article content*/

/*1_동물공감 더보기*/

 $(function(){
    $(".article_box_more").slice(0,1).show();
     $("#more_icon").click(function(e){
          e.preventDefault();
    $('.article_box_more:hidden').slice(0,5).show();
  if($('.article_box_more:hidden').length==0);
  
         });
     });

/*예시*/

 $(function(){
    $(".감춰져 있는 div").slice(0,1).show();
     $("#더보기 아이콘 아이디명").click(function(e){
        e.preventDefault();
    $('.감춰져 있는 div:hidden').slice(0,5).show();
         if($('.감춰져 있는 div:hidden').length==0);
     });
 });
/*1_여행*/

     $(function(){
        $(".article_box_more.trip").slice(0,2).show();
         $("#more_icon_trip").click(function(e){
            e.preventDefault();
     $('.article_box_more.trip:hidden').slice(0,5).show();
        if($('.article_box_more.trip:hidden').length==0);
         });
     });
/*1_연애 더보기*/

 $(function(){
    $(".article_box_more.cuple").slice(0,1).show();
     $("#more_icon_cuple").click(function(e){
          e.preventDefault();
    $('.article_box_more.cuple:hidden').slice(0,5).show();
  if($('.article_box_more.cuple:hidden').length==0);
  
         });
     });
/*1_디자인 더보기*/

 $(function(){
    $(".article_box_more.degin").slice(0,1).show();
     $("#more_icon_degin").click(function(e){
          e.preventDefault();
    $('.article_box_more.degin:hidden').slice(0,5).show();
  if($('.article_box_more.degin:hidden').length==0);
  
         });
     });

/*더보기버튼*/

function plus() {        document.getElementById("myDropdown").classList.toggle("show");
}
  window.onclick = function(event) {
    if (!event.target.matches('.plus')){
     
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i=0; i < dropdowns.length; i++) {
        var openDP = dropdowns[i];
        if(openDP.classList.contains('show')){
            openDP.classList.remove('show');
           }
       }
    }
}
/*트렌드 쇼핑> 넘기기: 되는 것*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex +=n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("trend_shopping");
    
    if( n > slides.length) {slideIndex = 1}
    if(n<1){slideIndex = slides.length}
    for(i=0; i<slides.length; i++){
        slides[i].style.display="block";
    }
    slides[slideIndex-1].style.display="none";
    
}

/*https://suusuus.tistory.com/29*/

/*공지사항 롤링
https://m.blog.naver.com/PostView.nhn?blogId=ddo_gun&logNo=220815915190&proxyReferer=https:%2F%2Fwww.google.com%2F
*/

	
/*https://m.blog.naver.com/PostView.nhn?blogId=ddo_gun&logNo=220815915190&proxyReferer=https:%2F%2Fwww.google.com%2F*/

  /*증권 코스피*/

/*
var cospi = 1;
cospiSlides(cospi);

function plusSlides(n){
    cospiSlides(cospi +=n);
}
function cospiSlides(n){
    var s;
    var slide = document.getElementsByClassName("div");
    
    if( n > slide.length) {cospi = 1}
    if(n<1){cospi = slide.length}
    for(s=0; s<slide.length; s++){
        slide[s].style.display="none";
    }
    slide[cospi-1].style.display="block";
    
}
*/





















  
