/*
 Il fratello maggiore del dropdown visto insieme in classe. Il sito da copiare
 (solo la prima parte, va bene anche solo la navbar) è questo:
 https://www.revolut.com/en-IT/ ( attenzione, il layout prendetelo dallo screenshot,
 i contenuti dal sito )
 L'obiettivo e' riprodurre il comportamento del dropdown associato ad ogni item
 della navbar
*/


//evento click

$('.menu .has-dropdown').click(function(){
  $('.menu .has-dropdown').not(this).children('.list').removeClass('flex');
  $(this).children('.list').toggleClass('flex');
});

$(document).click(function(event){
  console.log(event.target.tagName);
  if (event.target.tagName === 'HTML') {
    $('.list').removeClass('flex');
  }
});
