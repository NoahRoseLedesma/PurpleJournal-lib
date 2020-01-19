var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "334c2982",
  application_key: "bffdab09177b1c067670cbf31e705be1"
});

textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error: any, response: any) {
    if (error === null) {
      console.log(response);
    }
  });