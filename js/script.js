document.addEventListener('DOMContentLoaded', function(){
	
	var a = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

	// Вычисляем ширину каждого столбца
	calcWidth = function(){
		return 100/a.length + '%';
	}

	// находим максимальное значение
	whichMax = function(){
		return Math.max.apply(null,a);
	}
	
	// Вычисляем шаг по высоте
	calcHeightStep = function(){
		return (document.getElementById('graph').clientHeight / whichMax());
	}

	// Вычисляем высоту каждого столбца
	calcHeight = function(i){
		return (calcHeightStep()*a[i]) + 'px';
	}


	// при вводе строки с клавиатуры, удаляем старый график и строку переводим в массив
	enterMassive = function(){
		str = prompt('Please, enter your numbers using ",":');
		a = str.split(',');
		document.getElementById('graph').innerHTML = '';
		document.getElementById('value').innerHTML = '';
		whichMax();
		calcHeightStep();
		parseMassive();
	}

	// делаем цветовую градацию
	whichColor = function(i){
		return (a[i] <= 5) ? 'green' :
			(a[i] >= 6 && a[i] <= 10) ? 'yellow' :
			'red';
	}

	// создаем график
	createBar = function(i){
		var bar = document.createElement('div');
			bar.className= 'bar';
			bar.style.height = calcHeight(i);
			bar.style.width = calcWidth();
			bar.style.backgroundColor = whichColor(i);
			document.getElementById('graph').appendChild(bar);

		var value = document.createElement('div');
			value.className = 'value';			
			value.style.width = calcWidth();
			value.innerHTML = a[i];
			document.getElementById('value').appendChild(value);
	}

	// разбираем массив чисел
	parseMassive = function(){
		for (var i = 0; i <= a.length-1; i++) {
			createBar(i);
		}
	};

	parseMassive();
});