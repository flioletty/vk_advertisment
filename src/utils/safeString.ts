
export default function SafeString(string){
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
