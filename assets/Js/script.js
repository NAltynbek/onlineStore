$(document).ready(function(){
   $('.slider').slick({
       arrows:false,
       dots:true,
       autoplay: true
   }); 
    
    $('.card').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true
   }); 

    $('.cards').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true
   }); 
    
});


let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('is-active');
})





//$(document).on( 'click', '.test', function() {  
//    jQuery('.test').removeClass("active-button");
//  jQuery(this).addClass("active-button");
//});





$(document).ready(function(){
  // Добавить плавную прокрутку до всех ссылок
  $("a").on('click', function(event) {

    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== "") {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault();

      // Хранить хэш
      var hash = this.hash;

      // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

        // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
        window.location.hash = hash;
      });
    } // Конец, если
  });
});

