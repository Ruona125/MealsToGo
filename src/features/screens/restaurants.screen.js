import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../component/utils/safe-area";
import { Spacer } from "../../component/spacer/spacer";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../components/restaurants-info-card";
import { RestaurantContext } from "../../services/restaurants/restaurants.context";
import { Search } from "../components/search.components";
import { FavouritesBar } from "../../component/favourite/favourites-bar.components";
import { RestaurantList } from "../components/restaurant-list.styles";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
`;

// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingContainer>
          <Loading animating={true} size={50} color={Colors.blue300} />
        </LoadingContainer>
      ) : null}
      <Search
        isFavouritesToggled={isToggled}
        onFavouriteToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
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
  );
};
