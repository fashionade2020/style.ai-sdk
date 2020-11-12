# 쇼핑몰 상품 추천 SDK


### SDK 초기화
```
FASHIONADE({
    appKey: 'abcdefgh', // 필수
    renderUi: 'https://asdfjsdlf.com/render.tmpl', // 렌더링용 템플릿 설정(옵션)
    dialogUi: 'https://asdfjsdlf.com/dialog.tmpl', // 오버레이용 템플릿 설정(옵션)
    productId: '12345678',  // 상품번호(옵션, 단 초기화 또는 render 한군데서는 입력)
}, {
    // 로그 전송시 ext에 포함, 자유포맷
    userId: '쇼핑몰 userId',
    age: '10-20',
})
```

### HTML
```
<!-- 렌더링 타입 -->
<div data-fashionade-render="recommend" data-fashionade-render-recommend-type="render"></div>

<!-- 오버레이 타입 -->
<div data-fashionade-render="recommend" data-fashionade-render-recommend-type="overlay"></div>

<!-- 오버레이 버틍 -->
<button
    data-fashionade-open-layer="recommend"
    class="fashionade--btn-overlay"
>추천상품 오버레이(오버레이일 경우)</button>
```

### 자바스크립트
```
FASHIONADE.render(
    {productId: '12345678'}  // productId는 SDK 초기화시 입력했다면 생략 가능
)
```

### 스타일
```
/* 오버레이 버튼 스타일 수정 */
.fashionade--btn-overlay {
    position:absolute;
    right:15px;
    bottom:13px;
    width:117px;
    height:37px;
    background-size:117px 37px;
    background-color:transparent;
    background-repeat:no-repeat;
    background-image: url("data:image/svg+xml;base64,...");
    text-indent:-99999em;
    border:0 none;
}
```
