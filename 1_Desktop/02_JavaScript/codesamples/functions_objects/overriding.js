//var title="Boss";
//var name="Anna";

function Person(name, title){

  this.name=name;
  this.title=title;
  this.subordinates=[];
}          


Person.prototype.addSubordinate=function(person){

   this.subordinates.push(person);
   console.log("I'm in addSubordinate on prototype " + this);
}

Person.prototype.toString=function(){
   return "name:" + name +", title:" + title;
   // return "name:" + this.name +", title:" + this.title;
}

var p1=new Person("Joe", "President");

    p1.addSubordinate=function(person){

     this.subordinates.push(person);
    console.log("I'm in addSubordinate in object " + this);
  }

var p2 = new Person("Mary", "Manager")

    p1.addSubordinate(p2); 