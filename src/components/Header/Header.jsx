import React, { useState } from "react";
import "./Header.css";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="header-title">
          <h1>{'<LC/>'}</h1>
        </div>

        {/* Adicionando a classe 'nav-open' quando o menu estiver aberto */}
        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <a href="#sobre" onClick={toggleMenu}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#habilidades" onClick={toggleMenu}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={toggleMenu}>
                Projetos
              </a>
            </li>
          </ul>
        </nav>

          <div className="header-actions">
          {/* 3. Crie o botão que chama a função toggleTheme */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

        {/* Botão do menu hambúrguer */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
    </header>
  );
};

export default Header;
