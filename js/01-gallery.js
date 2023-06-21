import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
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
    console.log(e.target)
}

// function addModalWindow()