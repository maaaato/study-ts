// import('./App').then(app => {
//     app.showMessage();
// });

(async () => {
    let app = await import('./App');
    app.showMessage();
})();

console.log('aaa');