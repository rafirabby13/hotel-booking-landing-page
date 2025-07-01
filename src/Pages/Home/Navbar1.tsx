"use client"
import { Book, ChevronDown, Euro, Globe, Menu, MessageCircle, MoveUpRight, Sunset, Trees, UserRound, Zap } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}



const Navbar1 = () => {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };
const  menu = [
        { title: "Home", url: "#" },
        {
            title: "Hotels",
            url: "#",

        },
        {
            title: "House",
            url: "#",

        },
        {
            title: "About Us",
            url: "#",
        },
        {
            title: "Contact Us",
            url: "#",
        },
    ]

    return (
        <section className="py-6 bg-prime-background">
            <div className="max-w-[87%] mx-auto">
                {/* Desktop Menu */}
                <nav className="hidden justify-between xl:flex">
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <div className="flex items-center ">
                            <img
                                src="/logo.png"
                                alt="DAYF Booking Logo"
                                className="h-10 mr-4 rounded"
                            />
                        </div>
                        <div className="flex items-center gap-4 text-second-text">
                           
                            {
                            menu.map((item,i) => <p className={`flex text-lg ${i==0? "text-prime-blue font-bold": "text-second-tex"}`}>{item.title}</p>)
                            
                            }
                        
                        
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="md:flex items-center space-x-4  hidden  ">
                            {/* Language Selector */}
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            onClick={toggleLanguageMenu}
                                            className="flex items-center space-x-2 rounded-full border border-prime-blue p-2 bg-prime-background "
                                        >
                                            {/* <Globe /> */}
                                            <Euro />
                                            {/* <ChevronDown /> */}
                                        </NavigationMenuTrigger>
                                        {isLanguageMenuOpen && (
                                            <NavigationMenuContent>
                                                <NavigationMenuLink href="#">English</NavigationMenuLink>
                                                <NavigationMenuLink href="#">Español</NavigationMenuLink>
                                                <NavigationMenuLink href="#">Français</NavigationMenuLink>
                                            </NavigationMenuContent>
                                        )}
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                            {/* Flag Selector (simplified for this example) */}
                            <div className="flex items-center space-x-2 rounded-full border border-gray-300 p-2">
                                <img
                                    src="https://placehold.co/24x24/FFD700/000000?text=ES" // Placeholder for Spanish flag
                                    alt="Spanish Flag"
                                    className="h-6 w-6 rounded-full"
                                />
                                <ChevronDown />
                            </div>

                            {/* List your property button */}
                            <button className="bg-white text-prime-blue border border-prime-blue px-4 py-2 rounded-full shadow hover:bg-blue-50 transition-colors flex items-center space-x-2">
                                <span className="text-xs xl:text-lg">List your property</span>
                                <MoveUpRight />

                            </button>

                            {/* Refresh icon */}
                            <button className="p-2 rounded-full bg-white border border-prime-background hover:bg-gray-100 transition-colors">
                                <MessageCircle className="text-prime-blue" />
                            </button>
                        </div>

                        <div className="flex items-center space-x-2 bg-white rounded-full p-3 shadow-inner border border-prime-blue">
                            <UserRound />
                            <span className="text-gray-700">Sunan</span>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block xl:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center ">
                            <img
                                src="/logo.png"
                                alt="DAYF Booking Logo"
                                className="h-10 mr-4 rounded"
                            />
                        </div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <div className="flex items-center ">
                                            <img
                                                src="/logo.png"
                                                alt="DAYF Booking Logo"
                                                className="h-10 mr-4 rounded"
                                            />
                                        </div>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                            <MessageCircle />
                                        </button>
                                    </Accordion>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex items-center space-x-2 rounded-full border border-gray-300 p-2 w-fit"
                                    >
                                        <Globe />
                                        <span>EN</span>
                                        <ChevronDown />
                                    </Accordion>

                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex items-center space-x-2 rounded-full border border-gray-300 p-2 w-fit"
                                    >
                                        <img
                                            src="https://placehold.co/24x24/FFD700/000000?text=ES" // Placeholder for Spanish flag
                                            alt="Spanish Flag"
                                            className="h-6 w-6 rounded-full"
                                        />

                                        <ChevronDown />
                                    </Accordion>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex items-center space-x-2 rounded-full border  w-fit"
                                    >
                                        <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-50 transition-colors flex items-center space-x-2">
                                            <span>List your property</span>
                                            <MoveUpRight />
                                        </button>
                                    </Accordion>

                                </div>

                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};



const renderMobileMenuItem = (item: MenuItem) => {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">

                </AccordionTrigger>

            </AccordionItem>
        );
    }

    return (
        <a key={item.title} href={item.url} className="text-md font-semibold">
            {item.title}
        </a>
    );
};



export { Navbar1 };
