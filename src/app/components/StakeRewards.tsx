import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { REWARD_TOKEN_CONTRACT, STAKING_CONTRACT } from "../../../utils/contracts";
import { prepareContractCall, toEther } from "thirdweb";
import { useEffect } from "react";
import { balanceOf } from "thirdweb/extensions/erc721";

export const StakeRewards: React.FC = () => {
    const account = useActiveAccount();

    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
        refetch: refetchTokenBalance,
    } = useReadContract(
        balanceOf,
        {
            contract: REWARD_TOKEN_CONTRACT,
            owner: account?.address || "",
        }
    );

    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
    } = useReadContract({
        contract: STAKING_CONTRACT,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });

    useEffect(() => {
        refetchStakedInfo();
        const interval = setInterval(() => {
            refetchStakedInfo();
        }, 1000);
        return () => clearInterval(interval);
    }, [refetchStakedInfo]);

    return (
        <div className="w-10/12 h-[301px] p-4 text-center bg-[#FFBA00] border border-[3.5px] border-black rounded-[25px] shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-20">
            {!isTokenBalanceLoading && tokenBalance !== undefined && (
                <p>Wallet Balance: {toEther(BigInt(tokenBalance.toString()))}</p>
            )}
            <h2 className="poppins-bold text-[25px] text-black md:text-[40px] dark:text-white mb-4">
                Stake Rewards: {stakedInfo && stakedInfo[1] !== undefined && toEther(BigInt(stakedInfo[1].toString()))}
            </h2>
            {account && (
                <TransactionButton
                    transaction={() => (
                        prepareContractCall({
                            contract: STAKING_CONTRACT,
                            method: "claimRewards",
                        })
                    )}
                    onTransactionConfirmed={() => {
                        alert("Rewards claimed!");
                        refetchStakedInfo();
                        refetchTokenBalance();
                    }}
                    className="custom-button2"
                >
                    Claim Rewards
                </TransactionButton>
            )}
        </div>
    );
};
