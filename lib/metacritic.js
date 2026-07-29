const RAWG_API_KEY = process.env.EXPO_PUBLIC_RAWG_API_KEY;

if (!RAWG_API_KEY) {
  console.warn("RAWG API key not found. Set EXPO_PUBLIC_RAWG_API_KEY in .env");
}

const RAWG_BASE = "https://api.rawg.io/api";

function stripHtml(html) {
  return html?.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ") ?? "";
}

export async function getLatestGames() {
  const rawData = await fetch(
    `${RAWG_BASE}/games?key=${RAWG_API_KEY}&ordering=-metacritic&page_size=20`,
  );
  const json = await rawData.json();

  return json.results.map((item) => ({
    description: item.slug,
    releaseDate: item.released,
    score: item.metacritic,
    slug: item.slug,
    title: item.name,
    image: item.background_image,
  }));
}

export async function getGameDetails(slug) {
  const rawData = await fetch(`${RAWG_BASE}/games/${slug}?key=${RAWG_API_KEY}`);
  const json = await rawData.json();

  return {
    img: json.background_image,
    title: json.name,
    slug: json.slug,
    description: stripHtml(json.description),
    score: json.metacritic,
    reviews: [],
  };
}
