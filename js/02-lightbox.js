import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
   </a>
</li>`).join('');  
}
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

gallery.addEventListener('click', handlerClickGallery);

function handlerClickGallery(e) {
   e.preventDefault();
   if (!e.target ) {
      return;
   }
      console.log(e.target);
   // var lightbox = $('.gallery a').simpleLightbox({ captionDelay: 250 });
   var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
   return lightbox;
}

