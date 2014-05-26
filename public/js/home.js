(function(){

var addButton = $('#add'),
	chartity_btn = $('#charity');

var item = '<div class="col-sm-4"><div class="thumbnail"><span class="holder"><img src="../img/mouse.png" alt="" width="150px" height="150px"></span><div class="caption"><h3></h3><p></p><p><a href="#" class="btn btn-info">More</a></p></div></div></div>';
var flag = $('.modify');

load();

function load(){
    console.log('in load');
    $.get(
        '/latest',
    {},
    function(latests){
        console.log('callback');
        // $(item).appendTo(flag).find('h3').text('new item');
        // $('this').parent('li').addClass('active');
        },
    'json'
    );
};
    
chartity_btn.click(function(){
    console.log('charity button');
    
    $.get(
        '/charity',
    {},
    function(){
    $(item).appendTo(flag).find('h3').text('new item');
    $('this').parent('li').addClass('active');
    console.log('charity');
    },
    'json'
  );
});

addButton.on('click', function(){
  $(item).appendTo(flag).find('h3').text('new item');
});
// $('#myModal').modal(options);



}());