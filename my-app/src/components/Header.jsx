import React from "react";
import style from "./superstyles.module.css";
import { Link } from "react-router-dom"

const Header = () =>{
    return(
    <div className={style.item}>
        <div>
            <Link to='/'>Главная</Link>
        </div>
        <div>
            <Link to = '/basket'>Корзина</Link>
        </div>
    </div>
    );
};

export default Header;