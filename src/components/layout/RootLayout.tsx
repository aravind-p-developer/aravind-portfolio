/**

 * Root layout wrapper

 */

import type { ReactNode } from 'react';

import { Header } from './Header';

import { Footer } from './Footer';



interface RootLayoutProps {

  children: ReactNode;

}



export function RootLayout({ children }: RootLayoutProps) {

  return (

    <div className="flex flex-col min-h-screen bg-background relative antialiased selection:bg-brand-blue selection:text-white">

      <div className="hero-bg" aria-hidden />

      <Header />

      <main className="flex-grow pt-32 pb-xl px-gutter max-w-container-max mx-auto w-full flex flex-col gap-32 relative z-10">

        {children}

      </main>

      <Footer />

    </div>

  );

}

