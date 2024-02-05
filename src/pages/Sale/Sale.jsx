import React from 'react';

const Sale = () => {
  return (
    <section id="sale">
      <div className="container">
        <div className="sale">
          <div className="card">
            <h4>
            Скидка на логотип до 70%
            </h4>
            <p>
            В период с 01,08,2020 по 01,09,2020 действует <br />
             скидка на разработку логотипа
            </p>
          </div>
          <div className="card2">
            <h4>
            Год хостинга в подарок
            </h4>
            <p>
            закажи интернет-магазин и мы подарим <br />
             хостинг на 1 год
            </p>
          </div>
          <div className="card3">
            <h4>
            Скидка на фирменный стиль
            </h4>
            <p>
            До 01.09.2020 на все заказы по фирменному <br />
             стили действует скидка 20%
            </p>
          </div>
          <div className="card4">
            <h4>
            Логотип в подарок

            </h4>
            <p>
            При заказе на разработку сайта, мы <br />
             разработаем логотип бесплатно
            </p>
          </div>
        </div>
        <div className="base-zai">
       
        <div className="base-left">
          <p>
          Мы с удовольствием ответим на все Ваши вопросы и проведем необходимые <br />
           уточнения. В случае, если Вы не найдете ответы на Ваши вопросы на нашем <br />
            сайте, просмотрите раздел FAQ или обратитесь непосредственно к нам.
          </p>
        </div>
        <div className="base-right">
          <div className="base-input">
            <input type="text" />
            <input type="text" />
            <input type="number" />
            <input type="e-mail" />
          </div>
          <button>
          Отправить
          </button>
          <p>
          Нажимая на кнопку «Отправить», я даю согласие на обработку <br />
           персональных данных и соглашаюсь с политикой конфиденциальности
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Sale;