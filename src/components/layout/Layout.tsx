import { FC, ReactNode } from 'react';
import Head  from 'next/head';
import { Navbar } from '../ui';

interface LayoutProps {
    children: ReactNode,
    title?: string
    keywords?: string
}


const origin = ( typeof window === 'undefined') ? '' : window.location

export const Layout: FC<LayoutProps> = ({children, title = 'Pokemon App', keywords}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='author' content='Abraham Alvarado'/ >
                <meta name='description' content='Pokedex'/ >
                <meta name='keywords' content={`${keywords}, pokedex, pokemon`}/ >

                <meta property="og:title" content={`${title}`} />
                <meta property="og:description" content={`Esta es la pagina de: ${title}`}/>
                <meta property="og:image" content={`${origin}images/banner.png`} />
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
