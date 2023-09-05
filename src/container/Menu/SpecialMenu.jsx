import React from 'react';

import {images,data} from '../../constants'
import { SubHeading,MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding ' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title='Menu that fits you palatte'/>
      <h1 className='headtext__cormonant'>Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_tea">
          <p className='app__specialMenu-menu_heading'>Cold Drinks</p>
          <div className="app__specialmenu_menu_items">
            {
              data.drinks.map((drinks,index)=>(
                 <MenuItem key={drinks.title + index} title={drinks.title} price={drinks.price}tags={drinks.tags} />
              ))}
          </div>
      </div>

      <div className='app__specialMenu-menu_img'>
         <img src={images.menu} alt="drink__img"   />
      </div>

      
      <div className="app__specialMenu-menu_cocktails">
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className="app__specialmenu_menu_items">
            {
              data.cocktails.map((cocktails,index)=>(
                <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price}tags={cocktails.tags} />
              ))}
          </div>
      </div>
    </div>

    <div style={{marginTop:"150px"}}>
    <button type='button' className='custom__button'>Know More</button>
    </div>
  </div>
);

export default SpecialMenu;
