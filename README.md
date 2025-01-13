# 2025 Kangnam Univ Hackathon: ‘강냉톤’
## AIRRROOM  대학교 강의실 예약 및 AI 추천 서비스

# 프로젝트 정보
## 개발 기간
* **2025.01.10 ~ 2025.01.11**
## 팀원
**기획**
* [김이레](https://github.com)
* [이유빈](https://github.com/yuvvinn)

**디자인**
* [김이레](https://github.com)
* [이유빈](https://github.com/yuvvinn)

**백엔드개발**
* [김진석](https://github.com/seooooooooook)

**프론트엔드개발**
* [김진석](https://github.com/seooooooooook)
* [홍재원](https://github.com/hongjaewon62)

* 백엔드 깃허브 : [백엔드 레포지토리](https://github.com/seooooooooook/airroom)
* 프론드 깃허브 : [프론트 레포지토리](https://github.com/hongjaewon62/Airrroom)

## 사용 기술
### 프론트

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>

### 백엔드

<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"/>
<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=springboot&logoColor=white"/>
<img src="https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white"/>

## 기획 의도
* **번거로운 기존 강의실 예약 시스템**
  * 연락 -> 신청 -> 확인 -> 승인 -> 확정 등 번거로운 강의실 예약과정을 빠르고 간편하게 할 수 있고, 사용자는 실시간으로 예약 현황을 확인하고, 최소한의 클릭만으로 예약을 완료할 수 있습니다.
* **잠깐 쉴 수 있는 빈 강의실 찾기 어려움**
  * 다음 수업이 끝나기 전에 도착한다면 문 앞에서 기다려야 하지만 등록된 강의실 시간표를 기반으로 수업을 하고 있지 않은 빈 강의실을 쉽게 찾아 잠깐 쉴 수 있습니다.

# 프로그램 소개
* AIRROOM은 복잡한 강의실 예약 과정을 간소화한 시스템입니다. 기존의 복잡한 절차를 없애고, 사용자가 실시간 예약 현황을 확인하며  예약할 수 있습니다. 또한, 빈 강의실을 쉽게 찾아 짧은 시간 동안 편안하게 쉴 수 있는 서비스입니다.

## 스토리보드
* [스토리보드 Figma](https://www.figma.com/design/oXMrb6Mug8L9iJ9S5KxDCc/AIRRROOM?node-id=0-1&t=eWPirFGS83soHuoh-1)
<img src="https://github.com/hongjaewon62/Airrroom/blob/main/ReadmeImg/figma.png" width="60%" height="60%" />

## 기획
<img src="https://github.com/hongjaewon62/Airrroom/blob/main/ReadmeImg/planning.PNG" width="80%" height="80%" />

## 서비스 소개
[깃허브 페이지 보기](https://hongjaewon62.github.io/Airrroom/)

**메인페이지**
<img src="https://github.com/hongjaewon62/Airrroom/blob/main/ReadmeImg/main.PNG" />

* 회원가입, 로그인, 마이페이지, AI 강의실 추천, 강의실 조회 및 예약을 할 수 있습니다.

**로그인, 회원가입**

<img src="https://github.com/hongjaewon62/Airrroom/blob/main/ReadmeImg/login.PNG" width="60%" height="60%" />

* 이름과 아이디, 비밀번호를 입력 후 회원가입과 로그인을 할 수 있습니다.

**AI 기반 강의실 추천**

<img src="https://github.com/hongjaewon62/Airrroom/blob/main/ReadmeImg/ai.PNG" width="70%" height="70%" />

* 등록한 시간표를 기준으로 끝난 수업 강의실주변 빈 강의실, 다음 수업 강의실 주변 강의실을 추천합니다.

**강의실 조회 및 예약**

<img src="https://github.com/hongjaewon62/Airrroom/blob/main/ReadmeImg/room.PNG" width="70%" height="70%" />

* 예약할 수 있는 강의실 목록을 보여주고 클릭 시 예약합니다.
  * 검색만 가능하며, 예약은 시간부족으로 구현하지 못했습니다.

**시간표 등록**

<img src="https://github.com/hongjaewon62/Airrroom/blob/main/ReadmeImg/timetable.PNG" width="70%" height="70%" />

* 시간표를 등록하면 AI가 시간표를 기준으로 강의실을 추천합니다.

**강의실 예약 내역 조회**

<img src="https://github.com/hongjaewon62/Airrroom/blob/main/ReadmeImg/check.PNG" width="70%" height="70%" />

* 강의실 예약 내역을 확인할 수 있습니다.
  * 시간 부족으로 예약을 구현하지 못해 내역 조회를 구현하지 못했습니다.

    ### 기능 상세 소개
    * **로그인, 회원가입** : fetch 함수를 사용해 서버의 데이터를 받고 보낼 수 있습니다.
    * **AI 기반 강의실 추천** : 등록한 시간표 데이터를 받아 OpenAI가 강의실을 추천합니다.
    * **강의실 검색** : fetch 함수와 URLSearchParams으로 날짜, 건물, 시간을 선택해 검색할 수 있습니다.

## 팀원별 구현 부분
* **김이레**
  * 기획, 스토리보드, 디자인

* **이유빈**
  * 기획, 스토리보드, 디자인

* **김진석**
  * 로그인, 회원가입 인증 API, 강의실 조회, 예약, 예약 내역, 취소 등 예약 API, 강의실 API, 수업 추가, 조회 시간표 API
  * AI 기반 강의실 추천 페이지 OpenAI 추천 기능

* **홍재원**
  * 메인페이지, 로그인, 회원가입, 강의실 조회, AI 기반 강의실 추천, 예약 내역 페이지

