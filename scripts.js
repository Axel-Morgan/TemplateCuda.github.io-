//-------------------------------WELCOME----------------------

//Подсвечиваем зад. фона выбранной ссылки в Хэдере Welcome
function change_background_welcome_header (val){
	let divLinks = document.getElementsByClassName('welcome-links-link');	
	for (let i = 0; i < divLinks.length; i++)
	{
		if (i == val - 1)
		{
			divLinks[i].classList.add('choiceLink');
	    }   
	    else
	    {
	        divLinks[i].classList.remove('choiceLink');
	    } 
	}
}

//Эффект затемнения при нажатии на оранжевую кнопку
function pressOrangeButton(){
	let orangeBut = document.getElementById('oranBut');
	orangeBut.classList.add('darkOrangeButton');
	setTimeout(
		function(){
			orangeBut.classList.remove('darkOrangeButton')
		}, 100);
}


//-------------------------------SKILLS----------------------

//Устанавливаем уровень прогресс бара
function circleProgressBar(arrayProcent){
	const circleBar = document.querySelectorAll('.ring-bar'); 
    const circleRadius = circleBar[0].r.baseVal.value;
  	const circleLong = 2 * Math.PI * circleRadius;
  	const circleInvisible = [];

  	changeBar();
  	countProgress();
  	setProgressBar();

  	function countProgress(){
  		for (let i = 0; i < arrayProcent.length; i++)
  		{
  			circleInvisible.push(circleLong - arrayProcent[i] / 100 * circleLong);
  		}
  	}

  	function setProgressBar(){
  		for (let i = 0; i < arrayProcent.length; i++)
  		{
  			circleBar[i].style.strokeDashoffset = circleInvisible[i];
  		}
  	}

  	function changeBar(){
  		for (let i = 0; i < arrayProcent.length; i++)
  		{
  			circleBar[i].style.strokeDasharray = `${circleLong} ${circleLong}`;  			
  			circleBar[i].style.strokeDashoffset = circleLong;
  		}
  	}

  	changeProcentText(arrayProcent);
}

//Меняем значения процентов внутри кольца
function changeProcentText(value){
	const procentBox = document.getElementsByClassName('percent');

	for (let i = 0; i < value.length; i++)
	{
		procentBox[i].innerHTML = (String(value[i]) + "%");
	}

}


//-------------------------------PORTFOLIO----------------------

//Подсвечиваем зад. фона выбранной ссылки в Хэдере Портфолио
function changeBackgroundPortButton(value){
	let divLinks = document.getElementsByClassName('port-button');	
	for (let i = 0; i < divLinks.length; i++)
	{
		if (i == value - 1)
		{
			divLinks[i].classList.add('choiceLinkPort');
	    }   
	    else
	    {
	        divLinks[i].classList.remove('choiceLinkPort');
	    } 
	}
}

//Затемняем на мгновение нажатую синюю кнопку 
function pressBlueButton(){
	let blueButton = document.getElementById('blueBut');
	blueButton.classList.add('putBluButton');
	setTimeout(
		function(){
			blueButton.classList.remove('putBluButton')
		}, 100);
}


//-------------------------------GET IN TOURCH----------------------

//Затемняем на мгновение нажатую кнопку отправления  
function pressSendButton(){
	let sendButton = document.getElementById('buttonSend');
	sendButton.classList.add('putSendButton');
	setTimeout(
		function(){
			sendButton.classList.remove('putSendButton')
		}, 100);
}