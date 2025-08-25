"use client"

import { useState } from "react"
import type { Product } from "@/types/product"
import { makaroniProducts } from "@/data/products"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductCard from "@/components/ProductCard"
import ProductModal from "@/components/ProductModal"
import AboutSection from "@/components/AboutSection"
import GallerySection from "@/components/GallerySection"
import Footer from "@/components/Footer"

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      <Hero />

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Menu Pilihan Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
              Setiap varian makaroni dibuat dengan resep rahasia dan bumbu pilihan untuk pengalaman kuliner terbaik.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {makaroniProducts.map((product) => (
                <ProductCard key={product.id} product={product} onDetailClick={openProductDetail} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={closeModal} />

      <GallerySection />
      <AboutSection />
      <Footer />
    </div>
  )
}
