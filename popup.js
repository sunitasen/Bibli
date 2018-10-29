var hostName = "";
var clickFlag = "off";

let hr,min;

//  main event listner 
document.getElementById("submit").addEventListener("click",function(){
  hr = document.getElementById("hr");
  min = document.getElementById("min");
  console.log(hr.value);
  console.log(min.value)
  
  
  //  this function will send the hour and time values to content.js
  chrome.tabs.query({active:true},function(arr){
    // created an object to send all data easily
    var limit={
      hour: hr.value,
      minu: min.value,
      id: arr[0].id
    }
    console.log(arr[0].id)
    chrome.tabs.sendMessage(arr[0].id,limit);
  })
  

})


// will recieve message from content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(message.closeThis){
    var opt = {
      type: "basic",
      title: "Auto Tab Close in 2 Minutes",
      message: "Wrap Up! Closing in 30 seconds",
      iconUrl:"./images/get_started128.png"
    }
    
    // create random id name, so next notification displays: on 11/3/13, bug prevents same id from displaying on later popups
    let randID = Math.floor((Math.random()*100000)+1);
    randID = randID.toString();
    
    chrome.notifications.create(randID, opt, creationCallback);			
    
    function creationCallback() {			
      // hide the notification after 6 seconds
      setTimeout(function(){
        chrome.notifications.clear(randID, clearCallback);	
      }, 6000);
    }
    
    function clearCallback() {
      // do nothing				
    }
    setTimeout(function(){
    chrome.tabs.remove(sender.tab.id);
    },30000)
  }


   
});



