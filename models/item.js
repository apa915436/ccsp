var fs = require('fs');
var itemsFilePathname = __dirname + '/items.json';


module.exports.create = function (item, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var items = []
    if (!err) {
      items = JSON.parse(data);
    }
    
    item.id = items.length;
    items.splice(0,0,item);
    for (var i =0; i<items.length; i++){
      items[i].id = i;
    }
    console.log('create success');
    fs.writeFile(itemsFilePathname, JSON.stringify(items), function (err) {
      if (err) { throw err; }

      callback(item);
    });
  });
}

module.exports.delete = function (id, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var items = [], i;
    if (!err) {
      items = JSON.parse(data);
    }

    console.log('deleting',id);
    
    for(i = 0; i< items.length; i++){
      if(items[i].id==id){
        items.splice(i, 1);
      }
    }
     
    for(i = 0; i< items.length; i++){
      items[i].id = i;
    }   

    fs.writeFile(itemsFilePathname, JSON.stringify(items), function (err) {
      if (err) { throw err; }

      callback(items);
    });
  });
}

module.exports.update = function (id, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var items = [], temp;
    var i=0;
    if (!err) {
      items = JSON.parse(data);
    }

    console.log('updating',id);
    items[id].is_done = '1';
    temp = items[id];

    items.splice(id, 1);
    items.splice(items.length, 0, temp);

    console.log(items);

    for(i = 0; i< items.length; i++){
      items[i].id = i;
    } 

    fs.writeFile(itemsFilePathname, JSON.stringify(items), function (err) {
      if (err) { throw err; }

      callback(items);
    });
  });
}

module.exports.load = function (item, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var items = []
    if (!err) {
      items = JSON.parse(data);
    }
    callback(items);
  });
}

module.exports.move = function (id, new_position, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var items = [], temp;
    var i = 0 ; 
    if (!err) {
      items = JSON.parse(data);
    }
    
    console.log('move',id);

    temp = items[id];

    items.splice(id, 1);
    items.splice(new_position, 0, temp);

    console.log(items);

    for(i = 0; i< items.length; i++){
      items[i].id = i;
    } 

    fs.writeFile(itemsFilePathname, JSON.stringify(items), function (err) {
      if (err) { throw err; }

      callback(items);
    });
  }); 
}