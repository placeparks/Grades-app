import { client } from "@/app/client";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer, TransactionButton } from "thirdweb/react";
import { NFT_CONTRACT, STAKING_CONTRACT } from "../../../utils/contracts";
import { useState } from "react";
import { approve } from "thirdweb/extensions/erc721";

type OwnedNFTsProps = {
    nft: NFT;
    refetch: () => void;
    refecthStakedInfo: () => void;
};

export const NFTCard = ({ nft, refetch, refecthStakedInfo }: OwnedNFTsProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApproved, setIsApproved] = useState(false);

    return (
        <div className="w-full h-auto md:h-[469px] bg-[#5591DA] p-5 border border-2 border-black rounded-[35px] shadow dark:bg-gray-800" style={{ margin: "10px" }}>
            <a href="#">
                <MediaRenderer
                    client={client}
                    src={nft.metadata.image}
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
                        {nft.metadata.name}
                    </h5>
                    <h2 className="mb-2 text-lg md:text-1xl poppins-semibold text-black dark:text-white">
                        {nft.metadata.description}
                    </h2>
                </a>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="tracking-wide md:tracking-wider relative inline-block px-4 md:px-0 md:leading-4 h-10 w-full md:h-[53px] md:w-[159px] transition-all duration-300 rounded-2xl overflow-hidden z-10 montserrat-bold text-sm md:text-[20px] bg-[#e63b51] border-4 border-black custom-button"
                >
                    Stake NFT
                </button>
                <style jsx>{`
                    .custom-button::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #ffba00;
                        z-index: -2;
                    }
                    .custom-button::before {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0%;
                        height: 100%;
                        background-color: #e63b51;
                        transition: all 0.3s;
                        z-index: -1;
                    }
                    .custom-button:hover::before {
                        width: 100%;
                    }
                `}</style>
            </div>
            {isModalOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        minWidth: "300px",
                        backgroundColor: "#222",
                        padding: "20px",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%"
                        }}>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    border: "none",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    cursor: "pointer"
                                }}
                            >Close</button>
                        </div>
                        <h3 style={{ margin: "10px 0", color:"white" }}>You are about to stake:</h3>
                        <MediaRenderer
                            client={client}
                            src={nft.metadata.image}
                            style={{
                                borderRadius: "10px",
                                marginBottom: "10px"
                            }}
                        />
                        {!isApproved ? (
                            <TransactionButton
                                transaction={() => (
                                    approve({
                                        contract: NFT_CONTRACT,
                                        to: STAKING_CONTRACT.address,
                                        tokenId: nft.id
                                    })
                                )}
                                style={{
                                    width: "100%"
                                }}
                                onTransactionConfirmed={() => setIsApproved(true)}
                            >Approve</TransactionButton>
                        ) : (
                            <TransactionButton
                                transaction={() => (
                                    prepareContractCall({
                                        contract: STAKING_CONTRACT,
                                        method: "stake",
                                        params: [[nft.id]]
                                    })
                                )}
                                onTransactionConfirmed={() => {
                                    alert("Staked!");
                                    setIsModalOpen(false);
                                    refetch();
                                    refecthStakedInfo();
                                }}
                                style={{
                                    width: "100%"
                                }}
                            >Stake</TransactionButton>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
};
