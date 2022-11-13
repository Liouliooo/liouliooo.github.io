(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{425:function(e,r,t){"use strict";t.r(r);var n=t(21),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"调参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调参"}},[e._v("#")]),e._v(" 调参")]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("选取一个方向")]),e._v(" "),t("ul",[t("li",[t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("数据")])],1),e._v(" "),t("li",[t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("算法")])],1),e._v(" "),t("li",[t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("调参")])],1),e._v(" "),t("li",[t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("模型集成")])],1)])]),e._v(" "),t("li",[t("p",[e._v("在某一个方向里选取一种方法")])]),e._v(" "),t("li",[t("p",[e._v("在选取的方法中选取一件事情去尝试")])]),e._v(" "),t("li",[t("p",[e._v("比较结果，如果性能有提升，则保留")])]),e._v(" "),t("li",[t("p",[e._v("不断重复")])]),e._v(" "),t("li",[t("p",[t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("从上往下，效果提升越来越小")])],1)])]),e._v(" "),t("p",[e._v("原文网址："),t("a",{attrs:{href:"https://machinelearningmastery.com/improve-deep-learning-performance/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Improve Deep Learning Performance"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("中文翻译："),t("a",{attrs:{href:"https://blog.csdn.net/han_xiaoyang/article/details/52654879",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何提高深度学习（和机器学习）的性能"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"可参考资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可参考资源"}},[e._v("#")]),e._v(" 可参考资源")]),e._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ.html"}},[e._v("Neural Network FAQ")])],1)]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/grid-search-hyperparameters-deep-learning-models-python-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Grid Search Hyperparameters for Deep Learning Models in Python With Keras"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://lamda.nju.edu.cn/weixs/project/CNNTricks/CNNTricks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Must Know Tips/Tricks in Deep Neural Networks"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://stackoverflow.com/questions/37020754/how-to-increase-validation-accuracy-with-deep-neural-net",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to increase validation accuracy with deep neural net?"),t("OutboundLink")],1)])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"参数调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数调优"}},[e._v("#")]),e._v(" 参数调优")]),e._v(" "),t("h3",{attrs:{id:"_1-通过数据提升性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过数据提升性能"}},[e._v("#")]),e._v(" 1. 通过数据提升性能")]),e._v(" "),t("p",[e._v("(1) 获取更多的数据")]),e._v(" "),t("ul",[t("li",[e._v("获得最好的数据")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.edge.org/response-detail/26587",target:"_blank",rel:"noopener noreferrer"}},[e._v("Datasets Over Algorithms"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(2) 创造更多的数据")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("如果你的数据是数值型向量，可以随机构造已有向量的修改版本")])]),e._v(" "),t("li",[t("p",[e._v("如果你的数据是图片，可以随机构造已有图片的修改版本(平移、截取、旋转等)")])]),e._v(" "),t("li",[t("p",[e._v("如果你的数据是文本，类似的操作……")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/image-augmentation-deep-learning-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Image Augmentation for Deep Learning With Keras"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ3.html#A_jitter"}},[e._v("What is jitter? (Training with noise)")])],1),e._v(" "),t("p",[e._v("(3) 重放缩你的数据")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("归一化到0和1的区间")])]),e._v(" "),t("li",[t("p",[e._v("重放缩到－1和1的区间")])]),e._v(" "),t("li",[t("p",[e._v("标准化（标准化数据使之成为零均值，单位标准差）")])])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ2.html#A_std"}},[e._v("Should I standardize the input variables (column vectors)?")])],1),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/prepare-data-machine-learning-python-scikit-learn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Prepare Your Data For Machine Learning in Python with Scikit-Learn"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(4) 转化你的数据")]),e._v(" "),t("p",[t("strong",[e._v("猜测每一列数据的单变量分布：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("列数据看起来像偏斜的高斯分布吗？考虑用Box-Cox变换调整偏态")])]),e._v(" "),t("li",[t("p",[e._v("列数据看起来像指数分布吗？考虑用对数变换")])]),e._v(" "),t("li",[t("p",[e._v("列数据看起来有一些特征，但是它们被一些明显的东西遮盖了，尝试取平方或者开平方根来转换数据")])]),e._v(" "),t("li",[t("p",[e._v("你能离散化一个特征或者以某种方式组合特征，来更好地突出一些特征吗？")])])]),e._v(" "),t("p",[t("strong",[e._v("依靠你的直觉，尝试以下方法：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("你能利用类似PCA的投影方法来预处理数据吗？")])]),e._v(" "),t("li",[t("p",[e._v("你能综合多维特征至一个单一数值(特征)吗？")])]),e._v(" "),t("li",[t("p",[e._v("你能用一个新的布尔标签去发现问题中存在一些有趣的方面吗？")])]),e._v(" "),t("li",[t("p",[e._v("你能用其他方法探索出目前场景下的其他特殊结构吗？")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/how-to-define-your-machine-learning-problem/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Define Your Machine Learning Problem"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discover Feature Engineering, How to Engineer Features and How to Get Good at It"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/prepare-data-machine-learning-python-scikit-learn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Prepare Your Data For Machine Learning in Python with Scikit-Learn"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(5) 特征选取")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("或许你利用更少的特征就能达到同等甚至更好的性能。而且，这将使模型变得更快！")])]),e._v(" "),t("li",[t("p",[e._v("或许所有的特征选择方法都剔除了同样的特征子集。很好，这些方法在没用的特征上达成了一致")])]),e._v(" "),t("li",[t("p",[e._v("或许筛选过后的特征子集，能带给特征工程的新思路")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/an-introduction-to-feature-selection/",target:"_blank",rel:"noopener noreferrer"}},[e._v("An Introduction to Feature Selection"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/feature-selection-machine-learning-python/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feature Selection For Machine Learning in Python"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(6) 重架构你的问题")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("看看能够在一个时间窗（时间周期）内对已有的特征/数据做一个合并")])]),e._v(" "),t("li",[t("p",[e._v("或许你的分类问题可以成为一个回归问题(有时候是回归到分类)")])]),e._v(" "),t("li",[t("p",[e._v("或许你的二元输出可以变成softmax输出")])]),e._v(" "),t("li",[t("p",[e._v("或许你可以转而对子问题进行建模")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/how-to-define-your-machine-learning-problem/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Define Your Machine Learning Problem"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_2-通过算法提升性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过算法提升性能"}},[e._v("#")]),e._v(" 2. 通过算法提升性能")]),e._v(" "),t("p",[e._v("(1) 对算法进行抽样调查")]),e._v(" "),t("p",[t("strong",[e._v("原则：Maybe your chosen algorithms is not the best for your problem")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/No_free_lunch_theorem",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("no free lunch theorem")]),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[t("p",[e._v("首先尝试评估一些线性方法，例如逻辑回归（logistic regression）和线性判别分析（linear discriminate analysis）")])]),e._v(" "),t("li",[t("p",[e._v("评估一些树类模型，例如CART， 随机森林（Random Forest）和Gradient Boosting")])]),e._v(" "),t("li",[t("p",[e._v("评估一些实例方法，例如支持向量机（SVM）和K-近邻（KNN）")])]),e._v(" "),t("li",[t("p",[e._v("评估一些其他的神经网络方法，例如LVQ, MLP, CNN, LSTM, hybrids等")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/a-data-driven-approach-to-machine-learning/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Data-Driven Approach to Machine Learning"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/why-you-should-be-spot-checking-algorithms-on-your-machine-learning-problems/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why you should be Spot-Checking Algorithms on your Machine Learning Problems"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/spot-check-classification-machine-learning-algorithms-python-scikit-learn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spot-Check Classification Machine Learning Algorithms in Python with scikit-learn"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(2) 借鉴已有文献")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/how-to-research-a-machine-learning-algorithm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Research a Machine Learning Algorithm"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"http://scholar.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Scholar"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(3) 重采样方法")]),e._v(" "),t("p",[t("strong",[e._v("深度学习模型在训练阶段非常缓慢，无法用一些常用的方法，例如k层交叉验证，去估计模型的性能：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("或许你在使用一个简单的训练集／测试集分割（保持训练集和测试集分布一致，符合"),t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("层化原则(stratification)")]),e._v("），这是常规套路。如果是这样，你需要确保这种分割针对你的问题具有代表性。单变量统计和可视化是一个好的开始")],1)]),e._v(" "),t("li",[t("p",[e._v("或许你能利用硬件来加速估计的过程。例如，如果你有集群或者AWS云端服务（Amazon Web Services）账号，你可以并行地训练n个模型，然后获取结果的均值和标准差来得到更鲁棒的估计")])]),e._v(" "),t("li",[t("p",[e._v("或许你可以利用hold-out验证方法来了解模型在训练后的性能（这在早停法early stopping中很有用，后面会讲到）")])]),e._v(" "),t("li",[t("p",[e._v("或许你可以先隐藏一个完全没用过的验证集，等到你已经完成模型选择之后再使用它")])])]),e._v(" "),t("p",[t("strong",[e._v("让数据集变得更小，以及使用更强的重采样方法：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("有些情况下你会发现在训练集的一部分样本上训练得到的模型的性能，和在整个数据集上训练得到的模型的性能有很强的相关性。也许你可以"),t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("先在小数据集上完成模型选择和参数调优，然后再将最终的方法扩展到全部数据集上")])],1)]),e._v(" "),t("li",[t("p",[e._v("或许你可以用某些方式限制数据集，只取一部分样本，然后用它进行全部的建模过程"),t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("（如何对数据进行采样，使用采集的样本作为全部训练集）")])],1)]),e._v(" "),t("li",[t("p",[e._v("先创造一些和原始数据很相似的数据（包括特征空间和数据分布，创造的数据应力求简单，并和原始数据任务相同），然后用创造的数据先训练一个基本模型，然后将得到的模型应用到原始数据")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/evaluate-performance-deep-learning-models-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Evaluate the Performance Of Deep Learning Models in Keras"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/evaluate-performance-machine-learning-algorithms-python-using-resampling/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Evaluate the Performance of Machine Learning Algorithms in Python using Resampling"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_3-通过算法调参提升性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过算法调参提升性能"}},[e._v("#")]),e._v(" 3. 通过算法调参提升性能")]),e._v(" "),t("p",[t("strong",[e._v("关于超参数优化请参阅博文：")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/grid-search-hyperparameters-deep-learning-models-python-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Grid Search Hyperparameters for Deep Learning Models in Python With Keras"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(1) 诊断（Diagnostics）")]),e._v(" "),t("p",[t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("你的模型是过拟合还是欠拟合？永远牢记这个问题。永远！")])],1),e._v(" "),t("p",[t("strong",[e._v("模型总是会遇到过拟合或者欠拟合，只是程度不同罢了。一个快速了解模型学习行为的方法是，在每个周期，评估模型在训练集和验证集上的表现：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("如果训练集上的模型总是优于验证集上的模型，你可能遇到了过拟合，你可以使用诸如正则化的方法")])]),e._v(" "),t("li",[t("p",[e._v("如果训练集和验证集上的模型都很差，你可能遇到了欠拟合，你可以提升网络的容量，以及训练更多或者更久")])]),e._v(" "),t("li",[t("p",[e._v("如果有一个拐点存在，在那之后训练集上的模型开始优于验证集上的模型，你可能需要使用早停法")])])]),e._v(" "),t("p",[t("strong",[e._v("另一个有用的诊断是网络模型判定对和判定错的观察值：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("对于难以训练的样本，或许你需要更多的数据")])]),e._v(" "),t("li",[t("p",[e._v("或许你应该剔除训练集中易于建模的多余的样本")])]),e._v(" "),t("li",[t("p",[e._v("也许可以尝试对训练集划分不同的区域，在特定区域中用更专长的模型")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/display-deep-learning-model-training-history-in-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Display Deep Learning Model Training History in Keras"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Overfitting and Underfitting With Machine Learning Algorithms"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(2) 权重初始化（Weight Initialization）")]),e._v(" "),t("p",[t("strong",[e._v("经验法则通常是：用小的随机数进行初始化")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("尝试所有不同的初始化方法，考察是否有一种方法在其他情况不变的情况下(效果)更优")])]),e._v(" "),t("li",[t("p",[e._v("尝试用无监督的方法，例如自动编码（autoencoder），来进行预先学习")])]),e._v(" "),t("li",[t("p",[e._v("尝试使用一个已经存在的模型，只是针对你的问题重新训练输入层和输出层（迁移学习transfer learning）")])])]),e._v(" "),t("p",[t("strong",[e._v("注意一点：改变权重初始化方法和激活函数，甚至优化函数/损失函数紧密相关")])]),e._v(" "),t("p",[t("a",{attrs:{href:"http://deepdish.io/2015/02/24/network-initialization/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Initialization of deep networks"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(3) 学习速率（Learning Rate）")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("实验很大和很小的学习率")])]),e._v(" "),t("li",[t("p",[e._v("格点搜索文献里常见的学习速率值，考察你能学习多深的网络")])]),e._v(" "),t("li",[t("p",[e._v("尝试随周期递减的学习率")])]),e._v(" "),t("li",[t("p",[e._v("尝试经过固定周期数后按比例减小的学习率")])]),e._v(" "),t("li",[t("p",[e._v("尝试增加一个动量项（momentum term），然后对学习速率和动量同时进行格点搜索")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/using-learning-rate-schedules-deep-learning-models-python-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Learning Rate Schedules for Deep Learning Models in Python with Keras"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ2.html#A_learn_rate"}},[e._v("What learning rate should be used for backprop?")])],1),e._v(" "),t("p",[e._v("(4) 激活函数")]),e._v(" "),t("ul",[t("li",[e._v("尝试全部三种激活函数（ReLU，Sigmoid，Tanh等），并且重缩放你的数据以满足激活函数的边界：")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ2.html#A_act"}},[e._v("Why use activation functions?")])],1),e._v(" "),t("p",[e._v("(5) 网络拓扑（Network Topology）")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("尝试一个隐藏层和许多神经元（广度模型）")])]),e._v(" "),t("li",[t("p",[e._v("尝试一个深的网络，但是每层只有很少的神经元（深度模型）")])]),e._v(" "),t("li",[t("p",[e._v("尝试上述两种方法的组合")])]),e._v(" "),t("li",[t("p",[e._v("借鉴研究问题与你的类似的论文里面的结构")])]),e._v(" "),t("li",[t("p",[e._v("尝试拓扑模式（扇出fan out然后扇入fan in）和书籍论文里的经验法则")])])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ3.html#A_hl"}},[e._v("How many hidden layers should I use?")])],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ3.html#A_hu"}},[e._v("How many hidden units should I use?")])],1),e._v(" "),t("p",[e._v("(6) 批次和周期（Batches and Epochs）")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("尝试选取与训练数据同大小的batch size，但注意一下内存（批次学习batch learning）")])]),e._v(" "),t("li",[t("p",[e._v("尝试选取1作为batch size（在线学习online learning）")])]),e._v(" "),t("li",[t("p",[e._v("尝试用格点搜索不同的小的batch size（4，8，16，32，…）")])]),e._v(" "),t("li",[t("p",[e._v("分别尝试训练少量周期和大量周期")])])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ2.html#A_styles"}},[e._v("What are batch, incremental, on-line … learning?")])],1),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.quora.com/Intuitively-how-does-mini-batch-size-affect-the-performance-of-stochastic-gradient-descent",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intuitively, how does mini-batch size affect the performance of (stochastic) gradient descent?"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(7) 正则化")]),e._v(" "),t("p",[t("strong",[e._v("可以从dropout方法开始：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("格点搜索不同的丢失比例")])]),e._v(" "),t("li",[t("p",[e._v("分别在输入，隐藏层和输出层中试验 dropout 方法")])]),e._v(" "),t("li",[t("p",[e._v("dropout方法也有一些拓展，比如你也可以尝试\n"),t("a",{attrs:{href:"http://cs.nyu.edu/~wanli/dropc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("drop connect"),t("OutboundLink")],1),e._v(" 方法")])])]),e._v(" "),t("p",[t("strong",[e._v("可以尝试其他更传统的神经网络正则化方法：")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("权重衰减（Weight decay）去惩罚大的权重")])]),e._v(" "),t("li",[t("p",[e._v("激活约束（Activation constraint）去惩罚大的激活值")])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/dropout-regularization-deep-learning-models-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dropout Regularization in Deep Learning Models With Keras"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ3.html#A_decay"}},[e._v("What is Weight Decay?")])],1),e._v(" "),t("p",[t("font",{attrs:{color:"#ff0000",size:"3"}},[e._v("(8) 优化和损失\n")])],1),e._v(" "),t("p",[t("a",{attrs:{href:"http://sebastianruder.com/optimizing-gradient-descent/",target:"_blank",rel:"noopener noreferrer"}},[t("font",{attrs:{color:"#ff0000",size:"3"}},[t("strong",[e._v("An overview of gradient descent optimization algorithms")])]),t("OutboundLink")],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ2.html#A_numanal"}},[e._v("What are conjugate gradients, Levenberg-Marquardt, etc.?")])],1),e._v(" "),t("p",[t("a",{attrs:{href:"http://ai.stanford.edu/~ang/papers/icml11-OptimizationForDeepLearning.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("On Optimization Methods for Deep Learning, 2011 PDF"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(9) 早停法")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/check-point-deep-learning-models-keras/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Check-Point Deep Learning Models in Keras"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"ftp://ftp.sas.com/pub/neural/FAQ3.html#A_stop"}},[e._v("What is early stopping?")])],1),e._v(" "),t("h3",{attrs:{id:"_4-通过模型集成提升性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-通过模型集成提升性能"}},[e._v("#")]),e._v(" 4. 通过模型集成提升性能")]),e._v(" "),t("p",[e._v("(1) 组合模型")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/ensemble-machine-learning-algorithms-python-scikit-learn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ensemble Machine Learning Algorithms in Python with scikit-learn"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://machinelearningmastery.com/how-to-improve-machine-learning-results/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Improve Machine Learning Results"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("(2) 组合视角")]),e._v(" "),t("p",[e._v("(3) 堆叠（Stacking）")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://machine-learning.martinsewell.com/ensembles/stacking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stacked Generalization (Stacking)"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);