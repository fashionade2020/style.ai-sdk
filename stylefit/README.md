스타일핏이 들어갈 페이지의 body태그 내 하단에 해당 스크립트를 삽입합니다.

```
<body>
		...
		<script type="text/javascript" src="FFR.js"></script>
</body>
```

스타일핏 실행 버튼을 추가하기 위해 원하는 위치에 클래스명이 FASHIONADE_FITTING_ROOM_BUTTON인 버튼 태그를 삽입 합니다.

```
<body>
		<div class="FASHIONADE_FITTING_ROOM_BUTTON" style="position:absolute;left:16px;top:16px;z-index:1000"></div>
		...
		<script type="text/javascript" src="FFR.js"></script>
</body>
```

이 후 스타일핏의 기본 환경을 설정해 주세요.

이 때, 처음에 삽입했던 스크립트 하단에 작성해 주셔야 합니다.

```
<body>
		<div class="FASHIONADE_FITTING_ROOM_BUTTON" style="position:absolute;left:16px;top:16px;z-index:1000"></div>
		...
		<script type="text/javascript" src="FFR.js"></script>
		<script>
	    FASHIONADE_FITTING_ROOM.init({
	        apiKey : '{apiKey}',
	        kakaoKey : '{kakaoApiKey}'//카카오 로그인을 위해 kakao developer에서 발급 받은 키.
	    })
		</script>
</body>
```
