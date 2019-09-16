(function () {
   'use strict';

   const
      router = require('router'),
      appData = require('appData');

   router.get('/', function (req, res) {
      var message = 'Enjoy hacking!';

      res.render('/', {
         message: message
      });
   });
}());