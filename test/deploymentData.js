var miner="0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer="0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var user1="0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var user2="0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var user3="0xa44a08d3f6933c69212114bb66e2df1813651844";
var user4="0xa55a151eb00fded1634d27d1127b4be4627079ea";
var user5="0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9";
var user6="0xa77a2b9d4b1c010a22a7c565dc418cef683dbcec";
var feeAccount="0xa88a05d2b88283ce84c8325760b72a64591279a2";
var rbtLibAddress="0x399fcf8fe65c2ba72eb4538feeba28f287b6152a";
var rbtLibAbi=[{"constant":false,"inputs":[{"name":"self","type":"BokkyPooBahsRedBlackTreeLibrary.Tree storage"},{"name":"z","type":"uint256"}],"name":"remove","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"self","type":"BokkyPooBahsRedBlackTreeLibrary.Tree storage"},{"name":"z","type":"uint256"}],"name":"insert","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"where","type":"string"},{"indexed":false,"name":"action","type":"string"},{"indexed":false,"name":"key","type":"uint256"},{"indexed":false,"name":"parent","type":"uint256"},{"indexed":false,"name":"left","type":"uint256"},{"indexed":false,"name":"right","type":"uint256"},{"indexed":false,"name":"red","type":"bool"}],"name":"Log","type":"event"}];
var rbtLib=eth.contract(rbtLibAbi).at(rbtLibAddress);
var dexzAddress="0x457fb261f6622c8a23360925beedaffe88d95484";
var dexzAbi=[{"constant":true,"inputs":[],"name":"ORDERTYPE_SELL","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"baseToken","type":"address"},{"name":"quoteToken","type":"address"},{"name":"price","type":"uint256"},{"name":"expiry","type":"uint256"},{"name":"baseTokens","type":"uint256"},{"name":"uiFeeAccount","type":"address"}],"name":"addOrder","outputs":[{"name":"_orderKey","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"},{"name":"_key","type":"uint256"}],"name":"getNode","outputs":[{"name":"_returnKey","type":"uint256"},{"name":"_parent","type":"uint256"},{"name":"_left","type":"uint256"},{"name":"_right","type":"uint256"},{"name":"_red","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"}],"name":"last","outputs":[{"name":"_key","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ORDERKEY_SENTINEL","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"takerFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_feeAccount","type":"address"}],"name":"setFeeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"}],"name":"getPairBlockNumber","outputs":[{"name":"_blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_orderKey","type":"bytes32"}],"name":"getOrder","outputs":[{"name":"_prev","type":"bytes32"},{"name":"_next","type":"bytes32"},{"name":"_orderType","type":"uint256"},{"name":"maker","type":"address"},{"name":"baseToken","type":"address"},{"name":"quoteToken","type":"address"},{"name":"price","type":"uint256"},{"name":"expiry","type":"uint256"},{"name":"baseTokens","type":"uint256"},{"name":"baseTokensFilled","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"}],"name":"first","outputs":[{"name":"_key","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeAccount","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"},{"name":"_x","type":"uint256"}],"name":"prev","outputs":[{"name":"_y","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountBlockNumber","outputs":[{"name":"_blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"tokenWhitelist","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"},{"name":"_x","type":"uint256"}],"name":"getNextBestPrice","outputs":[{"name":"_y","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TENPOW18","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"},{"name":"_price","type":"uint256"}],"name":"getOrderQueue","outputs":[{"name":"_exists","type":"bool"},{"name":"_head","type":"bytes32"},{"name":"_tail","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"},{"name":"_x","type":"uint256"}],"name":"next","outputs":[{"name":"_y","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"status","type":"uint256"}],"name":"whitelistToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"getTokenBlockNumber","outputs":[{"name":"_blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deploymentBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ORDERTYPE_BUY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"}],"name":"count","outputs":[{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"}],"name":"getBestPrice","outputs":[{"name":"_key","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_takerFee","type":"uint256"}],"name":"setTakerFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pairKey","type":"bytes32"},{"name":"_orderType","type":"uint256"},{"name":"_key","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"key","type":"bytes32"}],"name":"removeOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_feeAccount","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"key","type":"bytes32"},{"indexed":false,"name":"orderType","type":"uint256"},{"indexed":true,"name":"taker","type":"address"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"baseToken","type":"address"},{"indexed":false,"name":"quoteToken","type":"address"},{"indexed":false,"name":"baseTokens","type":"uint256"},{"indexed":false,"name":"quoteTokens","type":"uint256"},{"indexed":false,"name":"feeBaseTokens","type":"uint256"},{"indexed":false,"name":"feeQuoteTokens","type":"uint256"},{"indexed":false,"name":"baseTokensFilled","type":"uint256"}],"name":"Trade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"pairKey","type":"bytes32"},{"indexed":true,"name":"key","type":"bytes32"},{"indexed":false,"name":"orderType","type":"uint256"},{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"baseToken","type":"address"},{"indexed":false,"name":"quoteToken","type":"address"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"expiry","type":"uint256"},{"indexed":false,"name":"baseTokens","type":"uint256"}],"name":"OrderAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"key","type":"bytes32"}],"name":"OrderRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"key","type":"bytes32"},{"indexed":false,"name":"baseTokens","type":"uint256"},{"indexed":false,"name":"newBaseTokens","type":"uint256"}],"name":"OrderUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"oldStatus","type":"uint256"},{"indexed":false,"name":"newStatus","type":"uint256"}],"name":"TokenWhitelistUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldTakerFee","type":"uint256"},{"indexed":false,"name":"newTakerFee","type":"uint256"}],"name":"TakerFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldFeeAccount","type":"address"},{"indexed":false,"name":"newFeeAccount","type":"address"}],"name":"FeeAccountUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"token","type":"address"}],"name":"TokenAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"AccountAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"pairKey","type":"bytes32"},{"indexed":true,"name":"baseToken","type":"address"},{"indexed":true,"name":"quoteToken","type":"address"}],"name":"PairAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"topic","type":"string"},{"indexed":false,"name":"number","type":"uint256"},{"indexed":false,"name":"data","type":"bytes32"},{"indexed":false,"name":"note","type":"string"},{"indexed":false,"name":"addr","type":"address"}],"name":"LogInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"}];
var dexz=eth.contract(dexzAbi).at(dexzAddress);
var token0Address="0x986146cec52be76ab6fd0224b1f8effb92e1b454";
var tokenAbi=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"tokens","type":"uint256"}],"name":"mint","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"tokens","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"symbol","type":"string"},{"name":"name","type":"string"},{"name":"decimals","type":"uint8"},{"name":"tokenOwner","type":"address"},{"name":"initialSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}];
var token0=eth.contract(tokenAbi).at(token0Address);
var token1Address="0xf1138e29f73939b6a0fafa2f6d9c54406e96cd08";
var token1=eth.contract(tokenAbi).at(token1Address);
var token2Address="0x2f6759a96ac2d150e574d1de621e35c4342f35a6";
var token2=eth.contract(tokenAbi).at(token2Address);
var token3Address="0x311ef9fd1f7541eecb425563335b79f5b485fa44";
var token3=eth.contract(tokenAbi).at(token3Address);
