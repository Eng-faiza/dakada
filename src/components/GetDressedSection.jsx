"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart, X, Plus, Minus } from "lucide-react"

const GetDressedSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [favorites, setFavorites] = useState(new Set())

   const products = [
    {
      id: 1,
      name: "DEKEDDA THIRD JERSEY 2025/26",
      price: "€100,00",
      image: "sp1.webp",
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Jersey",
    },
    {
      id: 2,
      name: "DEKEDDA THIRD JERSEY KIDS 2025/26",
      price: "€80,00",
      image: "sp2.webp",
      sizes: ["XS", "S", "M", "L"],
      category: "Jersey",
    },
    {
      id: 3,
      name: "DEKEDDA THIRD SHORTS 2025/26",
      price: "€60,00",
      image: "sp3.webp",
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Shorts",
    },
    {
      id: 4,
      name: "DEKEDDA THIRD SOCKS 2025/26",
      price: "€23,00",
      image: "sp4.webp",
      sizes: ["001", "002", "003", "004", "005"],
      category: "Socks",
    },
    {
      id: 1,
      name: "DEKEDDA THIRD JERSEY 2025/26",
      price: "€100,00",
      image: "s1.webp",
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Jersey",
    },
    {
      id: 2,
      name: "DEKEDDA THIRD JERSEY 2025/26",
      price: "€100,00",
      image: "s2.webp",
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Jersey",
    },
    {
      id: 3,
      name: "DEKEDDA THIRD JERSEY 2025/26",
      price: "€100,00",
      image: "s3.webp",
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Jersey",
    },
    {
      id: 4,
      name: "DEKEDDA THIRD JERSEY 2025/26",
      price: "€100,00",
      image: "s4.webp",
      sizes: ["XS", "S", "M", "L", "XL"],
      category: "Jersey",
    },
  ]

  const openQuickView = (product) => {
    setSelectedProduct(product)
    setSelectedSize(product.sizes[0])
    setQuantity(1)
  }

  const closeQuickView = () => {
    setSelectedProduct(null)
  }

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 3)) % Math.max(1, products.length - 3))
  }

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-lexend text-gray-600 uppercase tracking-wider mb-2">GET DRESSED</p>
            <h2 className="font-krub font-bold text-4xl text-gray-900">THIRD KIT 2025/26</h2>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-80 flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                      <div className="flex justify-end mb-4">
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className={`p-2 rounded-full transition-colors ${
                            favorites.has(product.id)
                              ? "text-red-500 bg-red-50"
                              : "text-gray-400 hover:text-red-500 hover:bg-red-50"
                          }`}
                        >
                          <Heart className="w-5 h-5" fill={favorites.has(product.id) ? "currentColor" : "none"} />
                        </button>
                      </div>

                      <div className="aspect-square mb-6 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-contain p-4"
                        />
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="font-krub font-bold text-sm text-gray-900 mb-2 uppercase">{product.name}</h3>
                        <div className="flex items-center justify-center gap-2">
                          <span className="font-lexend text-lg font-bold text-primary-dark">From {product.price}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button className="w-full bg-primary-dark hover:bg-primary-light text-white font-lexend font-medium py-3 rounded-lg transition-colors">
                          ADD TO CART
                        </button>
                        <button
                          onClick={() => openQuickView(product)}
                          className="w-full border-2 border-gray-200 hover:border-primary-light text-gray-700 hover:text-primary-dark font-lexend font-medium py-3 rounded-lg transition-colors"
                        >
                          QUICK VIEW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-light hover:bg-primary-dark text-white font-lexend font-semibold px-8 py-3 rounded-lg transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex">
              <div className="w-1/2 p-8">
                <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center border-2 border-gray-200">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>

              <div className="w-1/2 p-8">
                <h2 className="font-krub font-bold text-2xl text-gray-900 mb-4 uppercase">{selectedProduct.name}</h2>

                <div className="mb-6">
                  <span className="font-lexend text-3xl font-bold text-gray-900">{selectedProduct.price}</span>
                  <span className="text-gray-600 ml-2">Tax included</span>
                </div>

                <div className="mb-6">
                  <label className="block font-lexend font-medium text-gray-900 mb-3 uppercase text-sm">Size</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full p-3 border-2 border-primary-light text-gray-900 rounded-lg font-lexend focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-dark"
                  >
                    {selectedProduct.sizes.map((size) => (
                      <option key={size} value={size} className="text-gray-900">
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border-2 border-gray-400 text-gray-900 rounded-lg hover:bg-gray-50 hover:border-primary-light transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-lexend font-medium text-lg w-12 text-center text-gray-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border-2 border-gray-400 text-gray-900 rounded-lg hover:bg-gray-50 hover:border-primary-light transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-4 mb-8">
                  <button className="flex-1 bg-primary-dark hover:bg-primary-light text-white font-lexend font-medium py-4 rounded-lg transition-colors uppercase">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => toggleFavorite(selectedProduct.id)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      favorites.has(selectedProduct.id)
                        ? "border-red-500 text-red-500 bg-red-50"
                        : "border-gray-300 text-gray-400 hover:border-red-500 hover:text-red-500"
                    }`}
                  >
                    <Heart className="w-6 h-6" fill={favorites.has(selectedProduct.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-lexend text-gray-900 font-medium">Share</span>
                    <div className="flex gap-3">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </button>
                      <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.25 3.438 9.675 8.205 11.188.6-.225 1.005-.825 1.005-1.463 0-.225-.015-1.988-.015-3.603-3.315.735-4.005-1.425-4.005-1.425-.54-1.38-1.335-1.725-1.335-1.725-1.08-.735.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23 1.065 1.8 2.775 1.275 3.45.975.105-.765.42-1.275.765-1.575-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825 1.575-4.965-1.65-8.55-6.075-8.55-11.325 0-6.627 5.373-12 12-12z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GetDressedSection
