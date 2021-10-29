import React from "react";

export default function Header(){
    return(
        <div>
            <div className="cx-title">
                <h1 className="title">Banco de Alimentos</h1>
            </div>
            
            <div className="area">
                <div className="ali-doados-24"></div>
                <div className="ali-doados-in"></div>
                <div className="ali-retiradas-24"></div>
                <div className="ali-retiradas-in"></div>
            </div>
        </div>
    )
}