(function(){

var addButton       = $('#add'),
	chartity_btn    = $('#charity'),   
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

var item = '<div class="col-sm-4"><div class="thumbnail"><span class="holder"><img src="../img/mouse.png" alt="" width="150px" height="150px"></span><div class="caption"><h3></h3><p></p><p><a href="#" class="btn btn-info">More</a></p></div></div></div>';
var flag = $('.modify');

// cat.length = 9;

load(0);

function load(cat){
    console.log('in load', cat);
    $.get(
        '/supply/'+cat,
    {},
    function(items){
        $(flag).empty();
        $(item).appendTo(flag).find('h3').text('latest item'+cat);
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
    console.log('trade button');
    
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
    load(0);
});

cloth_btn.click(function(){
    load(1);
});
house_btn.click(function(){
    load(2);
});
stationary_btn.click(function(){
    load(3);
});
food_btn.click(function(){
    load(4);
});
furniture_btn.click(function(){
    load(5);
});
threeC_btn.click(function(){
    load(6);
});
kitchen_btn.click(function(){
    load(7);
});
clean_btn.click(function(){
    load(8);
})


// $('#myModal').modal(options);

}());