# javascript로  만들기

### 1. 개발 환경
- HTML5   
- Javascript
- CSS

### 2. library
jquery	3.3.1

### 3. 디렉토리     
    ├── css                         # css파일 저장 폴더     
    └── js                          # js파일 저장 푤더       
        ├── jquery-3.3.1.min.js     # jquery     
        ├── Image.js                # Image class 로직이 있는 file      
        ├── LazyLoading.js          # LazyLoading class 로직이 있는 file      
        └── script.js               # index.html에서 로드하는 스크립트 file      
    └── index.html                     
    
### 4. 기능 
- https://cataas.com/ REST API 로 cat 이미지 뿌려줌 
- 최적화를 위해 Intersection Observer API 사용하여 Lazy Loading 구현 
- 스크롤 마지막일때 이미지 10개씩 로드 
- LazyLoading 다른 작업에서도 사용 할 수 있도록 분리함  

### 5. 결과 화면
