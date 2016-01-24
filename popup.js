
document.addEventListener('DOMContentLoaded', function()
{
  var checkPageButton = document.getElementById('button');
  checkPageButton.addEventListener('click', function()
  {
    chrome.tabs.getSelected(null, function(tab)
    {
      if (tab.url.substring(0,32) == "https://www.youtube.com/watch?v="){
        analyzeSentiment(tab.url.substring(32));
      } else {
        //clear variables
      }

      document.getElementById("cssload-container").style.display = "block";

    });
  }, false);
}, false);

function analyzeSentiment(id){
  $.post("http://gateway-a.watsonplatform.net/calls/text/TextGetTargetedSentiment",
  {
    apikey: "333b896bab5331c1150333c9b03f376e3256e4b9",
    text: dict[0],
    target: document.getElementById('search').value
  },
  function(res){
    if (res.docSentiment.score > 30){
      //positive
      $('#button').css("background-color","#B0FF00");
    } else if (res.docSentiment.score < 0-30) {
      //negative
      $('#button').css("background-color","#FF3333");
    } else {
      //neutral
      $('#button').css("background-color","#00AFA9");
    }
  }
);
}

function postmates(){
  $.ajax('POST','https://api.postmates.com/v1/customers/cus_KVBWQMV9Xc80AF/deliveries',{
    'params': {
      'pickup_address': '20 McAllister St, San Francisco, CA',
      'pickup_name': 'sargent hall',
      'pickup_phone_number': '2023650490',
      'manifest': 'box of stuff',
      'dropoff_address': '101 Market St, San Francisco, CA',
      'dropoff_name': 'slivka hall',
      'dropoff_phone_number': '2023650490'
    },
    'headers': {'Authorization':'Basic MDBhNzRkOWYtNjNjYy00ZTY3LTg2ZjMtNzYzOTM5ZjU3YmRmOg=='}
  },function(error,response) {
      if(error){
        console.log(error);
      } else {
        console.log(response);
      }
    });
  }

var dict = {
  //id :
};
