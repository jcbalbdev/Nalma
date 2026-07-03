export type Category = 'bebe' | 'mama';

export interface Product {
  id: number;
  num: string;
  name: string;
  category: Category;
  subcategory?: string;
  description: string;
  size: string;
  price: number;
  isNew?: boolean;
  // Marcar como true para que aparezca en "Los favoritos de mamá"
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    num: '01',
    name: 'Shower gel',
    category: 'bebe',
    description: 'Limpieza delicada 2 en 1',
    size: '240 ml',
    price: 50,
    featured: true,
  },
  {
    id: 2,
    num: '02',
    name: 'Loción hidratante',
    category: 'bebe',
    description: 'Hidratación que protege la piel del bebé',
    size: '240 ml',
    price: 50,
    featured: true,
  },
  {
    id: 3,
    num: '03',
    name: 'Crema protectora de pañal',
    category: 'bebe',
    description: 'Protección e hidratación efectiva',
    size: '80 ml',
    price: 50,
    isNew: true,
    featured: true,
  },
  {
    id: 4,
    num: '04',
    name: 'Crema antiestrias',
    category: 'mama',
    subcategory: 'Embarazo',
    description: 'Hidratación intensiva con elasticidad',
    size: '240 ml',
    price: 50,
  },
  {
    id: 5,
    num: '05',
    name: 'Crema reafirmante',
    category: 'mama',
    subcategory: 'Post Parto',
    description: 'Tonifica y aporta firmeza',
    size: '240 ml',
    price: 50,
  },
  {
    id: 6,
    num: '06',
    name: 'Bálsamo para pezones',
    category: 'mama',
    subcategory: 'Lactancia',
    description: 'Hidratante, activo y nutriente',
    size: '80 ml',
    price: 50,
  },
  {
    id: 7,
    num: '07',
    name: 'Aceite corporal',
    category: 'mama',
    subcategory: 'Embarazo',
    description: 'Nutre y aporta elasticidad desde el primer trimestre',
    size: '100 ml',
    price: 55,
    isNew: true,
    featured: true,
  },
  {
    id: 8,
    num: '08',
    name: 'Gel limpiador facial',
    category: 'mama',
    subcategory: 'Post Parto',
    description: 'Limpieza suave para piel sensible y hormonal',
    size: '150 ml',
    price: 45,
    isNew: true,
  },
  {
    id: 9,
    num: '09',
    name: 'Crema de masaje',
    category: 'bebe',
    description: 'Textura ligera para el ritual de masaje diario',
    size: '120 ml',
    price: 48,
    isNew: true,
  },
];
