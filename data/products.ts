import type { Product } from "@/types/product"

export const makaroniProducts: Product[] = [
  {
    id: 1,
    name: "Makaroni Rasa Jagung",
    price: "Rp 15.000",
    description: "Makaroni renyah dengan manis gurih khas jagung yang harum dan bikin nagih di setiap gigitan",
    image: "/placeholder-mk7xr.png",
    rating: 4.8,
    isPopular: true,
    spiceLevel: "Tidak Pedas",
    ingredients: "Makaroni, Bumbu Rasa Jagung, Gula, Garam, Bawang Merah, Bawang Putih",
    nutrition: "Kalori: 320 kcal, Protein: 12g, Karbohidrat: 45g, Lemak: 8g",
    allergens: "Gluten, mungkin mengandung telur",
    cookingTime: "15-20 menit",
    portion: "1 porsi (200g)",
  },
  {
    id: 2,
    name: "Makaroni Chili Oil",
    price: "Rp 18.000",
    description: "Camilan renyah dengan sensasi pedas gurih yang meledak di mulut",
    image: "/mangar.png",
    rating: 4.9,
    isPopular: true,
    spiceLevel: "Pedas",
    ingredients: "Makaroni, Minyak Nabati, Bubuk Cabai,DAun Jeruk Kering, Bawang Putih, Bawang Merah, Garam, Gula, Monosodium Glutamat (MSG)",
    nutrition: "Kalori: 380 kcal, Protein: 15g, Karbohidrat: 42g, Lemak: 14g",
    allergens: "Gluten, susu, mungkin mengandung telur",
    cookingTime: "15-20 menit",
    portion: "1 porsi (200g)",
  },
]
