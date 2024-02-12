"use client";

import "@/_components/default/Loaders/LoaderSm/LoaderSm.css";

export const LoaderSm = () => {

    return (

        <div className="loader">
            <span className="loader-text">cargando...</span>
            <span className="load"></span>
        </div>

    )
}