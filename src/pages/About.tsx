import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award, Users, HeartHandshake } from 'lucide-react';

const team = [
  {
    name: 'Dr. Adebayo Adekunle',
    specialty: 'Founder & Chief Cardiologist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-male-mfjc85m-1764253126166.webp',
  },
  {
    name: 'Dr. Wanjiku Mwangi',
    specialty: 'Head of Neurology',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-female-kenyan-hg6nf06-1764253133760.webp',
  },
  {
    name: 'Dr. Selam Abebe',
    specialty: 'Lead Pediatrician',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-female-ethiopian-wrsgmk2-1764253140757.webp',
  },
];

const values = [
    { name: 'Compassion', icon: HeartHandshake, description: 'We treat every patient with empathy, respect, and kindness.' },
    { name: 'Excellence', icon: Award, description: 'We are committed to the highest standards of medical care and continuous improvement.'},
    { name: 'Collaboration', icon: Users, description: 'We work together as a team to provide integrated and holistic care.'},
    { name: 'Integrity', icon: CheckCircle, description: 'We adhere to the highest ethical principles and transparency.'},
];

export default function About() {
  return (
    <div>
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white" 
                 style={{ backgroundImage: `url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/hero-banner-9wp6h18-1764253118696.webp)`}}>
            <div className="absolute inset-0 bg-primary/80" />
            <div className="container relative text-center">
                <h1 className="text-4xl md:text-6xl font-bold">About Afya Zuri</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Your Partners in Health and Wellness Since 2015</p>
            </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div className='pr-8'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
                    <p className="text-muted-foreground text-lg mb-4">
                        Our mission is to provide accessible, high-quality, and patient-centered healthcare to communities across Africa. We envision a future where everyone has the opportunity to live a healthy and fulfilling life.
                    </p>
                    <p className="text-muted-foreground text-lg">
                        At Afya Zuri, we combine cutting-edge technology with a human touch, ensuring that you and your loved ones receive the best possible care in a supportive and welcoming environment.
                    </p>
                </div>
                <div>
                    <img src='https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-wellness-7zssxjv-1764253157973.webp' alt="Happy patient" className="rounded-lg shadow-xl"/>
                </div>
            </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        The principles that guide every decision we make.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map(value => (
                        <Card key={value.name} className="text-center">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                    <value.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="mt-4">{value.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Meet the Leadership */}
        <section className='py-16 md:py-24'>
            <div className='container'>
                <div className='text-center max-w-3xl mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-bold'>Meet Our Leadership</h2>
                    <p className='mt-4 text-lg text-muted-foreground'>
                        The experienced team guiding our mission forward.
                    </p>
                </div>
                <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {team.map((doctor) => (
                    <Card key={doctor.name} className='overflow-hidden text-center'>
                        <img src={doctor.image} alt={doctor.name} className='w-full h-80 object-cover object-top'/>
                        <CardHeader>
                        <CardTitle>{doctor.name}</CardTitle>
                        <p className='text-primary font-medium'>{doctor.specialty}</p>
                        </CardHeader>
                    </Card>
                    ))}
                </div>
            </div>
        </section>

    </div>
  );
}