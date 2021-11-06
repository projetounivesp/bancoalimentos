import React, { useEffect, useState } from "react";
import { pathURL } from "../config/settings";
import b1 from '../b1.png';

export default function Content(){

    const[listaProdutos, setListaProdutos] = useState([
        {
            nomeproduto:'',
            total:''
        }
    ])


    useEffect(()=>{
        fetch(`${pathURL}/estoque/listarprodutoestoque`)
        .then((response) => response.json())
        .then((produtos) =>{

            setListaProdutos(produtos)
            console.log(produtos)
        })
        .catch((error)=>console.error(`Erro ao tentar carregar a lista de produtos em estoque-> ${error}`))
    },[])



    return(
        <div className="content">
            <div className="display-title">
                <div className="left">Em estoque</div>
                <div className="right">Do total de alimentos temos</div>
            </div>
            <div className="stock">
                {
                    listaProdutos.map((itens,ix)=>(
                        <div key={ix}>
                            <div className="nomeproduto">{itens.nomeproduto}</div>
                            <div className="totalestoque">
                                <img src={b1} style={{width:10*parseInt(itens.total.toString()),height:20}}/>
                                <div className="total-estoque">{itens.total}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}