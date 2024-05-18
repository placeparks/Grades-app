import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../../../utils/contracts";
import { client } from "../client";
import { prepareContractCall } from "thirdweb";
import { getNFT } from "thirdweb/extensions/erc721";

type StakedNFTCardProps = {
    tokenId: bigint;
    refetchStakedInfo: () => void;
    refetchOwnedNFTs: () => void;
};

export const StakedNFTCard: React.FC<StakedNFTCardProps> = ({ tokenId, refetchStakedInfo, refetchOwnedNFTs }) => {
    const { data: nft } = useReadContract(
        getNFT,
        {
            contract: NFT_CONTRACT,
            tokenId: tokenId,
        }
    );
    
    return (
        <div className="w-full h-auto md:h-[469px] bg-[#5591DA] p-5 border border-2 border-black rounded-[35px] shadow dark:bg-gray-800" style={{ margin: "10px" }}>
            <a href="#">
                <MediaRenderer
                    client={client}
                    src={nft?.metadata.image}
                    style={{
                        borderRadius: "10px",
                        marginBottom: "10px",
                        height: "60%",
                        width: '100%'
                    }}
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl md:text-2xl poppins-semibold text-black dark:text-white">
                        {nft?.metadata.name}
                    </h5>
                    <h2 className="mb-2 text-lg md:text-1xl poppins-semibold text-black dark:text-white">
                        {nft?.metadata.description}
                    </h2>
                </a>
                <TransactionButton
                    transaction={() => (
                        prepareContractCall({
                            contract: STAKING_CONTRACT,
                            method: "withdraw",
                            params: [[tokenId]]
                        })
                    )}
                    onTransactionConfirmed={() => {
                        refetchOwnedNFTs();
                        refetchStakedInfo();
                        alert("Withdrawn!");
                    }}
                    className="tracking-wide md:tracking-wider relative inline-block px-4 md:px-0 md:leading-4 h-10 w-full md:h-[53px] md:w-[159px] transition-all duration-300 rounded-2xl overflow-hidden z-10 montserrat-bold text-sm md:text-[20px] bg-[#e63b51] border-4 border-black custom-button-withdraw"
                >
                    Withdraw
                </TransactionButton>
            </div>
        </div>
    )
};
