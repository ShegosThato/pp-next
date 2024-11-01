import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const featuredArtists = [
  { id: 1, name: 'Aria Luna', genre: 'Pop', image: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
  { id: 2, name: 'Neon Pulse', genre: 'Electronic', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
  { id: 3, name: 'Midnight Riders', genre: 'Rock', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
];

export default function FeaturedArtists() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Artists</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredArtists.map((artist) => (
          <Link href={`/artists/${artist.id}`} key={artist.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="w-full h-64 relative">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="text-center p-4">
                <CardTitle className="mb-2">{artist.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{artist.genre}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}