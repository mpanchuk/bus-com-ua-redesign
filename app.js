var http = require('http')
  , parse = require('url').parse
  , join = require('path').join
  , fs = require('fs')
  , root = __dirname;

var server = http.createServer(function(req, res){
  var url = parse(req.url)
    , path = join(root, url.pathname == '/' ? '/index.html' : url.pathname)
  fs.stat(path, function(err, stat){
    if (err) {
      if ('ENOENT' == err.code) {
        res.statusCode = 404;
        res.end('Not Found');
      } else {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    } else {
      res.setHeader('Content-Length', stat.size);
      var stream = fs.createReadStream(path);
      stream.pipe(res);
      stream.on('error', function(err){
        res.statusCode = 500;
        res.end('Internal Server Error');
      });
    }
  });
});

server.listen(3000);