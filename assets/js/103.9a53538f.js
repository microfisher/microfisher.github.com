(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{493:function(e,t,r){"use strict";r.r(t);var o=r(0),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"selecting-a-hosting-provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#selecting-a-hosting-provider"}},[e._v("#")]),e._v(" Selecting a Hosting Provider")]),e._v(" "),t("p",[e._v("If you've arrived at this section, then you would like to run a Rocket Pool node but can't set one up locally at your home; you require a "),t("strong",[e._v("virtual private server (VPS)")]),e._v(" hosted on the cloud.\nThere are several different services available that can provide such a machine, and they come in two different flavors: VPS providers and public cloud providers.")]),e._v(" "),t("p",[e._v("Choosing the correct one can be difficult, and understanding the differences between them is key.\nIn this guide, we'll shine some light onto the distinction and list a few of the services that other Rocket Pool users have leveraged in the past to help you navigate through your options.")]),e._v(" "),t("h2",{attrs:{id:"traditional-vps-hosting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#traditional-vps-hosting"}},[e._v("#")]),e._v(" Traditional VPS Hosting")]),e._v(" "),t("p",[e._v("In a nutshell, a virtual private server is a single instance of a virtual machine that resides on a larger physical machine.\nThey tend to be a relatively cheap option, and they are less-frequently employed than the ubiquitous cloud platforms so they tend to contribute more towards the Ethereum network's decentralization.")]),e._v(" "),t("p",[e._v("However, they rarely have high-availability support; if the physical server goes down, it's likely that your VPS hosted on it will go down as well.\nAlso, they have a fixed resource footprint; it's usually not possible to increase or decrease resources like CPU and RAM on demand.")]),e._v(" "),t("p",[e._v("Some well-known VPS providers that Rocket Pool node operators have used include "),t("a",{attrs:{href:"https://www.ovh.com/world/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OVH"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://www.leaseweb.us/cloud/virtual-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Leaseweb"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://contabo.com/en/vps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contabo"),t("OutboundLink")],1),e._v(", and "),t("a",{attrs:{href:"https://www.netcup.eu/vserver/vps.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netcup"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"cloud-hosting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloud-hosting"}},[e._v("#")]),e._v(" Cloud Hosting")]),e._v(" "),t("p",[e._v("Cloud hosting refers to virtual machines that are split across on a distributed network of multiple servers, rather than being hosted on a single physical machine.\nIf one of the hosting machines fails, the others can seamlessly take over for it so availability and reliability tend to be extremely high on these platforms.\nThey also tend to offer flexible resource options; it's relatively simple to add more CPU, RAM, or disk space on demand.")]),e._v(" "),t("p",[e._v("Due to these extra benefits, cloud-based servers tend to be more expensive than VPS solutions.\nThey're also very popular platforms, so using them generally reduces the overall decentralization of the Ethereum network.")]),e._v(" "),t("p",[e._v("The 3 primary cloud providers are "),t("a",{attrs:{href:"https://aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Web Services (AWS)"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://azure.microsoft.com/en-us/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure"),t("OutboundLink")],1),e._v(", and "),t("a",{attrs:{href:"https://cloud.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Platform (GCP)"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"key-considerations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-considerations"}},[e._v("#")]),e._v(" Key Considerations")]),e._v(" "),t("h3",{attrs:{id:"price"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#price"}},[e._v("#")]),e._v(" Price")]),e._v(" "),t("p",[e._v("Cloud hosting solutions are usually a safer choice if cost is not a priority.\nThe section below has a more detailed breakdown of cost estimates but here is a general comparison between a VPS option and a cloud option:")]),e._v(" "),t("ul",[t("li",[e._v("AWS t2.large + 1TB EBS storage: $200/mo")]),e._v(" "),t("li",[e._v("OVH Dedicated Server: $120/mo")]),e._v(" "),t("li",[e._v("Contabo VPS: $40/mo")])]),e._v(" "),t("h3",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),t("p",[e._v("The recommended system requirement for a hosted node are the same as the local options:")]),e._v(" "),t("ul",[t("li",[e._v("4 CPU Cores")]),e._v(" "),t("li",[e._v("16GB of RAM (8 if using Nimbus)")]),e._v(" "),t("li",[e._v("1-2 TB SSD Storage")])]),e._v(" "),t("p",[e._v("When choosing a hosting provider, keep in mind that there is a tendency for the cheaper VPS options oversubscribe their servers which can result in reduced performance overall.")]),e._v(" "),t("p",[e._v("Here are a few simple tests you can run to assess your server's performance:")]),e._v(" "),t("h4",{attrs:{id:"disk-i-o"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disk-i-o"}},[e._v("#")]),e._v(" Disk I/O")]),e._v(" "),t("p",[t("strong",[e._v("Simple Write Speed Test:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync;rm test\n")])])]),t("p",[e._v("This commands writes out a 1GB file of 0s to test write speed.\nResults can vary greatly between providers or even between systems hosted by the same provider.")]),e._v(" "),t("p",[e._v("Comparing Contabo and Netcup VPS's during the beta returned the following results:")]),e._v(" "),t("ul",[t("li",[e._v("Netcup: 700 MB/s")]),e._v(" "),t("li",[e._v("Contabo: 169 MB/s")])]),e._v(" "),t("p",[t("strong",[e._v("fio (flexible I/O tester)")]),e._v("\nFor more in-depth testing you can use a tool like fio.\nIt is officially available in the Ubuntu repo so it should be generally be considered safe to install.\nAs always, being cautious about installing any unnecessary packages is wise.")]),e._v(" "),t("p",[e._v("Install fio:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo apt install fio\n")])])]),t("p",[e._v("Run Test:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75\n")])])]),t("p",[e._v("The test will take a few minutes and will create a 4GB test file testing both reads and writes.\nResults will show performance for random read and write iops.")]),e._v(" "),t("p",[e._v("Using the same two VPS's the results mirror the previous test:")]),e._v(" "),t("ul",[t("li",[e._v("Netcup:\n"),t("ul",[t("li",[e._v("read:  IOPS=21.9k")]),e._v(" "),t("li",[e._v("write: IOPS=7307")])])]),e._v(" "),t("li",[e._v("Contabo:\n"),t("ul",[t("li",[e._v("read:  IOPS=3095")]),e._v(" "),t("li",[e._v("write: IOPS=1034")])])])]),e._v(" "),t("p",[e._v("While both systems will likely run Rocket Pool without issue, you should look for performance of "),t("strong",[e._v("at least 5000 read IOPS and 1700 write IOPS")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"cpu-performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-performance"}},[e._v("#")]),e._v(" CPU Performance")]),e._v(" "),t("p",[e._v("There are a number of benchmark tools available to install via your servers package manager.\nOne of the most common is "),t("code",[e._v("sysbench")]),e._v(".")]),e._v(" "),t("p",[e._v("Most hosted server options should have far more CPU resources than necessary so unless you are noticing performance issues, its unnecessary to install and run any benchmark packages.")]),e._v(" "),t("h2",{attrs:{id:"provider-comparison-placeholders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provider-comparison-placeholders"}},[e._v("#")]),e._v(" Provider Comparison (Placeholders)")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Provider")]),e._v(" "),t("th",[e._v("Model")]),e._v(" "),t("th",[e._v("CPU")]),e._v(" "),t("th",[e._v("RAM (GB)")]),e._v(" "),t("th",[e._v("SSD Storage (GB)")]),e._v(" "),t("th",[e._v("Price (Month) USD")]),e._v(" "),t("th",[e._v("Type")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Contabo")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://contabo.com/en/vps/vps-xl-ssd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VPS XL SSD"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("10")]),e._v(" "),t("td",[e._v("60")]),e._v(" "),t("td",[e._v("1600")]),e._v(" "),t("td",[e._v("$35")]),e._v(" "),t("td",[e._v("VPS")])]),e._v(" "),t("tr",[t("td",[e._v("Netcup")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.netcup.eu/bestellen/produkt.php?produkt=2604",target:"_blank",rel:"noopener noreferrer"}},[e._v("VPS 6000 G9"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("12")]),e._v(" "),t("td",[e._v("48")]),e._v(" "),t("td",[e._v("1200")]),e._v(" "),t("td",[e._v("$35")]),e._v(" "),t("td",[e._v("VPS")])]),e._v(" "),t("tr",[t("td",[e._v("Hetzner")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.hetzner.com/cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("CPX41"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("8")]),e._v(" "),t("td",[e._v("16")]),e._v(" "),t("td",[e._v("1210*")]),e._v(" "),t("td",[e._v("$64")]),e._v(" "),t("td",[e._v("VPS")])]),e._v(" "),t("tr",[t("td",[e._v("OVH")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.ovhcloud.com/en/bare-metal/rise/rise-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rise-1"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("4")]),e._v(" "),t("td",[e._v("32")]),e._v(" "),t("td",[e._v("2000*")]),e._v(" "),t("td",[e._v("$120")]),e._v(" "),t("td",[e._v("Dedicated")])]),e._v(" "),t("tr",[t("td",[e._v("AWS")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://aws.amazon.com/ec2/instance-types/t2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("t2.large"),t("OutboundLink")],1)]),e._v(" "),t("td",[e._v("2")]),e._v(" "),t("td",[e._v("8")]),e._v(" "),t("td",[e._v("1000*")]),e._v(" "),t("td",[e._v("$200")]),e._v(" "),t("td",[e._v("Cloud")])])])]),e._v(" "),t("p",[t("em",[e._v("* Additional storage needs to be configured when ordering")])])])}),[],!1,null,null,null);t.default=a.exports}}]);