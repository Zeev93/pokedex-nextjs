

export const toggleFavorite = ( id:number ) => {
    
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' )

    if(favorites.includes(id)){
        favorites = favorites.filter (pokeId => pokeId !== id )
    }else{
        favorites.push(id)
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites))

}

export const existsInFavorites = ( id:number ): boolean => {

    if (typeof window === 'undefined') return false

    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' )   

    return favorites.includes(id)
}

export const pokemons = () : number[] => {

    return JSON.parse(localStorage.getItem("favorites") || '[]' )
    

}