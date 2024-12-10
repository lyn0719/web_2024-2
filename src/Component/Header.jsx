import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BsMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';

const Header = ({ toggleSidebar }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header>
      <button onClick={toggleSidebar} className="toggleButton">
        <RiMenu2Line size={24} />
      </button>
      <Link to={"/"} className="headerlink">
        이예나 포트폴리오
      </Link>
      <div className="auth-buttons">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? <BsMoonFill size={16} /> : <BsSunFill size={18} />}
        </button>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="auth-button">로그아웃</button>
        ) : (
          <Link to="/login" className="auth-button">로그인</Link>
        )}
      </div>
    </header>
  );
};

export default Header; 
