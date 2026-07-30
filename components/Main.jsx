import {
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import { AnimatedGameCard } from "./GameCard";
import { useState, useEffect } from "react";
import { getLatestGames } from "../lib/metacritic";
import { StatusBar } from "expo-status-bar";
import { Screen } from "./Screen";

export function Main() {
  const [games, setGames] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  async function handleRefresh() {
    setRefreshing(true);

    try {
      const games = await getLatestGames();
      setGames(games);
    } finally {
      setRefreshing(false);
    }
  }

  return (
    <>
      <StatusBar style="light" />
      <Screen>
        {games.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <FlatList
            data={games}
            keyExtractor={(item) => item.slug}
            refreshControl={
              <RefreshControl
                colors={["#ffee00"]}
                onRefresh={handleRefresh}
                progressBackgroundColor="#000"
                refreshing={refreshing}
                tintColor="#ffee00"
              />
            }
            renderItem={({ item, index }) => (
              <AnimatedGameCard game={item} index={index} />
            )}
          ></FlatList>
        )}
      </Screen>
    </>
  );
}
