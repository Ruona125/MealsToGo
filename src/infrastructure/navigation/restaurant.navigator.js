import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigation = () => {
  return (
    <RestaurantStack.Navigator headerMode="none ">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
