(function(){
	var form = document.getElementById('uploadform');
	var fileSelect = document.getElementById('pic_upload');
	var uploadButton = document.getElementById('upload');
	form.onsubmit = function(event) {
  		event.preventDefault();
  		// Update button text.
  		uploadButton.innerHTML = '上傳中...';
  		// Get the selected files from the input.
		var files = fileSelect.files;
		// Create a new FormData object.
		var formData = new FormData();
		var file = file[0];
		// Check the file type.
		if (!file.type.match('image.*')) {
    		continue;
  		}
  		// Add the file to the request.
  		formData.append('photos[]', file, file.name);
  		// Set up the request.
		var xhr = new XMLHttpRequest();
		// Open the connection.
		xhr.open('POST', '/uploadsupply', true);
		// Set up a handler for when the request finishes.
		xhr.onload = function () {
		  if (xhr.status === 200) {
		    // File(s) uploaded.
		    uploadButton.innerHTML = '已上傳';
		  } else {
		    alert('An error occurred!');
		  }
		};
		// Send the Data.
		xhr.send(formData);
	}
})