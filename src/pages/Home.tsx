import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart, Brain, Baby, Stethoscope, Video, Shield, Apple, Dumbbell, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {

  const doctors = [
    {
      name: 'Dr. Adebayo Adekunle',
      specialty: 'Cardiologist',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-male-mfjc85m-1764253126166.webp',
    },
    {
      name: 'Dr. Wanjiku Mwangi',
      specialty: 'Neurologist',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-female-kenyan-hg6nf06-1764253133760.webp',
    },
    {
      name: 'Dr. Selam Abebe',
      specialty: 'Pediatrician',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/doctor-female-ethiopian-wrsgmk2-1764253140757.webp',
    },
  ];

  const services = [
      { name: 'Cardiology', icon: Heart, image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/service-cardiology-49fb2ay-1764253171549.webp' },
      { name: 'Neurology', icon: Brain, image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/service-neurology-oao4afq-1764253176784.webp' },
      { name: 'Pediatrics', icon: Baby, image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/service-pediatrics-55aelzn-1764253183272.webp' },
      { name: 'General Checkups', icon: Stethoscope, image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/hero-banner-9wp6h18-1764253118696.webp' }, 
  ];

  const blogPosts = [
    {
      title: 'The Importance of a Balanced Diet',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-nutrition-h5xtc8z-1764253148768.webp',
      description: 'Learn how a balanced diet can improve your overall health and well-being.',
    },
    {
      title: 'Managing Stress for a Healthier Mind',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-wellness-7zssxjv-1764253157973.webp',
      description: 'Discover effective techniques for managing stress and improving your mental health.',
    },
    {
      title: 'The Future of Medical Research',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-research-0jtez9n-1764253165821.webp',
      description: 'An insight into the latest advancements in medical research and technology.',
    },
  ];

  const testimonials = [
    {
      quote: 'The care I received at Afya Zuri was exceptional. The doctors were knowledgeable and compassionate, and the facilities were top-notch.',
      author: 'Amina Yusuf',
      location: 'Nairobi, Kenya',
    },
    {
      quote: 'Booking an appointment was seamless, and the virtual consultation was just as effective as an in-person visit. Highly recommended!',
      author: 'Kwame Mensah',
      location: 'Accra, Ghana',
    },
    {
      quote: 'A truly professional and caring team. They made me feel comfortable and well-cared for throughout my treatment.',
      author: 'Fatima Diallo',
      location: 'Dakar, Senegal',
    },
  ];

  const healthTips = [
    { title: 'Eat a rainbow of fruits and vegetables daily.', icon: Apple },
    { title: 'Aim for 30 minutes of moderate exercise most days.', icon: Dumbbell },
    { title: 'Read for 15 minutes a day to keep your mind sharp.', icon: BookOpen },
  ];

  const insurancePartners = [
    '/path/to/insurance-logo1.png',
    '/path/to/insurance-logo2.png',
    '/path/to/insurance-logo3.png',
    '/path/to/insurance-logo4.png',
    '/path/to/insurance-logo5.png',
    '/path/to/insurance-logo6.png',
  ];

  return (
    <div className='flex-grow'>
      {/* Hero Section */}
      <section className='relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center'
        style={{ backgroundImage: `url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/hero-banner-9wp6h18-1764253118696.webp)` }}>
        <div className='absolute inset-0 bg-black/50' />
        <div className='container relative text-white'>
          <h1 className='text-4xl md:text-6xl font-bold max-w-2xl'>
            Compassionate, Quality Healthcare You Can Trust
          </h1>
          <p className='mt-4 text-lg md:text-xl max-w-xl'>
            Your health is our priority. We provide world-class medical services with a touch of African hospitality.
          </p>
          <div className='mt-8 flex gap-4'>
            <Button size='lg' asChild>
              <Link to='/doctors'>Book an Appointment</Link>
            </Button>
            <Button size='lg' variant='secondary' asChild>
              <Link to='/services'>Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 md:py-24 bg-gray-50 dark:bg-gray-900'>
        <div className='container'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>Our Medical Services</h2>
            <p className='mt-4 text-lg text-muted-foreground'>
              We offer a wide range of specialized medical services to meet your family's health needs.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service) => (
              <Card key={service.name} className='text-center hover:shadow-lg transition-shadow'>
                <CardHeader>
                  <div className='mx-auto bg-primary/10 p-4 rounded-full'>
                    <img src={service.image} alt={service.name} className='h-12 w-12 object-contain' />
                  </div>
                  <CardTitle className='mt-4'>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant='link' asChild>
                    <Link to='/services'>Learn More <ArrowRight className='ml-2 h-4 w-4' /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className='py-16 md:py-24'>
        <div className='container'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>Meet Our Expert Doctors</h2>
            <p className='mt-4 text-lg text-muted-foreground'>
              Our team of highly qualified and experienced doctors are dedicated to your well-being.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {doctors.map((doctor) => (
              <Card key={doctor.name} className='overflow-hidden text-center'>
                <img src={doctor.image} alt={doctor.name} className='w-full h-80 object-cover object-top'/>
                <CardHeader>
                  <CardTitle>{doctor.name}</CardTitle>
                  <p className='text-primary font-medium'>{doctor.specialty}</p>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link to='/doctors'>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 md:py-24 bg-gray-50 dark:bg-gray-900'>
        <div className='container'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>What Our Patients Say</h2>
            <p className='mt-4 text-lg text-muted-foreground'>
              Real stories from our valued patients.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <p className='text-muted-foreground'>'{testimonial.quote}'</p>
                </CardHeader>
                <CardContent className='text-right'>
                  <p className='font-semibold'>{testimonial.author}</p>
                  <p className='text-sm text-muted-foreground'>{testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Health Blog Section */}
      <section className='py-16 md:py-24'>
        <div className='container'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold'>From Our Health Blog</h2>
            <p className='mt-4 text-lg text-muted-foreground'>
              Stay informed with the latest health news and tips from our experts.
            </p>
          </div>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {blogPosts.map((post) => (
              <Card key={post.title} className='overflow-hidden'>
                <img src={post.image} alt={post.title} className='w-full h-56 object-cover'/>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>{post.description}</p>
                  <Button variant='link' asChild>
                    <Link to='/blog'>Read More <ArrowRight className='ml-2 h-4 w-4' /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Consultation CTA */}
      <section className='bg-primary/90 text-primary-foreground'>
        <div className='container py-16 md:py-20'>
          <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
            <div className='max-w-2xl'>
              <h2 className='text-3xl font-bold'>Consult with a Doctor from Home</h2>
              <p className='mt-2 text-lg opacity-90'>
                Get professional medical advice without leaving your home. Book a virtual consultation today.
              </p>
            </div>
            <Button size='lg' variant='secondary' className='mt-6 md:mt-0 flex-shrink-0'>
              <Video className='mr-2 h-5 w-5' /> Book a Virtual Visit
            </Button>
          </div>
        </div>
      </section>
      
      {/* Insurance Partners Section */}
      <section className='py-16 md:py-24'>
        <div className='container'>
          <h2 className='text-center text-3xl font-bold mb-4'>Our Insurance Partners</h2>
          <p className='text-center text-muted-foreground text-lg mb-12'>We accept a wide range of insurance plans.</p>
          <div className='flex justify-center items-center gap-8 flex-wrap'>
            {insurancePartners.map((logo, index) => (
              <div key={index} className='grayscale hover:grayscale-0 transition-all'>
                <Shield size={48} className='text-gray-400' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className='py-16 md:py-24 bg-gray-50 dark:bg-gray-900'>
        <div className='container'>
            <div className='text-center max-w-3xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold'>Daily Health Tips</h2>
                <p className='mt-4 text-lg text-muted-foreground'>
                    Quick tips for a healthier lifestyle.
                </p>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
                {healthTips.map((tip, index) => (
                    <Card key={index}>
                        <CardHeader className='flex-row items-center gap-4'>
                            <div className='bg-primary/10 p-3 rounded-full'>
                                <tip.icon className='h-6 w-6 text-primary' />
                            </div>
                            <p className='font-semibold'>{tip.title}</p>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}