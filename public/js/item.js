(function(){

var addButton       = $('#add'),
	charity_btn    = $('#charity'),   
    trade_btn       = $('#trade'),
    latest_btn      = $('#latest'),     //id=0
    cloth_btn       = $('#cloth'),      //id=1
    house_btn       = $('#house'),      //id=2
    stationary_btn  = $('#stationary'), //id=3
    food_btn        = $('#food'),       //id=4
    furniture_btn   = $('#furniture'),  //id=5
    threeC_btn      = $('#threeC'),     //id=6
    kitchen_btn     = $('#kitchen'),    //id=7
    clean_btn       = $('#clean');      //id=8

var item = '<div class="col-sm-4"><div class="thumbnail"><span class="holder"><img src="../img/mouse.png" alt="" width="150px" height="150px"></span><div class="caption"><h3></h3><p></p><p><a href="#" class="btn btn-info">More</a></p></div></div></div>',
    donate = '<div class="col-sm-4"><div class="thumbnail"><span class="holder"><img src="../img/chair.jpg" alt="" width="150px" height="150px"></span><div class="caption"><h3></h3><p></p><p><a href="#" class="btn btn-info">More</a></p></div></div></div>';
var flag = $('.modify');
var temp = $(latest_btn).parent('li');;
var newitem = {name: 0};
var i=0;
var bool_charity=0;

addButton.click(function(){
    // console.log(newitem.name);
    newitem.name = i++;
    $.ajax({
            type: 'POST',
            data: newitem,
            url: '/create'
        }).done(function( response ) {
            console.log('insert successed');
        });
})

load(0);

function load(cat){
    console.log('in load', cat);
    $.getJSON(
        '/supply/'+cat,
    {},
    function(items){
        // console.log('callback');
        // console.log('items[cat]',items[cat].＿id);
        temp.addClass('active');
        $(flag).empty();
        for(var i=0; i<items.length; i++){
            $(item).appendTo(flag).find('h3').text('latest item'+items[i]._id);
        }
    }
    );
};

function need(cat){
    console.log('in need', cat);
    $.getJSON(
        '/need/'+cat,
    {},
    function(items){
        console.log(items);
        // console.log('items[cat]',items[cat]._id);
        temp.addClass('active');
        $(flag).empty();
        for(var i=0; i<items.length; i++){
            $(donate).appendTo(flag).find('h3').text('latest item'+items[i]._id);
        }
    }
    );
};

function more(id){
    console.log('in more ', id);
    $.getJSON(
        '/more/'+id,
    {},
    function(item){
        console.log(item);
        console.log('item :',items._id);
        temp.addClass('active');
        $(flag).empty();
        for(var i=0; i<items.length; i++){
            $(donate).appendTo(flag).find('h3').text('latest item'+items[i]._id);
        }
    }
    );
};

charity_btn.click(function(){
    bool_charity = 1;
    console.log('charity button',bool_charity);
    need(0);
    var a= $(charity_btn).parent('li');
    a.addClass('active');
    a.prev().removeClass('active');
});

trade_btn.click(function(){
    bool_charity = 0;
    console.log('trade_btn',bool_charity);
    load(0);
    var a= $(trade_btn).parent('li');
    a.addClass('active');
    a.next().removeClass('active');
    temp.removeClass('active');
    // latest_btn.parent('li').addClass('active');
});

latest_btn.click(function(){
    if(bool_charity === 0){
        load(0);
    } 
    else{
      need(0);  
    } 
    console.log('latest', bool_charity)
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});

cloth_btn.click(function(){
    if(bool_charity === 0){
        load(1);
    } 
    else{
      need(1);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
house_btn.click(function(){
    if(bool_charity === 0){
        load(2);
    } 
    else{
      need(2);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
stationary_btn.click(function(){
    if(bool_charity === 0){
        load(3);
    } 
    else{
      need(3);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
food_btn.click(function(){
    if(bool_charity === 0){
        load(4);
    } 
    else{
      need(4);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
furniture_btn.click(function(){
    if(bool_charity === 0){
        load(5);
    } 
    else{
      need(5);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
threeC_btn.click(function(){
    if(bool_charity === 0){
        load(6);
    } 
    else{
      need(6);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
kitchen_btn.click(function(){
    if(bool_charity === 0){
        load(7);
    } 
    else{
      need(7);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
clean_btn.click(function(){
    if(bool_charity === 0){
        load(8);
    } 
    else{
      need(8);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
})


// $('#myModal').modal(options);

}());