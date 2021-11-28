import React, { useEffect, useState } from "react";
import { Alert } from "../bootstrap/js/bootstrap.bundle";
import { pathURL } from "../config/settings";

let produto = "";
let qtd = "";
const elementos: any = [];

export default function Retirada() {
  const [frmProduto, setFrmProduto] = useState("Selecione");
  const [frmQtd, setFrmQtd] = useState("1");
  const [lstQtd, setLstQtd] = useState(0);
  const [listaProduto, setListaProduto] = useState([
    {
      idproduto: 0,
      nomeproduto: "selecionar",
      total: 1,
    },
  ]);

  useEffect(() => {
    fetch(`${pathURL}/estoque/listarprodutoestoque`)
      .then((response) => response.json())
      .then((produtos) => {
        setListaProduto(produtos);
      })
      .catch((erro) =>
        console.error(`Erro ao tentar carregar os produtos->${erro}`)
      );
  }, []);

  return (
    <div className="content">
      <p className="titulo">Realizar Retirada</p>
      <div id="form" className="form-display">
        <label>Selecione o produto que deseja retirar</label>
        <select
          defaultValue={frmProduto}
          onChange={(e) => {
            setFrmProduto(e.currentTarget.value);
            alert(
              `Temos apenas ${
                listaProduto[e.currentTarget.selectedIndex - 1].total
              } unidades deste produto `
            );
            setLstQtd(listaProduto[e.currentTarget.selectedIndex - 1].total);
            elementos.splice(0, elementos.length);
            for (
              var i = 0;
              i <= listaProduto[e.currentTarget.selectedIndex - 1].total;
              i++
            ) {
              elementos.push(<option value={i}>{i}</option>);
            }
          }}
        >
          <option> Selecione um produto</option>
          {listaProduto.map((itens, ix) => (
            <option key={ix} value={itens.idproduto}>
              {itens.nomeproduto}
            </option>
          ))}
        </select>
        <label>Quantidade:</label>
        <select
          defaultValue={frmQtd}
          onChange={(e) => setFrmQtd(e.currentTarget.value)}
        >
          {elementos}
        </select>

        <button
          id="btnRealizarRetirada"
          onClick={() => {
            produto = frmProduto;
            qtd = frmQtd;
            realizarRetirada();
          }}
        >
          Realizar retirada
        </button>
      </div>
    </div>
  );
}

function realizarRetirada() {
  // Realizando o cadastro de uma nova entrada

  fetch(`${pathURL}/retirada/cadastro`, {
    method: "POST",
    mode: "cors",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      idproduto: produto,
      quantidade: qtd,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Retirada realizada.");
      console.log(data);
    })
    .catch((error) =>
      console.error(`Erro ao tentar cadastrar uma nova retirada -> ${error}`)
    );
}
