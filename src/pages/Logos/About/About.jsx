import React from 'react';
import google from '../../../components/images/google.svg'
import burger from '../../../components/images/burger-king.svg'
import art from '../../../components/images/art-klassica.svg'

const About = () => {
    return (
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
    );
};

export default About;