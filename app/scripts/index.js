console.log("Hello World!");
(function(){
  'use strict';
  let $ = require('jquery');
  let handlebars = require('handlebars');
  //var token = require('./githubToken.js').token;
  init();


  // Compiles the template created in the
  // index with handlebars, then inserts it under
  // the container div
  function displayUserInfo(userInfo){
    var $basicInfo = $('#basic-info');
    var $theStory = $('#the-story');
    var source = $('#card-template').html();
    var template = handlebars.compile(source);
    console.log(template(userInfo));
    $('.container').html(template(userInfo));

  }
  function init(){

// Token for when authentication is needed

  /*  if(token){
    var options = {
      headers: {
        'Authorization': 'token ' + token
      }
    };
  }else{var options = {};
}*/
  // Fetches and returns an api with data about
  // the chosen GitHub user
  fetch('https://api.github.com/users/IanHelt'/*, options*/).then(function(response){
    return response.json();
  }).then(function(data){
    console.log(data);
    displayUserInfo(data);
  });
  }

}());
