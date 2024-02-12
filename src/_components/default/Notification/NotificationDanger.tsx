"use client";

import { FC } from "react";

interface Props {
    msg: string
}

export const NotificationDanger: FC<Props> = ({ msg }) => {

    return (
        <aside 
            className='absolute max-h-[60px] mx-auto bottom-11 w-[90%] lg:left-6 lg:w-[250px] p-2 rounded-xl border border-red-500 bg-red-50 text-red-500'
        >
            <p>{msg}</p>
        </aside>
    )
} 
