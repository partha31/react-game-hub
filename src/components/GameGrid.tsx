import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
interface Props {
  seletedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ seletedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(seletedGenre, selectedPlatform);
  const skletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skletons.map((skleton) => (
            <GameCardContainer key={skleton}>
              <GameCardSkleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
