
module.exports = runfor

function runfor(arr, ms) {
  return run

  function* eventually(fn) {
    var whatever
    for(var i = 0, len = arr.length; i < len; ++i) {
      fn(arr[i], i, arr)
      whatever = yield 0
    } 
  }

  function inner_run(gen, ready) {
    var value
      , done
      , now
      , tmp

    var last = Date.now()

    while(!done) {
      tmp = gen.next()
      done = tmp.done
      now = Date.now()
      if(now - last > ms) {
        return setImmediate(function() {
          inner_run(gen, ready)
        }) 
      }
    }

    return ready()
  }

  function run(fn, ready) {
    var gen = eventually(fn)

    return inner_run(gen, ready)
  }
}


