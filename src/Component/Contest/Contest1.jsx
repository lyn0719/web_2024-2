import "../CSS/Contest1.css";  // CSS 파일 이름 변경
import contestImage from "./contest1.jpg";

const Contest1 = () => {
  return (
    <div className="contest1-container">
      <h1 className="contest1-title">2024년 클라우드 아이디어 공모전</h1>
      <img src={contestImage} alt="Cloud Contest" className="contest1-image" />

      <fieldset className="contest1-overview">
        <legend>공모전 개요</legend>
        <p>
          <strong>공모명:</strong> 2024년 클라우드 아이디어 공모전
        </p>
        <p>
          <strong>공모기간:</strong> 2024. 10. 14.(월) ~ 11. 17.(월)
        </p>
        <p>
          <strong>공모주제:</strong> 클라우드 기반 기술 활용 창의적인 아이디어 제안 및 구현
        </p>
        <p>
          <strong>공모대상:</strong> 클라우드 기반 기술 활용 아이디어 제안이 가능한 만 19세 이상 일반인(전국 대학생, 재직자, 취업준비생 등)
        </p>
        <p>
          <strong>접수방법:</strong> (재)부산정보산업진흥원 사업공고에서 서류일체 확인 후 이메일로 온라인 제출
        </p>

        <h3>심사 절차</h3>
        <ul>
          <li>1차 서류 심사</li>
          <li>2차 발표 심사</li>
          <li>수상팀 선정</li>
        </ul>

        <h3>시상규모</h3>
        <ul>
          <li>최우수상 1팀: 상금 400만원 및 부산시장상</li>
          <li>우수상 1팀: 상금 200만원 및 주관기업대표상</li>
          <li>장려상 1팀: 상금 100만원 및 주관기관장상</li>
          <li>장려상 2팀: 상금 50만원 및 주관기관장상</li>
        </ul>
        <p>총 5팀 시상, 상금 총 800만원</p>

        <h3>공모전 주제 예시</h3>
        <ul>
          <li>헬스케어 솔루션 - 개인 맞춤형 치료, 건강 추적 서비스, 병원 이용 간소화 서비스, 스마트기기 연동 서비스 등</li>
          <li>금융 솔루션(핀테크) - 기업에 필요한 금융환경 개선 서비스, 안전하고 편리한 본인인증 서비스 등</li>
          <li>협업 및 일정 관리 솔루션(툴) - 교내/사내 팀 프로젝트 관리 및 협업 툴, 개인의 학업 및 스케줄 관리 툴</li>
          <li>학교/사내 시스템의 디지털 전환 - 시설물 예약, 학생/직원 관리, 학식/구내식당 키오스크 등</li>
        </ul>

        <h3>입상자 특전</h3>
        <ul>
          <li>입상팀 전원 더존비즈온 입사 지원 시 서류평가 생략 후 면접 기회 제공</li>
          <li>IT 관련 전공자 또는 관련 자격증 보유자는 더존비즈온 개발직 인턴 채용 기회 제공</li>
        </ul>

        <h3>자세한 내용 및 접수:</h3>
        <a href="https://linkareer.com/" target="_blank" rel="noopener noreferrer">링커리어 웹사이트</a>
      </fieldset>


    </div>
  );
};

export default Contest1;
