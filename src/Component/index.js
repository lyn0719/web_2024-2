import React, { useState, useEffect } from 'react';
import '../Component/CSS/Selfintro.css';
import profileImage from './Intro/profileimage.jpg';

const Index = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="time-container">
        <p className="current-time">⏰ 현재 시간 : {time} ⏰</p>
      </div>

      <div id="index" className="profile-container">
        <img 
          src={profileImage} 
          alt="프로필 이미지" 
          className="profile-image" 
          onClick={openModal} 
        />
        <div className="profile-details">
          <h2>🐸 Profile 🐸</h2>
          <p className='selfintrop'>Name: 이예나</p>
          <p className='selfintrop'>Phone: 010-2302-6636</p>
          <p className='selfintrop'>Birth: 2004-07-19</p>
          <p className='selfintrop'>Email: usolnim@naver.com</p>
          <p className='selfintrop'>Blog: <a 
            href="https://lyn0719.tistory.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="blog-link"
          >
            https://lyn0719.tistory.com/
          </a></p>
        </div>
      </div>

      <div className='introduce-container'>
        <h2>💫 Introduce & Education 💫</h2>
        <p className='selfintrop'>안녕하세요! 책임을 다 하는 주니어 개발자 이예나입니다🍀</p>
        <p className='selfintrop'>풀스택을 희망하여 차근차근 기술 역량을 늘려나가는 중입니다</p>
        <p className='selfintrop'>학생회 경험을 바탕으로 열정🔥 가득한 학교 생활을 보내고 있습니다!</p>
        <br></br>
        <p className='selfintrop'>2020.03 ~ 2021.02     세종장영실고등학교</p>
        <p className='selfintrop'>2021.03 ~ 2023.02     반곡고등학교</p>
        <p className='selfintrop'>2023.03 ~ 현재 &nbsp;&nbsp;&nbsp;&nbsp; 가천대학교 - 컴퓨터공학전공 2학년 재학 중</p>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={profileImage} alt="확대된 프로필 이미지" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
