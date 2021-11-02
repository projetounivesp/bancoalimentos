import React, { useEffect } from "react";

export default function Retirada(){    
    return(
        <div className="content">
            <p className="titulo">
                Realizar Retirada
            </p>
            <form className="form-display">
                <label>Selecione o produto que deseja retirar</label>
                <select>
                    <option>Selecione</option>
                </select>                    
                <label>Quantidade:</label>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                
                <button id="btnRealizarDoacao">Realizar retirada</button>
            </form>

        </div>
    )
}