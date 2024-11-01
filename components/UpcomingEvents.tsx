import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, MapPin } from 'lucide-react';

const upcomingEvents = [
  { id: 1, title: 'Aria Luna Live', date: '2023-08-15', venue: 'Starlight Arena', location: 'New York, NY' },
  { id: 2, title: 'Neon Pulse Festival', date: '2023-09-01', venue: 'Electric Fields', location: 'Los Angeles, CA' },
  { id: 3, title: 'Midnight Riders Tour', date: '2023-09-10', venue: 'Rock Haven', location: 'Chicago, IL' },
];

export default function UpcomingEvents() {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <span>{event.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-sm mb-2">{event.venue}</p>
                <p className="text-sm flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}