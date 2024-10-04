let scrollContainer = document.querySelectorAll('.img-slider');
for (const item of scrollContainer){
item.addEventListener('wheel', (evt)=> {
  evt.preventDefault();
  item.scrollLeft += evt.deltaY;
});
}