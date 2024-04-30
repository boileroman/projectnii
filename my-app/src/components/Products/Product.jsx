import React, { useEffect, useState } from "react";
import ProductCard from './../ProductCards/ProductCard';
import '../../App.css';
import axios from 'axios';

const Products = () =>{
    // let products = [
    //     {id:1, name:'Crime and Punishement', price: '500', link:"https://th.bing.com/th/id/OIP.QEgynWMtobnZyIEFeQMFsgHaLy?rs=1&pid=ImgDetMain" },
    //     {id:2, name:'War and Peace', price: '1000', link: "https://th.bing.com/th/id/OIP.lDNKNAduPAU6_kyoD4d6BAHaLM?rs=1&pid=ImgDetMain"},
    //     {id:3, name:'Dubrovsky', price: '240', link: "https://th.bing.com/th/id/OIP.3oMC3cORhIzqBdBpBPI-7wHaL0?rs=1&pid=ImgDetMain"},
    // ];
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('https://662a6f4f67df268010a3ec12.mockapi.io/items').then(res=>{
            setProducts(res.data);
        });
    }, []);

    return(
        <div className="items">
            {products.map((product)=>(
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Products