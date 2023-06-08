import React from "react";
import './css/style.css';

export function ItemContainer({ children, title }: any) {

    return (
        <>
            <div className="item-container">
                <h2>{title}</h2>
                <div className="item-container_consist">
                    {children}
                </div>
            </div>
        </>
    );
}
