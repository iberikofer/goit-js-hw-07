import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.getElementsByClassName("gallery")[0];

function doMarkup(objectOfImages) {
  const galleryItems = objectOfImages
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
				<a class="gallery__link" href="${original}">
      		<img class="gallery__image" src="${preview}" alt="${description}" />
  			</a>
			</li>
        `;
    })
    .join("");
  return galleryItems;
}

galleryList.insertAdjacentHTML("beforeend", doMarkup(galleryItems));

galleryList.addEventListener("click", clickFunc);
function clickFunc(event) {
  event.preventDefault();
  const element = event.target;

  if (element.nodeName !== "IMG") {
    return;
  }

  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
