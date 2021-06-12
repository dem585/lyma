$(function(){
  $('.slider').slick({
     dots:true,
    autoplay:3000,
     arrows: false,  
     lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]	
    });

  // menu
  $('.menu-btn').on('click', function(){
    $('.menu-mb').toggleClass('menu--active');
    $('.body').toggleClass('body--hiden');
    $('.menu-btn').toggleClass('btn--close');
  });

   //animation
  const animItems = document.querySelectorAll('._anim-items');

  if(animItems.length > 0){
    window.addEventListener('scroll' , animOnScroll);
    function animOnScroll(){
      for (let index = 0; index < animItems.length; index++) {
       const animItem = animItems[index];
       const animItemHeight = animItem.offsetHeight;
       const animItemOffset = offser(animItem).top;
       const animStart = 4;

       let animItemPoint = window.innerHeight - animItemHeight / animStart;

       if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
       }

       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
       }else{
          if (!animItem.classList.contains('_anim-no-hide')) {
            // animItem.classList.remove('_active'); /*убрал повторную анимацию*/
          }        
       }
      }
      function offser(el){
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}  
      }
    }
    setTimeout(() =>{
      animOnScroll();      
    }, 300);    
  }


});