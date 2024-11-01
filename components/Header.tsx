"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Play, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Play className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-indigo-600">PressPlay</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/artists" className="text-foreground hover:text-primary transition-colors">Artists</Link>
            <Link href="/events" className="text-foreground hover:text-primary transition-colors">Events</Link>
            <Link href="/discover" className="text-foreground hover:text-primary transition-colors">Discover</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="hidden md:inline-flex">Sign In</Button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/artists" className="block py-2 text-sm hover:bg-accent rounded px-2 transition-colors">Artists</Link>
            <Link href="/events" className="block py-2 text-sm hover:bg-accent rounded px-2 transition-colors">Events</Link>
            <Link href="/discover" className="block py-2 text-sm hover:bg-accent rounded px-2 transition-colors">Discover</Link>
            <Link href="/signin" className="block py-2 text-sm hover:bg-accent rounded px-2 transition-colors">Sign In</Link>
          </div>
        )}
      </div>
    </header>
  )
}