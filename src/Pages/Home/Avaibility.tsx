import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Calendar, Search, Users } from 'lucide-react'
import React from 'react'

const Avaibility = () => {
    return (
        <div>
            <div className="space-y-6 p-10 border rounded-lg shadow border-[#007DD0]/40 w-fit">

                {/* Header Filters */}
                <div className="flex md:flex-row flex-col gap-4 md:items-end">
                    <div className='space-y-2'>
                        <Label>Check-In</Label>
                        <Badge variant="secondary" className="w-full justify-start p-3 rounded-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Tue, 23 June 2024
                        </Badge>
                    </div>
                    <div>
                        <Label>Check-Out</Label>
                        <Badge variant="secondary" className="w-full justify-start p-3 rounded-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Sat, 29 June 2024
                        </Badge>
                    </div>
                    <div className="col-span-2">
                        <Label>Room & Guest</Label>
                        <Badge variant="secondary" className="w-full justify-start p-3 rounded-full">
                            <Users className="mr-2 h-4 w-4" />
                            2 Adults - 0 Children - 1 Room
                        </Badge>
                    </div>
                    <div>
                        <Button className="w-full bg-[#007DD0] rounded-full">
                          
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Avaibility
