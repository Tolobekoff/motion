import React from 'react';
import img from "../../components/images/services.svg"

const Uslugi = () => {
    return (
       <section id="servic">
        <div className="container">
            <div className="servic">
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <button>Оставить заявку</button>
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

export default Uslugi;