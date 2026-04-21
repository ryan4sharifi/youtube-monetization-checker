import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export function useSearchLimit() {
  const { user } = useAuth();
  const [showLimit, setShowLimit] = useState(false);

  const canSearch = () => {
    const count = Number(localStorage.getItem("yt_search_count") || 0);

    if (!user && count >= 3) {
      setShowLimit(true);
      return false;
    }

    if (!user) {
      localStorage.setItem("yt_search_count", String(count + 1));
    }

    return true;
  };

  return { canSearch, showLimit, setShowLimit };
}