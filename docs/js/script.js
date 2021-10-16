const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlayElement = document.querySelector('.menu__overlay'),
    menuElement = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.work__ratings-counter'),
    lines = document.querySelectorAll('.work__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// when I click on "overlay" - is disappear

overlayElement.addEventListener('click', () => {
    menu.classList.remove('active');
});


menuElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

//Создание формы для отправки смс на почту
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});