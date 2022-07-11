(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{419:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[t._v("#")]),t._v(" storage")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/rocket-pool/rocketpool-go/storage"')]),t._v("\n")])])]),s("h2",{attrs:{id:"index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#func-confirmwithdrawaladdress"}},[t._v("func ConfirmWithdrawalAddress(rp *rocketpool.RocketPool, nodeAddress common.Address, opts *bind.TransactOpts) (common.Hash, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-estimateconfirmwithdrawaladdressgas"}},[t._v("func EstimateConfirmWithdrawalAddressGas(rp *rocketpool.RocketPool, nodeAddress common.Address, opts *bind.TransactOpts) (rocketpool.GasInfo, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-estimatesetwithdrawaladdressgas"}},[t._v("func EstimateSetWithdrawalAddressGas(rp *rocketpool.RocketPool, nodeAddress common.Address, withdrawalAddress common.Address, confirm bool, opts *bind.TransactOpts) (rocketpool.GasInfo, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-getnodependingwithdrawaladdress"}},[t._v("func GetNodePendingWithdrawalAddress(rp *rocketpool.RocketPool, nodeAddress common.Address, opts *bind.CallOpts) (common.Address, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-getnodewithdrawaladdress"}},[t._v("func GetNodeWithdrawalAddress(rp *rocketpool.RocketPool, nodeAddress common.Address, opts *bind.CallOpts) (common.Address, error)")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#func-setwithdrawaladdress"}},[t._v("func SetWithdrawalAddress(rp *rocketpool.RocketPool, nodeAddress common.Address, withdrawalAddress common.Address, confirm bool, opts *bind.TransactOpts) (common.Hash, error)")])])]),t._v(" "),s("h2",{attrs:{id:"func-confirmwithdrawaladdress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-confirmwithdrawaladdress"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/storage/rocket-storage.go#L54",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfirmWithdrawalAddress"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfirmWithdrawalAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RocketPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodeAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Set a node's withdrawal address")]),t._v(" "),s("h2",{attrs:{id:"func-estimateconfirmwithdrawaladdressgas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-estimateconfirmwithdrawaladdressgas"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/storage/rocket-storage.go#L48",target:"_blank",rel:"noopener noreferrer"}},[t._v("EstimateConfirmWithdrawalAddressGas"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EstimateConfirmWithdrawalAddressGas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RocketPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodeAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GasInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Estimate the gas of ConfirmWithdrawalAddress")]),t._v(" "),s("h2",{attrs:{id:"func-estimatesetwithdrawaladdressgas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-estimatesetwithdrawaladdressgas"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/storage/rocket-storage.go#L32",target:"_blank",rel:"noopener noreferrer"}},[t._v("EstimateSetWithdrawalAddressGas"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EstimateSetWithdrawalAddressGas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RocketPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodeAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withdrawalAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" confirm "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GasInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Estimate the gas of SetWithdrawalAddress")]),t._v(" "),s("h2",{attrs:{id:"func-getnodependingwithdrawaladdress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-getnodependingwithdrawaladdress"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/storage/rocket-storage.go#L22",target:"_blank",rel:"noopener noreferrer"}},[t._v("GetNodePendingWithdrawalAddress"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNodePendingWithdrawalAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RocketPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodeAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CallOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Get a node's pending withdrawal address")]),t._v(" "),s("h2",{attrs:{id:"func-getnodewithdrawaladdress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-getnodewithdrawaladdress"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/storage/rocket-storage.go#L12",target:"_blank",rel:"noopener noreferrer"}},[t._v("GetNodeWithdrawalAddress"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNodeWithdrawalAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RocketPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodeAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CallOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Get a node's withdrawal address")]),t._v(" "),s("h2",{attrs:{id:"func-setwithdrawaladdress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#func-setwithdrawaladdress"}},[t._v("#")]),t._v(" func "),s("a",{attrs:{href:"https://github.com/rocket-pool/rocketpool-go/blob/release/storage/rocket-storage.go#L38",target:"_blank",rel:"noopener noreferrer"}},[t._v("SetWithdrawalAddress"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetWithdrawalAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rocketpool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RocketPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodeAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withdrawalAddress common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" confirm "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TransactOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Set a node's withdrawal address")])])}),[],!1,null,null,null);s.default=e.exports}}]);