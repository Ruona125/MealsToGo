import React from "react";
import { Text } from "react-native";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../component/spacer/spacer";
import star from "../../../assets/star";
import open from "../../../assets/open";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Title,
  Info,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card-style";

// const Open = styled(SvgXml)`
//   flex-direction: row;
// `;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.7,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Title variant="label">{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily ? (
              // eslint-disable-next-line react-native/no-inline-styles
              <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
            ) : null}
            <Spacer position="left" size="large">
              {isOpenNow ? <SvgXml xml={open} width={20} height={20} /> : null}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
