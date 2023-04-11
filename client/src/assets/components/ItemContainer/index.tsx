import React from "react";
import './css/style.css';

export function ItemContainer({ children, text }: any) {

    return (
        <>
            <div className="item-container">
                <h2>{text}</h2>
                <div className="item-container_consist">
                    {children}
                </div>
            </div>
        </>
    )
}
