let isShareActive = false;
let isDesktopShareActive = false;

function share() {
    const width = window.screen.width;
    const footer = document.getElementById('footer');
    const mobileShare = document.getElementById('share-footer');
    const desktopShare = document.getElementById('desktop-share-footer');


   if (width > 344 && width < 800 && !isShareActive) {
    mobileShare.classList.add('mobile-animation');
    mobileShare.style.visibility = "visible";
    footer.style.visibility = "hidden";
    isShareActive = true;   
   } 
   else if (width > 344 && width < 800 && isShareActive) {
    mobileShare.classList.remove('mobile-animation');
    mobileShare.style.visibility = "hidden";
    footer.style.visibility = "visible";
    isShareActive = false; 
   } 
   else if (width > 800 && width < 1500 && !isDesktopShareActive) {
    desktopShare.classList.add('desktop-animation');
    desktopShare.style.visibility = "visible";
    isDesktopShareActive = true; 
   }
   else if (width > 800 && width < 1500 && isDesktopShareActive) {
    desktopShare.classList.remove('desktop-animation');
    desktopShare.style.visibility = "hidden";
    isDesktopShareActive = false; 
   }
}