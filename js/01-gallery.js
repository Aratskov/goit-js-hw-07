import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryPreview = renderImages(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryPreview);

gallery.addEventListener("click", onOpenModal);

function renderImages(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `;
    })
    .join("");
}

let instance = "";

function onOpenModal(event) {
  window.addEventListener("keydown", modalCloseEsc);
  event.preventDefault();

  const thisSearchElement = event.target.classList.contains("gallery__image");
  if (!thisSearchElement) {
    return;
  }

  const originalImage = event.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">
`);
  instance.show();
}

function modalClose() {
  window.removeEventListener("keydown", modalCloseEsc);
}

function modalCloseEsc(event) {
  if (event.code === "Escape") {
    instance.close();
    modalClose();
  }
}
