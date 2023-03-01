// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//console.log(galleryItems);

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

//===================================================
const gallery = document.querySelector('.gallery');

//Tworzenie div item
galleryItems.forEach(n => {
  const galleryItem = `<a class="gallery__item" href="${n.original}">
  <img
    class="gallery__image"
    src="${n.preview}"
    alt="${n.description}"
    title="${n.description}"
  />
</a>`;

  gallery.insertAdjacentHTML('afterbegin', galleryItem);
});
//=======================================================
// 	//Użycie biblioteki simplelightbox do wyświetlania img na pełnym ekranie i przewijania

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
