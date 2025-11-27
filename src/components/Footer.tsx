import { Stethoscope, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/blog', label: 'Health Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/patient-resources', label: 'Patient Resources' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook' }, // Replace with actual icons
    { name: 'Twitter', icon: 'twitter' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'LinkedIn', icon: 'linkedin' },
  ];

  return (
    <footer className='bg-gray-100 dark:bg-gray-900 border-t'>
      <div className='container py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* About Section */}
          <div className='space-y-4'>
            <Link to='/' className='flex items-center gap-2'>
              <Stethoscope className='h-8 w-8 text-primary' />
              <span className='text-xl font-bold'>Afya Zuri</span>
            </Link>
            <p className='text-muted-foreground'>
              Providing compassionate and quality healthcare for a healthier community.
            </p>
            <div className='flex space-x-4'>
              {/* Add social icons here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className='text-muted-foreground hover:text-primary'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-3 text-muted-foreground'>
              <li className='flex items-start gap-3'>
                <MapPin className='h-5 w-5 mt-1 text-primary' />
                <span>123 Afya Avenue, Nairobi, Kenya</span>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='h-5 w-5 text-primary' />
                <a href='mailto:info@afyazuri.com' className='hover:text-primary'>
                  info@afyazuri.com
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='h-5 w-5 text-primary' />
                <a href='tel:+254700123456' className='hover:text-primary'>
                  +254 700 123 456
                </a>
              </li>
            </ul>
          </div>
          
          {/* Emergency Contact */}
          <div className='bg-red-100 dark:bg-red-900/20 p-4 rounded-lg'>
            <h3 className='text-lg font-semibold mb-2 text-red-800 dark:text-red-300'>Emergency Contact</h3>
            <p className='text-red-700 dark:text-red-300/80'>For immediate assistance, please call:</p>
            <a href='tel:999' className='text-2xl font-bold text-red-800 dark:text-red-200 hover:underline'>
              999
            </a>
            <p className='text-xs text-red-600 dark:text-red-400/80 mt-2'>Available 24/7</p>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t text-center text-sm text-muted-foreground'>
          <p>&copy; {new Date().getFullYear()} Afya Zuri. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}