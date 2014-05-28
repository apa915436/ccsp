(function(){

var item = '<div class="col-sm-4"><div class="thumbnail"><span class="holder"><img src="../img/mouse.png" alt="" width="150px" height="150px"></span><div class="caption"><h3></h3><h4></h4><a class="btn btn-info more">More</a></div></div></div>',
    donate = '<div class="col-sm-4"><div class="thumbnail"><span class="holder"><img src="../img/chair.jpg" alt="" width="150px" height="150px"></span><div class="caption"><h3></h3><h4></h4><a class="btn btn-info more">More</a></div></div></div>',
    detail = '<div class="col-sm-5"><img class="item_img_size" src="../img/closet.jpg"></div><h3></h3><h4></h4><p class="item_description"></p><button class="btn buy_btn" data-toggle="modal" data-target="#dealModal">我要交換</button></div></div></div>';

var addButton       = $('#add'),
    charity_btn     = $('#charity'),   
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

var flag = $('.modify');
var temp = $(latest_btn).parent('li');;
var newitem = {item_name:'a', catogory: 0};
var i=0;
var bool_charity=0;

addButton.click(function(){
    // console.log(newitem.name);
    newitem.catogory = i++;
    $.ajax({
            type: 'POST',
            data: newitem,
            url: '/create'
        }).done(function( response ) {
            console.log('insert successed');
        });
})

load(0, moreListener);

function load(cat, bind){
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
            var a = $(item).appendTo(flag);
            // var href = '/item/'+bool_charity+'/'+items[i]._id;
            console.log(items[i]._id);
            a.find('h3').text(items[i].item_name);
            // a.find('h4').text('Credit:' items[i].credit);
            a.find('a').attr('data-id', items[i].supply_id);
            // a.find('a').attr('href', href);
        }
        bind();
    }); 
    
};

function need(cat,bind){
    console.log('in need', cat);
    $.getJSON(
        '/need/'+cat,
    {},
    function(items){
        console.log('need get',items);
        temp.addClass('active');
        $(flag).empty();
        for(var i=0; i<items.length; i++){
            var a = $(donate).appendTo(flag);
            a.find('h3').text(items[i].item_name);
            a.find('a').attr('data-id', items[i].need_id);
        }
        bind();
    });
};

function more(charity, id){
    console.log('in more', id);
    $.getJSON(
        '/item/'+charity+'/'+id,
    {},
    function(item){
        console.log('more get',item);
        $(flag).empty();
        var a = $(detail).appendTo(flag);
        a.find('h3').text(item.item_name);
        a.find('h4').text('credit:' + item.credit);
        a.find('p').text('Descripttion:' + item.description);
    }
    );
};

function moreListener(){       
    $('.more').click(function(){
        // console.log('more button click');
        var id = $( this ).data('id');
        console.log(id);
        more(bool_charity,id);
    });
}

charity_btn.click(function(){
    bool_charity = 1;
    console.log('charity button',bool_charity);
    need(0, moreListener);
    var a= $(charity_btn).parent('li');
    a.addClass('active');
    a.prev().removeClass('active');
});

trade_btn.click(function(){
    bool_charity = 0;
    console.log('trade_btn',bool_charity);
    load(0, moreListener);
    var a= $(trade_btn).parent('li');
    a.addClass('active');
    a.next().removeClass('active');
    temp.removeClass('active');
    // latest_btn.parent('li').addClass('active');
});

latest_btn.click(function(){
    if(bool_charity === 0){
        load(0, moreListener);
    } 
    else{
      need(0, moreListener);  
    } 
    console.log('latest', bool_charity)
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});

cloth_btn.click(function(){
    if(bool_charity === 0){
        load(1, moreListener);
    } 
    else{
      need(1, moreListener);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
house_btn.click(function(){
    if(bool_charity === 0){
        load(2, moreListener);
    } 
    else{
      need(2, moreListener);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
stationary_btn.click(function(){
    if(bool_charity === 0){
        load(3, moreListener);
    } 
    else{
      need(3, moreListener);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
food_btn.click(function(){
    if(bool_charity === 0){
        load(4, moreListener);
    } 
    else{
      need(4, moreListener);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
furniture_btn.click(function(){
    if(bool_charity === 0){
        load(5, moreListener);
    } 
    else{
      need(5, moreListener);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
threeC_btn.click(function(){
    if(bool_charity === 0){
        load(6, moreListener);
    } 
    else{
      need(6, moreListener);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
kitchen_btn.click(function(){
    if(bool_charity === 0){
        load(7, moreListener);
    } 
    else{
      need(7, moreListener);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});
clean_btn.click(function(){
    if(bool_charity === 0){
        load(8, moreListener);
    } 
    else{
      need(8, moreListener);  
    }
    temp.removeClass('active');
    temp = $(this).parent('li');
    temp.addClass('active');
});


// $('#myModal').modal(options);

}());