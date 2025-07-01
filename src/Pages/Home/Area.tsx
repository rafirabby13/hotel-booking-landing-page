import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Coffee, ShoppingBag, Train, Waves } from 'lucide-react'
import React from 'react'

const Area = () => {
    const items = [
        {
            category: "Restaurants & cafés",
            icon: <Coffee className="w-4 h-4 mr-2" />,
            places: ["Blue Cafe", "Blue Cafe", "Blue Cafe"],
        },
        {
            category: "Beaches",
            icon: <Waves className="w-4 h-4 mr-2" />,
            places: ["Les Dunes Beach", "Les Dunes Beach", "Les Dunes Beach"],
        },
        {
            category: "Shops & Markets",
            icon: <ShoppingBag className="w-4 h-4 mr-2" />,
            places: ["Central Mall", "Central Mall", "Central Mall"],
        },
        {
            category: "Public transport",
            icon: <Train className="w-4 h-4 mr-2" />,
            places: ["Train - Riverside", "Metro - Cityline", "Metro - Cityline"],
        },
    ]
    return (

        <div>
            <h2 className="text-lg font-semibold mb-4">Explore the Area</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left Info List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm flex-1">
                    {items.map((item, i) => (
                        <div key={i}>
                            <div className="flex items-center font-medium mb-3 text-prime-text">
                                {item.icon}
                                {item.category}
                            </div>
                            <ul className="text-second-text">
                                {item.places.map((place, index) => (
                                    <li key={index} className="flex justify-between">
                                        <span>{place}</span>
                                        <span className="text-xs ">1.4 km</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Right Map Card */}
                <div className="w-full border-2 border-prime-background rounded-md overflow-hidden  shadow">
                  
                        <img
                            src="/map.jpg"
                            alt="Map"
                            className="w-full h-60 object-cover "
                        />
                        <p className=" p-3  text-center text-[#007DD0] text-sm font-medium">
                            Explore the Area
                        </p>
                   
                </div>
            </div>
        </div>

    )
}

export default Area
