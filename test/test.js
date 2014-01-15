void function(){
  'use strict'
  var test = require('tape')
  var enslave = require('../index.js')
  test('on an identity function', function(t){
    var id = function(val){ return val }
      , o  = { id: enslave(id) }
    t.equal(o, o.id())
    t.end()
  })
}()
