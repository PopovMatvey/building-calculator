import React from "react";
import "./css/style.css";
import { RadioItem } from "../RadioItem";
import { ItemContainer } from "../ItemContainer";

// Основной контент
export function MainContent() {

    return (
        <>
            <div className="main-content_container">
                <h1>Калькулятор</h1>
                <ItemContainer text={"Первый блок"}>
                    <RadioItem nameRadioButton={"1"} checkedButton={true} />
                    <RadioItem nameRadioButton={"1"} />
                </ItemContainer>
                <ItemContainer text={"Dnjhjq ,kjr"}>
                    <RadioItem nameRadioButton={"2"} checkedButton={true} />
                    <RadioItem nameRadioButton={"2"} />
                </ItemContainer>
            </div>
        </>
    )
}