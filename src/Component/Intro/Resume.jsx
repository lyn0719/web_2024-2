import '../CSS/Resume.css';
import profileImage from './profileimage.jpg';

const Resume = () => {
  return (
    <div id="resume">
      <p className="resumep">1. 기초 자료</p>
      <table className="resume-table">
        <tbody>
          <tr>
            <td rowSpan="6">
              <img src={profileImage} alt="프로필 이미지" className="resume-image" />
            </td>
            <td bgcolor="#abd3fc">성 명</td>
            <td>이예나</td>
            <td bgcolor="#abd3fc">한 문</td>
            <td>李예나</td>
          </tr>
          <tr>
            <td bgcolor="#abd3fc">주민등록번호</td>
            <td colSpan="3">040719-4******</td>
          </tr>
          <tr>
            <td bgcolor="#abd3fc">E-mail</td>
            <td colSpan="3">usolnim@naver.com</td>
          </tr>
          <tr>
            <td bgcolor="#abd3fc">전화번호</td>
            <td>010-2302-6636</td>
            <td bgcolor="#abd3fc">휴대폰</td>
            <td>010-2302-6636</td>
          </tr>
          <tr>
            <td bgcolor="#abd3fc">우편번호</td>
            <td>13120</td>
            <td bgcolor="#abd3fc">비상연락처</td>
            <td>010-2302-6636</td>
          </tr>
          <tr>
            <td bgcolor="#abd3fc">주소</td>
            <td colSpan="3">경기도 성남시 수정구 성남대로 1342</td>
          </tr>
        </tbody>
      </table>

      <p className="resumep">2. 학력사항</p>
      <table className="resume-table">
        <tbody>
          <tr>
            <th>기간</th>
            <th>상세내용</th>
            <th>비고</th>
          </tr>
          <tr>
            <td>초등학교</td>
            <td>금남초등학교</td>
            <td>졸업</td>
          </tr>
          <tr>
            <td>중학교</td>
            <td>금호중학교</td>
            <td>졸업</td>
          </tr>
          <tr>
            <td>고등학교</td>
            <td>세종장영실고등학교</td>
            <td>전학</td>
          </tr>
          <tr>
            <td>고등학교</td>
            <td>반곡고등학교</td>
            <td>졸업</td>
          </tr>
          <tr>
            <td>대학교</td>
            <td>가천대학교</td>
            <td>재학 중</td>
          </tr>
        </tbody>
      </table>

      <p className="resumep">3. 경력사항</p>
      <table className="resume-table">
        <tbody>
          <tr>
            <th>기간</th>
            <th>관련</th>
          </tr>
          <tr>
            <td>2024.05.13 ~ 2024.06.16</td>
            <td>부스트코스 {"<"}코칭스터디 Let’s AI 2024{">"}</td>
          </tr>
          <tr>
            <td>2024.08.23 ~ 2024.08.30</td>
            <td>프로그래머스 {"<"}가천대 PCCP 대비 교육 (Python){">"}</td>
          </tr>
          <tr>
            <td>2024.09.19 ~ 2025.02</td>
            <td>IT 연합 사이드 프로젝트 동아리 UMC 가천대 7기</td>
          </tr>
        </tbody>
      </table>

      <p className="resumep">4. 개인능력 및 장단점</p>
      <table className="resume-table">
        <tbody>
          <tr height="30">
            <td rowSpan="1" bgcolor="#abd3fc">자격증 및 포상</td>
            <td colSpan="3">네트워크 관리사 2급 필기</td>
            <td>한국정보통신자격협회</td>
          </tr>
          <tr height="30">
            <td rowSpan="2" bgcolor="#abd3fc">언어</td>
            <td colSpan="2">영어</td>
            <td bgcolor="#abd3fc">상/중/하</td>
            <td>중</td>
          </tr>
          <tr height="30">
            <td colSpan="2">일본어</td>
            <td bgcolor="#abd3fc">상/중/하</td>
            <td>하</td>
          </tr>
          <tr height="30">
            <td rowSpan="2" bgcolor="#abd3fc">취미</td>
            <td colSpan="2">독서</td>
            <td bgcolor="#abd3fc">특기</td>
            <td>도전 정신</td>
          </tr>
        </tbody>
      </table>

      <div id="pledge">
        <br />
        위의 사실이 틀림이 없음을 서약합니다.<br />
        작성일 2023년 10월 25일<br />
        작성자 (인)
      </div>
    </div>
  );
};

export default Resume;
