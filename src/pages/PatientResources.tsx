import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Stethoscope, Video, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
    {
        title: 'New Patient Registration Form',
        description: 'Save time by filling out your registration form before your first appointment.',
        icon: FileText,
        actionText: 'Download PDF',
        href: '#',
    },
    {
        title: 'Insurance & Billing Information',
        description: 'View our accepted insurance plans and learn about our billing process.',
        icon: Shield,
        actionText: 'View Details',
        href: '#',
    },
    {
        title: 'Virtual Consultation Guide',
        description: 'Everything you need to know to prepare for your virtual visit with one of our doctors.',
        icon: Video,
        actionText: 'Learn More',
        href: '#',
    },
    {
        title: 'Find a Doctor',
        description: 'Browse our directory of expert physicians and specialists to find the right one for you.',
        icon: Stethoscope,
        actionText: 'Find a Doctor',
        isInternalLink: true,
        href: '/doctors',
    },
];

export default function PatientResources() {
  return (
    <div className="bg-gray-50/90 dark:bg-gray-900/90 min-h-screen">
        <div className="container py-12 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">Patient Resources</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Your hub for important forms, information, and tools to manage your healthcare journey.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {resources.map(resource => (
                    <Card key={resource.title}>
                        <CardHeader className="flex-row gap-6 items-center">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <resource.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle>{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6 min-h-[40px]">{resource.description}</p>
                            {resource.isInternalLink ? (
                                <Button asChild>
                                    <Link to={resource.href}>{resource.actionText}</Link>
                                </Button>
                            ) : (
                                <Button>
                                    {resource.actionText} <Download className='ml-2 h-4 w-4' />
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className='mt-20 text-center bg-card p-8 rounded-lg border'>
                <h2 className='text-2xl font-bold'>Have Questions?</h2>
                <p className='mt-2 text-muted-foreground'>If you can't find what you're looking for, please don't hesitate to contact us.</p>
                <Button className='mt-6' asChild>
                    <Link to='/contact'>Contact Our Team</Link>
                </Button>
            </div>
        </div>
    </div>
  );
}