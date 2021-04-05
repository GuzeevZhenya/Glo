let lang = prompt('Введите ru - если хотите руск язык  или en - если англ','en');
console.log(lang);
if (lang == 'ru') {
	console.log('понедельник,вторник,среда,четверг,пятница,суббота,воскресенье')
} else if (lang == 'en'){
	console.log('monday,tuesday,wednesday,thursday,friday,saturday,sunday')
} else {
	console.log('Вы ввели не правильное значение')
}


switch (lang) {
	case 'ru':
		console.log('понедельник,вторник,среда,четверг,пятница,суббота,воскресенье');
		break;
	case 'en':
		console.log('monday,tuesday,wednesday,thursday,friday,saturday,sunday');
		break;
	default:
		console.log('Вы ввели не правильное значение');
}

let langArray = [];
langArray['ru'] = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
langArray['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(langArray[lang].join(','));
 
let namePerson = 'Максим';
console.log((namePerson === 'Артем') ? 'директор' :
    (namePerson === 'Максим') ? 'преподаватель' :
    'студент');