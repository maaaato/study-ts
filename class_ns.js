var MainApp;
(function (MainApp) {
    var Hoge = /** @class */ (function () {
        function Hoge() {
        }
        return Hoge;
    }());
    MainApp.Hoge = Hoge;
    function foo() { }
    MainApp.foo = foo;
})(MainApp || (MainApp = {}));
var mah = new MainApp.Hoge();
MainApp.foo();
