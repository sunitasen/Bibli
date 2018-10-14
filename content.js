console.log('nacho')

var coloraft = '#f7ecd2';
var colormorn = '#e5e0cc';
var color5 = '#efe3b1';
var color6 = '#efe3b1';
var color7 = '#e8c58d';
var color8 = '#e0b672';
var rest = '#ddad5f';
var color ;
document.body.style.backgroundColor = color;



// detectDivChanges() {
//   var div = document.querySelector('.mydiv');
//   var config = { attributes: true, childList: true, subtree: true };
//   var observer = new MutationObserver((mutation) => {
//     console.log("div style changed");
//   })
//   observer.observe(div, config);
// }
// }
var today = new Date();
var time = Number(today.getHours());


console.log((time));
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

var nodelist = document.querySelectorAll("div");
var links  = document.querySelectorAll("a");
var observer = new MutationObserver(function(mutation){

  document.getElementsByTagName("div").style.setProperty('background',color,'important');
  document.getElementsByTagName("a").style.setProperty('color',"#000000",'important');
  document.getElementsByTagName("div").style.setProperty('color',"#000000",'important');

  document.body.style.setProperty('backgroundColor',color,'important');
  document.body.style.setProperty('color',"#000000",'important');
  document_observer.disconnect();

});

// var observer = { attributes: true, childList: true, subtree: true };
observer.observe(document, {
  attributes: true,
  subtree: true,
  attributeFilter: ['class']
});

// observer.observe(nodelist, config);


for(var i=0;i<nodelist.length;++i){
  nodelist[i].style.backgroundColor = color;
  nodelist[i].style.color = "#000000";
}

for(var i=0;i<links.length;++i){
  links[i].style.color = "#000000";
}