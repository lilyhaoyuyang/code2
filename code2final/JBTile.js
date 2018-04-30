class JBTile extends Tile {
  // "Do you feel lonely?"
  processData() {
    //make a counter for each response type
    this.lonelyYes = 0;
    this.lonelyN0 = 0;

    //get all the response to that question
    //the useful method here is getColum

    this.lonelyAnswers = this.table.getColum('Do you feel lonely?');
    console.log(this.lonelyAnswers);

    //conpara each answer to thr string'yes'
    //increment counter as appropriate

    for (let i = 0; i <this.lonelyAnswers.length; i ++) {
      if (this.lonelyAnswe[i] ==='Yes') {
        this.lonelyYes++;
      }
      else {
        this.lonely.lonelyNO++;
      }
    }
    console.log(this.lonelyYes);
  }
}


display() {
  noStroke();

  // call super class' display method so we get our
  // clean matrix and translation
  super.display();

  console.log(this.table);
}

}