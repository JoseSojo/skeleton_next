"use client";

import { Navbar } from "@/_components/default/Nav/Navbar/Navbar";
import { useAuth } from "@/_contexts/Auth";
import { PrivIndexPage } from "@/_pages/private/Index";
import { IndexPage } from "@/_pages/public/Index";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Navbar />
      <main className='w-screen'>
        {
          auth.session
          ? <PrivIndexPage />
          : <IndexPage />
        }
      </main>
    </>
  );
}
