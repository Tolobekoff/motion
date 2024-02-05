import React from 'react';
import logo from "../../../components/images/mb1 1.svg"
import google from '../../../components/images/google.svg'
import burger from '../../../components/images/burger-king.svg'
import art from '../../../components/images/art-klassica.svg'
import "../About/about.css"

const Hero = () => {
    return (
     <>
       <section id="logos">
        <div className="container">
            <div className="logos">
                <div className="block1">
                    <h1>1234</h1>
                    <h4>Логотипов создано</h4>
                </div>
                <div className="block1">
                    <h1>321</h1>
                    <h4>Элементов фирменного стиля</h4>
                </div>
                <div className="block1">
                    <h1>345</h1>
                    <h4>Страниц брендбука</h4>
                </div>
                <div className="block1">
                    <h1>688</h1>
                    <h4>Довольных клиентов</h4>
                </div>
            </div>
            <div className="proverka">
                <img src={logo} alt="" />
                <div className="proverka-text">
                    <h2>Проверка на <br />
                     уникальность</h2>
                     <p>
                     Подтверждаем уникальность разработанного <br />
                      логотипа в системе Роспатент. По вашему запросу. <br /> <br />
                      Логотип не должен напоминать что-то уже <br />
                       существующее и знакомое. <br /> <br />
                       Уникальность идеи — основная составляющая процесса разработки<br />
                     логотипа. Ведь только уникальный, необычный дизайн логотипа <br />
                     запоминается потребителям, Вашим потенциальным клиентам <br />
                     и партнерам
                     </p>
                     <div className="provBtns">
                        <button>Заказать концультацию</button>
                        <button>Подробнее</button>
                     </div>
                </div>
            </div>
        </div>
       </section>

       <section id="about">
        <div className="container">
            <div className="about">
                <h2>
                У вас есть выбор
                </h2>
                <div className="about-info">
                    <div className="block">
                        <h3>
                        Шрифтовой
                        </h3>
                        <img src={google} alt="" />
                        <p>
                        Простой логотип, с уникальным <br /> шрифтовым решением
                        </p>
                        <span> от 3 000 p</span>
                        <button>
                        Заказать разработку
                        </button>
                    </div>
                    <div className="block">
                        <h3>
                        Комбинированный
                        </h3>
                        <img src={burger} alt="" />
                        <p>
                        Символ (знак) и шрифтовое <br />
                         решение в дизайне логотипа. <br />
                         СУПЕР ЦЕНА!
                        </p>
                        <span> от 4 500 р</span>
                        <button>
                        Заказать разработку
                        </button>
                    </div>
                    <div className="block">
                        <h3>
                        Art-логотип
                        </h3>
                        <img src={art} alt="" />
                        <p>
                        Дизайнерский логотип, ручной <br />
                         работы (леттеринг, герб, <br />
                          персонаж)
                        </p>
                        <span> от 15 000 р</span>
                        <button>
                        Заказать разработку
                        </button>
                    </div>
                </div>
                <h2>
                Что будет после заявки?
                </h2>
                <div className="aboutt">
                    <div className="info1">
                        <p>
                        Позвонит наш специалист, <br />
                         уточнит детали и отправит <br />
                          задание в отдел разработки
                        </p>
                    </div>
                    <div className="info1">
                       
                       <p>
                       Дизайнеры сделают Ваш логотип в <br />
                         нескольких концепциях. Выберите <br />
                          один вариант и его подготовят <br />
                           в необходимых форматах
                       </p>
                    </div>
                    <div className="info1">
                        <p>
                        Готовый логотип будет выслан Вам <br />
                         на электронную почту. Теперь Вы <br />
                          можете разместить лого на <br />
                           рекламных носителях и в интернете
                        </p>
                    </div>
                </div>
                <div className="about-btn">
                    <button>Заказать разработку</button>
                    <button>Заполнить БРИФ</button>
                </div>
            </div>
        </div>
      </section>
     </>
    );
};

export default Hero;