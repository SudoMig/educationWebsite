//  CHANGE NAVBAR STYLES ON SCROLL

window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});


// SHOW/ HIDE FAQ ANSWER

// const faqs = document.querySelectorAll('.faq')

// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('open')

//         // Change Icon
//         const icon = faq.querySelector('.faq__icon svg')
//         if(icon. === 'plus') {
//             icon.className = 'minus'
//         } else {

//         }
//     })
// })