(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{343:function(e,t,a){e.exports=a.p+"assets/img/docker-firewall.c18c369e.png"},471:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"preparing-a-mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-a-mac"}},[e._v("#")]),e._v(" Preparing a Mac")]),e._v(" "),t("p",[e._v("Before installing Rocket Pool, there are a few checks you should do to make sure your system is compatible and will work correctly.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),t("p",[e._v("We strongly encourage you to create a dedicated machine for running a Rocket Pool node.\nRunning a node on a general-use machine, such as your daily work desktop, presents extra security risks that may compromise your wallet and result in the theft of your coins.")]),e._v(" "),t("p",[t("strong",[e._v("For maximum safety, please build a new machine that is dedicated exclusively to running a node.")])])]),e._v(" "),t("h2",{attrs:{id:"system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System Requirements")]),e._v(" "),t("p",[e._v("Below is a brief description of the software and hardware requirements that a Rocket Pool node requires.\nThis guide assumes that you already have your machine physically built, and the operating system installed.")]),e._v(" "),t("h3",{attrs:{id:"supported-operating-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-operating-systems"}},[e._v("#")]),e._v(" Supported Operating Systems")]),e._v(" "),t("p",[e._v("Rocket Pool recommends you use the latest version of macOS for your hardware.")]),e._v(" "),t("h3",{attrs:{id:"macos-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-support"}},[e._v("#")]),e._v(" macOS Support")]),e._v(" "),t("p",[e._v("You will need to install the following pre-requisites:")]),e._v(" "),t("p",[t("code",[e._v("Docker Desktop")]),e._v(" by "),t("a",{attrs:{href:"https://www.docker.com/products/docker-desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("downloading the binary"),t("OutboundLink")],1),e._v(" installer from the website and dragging it to your Applications folder.")]),e._v(" "),t("p",[t("code",[e._v("XCode Command Line Tools")]),e._v(" can be downloaded by opening up the Terminal application (located in /Applications/Utilties) and executing the following command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("xcode-select --install\n")])])]),t("p",[e._v("We highly recommend using "),t("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),t("OutboundLink")],1),e._v(" as your package manager for Mac. It allows you to install packages easily using the "),t("code",[e._v("brew")]),e._v(" command.")]),e._v(" "),t("p",[e._v("For example, to install "),t("code",[e._v("wget")]),e._v(" using Homebrew execute the following command in the Terminal:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("brew install wget\n")])])]),t("p",[e._v("Please ensure your Firewall (Settings -> Security & Privacy -> Firewall) is turned on and Docker Desktop is added to the list of applications allowing incoming connections.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(343),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"hardware-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware-requirements"}},[e._v("#")]),e._v(" Hardware Requirements")]),e._v(" "),t("p",[e._v("The hardware requirements for a node depend largely on which Execution (ETH1) and Consensus (ETH2) clients you decide to run.\nAs shown in "),t("RouterLink",{attrs:{to:"/guides/node/local/hardware.html"}},[e._v("the hardware guide")]),e._v(", there is a wide range of possible configurations that work well.\nHowever, for the sake of completeness, we have assembled the following hardware profiles:")],1),e._v(" "),t("h4",{attrs:{id:"low-power-full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#low-power-full-node"}},[e._v("#")]),e._v(" Low-Power Full Node")]),e._v(" "),t("ul",[t("li",[e._v("CPU: Quad-core 1.6+ GHz")]),e._v(" "),t("li",[e._v("RAM: 8 GB DDR4 2400 MHz")]),e._v(" "),t("li",[e._v("SSD: 1 TB*, 15k Read IOPS, 5k Write IOPS**")]),e._v(" "),t("li",[e._v("Network: 10+ Mbps, 1.5+ TB monthly data cap")]),e._v(" "),t("li",[e._v("ETH1: Geth (in low-cache mode), Infura, Pocket")]),e._v(" "),t("li",[e._v("ETH2: Nimbus, Prysm")])]),e._v(" "),t("h4",{attrs:{id:"typical-full-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typical-full-node"}},[e._v("#")]),e._v(" Typical Full Node")]),e._v(" "),t("ul",[t("li",[e._v("CPU: Quad-core, 2.6+ GHz")]),e._v(" "),t("li",[e._v("RAM: 16 GB DDR4 3200 MHz")]),e._v(" "),t("li",[e._v("SSD: 1 TB*, 15k Read IOPS, 5k Write IOPS**")]),e._v(" "),t("li",[e._v("Network: 25+ Mbps, 1.5+ TB monthly data cap")]),e._v(" "),t("li",[e._v("ETH1: Any")]),e._v(" "),t("li",[e._v("ETH2: Any")])]),e._v(" "),t("p",[t("em",[e._v("* Note that for mainnet, at the time of this article, 1 TB is sufficient but "),t("strong",[e._v("2 TB is recommended")]),e._v(".\nThe eth1 blockchain "),t("a",{attrs:{href:"https://ycharts.com/indicators/ethereum_chain_full_sync_data_size",target:"_blank",rel:"noopener noreferrer"}},[e._v("grows quickly"),t("OutboundLink")],1),e._v(", so 2 TB will offer better future-proofing.\nThe larger your storage, the longer you can go between needing to reclaim space by pruning.")])]),e._v(" "),t("h3",{attrs:{id:"installing-and-using-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-and-using-ssh"}},[e._v("#")]),e._v(" Installing and Using SSH")]),e._v(" "),t("p",[e._v("SSH should already be installed with macOS.")]),e._v(" "),t("h3",{attrs:{id:"pre-installation-system-checks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-installation-system-checks"}},[e._v("#")]),e._v(" Pre-installation System Checks")]),e._v(" "),t("p",[e._v("Before installing Rocket Pool, please review the following checklist:")]),e._v(" "),t("ul",[t("li",[e._v("Your system is fully built, powers on, and can boot into the operating system.")]),e._v(" "),t("li",[e._v("You will not do any other activity on the system, such as browsing the Internet, checking email, or playing games.")]),e._v(" "),t("li",[e._v("You have a macOS operating system installed.")]),e._v(" "),t("li",[e._v("Your user account has root / administrator privileges.")]),e._v(" "),t("li",[e._v("You have an SSD that meets the performance requirements.")]),e._v(" "),t("li",[e._v("Your SSD is mounted on your file system.")]),e._v(" "),t("li",[e._v("You have at least 800 GB of space free for the initial ETH1 and ETH2 syncing process.")]),e._v(" "),t("li",[e._v("If your ISP caps your data, it is more than 1.5 TB per month.")])]),e._v(" "),t("p",[e._v("If you have checked and confirmed all of these items, then you are ready to install Rocket Pool and begin running a node!\nMove on to the "),t("RouterLink",{attrs:{to:"/guides/node/eth-clients.html"}},[e._v("Choosing your ETH Clients")]),e._v(" section.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);