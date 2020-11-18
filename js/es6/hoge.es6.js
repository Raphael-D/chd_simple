'use strict';
var hoge = 'fujio';
const hoga = 'egawa';
setTimeout((hoge = "ほげ") => {
        console.log(hoge);
 }, 500);
