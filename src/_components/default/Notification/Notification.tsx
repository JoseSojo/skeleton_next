"use client";

import { useNotification } from "@/_contexts/Notification";
import { useEffect } from "react";
import { NotificationDanger } from "./NotificationDanger";
import { NotificationSuccess } from "./NotificationSuccess";
import { NotificationWarning } from "./NotificationWarning";

export const NotificationContainer = () => {

    const noti = useNotification();

    useEffect(()=>{
        setTimeout(()=>noti.update({active:false, noti:null}), 3500);
    }, []);

    return (
        <>
            { noti.noti.active && noti.noti.noti?.type == 'DANGER' && <NotificationDanger msg={noti.noti.noti.noti} /> }
            { noti.noti.active && noti.noti.noti?.type == 'SUCCESS' && <NotificationSuccess msg={noti.noti.noti.noti} /> }
            { noti.noti.active && noti.noti.noti?.type == 'WARNING' && <NotificationWarning msg={noti.noti.noti.noti} /> }
        </>
    )

}
