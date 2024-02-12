"use client";

import { FC } from "react";

interface Props {
    msg: string
}

export const NotificationWarning: FC<Props> = ({ msg }) => {

    return (
        <aside 
            className='absolute max-h-[60px] mx-auto bottom-11 w-[90%] lg:left-6 lg:w-[250px] p-2 rounded-xl border border-amber-500 bg-amber-100 text-amber-500'
        >
            {msg}
        </aside>
    )
} 
