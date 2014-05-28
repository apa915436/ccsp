(function(){

var more_btn = $('#more');

//load();

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
            var a = $(item).appendTo(flag);
            a.find('h3').text('latest item'+items[i]._id);
            a.find('h4').addClass('hide').text(items[i]._id);
            // a.find('a').attr('href','item.html');
            a.find('a').attr('id','more');
        }
    }
    );
};


// $('#myModal').modal(options);

}());