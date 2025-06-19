import BuyCards from "../components/Buying Cards/BuyCards";

function HowToBuy() {
  return (
    <section className="bg-exgray relative h-full w-full pb-474 sm:pb-498 md:pb-320 lg:pb-320 xl:pb-460 2xl:pb-620">
      <div className="absolute top-130 left-6 flex w-full flex-col sm:top-120 md:top-150 lg:top-140 xl:top-190 2xl:top-270">
        <div className="font-snow mb-10 flex h-fit justify-center text-4xl uppercase sm:mr-10 md:top-150 md:text-5xl lg:mr-30 lg:justify-end lg:text-[48px] xl:mb-16 xl:text-[64px] 2xl:text-[96px]">
          How to buy
        </div>
        <div className="grid w-94 grid-rows-3 gap-10 sm:ml-10 sm:w-130 md:ml-3 md:w-175 md:grid-cols-3 md:gap-6 lg:ml-6 lg:w-230 lg:gap-8 xl:ml-8 xl:w-330 xl:gap-10 2xl:ml-20 2xl:w-428 2xl:gap-12">
          <div>
            <BuyCards
              text1="Set Up a Wallet"
              text2="Download a compatible crypto wallet, such as MetaMask or Trust Wallet, available on mobile or as a browser extension. Follow the setup instructions, ensuring your wallet is backed up securely. Fund your wallet with the cryptocurrency needed to purchase Binky (such as Ethereum for Uniswap or Binance Coin for PancakeSwap)."
            />
          </div>
          <div>
            <BuyCards
              text1="Connect to a Decentralized Exchange"
              text2={`Open a trusted DEX, like Uniswap (for Ethereum-based purchases) or PancakeSwap (for Binance-based purchases), and connect your wallet by selecting "Connect Wallet." Search for the Binky token using its official contract address to avoid any imposters. Double-check that the details match the official Binky token information.`}
            />
          </div>
          <div>
            <BuyCards
              text1="Connect to a Decentralized Exchange"
              text2={`Open a trusted DEX, like Uniswap (for Ethereum-based purchases) or PancakeSwap (for Binance-based purchases), and connect your wallet by selecting "Connect Wallet." Search for the Binky token using its official contract address to avoid any imposters. Double-check that the details match the official Binky token information.`}
            />
          </div>
        </div>
      </div>
      {/*image as a divider*/}
      <div className="absolute bottom-[-142px] -left-12 z-10 overflow-hidden sm:-bottom-40 sm:-left-8 md:-bottom-44 md:-left-10 lg:-bottom-46 lg:-left-16 xl:-bottom-58 xl:-left-32 2xl:-bottom-110">
        <img
          src="/divider03.webp"
          alt="Divider Image 03"
          className="pointer-events-none h-44 w-auto max-w-none sm:h-50 md:h-60 lg:h-60 lg:w-300 xl:h-80 xl:w-400 2xl:h-140 2xl:w-520"
        />
      </div>
    </section>
  );
}

export default HowToBuy;
