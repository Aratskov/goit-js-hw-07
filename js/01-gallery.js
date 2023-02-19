import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);


const gallery = document.querySelector(".gallery");
const galleryPreview = renderImages(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryPreview);


gallery.addEventListener('click',onOpenModal);

function renderImages(gallery) {
    return gallery.map(({ preview, original, description }) => {
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
    }).join('');
}

function onOpenModal(event){
    
    window.addEventListener('keydown', modalCloseEsc)
//     const isGalleryElement = event.target.classList.contains("gallery__image");
// //   if (!isGalleryElement) {
// //     return;
// //   }
  event.preventDefault()
    const originalImage = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${originalImage}" width="800" height="600">
`)

instance.show();
}

function modalClose(event){
window.removeEventListener('keydown', modalCloseEsc);

}

function modalCloseEsc(event){
    // modalClose()
    console.log(event.code)
    if(event.code === "Escape"){
        modalClose();
        instance.close( );
        // console.log(event.code)
    }
    // return
}