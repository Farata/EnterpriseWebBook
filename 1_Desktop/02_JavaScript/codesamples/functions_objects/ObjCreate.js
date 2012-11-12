// {  // If a Web browser doesn’t support Object.create
               Object.create = function (o) {
            
              var F = function () {};
              F.prototype = o;
              return new F();
        };
//}
var person = { lastName: "",               firstName: ""};

var p1=Object.create(person);
p1.lastName="Smith";
p1.firstName="Joe";

var p2=Object.create(person);
p2.lastName="Lou";
p2.firstName="Mary";

console.log("p1.lastName="+ p1.lastName);

console.log("p2.lastName="+ p2.lastName);