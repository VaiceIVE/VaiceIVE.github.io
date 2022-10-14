import React from "react";
import play from '../../image/lending/play-bg.png';
import magic from '../../image/lending/magic.png'

function LendingPlay(){
    return(
        <div className="lending-play">
            <div className="lending-play__content _container">
                <div className="lending-play__row">
                    <h2 className="lending-play__heading">ДАВАЙ</h2>
                    <h2 className="lending-play__heading-two"><img src={magic}></img></h2>
                    <p className="lending-play__text">
                        Не упускай возможность получить выгоду 
                    </p>
                    <a href=""><div className="lending-home__btn"><span>Присоединиться к гонке</span></div></a>
                </div>
            </div>
            <div className="lending-play__bg-img">
                <img src={play}></img>
            </div>      
        </div>
    )
}

export default LendingPlay