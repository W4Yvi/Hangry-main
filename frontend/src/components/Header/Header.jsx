import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Эндээс дуртай хоолоо захиалаарай</h2>
            <p>Шилдэг орц найрлагаар урласан олон төрлийн амтат хоолыг багтаасан олон төрлийн цэснээс сонгон, өөрийн хүслийг хангаж, хоолны амтаа нэг дор нэг удаа амтлаарай.</p>
            <a href="#explore-menu"><button className='buttonwl'>Цэсийг харах</button></a>
        </div>
    </div>
  )
}

export default Header