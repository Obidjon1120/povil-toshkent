import React from 'react';
import festagent from '../img/festagent.png'
import armix from '../img/armix.png'
import yandix from '../img/music.png'
import work from '../img/work.png'
import hunter from '../img/Hunter_Logow 4.png'
import veeam from '../img/veeam_logo_white-500.png.web.1280 2.png'

const Customers = () => {
    const imageBaza =[festagent, armix, festagent, yandix, work, hunter, hunter, veeam, yandix]
    return (
        <div className="text-light w-75 m-auto">
            <h1>We have collaborated with <br/> brands such as</h1>
            <div className="row">
                {imageBaza.map(item=>{
                    return(
                            <div className="col-4 ">
                                <div className="card background">
                                    <div className="aniq">
                                        <img src={item} alt="" className=""/>
                                    </div>
                                </div>
                            </div>
                        )
                })}
            </div>
        </div>
    );
};

export default Customers;