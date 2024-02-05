import React from 'react';
import car from "../../components/images/car-img.svg"

const Partfol = () => {
    return (
       <section id="partfol">
        <div className="container">
            <div className="partfol">
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

export default Partfol;