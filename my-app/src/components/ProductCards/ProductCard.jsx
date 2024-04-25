import React from "react";
import Header from "../Header"

const ProductCard = ({name, price, link}) => {
    const [value, setValue] = React.useState(0);
    const onClickAdd = ()=>{
      setValue(value + 1);
    }
    const [isShow, setIsShow] = React.useState(true)
    return(
      <div>
        <Header />
        <div classname ="item">
          <img
            className="image"
            width="60%"
            src={link}
            alt = ""
          />
          <p>{name}</p>
          <p>{price} руб.</p>
          <div className="counter">
            <p>{value}</p>
            <button onClick={onClickAdd}>+</button>
          </div>
          <button 
            onClick={()=>{
              setIsShow(!isShow);
            }}>
            {isShow ? <p>Hide description</p> : <p>Show description</p>}
          </button>
          {isShow && <p>nice book</p>}
          <button name="BuyButton">BUY</button>
        </div>
      </div>
    )
  }

  export default ProductCard
  