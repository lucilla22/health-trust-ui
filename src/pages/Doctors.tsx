import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Adebayo Adekunle',
    specialty: 'Cardiologist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-male-mfjc85m-1764253126166.webp',
    bio: 'Dr. Adekunle is a leading cardiologist in Nigeria with over 15 years of experience in treating complex heart conditions. He is known for his patient-centric approach and dedication to cardiovascular research.',
  },
  {
    name: 'Dr. Wanjiku Mwangi',
    specialty: 'Neurologist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-female-kenyan-hg6nf06-1764253133760.webp',
    bio: 'Dr. Mwangi is a respected neurologist based in Kenya, specializing in stroke and epilepsy. She is passionate about advancing neurological care in East Africa and is an advocate for mental health awareness.',
  },
  {
    name: 'Dr. Selam Abebe',
    specialty: 'Pediatrician',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-female-ethiopian-wrsgmk2-1764253140757.webp',
    bio: 'Dr. Abebe is a beloved pediatrician in Ethiopia, known for her gentle and compassionate care for children. She has over 20 years of experience and is an expert in child development and nutrition.',
  },
  // Add more doctors as needed
];

export default function Doctors() {
  return (
    <div className="bg-gray-50/90 dark:bg-gray-900/90">
      <div className="container py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Our Medical Team</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Find a healthcare professional that is right for you.
            </p>
        </div>

        {/* Search and Filter */}
        <div className="my-12 p-6 bg-card border rounded-lg shadow-sm">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative sm:col-span-2 lg:col-span-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search by name..." className="pl-10" />
                </div>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Filter by specialty" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    </SelectContent>
                </Select>
                <Button size="lg">Search</Button>
            </div>
        </div>

        {/* Doctor Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {doctors.map((doctor) => (
            <Card key={doctor.name} className="overflow-hidden md:flex md:flex-row hover:shadow-xl transition-shadow duration-300">
              <img src={doctor.image} alt={doctor.name} className='md:w-1/3 h-auto object-cover' />
              <div className="p-6 flex flex-col justify-between md:w-2/3">
                  <div>
                    <h2 className="text-2xl font-bold">{doctor.name}</h2>
                    <p className="text-lg text-primary font-semibold mt-1">{doctor.specialty}</p>
                    <p className="text-muted-foreground mt-4">{doctor.bio}</p>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button>Book Appointment</Button>
                      <Button variant="outline">View Full Profile</Button>
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}