// STATIC = keyword that defines properties or methods that 
//  belong to a class itself rather than the objects created from that class
//  (class owns anthing static, not the objects)
class MathUtil{
    static PI = 3.14;

    // static methods
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumfrence(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius *radius
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumfrence(10));  

// another example
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}
