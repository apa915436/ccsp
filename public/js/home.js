(function(){

var addButton = $('#add'),
	chartity_btn = $('#charity');

var item = '<div class="col-sm-4"><div class="thumbnail"><span class="holder"><img src="../img/mouse.png" alt="" width="150px" height="150px"></span><div class="caption"><h3></h3><p></p><p><a href="#" class="btn btn-info">More</a></p></div></div></div>';
var flag = $('.modify');


addButton.click(function(){
  $(item).appendTo(flag);
});

// addButton.on('click', function(){
//   $(item).appendTo(flag).find('h3').text('new item');
// });
// $('#myModal').modal(options);

chartity_btn.click(function(){
    
    $.get(
    './charity',
    {},
    function(){
    $(item).appendTo(flag).find('h3').text('new item');
    $('this').parent('li').addClass('active');
    },
    'json'
  );

});



// load();


// //
// function load(){

//   $.ajax({
//     dataType: 'json',
//     type: 'GET',
//     url: "./supply",
//     success: Insertsupplies,
//   });

//   function Insertsupplies(supplies){
//         // parse the json string
//         supplies.forEach(function(supply){
//           $(item).appendTo(flag).find('h3').text(supply.supply_id)
//         })
//   }
// }

}());