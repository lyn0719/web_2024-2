import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username: credentials.username }));
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">아이디</label>
            <input
              id="username"
              type="text"
              placeholder="아이디를 입력하세요"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
          </div>
          <button type="submit" className="login-button">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 