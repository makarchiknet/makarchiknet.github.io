function popup() {




   const imgPopup = document.createElement('div'),
      workSection = document.querySelector('.content-block'),
      bigImg = document.createElement('img');

   bigImg.classList.add('popup__img');

   imgPopup.classList.add('popup');
   workSection.appendChild(imgPopup);

   imgPopup.style.justifyContent = 'center';
   imgPopup.style.alignItems = 'center';
   imgPopup.style.display = 'none';

   imgPopup.appendChild(bigImg);

   workSection.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target;

      if (target && target.classList.contains('preview')) {
         document.body.style.overflow = 'hidden';
         imgPopup.style.display = 'flex';

         const path = target.parentNode.getAttribute('href');
         bigImg.setAttribute('src', path);
      }

      if (target && target.matches('.popup__img') || target.matches('div.popup')) {
         imgPopup.style.display = 'none';
         document.body.style.overflow = '';
      }
   });
}

popup();

