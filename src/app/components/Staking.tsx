"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ConnectButton, darkTheme, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "../client";
import { NFT, defineChain } from "thirdweb";
import { NFTCard } from "./NFTCard"; // Adjust the import path as necessary
import { NFT_CONTRACT, STAKING_CONTRACT } from "../../../utils/contracts";
import { getNFTs, ownerOf, totalSupply } from "thirdweb/extensions/erc721";
import { StakedNFTCard } from "./StakedNFTCard";
import { StakeRewards } from "./StakeRewards";

interface NFTCard {
  image: string;
  name: string;
  price: string;
}



const Staking: React.FC = () => {

    const account = useActiveAccount();

    const [ownedNFTs, setOwnedNFTs] = useState<NFT[]>([]);
    
    const getOwnedNFTs = async () => {
        let ownedNFTs: NFT[] = [];

        const totalNFTSupply = await totalSupply({
            contract: NFT_CONTRACT,
        });
        const nfts = await getNFTs({
            contract: NFT_CONTRACT,
            start: 0,
            count: parseInt(totalNFTSupply.toString()),
        });
        
        for (let nft of nfts) {
            const owner = await ownerOf({
                contract: NFT_CONTRACT,
                tokenId: nft.id,
            });
            if (owner === account?.address) {
                ownedNFTs.push(nft);
            }
        }
        setOwnedNFTs(ownedNFTs);
    };
    
    useEffect(() => {
        if(account) {
            getOwnedNFTs();
        }
    }, [account]);

    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });
    
    

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Image
        src="/assets/staking.png"
        height={306}
        width={868}
        alt=""
        className="mb-4 w-5/6 h-full md:w-[868px] md:h-[306px]"
      />
      <div>
        <ConnectButton
          client={client}
          chain={defineChain(534351)}
          connectButton={{
            label: 'Login',
            className:'connectButtonWrapper'
          }}
        />
      </div>
      <div className="mb-12">
        <p className="poppins-medium text-[25px] md:text-[40px]">
          Staking NFT and Rewards
        </p>
      </div>

      {/*claimable rewards section */}
  <StakeRewards/>

      {/*NFTs section */}
      <div className="flex justify-center p-4">
        <div className="flex flex-col items-center p-4 md:p-10 gap-8 mb-8 bg-[#FAF0D5] h-auto w-full md:h-[674px] md:w-[1233px] border border-[3.5px] border-black rounded-[35px] md:mb-12 dark:bg-gray-800">
          <h1 className="text-2xl md:text-[40px] poppins-bold mb-4 md:mb-8">
            Your NFTs
          </h1>
          <div className="grid gap-8 md:gap-20 md:grid-cols-3">
          {ownedNFTs && ownedNFTs.length > 0 ? (
                            ownedNFTs.map((nft) => (
                                <NFTCard
                                    key={nft.id}
                                    nft={nft}
                                    refetch={getOwnedNFTs}
                                    refecthStakedInfo={refetchStakedInfo}
                                />
                            ))
                        ) : (
                            <p>You own 0 NFTs</p>
                        )}
          </div>
        </div>
      </div>

      {/*Staked NFTs section */}
      <div className="flex justify-center p-4">
        <div className="flex flex-col items-center p-4 md:p-10 gap-8 mb-8 bg-[#FAF0D5] h-auto w-full md:h-[674px] md:w-[1233px] border border-[3.5px] border-black rounded-[35px] md:mb-12 dark:bg-gray-800">
          <h1 className="text-2xl md:text-[40px] poppins-bold mb-4 md:mb-8">
            Your Staked NFTs
          </h1>
          <div className="grid gap-8 md:gap-20 md:grid-cols-3">
          {stakedInfo && stakedInfo[0].length > 0 ? (
                            stakedInfo[0].map((nft: any, index: number) => (
                                <StakedNFTCard
                                    key={index}
                                    tokenId={nft}
                                    refetchStakedInfo={refetchStakedInfo}
                                    refetchOwnedNFTs={getOwnedNFTs}
                                />
                            ))
                        ) : (
                            <p style={{ margin: "20px" }}>No NFTs staked</p>
                        )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Staking;
