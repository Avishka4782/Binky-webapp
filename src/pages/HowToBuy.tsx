import BuyCards from "../components/Buying Cards/BuyCards";

function HowToBuy() {
  return (
    <section className="bg-exgray relative h-[200vh] w-full">
      <div className="absolute top-84 left-20 flex w-320 flex-col">
        <div className="font-snow mb-15 ml-20 flex h-fit w-320 justify-end text-7xl uppercase">
          How to buy
        </div>
        <div className="grid w-[190vh] grid-cols-3 gap-12">
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
      <div className="absolute bottom-[-300px] -left-36 z-10 overflow-hidden">
        <img
          src="/divider03.webp"
          alt="Divider Image 03"
          className="pointer-events-none h-100 w-[110vw] max-w-none"
        />
      </div>
    </section>
  );
}

export default HowToBuy;
