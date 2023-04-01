import Head  from 'next/head';
import { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

interface LayoutProps {
    children: ReactNode,
    title?: string
    keywords?: string
}

export const Layout: FC<LayoutProps> = ({children, title = 'Pokemon App', keywords}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='author' content='Abraham Alvarado'/ >
                <meta name='description' content='Pokedex'/ >
                <meta name='keywords' content={`${keywords}, pokedex, pokemon`}/ >
            </Head>

            <Navbar />

            <main
                style={{
                    padding: '20px'
                }}
            >
                {children}
            </main>

        </>
    )
}
