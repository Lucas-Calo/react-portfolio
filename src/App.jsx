import React, { useState, useEffect } from 'react';
import "./styles.css";

import Header from "./components/Header/Header";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import Testimonial from "./components/Testimonial/Testimonial";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Footer from "./components/Footer/Footer";

function App() {
  // Para controlar o theme escolhido:
  const [theme, setTheme] = useState('dark');

  // Função para trocar o tema:
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  // 3. Efeito para adicionar a classe correta ao body da página
  useEffect(() => {
    document.body.className = ''; // Limpa classes existentes
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    }
  }, [theme]); // Roda sempre que o tema mudar

  return (
    <div className="container">
      <div className="content-wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <ProfileCard />
          <SkillsSection />
          <Testimonial />
          <ProjectsSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
