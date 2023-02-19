import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryPreview = renderImages(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryPreview);

function renderImages(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
