/**
 * [INI description]
 * @param {[type]} obj [description]
 * @wiki https://en.wikipedia.org/wiki/INI_file
 */
function INI(obj){
  return this;
};
/**
 * [EOL end of line]
 * @type {String}
 */
INI.EOL = '\r\n';
/**
 * [function stringify]
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
INI.stringify = function(input){
  var output = [];
  for(var section in input){
    output.push('['+ section +']');
    var items = input[ section ];
    for(var key in items){
      var value = items[ key ];
      if(Array.isArray(value)){
        value.forEach(function(v){
          output.push([ key + '[]', v ].join('='));
        });
      }else{
        output.push([ key, value ].join('='));
      }
    }
  }
  return output.join(INI.EOL);
};
/**
 * [function parse]
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
INI.parse = function(input){
  var output = {}, section;
  input.split(/\r|\n/).filter(function(line){
    return line && !/^[;|#]/ig.test(line);
  }).forEach(function(line){
    if(/^\[.*\]$/.test(line)){
      section = line.replace(/\[|\]/g, '');
    }else{
      var kv = line.split('=');
      (output[ section ] ||
      (output[ section ] = {}))[
          String(kv[0]).trim()
      ] = String(kv[1]).trim();
    }
  });
  return output;
};

/**
 * [exports description]
 * @type {[type]}
 */
module.exports = INI;
