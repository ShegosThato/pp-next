import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';

const latestReleases = [
  { id: 1, title: 'Neon Dreams', artist: 'Aria Luna', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
  { id: 2, title: 'Electric Horizon', artist: 'Neon Pulse', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
  { id: 3, title: 'Midnight Ride', artist: 'Midnight Riders', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
];

export default function LatestReleases() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Releases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestReleases.map((release) => (
          <Link href={`/releases/${release.id}`} key={release.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="p-0">
                <div className="w-full h-64 relative">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="text-white w-16 h-16" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center p-4">
                <CardTitle className="mb-2">{release.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{release.artist}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}