import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../component/utils/safe-area";
import { Text } from "../../../component/typography/text.";
import { RestaurantList } from "../../components/restaurant-list.styles";
import { Spacer } from "../../../component/spacer/spacer";
import { RestaurantInfoCard } from "../../components/restaurants-info-card";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
