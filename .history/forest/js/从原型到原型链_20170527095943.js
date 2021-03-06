/**
 * 构造函数创建对象
 * 
 */
function Person() {

}
/**
 * 原型
 * 函数 | 对象(Person)的prototype指向实例(person1, person2)的原型
 * 每个函数 | 对象在创建的时候都会关联原型，然后从原型'继承'属性
 * 
 * 实例person1, person2实例  实例原型 Person.prototype
 * _proto_ 指向实例原型，即Person.prototype
 */
Person.prototype.name = 'yewei';
let person1 = new Person();
let person2 = new Person();
// console.log(person1.name); // yewei
// console.log(person2.name); // yewei
// console.log(person1.__proto__ === Person.prototype); // true

// constructor
// 每个原型都有一个constructor属性指向与之关联的构造函数(Person)
// console.log(Person === Person.prototype.constructor);
console.log(Person.prototype);
console.log(person1.__proto__);




