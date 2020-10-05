# nodelist_addEventListener
노드리스트의 개별 요소에 토글 이벤트를 만드는 법("여러토글버튼" 폴더 )과 이를 확장하여 개별 요소에 서로 다른 이벤트를 실행하는 함수("개별 이벤트" 폴더)를 바닐라 자바스크립트를 통해 만들어 봄
## 코딩 배경 :토글 버튼을 만드는 코드에서의 문제점
### ● 토글 버튼을 만들 때 사용하는 코드

###### java script 
```
(function (window, document) {
  'use strict';
  const $toggles = document.querySelectorAll('.toggle');
  const $toggleBtn = document.querySelector('.toggle-btn'); 
  
  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });
   });
  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }
  })(window, document);

```
### ● 위 코드에서의 문제점 
#####  노트리스트와 addEventListenr
  노드 리스트는 배열과 유사하지만 배열이 아니므로 (개별 객체가 아님) 내장함수를 사용할 수 없다. 즉, $toggleBtn = document.querySelector**All**('.toggle-btn') 과 $toggleBtn.**addEventListener** 를 
함께 사용할 수 없어서 한 페이지에 토글 기능을 실행 시킬 버튼이 여러개 있을 시에 각 토글 버튼 당 토글 기능을 실행시킬 코드를 여러번 써주어야 하는 비효율적인 상황이 생긴다. 
이에 코드를 한번만 작성하여 여러개의 버튼에 코글 기능을 실행시킬 방법과 이에 더 나아가 버튼을 클릭 시 다른 객체가 나타나는 기능을 각 버튼마다 다른 객체가 나타나도록 하는 함수를 만들어 봄


## 문제점 해결과 확장
### 1. 문제점 해결 : 개별 요소마다 토글 버튼 기능 생성하기 
  foreach문을 이용하여 개별 요소마다 토글 기능이 실행되도록 하였다. 
 
###### java script
  ```
  const $toggles = document.querySelectorAll(".toggle");
const toggleBtns = document.querySelectorAll(".toggle_btn");


function forEach () {toggleBtns.forEach(
  function(Btn) {
   Btn.addEventListener("click",function(){ Btn.classList.toggle("change")},false);
  }
);}

forEach();
  ```
  
### 2. 확장: 개별 요소에 서로 다른 이벤트 연결하기 
 for 반목문과 연결 시키는 버튼과 객체가 각자의 부모요소에서 동일한 순서에 있게 작성하여 arrya[i]를 이용했다.
 
###### html
```
<body>
  <div id="flex">
    <div class="toggle_btn one ">1</div>
    <div class="toggle_btn two">2</div>
  </div>
  <div >
    <div class="toggle">
    one 
    </div>
    <div class="toggle">
    two
    </div>
  </div>
</body>
```
###### java script
```
const toggles = document.querySelectorAll(".toggle");
const toggleBtns = document.querySelectorAll(".toggle_btn");

function addEventListenerList( ){
   for (let i = 0; i < toggleBtns.length ; i++ ) {
    const btn=toggleBtns[i] ; 
    const box =toggles[i];
    console.log(btn,box);
    console.log(box.classList);
    btn.addEventListener("click", function(){box.classList.toggle("on");}) ;
     
 
     ;} }
addEventListenerList( );
```
