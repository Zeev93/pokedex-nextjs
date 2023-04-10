import { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import { NoFavorites } from "@/components/ui/NoFavorites";
import { FavoritePokemon } from "@/components/pokemon";
import { pokemons } from "@/utils";

const Favoritos = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])
    useEffect(() => {
        setFavoritePokemons(pokemons())
    }, [])

    return ( 
    <Layout>

        {
            favoritePokemons.length === 0 
            ? <NoFavorites />
            :  <FavoritePokemon favoritePokemons={favoritePokemons}/>
        }

        
    </Layout>
);
}
 
export default Favoritos;