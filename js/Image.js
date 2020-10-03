export default class Image {
  constructor() {
    this.count = 1;
    this.limit_count = 10; // 로드하는 이미지 갯수
  }

  /*
    createDOM function
    이미지 dom 에 뿌려줌 
  */
  createDOM() {
    let img_list = "";

    for (let i = 0; i < this.limit_count; i++) {
      img_list += `<img class="cat_img" src="" alt="" />`;
    }

    $(".cats").append(img_list);
  }
  /*
    getImgUrl function
    이미지 url  
    @return char
  */
  getImgUrl = () => {
    const img_url = `https://cataas.com/cat?i=${this.count}`;
    this.count++;
    return img_url;
  };
}
