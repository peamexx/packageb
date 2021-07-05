![image](https://user-images.githubusercontent.com/38338103/124464307-0104e980-ddcf-11eb-8646-ad380d04085c.png)

> 구매 아이템 기록 서비스에 대한 브랜드 페이지.

![image](https://user-images.githubusercontent.com/38338103/124464432-25f95c80-ddcf-11eb-9590-d73afa349b6c.png)

![image](https://user-images.githubusercontent.com/38338103/124464492-38739600-ddcf-11eb-9563-f4fca5c6d82f.png)

[미리보기](http://peamexx.com/)

*블로그 [peamexx.tistory.com](http://peamexx.tistory.com)*

*이메일 peamexx@daum.net*

✨✨✨
[전체 포트폴리오 보기](https://peamexx.github.io/me/)
✨✨✨

___

### 특징 🧚🏻‍♀️
- 반응형
- 웹 접근성 고려
- jquery대신 javascript 사용하여 화면 조작(slider 제외)
___

### 사용 기술 🤸🤸‍♂️
- Javascript
- Jquery
- HTML / SCSS
___

### 메뉴 👩🏻‍💻
1. 홈
2. 서비스 소개
3. 문의하기
4. 로그인

___

### 상세 내용 🔥🔥

- 접근성
    - H2 tag: 스크린리더기가 읽을 수 있는 화면 탐색용 텍스트 숨김 처리.
    - button: 디자인 타입일 경우 type="button" 별도 명시.
    - color css: 저시력 및 색각 이상 이용자를 위해 해시코드 대신 rgb 활용.

- 홈
    - 아이콘: background-position을 통해 한 background image에서 여러 아이콘 사용.
    - 약관/개인정보처리방침: popup창을 이용해 데이터 노출.

- 서비스 소개
    - 슬라이더: jquery(slick.js) 사용.
    - 사용 방법: javascript를 활용하여 탭 적용.
``` javascript
  function tabToggle(e) {
      let dataset = e.target.dataset.sort;
      // 내용이 노출될 div 영역이 자동으로 height를 못잡아서, 인자값을 전달받아 별도 함수 실행.
      resizeHeight(dataset);

      // 탭 메뉴 toggle
      // 선택된 탭 메뉴(li)에게 클래스 값 추가하여 css 변경.
      document.querySelectorAll('.how ul li').forEach((item) => {
          item.classList.remove('tab-on');
      });
      e.target.classList.add('tab-on');

      // 해당 탭 내용 toggle
      // 선택된 탭 메뉴(li)에서 data-set값을 가져와서, 이와 동일한 class를 가진 div 출력.
      document.querySelectorAll('.how .contents > div').forEach((item) => {
          if(item.className.includes(dataset)) {
              item.classList.remove('contents-off');
              item.classList.add('contents-on');
          } else {
              item.classList.remove('contents-on');
              item.classList.add('contents-off');
          }
      });
  };
```
``` javascript
  function resizeHeight(datasetName) {
      // 받아온 인자값을 class로 가진 div의 height를 판단하여 자동으로 부모 height 잡아줌.
      document.querySelectorAll('.how .contents > div').forEach((item) => {
          if(item.className.includes(datasetName)) {
              document.querySelector('.how .contents').style.height = `${item.offsetHeight}px`;
          }
      });
  };
```
