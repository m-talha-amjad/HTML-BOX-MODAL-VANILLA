$(document).ready(function(){

$(".offers_item_hover").click(function(){

if ( $(this).parent().hasClass("resturant-offers_inner") ) {
    $(this).wrapAll('<div id="myModal" class="cmodal"/><div id="caption"/>');
}
      // $(this).addBack().wrapAll('<div id="myModal" class="cmodal"/><div id="caption"/>');


  });

});