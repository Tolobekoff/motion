import React from 'react';
import motion from '../../../components/images/mb1 1.svg'
const Studio = () => {
    return (
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
    );
};

export default Studio;