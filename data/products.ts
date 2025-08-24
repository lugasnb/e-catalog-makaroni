import type { Product } from "@/types/product"

export const makaroniProducts: Product[] = [
  {
    id: 1,
    name: "Makaroni Rasa Jagung",
    price: "Rp -",
    description: "Makaroni renyah dengan manis gurih khas jagung yang harum dan bikin nagih di setiap gigitan",
    image: "/placeholder-mk7xr.png",
    rating: 0,
    isPopular: true,
    spiceLevel: "Tidak Pedas",
    ingredients: "-",
    nutrition: "Kalori: - kcal, Protein: -g, Karbohidrat: -g, Lemak: -g",
    allergens: "-",
    cookingTime: "- menit",
    portion: "-",
  },
  {
    id: 2,
    name: "Makaroni Chili Oil",
    price: "Rp 13.000",
    description: "Camilan renyah dengan sensasi pedas gurih yang meledak di mulut",
    image: "/mangar.png",
    rating: 0,
    isPopular: true,
    spiceLevel: "Pedas",
    ingredients: "Makaroni, Minyak Nabati, Bubuk Cabai,DAun Jeruk Kering, Bawang Putih, Bawang Merah, Garam, Gula, Monosodium Glutamat (MSG)",
    nutrition: "Kalori: 100kcal, Protein: 2g, Karbohidrat: 5g, Lemak: 1g",
    allergens: "-",
    cookingTime: "10-15 menit",
    portion: "1 porsi (100g)",
  },
]
