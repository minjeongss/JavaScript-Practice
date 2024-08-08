# Storage와 Cookie에 대해 분석해보자! 🍪

## 참고 주소

- [LocalStorage VS SessionStorage VS Cookie](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-localStorage-sessionStorage)
- [LocalStorage VS SessionStorage VS Cookie 2](https://velog.io/@hs0217/%EC%BF%A0%ED%82%A4-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%84%B8%EC%85%98-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80)
- [Cookie](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%BF%A0%ED%82%A4Cookie-%EB%8B%A4%EB%A3%A8%EA%B8%B0)
- [Cookie 2](https://ko.javascript.info/cookie)

## Web Storage

### Local Storage

- 로컬에 도메인(하나의 주소) 별로 지속되는 storage
- 시간 제한이 없고, 브라우저가 종료되어도 삭제되지 않는다
- 값을 지우려면 직접 삭제해야 한다

### Session Storage

- 세션(프로세스, 탭, 브라우저)가 종료될 때까지 지속되는 storage
- 시간 제한이 있고, 세션이 종료되면 삭제된다
- 도메인이 같으면 항상 같은 쿠키를 보내는 문제를 해소하려 시도했다

## Cookie

- 시간 제한이 설정되어 있다면, 브라우저가 종료되어도 삭제되지 않는다
- 시간 제한이 설정되어 있지 않ㄷ면, 브라우저가 종료되면 삭제된다
- 용량이 매우 제한되어 있다(최대 4KB)

## Web Storage와 Cookie 비교

### Web Storage VS Cookie

- Web Storage: 세션 이용할 때 개발자가 선별하여 넘겨, http 통신 부하를 줄인다
- Cookie: 세션 이용할 때 응답-요청 모두 쿠키를 다 넘겨야 해 http 통신에 큰 부하를 준다
  즉, 네트워크 요청을 할 때 Web Storage는 서버로 전송이 되지 않아 Cookie보다 더 많은 자료를 보관할 수 있다.

### Local Storage VS Session Storage VS Cookie

#### Local Storage

지속적으로 필요한 데이터 저장에 활용

```
자동 로그인
```

#### Session Storage

일시적으로 필요한 무거운 데이터 저장에 활용

```
일회성 로그인, 비로그인 장바구니, 입력 폼 저장
```

#### Cookie

일시적으로 필요한 가벼운 데이터 저장에 활용

```
로그인 자동 완성, 다시 보지 않음 팝업창
```
