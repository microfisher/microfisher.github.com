# Claiming Node Operator Rewards

As a Rocket Pool node operator, you are entitled to regular rewards that will be provided in the form of the RPL token.
This section will describe how these rewards work and how you can claim them.


## Rewards and Checkpoints

At regular intervals, Rocket Pool will flag a **checkpoint** on the network.
Currently, checkpoints occur **every 28 days**.

At a new checkpoint, the Rocket Pool smart contracts will mint new RPL tokens.
The current rate is **5% inflation per year**.
This means that for the first year of operation, with a total supply of 18,000,000 RPL, the protocol will mint **900,000 RPL**.
70% of this (630,000 RPL) will be distributed to Rocket Pool node operators, which is roughly **48,300 RPL per checkpoint**.

This amount will be divided among all of the node operators on the network, weighted by their **total effective stake**.
The effective stake is essentially how much RPL collateral they've staked against their minipools, capped at 150%.
Thus, for a single minipool with a 16 ETH deposit, the maximum effective stake is 24 ETH worth of RPL (which varies with the ETH/RPL ratio).
Staking more RPL than this will not result in higher rewards.

::: tip EXAMPLE
For example: if 48,300 RPL were minted, your node had 1000 effective RPL staked, and the total effective stake of the network was 1,000,000 RPL, then your rewards for the checkpoint would be 48,300 * 1000 / 1000000 = **48.3 RPL**. 
:::

The claiming window works as follows:
- When you first register your node, **there is a wait period of exactly 28 days** before you are allowed to claim your first rewards.
- After this period, you can claim at any time between that point and the end of the current rewards period.
- On each rewards period after, you will be able to claim immediately upon the rewards checkpoint.

Once a checkpoint occurs, you can claim your rewards **at any time until the next checkpoint occurs**.
At the current settings, this means you will have **28 days** to claim your rewards.
If you don't claim them before the next checkpoint, you will effectively forfeit them.

::: warning NOTE
Note that your available reward amount is calculated **at the time that you claim it**.
It is **not** snapshotted and preserved at the time of the checkpoint.
This means that if more people stake RPL between the checkpoint and when you claim, your total share of the network stake will decrease and your RPL rewards will decrease as well.

Therefore, **it is recommended to claim your RPL rewards as soon as you are able to.**
:::

In order to claim your rewards, you must have a minimum collateralization ratio of **10%**.
This means if you have a single minipool that you deposited 16 ETH into, you must have staked at least 1.6 ETH worth of RPL in order to claim your rewards.
The `rocketpool node status` command will show you your current collateralization ratio.

If you are below 10%, your rewards are not lost.
You simply need to either wait for the ETH/RPL price to (hopefully) increase, bringing you back to 10%, or stake more RPL until you reach the 10% level again.
As long as either one occurs before the 28-day checkpoint window expires, you can claim your RPL rewards safely.


## Claiming RPL Rewards

By default, the `rocketpool_node` Docker container (or `rp-node` service in Native mode) will query the network to check if a checkpoint has passed and new RPL rewards are available to claim.
It performs this check **every 5 minutes** and will claim the RPL rewards automatically.
The rewards will then be sent to the node's **withdrawal address**, which (hopefully) you have set to an address other than the node wallet.

::: tip NOTE
In order to perform this transaction, the Smartnode will use ETH from your node wallet to pay for the gas fee.
Make sure you have enough ETH in the node wallet to cover the gas cost, or you won't be able to claim your rewards!
:::


### Changing the Max Fee Threshold

When it performs an automatic claim, the node process will use the current recommended max fee price for the network.
In times where gas is very expensive, you may not want the process to automatically claim RPL; you may prefer to make it wait until gas prices are cheaper.
Since you have 28 days to claim your RPL rewards, hopefully there will be some point within that window where they are more reasonable (though we suggest you weigh the possibility of lower rewards due to more people staking prior to your claim).

To support this, the Smartnode stack provides a setting for the **RPL claim gas threshold**.
You can find this setting in the `rocketpool service config` Terminal UI, under the `Smartnode and TX Fees` category:

<center>

![](./images/tui-claim-threshold.png)

</center>


When the recommended max fee is higher than this limit, automatic RPL reward claims will be disabled.
They will resume once the recommended max fee falls below this limit.
By default this is set to **150 gwei** but you can change it to any number you want.

::: warning NOTE
The new gas setting will not take effect until you restart the `rocketpool_node` service.
In Docker and Hybrid modes, you can do this with `docker restart rocketpool_node`.
In Native mode, you can do this with e.g. `sudo systemctl restart rp-node`.
:::

::: tip NOTE
The Smartnode queries popular gas oracles for the recommended max fee used in the above calculations. For example, it may use [Etherchain's](https://etherchain.org/tools/gasnow) "Rapid" recommendation or [Etherscan's](https://etherscan.io/gastracker) "High" recommendation.
:::

### Disabling Automatic Claims

If you set it to **0**, then automatic RPL claims will be disabled entirely.
You can then trigger a manual claim with the CLI using the following command:

```
rocketpool node claim-rpl
```

::: tip
As described in the [Intro to the Command Line Interface](cli-intro.md) section, you can use the `-f` flag to manually specify a max fee to use.
For example:

```
rocketpool -f 10 node claim-rpl
```

will trigger a claim transaction using a max fee of 10 gwei and the default priority fee of 2 gwei.
:::
