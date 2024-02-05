import React from 'react';
import logo from "../images/logo.svg"
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
       <header>
        <div className="container">
            <div className="header">
                
               <div className="info">
               <img src={logo} alt="" />
               <nav>
                    <NavLink to="/logo">Разработка логотипа</NavLink>
                    <NavLink to="/">Разработка сайта</NavLink>
                    <NavLink to="/service">Услуги</NavLink>
                    <NavLink to="/port">Портфолио</NavLink>
                    <NavLink to="/base">База знаний</NavLink>
                    <NavLink to="/sale">Акции</NavLink>
                    <button className='btn1'>
                Заказать звонок
                </button>
                </nav>
               </div>
               <div className="info-2">
                <h1>
                MOTION WEB <br /> IT STUDIO
                </h1>
                <h5>
                В срок, с гарантией, для Вас
                </h5>
                <button className='btn2'>
                Получить концультацию
                </button>
                <p>
                    Мы не передаем данные 3-им лицам. Отправляя заявку, вы <br /> соглашаетесь с
                     политикой обработки персональных данных
                     </p>
               </div>
            </div>
        </div>
       </header>
    );
};

export default Header;