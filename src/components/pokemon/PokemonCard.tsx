import React from 'react'
import { Card, Text, Row } from '@nextui-org/react';
import { SinglePokemon } from '../../interface/pokemon-list';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

interface Props {
    pokemon: SinglePokemon
}

export const PokemonCard:NextPage<Props> = ({pokemon}) => {

    const {id, imagE, name, url} = pokemon

    const router = useRouter()

    const handleClick = () => {
        router.push(`/pokename/${name}`)
    }

  return (
    <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body css={{ p: 10 }}>
            <Card.Image 
                src={imagE}
                width="100%"
                height={140}
            />
        </Card.Body>
        <Card.Footer>
            <Row justify="space-between">
                <Text transform="capitalize"> {name} </Text>
                <Text> # {id} </Text>
            </Row>  
        </Card.Footer>
    </Card>
  )
}
