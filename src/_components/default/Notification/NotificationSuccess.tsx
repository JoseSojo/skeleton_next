"use client";

import { FC } from "react";

interface Props {
    msg: string
}

export const NotificationSuccess: FC<Props> = ({ msg }) => {

    return (
        <aside 
            className='absolute max-h-[60px] mx-auto bottom-11 w-[90%] lg:left-6 lg:w-[250px] p-2 rounded-xl border border-emerald-500 bg-emerald-100 text-emerald-500'
        >
            {msg}
        </aside>
    )
} 
