Install

위젯이 들어갈 적절한 위치에 HTML을 추가합니다.

<body>
	...
	<div id="FASHIONADE_STYLE_WITH"></div>
	...
</body>


Web SDK의 실행을 위해 JS파일을 임포트합니다.

단, 위에서 추가한 HTML보다 하단에 위치해야 합니다.

<body>
  <div id="FASHIONADE_STYLE_WITH"></div>
  ...
  <script src="<https://fashionade2020.github.io/style.ai-sdk/v2/stylewith.min.js>"></script>
</body>


이 후 위젯을 동작하게 하는 JAVASCRIPT 코드를 작성합니다.

<body>
	...
	<div id="FASHIONADE_STYLE_WITH"></div>
	...
    <script src="<https://fashionade2020.github.io/style.ai-sdk/v2/stylewith.min.js>"></script>
		<script>
			FASHIONADE_STYLE_WITH.init({
		    apiKey: {API KEY},
			productId: '',
		    style: {
		        title: '',
		        buttonWrapSelectors: `
		            #contents > div.xans-element-.xans-product.xans-product-detail.section > div.detailArea > div.xans-element-.xans-product.xans-product-image.imgArea > div.RW,
		            #contents > div.xans-element-.xans-product.xans-product-detail.section > div.detailArea > div.xans-element-.xans-product.xans-product-image.imgArea > div.RTMB
						`,
		        text: `
		            #header.fixed {z-index:1001;}
		            .FASHIONADE_STYLE_WITH_BUTTON {right:16px;top:16px;z-index:1000;}
		            #FASHIONADE_STYLE_WITH .carousel-cell .name {font-size:12px;color:#555555;}
		            #FASHIONADE_STYLE_WITH .carousel-cell .price {font-size:12px;color:#008BCC;font-weight:bold;}
		        `
		    }
			});
		</script>
</body>




설정 옵션(*는 필수)

이름

기본값

비고

apiKey*

API KEY

productId

상품ID

product:productId 메타 태그 값

그 외 로직에 따른 선택자

해당 메타 태그 및 기본 로직으로productId를 찾지 못할 경우 위젯 렌더링되지 않음

찾지 못 할 경우 CSS 선택자로 지정 가능

style.title

제목

함께 코디하기 좋은 상품

style.buttonWrapSelectors

위젯 바로가기 버튼 여부

버튼이 삽입될 위치를 CSS 선택자로 지정 가능

작성하지 않을 경우 버튼 미노출

style.text

그 밖의 스타일링

이 외의 스타일 변경을 하려면 css 추가 작성 가능(하단 Styling 참고)

Styling

해당 위젯은 쇼핑몰의 스타일을 상속 받으나 그렇지 못한 경우 아래와 같이 수기 작성이 가능합니다.

이 때 쇼핑몰 상단에서 정의된 스타일을 덮어 쓸 수 있음을 유의해야 한다.

/* 바로가기 버튼 */
.FASHIONADE_STYLE_WITH_BUTTON {right:0;top:0;z-index:1000;}

/* 상품명 */
#FASHIONADE_STYLE_WITH .carousel-cell .name {font-size:12px;color:#555555;}

/* 가격 */
#FASHIONADE_STYLE_WITH .carousel-cell .price {font-size:12px;color:#008BCC;font-weight:bold;}
