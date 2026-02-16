const swatches = document.querySelectorAll('.swatch');

function getColor(){
    this.style.backgroundColor = this.dataset.color;
}


swatches.forEach(function(swatch){
    swatch.addEventListener("click", getColor);
})
