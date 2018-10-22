console.log('its working');

var coloraft = '#f7ecd2';
var colormorn = '#e5e0cc';
var color5 = '#efe3b1';
var color6 = '#efe3b1';
var color7 = '#e8c58d';
var color8 = '#e0b672';
var rest = '#ddad5f';
var color ;
document.body.style.backgroundColor = color;

var today = new Date();
var time = Number(today.getHours());


//console.log((time));
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

for(var i=0;i<nodelist.length;++i){
    nodelist[i].style.backgroundColor = color;
    nodelist[i].style.color = "#000000";
  }
  
for(var i=0;i<links.length;++i){
links[i].style.color = "#000000";
}

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    let value = mutation.target;
    if($(value).hasClass("paged_list_wrapper")){
      let save = value;
      let numberofchild = save.childElementCount;
      var child = save.childNodes;
      //console.log(child[0].style.backgroundColor)   
      for(let i=0;i<numberofchild;++i){

        child[i].style.backgroundColor = color;
        $(child[i]).find("*").css("background-color", color);
        $(child[i]).find("*").css("color","#000000" );
        child[i].style.setProperty('background-color',color,'important');
        //child[i].style.setProperty('cssText','back','important');
        console.log(child[i]);

      }      
    }
  });
});

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
