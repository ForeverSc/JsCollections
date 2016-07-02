function Person(name,age){
  this.name=name;
  this.age=age;
}

function Child(name,age,school){
  Person.call(this,name,age);
  this.school=school;
}

Child.prototype=new Person();
Child.prototype.constructor=Person;
Child.prototype.play=function(){
  console.log("haha");
}