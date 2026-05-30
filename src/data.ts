/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FigurineProduct } from './types';

// Featured figurines for the top carousel
export const EXCLUSIVE_FIGURINES: FigurineProduct[] = [
  {
    id: 'toon-01',
    name: 'Bubu the Astro-Bunny',
    codename: 'ASTRO-BUNNY',
    price: 49.00,
    rating: 4.9,
    reviewsCount: 142,
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png',
    bg: '#F4845F',
    panel: '#F79B7F',
    description: 'An explorer of carrots and distant cosmic nebulae. Wearing a highly glossy custom space helmet and textured magnetic accessories, Bubu stands firm as the premier adventurer of the collection.',
    specs: {
      material: 'Eco-Vinyl, ABS Plastic, Soft-Touch Matte Polish',
      dimensions: '14.2cm x 9.5cm x 8.0cm',
      weight: '340g',
      edition: 'Signature Series (Limited to 500 units)',
      year: '2026'
    },
    features: [
      'Removable high-density cosmic visor cap',
      'Magnetic base for desktop stabilizers',
      'Moveable arms with 365-degree pivot points',
      'Hand-sprayed matte gradient space-suit finish'
    ],
    category: 'figurine'
  },
  {
    id: 'toon-02',
    name: 'Kiki the Dino-Chef',
    codename: 'DINO-CHEF',
    price: 54.00,
    rating: 4.8,
    reviewsCount: 98,
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png',
    bg: '#6BBF7A',
    panel: '#85CC92',
    description: 'Serving up jurassic masterpieces directly from the primeval kitchen. Kiki is outfitted with a custom, high-detail chef hat and brandishes a golden culinary spoon crafted with premium metal accents.',
    specs: {
      material: 'Semi-Gloss Vinyl, Metallic Brushed Gold Alloy Accent',
      dimensions: '13.8cm x 10.2cm x 9.4cm',
      weight: '380g',
      edition: 'Culinary Masterpieces',
      year: '2026'
    },
    features: [
      'Custom gold-plated culinary ladle accessory',
      'Sturdy pre-weighted base for high steadiness',
      'Detailed scale ridge textures on the back',
      'Glossy protective top-coat layer'
    ],
    category: 'figurine'
  },
  {
    id: 'toon-03',
    name: 'Mimi the Pixel-Girl',
    codename: 'PIXEL-GIRL',
    price: 59.00,
    rating: 5.0,
    reviewsCount: 214,
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png',
    bg: '#E882B4',
    panel: '#ED9DC4',
    description: 'Leaping boundaries from the high-fidelity metaverse directly to real-world spaces. Outflowed with pink space-bun hairdos, massive streetwear kicks, and high-tech transparent VR display goggles.',
    specs: {
      material: 'High-Impact Resin, Frosted Translucent Polycarbonate',
      dimensions: '15.0cm x 8.8cm x 8.2cm',
      weight: '310g',
      edition: 'Cyberverse Premiere',
      year: '2026'
    },
    features: [
      'Translucent neon tinted cyber goggles',
      'Oversized sneakers with textured tire grip soles',
      'Stunning pink neon airbrush detailing',
      'Artist-exclusive collectible serial plate'
    ],
    category: 'figurine'
  },
  {
    id: 'toon-04',
    name: 'Gogo the Robo-Puppy',
    codename: 'ROBO-PUPPY',
    price: 45.00,
    rating: 4.7,
    reviewsCount: 81,
    src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
    description: ' Fueled by solar battery mechanics, endless friendship, and clockwork magic. Gogo boasts an interchangeable wind-up key and adorable retro floppy metal ear structures.',
    specs: {
      material: 'Liquid Chrome Finish ABS, High-Grade Polyurethane',
      dimensions: '12.5cm x 11.0cm x 8.5cm',
      weight: '290g',
      edition: 'Mechanized Companions',
      year: '2026'
    },
    features: [
      'Rotating golden wind-up mechanism key',
      'Iridescent metallic-blue solar ear flaps',
      'Interactive rotating puppy wheel joints',
      'Sleek anti-dust polished smooth surface'
    ],
    category: 'figurine'
  }
];

export const TREND_COMPANIONS = [
  {
    id: 'comp-01',
    name: 'Astro-Glow Neon Base Station',
    price: 39.00,
    rating: 4.8,
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    description: 'A futuristic aesthetic 3D glowing geometry base pedestal custom calibrated to match pastel ambient hues of the Astro-Bunny and Dino-Chef collections.',
    material: 'High-Translucent Acrylic, Premium Integrated RGB LED Strips',
    badge: 'Popular',
    category: 'accessory'
  },
  {
    id: 'comp-02',
    name: 'Holo-Dome Glass Dust Case',
    price: 45.00,
    rating: 4.9,
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600',
    description: 'Shield your premium collectibles under an airtight high-clarity borosilicate glass dome with an integrated heavy oak base tray to suppress micro-scratches.',
    material: 'Ultra-Clear Borosilicate Glass, Solid Dark Oak Wood Base',
    badge: 'Trending',
    category: 'accessory'
  },
  {
    id: 'comp-03',
    name: 'Retro Metal Wind-Up Key v2',
    price: 19.00,
    rating: 4.7,
    src: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=600',
    description: 'A physical golden brass replacement winding key that docks to Gogo the Robo-Puppy and other retro mechanized toys.',
    material: 'Electroplated Mirror Brushed Brass Alloy',
    badge: 'Exclusive',
    category: 'accessory'
  },
  {
    id: 'comp-04',
    name: 'Neo-Tokyo RGB Cyber Speaker',
    price: 79.00,
    rating: 4.9,
    src: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600',
    description: 'Complement your figurine display setup with this desk-friendly mini cyber speaker that reactive-pulses to acoustic room vibes.',
    material: 'Polyurethane Outer Frame, NdFeB Magnet Driver Core',
    badge: 'New',
    category: 'accessory'
  },
  {
    id: 'comp-05',
    name: 'Cyberverse Custom Art Keycaps',
    price: 32.00,
    rating: 5.0,
    src: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600',
    description: 'A 4-piece premium artisan escape key set injection molded to mirror the pink hairdo styles of Mimi the Pixel-Girl.',
    material: 'Chunky Cherry-MX Profile Thick PBT Keycaps',
    badge: 'Hot Seller',
    category: 'accessory'
  }
];

// Helper to pre-parse companions into FigurineProduct structure
const PARSED_COMPANIONS: FigurineProduct[] = TREND_COMPANIONS.map(comp => ({
  id: comp.id,
  name: comp.name,
  codename: 'COMPANION',
  price: comp.price,
  rating: comp.rating,
  reviewsCount: 42,
  src: comp.src,
  bg: '#1A1A1A',
  panel: '#2D2D2D',
  description: comp.description,
  specs: {
    material: comp.material,
    dimensions: 'Fits typical desktop configurations',
    weight: '250g',
    edition: comp.badge,
    year: '2026'
  },
  features: ['High-quality aesthetic material fit', 'Built exclusively for collectible desktop setups'],
  category: 'accessory'
}));

// Main database of products
export const ALL_PRODUCTS: FigurineProduct[] = [
  ...EXCLUSIVE_FIGURINES,
  ...PARSED_COMPANIONS,

  // --- SHOES (5 items) ---
  {
    id: 'shoe-01',
    name: 'Vapor-Max Cyber Runner',
    codename: 'CYBER-RUNNER',
    price: 189.00,
    rating: 4.8,
    reviewsCount: 156,
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
    bg: '#E63946',
    panel: '#F07178',
    description: 'Engineered for maximum speed and futuristic style. Features adaptive nitrogen-infused cushioning and a glowing heel structure designed for modern urban nomads.',
    specs: {
      material: 'Recycled Flyknit, Nitrogen Foam Midsole, TPU Heel Cage',
      dimensions: 'US Sizes 7 to 13 available',
      weight: '270g',
      edition: 'Vapor Edition (Limited Release)',
      year: '2026'
    },
    features: ['Adaptive-stretch woven upper', 'Energy-returning nitrogen midsole', 'Integrated glow-in-the-dark heel capsule', 'Traction-focused hybrid waffle outsole'],
    category: 'shoes'
  },
  {
    id: 'shoe-02',
    name: 'Heritage Leather Oxford',
    codename: 'HERITAGE-OXFORD',
    price: 220.00,
    rating: 4.9,
    reviewsCount: 88,
    src: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=600',
    bg: '#1D3557',
    panel: '#315480',
    description: 'Premium full-grain Italian leather hand-stitched for timeless elegance. Ideal for formal gatherings and business environments alike.',
    specs: {
      material: 'Full-Grain Italian Calf Leather, Hand-Waxed Finish',
      dimensions: 'US Sizes 8 to 12 available',
      weight: '410g',
      edition: 'Heritage Collection',
      year: '2026'
    },
    features: ['Hand-burnished leather panels', 'Blake-stitched flexible sole', 'Padded leather insole with arch support', 'Breathable organic lining'],
    category: 'shoes'
  },
  {
    id: 'shoe-03',
    name: 'Aero-Sprint Athleisure Trainer',
    codename: 'AERO-SPRINT',
    price: 145.00,
    rating: 4.7,
    reviewsCount: 112,
    src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=600',
    bg: '#457B9D',
    panel: '#609BBB',
    description: 'Lightweight athletic trainer featuring optimal arch stability and high shock-absorption foam for all-day gym workouts.',
    specs: {
      material: 'Engineered Sandwich Mesh, High-Rebound EVA Foam',
      dimensions: 'US Sizes 6 to 14 available',
      weight: '240g',
      edition: 'Performance Line',
      year: '2026'
    },
    features: ['Ultra-lightweight mesh breathability', 'High-rebound shock absorbing EVA core', 'Ortholite anti-microbial sockliner', 'Reinforced rubber heel cup'],
    category: 'shoes'
  },
  {
    id: 'shoe-04',
    name: 'Streetwear Suede High-Top',
    codename: 'STREET-HIGH',
    price: 165.00,
    rating: 4.6,
    reviewsCount: 94,
    src: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600',
    bg: '#A8DADC',
    panel: '#C1E8E9',
    description: 'Bold streetwear High-Tops crafted with genuine brushed suede paneling and a thick vulcanized rubber sole for skater durability.',
    specs: {
      material: 'Genuine Brushed Suede, Vulcanized Rubber Outsole',
      dimensions: 'US Sizes 7 to 12 available',
      weight: '390g',
      edition: 'Nomad Edition',
      year: '2026'
    },
    features: ['Premium heavy suede structure', 'Double-stitched high wear zones', 'Padded collar with ankle stabilizer strap', 'Extra set of neon contrast laces'],
    category: 'shoes'
  },
  {
    id: 'shoe-05',
    name: 'Zen-Knit Eco Slip-On',
    codename: 'ZEN-KNIT',
    price: 95.00,
    rating: 4.5,
    reviewsCount: 73,
    src: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600',
    bg: '#F1FAEE',
    panel: '#E2EFE0',
    description: 'Minimalist slip-on sneakers utilizing organic cotton threading and a sustainable cork footbed. Designed for comfort and ecological consciousness.',
    specs: {
      material: 'Organic Threaded Cotton, Natural Harvested Cork',
      dimensions: 'US Sizes 5 to 11 available',
      weight: '190g',
      edition: 'Eco-Green Series',
      year: '2026'
    },
    features: ['Easy pull-on sock fit styling', 'Anatomical self-molding cork base', '100% biodegradable upper fabric', 'Highly flexible traction rubber pods'],
    category: 'shoes'
  },

  // --- WATCHES (5 items) ---
  {
    id: 'watch-01',
    name: 'Chronograph Stellar-X',
    codename: 'STELLAR-X',
    price: 349.00,
    rating: 4.9,
    reviewsCount: 122,
    src: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=600',
    bg: '#121212',
    panel: '#282828',
    description: 'A masterpiece of timing precision featuring a triple sub-dial setup and a vacuum-plated surgical grade steel frame.',
    specs: {
      material: '316L Surgical Steel, Scratchproof Sapphire Glass',
      dimensions: '42mm Dial Diameter, 22mm Strap Width',
      weight: '145g',
      edition: 'Stellar Limited Edition',
      year: '2026'
    },
    features: ['Japanese Miyota Quartz movement', 'Water resistant up to 100 meters (10 ATM)', 'Luminescent Swiss Super-LumiNova markers', 'Interchangeable steel link bracelet'],
    category: 'watch'
  },
  {
    id: 'watch-02',
    name: 'Neo-Sport Smartwatch Pro',
    codename: 'NEO-SMART',
    price: 279.00,
    rating: 4.8,
    reviewsCount: 204,
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
    bg: '#2A9D8F',
    panel: '#43BCAE',
    description: 'Monitors real-time heart metrics, GPS coordinates, sleep patterns, and notifications on a vivid 1.9-inch AMOLED screen.',
    specs: {
      material: 'Anodized Aluminum Case, Fluoroelastomer Strap',
      dimensions: '44mm x 38mm x 10.7mm',
      weight: '48g',
      edition: 'Core Edition',
      year: '2026'
    },
    features: ['AMOLED touchscreen with 1000 nits peak brightness', 'Real-time oxygen and cardiac tracking sensors', '7-day battery life on a single charge', 'Offline standalone GPS route mapping'],
    category: 'watch'
  },
  {
    id: 'watch-03',
    name: 'Heritage Golden Classic',
    codename: 'GOLDEN-CLASSIC',
    price: 599.00,
    rating: 5.0,
    reviewsCount: 61,
    src: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=600',
    bg: '#E9C46A',
    panel: '#F1D592',
    description: 'Gold-plated automatic movement dress watch. Winds itself with your daily wrist motions and shows inner gears via skeletal styling.',
    specs: {
      material: '18K Gold Plated Brass, Genuine Lizard Leather Strap',
      dimensions: '39mm Dial, 9mm case thickness',
      weight: '62g',
      edition: 'Heritage Signature Gold',
      year: '2026'
    },
    features: ['Skeletal hollow face showing gears', 'Swiss mechanical automatic caliber movement', 'Scratch resistant crystal dome', 'Embossed lizard-grain leather strap'],
    category: 'watch'
  },
  {
    id: 'watch-04',
    name: 'Apex Tactical Field Watch',
    codename: 'APEX-TACTICAL',
    price: 199.00,
    rating: 4.7,
    reviewsCount: 95,
    src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=600',
    bg: '#264653',
    panel: '#3D6C7E',
    description: 'Built to survive extreme environments. Wrapped in heavy shockproof polymer with a rugged ballistic canvas wrist strap.',
    specs: {
      material: 'Carbon Reinforced Polymer, Ballistic Cordura Strap',
      dimensions: '45mm diameter, 14mm thick',
      weight: '55g',
      edition: 'Apex Combat Spec',
      year: '2026'
    },
    features: ['Shockproof chassis meeting military specifications', 'Integrated compass bezel ring', 'Scratchproof mineral crystal casing', 'High visibility night backing dials'],
    category: 'watch'
  },
  {
    id: 'watch-05',
    name: 'Retro Digital Cyber-Grid',
    codename: 'CYBER-GRID',
    price: 89.00,
    rating: 4.6,
    reviewsCount: 147,
    src: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=600',
    bg: '#E76F51',
    panel: '#F08D75',
    description: 'An 80s styled nostalgic digital wristwatch containing an integrated basic calculator and neon EL backlight features.',
    specs: {
      material: 'Acrylic Resin case, stainless steel grid strap',
      dimensions: '38mm grid face length',
      weight: '42g',
      edition: 'Retro Classic',
      year: '2026'
    },
    features: ['Nostalgic 8-digit physical calculator buttons', 'Electro-luminescent neon blue screen light', 'Stopwatch, alarm, and calendar capabilities', 'Water-resistant metal backing plate'],
    category: 'watch'
  },

  // --- PHONES (5 items) ---
  {
    id: 'phone-01',
    name: 'Z-Fold Infinity Smart Screen',
    codename: 'INFINITY-FOLD',
    price: 1599.00,
    rating: 4.8,
    reviewsCount: 54,
    src: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=600',
    bg: '#6C757D',
    panel: '#8B939B',
    description: 'Folds flat to fit your palm, unfolds into a massive 8.0-inch tablet-like viewport with a zero-crease dynamic hinge.',
    specs: {
      material: 'Armor Aluminum Frame, Ultra-Thin Flexible Glass',
      dimensions: '154.9 x 129.9 x 6.1 mm (unfolded)',
      weight: '253g',
      edition: 'Infinity Line Pro',
      year: '2026'
    },
    features: ['8.0-inch Dynamic OLED main folding panel', 'Triple-lens optical stabilization camera array', 'Integrated stylus dock inside frame', 'Dual stereo chambers tuned by spatial audio engineers'],
    category: 'phone'
  },
  {
    id: 'phone-02',
    name: 'Titanium Pro Smart Phone',
    codename: 'TITANIUM-PRO',
    price: 1199.00,
    rating: 4.9,
    reviewsCount: 182,
    src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600',
    bg: '#343A40',
    panel: '#4E555C',
    description: 'Forged in lightweight titanium alloy. Features the ultra-fast A18 neural processing unit and a professional camera system.',
    specs: {
      material: 'Grade 5 Brushed Titanium, Matte Glass back panel',
      dimensions: '146.6 x 70.6 x 8.25 mm',
      weight: '187g',
      edition: 'Pro flagship series',
      year: '2026'
    },
    features: ['High-strength titanium bezel edge', '108MP main shooter with 5x lossless zoom', 'Neural network chip for local offline AI inference', 'Adaptive refresh screen (1Hz to 120Hz)'],
    category: 'phone'
  },
  {
    id: 'phone-03',
    name: 'Aero-Gamer Mobile Station',
    codename: 'AERO-GAMER',
    price: 999.00,
    rating: 4.7,
    reviewsCount: 93,
    src: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&q=80&w=600',
    bg: '#D90429',
    panel: '#EF476F',
    description: 'Equipped with an active physical cooling fan, side shoulder triggers, and customizable RGB rear illumination paneling.',
    specs: {
      material: 'Polycarbonate Shell, Copper Vapor Cooling Chamber',
      dimensions: '173.0 x 77.0 x 10.3 mm',
      weight: '239g',
      edition: 'Gamer Edition X',
      year: '2026'
    },
    features: ['Built-in mini active turbine fan', 'Ultrasonic shoulder bumpers for mapping controls', '165Hz ultra-high responsive gaming display', '6000mAh battery supporting 90W fast charging'],
    category: 'phone'
  },
  {
    id: 'phone-04',
    name: 'Minimalist Ink-Display Phone',
    codename: 'MINIMAL-INK',
    price: 499.00,
    rating: 4.5,
    reviewsCount: 76,
    src: 'https://images.unsplash.com/photo-1565849906662-680f40ecf68e?auto=format&fit=crop&q=80&w=600',
    bg: '#4A5759',
    panel: '#6B7A7C',
    description: 'A phone designed to curb distraction. Features a paper-like E-ink grayscale display that is extremely easy on the eyes.',
    specs: {
      material: 'Recycled ocean plastics, E-Ink glass face',
      dimensions: '140.0 x 68.0 x 7.9 mm',
      weight: '130g',
      edition: 'Eco-Mindful',
      year: '2026'
    },
    features: ['E-Ink screen with zero blue light emission', 'Battery lasts up to 3 weeks per charge', 'Minimalist software UI eliminating notification alerts', 'Physical switch to disable microphone and cameras'],
    category: 'phone'
  },
  {
    id: 'phone-05',
    name: 'Retro Flip-Key Pocket Phone',
    codename: 'FLIP-KEY',
    price: 299.00,
    rating: 4.4,
    reviewsCount: 118,
    src: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=600',
    bg: '#F3C68F',
    panel: '#F7D6AC',
    description: 'Combining a retro T9 physical keypad with basic 4G network tools. A compact design that flips open with a satisfying mechanical snap.',
    specs: {
      material: 'Anodized Steel Hinge, Textured Polycarbonate grip',
      dimensions: '105.0 x 53.0 x 18.0 mm (closed)',
      weight: '115g',
      edition: 'Retro Pocket Edition',
      year: '2026'
    },
    features: ['Tactile physical key buttons', 'Subtle external notification LED window', 'Internal FM tuner (does not require headphones)', 'Highly durable dual screen layout'],
    category: 'phone'
  },

  // --- AIRBOARDS (5 items) ---
  {
    id: 'airboard-01',
    name: 'Aero-Skate Electric Airboard',
    codename: 'AERO-SKATE',
    price: 499.00,
    rating: 4.8,
    reviewsCount: 65,
    src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=600',
    bg: '#0F4C81',
    panel: '#2D6B9E',
    description: 'An advanced dual-wheel gyroscopic balance hoverboard with built-in Bluetooth speakers and active LED ground styling lights.',
    specs: {
      material: 'Heavy-Duty ABS Shield, Steel Wheel Hubs',
      dimensions: '58.4cm x 18.6cm x 17.8cm',
      weight: '10.5kg',
      edition: 'Aero Street series',
      year: '2026'
    },
    features: ['Self-balancing gyroscopic stabilizer core', 'Dual 350W high-speed motor hubs', 'Integrated dynamic Bluetooth stereo channels', 'Active under-glow safety LED illumination'],
    category: 'airboard'
  },
  {
    id: 'airboard-02',
    name: 'True-Acoustic Wireless Earbuds',
    codename: 'TRUE-EARBUDS',
    price: 179.00,
    rating: 4.9,
    reviewsCount: 310,
    src: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600',
    bg: '#5E548E',
    panel: '#7F74B0',
    description: 'Wireless ear-buds offering hybrid active noise cancellation, deep acoustic bass, and custom responsive touch panel gestures.',
    specs: {
      material: 'Recycled Acrylic, Liquid Silicone Ear Tips',
      dimensions: 'Case size: 60 x 45 x 22 mm',
      weight: '5.2g per earbud',
      edition: 'Acoustic Elite',
      year: '2026'
    },
    features: ['Active Noise Cancellation up to 45dB', 'Bespoke 11mm graphene acoustic drivers', 'IPX4 perspiration and splash protection rating', 'Wireless charging protective case included'],
    category: 'airboard'
  },
  {
    id: 'airboard-03',
    name: 'Smart Cruiser Skate Board',
    codename: 'SMART-CRUISER',
    price: 389.00,
    rating: 4.7,
    reviewsCount: 52,
    src: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&q=80&w=600',
    bg: '#E07A5F',
    panel: '#ECA08B',
    description: 'Electric longboard with a hand-held wireless trigger controller. Moves smoothly at speeds up to 25mph using dual hub motors.',
    specs: {
      material: '8-ply Canadian Maple Deck, Polyurethane wheels',
      dimensions: '96.5cm length, 23.0cm width',
      weight: '7.8kg',
      edition: 'Cruiser Series',
      year: '2026'
    },
    features: ['Wireless handheld speed control remote', 'Dual brushless regenerative breaking motors', 'Flexible maple deck for shock damping', 'Battery pack range of 18 miles per charge'],
    category: 'airboard'
  },
  {
    id: 'airboard-04',
    name: 'Vapor-Studio Sound Helmet',
    codename: 'SOUND-HELMET',
    price: 299.00,
    rating: 4.8,
    reviewsCount: 78,
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
    bg: '#3D348B',
    panel: '#5F55AF',
    description: 'Studio-grade over-ear wireless headphones designed with memory foam ear cushions and high definition spatial audio feedback.',
    specs: {
      material: 'Brushed Aluminum Yokes, Protein Leather Cushions',
      dimensions: '186 x 165 x 80 mm',
      weight: '260g',
      edition: 'Studio Reference Line',
      year: '2026'
    },
    features: ['40mm dynamic dome transducers', 'Spatial head-tracking orientation sensors', '40 hours of continuous wireless play time', 'Folds flat into premium traveling case'],
    category: 'airboard'
  },
  {
    id: 'airboard-05',
    name: 'Neck-Holo Wearable Speaker',
    codename: 'NECK-HOLO',
    price: 129.00,
    rating: 4.6,
    reviewsCount: 84,
    src: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600',
    bg: '#F4A261',
    panel: '#F7C196',
    description: 'An ergonomic speaker that rests comfortably around your collarbones to deliver personal, immersive spatial sound without blocking your ears.',
    specs: {
      material: 'Silicone-Coated Flexible Frame, Acoustic Fabric mesh',
      dimensions: '210 x 185 x 45 mm',
      weight: '175g',
      edition: 'Holo Wearable Series',
      year: '2026'
    },
    features: ['Upward-firing stereo speaker array', 'Echo-cancelling integrated dual microphones', 'Lightweight comfortable flexible design', 'Multipoint connection pairing for two devices'],
    category: 'airboard'
  },

  // --- LAPTOPS (5 items) ---
  {
    id: 'laptop-01',
    name: 'Creator StudioBook 16',
    codename: 'STUDIOBOOK-16',
    price: 1899.00,
    rating: 4.9,
    reviewsCount: 92,
    src: 'https://images.unsplash.com/photo-1496181130204-755241524eab?auto=format&fit=crop&q=80&w=600',
    bg: '#003049',
    panel: '#1E4E6D',
    description: 'Tailored for video editors and developers. Features a gorgeous 16-inch OLED display panel and an integrated dial slider.',
    specs: {
      material: 'CNC Milled Aerospace Aluminum Case',
      dimensions: '35.6 x 24.9 x 1.79 cm',
      weight: '1.9kg',
      edition: 'Creator Series Flagship',
      year: '2026'
    },
    features: ['16-inch 120Hz OLED screen with 100% DCI-P3 color gamut', 'Intel Core Ultra 9 processor with AI boosts', 'Creative control dial for app shortcuts', 'Dual fans with liquid metal cooling'],
    category: 'laptop'
  },
  {
    id: 'laptop-02',
    name: 'Viper Gaming Rig v3',
    codename: 'VIPER-RIG',
    price: 2199.00,
    rating: 4.8,
    reviewsCount: 104,
    src: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600',
    bg: '#D62828',
    panel: '#E85858',
    description: 'Dominate esports with high-performance desktop graphics in a laptop frame. Boasts a 240Hz screen refresh speed.',
    specs: {
      material: 'Carbon Fiber and Polymer Hybrid chassis',
      dimensions: '36.3 x 26.2 x 2.2 cm',
      weight: '2.4kg',
      edition: 'Viper Esports Spec',
      year: '2026'
    },
    features: ['NVIDIA RTX 5080 Laptop GPU', '240Hz QHD display with 3ms response times', 'Per-key mechanical keyboard layout', 'RGB ambient underglow strip lighting'],
    category: 'laptop'
  },
  {
    id: 'laptop-03',
    name: 'Duo-Screen Smart Fold',
    codename: 'DUO-FOLD',
    price: 2499.00,
    rating: 5.0,
    reviewsCount: 38,
    src: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600',
    bg: '#3F37C9',
    panel: '#5C55D6',
    description: 'A dual 14-inch screen folding setup. Expands into a massive dual-monitor workspace with a magnetic detachable keyboard.',
    specs: {
      material: 'Magnesium Aluminum Alloy casing',
      dimensions: '31.2 x 21.8 x 1.99 cm (folded)',
      weight: '1.65kg (without keyboard)',
      edition: 'Futurism Premiere',
      year: '2026'
    },
    features: ['Twin 14-inch OLED touchscreens', 'Removable Bluetooth keyboard with built-in battery', 'Integrated foldout adjustable kickstand', 'Optimized multitasking software suite'],
    category: 'laptop'
  },
  {
    id: 'laptop-04',
    name: 'Slate Hybrid Tablet 13',
    codename: 'SLATE-HYBRID',
    price: 1099.00,
    rating: 4.7,
    reviewsCount: 115,
    src: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    bg: '#4895EF',
    panel: '#6CB0FF',
    description: 'A hybrid tablet that easily switches from a tablet slate to a laptop. Highly portable and built for digital artists.',
    specs: {
      material: 'Recycled Aluminum housing',
      dimensions: '28.7 x 20.8 x 0.73 cm',
      weight: '790g',
      edition: 'Creative Slate Series',
      year: '2026'
    },
    features: ['Ultra-responsive stylus pen support', '120Hz high-resolution display panel', 'Magnetic keyboard cover connection dock', 'Dual microphones with spatial isolation'],
    category: 'laptop'
  },
  {
    id: 'laptop-05',
    name: 'Zenith Featherweight Slim',
    codename: 'ZENITH-SLIM',
    price: 1399.00,
    rating: 4.8,
    reviewsCount: 147,
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    bg: '#4CC9F0',
    panel: '#7ADAF5',
    description: 'An incredibly light 13-inch ultrabook designed for travelers. Weights less than 1kg while sustaining long battery durability.',
    specs: {
      material: 'Super-Light Magnesium Lithium Alloy',
      dimensions: '29.9 x 20.1 x 0.99 cm',
      weight: '960g',
      edition: 'Zenith Featherweight Line',
      year: '2026'
    },
    features: ['Only 960g heavy - incredibly thin bezel design', 'Battery lasts up to 18 hours per charge', 'Quiet fanless thermal dissipation design', 'Fingerprint sensor integrated in power button'],
    category: 'laptop'
  },

  // --- CAMERAS (5 items) ---
  {
    id: 'camera-01',
    name: 'Stellar-View Mirrorless 8K',
    codename: 'STELLAR-VIEW',
    price: 1799.00,
    rating: 4.9,
    reviewsCount: 78,
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
    bg: '#03071E',
    panel: '#202439',
    description: 'Capture highly detailed photos and 8K videos using a 50MP full-frame sensor and smart autofocus AI.',
    specs: {
      material: 'Magnesium Alloy Frame, Rubberized Grip plates',
      dimensions: '134 x 102 x 80 mm',
      weight: '650g',
      edition: 'Professional Imaging Spec',
      year: '2026'
    },
    features: ['50.3 Megapixel full frame sensor', 'Real-time eye tracking autofocus AI', '8K video capture at 30 frames per second', 'Dual CFexpress memory slots'],
    category: 'camera'
  },
  {
    id: 'camera-02',
    name: 'Retro-Print Instant Camera',
    codename: 'RETRO-PRINT',
    price: 129.00,
    rating: 4.6,
    reviewsCount: 194,
    src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=600',
    bg: '#370617',
    panel: '#542031',
    description: 'A nostalgic instant camera that prints physical pocket pictures immediately on retro film cartridges.',
    specs: {
      material: 'High-Impact Polystyrene body',
      dimensions: '118 x 94 x 120 mm',
      weight: '320g',
      edition: 'Retro Classic Line',
      year: '2026'
    },
    features: ['Instantly prints on mini card film sheets', 'Built-in automatic exposure flash', 'Close-up selfie mirror on lens frame', 'Nostalgic analog shot counter dial'],
    category: 'camera'
  },
  {
    id: 'camera-03',
    name: 'Vanguard Vintage Film SLR',
    codename: 'VANGUARD-SLR',
    price: 399.00,
    rating: 4.8,
    reviewsCount: 57,
    src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600',
    bg: '#6A040F',
    panel: '#84222C',
    description: 'Fully mechanical classic 35mm SLR camera body. Winds manually and offers manual shutter adjustment dials for pure analog photographers.',
    specs: {
      material: 'Solid Brass Top Cover, Leatherette Wrap',
      dimensions: '142 x 90 x 55 mm',
      weight: '580g',
      edition: 'Vanguard Vintage Series',
      year: '2026'
    },
    features: ['Mechanical split-image focus finder screen', 'Fully manual shutter speed dial selection', 'Standard hot shoe mount for retro flashes', 'Includes vintage f/1.8 prime lens'],
    category: 'camera'
  },
  {
    id: 'camera-04',
    name: 'Apex-Sport Action Cam 4K',
    codename: 'APEX-ACTION',
    price: 299.00,
    rating: 4.7,
    reviewsCount: 138,
    src: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=600',
    bg: '#9D0208',
    panel: '#B92328',
    description: 'Capture extreme sports smoothly. Waterproof up to 20 meters, features advanced electronic gimbal stabilization.',
    specs: {
      material: 'Impact Resistant Polycarbonate shell',
      dimensions: '65 x 44 x 32 mm',
      weight: '120g',
      edition: 'Apex Extreme Line',
      year: '2026'
    },
    features: ['Stable-Horizon electronic sensor stabilization', '4K high speed video at 120 frames per second', 'Front and rear touchscreen display screens', 'IP68 waterproof seal rating'],
    category: 'camera'
  },
  {
    id: 'camera-05',
    name: 'Horizon Drone Camera Fly',
    codename: 'DRONE-FLY',
    price: 899.00,
    rating: 4.8,
    reviewsCount: 46,
    src: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600',
    bg: '#D00000',
    panel: '#E82A2A',
    description: 'An ultra-lightweight folding drone camera. Shoots 4K videos from above and features automatic collision safety sensors.',
    specs: {
      material: 'Carbon fiber folding propeller arms',
      dimensions: '140 x 85 x 55 mm (folded)',
      weight: '249g',
      edition: 'Horizon Aero Line',
      year: '2026'
    },
    features: ['Weighs under 249g (no registration required in most regions)', '3-axis motorized gimbal camera stabilizing', '40-minute battery flight endurance', 'Smart return-to-home autopilot route GPS'],
    category: 'camera'
  },

  // --- SPECTACLES (5 items) ---
  {
    id: 'spectacles-01',
    name: 'Aero-Lens Smart Glasses',
    codename: 'AERO-LENS',
    price: 299.00,
    rating: 4.8,
    reviewsCount: 88,
    src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600',
    bg: '#E85D04',
    panel: '#F87C2B',
    description: 'Immersive smart frames displaying navigations, notification texts, and taking calls via bone-conduction audio plates.',
    specs: {
      material: 'Grilamid TR90 Frame, Polarized Smart Lenses',
      dimensions: '52mm eye size, 18mm bridge size',
      weight: '38g',
      edition: 'Aero Wearable Line',
      year: '2026'
    },
    features: ['Bone conduction sound speakers built into temples', 'Mini heads-up display overlay on right lens', 'Takes photos via 5MP side temple camera', 'Blue-light blocking and UV protection lenses'],
    category: 'spectacles'
  },
  {
    id: 'spectacles-02',
    name: 'Classic Clubmaster Wayfarer',
    codename: 'CLUBMASTER',
    price: 149.00,
    rating: 4.9,
    reviewsCount: 165,
    src: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600',
    bg: '#F48C06',
    panel: '#F8A837',
    description: 'Classic tortoiseshell pattern Clubmaster sunglasses. Crafted with polarized dark green lenses and golden metal bridges.',
    specs: {
      material: 'Acetate tortoiseshell upper, Gold Plated Bridge',
      dimensions: '51mm eye size, 21mm bridge size',
      weight: '28g',
      edition: 'Wayfarer Classics',
      year: '2026'
    },
    features: ['Polarized green tint lenses blocking glare', 'Scratchproof safety glass coating', 'Comfortable adjustable rubber nose pads', 'Hard protective carry case included'],
    category: 'spectacles'
  },
  {
    id: 'spectacles-03',
    name: 'Zen Blue-Light Blocker',
    codename: 'ZEN-BLOCK',
    price: 79.00,
    rating: 4.7,
    reviewsCount: 212,
    src: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600',
    bg: '#FAA307',
    panel: '#FBBC3E',
    description: 'Filter computer screen glare and blue light wavelengths to alleviate headache fatigue and dry eyes.',
    specs: {
      material: 'Ultra-lightweight memory titanium wire frame',
      dimensions: '50mm eye size, 19mm bridge size',
      weight: '12g',
      edition: 'Digital Protection Line',
      year: '2026'
    },
    features: ['Blocks 95% of harmful blue light spectrum', 'Anti-reflective screen glare lens filter', 'Flex-fit temples adjust to head widths', 'Weighs only 12g for comfort all day'],
    category: 'spectacles'
  },
  {
    id: 'spectacles-04',
    name: 'Apex Shield Sports Visor',
    codename: 'APEX-SHIELD',
    price: 119.00,
    rating: 4.6,
    reviewsCount: 74,
    src: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=600',
    bg: '#FFBA08',
    panel: '#FFCC41',
    description: 'A wrapping sports shield visor frame offering full UV protection. Perfect for cycling and trail running.',
    specs: {
      material: 'High-Impact TR90 frame, Polycarbonate shield',
      dimensions: '135mm shield width',
      weight: '32g',
      edition: 'Apex Performance Visor',
      year: '2026'
    },
    features: ['Panoramic wrapping field of view', 'Anti-fog ventilation holes in lens edges', 'Hydrophobic coating repels sweat and rain', 'Non-slip rubber grip ear pads'],
    category: 'spectacles'
  },
  {
    id: 'spectacles-05',
    name: 'Luxury Circular Wire Frame',
    codename: 'LUCKY-CIRCLES',
    price: 199.00,
    rating: 4.8,
    reviewsCount: 53,
    src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=600',
    bg: '#8338EC',
    panel: '#9A5FED',
    description: 'Circular thin wire rim frames designed for retro styling. Elegant detailing carved along the temples.',
    specs: {
      material: 'Electroplated surgical stainless steel wire',
      dimensions: '48mm eye size, 20mm bridge size',
      weight: '16g',
      edition: 'Luxury Heritage Series',
      year: '2026'
    },
    features: ['Circular vintage wire style', 'Hand-finished temple details', 'Hypoallergenic plating resists tarnishing', 'Ultra-flexible hinge springs'],
    category: 'spectacles'
  },

  // --- ELECTRONICS (5 items) ---
  {
    id: 'elec-01',
    name: 'Cyber-Mechanical Keyboard Mini',
    codename: 'CYBER-KEYBOARD',
    price: 159.00,
    rating: 4.9,
    reviewsCount: 167,
    src: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600',
    bg: '#3A0CA3',
    panel: '#5625BC',
    description: 'A 60% compact layout mechanical keyboard featuring hot-swappable keys, linear switches, and retro keycaps.',
    specs: {
      material: 'Molded Polyurethane housing, Double-shot PBT keycaps',
      dimensions: '29.3 x 10.3 x 3.8 cm',
      weight: '620g',
      edition: 'Cyber Desk Accessory',
      year: '2026'
    },
    features: ['Hot-swappable linear mechanical key switches', '60% compact travel layout spacing', 'Full RGB backlighting customizable in app', 'Durable double-shot key caps'],
    category: 'electronics'
  },
  {
    id: 'elec-02',
    name: 'Studio Streaming Mic Pro',
    codename: 'STUDIO-MIC',
    price: 189.00,
    rating: 4.8,
    reviewsCount: 142,
    src: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=600',
    bg: '#4361EE',
    panel: '#6580F2',
    description: 'A USB microphone containing a large condenser capsule and 4 selectable capture patterns for high quality podcast recordings.',
    specs: {
      material: 'Cast Metal body, Weighted Steel Stand',
      dimensions: '120 x 125 x 295 mm',
      weight: '980g',
      edition: 'Studio Streamer Spec',
      year: '2026'
    },
    features: ['Triple condenser capsule array', '4 polar pickup patterns (Stereo, Cardioid, Omni, Bidirectional)', 'Zero-latency monitoring headphone jack', 'Integrated volume and mute buttons'],
    category: 'electronics'
  },
  {
    id: 'elec-03',
    name: 'Multi-Device Charging Dock',
    codename: 'MULTI-DOCK',
    price: 69.00,
    rating: 4.7,
    reviewsCount: 198,
    src: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=600',
    bg: '#4CC9F0',
    panel: '#7ADAF5',
    description: 'Charges your phone, smartwatch, and earbuds wireless at the same time using a single power cord.',
    specs: {
      material: 'Soft-touch silicone finish, Aluminum core plates',
      dimensions: '185 x 88 x 115 mm',
      weight: '310g',
      edition: 'Power Dock Series',
      year: '2026'
    },
    features: ['15W fast wireless charging phone stand', 'Magnetic charger attachment for watch', 'Secondary wireless charging pad for earbuds case', 'Overheat safety shutoff control sensors'],
    category: 'electronics'
  },
  {
    id: 'elec-04',
    name: 'Aero-Glow LED Desk Light',
    codename: 'AERO-GLOW',
    price: 99.00,
    rating: 4.8,
    reviewsCount: 115,
    src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=600',
    bg: '#7209B7',
    panel: '#8D2FD0',
    description: 'An elegant desk monitor screen bar lamp that matches ambient colors to prevent eye strain during late coding sessions.',
    specs: {
      material: 'Anodized Aluminum hanger bracket, plastic lens',
      dimensions: '450mm lamp length',
      weight: '480g',
      edition: 'Aero Lighting Series',
      year: '2026'
    },
    features: ['Asymmetric optical path illuminates desk without glare', 'Auto-dimming sensor adjusts to room light levels', 'Magnetic wireless dial controller button', 'RGB back-glow syncs with sound volume levels'],
    category: 'electronics'
  },
  {
    id: 'elec-05',
    name: 'Studio Audio Soundbar v2',
    codename: 'STUDIO-SOUNDBAR',
    price: 249.00,
    rating: 4.7,
    reviewsCount: 63,
    src: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=600',
    bg: '#F72585',
    panel: '#F957A4',
    description: 'A compact desktop audio bar delivering deep bass and spatial virtualization for movies and gaming setups.',
    specs: {
      material: 'Steel grille casing, ABS chassis enclosure',
      dimensions: '550 x 85 x 65 mm',
      weight: '1.8kg',
      edition: 'Acoustic Soundbar Pro',
      year: '2026'
    },
    features: ['Quad high-sensitivity neodymium audio drivers', 'Dual passive bass radiator vents', 'Optical, HDMI ARC, and Bluetooth pairing ports', 'Custom EQ preset modes for gaming and cinema'],
    category: 'electronics'
  },

  // --- BAGS (5 items) ---
  {
    id: 'bag-01',
    name: 'Cyberpunk Shield Backpack',
    codename: 'CYBER-SHIELD',
    price: 159.00,
    rating: 4.8,
    reviewsCount: 94,
    src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600',
    bg: '#1A1A1A',
    panel: '#303030',
    description: 'An anti-theft hardshell backpack built with water resistant nylon fabric and an integrated TSA security combination lock.',
    specs: {
      material: 'Nylon Cordura, Rigid Polycarbonate Shield face',
      dimensions: '45 x 30 x 15 cm',
      weight: '1.2kg',
      edition: 'Cyber Armor Line',
      year: '2026'
    },
    features: ['Water resistant hardshell front plating', 'Concealed zipper compartments preventing theft', '16-inch padded laptop storage sleeve', 'Built-in USB external charging ports'],
    category: 'bags'
  },
  {
    id: 'bag-02',
    name: 'Classic Leather Messenger',
    codename: 'LEATHER-MESSENGER',
    price: 189.00,
    rating: 4.9,
    reviewsCount: 76,
    src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600',
    bg: '#4E3629',
    panel: '#6D5141',
    description: 'Timeless messenger bag hand-crafted in genuine pull-up leather. Develops a gorgeous vintage patina over years of use.',
    specs: {
      material: 'Full Grain Pull-Up Cowhide Leather, Brass buckles',
      dimensions: '38 x 28 x 10 cm',
      weight: '1.4kg',
      edition: 'Vintage Heritage Classics',
      year: '2026'
    },
    features: ['Premium heavy grain cowhide leather structure', 'Heavy-duty brass buckles and zippers', 'Adjustable padded shoulder carry strap', 'Rear quick-access paperwork pocket'],
    category: 'bags'
  },
  {
    id: 'bag-03',
    name: 'Vanguard Canvas Duffle',
    codename: 'VANGUARD-DUFFLE',
    price: 129.00,
    rating: 4.7,
    reviewsCount: 65,
    src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600',
    bg: '#5C677D',
    panel: '#76829B',
    description: 'Heavy waxed canvas duffle bag with leather trim panels. Perfectly sized for weekend travels or gym gear carrying.',
    specs: {
      material: '20oz Waxed Cotton Canvas, Leather trim straps',
      dimensions: '52 x 28 x 26 cm',
      weight: '1.1kg',
      edition: 'Weekend Series',
      year: '2026'
    },
    features: ['Highly water resistant waxed canvas finish', 'Large capacity central storage area', 'Separate ventilated shoe side tunnel', 'Removable shoulder pad strap'],
    category: 'bags'
  },
  {
    id: 'bag-04',
    name: 'Apex Sling Crossbody Pack',
    codename: 'APEX-SLING',
    price: 79.00,
    rating: 4.6,
    reviewsCount: 118,
    src: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=600',
    bg: '#333533',
    panel: '#4B4D4B',
    description: 'An ergonomic crossbody chest pack featuring quick-release Fidlock magnetic buckle straps for rapid access.',
    specs: {
      material: 'X-Pac Waterproof Sailcloth, YKK waterproof zippers',
      dimensions: '30 x 16 x 8 cm',
      weight: '380g',
      edition: 'Nomad Tech Pack',
      year: '2026'
    },
    features: ['Fidlock magnetic quick release strap buckle', 'Dual internal tech accessory pocket slots', 'Hidden rear passport safety pouch', 'Breathable air-mesh backing foam'],
    category: 'bags'
  },
  {
    id: 'bag-05',
    name: 'Aero Travel Canvas Backpack',
    codename: 'AERO-CANVAS',
    price: 119.00,
    rating: 4.8,
    reviewsCount: 83,
    src: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600',
    bg: '#2F3E46',
    panel: '#425761',
    description: 'Classic canvas travel pack with custom rolltop closure system. Highly expandable to adapt to your travel cargo loads.',
    specs: {
      material: 'Heavy-duty organic canvas fabric, leather tabs',
      dimensions: '48 x 32 x 14 cm (expandable)',
      weight: '950g',
      edition: 'Traveler Series',
      year: '2026'
    },
    features: ['Expandable rolltop frame with strap locks', 'Side laptop access zipper track', 'Dual external side water bottle pockets', 'Comfortable padded back and shoulder support'],
    category: 'bags'
  }
];
