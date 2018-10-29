// detect the protocol
const PROTOCOL = window.location.protocol;

// settings in local storage
var storage = chrome.storage.local;

// silly checking.. lol
console.log('its working');


// different colors for different times of the day
var coloraft = '#f7ecd2';
var colormorn = '#e5e0cc';
var color5 = '#efe3b1';
var color6 = '#efe3b1';
var color7 = '#e8c58d';
var color8 = '#e0b672';
var rest = '#ddad5f';
var color ;
document.body.style.backgroundColor = color;

// getting date
var today = new Date();
var time = Number(today.getHours());

// Setting colors.. simple
if(time>=4 && time<12){
  color = colormorn;
}else if(time>=12  && time<17){
  color =coloraft;
}else if(time>=17 && time<18){
  color = color5;
}else if(time>=18 && time<19){
  color = color6;
}else if(time>=19 && time<20){
  color = color7;
}else if(time>=20 && time<23){
  color = color8;
}else{
  color = color8;
}

// get all those static elements. Example the whole background except the cards and text
var nodelist = document.querySelectorAll("div");
var links  = document.querySelectorAll("a");

// changing color of backgrounds and links of static components
for(var i=0;i<nodelist.length;++i){
    nodelist[i].style.backgroundColor = color;
    nodelist[i].style.color = "#000000";
  }
  
for(var i=0;i<links.length;++i){
  links[i].style.color = "#000000";
}

//Observe for every card added to the dom -> jquery
var mutationObserver = new MutationObserver(function(mutations) {

  mutations.forEach(function(mutation) {

    let value = mutation.target;
    
    // select all of those cards which appear in the reading area
    if($(value).hasClass("paged_list_wrapper")){
      let save = value;
      let numberofchild = save.childElementCount;
      var child = save.childNodes;
   
      for(let i=0;i<numberofchild;++i){
        
        //remove those annoying ads! removed shares even! those are irrelevant and annoying
        if(($(child[i]).find("*").hasClass("AnswerStoryBundle"))===false && 
          ($(child[i]).find("*").hasClass("AskQuestionPromptBundle"))===false &&
          ($(child[i]).find("*").hasClass("QuestionStoryBundle"))===false &&
          ($(child[i]).find("*").hasClass("SuggestedUsersBundle"))===false &&
          ($(child[i]).find("*").hasClass("SuggestedTopicsBundle"))===false &&
          document.location.pathname =="/"
        ){  
          $(child[i]).remove();
          continue;
        }   

        // setting the colour and text and a weird border to every answer card
        child[i].style.backgroundColor = color;
        $(child[i]).find("*").css("background-color", color);
        $(child[i]).find("*").css("color","#000000" );
        $(child[i]).css("border","solid black 1px");
        child[i].style.setProperty('background-color',color,'important');
        

      }      
    }
  });
});


// elements to effect by mutation
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

// recieve the closing time from popup.js
chrome.runtime.onMessage.addListener(dothis);

function dothis(message,sender,sendresponse){

  // converting all time to seconds
  let nh = message.hour, nm = message.minu;

  let givenTime = ((nh *3600) +(nm*60))*1000;
  let alertTime = givenTime - 30000;
  console.log(alertTime)

  console.log(message.id)


  setTimeout(function(){
    
    // send message to popup.js
    chrome.runtime.sendMessage({closeThis: true});
    
  },alertTime)  

}

















