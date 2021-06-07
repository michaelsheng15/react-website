import React from 'react';
import './MainCard.css';
import memoji from '../img/memoji.png'

const MainCard = () =>{
    return (
        <div className='container'>
            <div className ='text-card'>
                <h1 className='name-text'>Michael Sheng</h1>
                <p className='sub-text'>Student | Developer | Engineer</p>
                <p className='body-text'>An aspiring software developer studying Management Engineering <font color="#9900FF">@UWaterloo</font>. ⚙️</p>
                <p className='body-text'>This past summer, I interned <font color='#0055FF'>@York Region</font> as a Technical Support Analyst. 💻</p>
            </div>
            <div className='photo-card'>
                <img className='memoji' src={memoji} alt='Me!'/>
            </div> 
        </div>
    );
}

export default MainCard;