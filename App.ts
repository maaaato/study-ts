const TITLE: string = 'typescript';

export function showMessage(): void{
    console.log(TITLE);
}

export class Util{
    static getVersion(): string {
        return '1.0.0';
    }
}

console.log("aaa");