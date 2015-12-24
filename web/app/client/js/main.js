/* Browserify  Require and Template demo
 */

console.log(1)
console.log(2)
console.log(3)
// var swig = require('swig');
// var sw_tpl, sw_html
// sw_tpl = swig.compile(require('tpl/swig.tpl'));
// sw_html = sw_tpl({name:'browserify:swig template', stories: stories});
// elem4.innerHTML = sw_html

// We add the bower_components to path
// var $ = require('../../../bower_components/jquery/dist/jquery')
var $ = require('jquery/dist/jquery')

console.log($)

// require('js/worker2')

// if (window.Worker) {
//     var myWorker = new Worker("js/worker2.js");
//     myWorker.onmessage = function(e){
//         if (typeof e.data == 'object') {
//             $('.' + e.data.name + ' div').append('<span class="log">' + e.data.time + 'ms :' + e.data.num + ' times</span>')
//         } else {
//             console.log(e.data)
//         }
//     }
// } else {
// }
require('js/test')
