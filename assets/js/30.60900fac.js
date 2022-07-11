(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{379:function(e,t,o){e.exports=o.p+"assets/img/reth_rate.15a0870a.png"},492:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"staking-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#staking-overview"}},[e._v("#")]),e._v(" Staking Overview")]),e._v(" "),t("p",[e._v("This guide will introduce you to how staking with Rocket Pool works (how your ETH is put to work and your rewards are generated) and summarize the ways in which you can stake.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("If you're not interested in how staking works and just want to learn how to stake, "),t("a",{attrs:{href:"#how-to-stake-with-rocket-pool"}},[t("strong",[e._v("click here to skip to that section.")])])])]),e._v(" "),t("h2",{attrs:{id:"how-eth2-staking-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-eth2-staking-works"}},[e._v("#")]),e._v(" How ETH2 Staking Works")]),e._v(" "),t("p",[e._v("Before getting into Rocket Pool, staking on the "),t("a",{attrs:{href:"https://ethereum.org/en/eth2/beacon-chain/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beacon Chain"),t("OutboundLink")],1),e._v(" (ETH2) is done via "),t("strong",[e._v("validators")]),e._v(".\nA validator is a single ETH2 address, to which 32 ETH was deposited, which is now responsible for helping maintain the consistency and security of the Beacon Chain.\nThey do this by listening for transactions and new block proposals, and "),t("strong",[e._v("attesting")]),e._v(" that the proposed block contains legal, valid transactions by doing some number crunching and verification behind the scenes.\nOccasionally, they get to propose new blocks themselves.")]),e._v(" "),t("p",[e._v("Validators in ETH2 are assigned attestations and block proposals "),t("strong",[e._v("on a schedule")]),e._v(".\nThis is very different from ETH1's proof of work system, where everyone is constantly trying to race each other and come up with the next block before everyone else.\nThis means that unlike ETH1 where a miner isn't guaranteed to earn a block reward unless they find the next block, ETH2 validators are guaranteed to have slow, steady income as long as they perform their duties.\nIf a validator is offline and misses an attestation or a block proposal, it will be "),t("strong",[e._v("slightly penalized")]),e._v(".\nThe penalties are quite small though; as a rule of thumb, if a validator is offline for X hours, it will make all of its lost ETH back after the same X hours of being back online.")]),e._v(" "),t("p",[e._v("Under the current Proof-of-Stake rules, all attestations and block proposals are provided on the Beacon Chain.\nUntil withdrawals from the Beacon Chain are implemented by the Ethereum core developers, this means "),t("strong",[e._v("there is currently no way to access staked ETH or its rewards.")]),e._v("\nValidators will simply accrue larger and larger balances until they "),t("strong",[e._v("voluntarily exit")]),e._v(" the validator (or get "),t("strong",[e._v("slashed")]),e._v(" for attempting to attack the network).\nBoth of these actions will relieve the validator of its duties and return the balance back to the operator on the ETH1 chain once withdrawals have been implemented.")]),e._v(" "),t("h2",{attrs:{id:"how-rocket-pool-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-rocket-pool-works"}},[e._v("#")]),e._v(" How Rocket Pool Works")]),e._v(" "),t("p",[e._v("Unlike solo stakers, who are required to put 32 ETH up for deposit to create a new validator, Rocket Pool nodes only need to deposit 16 ETH per validator.\nThis will be coupled with 16 ETH from the staking pool (which stakers deposited in exchange for rETH) to create a new ETH2 validator.\nThis new validator is called a "),t("strong",[e._v("minipool")]),e._v(".")]),e._v(" "),t("p",[e._v("To the Beacon chain, a minipool looks exactly the same as a normal validator.\nIt has the same responsibilities, same rules it must follow, same rewards, and so on.\nThe only difference is in how the minipool was created on the ETH1 chain, and how withdrawals work when the node operator decides to voluntarily exit the minipool or gets slashed.\nAll of the creation, withdrawing, and rewards delegation is handled by Rocket Pool's "),t("strong",[e._v("smart contracts")]),e._v(" on the ETH1 chain.\nThis makes it completely decentralized.")]),e._v(" "),t("h2",{attrs:{id:"the-reth-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-reth-token"}},[e._v("#")]),e._v(" The rETH Token")]),e._v(" "),t("p",[e._v("As a Rocket Pool staker, your role is to deposit ETH into the deposit pool which will enable a node operator to create a new Beacon Chain validator.\nYou can stake as little as "),t("strong",[e._v("0.01 ETH")]),e._v(".")]),e._v(" "),t("p",[e._v("In doing so, you will be given a token called "),t("strong",[e._v("rETH")]),e._v(". rETH represents both "),t("strong",[e._v("how much")]),e._v(" ETH you deposited, and "),t("strong",[e._v("when")]),e._v(" you deposited it.\nThe value of rETH is determined by the following ratio:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rETH:ETH ratio =  (total ETH staked + Beacon Chain rewards) / (total rETH supply)\n")])])]),t("p",[e._v("Since the Beacon Chain rewards will always be positive and will constantly grow, this means that "),t("strong",[e._v("rETH's value effectively always increases relative to ETH")]),e._v(".\nThe rETH/ETH exchange rate is updated approximately every 24 hours based on the Beacon Chain rewards earned by Rocket Pool node operators.")]),e._v(" "),t("p",[e._v("To illustrate this point, here is a chart of rETH's value (relative to ETH) over time - as expected, it demonstrates slow but steady growth:")]),e._v(" "),t("center",[t("p",[t("img",{attrs:{src:o(379),alt:""}})])]),e._v(" "),t("p",[e._v("Let's do a simple example as a demonstration.")]),e._v(" "),t("p",[e._v("Say you stake at the very beginning when 1 ETH = 1 rETH.\nYou deposit 10 ETH and receive 10 rETH back.")]),e._v(" "),t("p",[e._v("After a few years, the balances on the Beacon Chain grow due to validator rewards.\nSay 128 ETH had been staked with Rocket Pool and the sum of all validator balances on ETH2 was 160 ETH.\nThen 1 ETH would be worth (128/160) = 0.8 rETH; conversely, 1 rETH would be worth (160/128) = 1.25 ETH.")]),e._v(" "),t("p",[e._v("At this point, you could trade your 10 rETH back to Rocket Pool's smart contracts and receive 12.5 ETH in return.")]),e._v(" "),t("p",[e._v("This means "),t("strong",[e._v("as long as you are holding rETH")]),e._v(", you are staking with Rocket Pool!\n"),t("strong",[e._v("You do not need to get it from Rocket Pool directly.")]),e._v("\nFor example, you can purchase rETH on an exchange; as every rETH token is exactly the same, you will "),t("strong",[e._v("automatically receive the benefits of staking just by holding the token!")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("Trading rETH back for ETH directly with Rocket Pool is only possible when the staking pool has enough ETH in it to handle your trade.\nETH in this pool comes from two sources:")]),e._v(" "),t("ol",[t("li",[e._v("ETH that other stakers have deposited, which hasn't been used by a node operator to create a new validator yet")]),e._v(" "),t("li",[e._v("ETH that was returned by a node operator after they exited one of their validators and received their rewards from the Beacon Chain ("),t("strong",[e._v("note that this is not possible until after the ETH1-ETH2 Merge occurs and withdrawals are enabled")]),e._v(")")])]),e._v(" "),t("p",[e._v("It's possible that if node operators have put all of the staking pool to work on the Beacon chain, then the liquidity pool won't have enough balance to cover your unstaking.\nIn this scenario, you may find other ways to trade your rETH back to ETH (such as a decentralized exchange like "),t("a",{attrs:{href:"https://app.uniswap.org/#/swap",target:"_blank",rel:"noopener noreferrer"}},[e._v("Uniswap"),t("OutboundLink")],1),e._v(") - though they will likely come with a small premium.")])]),e._v(" "),t("p",[e._v("As an alternative to holding onto and eventually returning your rETH to the Rocket Pool, you are also free to "),t("strong",[e._v("use it in DeFi applications")]),e._v(".\nYou can trade it, lend it, use it as collateral... as rETH is a standard ERC20 token, you can use it in any way you could use any other token.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("After the Ethereum Proof-of-Stake (PoS) merge and enabling of staked ETH withdrawals, "),t("strong",[e._v("rETH will still remain a separate ERC-20 token from ETH")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"tax-implications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tax-implications"}},[e._v("#")]),e._v(" Tax Implications")]),e._v(" "),t("p",[e._v("Each country has its own tax laws, and it would be impossible to document them all here."),t("br"),e._v("\nIn some countries, depositing ETH for rETH may be considered "),t("strong",[e._v("a taxable event")]),e._v(".\nHowever, because rETH inherently accumulates value while the actual amount of the token you hold remains constant, simply holding it usually "),t("strong",[e._v("does not generate any taxable events")]),e._v(".")]),e._v(" "),t("p",[e._v("This may make rETH "),t("strong",[e._v("a preferable staking token for long-term holding")]),e._v(" if your country separates short-term and long-term capital gains taxes.")]),e._v(" "),t("p",[e._v("Tax laws related to cryptocurrencies are in their infancy; each user should do their own research and consider speaking with a tax professional.")]),e._v(" "),t("p",[e._v("Below are some helpful sites that offer tax assistance to users related to Ethereum.\n"),t("strong",[e._v("This is not an official endorsement - users are advised to do their own research regarding tax implications and strategies")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://koinly.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://koinly.io/"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cryptotaxcalculator.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cryptotaxcalculator.io/"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"how-to-stake-with-rocket-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-stake-with-rocket-pool"}},[e._v("#")]),e._v(" How to Stake with Rocket Pool")]),e._v(" "),t("p",[e._v("As described above, as long as you are holding the rETH token, you are a "),t("strong",[e._v("Rocket Pool Staker")]),e._v(".\nWe will summarize several common ways to acquire it here.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("All of the methods described here rely on the usage of an Ethereum wallet such as "),t("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MetaMask"),t("OutboundLink")],1),e._v(".\nIf you have never used an Ethereum wallet before, we strongly encourage you to learn more about them and practice using them before staking with Rocket Pool.\nThe sections below include some steps that are demonstrated with MetaMask as an example; they should translate to your wallet of choice easily enough for you to follow along.")])]),e._v(" "),t("h3",{attrs:{id:"via-rocket-pool-directly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#via-rocket-pool-directly"}},[e._v("#")]),e._v(" Via Rocket Pool Directly")]),e._v(" "),t("p",[e._v("With this method, you will use a web3 wallet (such as MetaMask) and interact with Rocket Pool's website to swap ETH for rETH and vice-versa.\nThis method is "),t("strong",[e._v("guaranteed")]),e._v(" to provide you with the exact amount of rETH that your ETH is worth, since it's coming directly from Rocket Pool's smart contracts, but it can be somewhat expensive if the network's gas prices are high and you're staking a relatively small amount of ETH.")]),e._v(" "),t("p",[e._v("Note, however, that your rETH tokens will be "),t("strong",[e._v("locked to your address for 24 hours")]),e._v(" if you use this method to prevent timing attacks on the network.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("If you are practicing staking on the Prater Testnet, the direct method above is the only option currently supported.")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/guides/staking/via-rp.html"}},[e._v("Click here to learn how to stake via Rocket Pool directly.")])],1),e._v(" "),t("h3",{attrs:{id:"via-a-decentralized-exchange-on-ethereum-layer-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#via-a-decentralized-exchange-on-ethereum-layer-1"}},[e._v("#")]),e._v(" Via a Decentralized Exchange on Ethereum (Layer 1)")]),e._v(" "),t("p",[e._v("With this method, you will access a decentralized exchange such as "),t("a",{attrs:{href:"https://docs.balancer.fi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Balancer"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://docs.uniswap.org/protocol/introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("Uniswap"),t("OutboundLink")],1),e._v(" and purchase rETH using your token of choice, just like you would do any other token swap.")]),e._v(" "),t("p",[e._v("Rocket Pool has officially created a "),t("a",{attrs:{href:"https://docs.balancer.fi/products/balancer-pools/metastable-pools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Balancer metastable pool"),t("OutboundLink")],1),e._v(".\nMetastable pools are ideal for tokens like rETH, because "),t("strong",[e._v("they honor the true exchange rate reported by the Oracle DAO")]),e._v(" - this means exchanging with it will have "),t("strong",[e._v("much lower slippage")]),e._v(" and "),t("strong",[e._v("lower fees")]),e._v(" than a conventional decentralized exchange, so you get a much better deal when buying or selling rETH.")]),e._v(" "),t("p",[e._v("Because of this, and because it has a "),t("strong",[e._v("smaller transaction fee")]),e._v(" than swapping directly via Rocket Pool's website, we "),t("strong",[e._v("strongly recommended")]),e._v(" using Balancer if you want to stake via this route.")]),e._v(" "),t("p",[e._v("If Balancer doesn't work for you, there is also an ETH-rETH liquidity pool on Uniswap.\nNote that this is a conventional pool, so "),t("strong",[e._v("you will be affected by slippage and higher fees")]),e._v(" if you use it, but the gas fee will still be lower than staking directly via Rocket Pool's website.")]),e._v(" "),t("p",[e._v("Note that your rETH will "),t("strong",[e._v("not be locked to your address")]),e._v(" if you stake via an exchange.\nYou can move them or use them immediately.")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/guides/staking/via-l1.html"}},[e._v("Click here to learn how to swap ETH for rETH via a decentralized exchange on Layer 1.")])],1),e._v(" "),t("h3",{attrs:{id:"via-a-decentralized-exchange-on-a-layer-2-network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#via-a-decentralized-exchange-on-a-layer-2-network"}},[e._v("#")]),e._v(" Via a Decentralized Exchange on a Layer 2 Network")]),e._v(" "),t("p",[e._v("With this method, you will start by bridging your existing ETH (or other tokens of choice) onto an Ethereum Layer 2 network such as "),t("a",{attrs:{href:"https://www.optimism.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Optimism"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://arbitrum.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arbitrum"),t("OutboundLink")],1),e._v(" and then use a decentralized exchange on the network to purchase rETH. If you already have tokens on a Layer 2 network, this method is compelling because "),t("strong",[e._v("the transaction fees are ~10x smaller than on the Ethereum mainnet")]),e._v(". However, if you have not used a Layer 2 network before, it does require a few additional steps to get set up.")]),e._v(" "),t("p",[e._v("Note that your rETH will "),t("strong",[e._v("not be locked to your address")]),e._v(" if you stake via an exchange.\nYou can move them or use them immediately.")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/guides/staking/via-l2.html"}},[e._v("Click here to learn how to swap ETH for rETH via a decentralized exchange on a Layer 2 network.")])],1),e._v(" "),t("h3",{attrs:{id:"video-demonstration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#video-demonstration"}},[e._v("#")]),e._v(" Video Demonstration")]),e._v(" "),t("p",[e._v("Community member "),t("strong",[e._v("Kevster")]),e._v(" has put together a helpful video that demonstrates each of these options step-by-step:")]),e._v(" "),t("center",[t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/doXK3iDoQgI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("p",[e._v("For a more detailed writeup, select which method you would like to use from the links above and follow the guide for that section.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);