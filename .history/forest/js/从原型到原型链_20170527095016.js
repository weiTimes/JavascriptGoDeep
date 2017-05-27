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
 */
Person.prototype.name = 'yewei';
let person1 = new Person();
let person2 = new Person();
console.log(person1.name);
console.log(person2.name);


