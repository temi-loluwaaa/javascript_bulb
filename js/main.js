light = (sw) => {
    let picture;
    if (sw == 0) {
        picture = "./images/bulb-off.png";
    } else {
     picture = "./images/bulb-on.png";   
    }
    document.getElementById("myImage").src = picture;
    }
