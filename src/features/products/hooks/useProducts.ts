import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Perfume } from "@/shared/types/perfume";

export function useProducts() {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.from("products").select("*");

        if (error) {
          throw new Error(error.message);
        }

        if (!isMounted) return;
        setPerfumes(data || []);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "Failed to load products");
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { perfumes, loading, error };
}

