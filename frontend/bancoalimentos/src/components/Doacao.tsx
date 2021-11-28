import React, { useEffect, useState } from "react";
import { pathURL } from "../config/settings";


let produto = "";
let dia = "";
let mes = "";
let ano = "";
let qtd = "";
let doador = '1';
let datavalidade = "";

export default function Doacao(){

    const[frmProduto, setFrmProduto] = useState('Selecione');
    const[frmDia, setFrmDia] = useState('1');
    const[frmMes, setFrmMes] = useState('Janeiro');
    const[frmAno, setFrmAno] = useState('2020');
    const[frmQtd, setFrmQtd] = useState('1');
    const[frmDoador, setFrmDoador] = useState('');
    


    const[listaProdutos, setListaProdutos] = useState([
        {
            idproduto:0,
            nomeproduto:'adicionar'
        }
    ])
    useEffect(()=>{
        fetch(`${pathURL}/produto/listar`)
        .then((response) => response.json())
        .then((produtos) =>{

            setListaProdutos(produtos)
            console.log(produtos)
        })
        .catch((error)=>console.error(`Erro ao tentar carregar a lista de produtos -> ${error}`))
    },[])

    return(
        <div className="content">
            <p className="titulo">
                Realizar Doação
            </p>
            <div id="form" className="form-display">
                <label>Selecione o produto que deseja doar</label>
                <select defaultValue={frmProduto} onChange={e=>setFrmProduto(e.currentTarget.value)}>
                    <option>Selecione</option>
                    {
                        listaProdutos.map((itens, ix)=>(
                            <option key={ix} value={itens.idproduto}>{itens.nomeproduto}</option>
                        ))
                    }
                    
                    
                </select>
                <label>Selecione a data de validade do produto</label>
                <div className="validade">
                    <label>Dia:</label>
                    <select defaultValue={frmDia} onChange={e=>setFrmDia(e.currentTarget.value)}>
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
                     <option value="21">21</option>
                     <option value="22">22</option>
                     <option value="23">23</option>
                     <option value="24">24</option>
                     <option value="25">25</option>
                     <option value="26">26</option>
                     <option value="27">27</option>
                     <option value="28">28</option>
                     <option value="29">29</option>
                     <option value="30">30</option>
                     <option value="31">31</option>


                    </select>

                    <label>Mês:</label>
                    <select defaultValue={frmMes} onChange={e=>setFrmMes(e.currentTarget.value)}>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>
                    
                    <label>Ano:</label>
                    <select defaultValue={frmAno} onChange={e=>setFrmAno(e.currentTarget.value)}>
                       
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        
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
                </div>

                {/* <label>Se você gostaria de identificar adicione o seu bloco e apartamento</label>
                <input type="text" name="txtdoador" id="txtdoador" defaultValue={frmDoador} onChange={e=>setFrmDoador(e.currentTarget.value)}/> */}

                <button id="btnRealizarDoacao" onClick={()=>{
                                                produto = frmProduto;
                                                dia = frmDia;
                                                mes = frmMes;
                                                ano = frmAno;
                                                qtd = frmQtd;
                                                doador = frmDoador;
                                                datavalidade = `${ano}-${mes}-${dia}`;
                                                realizarDoacao()}}>Realizar a doação</button>
                
            </div>

        </div>
    )
}

function realizarDoacao(){


    // Realizando o cadastro de uma nova doação


    fetch(`${pathURL}/doacao/cadastro`,{
        method : "POST",
        mode: 'cors',
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            idproduto: produto,
            iddoador:doador,
            quantidade:qtd
        })
    })
    .then((response) => response.json())
    .then((data) =>{
       alert("Doação cadastrada.");
       console.log(data)
    })
    .catch((error)=>console.error(`Erro ao tentar cadastrar uma nova doação -> ${error}`))


    // Realizando o cadastro de uma nova entrada

    fetch(`${pathURL}/entrada/cadastro`,{
        method : "POST",
        mode: 'cors',
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            idproduto: produto,
            datavalidade:datavalidade,
            quantidade:qtd
        })
    })
    .then((response) => response.json())
    .then((data) =>{
       console.log(data)
    })
    .catch((error)=>console.error(`Erro ao tentar cadastrar uma nova entrada -> ${error}`))


}