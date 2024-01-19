import Image from 'next/image'
import Events from './components/events/Events'
import Hero from './components/Hero'
import Player from './components/Player'
import Albums from './components/albums/Albums'
import Blog from './components/blog/Blog'
import Newsletter from './components/Newsletter'


export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <Newsletter />
    </main>
  )
}
