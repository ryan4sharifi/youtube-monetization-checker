import CompareClient from "@/components/compare/CompareClient";

async function getFeaturedChannels() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  const res = await fetch(
    `${supabaseUrl}/rest/v1/featured_channels_view?select=title,handle,thumbnail_url,subscriber_count&order=subscriber_count.desc&limit=10`,
    {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ComparePage() {
  const trendingChannels = await getFeaturedChannels();

  return <CompareClient trendingChannels={trendingChannels || []} />;
}