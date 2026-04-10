import type { CheckResponse } from "@/types/checker";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function checkChannel(query: string): Promise<CheckResponse> {
  if (!API_BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL");
  }

  const response = await fetch(`${API_BASE_URL}/api/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Failed to check channel");
  }

  return response.json();
}