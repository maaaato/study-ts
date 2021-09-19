// a. logデコレーターを宣言
function log(target: any, key: string, desc: PropertyDescriptor){
    // b. オリジナルのメソッドを退避
    let origin = desc.value;
    // c. メソッドの書き換え
    desc.value = function(){
        // e. 元メソッドの実行前に行う処理
        console.log(`${key} start・・・`);
        let start = Date.now();
        // d. 元メソッドを実行
        let result = origin.apply(this, arguments);
        // f. 元メソッドの実行後に行う処理
        let end = Date.now();
        console.log(`${key} end・・・`);
        console.log(`Process Time ${end-start}ms`);
        // g. 元のメソッドの戻り値を返す
        return result;
    }
}

class MyClass {
    @log
    add(x: number, y:number): number {
        let s = Date.now();
        while(Date.now() - s < 4500);
        return x + y;
    }
}

let c = new MyClass();
console.log(c.add(10,20));