'use client'


import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AirVent, Bolt, Dumbbell, House, MessageCircle, MessageSquare, UtensilsCrossed, WavesLadder, Wifi } from "lucide-react"

const Features = () => {
    return (
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 ">

            {/* Left Section */}
            <div className="space-y-6 w-full md:w-2/3">

                {/* Tabs */}
                <div className="flex flex-col sm:flex-row items-center gap-8 text-lg font-medium text-second-text">
                    <span className=" text-prime-blue font-medium border-b-4 border-prime-blue  ">Over View</span>
                    <span className="">Features</span>
                    <span>Reviews</span>
                    <span className="bg-[#007DD0] text-white flex w-fit items-center gap-2 py-2 px-4 rounded-full">
                        <p><MessageCircle /></p>
                        <p>Message</p>
                    </span>
                </div>

                {/* Property Info */}
                <div className="space-y-4">
                    <div className="text-lg font-semibold text-[#252525]">Property Type</div>
                    <div className="flex gap-6">
                        <div className="flex gap-2 ">
                            <Badge variant={"outline"} ><House /></Badge>
                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Resorts </p>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant={"outline"} ><Bolt /></Badge>
                            <p className=" rounded-2xl border border-[#EDEDF2]/60">12000 sqft </p>
                        </div>
                    </div>

                </div>

                {/* Features */}
                <div className="space-y-4">
                    <div className="text-lg font-semibold text-prime-text">Features</div>
                    <div className="flex sm:flex-row flex-col gap-2 sm:gap-6">
                        <div className="flex gap-2">
                            <Badge variant={"outline"} ><Wifi /></Badge>
                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Wifi </p>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant={"outline"} ><UtensilsCrossed /></Badge>
                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Dining </p>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant={"outline"} ><WavesLadder /></Badge>
                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Swimming Pool</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex gap-2">
                            <Badge variant={"outline"} ><AirVent /></Badge>
                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Air Conditioning </p>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant={"outline"} ><Dumbbell /></Badge>
                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Gym </p>
                        </div>

                    </div>

                </div>
            </div>

            {/* Booking Card */}
            <Card className="w-full md:w-1/3  border-2 border-[#007DD0]/30">
                <CardContent className="p-3 px-12 space-y-4 text-center">
                    <div className="text-sm text-prime-text">1 week, 2 adults, 1 child</div>
                    <div className="text-2xl font-bold text-gray-900">USD $6,112</div>
                    <Button className="w-full  mt-2 bg-prime-blue rounded-full">Reserve</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Features
