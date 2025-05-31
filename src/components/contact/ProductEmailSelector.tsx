import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductEmail {
  category: string;
  email: string;
  products: string[];
}

const productEmails: ProductEmail[] = [
  {
    category: 'Security Glass',
    email: 'br@southglass.in',
    products: [
      'Bullet Resistant Glass',
      'Burglar Resistant Glass',
      'Blast Resistant Glass'
    ]
  },
  {
    category: 'Transport',
    email: 'glassorder@southglass.in',
    products: [
      'Automotive Glass',
      'Navimotive Glass',
      'Locomotive Glass'
    ]
  },
  {
    category: 'Construction',
    email: 'ppc@southglass.in',
    products: [
      'Architectural Glass',
      'Fire Resistant Glass',
      'Safety Glass'
    ]
  }
];

export default function ProductEmailSelector() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const selectedEmailInfo = productEmails.find(p => p.category === selectedCategory);

  const handleEmailClick = () => {
    if (selectedCategory && selectedProduct) {
      const subject = encodeURIComponent(`Inquiry about ${selectedProduct}`);
      const email = selectedEmailInfo?.email || '';
      window.location.href = `mailto:${email}?subject=${subject}`;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
      <h3 className="text-xl font-semibold mb-6 text-center">Select Product Category</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {productEmails.map((item) => (
          <button
            key={item.category}
            onClick={() => {
              setSelectedCategory(item.category);
              setSelectedProduct('');
              setIsOpen(true);
            }}
            className={`p-4 rounded-lg border transition-all duration-200 ${
              selectedCategory === item.category
                ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                : 'border-zinc-700 hover:border-zinc-600 text-zinc-300'
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="space-y-4">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full p-4 text-left rounded-lg border border-zinc-700 flex justify-between items-center"
            >
              <span>{selectedProduct || 'Select a Product'}</span>
              <ChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden z-10">
                {selectedEmailInfo?.products.map((product) => (
                  <button
                    key={product}
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsOpen(false);
                    }}
                    className="w-full p-3 text-left hover:bg-zinc-800 transition-colors"
                  >
                    {product}
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedProduct && (
            <div className="text-sm text-gray-400 text-center">
              Your inquiry will be sent to: {selectedEmailInfo?.email}
            </div>
          )}

          <button
            onClick={handleEmailClick}
            disabled={!selectedProduct}
            className={`w-full py-3 px-6 rounded-lg transition-all duration-200 ${
              selectedProduct
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
            }`}
          >
            Contact via Email
          </button>
        </div>
      )}
    </div>
  );
} 