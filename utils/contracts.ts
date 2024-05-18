import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./StakingABI";
import { defineChain } from "thirdweb";

const chain = defineChain(534351) ;
const nftContractAddress = "0x4A0C62131FB90201c79266B1C75622a845f14b61";
const rewardTokenContractAddress = "0xa099C412161eA8695e43376EfC137aDAF4c87388";
const stakingContractAddress = "0x6441fdCc61376da253Bc209a1d8f2FEDBeEb202d";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});