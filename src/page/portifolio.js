import React from 'react';
import outZone from '../img/Out Zone.png'
import pearce from '../img/Pearce.png'
import here from '../img/Here4.png'
import artex from '../img/Artexhibition4.png'

const Portifolio = () => {
    return (
        <div className="text-light w-75 m-auto position-relative">
            <h1 className="portfolio-rotate">Portifolio</h1>
           <div className="row">
               <div className="col-6">
                   <div className="card-standart">
                       <img src={outZone} alt=""/>
                       <p>Out zone</p>
                   </div>
               </div>
               <div className="col-6">
                   <div className="card-standart">
                       <img src={pearce} alt=""/>
                       <p>Out zone</p>
                   </div>
               </div>
               <div className="col-6">
                   <div className="card-standart">
                       <img src={here} alt=""/>
                       <p>Out zone</p>
                   </div>
               </div>
               <div className="col-6">
                   <div className="card-standart">
                       <img src={artex} alt=""/>
                       <p>Out zone</p>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Portifolio;