import { useSearch } from "./useSearch";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";

export const Search = () => {
  const {
    searchTerm,
    searchResults,
    isSearchOpen,
    popularSearches,
    recommendedProducts,
    handleSearchChange,
    handleSearchOpen,
    handleSearchClose,
  } = useSearch();

  return (
    <div className="relative">
      {/* Botón de búsqueda */}
      <IoSearchOutline
        onClick={handleSearchOpen}
        className="text-2xl lg:text-3xl hover:scale-110 transition-transform"
      />

      {/* Modal de búsqueda */}
      {isSearchOpen && (
        <div className="fixed backdrop-blur-sm inset-0 z-50">
          <div className="container mx-auto max-w-4xl p-4">
            <div className="bg-blue-500/80 rounded-xl shadow-xl">
              {/* Barra de búsqueda */}
              <div className="p-4 flex gap-4 border-b">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Buscar productos..."
                  className="flex-1 outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSearchClose}
                  className="hover:bg-gray-100 p-1 rounded-full"
                >
                  <IoCloseOutline className="w-5 h-5" />
                </button>
              </div>

              {/* Contenido de búsqueda */}
              <div className="p-6">
                {searchTerm ? (
                  // Resultados de búsqueda
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {searchResults.map((product) => (
                      <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Contenido por defecto
                  <div className="space-y-6">
                    {/* Búsquedas populares */}
                    <div>
                      <h3 className="text-lg font-medium mb-3">
                        Búsquedas populares
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <button
                            key={term}
                            className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
                            onClick={() =>
                              handleSearchChange({
                                target: { value: term },
                              } as any)
                            }
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Productos recomendados */}
                    <div>
                      <h3 className="text-lg font-medium mb-3">
                        Productos recomendados
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {recommendedProducts.map((product) => (
                          <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price.toLocaleString()}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
