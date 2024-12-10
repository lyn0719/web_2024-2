import "../CSS/Project.css";
import projectImage from "./nodejs.png";

const Project3 = () => {
  return (
    <div className="pjcontainer">
      <h1 className="h1text">Node.js 이용한 Backend Web 개발</h1>
      <img src={projectImage} alt="Node.js Logo" className="project-image" />

      <fieldset className="project-overview">
        <legend>프로젝트 개요</legend>
        <p>
          이 프로젝트는 Node.js와 Express.js를 사용하여 만든 간단한 백엔드 웹 애플리케이션입니다. 
          <strong>간단한 블로그 API</strong>를 구현하였으며, 사용자가 게시글을 작성하고, 수정하고, 삭제할 수 있는 기능을 제공합니다. 
          MongoDB와 Mongoose를 활용하여 데이터를 저장하고 관리하며, JWT(JSON Web Token)를 이용하여 사용자 인증 기능을 구현하였습니다. 
          이 프로젝트를 통해 RESTful API 설계, 데이터베이스 연결, 사용자 인증을 실습할 수 있습니다.
        </p>
        <ul>
          <li>Node.js와 Express.js의 기본 개념을 익히고, 서버 사이드 애플리케이션을 구축했습니다.</li>
          <li>MongoDB와 Mongoose를 사용하여 데이터베이스를 연결하고 데이터를 CRUD 방식으로 처리했습니다.</li>
          <li>JWT(JSON Web Token)를 활용하여 인증 시스템을 구현했습니다.</li>
          <li>RESTful API를 설계하고, 클라이언트와 서버 간의 통신을 처리했습니다.</li>
        </ul>
      </fieldset>

      <section className="project-details">
        <h2>프로젝트 세부 사항</h2>
        <div className="project-section">
          <h3>사용한 기술 스택</h3>
          <ul>
            <li>Node.js (Backend Runtime)</li>
            <li>Express.js (웹 서버 프레임워크)</li>
            <li>MongoDB (NoSQL 데이터베이스)</li>
            <li>JWT (JSON Web Token, 인증 시스템)</li>
            <li>HTML, CSS, JavaScript (기본 웹 기술)</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>학습한 내용</h3>
          <ul>
            <li>Node.js의 비동기 처리와 이벤트 루프를 이해하고, 이를 활용한 서버 구축 방법을 배웠습니다.</li>
            <li>Express.js를 사용하여 RESTful API를 설계하고 서버를 구성하는 방법을 익혔습니다.</li>
            <li>MongoDB와 Mongoose를 사용하여 데이터를 모델링하고 CRUD 작업을 처리하는 방법을 배웠습니다.</li>
            <li>JWT를 사용하여 클라이언트와 서버 간의 인증을 처리하고 보안을 강화하는 방법을 익혔습니다.</li>
            <li>RESTful API 설계를 통해 프론트엔드와 백엔드 간의 효율적인 데이터 전달 방법을 배웠습니다.</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>구현한 주요 기능</h3>
          <ul>
            <li>사용자 회원가입 및 로그인 기능: 사용자가 이메일과 비밀번호로 회원가입하고 로그인할 수 있습니다.</li>
            <li>게시글 작성 기능: 사용자가 게시글을 작성하고 서버에 저장할 수 있습니다.</li>
            <li>게시글 수정 및 삭제 기능: 사용자가 본인이 작성한 게시글을 수정하거나 삭제할 수 있습니다.</li>
            <li>JWT 인증 시스템: 로그인 시 JWT 토큰을 발급하고, 이를 통해 사용자 인증을 처리합니다.</li>
          </ul>
        </div>
      </section>

      <section className="project-outcome">
        <h2>프로젝트 결과 및 느낀 점</h2>
        <p>
          이 프로젝트를 통해 Node.js와 Express.js를 활용하여 실제적인 서버 개발을 경험할 수 있었습니다. 
          MongoDB와 JWT를 이용한 인증 시스템을 적용하며 데이터 저장 및 보안을 처리하는 방법을 익혔습니다. 
          또한, RESTful API 설계를 통해 웹 애플리케이션의 효율적인 데이터 흐름과 관리 방법을 배웠습니다. 
          이 프로젝트는 실제로 구현할 수 있는 블로그 API를 만드는 과정에서 유용한 기술들을 학습할 수 있는 기회가 되었습니다.
        </p>
      </section>
    </div>
  );
};

export default Project3;
