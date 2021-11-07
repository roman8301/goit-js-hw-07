import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrap = document.querySelector('.gallery');
renderGallary();
galleryWrap.addEventListener('click', onOpenModalWindow);

function renderGallary() {
  const gallaryItem = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
  galleryWrap.insertAdjacentHTML('beforeend', gallaryItem);
}

function onOpenModalWindow(e) {
  e.preventDefault();

  if (!e.target.dataset.source) {
    return;
  }

  const instance = basicLightbox.create(
    `<div class="modal">
      <img src = ${e.target.dataset.source}
      alt=${e.target.alt}
      width = '900'
      height = '700'
      />
    </div> `,
    {
      onShow: () => {
        instance.element().querySelector('IMG').onclick = instance.close;
        window.addEventListener('keydown', closeEscape);
      },
      onClose: () => {
        window.removeEventListener('keydown', closeEscape);
      },
    },
  );
  function closeEscape(e) {
    if (e.key === 'Escape') {
      instance.close();
      return;
    }
  }
  instance.show();
}
