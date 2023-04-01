import { Layout } from '../../components/layout/Layout';
import { GetStaticProps, NextPage } from 'next';
import { GetStaticPaths } from 'next'
import { Pokemon } from '@/interface';
import pokeApi from '@/api/pokeApi';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';


interface Props {
    pokemon: Pokemon
}

const PokemonPage:NextPage <Props> = ({ pokemon }) => {
    return ( 
        <Layout title='Algun Pokemon'>
            <Grid.Container css={{marginTop: '5px'}} gap={ 2 }>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px'}} >
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || `/no-image.png` }
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8} >
                    <Card css={{ p: 10 }}>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform='capitalize'> {pokemon.name} </Text>

                            <Button color="gradient" ghost>
                                Guardar en Favoritos
                            </Button>

                        </Card.Header>
                        <Card.Body>
                            <Text size={30}> Sprites: </Text>
                            <Container direction='row' display='flex' gap={2}>
                                <Image
                                    alt={pokemon.name}
                                    src={pokemon.sprites.front_default}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    alt={pokemon.name}
                                    src={pokemon.sprites.back_default}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    alt={pokemon.name}
                                    src={pokemon.sprites.front_shiny}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    alt={pokemon.name}
                                    src={pokemon.sprites.back_shiny}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>

     );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemonTotal = [...Array(151)].map((value, index) => `${index + 1}`)
    return {
        paths: pokemonTotal.map( id => ( {
            params: { id }
        })),
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const {id} = params as { id: string }
    const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`)
    return {
        props: {
            pokemon: data
        }
    }
}



export default PokemonPage;