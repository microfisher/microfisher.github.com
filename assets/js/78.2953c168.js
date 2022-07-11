(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{450:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"class-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-rewards"}},[t._v("#")]),t._v(" Class: Rewards")]),t._v(" "),a("p",[t._v("Rocket Pool Rewards")]),t._v(" "),a("h2",{attrs:{id:"constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructors"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),a("h3",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),a("p",[t._v("• "),a("strong",[t._v("new Rewards")]),t._v("("),a("code",[t._v("web3")]),t._v(", "),a("code",[t._v("contracts")]),t._v(")")]),t._v(" "),a("p",[t._v("Create a new Rewards instance.")]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("web3")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("default")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A valid Web3 instance")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("contracts")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/developers/api/js/Contracts.html"}},[a("code",[t._v("Contracts")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A Rocket Pool contract manager instance")])])])]),t._v(" "),a("h4",{attrs:{id:"defined-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defined-in"}},[t._v("#")]),t._v(" Defined in")]),t._v(" "),a("p",[t._v("rocketpool/rewards/claim-trusted-node.ts:19")]),t._v(" "),a("h2",{attrs:{id:"accessors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessors"}},[t._v("#")]),t._v(" Accessors")]),t._v(" "),a("h3",{attrs:{id:"rocketclaimtrustednode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketclaimtrustednode"}},[t._v("#")]),t._v(" rocketClaimTrustedNode")]),t._v(" "),a("p",[t._v("• "),a("code",[t._v("Private")]),t._v(" "),a("code",[t._v("get")]),t._v(" "),a("strong",[t._v("rocketClaimTrustedNode")]),t._v("(): "),a("code",[t._v("Promise")]),t._v("<"),a("code",[t._v("Contract")]),t._v(">")]),t._v(" "),a("p",[t._v("Private accessor use to retrieve the related contract")]),t._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("Promise")]),t._v("<"),a("code",[t._v("Contract")]),t._v(">")]),t._v(" "),a("p",[t._v("a Promise<Contract> with a web3.eth.contract instance of the rocketClaimTrustedNode contract")]),t._v(" "),a("h4",{attrs:{id:"defined-in-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defined-in-2"}},[t._v("#")]),t._v(" Defined in")]),t._v(" "),a("p",[t._v("rocketpool/rewards/claim-trusted-node.ts:25")]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("h3",{attrs:{id:"getclaimrewardsamount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getclaimrewardsamount"}},[t._v("#")]),t._v(" getClaimRewardsAmount")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("getClaimRewardsAmount")]),t._v("("),a("code",[t._v("address")]),t._v("): "),a("code",[t._v("Promise")]),t._v("<"),a("code",[t._v("string")]),t._v(">")]),t._v(" "),a("p",[t._v("Get claim rewards amount")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("params")])]),t._v(" address a string representing the node address")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("example")])]),t._v(" using Typescript")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x24fBeD7Ecd625D3f0FD19a6c9113DEd436172294"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" claimPossible "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rewards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("claimTrustedNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClaimRewardsAmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("address")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("string")])])])])]),t._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("Promise")]),t._v("<"),a("code",[t._v("string")]),t._v(">")]),t._v(" "),a("p",[t._v("a Promise<string> that resolves to a string representing the claim rewards amount in Wei")]),t._v(" "),a("h4",{attrs:{id:"defined-in-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defined-in-3"}},[t._v("#")]),t._v(" Defined in")]),t._v(" "),a("p",[t._v("rocketpool/rewards/claim-trusted-node.ts:40")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#claim"}},[t._v("#")]),t._v(" claim")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("claim")]),t._v("("),a("code",[t._v("options?")]),t._v(", "),a("code",[t._v("onConfirmation?")]),t._v("): "),a("code",[t._v("Promise")]),t._v("<"),a("code",[t._v("TransactionReceipt")]),t._v(">")]),t._v(" "),a("p",[t._v("Claim from a trusted node")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("example")])]),t._v(" using Typescript")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" trustedNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x421433c3f99529A704Ec2270E1A68fa66DD8bD79"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfrom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" trustedNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tgas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" txReceipt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rewards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("claimTrustedNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txReceipt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TransactionReceipt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" txReceipt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("options?")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("SendOptions")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("An optional object of web3.eth.Contract SendOptions")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("onConfirmation?")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/developers/api/interfaces/internal_/ConfirmationHandler.html"}},[a("code",[t._v("ConfirmationHandler")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("An optional confirmation handler object")])])])]),t._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[a("code",[t._v("Promise")]),t._v("<"),a("code",[t._v("TransactionReceipt")]),t._v(">")]),t._v(" "),a("p",[t._v("a Promise<TransactionReceipt> that resolves to a TransactionReceipt object representing the receipt of the transaction")]),t._v(" "),a("h4",{attrs:{id:"defined-in-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defined-in-4"}},[t._v("#")]),t._v(" Defined in")]),t._v(" "),a("p",[t._v("rocketpool/rewards/claim-trusted-node.ts:62")])])}),[],!1,null,null,null);a.default=r.exports}}]);