# [Digital Agency](https://www.figma.com/community/file/1257268136779927941) 클론코딩

## 클론코딩하는 방법

> 직접 html, css를 작성한 후, 강사님과 FT님께 피드백을 받아 수정한다.

## 문제 해결

### 헤더 중앙 정렬

#### 문제 코드

```css
position: fixed;
top: 0;

width: 1440px;
height: 5vh;
```

#### 문제 해결 방법

- width 처리
  - width에 직접 px 부여X
  - width:100%, max-width에 직접 px 부여O
- height 처리
  - vh 사용X
  - % 사용 또는 컨텐츠 영역에 맞게 height 설정
- 중앙정렬 처리
  - left:0, right:0 추가

#### 피드백 후 최종 코드

```css
position: fixed;
top: 0;
left: 0;
right: 0;

width: 100%;
max-width: 1440px;
```
