import { useState } from 'react';

interface ClothingOption {
  id: string;
  name: string;
  image: string;
  basePrice: number;
}

const CLOTHING_OPTIONS: ClothingOption[] = [
  { id: 'tshirt', name: 'Camiseta', image: '../assets/img/camisa-preview.png', basePrice: 25000 },
  { id: 'hoodie', name: 'Buzo', image: '/images/hoodie-template.png', basePrice: 45000 },
  { id: 'jogger', name: 'Jogger', image: '/images/jogger-template.png', basePrice: 35000 },
];

const COLORS = [
  { id: 'white', name: 'Blanco', hex: '#FFFFFF' },
  { id: 'black', name: 'Negro', hex: '#000000' },
  { id: 'gray', name: 'Gris', hex: '#808080' },
  { id: 'red', name: 'Rojo', hex: '#FF0000' },
];

const CustomClothingDesigner = () => {
  const [selectedClothing, setSelectedClothing] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<string>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto py-12 px-4">
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-red-800/30 p-8 
        shadow-[0_0_20px_rgba(0,0,0,0.4)]">
        
        <h2 className="text-3xl lg:text-4xl font-display text-center mb-8
          bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
          Personaliza Tu Diseño
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel de Personalización */}
          <div className="space-y-8">
            {/* Selector de Prenda */}
            <div className="space-y-4">
              <h3 className="text-xl font-display text-white">Selecciona tu Prenda</h3>
              <div className="flex flex-wrap gap-4">
                {CLOTHING_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedClothing(item.id)}
                    className={`px-6 py-3 rounded-lg border ${
                      selectedClothing === item.id 
                        ? 'border-red-600 bg-red-900/20' 
                        : 'border-red-800/30 hover:border-red-600/50'
                    } transition-all duration-300`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Color */}
            <div className="space-y-4">
              <h3 className="text-xl font-display text-white">Elige el Color</h3>
              <div className="flex gap-4">
                {COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-12 h-12 rounded-full border-2 ${
                      selectedColor === color.id 
                        ? 'border-red-600 scale-110' 
                        : 'border-transparent hover:border-red-600/50'
                    } transition-all duration-300`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Subir Imagen */}
            <div className="space-y-4">
              <h3 className="text-xl font-display text-white">Sube tu Diseño</h3>
              <div className="flex flex-col items-center p-8 border-2 border-dashed border-red-800/30 rounded-lg
                hover:border-red-600/50 transition-all duration-300">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="design-upload"
                />
                <label htmlFor="design-upload" 
                  className="cursor-pointer px-6 py-3 bg-red-900/20 rounded-lg
                  border border-red-800/30 hover:border-red-600/50 transition-all duration-300">
                  Seleccionar Imagen
                </label>
              </div>
            </div>
          </div>

          {/* Vista Previa */}
          <div className="bg-black/60 rounded-xl p-8 border border-red-800/30">
            <h3 className="text-xl font-display text-white mb-4">Vista Previa</h3>
            <div className="aspect-square rounded-lg bg-gray-900/50 flex items-center justify-center">
              {selectedClothing && selectedColor ? (
                <div className="relative w-full h-full">
                  {/* Prenda base con el color seleccionado */}
                  <div 
                    className="absolute inset-0 rounded-lg transition-all duration-300"
                    style={{ backgroundColor: COLORS.find(c => c.id === selectedColor)?.hex }}
                  />
                  
                  {uploadedImage && (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img 
                        src={uploadedImage} 
                        alt="Diseño personalizado"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}

                  {!uploadedImage && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white/60 text-center px-4">
                        Sube tu diseño para ver cómo quedará en la prenda
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-white/60 text-center px-4">
                  Selecciona una prenda y color para ver la vista previa
                </p>
              )}
            </div>

            {selectedClothing && selectedColor && (
              <div className="mt-4 text-white/80">
                <p className="text-sm">
                  Prenda: {CLOTHING_OPTIONS.find(c => c.id === selectedClothing)?.name}
                </p>
                <p className="text-sm">
                  Color: {COLORS.find(c => c.id === selectedColor)?.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomClothingDesigner;