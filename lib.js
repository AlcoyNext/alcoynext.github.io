function checkControl(control, div){
    if (map.hasControl(control)){
        map.removeControl(control);
        div.classList.remove("active");
    } else {
        map.addControl(
            control,
            'top-right'
        );
        div.classList.add("active");
    }
}

/* LAYERS */
function layerPop(layer){
    let element = document.getElementById(layer);
    let x = element.offsetLeft;
    let y = element.offsetTop;


}

function checkLayer(){

}

