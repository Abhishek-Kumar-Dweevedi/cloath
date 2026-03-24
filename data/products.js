import blazerImg from '@/assets/products/blazer.jpg';
import denimImg from '@/assets/products/denim.jpg';
import vestImg from '@/assets/products/vest.jpg';
import toteImg from '@/assets/products/tote.jpg';
import denimSkirtImg from '@/assets/products/denim-skirt.jpg';
import cashmereSweaterImg from '@/assets/products/cashmere-sweater.jpg';
import midiDressImg from '@/assets/products/midi-dress.jpg';
import whiteTeeImg from '@/assets/products/white-tee.jpg';
import woolCoatImg from '@/assets/products/wool-coat.jpg';
import trenchCoatImg from '@/assets/products/trench-coat.jpg';
import chinosImg from '@/assets/products/chinos.jpg';


















export const products = [
{
  id: 'oversized-blazer',
  name: 'Oversized Blazer',
  price: 145,
  image: blazerImg,
  category: 'women',
  colors: ['#D4C5A9', '#4A4A4A', '#F5F0E8'],
  colorNames: ['Oatmeal', 'Charcoal', 'Cream'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.5,
  reviews: 128,
  description: 'A beautifully tailored oversized blazer crafted from premium organic linen. Features a relaxed silhouette with structured shoulders for an effortlessly polished look.',
  material: ['100% Organic Linen', 'Dry Clean Only', 'Ethically Sourced'],
  isBestSeller: true,
  isSustainable: true
},
{
  id: 'sustainable-denim',
  name: 'Sustainable Denim',
  price: 98,
  image: denimImg,
  category: 'women',
  colors: ['#4A6FA5', '#2C3E50', '#8B9DC3'],
  colorNames: ['Medium Wash', 'Dark Wash', 'Light Wash'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.3,
  reviews: 95,
  description: 'Classic straight-leg denim made from 100% recycled cotton. A conscious choice that doesn\'t compromise on style.',
  material: ['100% Recycled Cotton', 'Machine Washable', 'Sustainably Produced'],
  isBestSeller: true,
  isSustainable: true
},
{
  id: 'knitted-vest',
  name: 'Knitted Vest',
  price: 85,
  image: vestImg,
  category: 'women',
  colors: ['#F5F0E8', '#D4C5A9', '#8B7D6B'],
  colorNames: ['Cream', 'Oatmeal', 'Taupe'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.7,
  reviews: 64,
  description: 'A versatile knitted vest in a relaxed fit. Layer over shirts or wear alone for a contemporary minimal look.',
  material: ['70% Organic Cotton, 30% Linen', 'Hand Wash', 'GOTS Certified'],
  isBestSeller: true,
  isSustainable: true
},
{
  id: 'canvas-tote',
  name: 'Canvas Tote Bag',
  price: 65,
  image: toteImg,
  category: 'essentials',
  colors: ['#F5F0E8', '#D4C5A9', '#2C3E50'],
  colorNames: ['Natural', 'Sand', 'Navy'],
  sizes: ['One Size'],
  rating: 4.6,
  reviews: 203,
  description: 'An everyday essential crafted from heavyweight organic canvas. Spacious interior with internal pocket.',
  material: ['100% Organic Canvas', 'Spot Clean', 'Fair Trade'],
  isBestSeller: true,
  isSustainable: true
},
{
  id: 'organic-linen-blazer',
  name: 'Organic Linen Blazer',
  price: 145,
  image: blazerImg,
  category: 'women',
  colors: ['#D4C5A9', '#4A4A4A'],
  colorNames: ['Oatmeal', 'Charcoal'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.4,
  reviews: 78,
  description: 'Structured yet relaxed blazer in premium organic linen. Perfect for transitional dressing.',
  material: ['100% Organic Linen', 'Dry Clean Only', 'Ethically Sourced'],
  isSustainable: true
},
{
  id: 'sustainable-denim-skirt',
  name: 'Sustainable Denim Skirt',
  price: 98,
  image: denimSkirtImg,
  category: 'women',
  colors: ['#4A6FA5', '#2C3E50'],
  colorNames: ['Medium Wash', 'Dark Wash'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.2,
  reviews: 56,
  description: 'A timeless A-line denim skirt made from recycled denim. Midi length with a flattering high waist.',
  material: ['100% Recycled Denim', 'Machine Washable', 'Water-Saving Process'],
  isSustainable: true
},
{
  id: 'cashmere-blend-sweater',
  name: 'Cashmere Blend Sweater',
  price: 135,
  image: cashmereSweaterImg,
  category: 'women',
  colors: ['#B0B0B0', '#F5F0E8', '#2C3E50'],
  colorNames: ['Gray', 'Cream', 'Navy'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.8,
  reviews: 142,
  description: 'Luxuriously soft cashmere blend crew neck. A wardrobe essential for cooler months.',
  material: ['70% Cashmere, 30% Wool', 'Dry Clean Only', 'Responsibly Sourced'],
  isSustainable: true
},
{
  id: 'tencel-midi-dress',
  name: 'Tencel Midi Dress',
  price: 145,
  image: midiDressImg,
  category: 'women',
  colors: ['#A8C3A0', '#F5F0E8', '#2C3E50'],
  colorNames: ['Sage', 'Cream', 'Navy'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.6,
  reviews: 89,
  description: 'An elegant wrap midi dress in fluid Tencel fabric. Flattering tie waist and three-quarter sleeves.',
  material: ['100% Tencel Lyocell', 'Machine Washable', 'Carbon Neutral'],
  isSustainable: true
},
{
  id: 'perfect-white-tee',
  name: 'Perfect White Tee',
  price: 48,
  image: whiteTeeImg,
  category: 'essentials',
  colors: ['#FFFFFF', '#F5F0E8', '#2C3E50'],
  colorNames: ['White', 'Cream', 'Navy'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.5,
  reviews: 312,
  description: 'The ultimate basic. Heavyweight organic cotton with a perfectly relaxed fit.',
  material: ['100% Organic Cotton', 'Machine Washable', 'GOTS Certified'],
  isSustainable: true
},
{
  id: 'recycled-wool-coat',
  name: 'Recycled Wool Coat',
  price: 245,
  image: woolCoatImg,
  category: 'women',
  colors: ['#4A4A4A', '#2C3E50', '#8B7D6B'],
  colorNames: ['Charcoal', 'Navy', 'Taupe'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  rating: 4.7,
  reviews: 67,
  description: 'A statement coat crafted from recycled wool. Clean lines and a timeless silhouette.',
  material: ['80% Recycled Wool, 20% Nylon', 'Dry Clean Only', 'GRS Certified'],
  isSustainable: true
},
{
  id: 'classic-trench-coat',
  name: 'Classic Trench Coat',
  price: 195,
  image: trenchCoatImg,
  category: 'men',
  colors: ['#C4A882', '#4A4A4A', '#2C3E50'],
  colorNames: ['Camel', 'Charcoal', 'Navy'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  rating: 4.6,
  reviews: 104,
  description: 'A modern take on the classic trench. Water-resistant organic cotton with a tailored fit.',
  material: ['100% Organic Cotton', 'Dry Clean Recommended', 'Water-Resistant Finish'],
  isSustainable: true
},
{
  id: 'high-waisted-chinos',
  name: 'High-Waisted Chinos',
  price: 98,
  image: chinosImg,
  category: 'men',
  colors: ['#C4A882', '#4A4A4A', '#2C3E50'],
  colorNames: ['Tan', 'Charcoal', 'Navy'],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  rating: 4.4,
  reviews: 87,
  description: 'Perfectly tailored high-waisted chinos in organic cotton twill. A modern essential.',
  material: ['100% Organic Cotton Twill', 'Machine Washable', 'Fair Trade Certified'],
  isSustainable: true
}];


export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (category) => products.filter((p) => p.category === category);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);