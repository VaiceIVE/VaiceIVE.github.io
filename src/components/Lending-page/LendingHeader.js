import React, { useState } from "react";
import Logo from '../../image/logo.svg';
import RegisterModal from "../Modal/Register/RegisterModal";



function LendingHeader(){
    const [show, setShow] = useState(false);
    return(
        <div className="lending-header">
            <div className="lending-header__content _container">
                <div className="lending-header__row">
                    <img src={Logo}></img>
                    <nav className="lending-header__nav">
                        <ul className="lending-header__list">
                            <li><a href="">Главная</a></li>
                            <li><a href="">О сервисе</a></li>
                            <li><a href="">Бонусы</a></li>
                            <li><a href="">Как участвовать</a></li>
                        </ul>
                    </nav>
                    <div className="lending-header__btn" onClick={() => setShow(true)}><span>Войти</span></div>
                    <RegisterModal onCLose = {() => setShow(false)} show={show}>
                    </RegisterModal>
                </div>
            </div>          
        </div>
    )
}

export default LendingHeader