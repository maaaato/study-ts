"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfArray = void 0;
var sumOfArray = function (numbers) {
    return numbers.reduce(function (a, b) { return a + b; });
};
exports.sumOfArray = sumOfArray;
var triangle = function (base, height) {
    return base * height / 2;
};
console.log(triangle(2, 2));
// let Counter = function(){
//     let _this = this;
//     _this.count = 0;
//     setInterval(function(){
//         _this.count++;
//     }, 1000);
// };
// let Counter2 = () => {
//     this.count = 0;
//     setInterval(() => { this.count++;}, 1000);
// };
// Counter();
// Counter2();
// voidは値がないことを意味する
function greet(name) {
    console.log("hello");
}
greet("hoge");
// neverは決してありえないことを意味する型
// function hoge(): never{
//     throw new Error("Error is occured.");
// }
// hoge();
// 省略可能な引数
function showTime(time) {
    return '現在時刻:' + time.toLocaleString();
}
showTime(new Date());
function show(value) {
    if (typeof value === 'number') {
        console.log(value.toFixed(0));
    }
    else {
        console.log(value ? 'true' : 'false');
    }
}
show(10.355);
show(false);
// classを書いてみる
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        return this.name + " \u306F" + this.age + "\u6B73\u3067\u3059";
    };
    return Person;
}());
var p = new Person('帝王', 30);
console.log(p.show());
// console.log(p.name); // privateなのでアクセス不可
/* static メンバー
https://qiita.com/M-ISO/items/7120db767cd539f1c58a
https://future-architect.github.io/typescript-guide/class.html
>静的メソッドが便利そうな唯一のケースとしては、インスタンスを作る特別なファクトリーメソッドを実装するぐらいでしょうか。 次のクラスは図形の点を表現するクラスですが、 polar() メソッドは極座標を使って作成するファクトリーメソッドになっています。

```
class Point {
  // 通常のコンストラクタ
  constructor(public x: number, public y: number) {}

  // 極座標のファクトリーメソッド
  static polar(length: number, angle: number): Point {
    return new Point(
      length * Math.cos(angle),
      length * Math.sin(angle));
  }
}

console.log(new Point(10, 20));
console.log(Point.polar(10, Math.PI * 0.25));
```

>静的なプロパティを使いすぎると、複製できないクラスになってしまい、テストなどがしにくくなります。 あまり多用することはないでしょう。
*/
var Figure = /** @class */ (function () {
    function Figure() {
    }
    Figure.circle = function (redius) {
        return redius * redius * this.PI;
    };
    Figure.PI = 3.14;
    return Figure;
}());
console.log(Figure.PI);
Figure.PI = 3.00;
console.log(Figure.PI);
var Point = /** @class */ (function () {
    // 通常のコンストラクタ
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // 極座標のファクトリーメソッド
    Point.polar = function (length, angle) {
        return new Point(length * Math.cos(angle), length * Math.sin(angle));
    };
    return Point;
}());
console.log(new Point(10, 20));
console.log(Point.polar(10, Math.PI * 0.25));
/*
継承
*/
var BusinesPerson = /** @class */ (function (_super) {
    __extends(BusinesPerson, _super);
    function BusinesPerson(name, age, clazz) {
        var _this = _super.call(this, name, age) || this;
        _this.clazz = clazz;
        return _this;
    }
    BusinesPerson.prototype.show = function () {
        return _super.prototype.show.call(this) + (this.clazz + "\u3067\u3059");
    };
    BusinesPerson.prototype.work = function () {
        return this.name + "\u306F\u30C6\u30AD\u30D1\u30AD\u50CD\u304D\u307E\u3059";
    };
    return BusinesPerson;
}(Person));
var b = new BusinesPerson('帝王', 40, '主任');
console.log(b.show());
console.log(b.work());
/*
抽象メソッド
オーバーライドを派生クラスで上書き「しなければならない」ようにする
abstractが付いている場合、派生クラスではオーバーライドが必須になる
*/
var Figures = /** @class */ (function () {
    function Figures(width, height) {
        this.width = width;
        this.height = height;
    }
    return Figures;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return Triangle;
}(Figures));
var t = new Triangle(10, 10);
console.log(t.getArea());
var TraiangelI = /** @class */ (function () {
    function TraiangelI(width, height) {
        this.width = width;
        this.height = height;
    }
    TraiangelI.prototype.getArea = function () {
        return this.width * this.height / 2;
    };
    return TraiangelI;
}());
var ti = new TraiangelI(10, 5);
console.log(ti);
/* 構造的部分型
以下の例だとTriangleは明示的にinterfaceの継承をしていないが、getAreaを実装しているのでオブジェクトの代入ができている
メリットは？？
```
interface Figure{
    getArea():number;
}

class Triangle{
    constructor(private width:number, protected height: number){}
    // getAreaメソッドを実装
    getArea(): number{
        return this.width * this.height / 2;
    }
}

// Figure型の変数にTriangleオブジェクトを代入
let t: Figure = new Triangle(10,5);
console.log(t.getArea());
```
*/
var MyClass = /** @class */ (function () {
    function MyClass(_value) {
        this._value = _value;
    }
    Object.defineProperty(MyClass.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    MyClass.prototype.plus = function (value) {
        this._value += value;
        return this;
    };
    MyClass.prototype.minus = function (value) {
        this._value -= value;
        return this;
    };
    return MyClass;
}());
var MyclassSub = /** @class */ (function (_super) {
    __extends(MyclassSub, _super);
    function MyclassSub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyclassSub;
}(MyClass));
var c = new MyclassSub(10);
console.log(c.plus(5));
var car = {
    type: 'track',
    run: function () {
        console.log(this.type + "\u304C\u8D70\u308A\u307E\u3059");
    }
};
car.run();
var cl = {
    type: 'track',
    weight: 500,
    run: function () {
        console.log('dash!!!');
    }
};
console.log(cl);
cl.run();
function getProp(obj, name) {
    return obj[name];
}
// 汎用的な例
function newGetProp(obj, name) {
    return obj[name];
}
var product = { name: 'bento', price: 100 };
console.log(getProp(product, 'name'));
console.log(getProp(product, 'price'));
console.log(newGetProp(product, 'name'));
console.log(newGetProp(product, 'price'));
/*
ジェネリック
汎用的なクラス/メソッドに対して特定の型を紐付ける機能
ジェネリック対応のクラスを定義するにはクラス名の後方に<T>のように型引数を付与する。慣例的にType, Elementなどを意味するT,Eなどとする
*/
var data = [1, 2, 3];
var MyGenerics = /** @class */ (function () {
    function MyGenerics() {
    }
    MyGenerics.prototype.getValue = function () {
        return this.value;
    };
    return MyGenerics;
}());
// b. MyGenericsクラスにstring型を割り当て
var g = new MyGenerics();
// c. valueプロパティに文字列型の値を代入
g.value = 'Hoge';
console.log(g.getValue());
// ジェネリックメソッド
var MyCollection = /** @class */ (function () {
    function MyCollection() {
    }
    MyCollection.addAll = function (data) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return data.concat(values);
    };
    return MyCollection;
}());
var x = [10, 15, 30];
console.log(MyCollection.addAll(x, 35, 50));
