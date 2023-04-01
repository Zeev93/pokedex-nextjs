import NextLink from 'next/link'
import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import { NextComponentType } from 'next'
import Image from 'next/image'

export const Navbar:NextComponentType = () => {

    const { theme, isDark } = useTheme()
        
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>

            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png`}
                alt='Pidgeot'
                width={50} 
                height={50}
                priority
            />

           
            <Link as={NextLink} href='/'>
                <Text color='white' h3>P</Text>
                <Text color='white' h3>okémon</Text>
            </Link>

            <Spacer css={{ flex: 1}}/>

            
        
            <Link as={NextLink} href='/favoritos'>
                <Text color='white'> Favoritos </Text>
            </Link>
        </div>
    )
}
