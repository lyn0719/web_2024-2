import "../CSS/Project.css";
import projectImage from "./vue.png";

const Project2 = () => {
  return (
    <div className="pjcontainer">
      <h1 className="h1text">Vue.js 이용한 Frontend Web 개발</h1>
      <img src={projectImage} alt="Vue.js Logo" className="project-image" />

      <fieldset className="project-overview">
        <legend>프로젝트 개요</legend>
        <p>
          이 프로젝트는 Vue.js를 사용하여 만든 프론트엔드 웹 애플리케이션으로, 
          <strong>간단한 Todo List 애플리케이션</strong>을 구현하였습니다. 
          사용자가 할 일을 추가하고, 완료 처리하고, 삭제하는 기능을 포함하고 있습니다. 
          또한, 로컬 저장소(localStorage)를 활용하여 사용자의 데이터가 브라우저를 새로고침하더라도 유지되도록 구현했습니다.
        </p>
        <ul>
          <li>Vue.js의 기본 개념을 익히고, 컴포넌트 기반으로 애플리케이션을 구성했습니다.</li>
          <li>Vue Router를 사용하여 다양한 페이지로 이동할 수 있게 구현했습니다.</li>
          <li>Vuex를 활용하여 애플리케이션의 상태 관리와 데이터 흐름을 간편하게 처리했습니다.</li>
          <li>Vue CLI로 프로젝트를 설정하고 빌드 시스템을 활용해 효율적인 개발 환경을 만들었습니다.</li>
        </ul>
      </fieldset>

      <section className="project-details">
        <h2>프로젝트 세부 사항</h2>
        <div className="project-section">
          <h3>사용한 기술 스택</h3>
          <ul>
            <li>Vue.js (Frontend Framework)</li>
            <li>Vue Router (라우팅)</li>
            <li>Vuex (상태 관리)</li>
            <li>HTML, CSS, JavaScript (기본 웹 기술)</li>
            <li>LocalStorage (브라우저 저장소)</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>학습한 내용</h3>
          <ul>
            <li>Vue.js의 컴포넌트 시스템을 이해하고, 이를 통해 애플리케이션을 모듈화하는 방법을 배웠습니다.</li>
            <li>Vue Router를 사용하여 싱글 페이지 애플리케이션(SPA)을 구현하는 방법을 익혔습니다.</li>
            <li>Vuex를 이용하여 애플리케이션의 상태를 관리하고, 컴포넌트 간의 데이터 흐름을 쉽게 처리하는 방법을 배웠습니다.</li>
            <li>로컬 저장소(localStorage)를 사용해 데이터를 유지하고, 브라우저 새로 고침 시에도 데이터를 복원하는 방법을 학습했습니다.</li>
            <li>Vue CLI로 프로젝트 설정을 자동화하고, 빌드 및 배포 환경을 설정하는 방법을 배웠습니다.</li>
          </ul>
        </div>

        <div className="project-section">
          <h3>구현한 주요 기능</h3>
          <ul>
            <li>Todo 추가 기능: 사용자가 새로운 Todo 항목을 입력하고 목록에 추가할 수 있습니다.</li>
            <li>Todo 완료 처리: 사용자가 할 일을 완료로 표시하여 UI에 반영됩니다.</li>
            <li>Todo 삭제 기능: 불필요한 Todo 항목을 삭제할 수 있습니다.</li>
            <li>로컬 저장소 사용: Todo 목록이 브라우저를 새로 고침하더라도 저장되어 유지됩니다.</li>
          </ul>
        </div>
      </section>

      <section className="project-outcome">
        <h2>프로젝트 결과 및 느낀 점</h2>
        <p>
          이 프로젝트를 통해 Vue.js의 강력한 기능들을 실습하면서 실질적인 애플리케이션을 만들 수 있었습니다. 
          Vuex와 Vue Router를 활용한 상태 관리와 라우팅을 통해 애플리케이션의 구조와 흐름을 보다 명확하게 이해할 수 있었습니다. 
          또한, 로컬 저장소를 활용하여 사용자의 데이터를 브라우저에 저장하는 방법을 배운 점이 유용했습니다. 
          Vue.js의 컴포넌트 기반 접근 방식은 코드의 재사용성과 유지보수성을 높이는 데 도움이 되었습니다.
        </p>
      </section>
    </div>
  );
};

export default Project2;
