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

function checkLayer(){

}

