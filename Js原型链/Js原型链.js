function Person() {

}
var friend = new Person();//实例中的指针仅指向原型对象，不指向构造函数，记住这点即可
Person.prototype = {
    constructor: Person,
    name: "Noc"
}
console.log(friend.name); //undefined