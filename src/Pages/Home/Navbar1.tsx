"use client"
import { Book, ChevronDown, Globe, Menu, MessageCircle, Sunset, Trees, UserRound, Zap } from "lucide-react";

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

interface Navbar1Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
 
}

const Navbar1 = ({
    
    menu = [
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
    ],
  
}: Navbar1Props) => {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    return (
        <section className="py-6 bg-prime-background">
            <div className="max-w-[87%] mx-auto">
                {/* Desktop Menu */}
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                         <div className="flex items-center ">
          <img
            src="https://placehold.co/100x40/add8e6/000000?text=DAYF+BOOKING"
            alt="DAYF Booking Logo"
            className="h-10 mr-4 rounded"
          />
        </div>
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {menu.map((item) => renderMenuItem(item))}
                                </NavigationMenuList>
                            </NavigationMenu>
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
                                            className="flex items-center space-x-2 rounded-full border border-gray-300 p-2"
                                        >
                                            <Globe />
                                            <span>EN</span>
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
                            <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-50 transition-colors flex items-center space-x-2">
                                <span>List your property</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-up-right h-4 w-4"
                                >
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                </svg>
                            </button>

                            {/* Refresh icon */}
                            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                <MessageCircle />
                            </button>
                        </div>
                        {/* <Button asChild variant="outline" size="sm">
                            <a href={auth.login.url}>{auth.login.title}</a>
                        </Button>
                        <Button asChild size="sm">
                            <a href={auth.signup.url}>{auth.signup.title}</a>
                        </Button> */}
                        <div className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-inner">
                            <UserRound />
                            <span className="text-gray-700">Sunan</span>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                       <div className="flex items-center ">
          <img
            src="https://placehold.co/100x40/add8e6/000000?text=DAYF+BOOKING"
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
            src="https://placehold.co/100x40/add8e6/000000?text=DAYF+BOOKING"
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
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>

                                    {/* <div className="flex flex-col gap-3">
                                        <Button asChild variant="outline">
                                            <a href={auth.login.url}>{auth.login.title}</a>
                                        </Button>
                                        <Button asChild>
                                            <a href={auth.signup.url}>{auth.signup.title}</a>
                                        </Button>
                                    </div> */}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover text-popover-foreground">

                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
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
                    <div className="md:flex items-center space-x-4  hidden  ">
                            {/* Language Selector */}
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            onClick={toggleLanguageMenu}
                                            className="flex items-center space-x-2 rounded-full border border-gray-300 p-2"
                                        >
                                            <Globe />
                                            <span>EN</span>
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
                            <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-50 transition-colors flex items-center space-x-2">
                                <span>List your property</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-up-right h-4 w-4"
                                >
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                </svg>
                            </button>

                            {/* Refresh icon */}
                            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                <MessageCircle />
                            </button>
                        </div>
                </AccordionTrigger>
                {/* <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent> */}
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
