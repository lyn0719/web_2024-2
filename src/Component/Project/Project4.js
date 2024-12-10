import "../CSS/Project.css";

const Project4 = () => {
  return (
    <div className="pjcontainer">
      <h1 className="h1text">Proxy 서버를 이용한 Web 프로젝트</h1>

      <fieldset className="project-overview">
        <legend>프로젝트 개요</legend>
        <p>
          이 프로젝트는 React 클라이언트와 Express 백엔드 서버를 구축하고, 
          <strong>Proxy 서버</strong>를 사용하여 클라이언트와 서버 간의 CORS 문제를 해결한 웹 애플리케이션입니다. 
          React 애플리케이션에서 외부 API를 호출할 때 발생할 수 있는 CORS 에러를 방지하고, 백엔드와 클라이언트 간의 안전한 데이터 전송을 위한 Proxy 서버를 설정했습니다. 
          이를 통해 웹 애플리케이션의 보안을 강화하고, 서버와 클라이언트의 분리된 구조에서 효율적인 API 호출을 할 수 있었습니다.
        </p>
        <ul>
          <li>React 클라이언트를 사용하여 프론트엔드 애플리케이션을 구축했습니다.</li>
          <li>Express.js로 백엔드 서버를 구축하고 RESTful API를 설계했습니다.</li>
          <li>Proxy 서버를 설정하여 클라이언트와 서버 간의 CORS 문제를 해결했습니다.</li>
          <li>클라이언트에서 API 요청 시, Proxy 서버를 통해 데이터를 안전하게 주고받을 수 있도록 구현했습니다.</li>
        </ul>
      </fieldset>

      <section className="project-details">
        <h2>프로젝트 세부 사항</h2>
        <div className="project-section">
          <h3>사용한 기술 스택</h3>
          <ul>
            <li>React (Frontend Framework)</li>
            <li>Express.js (Backend Framework)</li>
            <li>CORS Proxy (Cross-Origin Resource Sharing)</li>
            <li>Node.js (Backend Runtime)</li>
            <li>HTML, CSS, JavaScript (기본 웹 기술)</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>학습한 내용</h3>
          <ul>
            <li>React에서 API 호출 시 CORS 에러를 해결하기 위해 Proxy 서버 설정 방법을 학습했습니다.</li>
            <li>Express.js에서 Proxy 서버를 설정하여 React와 백엔드 서버 간의 요청을 중계하는 방법을 배웠습니다.</li>
            <li>RESTful API 설계 및 클라이언트와 서버 간의 데이터 통신을 효율적으로 처리하는 방법을 익혔습니다.</li>
            <li>Proxy 서버를 활용하여 클라이언트와 서버의 분리된 구조에서도 원활하게 데이터를 주고받을 수 있는 방법을 배웠습니다.</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>구현한 주요 기능</h3>
          <ul>
            <li>API 요청 시 CORS 문제를 해결하기 위해 Proxy 서버를 사용했습니다.</li>
            <li>React에서 서버 API를 호출하여 데이터베이스에 있는 정보를 클라이언트에 표시했습니다.</li>
            <li>Express 백엔드에서 RESTful API를 구축하고, 클라이언트에서 API 요청을 처리했습니다.</li>
            <li>Proxy 서버를 통해 외부 API와의 데이터 연동을 원활하게 처리했습니다.</li>
          </ul>
        </div>
      </section>

      <section className="project-outcome">
        <h2>프로젝트 결과 및 느낀 점</h2>
        <p>
          이 프로젝트를 통해 Proxy 서버를 이용한 웹 애플리케이션 구조를 실습하면서, 클라이언트와 백엔드 서버 간의 분리된 환경에서도 효율적으로 데이터를 주고받을 수 있었습니다. 
          CORS 문제를 해결하는 과정에서 Proxy 서버 설정의 중요성을 깨달았고, 이를 통해 보안과 효율성을 높일 수 있었습니다. 
          또한, 백엔드 API와 클라이언트의 연동을 원활하게 처리하는 방법을 배운 점이 매우 유익했습니다. 
          이 프로젝트는 실제 웹 애플리케이션에서 겪을 수 있는 문제들을 해결하며, 실무에서 활용 가능한 기술을 익히는 데 큰 도움이 되었습니다.
        </p>
      </section>
    </div>
  );
};

export default Project4;
