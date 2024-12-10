import "../CSS/Contest1.css";
import contestImage from "./contest3.jpg";

const Contest3 = () => {
  return (
    <div className="contest1-container">
      <h1 className="contest1-title">허위정보 대응 아이디어 공모전 (Counter-Disinformation Challenge)</h1>
      <img src={contestImage} alt="Disinformation Contest" className="contest1-image" />

      <fieldset className="contest1-overview">
        <legend>공모전 개요</legend>
        <p>
          <strong>공모명:</strong> 허위정보 대응 아이디어 공모전 (Counter-Disinformation Challenge)
        </p>
        <p>
          <strong>목적:</strong> 외국 정부나 그 연계세력이 허위정보를 국내에 확산시켜 우리나라의 안보와 국익을 저해하는 실태에 대한 문제의식을 제고하고, 이에 효과적으로 대응하기 위해 대학생의 참신한 아이디어를 수렴
        </p>
        <p>
          <strong>공모 주제:</strong> 외국의 허위정보에 대응하기 위한 아이디어
        </p>
        <h3>공모 분야</h3>
        <ul>
          <li>#1 허위정보 찾아내기: 온라인상 외국의 허위정보 확산 실제사례 검색 – 국내 포털사이트, SNS, 온라인 커뮤니티 등에서 외국인 등이 한국인으로 위장하여 게시, 확산하는 허위정보를 찾아내어 그 캡처 이미지와 함께 자신만의 검색 및 구별 방법을 기술</li>
          <li>#2 허위정보 대응 아이디어: 허위정보 확산 방지를 위한 아이디어</li>
        </ul>

        <h3>공모 방법</h3>
        <ul>
          <li>두 개 분야 중 한 분야를 선택하여 지원하거나, 두 분야 모두 지원 가능</li>
        </ul>

        <h3>공모 기간</h3>
        <ul>
          <li>2024. 9. 25(수) ~ 11. 15(금) / 시상식: 12월 초 예정</li>
        </ul>

        <h3>참여 대상</h3>
        <ul>
          <li>국내 대학교 및 대학원 재학생(휴학생 포함, 개인 또는 팀)</li>
        </ul>

        <h3>접수 방법</h3>
        <ul>
          <li>공모전 홈페이지에서 제출 서류 다운로드 후 이메일(circ@kaist.ac.kr)로 발송</li>
        </ul>

        <h3>시상 내역</h3>
        <ul>
          <li>대상(1명): 300만원</li>
          <li>최우수상(3명): 200만원</li>
          <li>우수상(3명): 100만원</li>
        </ul>

        <h3>자세한 내용 및 접수:</h3>
        <a href="https://isc.kaist.ac.kr" target="_blank" rel="noopener noreferrer">KAIST 공모전 홈페이지</a>
      </fieldset>
    </div>
  );
};

export default Contest3;
