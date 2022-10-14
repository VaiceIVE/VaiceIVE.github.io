import React from "react";
import Logo from '../../image/logo.svg';
import Aderalogo from '../../image/lending/Adera-logo.svg'

function LendingFooter(){
    return(
        <div className="lending-footer">
            <div className="lending-footer__content _container">
                <div className="lending-footer__row">
                    <img src={Logo}></img>
                    <nav className="lending-footer__nav">
                        <ul className="lending-footer__list">
                            <li><a href="">Главная</a></li>
                            <li><a href="">О сервисе</a></li>
                            <li><a href="">Бонусы</a></li>
                            <li><a href="">Как участвовать</a></li>
                        </ul>
                    </nav>
                    <div className="lending-footer__column">
                        <p className="lending-footer__text">
                            Made by Adera
                        </p>
                        <img src={Aderalogo}></img>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default LendingFooter