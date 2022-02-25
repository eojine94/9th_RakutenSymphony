# 라쿠텐심포니 코리아 Frontend Developer 기술 과제

## 3조 삼전십만가조

- [김상훈](https://github.com/Ho0on)
- [오동녘어진이](https://github.com/eojine94)

<br/>

---

<br/>

## 🚀 배포 주소

[🔗 데모 링크](http://wantedpreonboardingenergybalance.s3-website.ap-northeast-2.amazonaws.com)

<br/>

---

<br/>

## ✅ 과제 구현 목록

**_링크 목록 화면_**

- 링크로 공유한 파일(들)을 다운로드 받을 수 있는 링크 목록을 확인할 수 있습니다.

1. 서버에서 제공한 링크 데이터를 화면에 표시합니다.
2. 링크 아이템을 클릭하여 상세페이지로 이동합니다.
3. 제목 아래 URL을 아래와 같이 표시합니다.

   3-1.유효기간 이내: 도메인 주소를 포함한 상세페이지로 이동하는 전체경로를 표시합니다.

   3-2.유효기간 만료: `만료됨`으로 표시합니다.

4. URL을 클릭한 경우 아래와 같이 동작합니다.

   4-1. 유효기간 이내: URL를 클립보드에 복사하고 `${링크 제목} 주소가 복사 되었습니다.`를 내용으로 가지는 브라우저 기본 Alert을 표시합니다.

   4-2. 유효기간 만료: 아무동작도 하지 않습니다.

5. 파일 개수의 숫자에 3자리 단위마다 콤마를 표시합니다.

6. 파일 사이즈를 읽을 수 있도록 표시해주세요.

   6-1. 소수점 둘째 자리까지 표기합니다.

   6-2. 단위는 숫자 뒤에 `B`, `KB`, `MB`, `GB`, `TB`로 표기 (ex. 10.86KB)

7. 유효기간을 아래와 같이 표시하되 실시간으로 반영합니다.

   7-1. 48시간 미만: `XX시간 XX분`

   7-2. 48시간 이상: `X일`

   7-3. 만료: `만료됨`

8. 받은 사람이 있을 경우 받은 사람 텍스트를 미리 주어진 코드베이스와 같이 `<Avatar />`컴포넌트를 이용합니다.

<br/>

**_링크 상세 화면_**

- 링크가 가지고 있는 파일 목록을 확인하고 공유 받을 수 있습니다.

1. 링크 정보를 표시합니다.

2. 받기 버튼을 누르면 `다운로드 되었습니다.`를 내용으로 가지는 브라우저 기본 Alert을 표시합니다.

3. 링크의 유효기간이 만료 되지 않았을 경우에만 파일 목록을 표시합니다.

<br/>

---

<br/>

## 💥 트러블 슈팅

1. 링크목록 API통신시 개발단계에는 프록시를 사용하여 통신 하였으나 배포단계에서 백엔드 서버의 'Access-Control-Allow-Origin' 설정이 안되어있어서 요청은 가나 데이터 응답이 오지 않음
   - Mock Data를 작성하여 통신

<br/>

2. Thumbnail svg Url이미지를 못 불러오는 현상
   - 웹팩 로더 문제인줄 알았으나 Url의 클라이언트 요청 거부(403 에러)로 인해 이미지를 못 불러옴. 기본제공된 default.svg 이미지를 활용

<br/>

---

<br/>

## 💻 설치 및 시작하는 법

1. 파일 클론 받기

```
git clone https://github.com/eojine94/wanted_pre_onBoarding_Rakuten.git
```

2. 패키지 설치

```
yarn install
```

3. 실행

```
yarn start
```
