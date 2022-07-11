(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{452:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"smart-contracts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smart-contracts"}},[t._v("#")]),t._v(" Smart Contracts")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("The Rocket Pool "),s("a",{attrs:{href:"https://www.ethereum.org/learn/#smart-contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Smart Contracts"),s("OutboundLink")],1),t._v(" form the foundation of the Rocket Pool protocol. They are the base layer of infrastructure which all other elements of the network are built on top of, including the JavaScript library, the Smart Node software stack, and all web or application interfaces.")]),t._v(" "),s("p",[t._v("Direct interaction with the contracts is usually not necessary, and is facilitated through the use of other software (such as the JavaScript library). This section provides a detailed description of the contract design, and information on how to build on top of Rocket Pool for developers wishing to extend it. All code examples are given as Solidity "),s("code",[t._v("v0.7.6")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"contract-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contract-design"}},[t._v("#")]),t._v(" Contract Design")]),t._v(" "),s("p",[t._v("The Rocket Pool network contracts are built with upgradability in mind, using a hub-and-spoke architecture. The central hub of the network is the "),s("code",[t._v("RocketStorage")]),t._v(" contract, which is responsible for storing the state of the entire protocol. This is implemented through the use of maps for key-value storage, and getter and setter methods for reading and writing values for a key.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("RocketStorage")]),t._v(" contract also stores the addresses of all other network contracts (keyed by name), and restricts data modification to those contracts only. Using this architecture, the protocol can be upgraded by deploying new versions of an existing contract, and updating its address in storage. This gives Rocket Pool the flexibility required to fix bugs or implement new features to improve the protocol.")]),t._v(" "),s("h3",{attrs:{id:"interacting-with-rocket-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-rocket-pool"}},[t._v("#")]),t._v(" Interacting With Rocket Pool")]),t._v(" "),s("p",[t._v("To begin interacting with the Rocket Pool network, first create an instance of the "),s("code",[t._v("RocketStorage")]),t._v(" contract using its "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool/blob/master/contracts/interface/RocketStorageInterface.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("interface"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RocketStorageInterface.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Example")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    RocketStorageInterface rocketStorage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketStorageInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _rocketStorageAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rocketStorage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketStorageInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_rocketStorageAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The above constructor should be called with the address of the "),s("code",[t._v("RocketStorage")]),t._v(" contract on the appropriate network.")]),t._v(" "),s("p",[t._v("Because of Rocket Pool's architecture, the addresses of other contracts should not be used directly but retrieved from the blockchain before use. Network upgrades may have occurred since the previous interaction, resulting in outdated addresses. "),s("code",[t._v("RocketStorage")]),t._v(" can never change address, so it is safe to store a reference to it.")]),t._v(" "),s("p",[t._v("Other contract instances can be created using the appropriate interface taken from the "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool/tree/master/contracts/interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rocket Pool repository"),s("OutboundLink")],1),t._v(", e.g.:")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RocketStorageInterface.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RocketDepositPoolInterface.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Example")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    RocketStorageInterface rocketStorage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketStorageInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _rocketStorageAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It is safe to store reference to RocketStorage")]),t._v("\n        rocketStorage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketStorageInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_rocketStorageAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exampleMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All other contracts should be queried each time they are used")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" rocketDepositPoolAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rocketStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contract.address"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rocketDepositPool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        RocketDepositPoolInterface rocketDepositPool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketDepositPoolInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rocketDepositPoolAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The Rocket Pool contracts, as defined in "),s("code",[t._v("RocketStorage")]),t._v(", are:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("rocketVault")]),t._v(" - Stores ETH held by network contracts (internal, not upgradeable)")]),t._v(" "),s("li",[s("code",[t._v("rocketAuctionManager")]),t._v(" - Handles the auctioning of RPL slashed from node operators' stake")]),t._v(" "),s("li",[s("code",[t._v("rocketDepositPool")]),t._v(" - Accepts user-deposited ETH and handles assignment to minipools")]),t._v(" "),s("li",[s("code",[t._v("rocketMinipoolManager")]),t._v(" - Creates & manages all minipools in the network")]),t._v(" "),s("li",[s("code",[t._v("rocketMinipoolQueue")]),t._v(" - Organises minipools into a queue for ETH assignment")]),t._v(" "),s("li",[s("code",[t._v("rocketMinipoolStatus")]),t._v(" - Handles minipool status updates from watchtower nodes")]),t._v(" "),s("li",[s("code",[t._v("rocketMinipoolPenalty")]),t._v(" - Stores penalties applied to node operators by the oDAO")]),t._v(" "),s("li",[s("code",[t._v("rocketNetworkBalances")]),t._v(" - Handles network balance updates from watchtower nodes")]),t._v(" "),s("li",[s("code",[t._v("rocketNetworkFees")]),t._v(" - Calculates node commission rates based on network node demand")]),t._v(" "),s("li",[s("code",[t._v("rocketNetworkPrices")]),t._v(" - Handles RPL price and effective stake updates from watchtower nodes")]),t._v(" "),s("li",[s("code",[t._v("rocketNetworkWithdrawal")]),t._v(" - Handles processing of beacon chain validator withdrawals")]),t._v(" "),s("li",[s("code",[t._v("rocketRewardsPool")]),t._v(" - Handles the distribution of rewards to each rewards contract")]),t._v(" "),s("li",[s("code",[t._v("rocketClaimDAO")]),t._v(" - Handles the claiming of rewards for the pDAO")]),t._v(" "),s("li",[s("code",[t._v("rocketClaimNode")]),t._v(" - Handles the claiming of rewards for node operators")]),t._v(" "),s("li",[s("code",[t._v("rocketClaimTrustedNode")]),t._v(" - Handles the claiming of rewards for the oDAO")]),t._v(" "),s("li",[s("code",[t._v("rocketNodeDeposit")]),t._v(" - Handles node deposits for minipool creation")]),t._v(" "),s("li",[s("code",[t._v("rocketNodeManager")]),t._v(" - Registers & manages all nodes in the network")]),t._v(" "),s("li",[s("code",[t._v("rocketNodeStaking")]),t._v(" - Handles node staking and unstaking")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProposal")]),t._v(" - Contains common oDAO and pDAO functionality")]),t._v(" "),s("li",[s("code",[t._v("rocketDAONodeTrusted")]),t._v(" - Handles oDAO related proposals")]),t._v(" "),s("li",[s("code",[t._v("rocketDAONodeTrustedProposals")]),t._v(" - Contains oDAO proposal functionality (internal)")]),t._v(" "),s("li",[s("code",[t._v("rocketDAONodeTrustedActions")]),t._v(" - Contains oDAO action functionality (internal)")]),t._v(" "),s("li",[s("code",[t._v("rocketDAONodeTrustedUpgrade")]),t._v(" - Handles oDAO contract upgrade functionality (internal)")]),t._v(" "),s("li",[s("code",[t._v("rocketDAONodeTrustedSettingsMembers")]),t._v(" - Handles settings relating to trusted members")]),t._v(" "),s("li",[s("code",[t._v("rocketDAONodeTrustedSettingsProposals")]),t._v(" - Handles settings relating to proposals")]),t._v(" "),s("li",[s("code",[t._v("rocketDAONodeTrustedSettingsMinipool")]),t._v(" - Handles settings relating to minipools")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocol")]),t._v(" - Handles pDAO related proposals")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolProposals")]),t._v(" - Handles pDAO proposal functionality (internal)")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolActions")]),t._v(" - Handles pDAO action functionality (internal)")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolSettingsInflation")]),t._v(" - Handles settings related to inflation")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolSettingsRewards")]),t._v(" - Handles settings related to rewards")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolSettingsAuction")]),t._v(" - Handles settings related to auction system")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolSettingsNode")]),t._v(" - Handles settings related to node operators")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolSettingsNetwork")]),t._v(" - Handles settings related to the network")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolSettingsDeposit")]),t._v(" - Handles settings related to deposits")]),t._v(" "),s("li",[s("code",[t._v("rocketDAOProtocolSettingsMinipool")]),t._v(" - Handles settings related to minipools")]),t._v(" "),s("li",[s("code",[t._v("rocketTokenRETH")]),t._v(" - The rETH token contract (not upgradeable)")]),t._v(" "),s("li",[s("code",[t._v("rocketTokenRPL")]),t._v(" - The RPL token contract (not upgradeable)")]),t._v(" "),s("li",[s("code",[t._v("addressQueueStorage")]),t._v(" - A utility contract (internal)")]),t._v(" "),s("li",[s("code",[t._v("addressSetStorage")]),t._v(" - A utility contract (internal)")])]),t._v(" "),s("p",[t._v("Contracts marked as “internal” do not provide methods which are accessible to the general public, and so are generally not useful for extension. For information on specific contract methods, consult their interfaces in the "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool/tree/master/contracts/interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rocket Pool repository"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"deposits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deposits"}},[t._v("#")]),t._v(" Deposits")]),t._v(" "),s("p",[t._v("The main reason for extending the Rocket Pool network is to implement custom deposit logic which funnels user deposits into the deposit pool. For example, a fund manager may wish to stake their users’ ETH in Rocket Pool via their own smart contracts, and abstract the use of Rocket Pool itself away from their users.")]),t._v(" "),s("p",[t._v("Note: the "),s("code",[t._v("RocketDepositPool")]),t._v(" contract address should not be hard-coded in your contracts, but retrieved from "),s("code",[t._v("RocketStorage")]),t._v(" dynamically. See "),s("a",{attrs:{href:"#interacting-with-rocket-pool"}},[t._v("Interacting With Rocket Pool")]),t._v(" for more details.")]),t._v(" "),s("h3",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),s("p",[t._v("The following describes a basic example contract which forwards deposited ETH into Rocket Pool and minted rETH back to the caller:")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RocketStorageInterface.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RocketDepositPoolInterface.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RocketETHTokenInterface.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Example")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    RocketStorageInterface rocketStorage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketStorageInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" balances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" _rocketStorageAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rocketStorage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketStorageInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_rocketStorageAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deposit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("payable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check deposit amount")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Invalid deposit amount"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Load contracts")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" rocketDepositPoolAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rocketStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contract.address"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rocketDepositPool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        RocketDepositPoolInterface rocketDepositPool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketDepositPoolInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rocketDepositPoolAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" rocketETHTokenAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rocketStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contract.address"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rocketETHToken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        RocketETHTokenInterface rocketETHToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketETHTokenInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rocketETHTokenAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Forward deposit to RP & get amount of rETH minted")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" rethBalance1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rocketETHToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("balanceOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        rocketDepositPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deposit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" rethBalance2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rocketETHToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("balanceOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rethBalance2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" rethBalance1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No rETH was minted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" rethMinted "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rethBalance2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" rethBalance1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update user's balance")]),t._v("\n        balances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" rethMinted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// After 24 hours it's possible to transfer the tokens")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withdraw")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Load contracts")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" rocketETHTokenAddress "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rocketStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contract.address"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rocketETHToken"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        RocketETHTokenInterface rocketETHToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RocketETHTokenInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rocketETHTokenAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Transfer rETH to caller")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" balances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        balances"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rocketETHToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transfer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" balance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rETH was not transferred to caller"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);