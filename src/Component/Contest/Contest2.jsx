import "../CSS/Contest1.css";  // CSS 파일을 동일하게 사용
import contestImage from "./contest2.png";

const Contest2 = () => {
  return (
    <div className="contest1-container">
      <h1 className="contest1-title">2024년 국민체육진흥공단 공공데이터 활용 경진대회</h1>
      <img src={contestImage} alt="Kspo Contest" className="contest1-image" />

      <fieldset className="contest1-overview">
        <legend>공모전 개요</legend>
        <p><strong>참가 자격:</strong> 예비창업자 및 사업자 국민 (기업, 단체, 개인) 누구나</p>
        <p><strong>공모 주제:</strong> 공공데이터포털(www.data.go.kr) 및 문화빅데이터플랫폼(www.bigdata-culture.kr)에 등록된 국민체육진흥공단과 체육종합빅데이터센터의 데이터를 활용한 자유공모 혹은 지정공모 중 선택</p>
        <p><strong>공모 일정:</strong> 공모접수 : 2024년 11월 1일(금) ~ 12월 8일(일) <br />
        결과발표 : 12월 13일(금) 예정 <br />
        시상식 : 12월 18일(수) 예정</p>

        <h3>접수 방법</h3>
        <ul>
          <li>이메일(bdcenter@kspo.or.kr)로 제출기간 내 서류 제출</li>
          <li>파일명 및 메일 제목은 “부문명_과제명_개인(팀)/단체/기업명”으로 작성</li>
        </ul>

        <h3>유의 사항</h3>
        <ul>
          <li>접수 마감일까지 시제품(Prototype, GUI 형태) 구현이 완료된 제품(서비스)이어야 하며, 이를 증빙할 수 있는 자료(제품 사진, 서비스 URL, 화면 캡처 등)를 반드시 첨부</li>
          <li>발표심사 없이 서류심사만 이루어지며, 시상 시 사례 발표 필수</li>
          <li>다작 응모 가능하나, 수상작 선정 시 최고점수를 받은 한 개의 작품만 수상 가능</li>
        </ul>

        <h3>문의 사항</h3>
        <ul>
          <li>이메일: bdcenter@kspo.or.kr</li>
          <li>전화: 02-410-1674</li>
        </ul>

        <h3>자세한 내용 및 접수:</h3>
        <a href="https://linkareer.com/" target="_blank" rel="noopener noreferrer">링커리어 웹사이트</a>
      </fieldset>
    </div>
  );
};

export default Contest2;
