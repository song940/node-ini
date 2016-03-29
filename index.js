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
 * [exports description]
 * @type {[type]}
 */
module.exports = INI;
