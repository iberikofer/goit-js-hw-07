import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.getElementsByClassName("gallery")[0];

function doMarkup(objectOfImages) {
  const ss = objectOfImages
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;
    })
    .join("");
  return ss;
}

galleryList.insertAdjacentHTML("beforeend", doMarkup(galleryItems));

galleryList.addEventListener("click", clickFunc);
function clickFunc(event) {
  event.preventDefault();
  const element = event.target;
  document.addEventListener("keydown", closeOnEscape);

  if (element.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${element.dataset.source}" alt="${element.alt}">`,
    {
      onClose: () => {
        document.removeEventListener("keydown", closeOnEscape);
      },
    }
  );
  instance.show();

  function closeOnEscape(event) {
    event.nodeName === "ESCAPE";
    instance.close();
  }
}
