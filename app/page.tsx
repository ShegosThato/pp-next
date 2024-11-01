import FeaturedArtists from '@/components/FeaturedArtists'
import LatestReleases from '@/components/LatestReleases'
import UpcomingEvents from '@/components/UpcomingEvents'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedArtists />
      <LatestReleases />
      <UpcomingEvents />
    </div>
  )
}