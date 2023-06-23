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
    e.preventDefault();
    e.stopPropagation();
  const instance = basicLightbox.create(
    `<img src ="${e.target.dataset.source}"alt="${e.target.description}"
  width="1300"height="900"data-source="${e.target.dataset.source}"`,
    {
      onShow: onEscKey,
    }
  ) 
  instance.show();
  window.addEventListener("keydown", onEscKey);

function onEscKey(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}
}
