import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className='bg-background/75 fixed inset-x-0 top-0 z-50 px-12 py-6 backdrop-blur-sm'>
      <nav className='container mx-auto flex w-full items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            <h1 className='text-blue-900'>
              Code<span className={'text-yellow-400'}>Buzzeer</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className='text-muted-foreground hidden text-sm font-bold md:flex md:items-center md:gap-6'>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/services'>Services</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='outline' size='icon'>
                <Menu className='h-4 w-4' />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='flex w-[400px] items-center justify-center p-10'
            >
              <nav className='mt-6 flex flex-col gap-4'>
                <SheetClose asChild>
                  <Link
                    href='/'
                    className='text-muted-foreground hover:text-foreground w-full text-lg font-bold transition-colors'
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href='/posts'
                    className='text-muted-foreground hover:text-foreground text-lg font-bold transition-colors'
                  >
                    Posts
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href='/services'
                    className='text-muted-foreground hover:text-foreground text-lg font-bold transition-colors'
                  >
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href='/projects'
                    className='text-muted-foreground hover:text-foreground text-lg font-bold transition-colors'
                  >
                    Projects
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href='/contact'
                    className='text-muted-foreground hover:text-foreground text-lg font-bold transition-colors'
                  >
                    Contact
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
