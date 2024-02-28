const assert = require('assert')

describe("SafeString", function() {

    it('Москва', () => {
        const str = 'Москва'
        assert.notStrictEqual(safeString(str), str);
    });

    it('Спб', () => {
        const str = 'Спб'
        assert.notStrictEqual(safeString(str), str);
    });

    it('Омск', () => {
        const str = 'Омск'
        assert.notStrictEqual(safeString(str), str);
    });

    it('18+', () => {
        const str = '18+'
        assert.notStrictEqual(safeString(str), str);
    });

    it('Реклама', () => {
        const str = 'Реклама'
        assert.notStrictEqual(safeString(str), str);
    });

    it('консульт', () => {
        const str = 'консульт'
        assert.notStrictEqual(safeString(str), str);
    });

    it('достав', () => {
        const str = 'достав'
        assert.notStrictEqual(safeString(str), str); 
    });
});


//не получилось создать импорт этой функции
//решение не самое элегантное, но это единственное что сработало

function safeString(string){
	let words = string.split(' ');
	let res = '';
	words.forEach((word)=>{
		let changed = false;
		map.forEach((value, key) => {
			if(word.indexOf(value)!==-1 && (!changed || Math.floor(Math.random() * 2))){
				word = word.replace(value, key);
				changed = true;
			}
		});
		res = res.concat(' ', word);
	});
	return res;
}

let map = new Map([
	['M', 'М'],
	['y', 'у'],
	['H', 'Н'],
	['B', 'В'],
	['P', 'Р'],
	['O', 'О'],
	['E', 'Е'],
	['K', 'К'],
	['T', 'Т'],
	['A', 'А'],
	['C', 'С'],
	['X', 'Х'],
	['c', 'с'],
	['x', 'х'],
	['p', 'р'],
	['o', 'о'],
	['a', 'а'],
	['e', 'е'],
	['\uff0b', '+'],
	['𝟣', '1'],
	['𝟤', '2'],
	['𝟥', '3'],
	['𝟦', '4'],
	['𝟧', '5'],
	['𝟨', '6'],
	['𝟩', '7'],
	['𝟪', '8'],
	['𝟫', '9'],
	['𝟢', '0'],
  ]);
