import Image from "./Image.js";
import LazyLoading from "./LazyLoading.js";
let image;
let lazyLoading;

document.addEventListener("DOMContentLoaded", () => {
  image = new Image();
  lazyLoading = new LazyLoading("cat_img");
  makeImgList();
  scrollChk();
});

/*
  makeImgList function
  cat_img 뿌려주는 함수 
*/
const makeImgList = () => {
  image.createDOM();
  lazyLoading.getImage();
};

/*
  scrollChk function
  scroll 마지막일 경우 cat_img 뿌려주는 함수 
*/
const scrollChk = () => {
  document.addEventListener("scroll", () => {
    if (
      Math.round($(window).scrollTop()) ==
      $(document).height() - $(window).height()
    ) {
      console.log("스크롤 마지막 ");
      makeImgList();
    }
  });
};
