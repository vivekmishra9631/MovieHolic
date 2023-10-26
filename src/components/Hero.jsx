import avatar from '../assets/owner.png'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.jpeg'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../MovieHolic'

const Hero = () => {
 const [nfts] = useGlobalState('nfts')

 const onMintNFT = async () => {
   setGlobalState('loading', {
     show: true,
     msg: 'Minting new NFT to your account',
   })

   await payToMint()
     .then(() => setAlert('Minting Successful...', 'green'))
     .catch(() => setGlobalState('loading', { show: false, msg: '' }))
 }
    return (
        <div
    className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')] bg-no-repeat bg-cover">
          <div 
            className="flex flex-col justify-center items-center mx-auto
            py-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-5xl font-bold text-center">
                A.I Arts <br />
                <span className="text-gradient">NFTs</span> Collection
              </h1>
    
              <p className="text-white font-semibold text-sm mt-3">
                Mint and collect the hottest NFTs around.
              </p>
    
              <button
                className="shadow-xl shadow-black text-white
                bg-[#e32970] hover:bg-[#bd255f] p-2
                rounded-full cursor-pointer my-4"
                onClick={onMintNFT}
              >
                Mint Now
              </button>
    
              <a
                href="https://dev.to/daltonic/how-to-build-a-classic-web3-nft-minting-dapp-with-react-and-solidity-part-2-59la"
                className="flex flex-row justify-center space-x-2 items-center
                bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
              >
                <img
                  className="w-11 h-11 object-contain rounded-full"
                  src={avatar}
                  alt="MovieHolic"
                />
                <div className="flex flex-col font-semibold">
                  <span className="text-white text-sm">0xf55...146a</span>
                  <span className="text-[#e32970] text-xs">MintNFT Tutorial</span>
                </div>
              </a>
    
              <p className="text-white text-sm font-medium text-center">
                Heyy, welcome to MovieHolic. This is Vivek Mishra  <br />
                I am creating a MintNFT project using React, Tailwind, FakerJs, Sharp and Solidity.<br />Read the article above to create one on your own.
          </p>

          <ul 
            className="flex flex-row justify-center space-x-2 
            items-center my-4">
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
              href="https://github.com/vivekmishra9631"
            >
              <img className="w-7 h-7" src={github} alt="Github" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
             href="https://www.linkedin.com/in/vivek-mishra-27622a1b7/"
            >
              <img className="w-7 h-7" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
              href="https://www.instagram.com/vivekmishra1099/"
            >
              <img className="w-7 h-7" src={facebook} alt="facebook" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
              href="https://twitter.com/VivekMi77834875"
            >
              <img className="w-7 h-7" src={twitter} alt="twitter" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all 
              duration-75 delay-75 rounded-full mx-2"
              href="https://medium.com/alchemy-api/how-to-mint-an-nft-8cd51e8eb634"
            >
              <img className="w-7 h-7" src={medium} alt="medium" /> 
              </a>
          </ul>

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
            bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}/3000</span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

    