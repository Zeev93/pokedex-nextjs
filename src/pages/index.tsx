import pokeApi from "@/api/pokeApi";
import { Layout } from "@/components/layout";
import { GetStaticProps, NextPage } from "next";
import { PokemonListResponse, SinglePokemon } from '@/interface/pokemon-list';
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";


interface Props {
    pokemons: SinglePokemon[]
}

const HomePage: NextPage <Props> = ({pokemons}) => {
    
    return ( 
        <Layout title="Listado Pokemon">
            <Grid.Container gap={2} justify="flex-start">
                    {pokemons.map( pokemon => (
                        <Grid xs={6} sm={3} md={2} xl={1} key={ pokemon.id }>
                          <PokemonCard pokemon={pokemon} />
                        </Grid> 
                    ))}
            </Grid.Container>
        </Layout>
     );
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('pokemon/?limit=151')
    const pokemons :SinglePokemon[] = data.results.map( (p, i) => ({
        ...p,
        id: i+1,
        imagE: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
    }))
    
    return {
        props: {
            pokemons
        }
    }
}
export default HomePage;

