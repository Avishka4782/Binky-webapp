import BuyCards from "../components/Buying Cards/BuyCards";

function HowToBuy() {
  return (
    <section className="bg-exgray relative h-[350vh] w-full md:h-[206vh] lg:h-[234vh] xl:h-[250vh]">
      <div className="absolute top-[102vh] left-6 flex w-[100vw] flex-col sm:top-[90vh] lg:top-[110vh] xl:top-[100vh]">
        <div className="font-snow mb-10 flex h-fit w-[80vw] justify-end text-4xl uppercase sm:mr-10 md:text-[44px] lg:text-[52px] xl:mb-16 xl:text-[68px]">
          How to buy
        </div>
        <div className="grid w-[377px] grid-rows-3 gap-10 sm:ml-[6vw] sm:w-[80vw] md:ml-[2vw] md:w-[90vw] md:grid-cols-3 md:gap-6 lg:gap-8 xl:w-[90vw] xl:gap-10">
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
      <div className="absolute bottom-[-120px] -left-12 z-10 overflow-hidden sm:bottom-[-132px] sm:-left-8 md:bottom-[-32vh] md:-left-10 lg:bottom-[-39vh] lg:-left-16">
        <img
          src="/divider03.webp"
          alt="Divider Image 03"
          className="pointer-events-none h-[30vh] w-auto max-w-none sm:h-[34vh] md:h-[44vh] lg:h-[48vh] lg:w-[120vw]"
        />
      </div>
    </section>
  );
}

export default HowToBuy;
