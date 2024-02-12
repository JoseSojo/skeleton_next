"use client";

import '@/_components/default/Nav/Responsive/NavResponsive.css';
import { useAuth } from '@/_contexts/Auth';
import { useState } from 'react';

export const NavResponsive = () => {

    const [active, setActive] = useState(false);
    const auth = useAuth();

    return (
        <div className='relative'>
            <button className="btn" onClick={()=>setActive(!active)}>
                <span className="icon">
                    <svg viewBox="0 0 175 80" width="40" height="40">
                        <rect width="80" height="15" fill="#212529" rx="10"></rect>
                        <rect y="30" width="80" height="15" fill="#212529" rx="10"></rect>
                        <rect y="60" width="80" height="15" fill="#212529" rx="10"></rect>
                    </svg>
                </span>
            </button>
            {
                active && (
                    auth.session
                    ? <div className="input">
                        <button className="value">
                            Perfil
                        </button>
                        <button className="value">
                            Inicio
                        </button>
                        <button className="value">
                            Mesages
                        </button>
                        <button className="value">
                            salir
                        </button>
                    </div>

                    : <div className="input">
                        <button className="value">
                            Registro
                        </button>
                        <button className="value">
                            Login
                        </button>
                    </div>
                )
            }
        </div>
    );
}
