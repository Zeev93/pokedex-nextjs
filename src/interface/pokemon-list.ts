export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  SinglePokemon[];
}

export interface SinglePokemon {
    name: string;
    url:  string;
    id: number;
    imagE: string;
}
