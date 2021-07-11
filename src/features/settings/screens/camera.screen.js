import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

import { Text } from "../../../component/typography/text.";

// export const CameraScreen = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View>
//       <Camera style={{ width: "100%", height: "100%" }} type={type}>
//         <View>
//           <TouchableOpacity
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             <Text> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// };

const ProfileCamera = styled(Camera)`
  width: 130%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}></ProfileCamera>
  );
};
