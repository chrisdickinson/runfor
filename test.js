var runfor = require('./index')
  , concat = require('concat-stream')
  , fs = require('fs')

fs.createReadStream('/dev/urandom', {
    start:0
  , end: 1024 * 1024
}).pipe(concat(nommed))

function nommed(data) {


  var eventually = runfor(data, 10)
    , count = {}

  eventually(find_substr, function() {
    console.log(count)
  })

  setInterval(function() {
    console.log('hey')
  }, 100)

  function find_substr(item, idx, all) {
    for(var i = idx; i < all.length; ++i) {
      if(all[i] === item) {
        count[item] = count[item] || 0
        ++count[item]
      }
    }
  } 
}
