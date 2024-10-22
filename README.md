# ReFlax UI

## Implementation details
1. Built using React and Material UI.
2. Wallet: Rainbow wallet kit

## Description
Reflax is a yield staking dapp that simplifies earning yield from protocols like Convex, CRV, Beefy etc. Holders of Flax can optionally boost their yields.

## Problem being solved
Restaking apps like Convex and Beedy cater to DeFi power users who know how to game protocols and have the patience to learn the ropes. Instead of requiring users to engage in recursive acts of pooling and staking, Reflax does it all in one transaction. 

To illustrate the improvement, let's use an example. Suppose Jerome, holder of USDC, wants to stake in Convex's USDe/USDx boosted pool. Without Reflax, Jerome might do the following

1. Sell USDC into CRV's USDe/USDc pool to gain USDe.
2. Pool USDe into USDe/USDx to mint LP tokens
3. Stake LP token in Convex's boosted USDe/USDx pool.

On claiming, Convex pays CRV as a reward. Jerome might decide to then sell CRV for USDe.

When Jerome wants to unstake, he has to reverse the above process:

4. Unstake LP token from Convex
5. Withdraw USDe from the LP token on CRV
6. Sell USDe for USDC on CRV


With Reflax, Jerome simply stakes USDC. Under the hood, the USDc is pooled and staked as per steps 1-3. When he wishes to unstake, he simpy supplies the amount of USDc he wishes to withdraw and Reflax figures out the rest.

## How does Flax come in to it?
In Restaking dapps such as Convex and Beefy, there are usually multiple reward tokens paid out, representing governance tokens at each protocol layer. This can be tedious for a claiming user to sweep up, calculate in a common currency and sell. Reflax converts all of the reward tokens to a common token, Flax, without incurring a price impact in the conversion. 
Flax is immediately paid out on claim.

# Boosted Yield
In addition to simplifying the farming scene, Reflax offers holders of Flax the ability to boost their yield higher than the target protocol. This essentially puts Reflax at the top of the list of APY earning for a given token. This feature is optional so that users who simply wish to experience the ease of use of Reflax can earn the same APY as the target protocol without worrying about boosting.

If you're familiar with CRV and Convex, you'll be aware of the veCRV model of yield boosting. To refresh, the CRV site shows a range of APYs for a given token. By default, staking earns the lower range. If you lock your CRV token in the CRV DAO for a protracted period of time (anywhere from a few months to 4 years), your APY is significantly boosted.

Reflax follows a similar model with a few simplifications.

## sFlax
Flax can now be locked in a staking module for any length of time between 1 and 48 months. Staking Flax in the staking module earns a new ERC20 token called sFlax. The amount of sFlax earned per second is proportional to both the amount of Flax staked and the duration of the lock. If you wish to earn more sFlax per second, either lock for longer or lock more (or both).

### How to boost yield

When you claim rewards on Reflax, your reward in Flax is boosted by the amount of sFlax in your wallet. Your sFlax balance is then burnt. The UI will report the boost you will receive.

For instance, suppose the APY on USDC is currently 12% without any sFlax. The UI may report that for every 1000 sFlax held, the APY increases by 1 percentage point. Jerome accumulates 3000 sFlax. When he claims, he receives 15%. 
As soon as he claims, the 3000 sFlax is burnt.

The numbers in the above example are all fictional and simply serve to illustrate the concept.

### Why a new token?

There are a few benefits to tokenizing the locked Flax: 
1. Stake once, boost everywhere: sFlax can be used to boost all Flax dapps in the future. After ReFlax is live, Bonfire will be upgraded to accept sFlax. If we simply observed locked Flax on the staking module, we'd be confined to one chain. An ERC20 token can be bridged and used on any chain.
2. Locking market. Once sFlax begins trading on AMMs, its price will reflect the market premium on waiting (discount rate in economic terms). This will allow patient users to earn a secondary income by staking Flax and selling sFlax to impatient users who would rather just boost their yield in one go without having to stake Flax.
3. Once Bonfire has been upgraded, sFlax/eth an other pairs can be added to Bonfire to increase the demand for Flax staking.