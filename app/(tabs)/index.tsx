import { Image, StyleSheet, Platform, FlatList, Text } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPokemonListQuery } from '@/store/api/pokemon';
import PokemonItem from '@/components/pokemon/PokemonItem';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const { data: pokemonList, error: listError, isLoading: listLoading } = useGetPokemonListQuery();

  if (listLoading) return <ThemedText>Loading...</ThemedText>;
  if (listError) return <ThemedText>Error: {listError.toString()}</ThemedText>;

  console.log(pokemonList)

  return (
    <ThemedView>
      <FlatList renderItem={(pokemon) => <PokemonItem pokemon={pokemon.item} />} data={pokemonList?.results} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
