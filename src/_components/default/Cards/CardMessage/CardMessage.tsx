"use client";

import { SvgCookie } from "@/_components/svg/cookies";
import { FC } from "react";
import "@/_components/default/Cards/CardMessage/CardMessage.css";


interface Props {
    title: string,
    description: string,
    fnAccept: () => void,
    fnDecline: () => void
}

export const CardMessage: FC<Props> = ({ title, description, fnAccept, fnDecline }) => {
    
    return (
        <div className="card">
            <SvgCookie />
            <h2 className="messageHeading">
                {title}
            </h2>
            <p className="messageDescription">
                {description}
            </p>

            <div className="buttonContainer">
                <button onClick={fnAccept} className="acceptButton">Aceptar</button>
                <button onClick={fnDecline} className="declineButton">Rechazar</button>
            </div>
            

        </div>
    );

}
