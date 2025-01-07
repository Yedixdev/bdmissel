import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
}

interface UseSearchReturn {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchResults: Product[];
  popularSearches: string[];
  recommendedProducts: Product[];
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  handleSearchOpen: () => void;
}

export const useSearch = (): UseSearchReturn => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // Datos de ejemplo - En producción estos vendrían de una API
  const popularSearches = [
    "chaqueta",
    "jeans",
    "tenis",
    "snoopy",
    "harry potter",
    "buzo",
    "vestidos",
    "buzos",
    "buzo oversize",
    "camisetas",
  ];

  const recommendedProducts: Product[] = [
    {
      id: "1",
      name: "Jean 90'S vintage azul con tiro medio y bota ancha",
      image: "/path/to/image1.jpg",
      price: 79900,
      discount: 27,
    },
    {
      id: "2",
      name: "Pantalón cargo tiro alto kaki oscuro con cordón en cintura",
      image: "/path/to/image2.jpg",
      price: 119900,
      discount: 20,
    },
    // ... más productos recomendados
  ];

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    
    document.body.style.overflow = "unset";
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Aquí implementarías la lógica real de búsqueda
    // Por ahora solo filtramos los productos recomendados
    if (value) {
      const filtered = recommendedProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  

  // Cerrar búsqueda al presionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSearchClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    isSearchOpen,
    setIsSearchOpen,
    searchResults,
    popularSearches,
    recommendedProducts,
    handleSearchChange,
    handleSearchClose,
    handleSearchOpen,
  };
};
