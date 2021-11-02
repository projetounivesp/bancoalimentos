import React, { useEffect, useState } from "react";
import * as icons from "react-icons/io5";
import { pathURL } from "../config/settings";

export default function Header(){

    const[total, setTotal] = useState([]);
    
    useEffect(()=>{
        fetch(pathURL,{
            method : "GET",
            mode: 'cors',
            headers:{
                accept:'application/json',
                'content-type':'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
        })
        .catch((error)=>console.error(`Erro ao tentar carregar o total doado desde o início da campanha -> ${error}`))
        },[])
    return(
        <div>
            <div className="cx-title">
                <h1 className="title">Banco de Alimentos</h1>
            </div>
            
            <div className="area">
                
                <div className="ali-doados-24">
                    <div className="linha-header">
                        <div className="num-ali">36</div>
                        <div className="text-ali">Alimentos doados nas<br/>últimas 24 horas</div>
                    </div>
                    <icons.IoBagOutline className="icon-header"/>
                </div>

                <div className="ali-doados-in">
                     <div className="linha-header">
                        <div className="num-ali">{total}</div>
                        <div className="text-ali">Alimentos doados<br/>desde o início da campanha</div>
                    </div>
                    <icons.IoPodiumOutline className="icon-header"/>
                </div>

                <div className="ali-retiradas-24">
                    <div className="linha-header">
                        <div className="num-ali">36</div>
                        <div className="text-ali">Doações retiradas nas <br/>últimas 24 horas</div>
                    </div>
                    <icons.IoBasketOutline className="icon-header"/>
                </div>

                <div className="ali-retiradas-in">
                    <div className="linha-header">
                        <div className="num-ali">250</div>
                        <div className="text-ali">Doações retiradas<br/>desde o início da campanha</div>
                    </div>
                    <icons.IoPodiumOutline className="icon-header"/>


                </div>

            </div>
        </div>
    )
}