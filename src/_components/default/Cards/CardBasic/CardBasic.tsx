"use client";

import { FC, ReactNode } from "react";
import '@/_components/default/Cards/CardBasic/CardBasic.css';

interface Props {
    children: ReactNode
}

export const CardBasic: FC<Props> = ({ children }) => {

    return (
        <div className="card-basic">
            {children}
        </div>
    )
}
