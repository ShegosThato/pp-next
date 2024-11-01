import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-xl">
      <h1 className="text-5xl font-bold mb-6">Welcome to PressPlay</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">Discover, stream, and connect with your favorite artists. Your journey into the world of music starts here.</p>
      <div className="space-x-4">
        <Button size="lg" variant="secondary">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </section>
  )
}