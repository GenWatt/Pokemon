export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    results: Pokemon[];
}

export interface PokemonDetails {
    name: string;
    sprites: {
        front_default: string;
    };
}