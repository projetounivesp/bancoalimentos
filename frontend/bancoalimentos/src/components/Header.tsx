import React, { useEffect, useState } from "react";
import * as icons from "react-icons/io5";
import { pathURL } from "../config/settings";

export default function Header(){

    const[doacaoInicio, setDoacaoInicio] = useState(0);
    const[doacao24,setDoacao24] = useState(0);

    useEffect(()=>{
        fetch(`${pathURL}/doacao/totaldoadoinicio`,{
            method : "GET",
            mode: 'cors',
            headers:{
                accept:'application/json',
                'content-type':'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) =>{
            setDoacaoInicio(data[0].total)
            console.log(data[0].total)
        })
        .catch((error)=>console.error(`Erro ao tentar carregar o total doado desde o início da campanha -> ${error}`))



        // ---------- Total doado em 24 horas

        fetch(`${pathURL}/doacao/totaldoado24`,{
            method : "GET",
            mode: 'cors',
            headers:{
                accept:'application/json',
                'content-type':'application/json'
            }
        })
        .then((response) => response.json())
        .then((dataDt24) =>{
            setDoacao24(dataDt24[0].total)
            console.log(dataDt24[0].total)
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
                        <div className="num-ali">{doacao24}</div>
                        <div className="text-ali">Alimentos doados nas<br/>últimas 24 horas</div>
                    </div>
                    <icons.IoBagOutline className="icon-header"/>
                </div>

                <div className="ali-doados-in">
                     <div className="linha-header">
                        <div className="num-ali">{doacaoInicio}</div>
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