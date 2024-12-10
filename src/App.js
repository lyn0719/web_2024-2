import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { FaListUl } from "react-icons/fa";
import { ThemeProvider } from './context/ThemeProvider';

import Index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
import Career from "./Component/Career";
import Login from "./Component/Login";
import ProtectedRoute from "./Component/ProtectedRoute";
import Todo from "./Component/Todo";
import Header from "./Component/Header";

import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
      setTimeout(() => setIsSidebarVisible(false), 300);
    } else {
      setIsSidebarVisible(true);
      setTimeout(() => setIsSidebarOpen(true), 10);
    }
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header toggleSidebar={toggleSidebar} />
          <div className="container">
            {isSidebarVisible && (
              <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-background"></div>
                <Link to="/introduction" className="navlink">
                  <IoPersonCircleOutline className="introduction" />나의 소개
                </Link>
                <Link to="/project" className="navlink">
                  <FaRegFolderOpen className="project" />프로젝트
                </Link>
                <Link to="/contest" className="navlink">
                  <FaRegFileCode className="contest" />공모전
                </Link>
                <Link to="/career" className="navlink">
                  <GrDocumentUser className="career" />나의 경력
                </Link>
                <Link to="/todo" className="navlink">
                  <FaListUl className="todo" />TODO
                </Link>
              </nav>
            )}

            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/introduction" element={
                  <ProtectedRoute>
                    <Introduction />
                  </ProtectedRoute>
                } />
                <Route path="/project" element={<Project />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/career" element={<Career />} />
                <Route path="/todo" element={<Todo />} />
              </Routes>
            </main>
          </div>

          <footer>
            <i>
              Copyright 2024. YENA LEE all rights reserved.
              <br />
              Contact: usolnim@naver.com / 010-2302-6636
            </i>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
