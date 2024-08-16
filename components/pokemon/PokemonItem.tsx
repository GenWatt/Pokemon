import { View, Text, Image } from 'react-native'
import React from 'react'
import { ThemedView } from '../ThemedView'
import { Pokemon, PokemonDetails } from '@/types'
import { useGetPokemonDetailsQuery } from '@/store/api/pokemon'
import { ThemedText } from '../ThemedText'

export interface PokemonItemProps {
    pokemon: Pokemon
}

const PokemonItem = ({ pokemon }: PokemonItemProps) => {
    const { data: pokemonDetails, error: detailsError, isLoading: detailsLoading } = useGetPokemonDetailsQuery(pokemon.name);

    if (detailsLoading) return <ThemedText>Loading...</ThemedText>;
    if (detailsError) return <ThemedText>Error: {detailsError.toString()}</ThemedText>;

    return (
        <View style={{ display: 'flex' }}>
            <ThemedText>{pokemon.name}</ThemedText>
            <Image source={{ uri: pokemonDetails?.sprites.front_default }} style={{ height: 50, width: 50 }} />
        </View>
    )
}

export default PokemonItem