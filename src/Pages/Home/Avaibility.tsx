import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Calendar, Home, Search, User, Users } from 'lucide-react'
import React from 'react'

const Avaibility = () => {
    return (
       
            <div className="space-y- p-4 md:p-10 border-4 rounded-3xl  border-prime-background w-fit">

                {/* Header Filters */} 
                <div className="flex lg:flex-row flex-col gap-4 lg:items-end">
                    <div className='space-y-2'>
                        <Label className='text-second-text'>Check-In</Label>
                        <Badge variant="secondary" className="w-full justify-start p-3 rounded-full">
                            <p className=' rounded-full p-1 bg-prime-blue mr-2'><Calendar className="  text-white " /></p>
                            Tue, 23 June 2024
                        </Badge>
                    </div>
                    <div className='space-y-2'>
                        <Label className='text-second-text'>Check-Out</Label>
                        <Badge variant="secondary" className="w-full justify-start p-3 rounded-full">
                            <p className=' rounded-full p-1 bg-prime-blue mr-2'><Calendar className="  text-white" /></p>
                            Sat, 29 June 2024
                        </Badge>
                    </div>

                    <div className="col-span-2 space-y-2">
                        <Label className='text-second-text'>Room & Guest</Label>
                        <Badge variant="secondary" className="w-full justify-start p-3 rounded-full">
                            <p className=' rounded-full p-1 bg-prime-blue mr-2'><Home className="  text-white" /></p>
                            2 Adults - 0 Children - 1 Room
                        </Badge>
                    </div>
                    <div>
                        <Button className="w-full py-5 px-10 bg-[#007DD0] rounded-full">

                            Search
                        </Button>
                    </div>
                </div>
            </div>
   

    )
}

export default Avaibility
