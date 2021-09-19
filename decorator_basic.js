var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// a. logデコレーターを宣言
function log(target, key, desc) {
    // b. オリジナルのメソッドを退避
    var origin = desc.value;
    // c. メソッドの書き換え
    desc.value = function () {
        // e. 元メソッドの実行前に行う処理
        console.log(key + " start\u30FB\u30FB\u30FB");
        var start = Date.now();
        // d. 元メソッドを実行
        var result = origin.apply(this, arguments);
        // f. 元メソッドの実行後に行う処理
        var end = Date.now();
        console.log(key + " end\u30FB\u30FB\u30FB");
        console.log("Process Time " + (end - start) + "ms");
        // g. 元のメソッドの戻り値を返す
        return result;
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.add = function (x, y) {
        var s = Date.now();
        while (Date.now() - s < 4500)
            ;
        return x + y;
    };
    __decorate([
        log
    ], MyClass.prototype, "add", null);
    return MyClass;
}());
var c = new MyClass();
console.log(c.add(10, 20));
