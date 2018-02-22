foo = 'lorem' + ['1', 2, 3.4];     // 'lorem1, 2, 3.4'
foo = ['1', 2, 3.4] + 'lorem';     // '1,2,3.4lorem'
foo = 9 + ['1', 2, 3.4];             // '91,2,3.4'
foo = ['1', 2, 3.4] + 9;             // '1,2,3.49'
foo = ['1', 2, 3.4] + [1, '2', 3.4];  // '1,2,3.41,2,3.4'

foo = ['1', 2, 3.4] + {bar: 'lorem'}; // 1, 2, 3.4 [object Object]
foo = {bar: 'lorem'} + [1, '2', 3.4]; // [object Object] 1, 2, 3.4

foo = ['1', 2, 3.4] + undefined; // 1, 2, 3.4 undefined
foo = undefined + [1, '2', 3.4]; // undefined 1, 2, 3.4

