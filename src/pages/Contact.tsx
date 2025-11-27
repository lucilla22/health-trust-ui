import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50/90 dark:bg-gray-900/90">
        <div className="container py-12 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    We're here to help. Reach out to us with any questions or to schedule an appointment.
                </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-16">
                {/* Contact Form */}
                <Card>
                    <CardContent className="p-8">
                        <form className="space-y-6">
                            <h2 className="text-2xl font-bold">Send us a Message</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <Input placeholder="Your Name" />
                                <Input placeholder="Your Email" type="email" />
                            </div>
                            <Input placeholder="Subject" />
                            <Textarea placeholder="Your Message" rows={6} />
                            <Button type="submit" size="lg">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                            {/* Replace with an actual map embed */}
                            <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                                <p className="text-muted-foreground">Map Placeholder</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Afya Zuri Medical Center</h3>
                        <div className="space-y-4 text-lg">
                            <p className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-primary" />
                                <span>123 Afya Avenue, Nairobi, Kenya</span>
                            </p>
                            <p className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary" />
                                <a href="mailto:info@afyazuri.com" className="hover:underline">info@afyazuri.com</a>
                            </p>
                            <p className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary" />
                                <a href="tel:+254700123456" className="hover:underline">+254 700 123 456</a>
                            </p>
                        </div>
                    </div>
                    <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-900/30">
                        <h3 className='text-xl font-semibold mb-2 text-red-800 dark:text-red-300'>Emergency Services</h3>
                        <p className='text-red-700 dark:text-red-300/80'>For immediate medical assistance, please call our emergency line:</p>
                        <a href='tel:999' className='text-3xl font-bold text-red-800 dark:text-red-200 hover:underline mt-2 inline-block'>
                            999
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}