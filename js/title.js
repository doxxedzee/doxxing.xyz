let msg1 = "@isis swatted you! >_< ";
const speed = 100;

function scrollTitle() {
    document.title = msg1;
    msg1 = msg1.substring(1, msg1.length) + msg1.charAt(0);
    setTimeout(scrollTitle, speed);
}

scrollTitle();