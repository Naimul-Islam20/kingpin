import { useState } from 'react';
import { MapPin, Users, Calendar, Filter } from 'lucide-react';

'use client';


export default function VenueAvailable() {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const venues = [
        {
            id: 1,
            name: 'Grand Ballroom',
            location: 'Downtown',
            capacity: 500,
            price: '$5000',
            image: '🏛️',
            rating: 4.8,
            available: 'Available',
        },
        {
            id: 2,
            name: 'Royal Garden',
            location: 'Midtown',
            capacity: 300,
            price: '$3500',
            image: '🌳',
            rating: 4.9,
            available: 'Available',
        },
        {
            id: 3,
            name: 'Crystal Hall',
            location: 'Uptown',
            capacity: 200,
            price: '$2500',
            image: '💎',
            rating: 4.7,
            available: 'Available',
        },
        {
            id: 4,
            name: 'Riverside Pavilion',
            location: 'Waterfront',
            capacity: 400,
            price: '$4500',
            image: '🌊',
            rating: 4.9,
            available: 'Available',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Available Venues
                </h1>
                <p className="text-xl text-gray-600">
                    Find the perfect venue for your special event
                </p>
            </div>

            {/* Filter Section */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex flex-wrap gap-3">
                    {['all', 'small', 'medium', 'large'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                selectedFilter === filter
                                    ? 'bg-indigo-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                            }`}
                        >
                            <Filter className="inline mr-2 w-4 h-4" />
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Venues Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {venues.map((venue) => (
                        <div
                            key={venue.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            {/* Image */}
                            <div className="h-40 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                                {venue.image}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {venue.name}
                                </h3>

                                {/* Location */}
                                <div className="flex items-center text-gray-600 mb-3">
                                    <MapPin className="w-4 h-4 mr-2 text-indigo-600" />
                                    <span className="text-sm">{venue.location}</span>
                                </div>

                                {/* Capacity */}
                                <div className="flex items-center text-gray-600 mb-4">
                                    <Users className="w-4 h-4 mr-2 text-indigo-600" />
                                    <span className="text-sm">{venue.capacity} Guests</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    <span className="text-yellow-400 text-lg">⭐</span>
                                    <span className="ml-2 font-semibold text-gray-900">
                                        {venue.rating}
                                    </span>
                                </div>

                                {/* Price and Button */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <span className="text-2xl font-bold text-indigo-600">
                                        {venue.price}
                                    </span>
                                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Can't find what you need?</h2>
                <p className="text-lg mb-6 opacity-90">
                    Contact our team for custom venue options
                </p>
                <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                    Get in Touch
                </button>
            </div>
        </div>
    );
}