import { Badge, Bolt } from 'lucide-react'
import React from 'react'

const BadgeFeature = ({icon, text}) => {
    return (
        <div className="flex gap-2">
            <Badge variant ="outline" ><Bolt /></Badge>
            <p className=" rounded-2xl border border-[#EDEDF2]/60">12000 sqft </p>
        </div>
    )
}

export default BadgeFeature
