import React, { useEffect, useState } from "react";
import { pathURL } from "../config/settings";
import b1 from '../b1.png';
import b2 from '../b2.png';

let cor = [
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",
    "#c62828",
    "#64b5f6",
    "#7b1fa2",
    "#009688",
    "#01579b",
    "#cddc39",
    "#ffa726",
    "#ff6f00",

]


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
                <div className="right"></div>
            </div>
            <div className="stock">
                {
                    listaProdutos.map((itens,ix)=>(
                        <div key={ix}>
                            <div className="nomeproduto">{itens.nomeproduto}</div>
                            <div className="totalestoque">
                                <div style={{backgroundColor:cor[ix],width:10*parseInt(itens.total.toString()),height:20}}></div>
                                <div className="total-estoque">{itens.total}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}