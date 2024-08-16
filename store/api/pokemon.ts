import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon, PokemonListResponse, PokemonDetails } from '../../types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonList: builder.query<PokemonListResponse, void>({
            query: () => 'pokemon?limit=5',
        }),
        getPokemonDetails: builder.query<PokemonDetails, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;