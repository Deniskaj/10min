var transparent=true;var transparentMain=true;var fixedTop=false;var navbar_initialized,backgroundOrange=false,toggle_initialized=false;$(document).ready(function(){$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();$('[data-toggle="popover"]').each(function(){color_class=$(this).data('color');$(this).popover({template:'<div class="popover popover-'+ color_class+'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'});});uiKit.initNavbarImage();$navbar=$('.navbar[color-on-scroll]');scroll_distance=$navbar.attr('color-on-scroll')||500;if($('.navbar[color-on-scroll]').length!=0){uiKit.checkScrollForTransparentNavbar();$(window).on('scroll',uiKit.checkScrollForTransparentNavbar)}
$('.form-control').on("focus",function(){$(this).parent('.input-group').addClass("input-group-focus");}).on("blur",function(){$(this).parent(".input-group").removeClass("input-group-focus");});$('.bootstrap-switch').each(function(){$this=$(this);data_on_label=$this.data('on-label')||'';data_off_label=$this.data('off-label')||'';$this.bootstrapSwitch({onText:data_on_label,offText:data_off_label});});if($(window).width()>=992){big_image=$('.page-header-image[data-parallax="true"]');$(window).on('scroll',uiKitMain.checkScrollForParallax);}
$('.carousel').carousel({interval:4000});});$(window).on('resize',function(){uiKit.initNavbarImage();});$(document).on('click','.navbar-toggler',function(){$toggle=$(this);if(uiKit.misc.navbar_menu_visible==1){$('html').removeClass('nav-open');uiKit.misc.navbar_menu_visible=0;$('#bodyClick').remove();setTimeout(function(){$toggle.removeClass('toggled');},550);}else{setTimeout(function(){$toggle.addClass('toggled');},580);div='<div id="bodyClick"></div>';$(div).appendTo('body').click(function(){$('html').removeClass('nav-open');uiKit.misc.navbar_menu_visible=0;setTimeout(function(){$toggle.removeClass('toggled');$('#bodyClick').remove();},550);});$('html').addClass('nav-open');uiKit.misc.navbar_menu_visible=1;}});uiKit={misc:{navbar_menu_visible:0},checkScrollForTransparentNavbar:debounce(function(){if($(document).scrollTop()>scroll_distance){if(transparent){transparent=false;$('.navbar[color-on-scroll]').removeClass('navbar-transparent');}}else{if(!transparent){transparent=true;$('.navbar[color-on-scroll]').addClass('navbar-transparent');}}},17),initNavbarImage:function(){var $navbar=$('.navbar').find('.navbar-translate').siblings('.navbar-collapse');var background_image=$navbar.data('nav-image');if($(window).width()<991||$('body').hasClass('burger-menu')){if(background_image!=undefined){$navbar.css('background',"url('"+ background_image+"')").removeAttr('data-nav-image').css('background-size',"cover").addClass('has-image');}}else if(background_image!=undefined){$navbar.css('background',"").attr('data-nav-image',''+ background_image+'').css('background-size',"").removeClass('has-image');}},initSliders:function(){var slider=document.getElementById('sliderRegular');noUiSlider.create(slider,{start:40,connect:[true,false],range:{min:0,max:100}});var slider2=document.getElementById('sliderDouble');noUiSlider.create(slider2,{start:[20,60],connect:true,range:{min:0,max:100}});}}
var big_image;uiKitMain={checkScrollForParallax:debounce(function(){var current_scroll=$(this).scrollTop();oVal=($(window).scrollTop()/ 3);
big_image.css({'transform':'translate3d(0,'+ oVal+'px,0)','-webkit-transform':'translate3d(0,'+ oVal+'px,0)','-ms-transform':'translate3d(0,'+ oVal+'px,0)','-o-transform':'translate3d(0,'+ oVal+'px,0)'});},6)}
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;clearTimeout(timeout);timeout=setTimeout(function(){timeout=null;if(!immediate)func.apply(context,args);},wait);if(immediate&&!timeout)func.apply(context,args);};};
/*
     FILE ARCHIVED ON 22:26:19 Jan 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:58:25 Mar 28, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 72.308 (3)
  esindex: 0.01
  captures_list: 96.285
  CDXLines.iter: 17.07 (3)
  PetaboxLoader3.datanode: 100.197 (4)
  exclusion.robots: 0.21
  exclusion.robots.policy: 0.196
  RedisCDXSource: 2.567
  PetaboxLoader3.resolve: 20.125
  load_resource: 66.788
*/