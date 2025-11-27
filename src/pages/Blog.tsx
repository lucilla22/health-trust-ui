import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'The Importance of a Balanced Diet',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-nutrition-h5xtc8z-1764253148768.webp',
    description: 'Learn how a balanced diet can improve your overall health and well-being. This article covers the essential nutrients your body needs and offers practical tips for meal planning.',
    author: 'Dr. Amina Yusuf',
    date: 'Nov 15, 2025',
  },
  {
    title: 'Managing Stress for a Healthier Mind',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-wellness-7zssxjv-1764253157973.webp',
    description: 'Discover effective techniques for managing stress, from mindfulness and meditation to physical activity and hobbies. Improve your mental resilience and find more joy in daily life.',
    author: 'Dr. Kwame Mensah',
    date: 'Nov 10, 2025',
  },
  {
    title: 'The Future of Medical Research',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/a162730d-1604-4b91-aeba-164fbbb90e05/blog-research-0jtez9n-1764253165821.webp',
    description: 'An insight into the latest advancements in medical research, including personalized medicine, AI in diagnostics, and groundbreaking new treatments on the horizon.',
    author: 'Dr. Fatima Diallo',
    date: 'Nov 05, 2025',
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className="bg-gray-50/90 dark:bg-gray-900/90">
      <div className="container py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Health & Wellness Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Expert insights and practical advice to help you live a healthier life.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden flex flex-col">
              <img src={post.image} alt={post.title} className='w-full h-64 object-cover' />
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="mb-3 text-xl">{post.title}</CardTitle>
                <div className="text-sm text-muted-foreground mb-4">
                  <span>By {post.author}</span> &bull; <span>{post.date}</span>
                </div>
                <p className="text-muted-foreground flex-grow">{post.description}</p>
                <Button variant="link" className="p-0 h-auto mt-6 self-start" asChild>
                  <Link to="#">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}