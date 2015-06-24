
function fullScreen() {
    var docElm = document.documentElement;
    if (!full) {
        
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen(docElm.ALLOW_KEYBOARD_INPUT);
        }
        else if (docElm.msRequestFullscreen){
            docElm.msRequestFullscreen();
        }
        full = 1;
       
        docElm.setAttribute('style', 'margin-left:0 !important');
     //   docElm.css('margin-left', '24px');
    }
    else if (full) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        full = 0;
    }
}