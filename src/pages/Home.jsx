import React from 'react'
    import { Link } from 'react-router-dom'

    export default function Home() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Welcome to Moroccan Marketplace</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Items */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Featured Items</h2>
              {/* Add featured items carousel here */}
            </div>
            
            {/* Recent Listings */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Recent Listings</h2>
              {/* Add recent listings grid here */}
            </div>
            
            {/* Popular Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
              <div className="space-y-2">
                <Link to="/listings?category=electronics" className="block text-gray-700 hover:text-primary">
                  Electronics
                </Link>
                <Link to="/listings?category=furniture" className="block text-gray-700 hover:text-primary">
                  Furniture
                </Link>
                <Link to="/listings?category=fashion" className="block text-gray-700 hover:text-primary">
                  Fashion
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
