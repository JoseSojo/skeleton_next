"use client";

import { SvgBell } from "@/_components/svg/bell";
import { NavResponsive } from "../Responsive/NavResponsive";
import { useAuth } from "@/_contexts/Auth";

export const Navbar = () => {

    const auth = useAuth();

    return (
        <nav className='w-full flex justify-between items-center py-3 px-5 lg:px-16 shadow-md'>
            <h2 className='text-xl font-light'>Skeleton</h2>

            <ul className='flex items-center gap-5'>
                {auth.session && <li className='relative'>
                    <SvgBell cls='' />
                    <span className='-top-3 -right-3.5 px-2 rounded-full absolute bg-sky-400 text-sky-900 font-bold text-xs'>+9</span>
                </li>}
                <li>
                    <NavResponsive />
                </li>
            </ul>
        </nav>
    )
}

