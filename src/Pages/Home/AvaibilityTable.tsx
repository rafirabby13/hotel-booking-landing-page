
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Bath, BedDouble, Hospital, Maximize2, Monitor, SunSnow, UserRound, Wifi } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
const AvaibilityTable = () => {
    const rooms = [
        {
            id: 1,
            name: "Twin Room",
            beds: "2 single beds",
            size: "1200 sq ft",
            maxGuests: 2,
            price: 282,
            currency: "$",
            period: "1 week",
            amenities: ["Air condition", "Bathroom", "TV", "WiFi"],
            features: "Breakfast included",
            availability: "Only 4 rooms left",
            availabilityColor: "text-red-500"
        },
        {
            id: 2,
            name: "Deluxe Double Room",
            beds: "2 single beds",
            size: "1200 sq ft",
            maxGuests: 2,
            price: 282,
            currency: "$",
            period: "1 week",
            amenities: ["Air condition", "Bathroom", "TV", "WiFi"],
            features: "Breakfast included",
            availability: "Only 4 rooms left",
            availabilityColor: "text-red-500"
        },
        {
            id: 3,
            name: "Deluxe Double Room",
            beds: "2 single beds",
            size: "1200 sq ft",
            maxGuests: 2,
            price: 282,
            currency: "$",
            period: "1 week",
            amenities: ["Air condition", "Bathroom", "TV", "WiFi"],
            features: "Breakfast included",
            availability: "Only 4 rooms left",
            availabilityColor: "text-red-500"
        }
    ]
    return (
        <div>
            <Table>

                <TableHeader className='bg-prime-blue py-4 text-white'>
                    <TableRow className='text-white'>
                        <TableHead className="px-4 text-white">Room Type</TableHead>
                        <TableHead className='px-4 text-white'>Number of Guests</TableHead>
                        <TableHead className='px-4 text-white'>Price </TableHead>
                        <TableHead className="text-right px-4 text-white">Your Choices</TableHead>
                        <TableHead className="text-right px-4 text-white" >Select Rooms</TableHead>
                        <TableHead className="text-right px-4 text-white">Reserve Button </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        rooms.map((room, i) => <TableRow key={i}>
                            <TableCell className="font-medium border-r-2 border-prime-background   w-full sm:w-fit p-3">
                                <div className='space-y-3 '>
                                    <h1 className='text-[#007DD0] font-bold text-sm'>{room.name}</h1>
                                    <div className='flex items-center gap-4 text-[#252525] text-sm'>
                                        <p>2 single beds</p>
                                        <p><BedDouble /></p>
                                        <p><BedDouble /></p>
                                    </div>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                        <div className="flex gap-2">
                                            <Badge variant={"outline"} ><Hospital /></Badge>
                                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Room </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant={"outline"} ><Maximize2 /></Badge>
                                            <p className=" rounded-2xl border border-[#EDEDF2]/60">1200 sq ft </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant={"outline"} ><SunSnow /></Badge>
                                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Air condition </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant={"outline"} ><Bath /></Badge>
                                            <p className=" rounded-2xl border border-[#EDEDF2]/60">Bathroom </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant={"outline"} ><Monitor /></Badge>
                                            <p className=" rounded-2xl border border-[#EDEDF2]/60">TV </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant={"outline"} ><Wifi /></Badge>
                                            <p className=" rounded-2xl border border-[#EDEDF2]/60">WIFI </p>
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className='  p-3 border-r-2 border-prime-background'>
                                <div className='flex gap-2'>
                                    <p><UserRound /></p>
                                    <p><UserRound /></p>
                                </div>
                            </TableCell>
                            <TableCell className=' p-3 border-r-2 border-prime-background'><p className='font-bold text-lg'>${room.price}</p></TableCell>
                            <TableCell className=" p-3 text-right border-r-2 border-prime-background">$250.00</TableCell>
                            <TableCell className=" p-3 text-right border-r-2 border-prime-background">
                                <div className=''>
                                    <p>{room.features}</p>
                                    <p className='text-red-500'>{room.availability}</p>
                                </div>
                            </TableCell>
                            <TableCell className=" p-3 text-right border-r-2 border-prime-background">
                                <div className="flex justify-end items-center gap-2">
                                    <Select>
                                        <SelectTrigger className="w-16 h-8 text-sm">
                                            <SelectValue placeholder="0" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1</SelectItem>
                                            <SelectItem value="2">2</SelectItem>
                                            <SelectItem value="3">3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button className="w-fit mt-2 rounded-full bg-[#007DD0]">Reserve</Button>
                                </div>
                            </TableCell>
                        </TableRow>)
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default AvaibilityTable
