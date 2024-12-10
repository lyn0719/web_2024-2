import "../CSS/Project.css";

const Project1 = () => {
  return (
    <div className="pjcontainer">
      <h1 className="h1text">React를 이용한 Frontend Web 개발</h1>

      <fieldset className="project-overview">
        <legend>프로젝트 개요</legend>
        <p>
          이 프로젝트는 React를 사용해 만든 간단한 <strong>게시판 애플리케이션</strong>으로, CRUD 기능을 통해 사용자가 게시글을 추가, 수정, 삭제할 수 있습니다.
          사용자 인증을 위한 로그인 및 로그아웃 기능이 있으며, 전체 데이터를 <strong>REST API</strong>와 연동하여 서버에 저장하는 구조입니다.
        </p>
        <ul>
          <li>React 컴포넌트 구조로 애플리케이션을 구성하고, 코드의 재사용성을 높였습니다.</li>
          <li>React Router로 라우팅을 처리하여 페이지 간 빠른 전환이 가능하게 구현했습니다.</li>
          <li>Axios를 사용하여 API와의 통신을 처리하고, 비동기 요청 상태를 관리했습니다.</li>
          <li>Context API와 useReducer를 사용하여 전역 상태 관리를 효율적으로 구현했습니다.</li>
        </ul>
      </fieldset>

      <section className="project-details">
        <h2>프로젝트 세부 사항</h2>

        <div className="project-section">
          <h3>사용한 기술 스택</h3>
          <ul>
            <li>React (Frontend Library)</li>
            <li>React Router (라우팅)</li>
            <li>Axios (API 통신)</li>
            <li>Context API + useReducer (상태 관리)</li>
            <li>CSS Modules, Styled-Components (스타일링)</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>학습한 내용</h3>
          <ul>
            <li>React의 컴포넌트 시스템과 상태 관리 기법을 익혀, 애플리케이션을 모듈화하는 방법을 학습했습니다.</li>
            <li>React Router로 싱글 페이지 애플리케이션을 구현하고, 페이지 전환을 부드럽게 처리하는 방법을 익혔습니다.</li>
            <li>Axios를 통해 API와 비동기 통신을 구현하고, 로딩 및 에러 상태를 관리하는 기법을 배웠습니다.</li>
            <li>Context API와 useReducer를 사용해 전역 상태를 효율적으로 관리하고, 상태의 일관성을 유지하는 방법을 배웠습니다.</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>구현한 주요 기능</h3>
          <ul>
            <li>게시글 추가, 수정, 삭제: 사용자가 게시글을 자유롭게 관리할 수 있는 CRUD 기능을 제공합니다.</li>
            <li>사용자 인증: JWT를 활용하여 로그인 상태를 유지하고, 인증된 사용자만 특정 기능에 접근할 수 있게 설정했습니다.</li>
            <li>게시글 검색 기능: 입력된 키워드에 맞춰 게시글 목록을 필터링하여 필요한 정보를 쉽게 찾을 수 있도록 구현했습니다.</li>
            <li>전역 상태 관리: useContext와 useReducer로 전역 상태를 관리해, 여러 컴포넌트에서 데이터와 상태를 공유했습니다.</li>
          </ul>
        </div>
      </section>

      <section className="project-outcome">
        <h2>프로젝트 결과 및 느낀 점</h2>
        <p>
          이 프로젝트를 통해 React의 주요 개념들을 학습하고 실제로 적용해 볼 수 있었습니다. 특히 상태 관리를 Context API와 useReducer로 처리하면서,
          컴포넌트 간 데이터 흐름을 관리하는 기법을 이해하게 되었습니다. 또한, Axios로 API와 비동기 통신을 구현하며 서버와의 데이터 일관성을 유지하는 법을 익힐 수 있었습니다.
          전반적으로 코드 재사용성을 고려한 설계와 상태 관리의 중요성을 깨닫게 된 유익한 프로젝트 경험이었습니다.
        </p>
      </section>
    </div>
  );
};

export default Project1;
