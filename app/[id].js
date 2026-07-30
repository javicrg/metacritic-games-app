import { useLocalSearchParams, Stack } from "expo-router";
import { ScrollView, View, Text, ActivityIndicator, Image } from "react-native";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: `${id}`,
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center px-4">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white font-bold  text-2xl text-center">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 font-bold mb-8 text-base text-left">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
