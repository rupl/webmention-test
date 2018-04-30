var Microformats = require('microformat-node');
var options = {};
var fetch = require('node-fetch');
var util = require('util');

(async function () {
  const res = await fetch('https://rupl.github.io/webmention-test/notes/1-elcotillo/');
  const html = await res.text();
  options.html = html;
  options.filter = ['h-entry'];
  options.textFormat = 'normalised';

  Microformats.get(options, function(err, data){
    console.log(util.inspect(data.items[0], false, null));
  });
})();
