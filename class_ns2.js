var Wings;
(function (Wings) {
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
    })(MainApp = Wings.MainApp || (Wings.MainApp = {}));
})(Wings || (Wings = {}));
var wmah = new Wings.MainApp.Hoge();
Wings.MainApp.foo();
