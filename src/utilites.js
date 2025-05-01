
export const onPageLoad = () => {
  const footer = document.querySelector("footer");
  const vScreen = document.querySelector("html");
  if (vScreen.scrollHeight <= vScreen.clientHeight) {
      // fix the footer to the bottom of the screen using a pre styled class
        if (!footer.classList.contains("footer-fixed-bottom")) {
            footer.classList.add("footer-fixed-bottom");
        }            
  } else {
        if (footer.classList.contains("footer-fixed-bottom")) {
            footer.classList.remove("footer-fixed-bottom");
        }          
  }
}

window.addEventListener("resize", onPageLoad);

