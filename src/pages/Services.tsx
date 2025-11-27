import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Brain, Baby, Stethoscope, Microscope, Bone } from 'lucide-react';

const services = [
  {
    name: 'Cardiology',
    description: 'Comprehensive heart care, from preventative screenings to advanced surgical procedures. We use state-of-the-art technology to diagnose and treat all cardiovascular conditions.',
    icon: Heart,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/service-cardiology-49fb2ay-1764253171549.webp',
  },
  {
    name: 'Neurology',
    description: 'Expert diagnosis and treatment for disorders of the nervous system, including the brain, spinal cord, and nerves. Our team is experienced in managing conditions like stroke, epilepsy, and multiple sclerosis.',
    icon: Brain,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/service-neurology-oao4afq-1764253176784.webp',
  },
  {
    name: 'Pediatrics',
    description: 'Compassionate and comprehensive medical care for infants, children, and adolescents. We focus on creating a comfortable and friendly environment for our youngest patients.',
    icon: Baby,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/service-pediatrics-55aelzn-1764253183272.webp',
  },
  {
    name: 'General Checkups',
    description: 'Routine health examinations and preventative screenings to help you maintain optimal health. Our general practitioners are here to address your primary care needs.',
    icon: Stethoscope,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/hero-banner-9wp6h18-1764253118696.webp',
  },
  {
    name: 'Diagnostics & Lab',
    description: 'Our in-house laboratory is equipped with advanced diagnostic equipment to provide accurate and timely results for a wide range of tests.',
    icon: Microscope,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-research-0jtez9n-1764253165821.webp',
  },
  {
    name: 'Orthopedics',
    description: 'Specialized treatment for injuries and diseases of the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.',
    icon: Bone,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-wellness-7zssxjv-1764253157973.webp',
  },
];

export default function Services() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="container py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Our Medical Services</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive care for every stage of life.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="flex flex-col">
                <CardHeader className="flex-row gap-6 items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <img src={service.image} alt={service.name} className='h-10 w-10 object-contain' />
                    </div>
                    <div>
                        <CardTitle>{service.name}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}