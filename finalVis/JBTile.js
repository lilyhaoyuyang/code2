

class JBTile extends Tile {

  processData(){

   this.x =[];
   this.y =[];

   this.getAnswers = this.table.getColumn('Do you feel lonely?');



   console.log(this.getAnswers);

   rectMode(CENTER);
 }


 display() {

  background(0);
  fill(60, 63, 62);
  ellipse(450, 450, 300, 300);
  fill(255);
  textSize(35);
  text("Do you feel lonely?", 300, 450);
  //console.log(table.getRow());
  //for (var row : table.rows()) {
  //getColum
  //console.log(table);
  //var n = row.getString("Do you feel lonely?");
  // }
for (var i = 0; i < 14; i++) {
    
    var n = "Yes";//.getString(i, 10);
    var y  =  450+240* sin(24*radians(i));
    var x = 450+240* cos(24*radians(i));
  //y[i]=  450+240* sin(24*radians(i));
    //if (n.equals(y) == true) {
      if (this.getAnswers[i] === 'Yes') {
        fill(77, 160, 110);
        rect(x, y, 70, 70);
        fill(255);
        text("Yes", x-26, y+10);
      } else {
        fill(234, 84, 48);
        ellipse(x, y, 70, 70);
        fill(255);
        text("No", x-20, y+10);
      }
    }






    super.display();

    console.log(this.table);

  }

}
