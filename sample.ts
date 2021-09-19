export const sumOfArray = (numbers: number[]): number => {
    return numbers.reduce((a: number, b: number): number => a + b);
};

let triangle = (base: number, height: number): number => {
    return base * height / 2;
}

console.log(triangle(2,2));

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
function greet(name: string): void {
    console.log("hello");
}

greet("hoge");


// neverは決してありえないことを意味する型
// function hoge(): never{
//     throw new Error("Error is occured.");
// }

// hoge();

// 省略可能な引数
function showTime(time: Date): string {
    return '現在時刻:' + time.toLocaleString();
}

showTime(new Date());

// 関数のオーバーロード
/*
同じ名前でありながら、引数リスト、戻り値の型が異なる関数を定義すること
メリット:
関数のオーバーロードのメリットは「関数使用側の負担軽減」と「関数名に悩まなくて済む」ところです。
デメリット:
「複数ある関数の数の把握やどれを使えばいいか分かりづらくなる」ところです。
注意として戻り値のみ違う場合はオーバーロードできない。
*/

function show(value: number): void;
function show(value: boolean): void;
function show(value: any): void {
    if (typeof value === 'number') {
        console.log(value.toFixed(0));
    } else {
        console.log(value ? 'true': 'false');
    }
}

show(10.355);
show(false);


// classを書いてみる
class Person {
    /*
    #をプレフィックスにつけて定義するとハードなアクセス制御を行える
    privateの場合はソフトなアクセス制御となり、ブラケット構文[]であればアクセスは可能だがハードではundefineになる
    */
    protected name: string;
    protected age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    show(): string{
        return `${this.name} は${this.age}歳です`;
    }
}

let p = new Person('帝王', 30);
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
class Figure {
    public static PI: number = 3.14;
    public static circle(redius: number): number {
        return redius * redius * this.PI;
    }
}

console.log(Figure.PI);
Figure.PI = 3.00;
console.log(Figure.PI);

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


/*
継承
*/

class BusinesPerson extends Person {
    protected clazz: string;
    constructor(name:string, age:number, clazz:string){
        super(name, age);
        this.clazz = clazz;
    }
    show(): string{
        return super.show() + `${this.clazz}です`;
    }
    work(): string {
        return `${this.name}はテキパキ働きます`;
    }
}

let b = new BusinesPerson('帝王', 40, '主任');
console.log(b.show());
console.log(b.work());

/*
抽象メソッド
オーバーライドを派生クラスで上書き「しなければならない」ようにする
abstractが付いている場合、派生クラスではオーバーライドが必須になる
*/

abstract class Figures {
    constructor(protected width: number, protected height: number){}
    abstract getArea(): number;
}

class Triangle extends Figures {
    getArea(): number {
        return this.width * this.height / 2;
    }
}

let t = new Triangle(10, 10);
console.log(t.getArea());

/*
インターフェース
すべてのメソッドが抽象メソッドである特別なクラスで一般的なクラスと違って、複数のインターフェースを同時に継承することができる
正確にはインターフェースを継承することを「実装する」と表現する

インターフェースの制限
- すべて抽象メソッドでなければならない。
- アクセス修飾子も指定できない。
- staticメンバーも宣言できない。

ポリモーフィズム
*/

interface FigureI {
    getArea(): number;
}

class TraiangelI implements FigureI {
    constructor(private width: number, protected height: number){}
    getArea(): number {
        return this.width * this.height / 2;
    }
}

let ti = new TraiangelI(10, 5);
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

class MyClass {
    constructor(private _value: number){}
    get value(): number {
        return this._value;
    }
    plus(value: number): this{
        this._value += value;
        return this;
    }
    minus(value: number): this {
        this._value -= value;
        return this;
    }
}

class MyclassSub extends MyClass {}

let c = new MyclassSub(10);
console.log(c.plus(5));


interface Car {
    type: string;
    run(): void;
}

let car: Car = {
    type: 'track',
    run(){
        console.log(`${this.type}が走ります`);
    }
}

car.run();

let cl: {
    type: string;
    weight: number;
    run:() => void;
} = {
    type: 'track',
    weight: 500,
    run(){
        console.log('dash!!!');
    }

};

console.log(cl);
cl.run();

/*
keyof
定義済みの型からプロパティ名の集合を取り出し、文字列リテラルとして返す
下の例では、最低でも引数nameがobjのプロパティであることをコンパイル時に検出できる

*/

interface Product {
    name: string;
    price: number;
}

function getProp(obj: Product, name:keyof Product){
    return obj[name];
}

// 汎用的な例
function newGetProp<T, K extends keyof T>(obj: T, name: K){
    return obj[name];
}

let product = {name:'bento', price: 100};
console.log(getProp(product, 'name'));
console.log(getProp(product, 'price'));
console.log(newGetProp(product, 'name'));
console.log(newGetProp(product, 'price'));

/*
TypeScriptのInterfaceとTypeの比較
https://qiita.com/tkrkt/items/d01b96363e58a7df830e

TypeScriptの型入門
https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a

Mapped Types
*/ 
type ReadOnlyProduct = {
    readonly [K in keyof Product]: Product[K]
}

/*
ジェネリック
汎用的なクラス/メソッドに対して特定の型を紐付ける機能
ジェネリック対応のクラスを定義するにはクラス名の後方に<T>のように型引数を付与する。慣例的にType, Elementなどを意味するT,Eなどとする
*/

let data: Array<number> = [1,2,3]

class MyGenerics<T> {
    value!: T;
    getValue(): T{
        return this.value;
    }
}

// b. MyGenericsクラスにstring型を割り当て
let g = new MyGenerics<string>();
// c. valueプロパティに文字列型の値を代入
g.value = 'Hoge';
console.log(g.getValue());

// ジェネリックメソッド
class MyCollection {
    static addAll<T>(data: T[], ...values: T[]): T[]{
        return data.concat(values);
    }
}

let x = [10,15,30]
console.log(MyCollection.addAll<number>(x,35,50));