import { Product } from './types';

export const HERO_TEXTURE = "https://images.unsplash.com/photo-1575306782245-c3445e929f0e?q=80&w=2564&auto=format&fit=crop";

export const PRODUCTS: Product[] = [
  {
    id: '01',
    name: "The Obsidian Trench",
    collection: "Noir Étude",
    price: 1250,
    description: "Structured shoulders meet fluid drape.",
    story: "Woven in midnight silence. A silhouette that commands the room without whispering a word.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1287&auto=format&fit=crop",
    texture: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '02',
    name: "Silk Vertex Gown",
    collection: "Ethereal Form",
    price: 2800,
    description: "Bias-cut silk that moves like liquid smoke.",
    story: "Gravity is merely a suggestion. Designed to float, to follow, to haunt.",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1324&auto=format&fit=crop",
    texture: "https://images.unsplash.com/photo-1616422323862-23c727043329?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '03',
    name: "Atlas Wool Blazer",
    collection: "Permanent Collection",
    price: 980,
    description: "Architectural tailoring for the modern nomad.",
    story: "Constructed. Deconstructed. Reconstructed. A study in permanence.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1480&auto=format&fit=crop",
    texture: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '04',
    name: "Velvet Void Jacket",
    collection: "Noir Étude",
    price: 1550,
    description: "Light-absorbing velvet with a sharp lapel.",
    story: "Darker than the night itself. A texture that swallows light and reflects only sophistication.",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1287&auto=format&fit=crop",
    texture: "https://images.unsplash.com/photo-1616422323862-23c727043329?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '05',
    name: "Carbon Weave Trouser",
    collection: "Industrial Form",
    price: 890,
    description: "Technical wool blend with pleat retention.",
    story: "Engineered for the relentless pace of the city. Structure that never falters.",
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1000&auto=format&fit=crop",
    texture: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '06',
    name: "Nebula Silk Scarf",
    collection: "Ethereal Form",
    price: 420,
    description: "Hand-painted silk organza.",
    story: "A fragment of the cosmos, draped around your shoulders.",
    image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=1291&auto=format&fit=crop",
    texture: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop"
  }
];

export const SALE_PRODUCTS: Product[] = [
    {
        id: 'S1',
        name: "Lunar Knit",
        collection: "Seasonal Sage",
        price: 450,
        description: "Hand-spun cashmere.",
        story: "Softness that defies the cold.",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
        texture: ""
    },
    {
        id: 'S2',
        name: "Equinox Trouser",
        collection: "Seasonal Sage",
        price: 320,
        description: "Pleated precision.",
        story: "Movement for the stillness of winter.",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
        texture: ""
    }
];

export const NAV_ITEMS = [
  { label: "Collections", href: "#products" },
  { label: "Atelier", href: "#about" },
  { label: "Seasonal", href: "#seasonal" },
  { label: "Contact", href: "#contact" },
];