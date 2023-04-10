import { Grid } from '@nextui-org/react'
import { FavoritePokemonCard } from './FavoritePokemonCard';
import { FC } from 'react';

interface Props {
    favoritePokemons: number[]
}

export const FavoritePokemon:FC<Props> = ({favoritePokemons}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
        {
            favoritePokemons.map( id => (
                <Grid xs={6} sm={3} md={2} xl={1} key={id} >
                   <FavoritePokemonCard pokeId={id}/>
                </Grid>
            ) )
        }
    </Grid.Container>
  )
}
