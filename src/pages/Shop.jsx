"use client"

import { useState } from "react"
import { Search, ShoppingCart, Filter, Star, Heart, Plus, Minus, X } from "lucide-react"

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSize, setSelectedSize] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const categories = [
    { id: "all", name: "All Products" },
    { id: "jerseys", name: "Jerseys" },
    { id: "training", name: "Training Wear" },
    { id: "accessories", name: "Accessories" },
    { id: "fan-gear", name: "Fan Gear" },
  ]

  const products = [
    {
      id: 1,
      name: "Home Jersey 2025/26",
      price: 89.99,
      originalPrice: 99.99,
      image: "/yellow-football-jersey-with-blue-trim.png",
      category: "jerseys",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      rating: 4.8,
      reviews: 124,
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Away Jersey 2025/26",
      price: 89.99,
      image: "/yellow-kids-football-jersey-with-blue-trim.png",
      category: "jerseys",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      rating: 4.7,
      reviews: 98,
      isNew: true,
    },
    {
      id: 3,
      name: "Training Shorts",
      price: 34.99,
      image: "/yellow-football-shorts-with-blue-trim.png",
      category: "training",
      sizes: ["S", "M", "L", "XL"],
      rating: 4.6,
      reviews: 67,
    },
    {
      id: 4,
      name: "Team Socks",
      price: 19.99,
      image: "/yellow-football-socks-with-blue-trim.png",
      category: "accessories",
      sizes: ["S", "M", "L"],
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 5,
      name: "Club Scarf",
      price: 24.99,
      image: "/placeholder-rth5o.png",
      category: "fan-gear",
      sizes: ["One Size"],
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 6,
      name: "Training Jacket",
      price: 79.99,
      image: "/placeholder-867zc.png",
      category: "training",
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: 4.7,
      reviews: 43,
    },
    {
      id: 7,
      name: "Club Cap",
      price: 29.99,
      image: "/placeholder-ewve6.png",
      category: "accessories",
      sizes: ["One Size"],
      rating: 4.4,
      reviews: 78,
    },
    {
      id: 8,
      name: "Fan T-Shirt",
      price: 39.99,
      image: "/placeholder-4c66d.png",
      category: "fan-gear",
      sizes: ["XS", "S", "M", "L", "XL"],
      rating: 4.6,
      reviews: 92,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSize = selectedSize === "all" || product.sizes.includes(selectedSize)
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "under-50" && product.price < 50) ||
      (priceRange === "50-100" && product.price >= 50 && product.price <= 100) ||
      (priceRange === "over-100" && product.price > 100)

    return matchesCategory && matchesSearch && matchesSize && matchesPrice
  })

  const addToCart = (product, size = "M") => {
    const existingItem = cartItems.find((item) => item.id === product.id && item.size === size)
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.size === size ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      )
    } else {
      setCartItems([...cartItems, { ...product, size, quantity: 1 }])
    }
  }

  const removeFromCart = (productId, size) => {
    setCartItems(cartItems.filter((item) => !(item.id === productId && item.size === size)))
  }

  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId, size)
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId && item.size === size ? { ...item, quantity: newQuantity } : item,
        ),
      )
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="font-krub font-bold text-2xl text-card-foreground">Official Shop</h1>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-foreground"
                />
              </div>
            </div>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-card-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-krub font-bold text-5xl text-primary-foreground mb-4">New Season Collection</h2>
          <p className="font-lexend text-xl text-primary-foreground/90 mb-8">
            Get the latest jerseys, training gear, and fan merchandise
          </p>
          <button className="bg-accent text-accent-foreground font-krub font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden fixed bottom-4 right-4 z-30 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
          >
            <Filter className="w-6 h-6" />
          </button>

          {/* Sidebar Filters */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-80 bg-card transform transition-transform lg:relative lg:translate-x-0 lg:w-64 lg:flex-shrink-0 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="h-full overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h3 className="font-krub font-semibold text-xl text-card-foreground">Filters</h3>
                <button onClick={() => setIsSidebarOpen(false)} className="text-card-foreground hover:text-primary">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-krub font-semibold text-lg text-card-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-card-foreground hover:bg-muted"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="font-krub font-semibold text-lg text-card-foreground mb-4">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["all", "XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "text-muted-foreground border-border hover:border-primary"
                      }`}
                    >
                      {size === "all" ? "All" : size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-krub font-semibold text-lg text-card-foreground mb-4">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { id: "all", label: "All Prices" },
                    { id: "under-50", label: "Under $50" },
                    { id: "50-100", label: "$50 - $100" },
                    { id: "over-100", label: "Over $100" },
                  ].map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        priceRange === range.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-card-foreground hover:bg-muted"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div className="fixed inset-0 bg-background/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                        SALE
                      </span>
                    )}
                    <button className="absolute top-2 right-2 p-2 text-card-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100">
                      <Heart className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-accent text-accent-foreground font-krub font-semibold py-2 rounded-lg hover:bg-accent/90 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-krub font-semibold text-lg text-card-foreground mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-accent fill-current" : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-krub font-bold text-xl text-card-foreground">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-background/50" onClick={() => setIsCartOpen(false)} />
            <div className="relative bg-card rounded-lg shadow-xl max-w-md w-full max-h-96 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-krub font-bold text-xl text-card-foreground">Shopping Cart</h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-muted-foreground hover:text-card-foreground"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cartItems.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-krub font-semibold text-card-foreground">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                            <p className="font-krub font-bold text-card-foreground">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="p-1 text-muted-foreground hover:text-card-foreground"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-card-foreground font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="p-1 text-muted-foreground hover:text-card-foreground"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-krub font-bold text-lg text-card-foreground">
                          Total: ${getTotalPrice()}
                        </span>
                      </div>
                      <button className="w-full bg-primary text-primary-foreground font-krub font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                        Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop
