
function slider(vue) {
    document.querySelector('.manga-poster').src = vue;
}

function back(back) {
  const bg = document.querySelector(".container");
  bg.style.background = `linear-gradient(rgba(0, 0, 0, 0.592), rgb(0, 0, 0)), url(${back}) no-repeat center center / cover`;
  bg.style.transition = "background .5s ease";
}

function pp() {
  const dv = document.querySelector(".pp");
  dv.style.transition = "opacity .3s ease";
}

const imgs = document.querySelectorAll('.im');
const contentImage = document.querySelectorAll('.content-img');
const contentText = document.querySelectorAll('.content-text');
const defautImg =  document.querySelector('.im[data-index="1"]');

imgs.forEach((img) => {
    img.addEventListener('click', () => {
        const index = img.getAttribute('data-index');
        contentImage.forEach((img) => img.style.display = 'none');
        contentText.forEach((text) => (text.style.display = "none"));
        document.querySelector(`.content-img[data-index="${index}"]`).style.display = 'block';
        document.querySelector(`.content-text[data-index="${index}"]`).style.display = 'block';
        imgs.forEach((i) => i.classList.remove('selected'));
        im.classList.add('selected');

    });
});

if (defautImg){
    defautImg.click();
}
