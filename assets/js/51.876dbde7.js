(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{440:function(t,a,s){"use strict";s.r(a);var e=s(21),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第三章-技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三章-技术"}},[t._v("#")]),t._v(" 第三章-技术")]),t._v(" "),s("p",[s("font",{attrs:{color:"red",size:"6"}},[t._v("欲穷千里目，更上一层楼")])],1),t._v(" "),s("h2",{attrs:{id:"supercomputer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supercomputer"}},[t._v("#")]),t._v(" supercomputer")]),t._v(" "),s("ul",[s("li",[t._v("定义：具有超强计算能力的计算机。")]),t._v(" "),s("li",[t._v("性能：计算能力用 FLOPS（floating-point operations per second） 描述")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/parallel_computing/3/supercomputer.JPG",width:"600",alt:"串行"}})]),t._v(" "),s("p",[t._v("更多超级计算机，请阅读 "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Supercomputer",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"processor-technology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processor-technology"}},[t._v("#")]),t._v(" processor technology")]),t._v(" "),s("p",[t._v("典型的处理器有：")]),t._v(" "),s("ul",[s("li",[t._v("CPU (Central processing unit) "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Central_processing_unit",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("GPU (General-Purpose Graphic Processing Unit) "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Graphics_processing_unit",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("TPU (Google Tensor Processing Unit) "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tensor_Processing_Unit",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("除了处理器，还需要了解一些指令集的知识，请参阅 "),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%8C%87%E4%BB%A4%E9%9B%86%E6%9E%B6%E6%A7%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"interconnect-and-network-technology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interconnect-and-network-technology"}},[t._v("#")]),t._v(" interconnect and network technology")]),t._v(" "),s("p",[t._v("网络可以用 network 这个词描述。通信可以用 communication 这个词描述。通信指的是计算机程序之间的通信，方法有多种，共享内存、socket等等。通信在这个章节更多的应该指的是网络通信。")]),t._v(" "),s("p",[t._v("通信对并行程序的性能影响巨大（甚至比计算能力和内存影响更大）：")]),t._v(" "),s("ul",[s("li",[t._v("网络通常比 CPU 慢很多")]),t._v(" "),s("li",[t._v("并行程序之间的通信是极常见的")]),t._v(" "),s("li",[t._v("同步是昂贵的，并且有可能随着服务器数量的增加同步代价成指数级增加")])]),t._v(" "),s("h3",{attrs:{id:"network-topology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network-topology"}},[t._v("#")]),t._v(" Network Topology")]),t._v(" "),s("p",[t._v("网络的设计需要考虑的四个因素：")]),t._v(" "),s("ul",[s("li",[t._v("Scalability，可扩展性")]),t._v(" "),s("li",[t._v("Performance，性能")]),t._v(" "),s("li",[t._v("Resilience，恢复能力")]),t._v(" "),s("li",[t._v("Cost，代价")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/parallel_computing/3/network.JPG",alt:"串行"}})]),t._v(" "),s("p",[t._v("不同类型网络拓扑图的指标：")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/parallel_computing/3/topology.JPG",alt:"串行"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Diameters (lantency)")]),t._v("，网络延迟，通过网络传输经过的节点个数量化此指标，越低表示通信经过的节点越少")]),t._v(" "),s("li",[s("strong",[t._v("Bisection (resilience)")]),t._v("，把一个网络分开成两个的能力，恢复力。越高表示恢复力越高")]),t._v(" "),s("li",[s("strong",[t._v("Links (cost)")]),t._v("，连接个数，也就是建立此网络拓扑图的代价。越低表示建立网络的代价越少")]),t._v(" "),s("li",[s("strong",[t._v("Degree (scalability)")]),t._v("，度数，可扩展性。越低表示扩展越容易")])]),t._v(" "),s("p",[t._v("用线性（Linear array）的网络拓扑结构来看待：网络延迟很高；如果一个节点出错，整个网络就断开了；构建此网络需要 P-1 个连接；线性结构的网络很容易扩展。线性的网络拓扑结构搭建简单，但是可靠性低、延迟高。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/parallel_computing/3/linear.png",width:"500",alt:"串行"}})]),t._v(" "),s("p",[t._v("用 2-D Mesh 的网络拓扑结构来看待：网络延迟较低；个别节点出问题不会影响整个网络的通信；构架此网络需要较多的连接个数；拓展性新的节点较难。2-D Mesh 网络拓扑结构比较适合用在矩阵计算上，能够被拓展到 3-D Mesh。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/parallel_computing/3/2dmesh.png",width:"300",alt:"串行"}})]),t._v(" "),s("p",[t._v("用 4-D Hypercube 的网络结构来看待：")]),t._v(" "),s("ul",[s("li",[t._v("低延迟，恢复能力强。但同时构建网络更复杂，网络的拓展性差")]),t._v(" "),s("li",[t._v("比较适合用在小型网络系统")]),t._v(" "),s("li",[t._v("每个节点都有一个编号，有4个二进制位表示，"),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msub",[s("mrow",[s("mi",[t._v("l")]),s("mi",[t._v("o")]),s("mi",[t._v("g")])],1),s("mn",[t._v("2")])],1),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("P")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mo",[t._v("=")]),s("mn",[t._v("4")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("{log}_2(P) = 4")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")])]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.207em"}},[s("span",{staticStyle:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("2")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2441em"}},[s("span")])])])])]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("4")])])])])])],1),t._v(" "),s("li",[t._v("每个二进制位可以翻转一次，因此延迟是 "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msub",[s("mrow",[s("mi",[t._v("l")]),s("mi",[t._v("o")]),s("mi",[t._v("g")])],1),s("mn",[t._v("2")])],1),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("P")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("{log}_2(P)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")])]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.207em"}},[s("span",{staticStyle:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("2")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2441em"}},[s("span")])])])])]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])],1)]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/parallel_computing/3/4dhypercube.png",alt:"串行"}})]),t._v(" "),s("p",[t._v("当前 supercomputer 开始用 "),s("a",{attrs:{href:"https://ieeexplore.ieee.org/document/4556717",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dragonfly topology"),s("OutboundLink")],1),t._v(" 网络拓扑结构。")]),t._v(" "),s("p",[t._v("从上述的几种典型结构来看，四种指标难以全都兼顾，需要针对某几个做权衡。这种 "),s("font",{attrs:{color:"red"}},[s("strong",[t._v("权衡")])]),t._v(" 的思想在计算机中应用非常广泛。")],1),t._v(" "),s("h3",{attrs:{id:"网络设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络设备"}},[t._v("#")]),t._v(" 网络设备")]),t._v(" "),s("p",[t._v("对比两种常用的网络设备（图较老，2018年图），"),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/InfiniBand",target:"_blank",rel:"noopener noreferrer"}},[t._v("InfiniBand"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BB%A5%E5%A4%AA%E7%BD%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ethernet"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/parallel_computing/3/network_device.JPG",alt:"串行"}})]),t._v(" "),s("h2",{attrs:{id:"io-storage-technology"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io-storage-technology"}},[t._v("#")]),t._v(" IO & storage technology")]),t._v(" "),s("p",[t._v("内存的架构如下图所示。越往上速度越快、空间越小、价格越贵；越往下，速度越慢、空间越大、价格越便宜。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"/images/parallel_computing/3/io_storage.png",width:"350",alt:"串行"}})]),t._v(" "),s("p",[t._v("并行文件系统："),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Lustre_(file_system)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lustre file system"),s("OutboundLink")],1),t._v(", MPI-IO")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Burst_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Burst Buffer"),s("OutboundLink")],1),t._v("：提升高性能计算(HPC)突发流量I/O性能、降低时延。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("对 computing 能力的追求是一直存在、且会持续下去的：")]),t._v(" "),s("p",[t._v("⭐️ 技术：CPU规模，分布式计算，新的处理器架构"),s("br"),t._v("\n⭐️ 优化：算法，数据管理，编译器"),s("br"),t._v("\n⭐️ 系统：网络拓扑系统，文件系统"),s("br")]),t._v(" "),s("p",[t._v("同时 "),s("strong",[t._v("Networks")]),t._v(" 和 "),s("strong",[t._v("IO")]),t._v(" 是提升算力（这里的算力用 "),s("strong",[t._v("FLOPS")]),t._v(" 衡量）所必须关注的事情。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://hpc.llnl.gov/training/tutorials/introduction-parallel-computing-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction parallel computing tutorial"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("台湾新竹清华大学 "),s("a",{attrs:{href:"https://ocw.nthu.edu.tw/ocw/index.php?page=course&cid=231",target:"_blank",rel:"noopener noreferrer"}},[t._v("平行程式"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);