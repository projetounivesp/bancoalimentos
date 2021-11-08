import React, { useEffect, useState } from "react";
import { pathURL } from "../config/settings";


let produto = "";
let qtd = "";

export default function Retirada(){   


    const[frmProduto, setFrmProduto] = useState('Selecione');
    const[frmQtd, setFrmQtd] = useState('1');
    const[listaProduto, setListaProduto] = useState([
        {
            idproduto:0,
            nomeproduto:'selecionar'
        }
    ])

    useEffect(()=>{
        fetch(`${pathURL}/produto/listar`)
        .then((response)=>response.json())
        .then((produtos)=>{
            setListaProduto(produtos)
        })
        .catch((erro)=>console.error(`Erro ao tentar carregar os produtos->${erro}`))
    },[])


    return(
        <div className="content">
            <p className="titulo">
                Realizar Retirada
            </p>
            <form className="form-display">
                <label>Selecione o produto que deseja retirar</label>
                <select defaultValue={frmProduto} onChange={e=>setFrmProduto(e.currentTarget.value)}>
                    <option>Selecione</option>
                    {
                        listaProduto.map((itens, ix)=>(
                            <option key={ix} value={itens.idproduto}>{itens.nomeproduto}</option>
                        ))
                    }
                    </select>              
                <label>Quantidade:</label>
                <select defaultValue={frmQtd} onChange={e=>setFrmQtd(e.currentTarget.value)}>
                <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                     <option value="11">11</option>
                     <option value="12">12</option>
                     <option value="13">13</option>
                     <option value="14">14</option>
                     <option value="15">15</option>
                     <option value="16">16</option>
                     <option value="17">17</option>
                     <option value="18">18</option>
                     <option value="19">19</option>
                     <option value="20">20</option>

                </select>
                
                <button id="btnRealizarRetirada" onClick={()=>{
                                                produto = frmProduto;
                                                qtd = frmQtd;
                                                realizarRetirada()}}>Realizar retirada</button>
            </form>

        </div>
    )
}



function realizarRetirada(){

    // Realizando o cadastro de uma nova entrada

    fetch(`${pathURL}/retirada/cadastro`,{
        method : "POST",
        mode: 'cors',
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            idproduto: produto,
            quantidade:qtd
        })
    })
    .then((response) => response.json())
    .then((data) =>{
        alert("Retirada realizada.");
       console.log(data)
    })
    .catch((error)=>console.error(`Erro ao tentar cadastrar uma nova retirada -> ${error}`))
}