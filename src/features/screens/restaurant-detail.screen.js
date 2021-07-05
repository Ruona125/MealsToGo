import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../component/utils/safe-area";
import { RestaurantInfoCard } from "../components/restaurants-info-card";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExtended, setLunchExpanded] = useState(false);
  const [dinnerExtended, setDinnerExpanded] = useState(false);
  const [drinksExtended, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExtended}
          onPress={() => setLunchExpanded(!lunchExtended)}>
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup " />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExtended}
          onPress={() => setDinnerExpanded(!dinnerExtended)}>
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Fried Rice and Chicken" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExtended}
          onPress={() => setDrinksExpanded(!drinksExtended)}>
          <List.Item title="Heineken" />
          <List.Item title="Star Radler" />
          <List.Item title="Goldberg" />
          <List.Item title="Sminofff Ice" />
          <List.Item title="Origin" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
