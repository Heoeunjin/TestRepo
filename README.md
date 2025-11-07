# 아임웹 클론코딩

imweb.me 스타일의 모던한 템플릿 쇼케이스 웹사이트입니다.

## 기술 스택

- React 18
- React Router DOM 6
- Create React App
- CSS3

## 환경 변수

프로젝트 루트의 `.env` 파일에 다음 환경 변수를 설정할 수 있습니다:

```
REACT_APP_API_URL=http://localhost:3000/api
PORT=3000
```

## 설치 및 실행

### 로컬 개발 환경

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

### Docker를 사용한 실행

1. Docker 이미지 빌드:
```bash
docker build -t template-showcase .
```

2. Docker 컨테이너 실행:
```bash
docker run -p 3000:3000 template-showcase
```

## 프로젝트 구조

```
TestRepo/
├── public/
│   └── index.html          # HTML 진입점
├── src/
│   ├── components/         # 공통 컴포넌트
│   │   ├── Header.js      # 헤더 컴포넌트
│   │   └── Header.css     # 헤더 스타일
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── Home.js        # 홈 페이지 (템플릿 쇼케이스)
│   │   ├── Home.css       # 홈 페이지 스타일
│   │   ├── Features.js    # 주요기능 페이지
│   │   ├── Templates.js   # 템플릿 페이지
│   │   ├── Pricing.js     # 요금 페이지
│   │   ├── Expert.js      # 전문가 찾기 페이지
│   │   ├── Story.js       # 스토리 페이지
│   │   ├── Support.js     # 고객지원 페이지
│   │   └── Page.css       # 공통 페이지 스타일
│   ├── App.js             # 메인 앱 컴포넌트 (라우터 설정)
│   ├── App.css            # 앱 스타일
│   ├── index.js           # React 엔트리 포인트
│   └── index.css          # 전역 스타일
├── .env                   # 환경 변수
├── Dockerfile             # Docker 설정
├── package.json           # 프로젝트 의존성
└── README.md              # 프로젝트 문서
```

## 주요 기능

- ✅ 모던하고 깔끔한 UI/UX 디자인
- ✅ React Router를 활용한 페이지 라우팅
- ✅ 카테고리별 템플릿 필터링 및 라우팅
  - 쇼핑몰, 비즈니스 홍보, 블로그·미디어, 이벤트·프로젝트, 포트폴리오, 커뮤니티, 예약·기타
- ✅ 여러 페이지 구성
  - 홈 (템플릿 쇼케이스)
  - 주요기능
  - 템플릿
  - 요금
  - 전문가 찾기
  - 스토리
  - 고객지원
- ✅ 반응형 디자인 (모바일 지원)
- ✅ 템플릿 카드 그리드 레이아웃
- ✅ 헤더 네비게이션

## 라우팅

- `/` - 홈 (쇼핑몰 카테고리 기본)
- `/category/:category` - 카테고리별 템플릿 페이지
  - `/category/shopping` - 쇼핑몰
  - `/category/business` - 비즈니스 홍보
  - `/category/blog` - 블로그·미디어
  - `/category/event` - 이벤트·프로젝트
  - `/category/portfolio` - 포트폴리오
  - `/category/community` - 커뮤니티
  - `/category/reservation` - 예약·기타
- `/features` - 주요기능
- `/templates` - 템플릿
- `/pricing` - 요금
- `/expert` - 전문가 찾기
- `/story` - 스토리
- `/support` - 고객지원

## 개발

프로젝트는 Create React App으로 생성되었습니다. 자세한 내용은 [Create React App 문서](https://create-react-app.dev/)를 참조하세요.

## 라이선스

MIT

