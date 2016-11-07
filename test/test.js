const fs     = require('fs');
const assert = require('assert');
const INI    = require('..');

describe('INI', function(){
  
  it('INI.parse', function(){
    
    var obj = new INI('./test/test.ini');
    
    assert.equal('LIU SONG', obj.user.name);
    assert.equal('song940@gmail.com', obj.user.email);
    assert.equal('checkout', obj.alias.co);
    
  });
  
})