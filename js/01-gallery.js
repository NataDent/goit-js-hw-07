import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');  
}
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

gallery.addEventListener('click', handlerClickGallery);

function handlerClickGallery(e) {
  if (!e.target ) {
    return;
  }
    e.preventDefault();
   
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}"
  width="1300" height="900"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKey);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKey);
      },
    }
  ) 
  instance.show();
  ;

function onEscKey(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}
}