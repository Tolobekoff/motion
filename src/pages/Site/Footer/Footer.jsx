import React from 'react';

const Footer = () => {
    return (
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
    );
};

export default Footer;