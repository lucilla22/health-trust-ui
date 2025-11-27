import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Stethoscope } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/patient-resources', label: 'Patient Resources' },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <Link to='/' className='flex items-center gap-2'>
          <Stethoscope className='h-8 w-8 text-primary' />
          <span className='text-xl font-bold text-primary'>Afya Zuri</span>
        </Link>

        <nav className='hidden md:flex items-center gap-6 text-sm font-medium'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className='text-foreground/60 transition-colors hover:text-foreground/80'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='hidden md:flex items-center gap-4'>
          <Button variant='ghost'>Log In</Button>
          <Button>Book Appointment</Button>
        </div>

        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline' size='icon'>
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <div className='grid gap-6 p-6'>
                <Link to='/' className='flex items-center gap-2 mb-6'>
                  <Stethoscope className='h-8 w-8 text-primary' />
                  <span className='text-xl font-bold'>Afya Zuri</span>
                </Link>
                <nav className='grid gap-4'>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className='-m-3 p-3 flex items-center rounded-lg hover:bg-muted'
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className='mt-6 flex flex-col gap-4'>
                  <Button variant='ghost'>Log In</Button>
                  <Button>Book Appointment</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}