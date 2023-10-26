import { useEffect } from 'react'
import { useGlobalState } from './store'
import { isWallectConnected, loadNfts } from './MovieHolic'

import Header from './components/Header'
import Hero from './components/Hero'
import Artworks from './components/Artworks'
import Footer from './components/Footer'
import Alert from './components/Alert'
import Loading from './components/Loading'

const App = () => {

  const [nfts] = useGlobalState('nfts')

  useEffect(async () => {
    await isWallectConnected().then(() => console.log('Blockchain Loaded'))
    await loadNfts()
  }, [])
 
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header/>
        <Hero/>
      </div>
      <Artworks artworks={nfts} />
      <Footer />
      <Alert/>
      <Loading/>

    </div>
  )
}

export default App
