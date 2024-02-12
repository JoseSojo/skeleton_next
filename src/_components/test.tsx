"use client";

import { useState } from "react";
import { Navbar } from "./default/Nav/Navbar/Navbar";
import { TextApp } from "./default/Texts/TextApp";
import { TextTitle } from "./default/Texts/TextTitle";
import { TextOpacity } from "./default/Texts/TextOpacity";
import { NotificationDanger } from "./default/Notification/NotificationDanger";
import { LoaderSm } from "./default/Loaders/LoaderSm/LoaderSm";
import { CardBasic } from "./default/Cards/CardBasic/CardBasic";
import { CardMessage } from "./default/Cards/CardMessage/CardMessage";

export const Test = () => {

    return (
        <section className='py-5 px-10'>
            <TextApp text='skeleton next' />
            <TextTitle text='skeleton next' />
            <TextOpacity text='skeleton next' />

            <div className='w-[400px] p-5'>
                <LoaderSm />
            </div>

            <CardBasic>
                <TextApp text='skeleton next' />
            </CardBasic>

            <CardMessage description="Acepta lo inaceptable" fnAccept={()=>{}} fnDecline={()=>{}} title="Aceptar" />

        </section>
    )
}