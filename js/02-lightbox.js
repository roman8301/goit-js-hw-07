import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrap = document.querySelector('.gallery');
renderGallary();

function renderGallary() {
  const gallaryItem = galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
  galleryWrap.insertAdjacentHTML('beforeend', gallaryItem);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
