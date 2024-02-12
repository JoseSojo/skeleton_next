"use client";

import { Dispatch, FC, SetStateAction } from "react";
import "@/_components/default/Inputs/InputLogo/InputLogo.css";

interface Props {
    type: 'text' | 'password' | 'email',
    placeholder: string,
    change: Dispatch<SetStateAction<string>>,
    value: string,
    label: string
}

export const InputLogo: FC<Props> = ({label,type,change,placeholder,value}) => {

    const labelCharacter = label.split('');

    return (
        <div className="form-control">
            <input type={type} value={value} onChange={(e)=>change(e.target.value)} required={true} />
            <label>
                {
                    labelCharacter.map((c,i) => (
                        <span key={`${c}-${i}`} style={{transitionDelay:`${50*i}ms`}}>{c}</span>
                    ))
                }
            </label>
        </div>
    )
}
