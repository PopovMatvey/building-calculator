import React from "react";
import "./css/style.css";

// Radio блок
export function RadioItem({ nameRadioButton, checkedButton=false }: any) {

    return (
        <>
            <div className="radio-item_container">
                <input type="radio" name={nameRadioButton} defaultChecked={checkedButton} />
            </div>
        </>
    )
}