$(function() {

$.ajax({
  type: "GET",
  url: "https://trumbowyg-api.herokuapp.com/api/templates",
  success: function(data){
     $("body").text(data);
  }
});


  $('#trumbowyg-demo')
  .trumbowyg({
      btns: ['mittemplate'],
      plugins: {
          templates: [
              {
                  name: 'Template 1',
                  html: '<p>I am a template!</p>'
              },
              {
                  name: 'Template 2',
                  html: '<p>I am a different template!</p>'
              }
          ]
      }
  });


});
