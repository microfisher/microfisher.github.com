(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{375:function(e,t,o){e.exports=o.p+"assets/img/status-fee-distributor.bf090849.png"},376:function(e,t,o){e.exports=o.p+"assets/img/claim-rewards-gb.9158e555.png"},377:function(e,t,o){e.exports=o.p+"assets/img/autostake.635af999.png"},378:function(e,t,o){e.exports=o.p+"assets/img/tui-generate-tree.870d3516.png"},491:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"beta-the-rocket-pool-redstone-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beta-the-rocket-pool-redstone-update"}},[e._v("#")]),e._v(" [BETA] The Rocket Pool Redstone Update")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTICE")]),e._v(" "),t("p",[e._v("This page is meant for "),t("strong",[e._v("beta testers only")]),e._v(" that are using v1.5.0 of the Smartnode stack on Ropsten.")]),e._v(" "),t("p",[e._v("It does "),t("em",[e._v("not")]),e._v(" apply to node operators practicing on the Prater testnet, or to node operators running on Mainnet.")])]),e._v(" "),t("p",[e._v("Rocket Pool's next major update, titled "),t("strong",[e._v("Redstone")]),e._v(", has been released for beta testing on the Ropsten test network.\nThis page describes the major changes that Redstone brings, including updates to both the Smartnode stack and to the Rocket Pool protocol in general.")]),e._v(" "),t("p",[e._v("Please read through this page thoroughly to understand all of the differences between the previous version of Rocket Pool and Redstone.")]),e._v(" "),t("h2",{attrs:{id:"client-changes-and-the-merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client-changes-and-the-merge"}},[e._v("#")]),e._v(" Client Changes and The Merge")]),e._v(" "),t("p",[e._v("Ropsten has successfully undergone "),t("strong",[e._v("The Merge of the Execution and Consensus Layers")]),e._v(".\nIt no longer uses Proof-of-Work; instead, validators on Ropsten are now responsible for creating and proposing blocks on both chains.\nWhile this comes with some exciting financial benefits (which will be discussed later), it also comes with some important changes to the way validators operate.")]),e._v(" "),t("p",[e._v("Below is a brief summary of the changes to client behavior as part of The Merge:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Your Execution client now uses three API ports:")]),e._v(" "),t("ul",[t("li",[e._v("One for HTTP access to its API ("),t("strong",[e._v("default 8545")]),e._v(")")]),e._v(" "),t("li",[e._v("One for Websocket access to its API ("),t("strong",[e._v("default 8546")]),e._v(")")]),e._v(" "),t("li",[e._v("One for the new "),t("strong",[e._v("Engine API")]),e._v(" used by Consensus clients after The Merge ("),t("strong",[e._v("default 8551")]),e._v(")")])])]),e._v(" "),t("li",[t("p",[e._v("Execution clients now require a Consensus client to function, and Consensus clients now require an Execution client to function.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Neither one can operate in isolation any longer.")])])])]),e._v(" "),t("li",[t("p",[e._v("One Execution client must be linked to one, and only one, Consensus client (and vice versa).")]),e._v(" "),t("ul",[t("li",[e._v("You will not be able to link multiple Execution clients to a single Consensus client, or multiple Consensus clients to a single Execution client.")]),e._v(" "),t("li",[e._v("Because of this, "),t("strong",[e._v("fallback execution clients are no longer available")]),e._v(" for Rocket Pool node operators.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Full execution clients")]),e._v(" are required.")]),e._v(" "),t("ul",[t("li",[e._v("Light clients (like Infura and Pocket) can no longer be used by any validators, Rocket Pool or otherwise.")])])])]),e._v(" "),t("h2",{attrs:{id:"fee-recipients-and-your-distributor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fee-recipients-and-your-distributor"}},[e._v("#")]),e._v(" Fee Recipients and Your Distributor")]),e._v(" "),t("p",[e._v("As validators are now responsible for creating blocks, that means they receive the "),t("strong",[e._v("priority fees")]),e._v(" (also known as "),t("strong",[e._v("tips")]),e._v(") attached to each transaction.\nThese fees are paid in ETH, and they are provided directly to you every time one of your minipool validators proposes a block.\nUnlike the ETH locked on the Beacon Chain, "),t("strong",[e._v("you don't have to wait for withdrawals to access your priority fees")]),e._v("!\nThey are simply awarded to you as part of the block proposal process.")]),e._v(" "),t("p",[e._v("In order to know where to send the fees to, your Validator Client requires an extra parameter known as the "),t("code",[e._v("fee recipient")]),e._v(".\nThis is the address on the Execution Layer (ETH1) that all of the priority fees earned by your node during block proposals will be sent to.")]),e._v(" "),t("p",[e._v("Rocket Pool is designed to fairly distribute these rewards, the same way it fairly distributes your Beacon chain rewards: half of any priority fees your minipool validators earn will go to you (plus the average commission of all of your minipools), and the other half will go to the pool stakers (minus your average commission).")]),e._v(" "),t("p",[e._v("To that end, the Smartnode will automatically set your Validator Client's "),t("code",[e._v("fee recipient")]),e._v(" to a special address known as your node's "),t("strong",[e._v("fee distributor")]),e._v(".\nYour fee distributor is a unique contract on the Execution Layer that's "),t("strong",[e._v("specific to your node")]),e._v(".\nIt will hold all of the priority fees you've earned over time, and it contains the logic required to fairly split and distribute them.\nThis distribution process is controlled by you (the node operator), and can be done whenever you please.\nIt does not have a time limit.")]),e._v(" "),t("p",[e._v("The address for your node's fee distributor is "),t("strong",[e._v("deterministically based on your node address")]),e._v(".\nThat means it is known ahead of time, before the fee distributor is even created.\n"),t("strong",[e._v("The Smartnode will use this address as your fee recipient.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("By default, your fee recipient will be set to the "),t("strong",[e._v("rETH address")]),e._v(" when you install Smartnode v1.5.0 (if the Redstone contract updates haven't been deployed yet).\nThe Smartnode will automatically update this to your node's fee distributor address once the Redstone update has been deployed.")]),e._v(" "),t("p",[e._v("One exception to this rule is if you are opted into the "),t("strong",[e._v("Smoothing Pool")]),e._v(" - see the section at the end of this page for more information on it.")])]),e._v(" "),t("p",[e._v("New Rocket Pool nodes will automatically initialize their node's distributor contract upon registration.\nExisting nodes will need to do this process manually.\nThis only needs to be run once.")]),e._v(" "),t("p",[e._v("One interesting ramification of this is that your distributor's address may start accruing a balance "),t("strong",[e._v("before")]),e._v(" you've initialized your node distributor contract.\nThis is okay, because your distributor will gain access to all of this existing balance as soon as you initialize it.")]),e._v(" "),t("p",[e._v("You can view your fee distributor's balance as part of:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rocketpool node status\n")])])]),t("p",[e._v("The output will look like this:")]),e._v(" "),t("center",[t("p",[t("img",{attrs:{src:o(375),alt:""}})])]),e._v(" "),t("p",[e._v("To initialize your node's distributor, simply run this new command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rocketpool node initialize-fee-distributor\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("After the Redstone update, you must call this function before you can create any new minipools with "),t("code",[e._v("rocketpool node deposit")]),e._v(".")])]),e._v(" "),t("p",[e._v("When your distributor has been initialized, you can claim and distribute its entire balance using the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rocketpool node distribute-fees\n")])])]),t("p",[e._v("This will send your share of the rewards to your "),t("strong",[e._v("withdrawal address")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"rocket-pool-protocol-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rocket-pool-protocol-changes"}},[e._v("#")]),e._v(" Rocket Pool Protocol Changes")]),e._v(" "),t("p",[e._v("In addition to the Execution and Consensus client changes and the new priority fees, the Rocket Pool protocol itself has undergone some important changes you should be aware of.")]),e._v(" "),t("h3",{attrs:{id:"new-rewards-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-rewards-system"}},[e._v("#")]),e._v(" New Rewards System")]),e._v(" "),t("p",[e._v("One of the most significant changes introduced with the Redstone update is the "),t("strong",[e._v("new rewards system")]),e._v(".\nThis is a complete overhaul of the way node operators receive their RPL rewards (and ETH from the Smoothing Pool - discussed later).")]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("old")]),e._v(" rewards system had the following drawbacks:")]),e._v(" "),t("ul",[t("li",[e._v("Claiming cost approximately 400k gas, which is quite expensive.")]),e._v(" "),t("li",[e._v("Node operators had to claim the rewards at each interval (every 28 days), or would forfeit them. This meant the gas costs could become prohibitively expensive for node operators with small amounts of RPL.")]),e._v(" "),t("li",[e._v("Rewards were determined at the time of the "),t("em",[e._v("claim")]),e._v(", not at the time of the checkpoint. If a user staked a significant amount of RPL between the checkpoint and your claim, your rewards could be diluted and you'd receive less RPL than you were expecting.")])]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("new")]),e._v(" claims system solves all of these problems.")]),e._v(" "),t("p",[e._v("At every interval, the Oracle DAO will collectively create a "),t("strong",[e._v("true snapshot")]),e._v(" of the state of the node operators in the Rocket Pool network, including all of their effective stake amounts.\nThis information is compiled into a "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Merkle_tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("Merkle Tree"),t("OutboundLink")],1),e._v(" - an extremely efficient way to make all of the details available to smart contracts.\nThe Merkle Tree is built into a JSON file and hosted on the "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/InterPlanetary_File_System",target:"_blank",rel:"noopener noreferrer"}},[e._v("InterPlanetary File System (IPFS)"),t("OutboundLink")],1),e._v(", and the root of the Merkle Tree is submitted to the contracts.")]),e._v(" "),t("p",[e._v("This new system has the following features:")]),e._v(" "),t("ul",[t("li",[e._v("You can now "),t("strong",[e._v("let rewards accumulate")]),e._v(" for as long as you want. No more time limit on when you need to claim.")]),e._v(" "),t("li",[e._v("You can claim "),t("strong",[e._v("multiple intervals")]),e._v(" all at once.")]),e._v(" "),t("li",[e._v("Your first claim transaction uses about 85k gas. Each subsequent claim transaction costs about 55k gas.\n"),t("ul",[t("li",[e._v("If you're claiming multiple intervals at once, each supplemental interval costs "),t("strong",[e._v("6k gas")]),e._v(" so it's most cost-effective to claim as many of them at once as possible.")])])]),e._v(" "),t("li",[e._v("Your RPL rewards "),t("strong",[e._v("no longer get diluted")]),e._v(" - your RPL rewards are fixed at the time of the snapshot, and you are always eligible for that amount.")]),e._v(" "),t("li",[e._v("You can "),t("strong",[e._v("restake some (or all) of your RPL rewards")]),e._v(" as part of the claiming transaction, which further trims down gas requirements compared to today.")]),e._v(" "),t("li",[e._v("Currently, "),t("strong",[e._v("all of your claims must be on Mainnet")]),e._v(" but we have the infrastructure in place to build the ability to claim on Layer 2 networks at a later date.")])]),e._v(" "),t("p",[e._v("When your node detects a new rewards checkpoint, it will automatically download the JSON file for that interval.\nYou can then review your rewards using the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rocketpool node claim-rewards\n")])])]),t("p",[e._v("As intervals go by and you accumulate rewards, the output will look like this:")]),e._v(" "),t("center",[t("p",[t("img",{attrs:{src:o(376),alt:""}})])]),e._v(" "),t("p",[e._v("Here you can quickly see how many rewards you've earned at each interval, and can decide which ones you want to claim.\nNote that "),t("strong",[e._v("Ropsten's interval time is set to 1 day to facilitate testing.")])]),e._v(" "),t("p",[e._v("You can also specify an amount you want to restake during this claim:")]),e._v(" "),t("center",[t("p",[t("img",{attrs:{src:o(377),alt:""}})])]),e._v(" "),t("p",[e._v("This will let you compound your RPL rewards in one transaction, using substantially less gas than you currently need to use today.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("If you prefer to build the rewards checkpoint manually instead of downloading the one created by the Oracle DAO, you can change this setting from "),t("code",[e._v("Download")]),e._v(" to "),t("code",[e._v("Generate")]),e._v(" in the TUI:")]),e._v(" "),t("center",[t("p",[t("img",{attrs:{src:o(378),alt:""}})])]),e._v(" "),t("p",[e._v("As the tip implies, you will need access to an archive node to do this.\nIf your local Execution client is not an archive node, you can specify a separate one (such as Infura or Alchemy) in the "),t("code",[e._v("Archive-Mode EC URL")]),e._v(" box below it.\nThis URL will only be used when generating Merkle trees; it will not be used for validation duties.")])],1),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("If you are below 10% RPL collateral "),t("em",[e._v("at the time of the snapshot")]),e._v(', you will not be eligible for rewards for that snapshot.\nUnlike the current system, where you can simply "top off" before you claim in order to become eligible again, this will be locked in that snapshot forever and '),t("strong",[e._v("you will never receive rewards for that period")]),e._v(".\nYou "),t("strong",[e._v("must")]),e._v(" be above 10% collateral at the time of a snapshot in order to receive rewards for that period.")])]),e._v(" "),t("h3",{attrs:{id:"smoothing-pool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smoothing-pool"}},[e._v("#")]),e._v(" Smoothing Pool")]),e._v(" "),t("p",[e._v("One final exciting new feature of the Redstone update is the "),t("strong",[e._v("Smoothing Pool")]),e._v(".\nThe Smoothing Pool is "),t("strong",[e._v("an opt-in feature")]),e._v(" that will collectively pool the priority fees of every member opted into it.\nDuring a rewards checkpoint, the total ETH balance of the pool is divided into a pool staker portion and a node operator portion.\nAll of the rewards in the node operator portion are "),t("strong",[e._v("distributed fairly to every member of the pool")]),e._v(".")]),e._v(" "),t("p",[e._v("In essence, the Smoothing Pool is a way to effectively eliminate the randomness associated with block proposals on the Beacon Chain.\nIf you've ever had a streak of bad luck and gone months without a proposal, you may find the Smoothing Pool quite exciting.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("The Smoothing Pool rewards are built into the Merkle Tree used for RPL rewards, so you claim them at the same time you claim RPL using "),t("code",[e._v("rocketpool node claim-rewards")]),e._v(".")])]),e._v(" "),t("p",[e._v("To help clarify the details, the Smoothing Pool uses the following rules:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Opting into the Smoothing Pool is done on a "),t("strong",[e._v("node level")]),e._v(". If you opt in, all of your minipools are opted in.")])]),e._v(" "),t("li",[t("p",[e._v("The node operator's total share is determined by the average commission of every minipool in every node opted into the Smoothing Pool.")])]),e._v(" "),t("li",[t("p",[e._v("Anyone can opt in at any time. They must wait a full rewards interval (1 day on Ropsten, 28 days on Mainnet) before opting out to prevent gaming the system.")]),e._v(" "),t("ul",[t("li",[e._v("Once opted out, you must wait another full interval to opt back in.")])])]),e._v(" "),t("li",[t("p",[e._v('The Smoothing Pool calculates the "share" of each minipool (portion of the pool\'s ETH for the interval) owned by each node opted in.')]),e._v(" "),t("ul",[t("li",[e._v("The share is a function of your minipool's performance during the interval (calculated by looking at how many attestations you sent on the Beacon Chain, and how many you missed), and your minipool's commission rate.")])])]),e._v(" "),t("li",[t("p",[e._v("Your node's total share is the sum of your minipool shares.")])]),e._v(" "),t("li",[t("p",[e._v("Your node's total share is scaled by the amount of time you were opted in.")]),e._v(" "),t("ul",[t("li",[e._v("If you were opted in for the full interval, you receive your full share.")]),e._v(" "),t("li",[e._v("If you were opted in for 30% of an interval, you receive 30% of your full share.")])])])]),e._v(" "),t("p",[e._v("To opt into the Smoothing Pool, run the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rocketpool node join-smoothing-pool\n")])])]),t("p",[e._v("This will record you as opted-in in the Rocket Pool contracts and automatically change your Validator Client's "),t("code",[e._v("fee recipient")]),e._v(" from your node's distributor contract to the Smoothing Pool contract.")]),e._v(" "),t("p",[e._v("To leave the pool, run this command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rocketpool node leave-smoothing-pool\n")])])]),t("h3",{attrs:{id:"the-penalty-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-penalty-system"}},[e._v("#")]),e._v(" The Penalty System")]),e._v(" "),t("p",[e._v('To ensure that node operators don\'t "cheat" by manually modifying the fee recipient used in their Validator Client, Rocket Pool employs a penalty system.')]),e._v(" "),t("p",[e._v("The Oracle DAO constantly monitors each block produced by Rocket Pool node operators.\nAny block that has a fee recipient other than one of the following addresses is considered to be "),t("strong",[e._v("invalid")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("The rETH address")]),e._v(" "),t("li",[e._v("The Smoothing Pool address")]),e._v(" "),t("li",[e._v("The node's fee distributor contract (if opted out of the Smoothing Pool)")])]),e._v(" "),t("p",[e._v("A minipool that proposed a block with an "),t("strong",[e._v("invalid")]),e._v(" fee recipient will be issued "),t("strong",[e._v("a strike")]),e._v(".\nOn the third strike, the minipool will begin receiving "),t("strong",[e._v("infractions")]),e._v(" - each infraction will dock "),t("strong",[e._v("10% of its total Beacon Chain balance, including ETH earnings")]),e._v(" and send them to the rETH pool stakers upon withdrawing funds from the minipool.")]),e._v(" "),t("p",[e._v("Infractions are at a "),t("strong",[e._v("minipool")]),e._v(" level, not a "),t("strong",[e._v("node")]),e._v(" level.")]),e._v(" "),t("p",[e._v("The Smartnode software is designed to ensure honest users will never get penalized, even if it must take the Validator Client offline to do so.\nIf this happens, you will stop attesting and will see error messages in your log files about why the Smartnode can't correctly set your fee recipient.")]),e._v(" "),t("h2",{attrs:{id:"installing-v1-5-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-v1-5-0"}},[e._v("#")]),e._v(" Installing v1.5.0")]),e._v(" "),t("p",[e._v("To install v1.5.0, the most effective way is to monitor the Discord announcements in the "),t("code",[e._v("#beta")]),e._v(" channel for instructions on the latest version.")]),e._v(" "),t("h2",{attrs:{id:"getting-test-ropsten-eth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-test-ropsten-eth"}},[e._v("#")]),e._v(" Getting Test Ropsten ETH")]),e._v(" "),t("p",[e._v("The faucet bot run in our Discord by community member "),t("strong",[e._v("Patches")]),e._v(" has been adapted to support Ropsten.\nBeta tester node operators with access to the "),t("code",[e._v("#faucet")]),e._v(" channel in our Discord server can use the following commands to create a node:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("!ropstenEth")]),e._v(" to get 1 ETH for gas to register and provision the node")]),e._v(" "),t("li",[t("code",[e._v("!ropstenOperator")]),e._v(" to get enough ETH to create a minipool")])]),e._v(" "),t("p",[e._v("Users without access to the channel can request ETH in the "),t("code",[e._v("#support")]),e._v(" channel.")]),e._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),t("p",[e._v("This section will be regularly updated with issues encountered by our beta testers, or known by the development team during the beta process.")]),e._v(" "),t("ul",[t("li",[e._v("Fallback execution clients don't work and will be "),t("strong",[e._v("removed from the TUI")]),e._v(" in a future update. Ignore them for now.")]),e._v(" "),t("li",[e._v("Nimbus has issues syncing from scratch unless the Execution client is already synced.\n"),t("ul",[t("li",[e._v("A workaround is to fully sync the Execution client with a different Consensus client, then switch to Nimbus once it's done.")])])]),e._v(" "),t("li",[e._v("Instructions for which command line properties to change for Native mode are not written yet.")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);