(function(){
	uploadButton = $('#upload');
	console.log("in upload js");
	uploadButton.on('click', function() {
		console.log("upload click");
		var name = document.getElementById("name").value;
		var tel = document.getElementById("tel").value;
		var email = document.getElementById("email").value;
		var item_name = document.getElementById("item_name").value;
		var category = document.getElementById("category").value;
		var amount = document.getElementById("amount").value;
		var credit = document.getElementById("credit").value;
		var face = document.getElementById("face").value;
		var delivery = document.getElementById("delivery").value;
		console.log(name + " " + face  + " " + delivery);

		var new_supply_item = { name : name, 
		tel : tel,
		email : email,
		item_name : item_name,
		category : category,
		amount : amount,
		credit : credit,
		face : face,
		delivery : delivery };

	    $.ajax({
	            type: 'POST',
	            data: new_supply_item,
	            url: '/uploadsupply'
	        }).done(function( response ) {
	            console.log('upload supply');
	        });
	});

}());