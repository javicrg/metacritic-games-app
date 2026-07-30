import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Pressable,
} from "react-native";
import { useRef, useEffect } from "react";
import { Score } from "./Score";
import { Link } from "expo-router";

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <Pressable className="active:opacity-50 border border-black active:border-white/50 mb-2 bg-gray-500/20 rounded-xl p-4">
        <View className="flex-row gap-4" key={game.slug}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text className="mt-2" style={styles.description}>
              {game.description}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#ccc",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
