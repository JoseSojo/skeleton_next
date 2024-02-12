"use client";

import { Dispatch, FC, SetStateAction } from "react";
import "@/_components/default/Inputs/Input/Input.css";

interface Props {
    type: 'text' | 'email' | 'password',
    label: string,
    change: Dispatch<SetStateAction<string>>,
    value: string
}

export const Input: FC<Props> = ({type,label,change,value}) => {

    return (
        <>
            <div className="groupp">
                <input required={true} onChange={(e)=>change(e.target.value)} value={value} type={type} className="input" />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>{label}</label>
            </div>
        </>
    )
}
