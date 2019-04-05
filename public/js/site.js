$(function() {

  function getTemplates() {
    var templates = [];
    
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: "https://trumbowyg.herokuapp.com/api/templates",
        success: function(data){
          //console.log(data); 
          resolve(data);
          //$("body").text(data);
        }
      });
    });
    return templates;
  }

  async function init() {
    $('#trumbowyg-demo')
    .trumbowyg({
      btns: ['mittemplate', 'emoji'],
      plugins: {
        templates: await getTemplates()
      }
    });
  }

 init();

});
