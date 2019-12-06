(function () {
   'use strict';

   const
      router = require('router'),
      appData = require('appData');

   router.get('/', function (req, res) {

      res.render('/', {
         message: 'Enjoy hacking!'
      });
   });
}());