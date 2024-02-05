import React from 'react';
import set from "../../../components/images/set-logo.svg"
import comp from "../../../components/images/comp-logo.svg"
import seo from "../../../components/images/seo-logo.svg"
import sms from "../../../components/images/sms-logo.svg"
import tech from "../../../components/images/teh.svg"
import motion from '../../../components/images/mb1 1.svg'
import car from "../../../components/images/car-img.svg"
import services from "../../../components/images/services.svg"

const Servis = () => {
    return (
       <>
        <section id='servis'>
            <div className="container">
                <div className="servis">
                    <div className="set">
                        <img src={set} alt="" />
                        <p>
                        Используем популярные <br /> технологии
                        </p>
                    </div>
                    <div className="set">
                        <img src={comp} alt="" />
                        <p>
                        Адаптивный дизайн <br />— по умолчанию
                        </p>
                    </div>
                    <div className="set">
                        <img src={seo} alt="" />
                        <p>
                        Настраиваем SEO для сайта
                        </p>
                    </div>
                    <div className="set">
                        <img src={sms} alt="" />
                        <p>
                        Техническая поддержка на 2 <br /> месяца бесплатно
                        </p>
                    </div>
                </div>
            </div>
            
        </section>

        <section id='job'>
            <div className="container">
                <div className="job">
                    <h3>
                    Наши работы
                    </h3>
                    <div className="cars">
                        <img src={car} alt="" />
                        <img src={car} alt="" />
                        <img src={car} alt="" />
                        <img src={car} alt="" />
                        <img src={car} alt="" />
                        <img src={car} alt="" />
                        <img src={car} alt="" />
                        <img src={car} alt="" />
                        <img src={car} alt="" />
                    </div>
                    <h3>Наши услуги</h3>
                    <div className="services">
                        <img src={services} alt="" />
                        <img src={services} alt="" />
                        <img src={services} alt="" />
                        <img src={services} alt="" />
                        <img src={services} alt="" />
                        <img src={services} alt="" />
                        <img src={services} alt="" />
                        <img src={services} alt="" />
                        <img src={services} alt="" />
                    </div>
                    <button className='jobBtn'>Оставить заявку</button>
                </div>
            </div>
        </section>

        <section id="studio">
        <div className="container">
            <div className="studio">
              <div className="studio-text">
              <h3>
                Про студию
                </h3>
                <p>
                Веб студия «Motion web» — это группа креативных, талантливых людей, объединенных общей <br />
                 идеей создания качественных многофункциональных сайтов. И брендов. <br />
Слаженная и оперативная работа позволяет нам в сжатые сроки предоставить нашим <br />
 клиентам уникальный продукт, отвечающий всем требованиям современного сайтостроения. <br /><br />

У всех людей разные вкусы и свое видение прекрасного. Кто-то любит яркие краски и <br />
 броский, веселый дизайн. Кто-то – наоборот, спокойные, <br />
пастельные тона и строгий деловой стиль. И от того, насколько точно <br />
удастся определить желания заказчика, зависит успех всего проекта. <br />
Поэтому главными принципами нашей работы являются: <br />
терпение, понимание и уважение к нашим клиентам.
                </p>
              </div>
              <img src={motion} alt="" />
            </div>
        </div>
      </section>

      <section id='tech'>
            <div className="container">
                <div className="tech">
                    <img src={tech} alt="" />
                </div>
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="footer">
                    <div className="block1">
                        <h2>У вас есть проект?</h2>
                        <button className='footBtn'>Заказать проект</button>
                        <h4>
                        Моушн студио Motion Web LLC
                        </h4>
                        <p>
                        г. Бишкек, Турусбекова 109/3 <br />
                        +996 (703) 68 41 76 <br />
                        Motionweb312@gmail.com
                        </p>
                    </div>
                    <div className="block2">
                        <h3>
                        Меню
                        </h3>
                        <li>Разработка логотипа</li>
                        <li>Разработка сайта</li>
                        <li>Услуги</li>
                        <li>Портфолио</li>
                        <li>База знаний</li>
                        <li>Акции</li>
                    </div>
                    <div className="block2">
                        <h3>
                        Услуги
                        </h3>
                        <li>Landing-page</li>
                        <li>Корпоративный сайт</li>
                        <li>Сайт-визитка</li>
                        <li>Сайт каталог</li>
                        <li>Интернет-магазин</li>
                        <li>Фирменный стиль</li>
                        <li>Поддержка сайтов</li>
                        <li>Продвижение сайтов</li>
                        <li>Наполнение контентом</li>
                    </div>
                    <div className="block2">
                        <h3>
                        Инфо.блок
                        </h3>
                        <li>Контакты</li>
                        <li>Вакансии</li>
                        <li>Акции</li>
                        <li>Цены</li>
                        <li>Оплата логотипа</li>
                        <li>Онлайн школа</li>
                    </div>
                </div>
            </div>
        </footer>
       </>
    );
};

export default Servis;