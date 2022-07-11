(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{366:function(e,t,o){e.exports=o.p+"assets/img/tui-claim-threshold.7c82ecc2.png"},482:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"claiming-node-operator-rewards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#claiming-node-operator-rewards"}},[e._v("#")]),e._v(" Claiming Node Operator Rewards")]),e._v(" "),t("p",[e._v("As a Rocket Pool node operator, you are entitled to regular rewards that will be provided in the form of the RPL token.\nThis section will describe how these rewards work and how you can claim them.")]),e._v(" "),t("h2",{attrs:{id:"rewards-and-checkpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rewards-and-checkpoints"}},[e._v("#")]),e._v(" Rewards and Checkpoints")]),e._v(" "),t("p",[e._v("At regular intervals, Rocket Pool will flag a "),t("strong",[e._v("checkpoint")]),e._v(" on the network.\nCurrently, checkpoints occur "),t("strong",[e._v("every 28 days")]),e._v(".")]),e._v(" "),t("p",[e._v("At a new checkpoint, the Rocket Pool smart contracts will mint new RPL tokens.\nThe current rate is "),t("strong",[e._v("5% inflation per year")]),e._v(".\nThis means that for the first year of operation, with a total supply of 18,000,000 RPL, the protocol will mint "),t("strong",[e._v("900,000 RPL")]),e._v(".\n70% of this (630,000 RPL) will be distributed to Rocket Pool node operators, which is roughly "),t("strong",[e._v("48,300 RPL per checkpoint")]),e._v(".")]),e._v(" "),t("p",[e._v("This amount will be divided among all of the node operators on the network, weighted by their "),t("strong",[e._v("total effective stake")]),e._v(".\nThe effective stake is essentially how much RPL collateral they've staked against their minipools, capped at 150%.\nThus, for a single minipool with a 16 ETH deposit, the maximum effective stake is 24 ETH worth of RPL (which varies with the ETH/RPL ratio).\nStaking more RPL than this will not result in higher rewards.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("EXAMPLE")]),e._v(" "),t("p",[e._v("For example: if 48,300 RPL were minted, your node had 1000 effective RPL staked, and the total effective stake of the network was 1,000,000 RPL, then your rewards for the checkpoint would be 48,300 * 1000 / 1000000 = "),t("strong",[e._v("48.3 RPL")]),e._v(".")])]),e._v(" "),t("p",[e._v("The claiming window works as follows:")]),e._v(" "),t("ul",[t("li",[e._v("When you first register your node, "),t("strong",[e._v("there is a wait period of exactly 28 days")]),e._v(" before you are allowed to claim your first rewards.")]),e._v(" "),t("li",[e._v("After this period, you can claim at any time between that point and the end of the current rewards period.")]),e._v(" "),t("li",[e._v("On each rewards period after, you will be able to claim immediately upon the rewards checkpoint.")])]),e._v(" "),t("p",[e._v("Once a checkpoint occurs, you can claim your rewards "),t("strong",[e._v("at any time until the next checkpoint occurs")]),e._v(".\nAt the current settings, this means you will have "),t("strong",[e._v("28 days")]),e._v(" to claim your rewards.\nIf you don't claim them before the next checkpoint, you will effectively forfeit them.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("Note that your available reward amount is calculated "),t("strong",[e._v("at the time that you claim it")]),e._v(".\nIt is "),t("strong",[e._v("not")]),e._v(" snapshotted and preserved at the time of the checkpoint.\nThis means that if more people stake RPL between the checkpoint and when you claim, your total share of the network stake will decrease and your RPL rewards will decrease as well.")]),e._v(" "),t("p",[e._v("Therefore, "),t("strong",[e._v("it is recommended to claim your RPL rewards as soon as you are able to.")])])]),e._v(" "),t("p",[e._v("In order to claim your rewards, you must have a minimum collateralization ratio of "),t("strong",[e._v("10%")]),e._v(".\nThis means if you have a single minipool that you deposited 16 ETH into, you must have staked at least 1.6 ETH worth of RPL in order to claim your rewards.\nThe "),t("code",[e._v("rocketpool node status")]),e._v(" command will show you your current collateralization ratio.")]),e._v(" "),t("p",[e._v("If you are below 10%, your rewards are not lost.\nYou simply need to either wait for the ETH/RPL price to (hopefully) increase, bringing you back to 10%, or stake more RPL until you reach the 10% level again.\nAs long as either one occurs before the 28-day checkpoint window expires, you can claim your RPL rewards safely.")]),e._v(" "),t("h2",{attrs:{id:"claiming-rpl-rewards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#claiming-rpl-rewards"}},[e._v("#")]),e._v(" Claiming RPL Rewards")]),e._v(" "),t("p",[e._v("By default, the "),t("code",[e._v("rocketpool_node")]),e._v(" Docker container (or "),t("code",[e._v("rp-node")]),e._v(" service in Native mode) will query the network to check if a checkpoint has passed and new RPL rewards are available to claim.\nIt performs this check "),t("strong",[e._v("every 5 minutes")]),e._v(" and will claim the RPL rewards automatically.\nThe rewards will then be sent to the node's "),t("strong",[e._v("withdrawal address")]),e._v(", which (hopefully) you have set to an address other than the node wallet.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("In order to perform this transaction, the Smartnode will use ETH from your node wallet to pay for the gas fee.\nMake sure you have enough ETH in the node wallet to cover the gas cost, or you won't be able to claim your rewards!")])]),e._v(" "),t("h3",{attrs:{id:"changing-the-max-fee-threshold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-max-fee-threshold"}},[e._v("#")]),e._v(" Changing the Max Fee Threshold")]),e._v(" "),t("p",[e._v("When it performs an automatic claim, the node process will use the current recommended max fee price for the network.\nIn times where gas is very expensive, you may not want the process to automatically claim RPL; you may prefer to make it wait until gas prices are cheaper.\nSince you have 28 days to claim your RPL rewards, hopefully there will be some point within that window where they are more reasonable (though we suggest you weigh the possibility of lower rewards due to more people staking prior to your claim).")]),e._v(" "),t("p",[e._v("To support this, the Smartnode stack provides a setting for the "),t("strong",[e._v("RPL claim gas threshold")]),e._v(".\nYou can find this setting in the "),t("code",[e._v("rocketpool service config")]),e._v(" Terminal UI, under the "),t("code",[e._v("Smartnode and TX Fees")]),e._v(" category:")]),e._v(" "),t("center",[t("p",[t("img",{attrs:{src:o(366),alt:""}})])]),e._v(" "),t("p",[e._v("When the recommended max fee is higher than this limit, automatic RPL reward claims will be disabled.\nThey will resume once the recommended max fee falls below this limit.\nBy default this is set to "),t("strong",[e._v("150 gwei")]),e._v(" but you can change it to any number you want.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("The new gas setting will not take effect until you restart the "),t("code",[e._v("rocketpool_node")]),e._v(" service.\nIn Docker and Hybrid modes, you can do this with "),t("code",[e._v("docker restart rocketpool_node")]),e._v(".\nIn Native mode, you can do this with e.g. "),t("code",[e._v("sudo systemctl restart rp-node")]),e._v(".")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("The Smartnode queries popular gas oracles for the recommended max fee used in the above calculations. For example, it may use "),t("a",{attrs:{href:"https://etherchain.org/tools/gasnow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Etherchain's"),t("OutboundLink")],1),e._v(' "Rapid" recommendation or '),t("a",{attrs:{href:"https://etherscan.io/gastracker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Etherscan's"),t("OutboundLink")],1),e._v(' "High" recommendation.')])]),e._v(" "),t("h3",{attrs:{id:"disabling-automatic-claims"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disabling-automatic-claims"}},[e._v("#")]),e._v(" Disabling Automatic Claims")]),e._v(" "),t("p",[e._v("If you set it to "),t("strong",[e._v("0")]),e._v(", then automatic RPL claims will be disabled entirely.\nYou can then trigger a manual claim with the CLI using the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rocketpool node claim-rpl\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("As described in the "),t("RouterLink",{attrs:{to:"/guides/node/cli-intro.html"}},[e._v("Intro to the Command Line Interface")]),e._v(" section, you can use the "),t("code",[e._v("-f")]),e._v(" flag to manually specify a max fee to use.\nFor example:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rocketpool -f 10 node claim-rpl\n")])])]),t("p",[e._v("will trigger a claim transaction using a max fee of 10 gwei and the default priority fee of 2 gwei.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);