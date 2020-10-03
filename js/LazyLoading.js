import Image from "./Image.js";

export default class LazyLoading {
  constructor(className) {
    // LazyLoading Model
    this.className = className; // Lazy Loading 될 이미지 클래스명

    // Image 인스턴스 생성
    this.image = new Image();
  }

  /*
    getImage function
    이미지 Lazy Loading 
  */
  getImage() {
    // options 설정
    const options = {
      root: null, // null일 경우 브라우저 viewport
      rootMargin: "10px", // rootMargin을 '10px 10px 10px 10px'로 설정
      threshold: [0, 0.5, 1], // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
    };

    // IntersectionObserver 생성
    const io = new IntersectionObserver((entries, observer) => {
      // entries 객체 리스트, observer : 본인 self
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // 화면에서 노출되지 않았을 경우
          return;
        }

        // 화면에서 노출되었을 경우
        const { target } = entry;
        target.src = this.image.getImgUrl();
        console.log(`Load Success! ${target.style.backgroundImage}`);
        observer.unobserve(target);
      });
    }, options);

    Array.from(document.getElementsByClassName(`${this.className}`)).forEach(
      (img) => {
        io.observe(img);
      }
    );
  }
}
