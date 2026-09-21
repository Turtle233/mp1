/* Your JS here. */
console.log('MP1 Starting...')

// ============================================= header functions ==============================================
const header = document.querySelector("header");

function setHeader() {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        header.classList.add("is-scrolled");
    } else if (scrollY < 20) {
        header.classList.remove("is-scrolled");
    }
}

window.addEventListener("scroll", setHeader);

// ============================================= gallery functions ==============================================
const track = document.querySelector("#gallery_track");
const viewport = document.querySelector("#gallery_viewer");
const prev = document.querySelector("#gallery_prev");
const next = document.querySelector("#gallery_next");

const images = [
    "assets/gallery/1.webp",
    "assets/gallery/2.webp",
    "assets/gallery/3.webp",
    "assets/gallery/4.webp",
    "assets/gallery/5.webp",
    "assets/gallery/6.webp",
    "assets/gallery/7.webp",
    "assets/gallery/8.webp",
    "assets/gallery/9.webp",
];

images.forEach(src => {
    const slide = document.createElement("div");
    slide.className = "gallery_slides";

    const img = document.createElement("img");
    img.src = src;

    slide.appendChild(img);
    track.appendChild(slide);
});

let index = 3

function showImage() {
    track.className = "slide-" + index;
}

next.addEventListener("click", function () {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    showImage();
});

prev.addEventListener("click", function () {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    showImage();
});

showImage();

window.addEventListener("resize", showImage);

// ============================================= zoom preview ==============================================
const preview = document.querySelector("#image-preview");
const previewImage = document.querySelector("#preview-image");

document.querySelectorAll(".gallery_slides img").forEach(function (img) {
    img.onclick = function () {
        previewImage.src = img.src;
        preview.showModal();
    };
});

preview.onclick = function () {
    preview.close();
};