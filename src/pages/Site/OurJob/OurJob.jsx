import React from 'react';
import car from "../../../components/images/car-img.svg"
import services from "../../../components/images/services.svg"

const OurJob = () => {
    return (
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
    );
};

export default OurJob;