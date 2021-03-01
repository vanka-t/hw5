//country abbrevations teaken from = https://abbreviations.yourdictionary.com/articles/country-abbreviations.html

var url = "https://api.nationalize.io/?name=vanessa"
abbrevations = [];
countries = [];
// var albania;
// var france;
// var italy;

var table;

var main = "https://api.nationalize.io/?"
var emri = "name=vanessa" //"emri" means name in albanian
var name_data;
var input;
var results = {}

var x, y;



function preload() {
var url = main + emri;
results = loadJSON(url, loadName);
table = loadTable('assets/accHW5_2.csv', 'csv', 'header');
// albania = loadImage("assets/alb.png");
// france = loadImage("assets/fr.gif");
// italy = loadImage("assets/it.png");
}

function loadName(){
    name_data = results;
    for (let i = 0; i < name_data.length; i++) {
    }

}
function setup() {
    createCanvas(windowWidth,windowHeight);
    print(url);
    var button = select('button');
    input = select('#emri');   
    button.mousePressed(newName);   
    
    for(var row=0; row<table.getRowCount(); row++){
        for(var col=1; col<table.getColumnCount()-1; col++){
          countries.push(new CountryName(table.getString(row, col), col));
        }
      }
}

function newName() {
    emri = "name=" + input.value();
    var url = main + emri;
    loadJSON(url, loadName);
}

class CountryName{
constructor(abbrevation, country){
this.abbrevation = table.getString(row,"abbrevation" );
this.country = table.getString(row,"country" );
this.x;
this.y;

}

 connect(){
   this.x = map(name_data.probability,0,1,0,width);
 this.y = map(name_data.probability,0,1,0,height);
  
     textSize(100);
     stroke(random(0,15));
     strokeWeight(3);
     for( var z =0; z<name_data.length; z++){
    if(name_data.country[0].country_id == this.abbrevation[z]) {
        text(this.country[z],this.x,this.y);
    }
}
//     var z;
//     if(abbrevation[z]){
//         countries[z];
//     }
 }

}


function draw() {
    background(125,29,265);
    newName();
    for(var i=0; i<countries.length; i++){
        countries[i].connect();
      }


    // if (name_data.country[0].country_id == "AL"){
    //     image(albania,x,y);
    // } else if(name_data.country[0].country_id == "FR"){
    //     image(france,x,y);
    // }
    // if(name_data.country[0].country_id == "IT"){
    //     image(italy,2*x,y);
    // }
}