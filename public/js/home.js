(function(){

var addButton       = $('#add'),
	chartity_btn    = $('#charity'),
    trade_btn       = $('#trade'),
    latest_btn      = $('#latest'),
    cloth_btn       = $('#cloth'),
    house_btn家電   = $('#house'),
    stationary_btn  = $('#stationary'),
    food_btn        = $('#food'),
    furniture_btn   = $('#furniture'),
    3C_btn          = $('#3C'),
    kitchen_btn     = $('#kitchen'),
    clean_btn       = $('#clean'),

var item = '<div class="col-sm-4"><div class="thumbnail"><span class="holder"><img src="../img/mouse.png" alt="" width="150px" height="150px"></span><div class="caption"><h3></h3><p></p><p><a href="#" class="btn btn-info">More</a></p></div></div></div>';
var flag = $('.modify');

load();

function load(){
    console.log('in load');
    $.get(
        '/latest',
    {},
    function(latests){
        $(flag).empty();
        $(item).appendTo(flag).find('h3').text('latest item');
        }
    // ,'json'
    );
};
    
chartity_btn.click(function(){
    console.log('charity button');
    
    $.get(
        '/charity',
    {},
    function(){
        $(flag).empty();
        $(item).appendTo(flag).find('h3').text('charity');
        var a= $(chartity_btn).parent('li');
        a.addClass('active');
        a.prev().removeClass('active');
    }
    // ,'json'
  );
});

trade_btn.click(function(){
    console.log('charity button');
    
    $.get(
        '/latest',
    {},
    function(){
        $(flag).empty();
        $(item).appendTo(flag).find('h3').text('trade');
        var a= $(trade_btn).parent('li');
        a.addClass('active');
        a.next().removeClass('active');
    }
    // ,'json'
  );
});

latest_btn.click(function(){
    console.log('charity button');
    
    $.get(
        '/latest',
    {},
    function(){
        $(flag).empty();
        $(item).appendTo(flag).find('h3').text('trade');
        var a= $(trade_btn).parent('li');
        a.addClass('active');
        a.next().removeClass('active');
        console.log(chartity_btn);
        console.log('charity');
    }
    // ,'json'
  );
});
// $('#myModal').modal(options);



}());