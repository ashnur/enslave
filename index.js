void function(){
  'use strict'
  module.exports = function(fn){
    return function(){
      return fn.bind(null, this).apply(null, arguments)
   }
  }
}()
