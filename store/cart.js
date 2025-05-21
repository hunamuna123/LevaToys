import { defineStore } from 'pinia'
import { api } from './api'
import { isAuthenticated, getAuthHeaders } from '@/utils/auth'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalSum: (state) => state.items.reduce((sum, item) => sum + (parseFloat(item.product.price) || 0) * item.quantity, 0)
  },

  actions: {
    async fetchCart() {
      if (!isAuthenticated()) {
        // Load from localStorage if not authenticated
        const stored = localStorage.getItem('busket')
        if (stored) {
          try {
            const parsed = JSON.parse(stored)
            if (Array.isArray(parsed)) {
              this.items = parsed.map(item => ({
                id: item.id,
                quantity: item.quantity,
                product: item
              }))
            }
          } catch (error) {
            console.error('Error loading cart from localStorage:', error)
            this.items = []
          }
        }
        return
      }

      this.loading = true
      this.error = null
      try {
        const response = await fetch(`${api().url}api/v1/cart/`, {
          headers: {
            ...getAuthHeaders(),
            'accept': 'application/json',
          }
        })
        const data = await response.json()
        if (data.message === 'OK') {
          this.items = data.data.cart_item || []
        }
      } catch (error) {
        console.error('Error fetching cart:', error)
        this.error = 'Failed to load cart'
      } finally {
        this.loading = false
      }
    },

    async addToCart(product, quantity = 1, updateQuantity = true) {
      if (!isAuthenticated()) {
        // Handle local storage for non-authenticated users
        const existingCart = JSON.parse(localStorage.getItem('busket') || '[]')
        const existingItemIndex = existingCart.findIndex(item => item.id === product.id)
        
        if (existingItemIndex === -1) {
          // Добавляем новый товар со всей информацией
          existingCart.push({
            ...product,
            quantity
          })
        } else {
          // Обновляем количество существующего товара
          existingCart[existingItemIndex].quantity = updateQuantity 
            ? quantity 
            : existingCart[existingItemIndex].quantity + quantity
        }
        
        localStorage.setItem('busket', JSON.stringify(existingCart))
        
        // Обновляем состояние корзины
        this.items = existingCart.map(item => ({
          id: item.id,
          quantity: item.quantity,
          product: item
        }))
        return
      }

      try {
        const response = await fetch(`${api().url}api/v1/cart/add/`, {
          method: 'POST',
          headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json',
            'accept': 'application/json',
          },
          body: JSON.stringify({
            product_item: [{
              product_id: product.id,
              quantity,
              update_quantity: updateQuantity
            }]
          })
        })

        const data = await response.json()
        if (data.message === 'OK') {
          this.items = data.data.cart_item || []
        }
      } catch (error) {
        console.error('Error adding to cart:', error)
        throw error
      }
    },

    async removeFromCart(productId) {
      if (!isAuthenticated()) {
        // Handle local storage for non-authenticated users
        const existingCart = JSON.parse(localStorage.getItem('busket') || '[]')
        const updatedCart = existingCart.filter(item => item.id !== productId)
        localStorage.setItem('busket', JSON.stringify(updatedCart))
        
        // Обновляем состояние корзины
        this.items = updatedCart.map(item => ({
          id: item.id,
          quantity: item.quantity,
          product: item
        }))
        return
      }

      try {
        const response = await fetch(`${api().url}api/v1/cart/`, {
          method: 'DELETE',
          headers: {
            ...getAuthHeaders(),
            'Content-Type': 'application/json',
            'accept': 'application/json',
          },
          body: JSON.stringify({
            product_id: productId
          })
        })

        const data = await response.json()
        if (data.message === 'OK') {
          this.items = data.data.cart_item || []
        }
      } catch (error) {
        console.error('Error removing from cart:', error)
        throw error
      }
    },

    async clearCart() {
      if (!isAuthenticated()) {
        localStorage.removeItem('busket')
        this.items = []
        return
      }

      try {
        // Remove each item individually since there's no bulk delete endpoint
        for (const item of this.items) {
          await this.removeFromCart(item.product.id)
        }
      } catch (error) {
        console.error('Error clearing cart:', error)
        throw error
      }
    }
  }
}) 