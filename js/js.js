function pulseOnHover(select) {
    const box = document.querySelectorAll(select);
    for (let i = 0; i < box.length; i++) {
        box[i].onmouseover = () => {
            box[i].classList.add('animate__animated', 'animate__pulse');
            box[i].onmouseout = (() => {
                box[i].classList.remove('animate__animated', 'animate__pulse');
            })
        };
    }
}
function zoomOnHover(select) {
    const box = document.querySelectorAll(select);
    for (let i = 0; i < box.length; i++) {
        box[i].onmouseover = () => {
            box[i].classList.add('social_img_zoom');
            box[i].onmouseout = (() => {
                box[i].classList.remove('social_img_zoom');
            })
        };
    }
}
pulseOnHover(".box_theme_text")
zoomOnHover(".social_img img")
