(this.webpackJsonpCoSoSwap=this.webpackJsonpCoSoSwap||[]).push([[7],{1215:function(e,t,s){},1233:function(e,t,s){"use strict";s.r(t);var n=s(5),a=s(10),i=s(11),o=s(12),r=s(14),c=s(3),l=s.n(c),d=s(2),p=s.n(d),h=s(288),u=s(1203),f=s(1198),m=s(162),b=s(231),_=(s(561),s(49),s(81),s(1215),s(4)),g=s(0),k=(d.Component,function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={itemIsChose:!1},e.itemIsClick=function(t,s){e.setState({itemIsChose:!e.state.itemIsChose}),e.props.changeLockStatus(t,s)},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this,t=this.props.item;return Object(g.jsxs)("div",{className:"nft_list_item_unLock",onClick:function(){return e.itemIsClick(2,t.tokenId)},children:[Object(g.jsx)("img",{src:t.nftImg}),Object(g.jsxs)("span",{className:"all_pc_show",children:["COSO #",t.tokenId]}),Object(g.jsxs)("span",{className:"all_phone_show",children:["#",t.tokenId]}),Object(g.jsx)("div",{className:2==this.props.isChoseLock?"chose_box":"chose_box_close",children:Object(g.jsx)("img",{className:this.state.itemIsChose?"show_img":"close_img",src:_.a+"resource/new_nft_lock_chose_cion.png"})}),Object(g.jsx)("div",{className:2!==this.props.isChoseLock?"lock_box":"lock_box_close",children:Object(g.jsx)("img",{src:_.a+"resource/new_nft_lock_cion.png"})})]})}}]),s}(d.Component)),N=k,j=s(20),O=s(16),x=s(48),w=s(9),v=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(a.a)(this,s);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isChoseLock:0,needwithdarwList:[],cosoAdd:"",needLockList:[]},e.changeLockStatus=function(t,s){if(e.setState({isChoseLock:Number(t)}),2==Number(t)){var n=e.state.needwithdarwList;-1==n.indexOf(s)?n.push(s):n.splice(n.indexOf(s),1),e.setState({needwithdarwList:n})}if(1==Number(t)){var a=e.state.needLockList;-1==a.indexOf(s)?a.push(s):a.splice(a.indexOf(s),1),e.setState({needLockList:a})}},e.goDeblockCoso=Object(n.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.state.needwithdarwList.length>0)){t.next=8;break}return e.props.updateSpin(!0),!0,t.next=6,e.state.MassWithdrawCoso(e.state.needwithdarwList);case 6:1==t.sent?(e.props.updateSpin(!1),e.showModal2("SuccessOrFailureResult","mylocknftorder_unlock_ok"),window.location.reload()):(e.props.updateSpin(!1),e.showModal2("SuccessOrFailureResult","mylocknftorder_unlock_bad"));case 8:case"end":return t.stop()}}),t)}))),e.golockCoso=Object(n.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.state.needLockList.length>0)){t.next=10;break}return e.props.updateSpin(!0),t.next=4,e.state.ApproveCoSo(w.REACT_APP_ShARE_STAKING_POOL_ADDRESS[e.state.chainId]);case 4:if(!t.sent){t.next=10;break}return t.next=8,e.state.MassStakingCoso(e.state.needLockList);case 8:1==t.sent?(e.props.updateSpin(!1),e.showModal2("SuccessOrFailureResult","locking_ok"),window.location.reload()):(e.props.updateSpin(!1),e.showModal2("SuccessOrFailureResult","locking_bad"));case 10:case"end":return t.stop()}}),t)}))),e.showModal2=function(t,s){e.setState({visible2:!0,swap_status:s})},e.handleOk=function(t){e.setState({visible:!1,visible2:!1,isSpinning:!1,visible3:!1}),window.location.reload()},e.handleCancel=function(t){e.props.updateSpin(!1),e.setState({visible:!1,visible2:!1,isSpinning:!1,visible3:!1})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=Object(n.a)(l.a.mark((function e(){var t,s,n,a,i,o,r,c,d,p,h,u,f,m,b,_,g,k,N,j,O,x,v,I,y,S,C,L,T,A,P,R,M,F,B,E,D,U,G,q,W,H,V,z,J,K,Q,X,Y,Z;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(w.connect)();case 3:return t=e.sent,s=t.getInOwnerSwap,t.massGetBalance,n=t.dodoApi,a=t.erc20Approve,i=t.web3,o=t.getAccount,r=t.getChainId,c=t.getTokenInfo,t.getInfoList,d=t.getErc20balance,t.getTokenList,p=t.getPairInfo,h=t.swapTokensForTokens,u=t.swapTokenForETH,f=t.swapETHForToken,m=t.addETHLiquidity,b=t.addErc20Liquidity,_=t.getPairInfoByPair,g=t.massGetPairInfoByPair,k=t.removeLiquidity,N=t.removeEthLiquidity,j=t.createIdoPair,O=t.getIdoListByUser,x=t.getOtcInfoByIndex,t.getOtcNum,v=t.withdrawIdo,I=t.depositIdo,y=t.swapIdo,S=t.getOtcInfoByIndexListAsync,C=t.getImageList,L=t.searchIdoListByAddress,T=t.getOtcInfoByMd5,A=t.importNft,P=t.getNftInfoCallback,R=t.getNftImage,M=t.importNftByTokenId,F=t.getNftImage0,t.getNftOrderListNum,B=t.getOrderItemInfoListCallBack,E=t.getUserOkOrderInfoList,D=t.COSOgetNftInfo,U=t.getNftWhiteList,G=t.getStaking,q=t.massGetStaking,W=t.ApproveCoSo,H=t.stakingCoso,t.getUserIdoTokenIdList,V=t.massGetStakingNew,z=t.MassGetSwapPoolInfo,J=t.MassStakingCoso,K=t.MassWithdrawCoso,e.next=7,o();case 7:return Q=e.sent,e.next=10,r();case 10:return X=e.sent,Y=C(X),Z=w.REACT_APP_COSONFT_ADDRESS[X],e.next=15,this.setState({dodoApi:n,web3:i,erc20Approve:a,getTokenInfo:c,swapTokensForTokens:h,getInOwnerSwap:s,addETHLiquidity:m,swapTokenForETH:u,swapETHForToken:f,getPairInfo:p,addErc20Liquidity:b,getPairInfoByPair:_,massGetPairInfoByPair:g,removeLiquidity:k,removeEthLiquidity:N,createIdoPair:j,getIdoListByUser:O,getOtcInfoByIndex:x,withdrawIdo:v,depositIdo:I,getErc20balance:d,swapIdo:y,getOtcInfoByIndexListAsync:S,searchIdoListByAddress:L,getOtcInfoByMd5:T,importNft:A,getNftInfoCallback:P,getNftImage:R,importNftByTokenId:M,getOrderItemInfoListCallBack:B,getNftImage0:F,getUserOkOrderInfoList:E,COSOgetNftInfo:D,getNftWhiteList:U,getStaking:G,massGetStaking:q,massGetStakingNew:V,MassGetSwapPoolInfo:z,defaultAccount:Q,chainId:X,imageList:Y,ApproveCoSo:W,stakingCoso:H,MassStakingCoso:J,MassWithdrawCoso:K,cosoAdd:Z});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.MyNftList,s=[];for(var n in t)t[n].NftAddress.toUpperCase()==this.state.cosoAdd.toUpperCase()&&t[n].owner==this.state.defaultAccount&&t[n].defaultAccount==this.state.defaultAccount&&s.push(t[n]);return Object(g.jsxs)("div",{className:"NewLockNft",children:[Object(g.jsxs)("div",{className:"NewLockNft_left",children:[Object(g.jsx)("div",{className:"nft_list",children:Object(g.jsx)("p",{children:"\u53c2\u52a0DAO\u6295\u7968\u4ee5\u83b7\u5f97\u8d44\u683c"})}),Object(g.jsx)("div",{className:"lock_button_is_chose",children:Object(g.jsx)("a",{href:"/NewCosoD",children:Object(g.jsx)("span",{children:"\u53bb\u53c2\u52a0DAO"})})})]})," ",Object(g.jsxs)("div",{className:"NewLockNft_right",children:[Object(g.jsx)("div",{className:"nft_list",children:this.props.lockingNFT.map((function(t,s){if(!t.isVate)return Object(g.jsx)(N,{isChoseLock:e.state.isChoseLock,changeLockStatus:e.changeLockStatus,item:t},s)}))}),Object(g.jsx)("div",{className:2==this.state.isChoseLock?"unlock_button_is_chose":"unlock_button",children:2==this.state.isChoseLock?Object(g.jsx)("span",{onClick:function(){return e.goDeblockCoso()},children:this.props.t("unlock")}):Object(g.jsx)("span",{children:this.props.t("mynftorder_locking")})})]}),Object(g.jsxs)(u.a,{visible:this.state.visible2,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,footer:!1,closable:!1,className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"SuccessOrFailureResult_box":"light_img SuccessOrFailureResult_box",children:[Object(g.jsx)("img",{className:"all_pc_show close_pc_img",src:_.a+"resource/close_new.svg",width:"24px",style:{position:"absolute",cursor:"pointer",right:"-2px",top:"-6px"},onClick:this.handleCancel}),Object(g.jsx)("div",{className:"SuccessOrFailureResult_border",children:Object(g.jsxs)("div",{className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"dark_NewConfirmExchange_main":"light_NewConfirmExchange_main",children:[Object(g.jsx)(x.default,{type:this.state.swap_status}),Object(g.jsx)("div",{className:"SuccessOrFailureResult_box_btn_border all_pc_show",children:Object(g.jsx)(m.a,{block:!0,size:"large",className:"SuccessOrFailureResult_box_btn",style:{boxShadow:"none"},type:"primary",onClick:this.handleOk,children:this.props.t("home_closure")},"submit")}),Object(g.jsx)("div",{className:"SuccessOrFailureResult_box_phone_close_span all_phone_show",children:Object(g.jsxs)("span",{className:"phone_close_span_s1",children:["Close after ",Object(g.jsx)("span",{className:"phone_close_span_s2",children:"3"}),"s...",Object(g.jsx)("span",{onClick:this.handleOk,className:"phone_close_span_s3",children:"Close Now"})]})})]})})]})]})}}]),s}(d.Component),I=Object(j.b)(O.b,O.a)(Object(b.a)()(v)),y=(s(59),s(30),s(133),s(283)),S=function(e){Object(o.a)(s,e);var t=Object(r.a)(s);function s(e){var i;return Object(a.a)(this,s),(i=t.call(this,e)).csuccess=function(){h.b.success({content:i.props.t("resting_copy_succeeded"),className:"custom-class",icon:Object(g.jsx)(y.a,{style:{color:"#fff"}})})},i.showModal=function(e,t){i.setState({type:t}),"PaymentToken"===e&&i.setState({type:t,visible:!0,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1,modalTitle:i.props.t("liquid_choose_a_token")}),"ConfirmDepositResult"===e&&i.setState({modalTitle:i.props.t("resting_confirm_deposit"),visible1:!1,visible2:!1,visible3:!0,visible4:!1,visible5:!1,visible6:!1}),"ConfirmRemovalResult"===e&&i.setState({modalTitle:i.props.t("resting_confirm_take_out"),visible1:!1,visible2:!1,visible3:!1,visible4:!0,visible5:!1,visible6:!1}),"ConfirmExchangeResult"===e&&i.setState({modalTitle:i.props.t("home_confirm_transaction"),visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!0,visible6:!1}),"importNft"===e&&i.setState({modalTitle:i.props.t("nftorderdetail_import"),visible1:!0,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1}),"SuccessOrFailureResult"===e&&i.setState({visible6:!0,swap_status:t}),"NewLockNft"===e&&i.setState({NewLockNft:!0,swap_status:t})},i.onChange=function(e){i.setState({SliderValue:e})},i.handleChangeSlider=function(e){i.setState({SliderValue:e})},i.handleChangeBox=function(e){i.setState({isempty:e})},i.onChanget=function(e){0===e.length?i.setState({isOpen:0}):i.setState({isOpen:1})},i.TopNav=function(e){i.setState({isaction:e})},i.onPagechange=function(e){i.setState({page:e})},i.handleOk=function(e){i.setState({visible:!1,visible2:!1,visible1:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1,RemovalResultNum:0,NewLockNft:!1})},i.handleCancel=function(e){i.setState({visible:!1,visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,NewLockNft:!1,visible6:!1,RemovalResultNum:0})},i.ExchangeResult=function(e){i.setState({ExchangeResultNum:e.target.value})},i.updateIdoList=function(){var e=Object(n.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.state.getOtcInfoByIndex(t).then((function(e){i.props.updateallotclist(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.ExchangeResult2=function(){var e=Object(n.a)(l.a.mark((function e(t,s){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s[5][7][1],e.next=3,i.state.erc20Approve(n,s.ido,1.2*i.state.ExchangeResultNum);case 3:if(!e.sent){e.next=9;break}return e.next=7,i.state.swapIdo(i.state.ExchangeResultNum,s,i.state.defaultAccount);case 7:e.sent&&(i.updateIdoList(s[5][0]),i.setState({visible5:!1,ExchangeResultNum:0}));case 9:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),i.GetList0=Object(n.a)(l.a.mark((function e(){var t,s,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in t=i.state.noRepeatList,s=[],n=[],t)t[a].chainId==i.state.chainId&&t[a].defaultAccount==i.state.defaultAccount&&(Object(w.inArray)(t[a].NftAddress+t[a].tokenId,n)||(n.push(t[a].NftAddress+t[a].tokenId),s.push(t[a])));i.setState({showMyNftList:s}),i.getUserOkOrderInfoList((function(e){for(var t in e)Object(w.inArray)(e[t].NftAddress+e[t].tokenId,n)||(n.push(e[t].NftAddress+e[t].tokenId),s.unshift(e[t]));i.setState({showMyNftList:s})}));case 7:case"end":return e.stop()}}),e)}))),i.getStakingCoso=function(){var e=Object(n.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i.state.massGetStakingNew().then((function(e){for(var s in i.state.daoPoolList)for(var n in e)Object(w.inArray)(e[n].tokenId,i.state.daoPoolList[s].userStakingTokenIdList)&&(e[n].isVate=!0,e[n].isVateData=i.state.daoPoolList[s]);t(e)}))}catch(s){t([])}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.getUserOkOrderInfoList=function(){var e=Object(n.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i.state.getUserOkOrderInfoList().then((function(e){if(e.length>0)for(var n=function(n){var a=e[n],o={defaultAccount:i.state.defaultAccount,chainId:i.state.chainId,NftAddress:a.orderItem2.nftToken,orderId:a.orderItem2.orderId,isPending:!0,tokenId:a.orderItem2.tokenId};i.state.getNftImage0(a.tokenURI2).then((function(e){o.nftImg=e.image,o.nftName=e.name,s.push(o),t(s)}))},a=0;a<e.length;a++)n(a)})),s=[],i.state.getNftWhiteList().then(function(){var e=Object(n.a)(l.a.mark((function e(n){var a,o,r,c,d,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.length,o=0,!(n.length>0)){e.next=18;break}r=0;case 5:if(!(r<n.length)){e.next=18;break}return c=n[r],d={defaultAccount:i.state.defaultAccount,chainId:i.state.chainId,NftAddress:c.contractAddress,tokenId:c.tokenID},e.next=10,i.state.getNftImage0(c.tokenURI);case 10:p=e.sent,d.nftImg=p.image,d.nftName=p.name,s.push(d),o+=1;case 15:r++,e.next=5;break;case 18:a==o&&t(s);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(a){}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.searchNft=function(e){var t=e.target.value;if(""==t)i.GetList0();else{var s=[];for(var n in i.state.showMyNftList)-1==i.state.showMyNftList[n].nftName.toUpperCase().indexOf(t)&&-1==i.state.showMyNftList[n].nftName.toLowerCase().indexOf(t)||(s[n]=i.state.showMyNftList[n]);i.setState({showMyNftList:s})}},i.setAllchioceBatch=function(e){var t=i.state.chioceBatchlist;if(-1==t.indexOf(e))t.push(e);else for(var s=0;s<=t.length;s++)t[s]==e&&t.splice(s,1);i.setState({chioceBatchlist:t})},i.setAllchioceDeblocking=function(e){var t=i.state.chioceDeblocklist;if(-1==t.indexOf(e))t.push(e);else for(var s=0;s<=t.length;s++)t[s]==e&&t.splice(s,1);i.setState({chioceDeblocklist:t})},i.importCosoNft=function(e,t){},i.importNft=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!=(t=i.form.current.getFieldsValue()).address&&""!=t.tokenId||i.showModal("SuccessOrFailureResult","nynftorder_inport_bad"),i.state.importNftByTokenId&&(i.props.updateSpin(!0),i.state.importNftByTokenId(t.address,t.tokenId).then((function(e){e.tokenURI?i.state.getNftImage0(e.tokenURI).then((function(s){var n={defaultAccount:i.state.defaultAccount,chainId:i.state.chainId,NftAddress:i.state.web3.utils.toChecksumAddress(t.address),name:e.name,symbol:e.symbol,tokenId:t.tokenId,tokenURI:e.tokenURI,owner:e.owner,nftImg:s.image,nftName:s.name,isPending:!1,nftNowPrice:0,serviceCharge:0,nftIntroduce:s.description};i.props.updatemynftlist(n),i.setState({isSearchNFT:!1,visible6:!1}),i.props.updateSpin(!1)})):(i.showModal("SuccessOrFailureResult","nynftorder_inport_bad"),i.props.updateSpin(!1))})).catch((function(e){i.showModal("SuccessOrFailureResult","nynftorder_inport_bad"),i.props.updateSpin(!1)})));case 3:case"end":return e.stop()}}),e)}))),i.goDeblockCoso=Object(n.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.state.chioceDeblocklist.length>0)){e.next=8;break}return i.props.updateSpin(!0),!0,e.next=6,i.state.MassWithdrawCoso(i.state.chioceDeblocklist);case 6:1==e.sent?(i.props.updateSpin(!1),window.location.reload()):(i.props.updateSpin(!1),i.showModal("SuccessOrFailureResult","locking_bad"));case 8:case"end":return e.stop()}}),e)}))),i.golockCoso=Object(n.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.state.chioceBatchlist.length>0)){e.next=10;break}return i.props.updateSpin(!0),e.next=4,i.state.ApproveCoSo(w.REACT_APP_ShARE_STAKING_POOL_ADDRESS[i.state.chainId]);case 4:if(!e.sent){e.next=10;break}return e.next=8,i.state.MassStakingCoso(i.state.chioceBatchlist);case 8:1==e.sent?(i.props.updateSpin(!1),window.location.reload()):(i.props.updateSpin(!1),i.showModal("SuccessOrFailureResult","locking_bad"));case 10:case"end":return e.stop()}}),e)}))),i.importNft=Object(n.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!=(t=i.form.current.getFieldsValue()).address&&""!=t.tokenId||i.showModal("SuccessOrFailureResult","nynftorder_inport_bad"),i.state.importNftByTokenId&&(i.props.updateSpin(!0),i.state.importNftByTokenId(t.address,t.tokenId).then((function(e){e.tokenURI?i.state.getNftImage0(e.tokenURI).then((function(s){var n={defaultAccount:i.state.defaultAccount,chainId:i.state.chainId,NftAddress:i.state.web3.utils.toChecksumAddress(t.address),name:e.name,symbol:e.symbol,tokenId:t.tokenId,tokenURI:e.tokenURI,owner:e.owner,nftImg:s.image,nftName:s.name,isPending:!1,nftNowPrice:0,serviceCharge:0,nftIntroduce:s.description},a=i.state.showMyNftList;a.push(n),i.setState({showMyNftList:a,visible1:!1}),i.props.updateSpin(!1)})):(i.showModal("SuccessOrFailureResult","nynftorder_inport_bad"),i.props.updateSpin(!1))})).catch((function(e){i.showModal("SuccessOrFailureResult","nynftorder_inport_bad"),i.props.updateSpin(!1)})));case 3:case"end":return e.stop()}}),e)}))),i.props.updateLanguage(i.props.Language),i.form=p.a.createRef(),i.state={pagesize:10,page:1,isaction:0,isOpen:0,OtcAllListNum:0,isSearchNFT:!1,myNFTlist:[],isSpinning:!1,menuChose:!1,stakingCosoList:[],noRepeatList:[],isBatch:!1,isDeblockAll:!1,chioceBatchlist:[],chioceDeblocklist:[],showMyNftList:[],NewLockNft:!1,daoPoolList:[]},i}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=Object(n.a)(l.a.mark((function e(){var t,s,n,a,i,o,r,c,d,p,h,u,f,m,b,_,g,k,N,j,O,x,v,I,y,S,C,L,T,A,P,R,M,F,B,E,D,U,G,q,W,H,V,z,J,K,Q,X,Y,Z,$,ee,te=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.connect)();case 2:return t=e.sent,s=t.getInOwnerSwap,t.massGetBalance,n=t.dodoApi,a=t.erc20Approve,i=t.web3,o=t.getAccount,r=t.getChainId,c=t.getTokenInfo,t.getInfoList,d=t.getErc20balance,t.getTokenList,p=t.getPairInfo,h=t.swapTokensForTokens,u=t.swapTokenForETH,f=t.swapETHForToken,m=t.addETHLiquidity,b=t.addErc20Liquidity,_=t.getPairInfoByPair,g=t.massGetPairInfoByPair,k=t.removeLiquidity,N=t.removeEthLiquidity,j=t.createIdoPair,O=t.getIdoListByUser,x=t.getOtcInfoByIndex,t.getOtcNum,v=t.withdrawIdo,I=t.depositIdo,y=t.swapIdo,S=t.getOtcInfoByIndexListAsync,C=t.getImageList,L=t.searchIdoListByAddress,T=t.getOtcInfoByMd5,A=t.importNft,P=t.getNftInfoCallback,R=t.getNftImage,M=t.importNftByTokenId,F=t.getNftImage0,t.getNftOrderListNum,B=t.getOrderItemInfoListCallBack,E=t.getUserOkOrderInfoList,D=t.COSOgetNftInfo,U=t.getNftWhiteList,G=t.getStaking,q=t.massGetStaking,W=t.massGetInfoForUser,H=t.ApproveCoSo,V=t.stakingCoso,t.getUserIdoTokenIdList,z=t.massGetStakingNew,J=t.MassGetSwapPoolInfo,K=t.MassStakingCoso,Q=t.MassWithdrawCoso,e.next=6,o();case 6:return X=e.sent,e.next=9,r();case 9:return Y=e.sent,Z=C(Y),e.next=13,this.setState({dodoApi:n,web3:i,erc20Approve:a,getTokenInfo:c,swapTokensForTokens:h,getInOwnerSwap:s,addETHLiquidity:m,swapTokenForETH:u,swapETHForToken:f,getPairInfo:p,addErc20Liquidity:b,getPairInfoByPair:_,massGetPairInfoByPair:g,removeLiquidity:k,removeEthLiquidity:N,createIdoPair:j,getIdoListByUser:O,getOtcInfoByIndex:x,withdrawIdo:v,depositIdo:I,getErc20balance:d,swapIdo:y,getOtcInfoByIndexListAsync:S,searchIdoListByAddress:L,getOtcInfoByMd5:T,importNft:A,getNftInfoCallback:P,getNftImage:R,importNftByTokenId:M,getOrderItemInfoListCallBack:B,getNftImage0:F,getUserOkOrderInfoList:E,COSOgetNftInfo:D,getNftWhiteList:U,getStaking:G,massGetStaking:q,massGetStakingNew:z,MassGetSwapPoolInfo:J,defaultAccount:X,chainId:Y,imageList:Z,ApproveCoSo:H,stakingCoso:V,MassStakingCoso:K,MassWithdrawCoso:Q,massGetInfoForUser:W});case 13:return $=this.props.MyNftList,W().then((function(e){if(e&&e.length>0){var t=[];for(var s in e)if(Number(e[s].userinfo.amount)>0){var n={};n.daoTokenId=Number(e[s].poolinfo.daoTokenId),n.stakingNumAll=Number(e[s].stakingNumAll),n.amount=e[s].userinfo.amount,n.allPendingReward=Object(w.toFixed2)(Number(e[s].allPendingReward)/Math.pow(10,18)*(1-Number(e[s].poolinfo.refererrate)/100),4),n.daoNftTokenStakingStatus=e[s].daoNftTokenStakingStatus,n.pid=e[s].poolinfo.pid,n.daoNftOwner=e[s].daoNftOwner,n.userStakingTokenIdList=e[s].userStakingTokenIdListForPool,n.unlockTime=e[s].unlockTime,n.limitWithdrawTime=e[s].limitWithdrawTime,n.staking_stock_length=Number(e[s].poolinfo.staking_stock_length)/3600,n.lpTokenBalance=Number(e[s].lpTokenBalance),n.refererrate=Number(e[s].poolinfo.refererrate),t.push(n)}te.setState({daoPoolList:t})}})),ee=[],e.next=18,this.getStakingCoso((function(e){te.setState({stakingCosoList:e});var t=[];for(var s in e)t.push(e[s].tokenId);var n=[];for(var a in $)te.state.web3.utils.toChecksumAddress($[a].NftAddress)!=te.state.web3.utils.toChecksumAddress(w.REACT_APP_COSONFT_ADDRESS[Y])?n.push($[a]):Object(w.inArray)($[a].tokenId,t)||n.push($[a]);ee=n}));case 18:return e.next=20,J().then((function(e){for(var t in e)ee.push(e[t]);te.setState({noRepeatList:ee})}));case 20:this.GetList0();case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"my_nft",children:[Object(g.jsx)("div",{className:"my_nft_title_box",children:Object(g.jsxs)("span",{className:"my_nft_title",children:[this.props.t("PaymentTokenResult_my")," NFT"]})}),Object(g.jsx)("div",{className:"my_nft_main_border",children:Object(g.jsx)("div",{className:"my_nft_main",children:Object(g.jsxs)("div",{className:"my_nft_list",children:[Object(g.jsxs)("div",{className:"add_new_nft my_nft_list_item",children:[Object(g.jsxs)("div",{className:"add_box",onClick:function(){return e.showModal("importNft")},children:[Object(g.jsx)("img",{className:"add_img",src:"/resource/add_nft_new.svg"}),Object(g.jsx)("span",{className:"add_span",children:this.props.t("nftorderdetail_import")})]}),Object(g.jsxs)("div",{className:"lock_box ",onClick:function(){return e.showModal("NewLockNft")},children:[Object(g.jsx)("img",{className:"add_img",src:"/resource/new_my_lock_nft_icon.svg"}),Object(g.jsx)("span",{className:"add_span",children:this.props.t("lock")})]})]}),this.state.stakingCosoList.map((function(t,s){return t.isVate?Object(g.jsxs)("div",{className:"my_nft_list_item my_nft_list_item2 light_border",children:[Object(g.jsxs)("div",{onClick:function(){return e.props.showNFT("NewNftLockDetail",t)},className:"show_web light_main",children:[Object(g.jsx)("div",{className:"nft_state_box",children:Object(g.jsx)("img",{src:"./resource/daolock.svg",style:{filter:"invert(100%)"}})}),Object(g.jsx)("img",{className:"nft_img",referrerPolicy:"no-referrer",src:t.nftImg}),Object(g.jsx)("span",{className:"nft_name",children:t.nftName})]}),Object(g.jsxs)("a",{href:"/NewMyNftPhoneDetailLock/"+t.NftAddress+"/"+t.tokenId+"/"+t.isVateData.pid,className:"show_phone",children:[Object(g.jsx)("div",{className:"nft_state_box",children:Object(g.jsx)("img",{src:"./resource/daolock.svg",style:{filter:"invert(100%)"}})}),Object(g.jsx)("img",{className:"nft_img",referrerPolicy:"no-referrer",src:t.nftImg}),Object(g.jsx)("span",{className:"nft_name",children:t.nftName})]})]},s):Object(g.jsxs)("div",{className:"my_nft_list_item my_nft_list_item2 light_border",children:[Object(g.jsxs)("div",{onClick:function(){return e.props.showNFT("NewNftLockDetail",t)},className:"show_web light_main",children:[Object(g.jsx)("div",{className:"nft_state_box",children:Object(g.jsx)("img",{src:"./resource/lock_icon_new.svg"})}),Object(g.jsx)("img",{className:"nft_img",referrerPolicy:"no-referrer",src:t.nftImg}),Object(g.jsx)("span",{className:"nft_name",children:t.nftName})]}),Object(g.jsxs)("a",{href:"/NewMyNftPhoneDetailLock/"+t.NftAddress+"/"+t.tokenId,className:"show_phone",children:[Object(g.jsx)("div",{className:"nft_state_box",children:Object(g.jsx)("img",{src:"./resource/lock_icon_new.svg"})}),Object(g.jsx)("img",{className:"nft_img",referrerPolicy:"no-referrer",src:t.nftImg}),Object(g.jsx)("span",{className:"nft_name",children:t.nftName})]})]},s)})),this.state.showMyNftList.map((function(t,s){return Object(g.jsxs)("div",{className:"my_nft_list_item my_nft_list_item2 light_border",children:[Object(g.jsxs)("div",{className:"show_web light_main",onClick:t.isPending?function(){return e.props.showNFT("NewNftOrderDetail",t)}:function(){return e.props.showNFT("NewMyNftDetail",t)},children:[t.isClaimed?Object(g.jsx)("div",{className:"nft_state_box",children:Object(g.jsx)("img",{src:"/resource/new_my_claim_icon.svg"})}):"",t.isPending?Object(g.jsx)("div",{className:"nft_state_box",children:Object(g.jsx)("img",{src:"/resource/new_my_nft_is_sale_icon.svg"})}):"",Object(g.jsx)("img",{className:"nft_img",referrerPolicy:"no-referrer",src:t.nftImg}),Object(g.jsx)("span",{className:"nft_name",children:t.nftName})]}),Object(g.jsxs)("a",{href:t.isPending?"/NewMyNftPhoneDetailPending/"+t.NftAddress+"/"+t.tokenId+"/"+t.orderId:t.isClaimed?"/NewMyNftPhoneDetail/"+t.NftAddress+"/"+t.tokenId+"/1":"/NewMyNftPhoneDetail/"+t.NftAddress+"/"+t.tokenId,className:"show_phone",children:[t.isClaimed?Object(g.jsx)("div",{className:"nft_state_box",children:Object(g.jsx)("img",{src:"./resource/new_my_claim_icon.svg"})}):"",t.isPending?Object(g.jsx)("div",{className:"nft_state_box",children:Object(g.jsx)("img",{src:"/resource/new_my_nft_is_sale_icon.svg"})}):"",Object(g.jsx)("img",{className:"nft_img",referrerPolicy:"no-referrer",src:t.nftImg}),Object(g.jsx)("span",{className:"nft_name",children:t.nftName})]})]},s)}))]})})}),this.props.isShowChoseNft?Object(g.jsx)("div",{className:"chose_nft_state",children:this.props.choseNftStateList.map((function(e,t){return Object(g.jsx)("div",{className:e.isChose?"chose_nft_state_item chose_nft_state_item_is_chose":"chose_nft_state_item",children:Object(g.jsx)("span",{children:e.name})},t)}))}):""]}),Object(g.jsxs)(u.a,{visible:this.state.NewLockNft,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,closable:!1,footer:!1,className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"NFT_lock_box":"light_img NFT_lock_box",children:[Object(g.jsx)("img",{className:"all_pc_show close_pc_img",src:"/resource/close_new.svg",width:"24px",style:{position:"absolute",cursor:"pointer",right:"-10px",top:"-10px"},onClick:this.handleCancel}),Object(g.jsx)(I,{lockingNFT:this.state.stakingCosoList,MyNftList:this.state.showMyNftList}),Object(g.jsx)("img",{className:"all_phone_show close_pc_img",src:"/resource/close_new.svg",width:"40px",style:{position:"absolute",cursor:"pointer",left:"44%",bottom:"-54px",width:"40px",height:"40px"},onClick:this.handleCancel})]}),Object(g.jsxs)(u.a,{visible:this.state.visible1,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,footer:!1,closable:!1,className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"add_nft_box":"light_img add_nft_box",children:[Object(g.jsx)("img",{className:"all_pc_show close_pc_img",src:"/resource/close_new.svg",width:"24px",style:{position:"absolute",cursor:"pointer",right:"-13px",top:"-13px"},onClick:this.handleCancel}),Object(g.jsx)("div",{className:"import_nft_border",children:Object(g.jsx)("div",{className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"dark_import_nft_main":"light_import_nft_main",children:Object(g.jsxs)("div",{className:"search_nft",children:[Object(g.jsx)("div",{className:"title_box",children:Object(g.jsx)("span",{children:this.state.modalTitle})}),Object(g.jsxs)(f.a,{ref:this.form,name:"forminputForm",children:[Object(g.jsx)(f.a.Item,{name:"address",children:Object(g.jsx)("div",{className:"add_nft_address_border",children:Object(g.jsx)("input",{className:"add_nft_address",placeholder:this.props.t("Mynftorder_please_enter_your_NFT_contract_address"),onChange:function(t){e.form.current.setFieldsValue({address:t.target.value})}})})}),Object(g.jsx)(f.a.Item,{name:"tokenId",children:Object(g.jsx)("div",{className:"add_nft_token_id_border",children:Object(g.jsx)("input",{className:"add_nft_token_id",placeholder:this.props.t("Mynftorder_please_enter_your_tokenid"),onChange:function(t){e.form.current.setFieldsValue({tokenId:t.target.value})}})})})]}),Object(g.jsx)("div",{className:"btn_border",children:Object(g.jsx)(m.a,{block:!0,size:"large",className:"add_nft_box_btn",style:{boxShadow:"none"},type:"primary",disabled:this.state.isSpinning,onClick:function(t){return e.importNft()},children:this.state.isSpinning?Object(g.jsxs)("div",{children:[this.props.t("Mynftorder_search")," ",Object(g.jsx)("img",{width:"30px",src:"./resource/loading.gif"})]}):this.props.t("Mynftorder_search")},"submit")})]})})}),Object(g.jsx)("img",{className:"all_phone_show close_pc_img",src:"/resource/close_new.svg",width:"40px",style:{position:"absolute",cursor:"pointer",left:"44%",bottom:"-54px",width:"40px",height:"40px"},onClick:this.handleCancel})]}),Object(g.jsxs)(u.a,{visible:this.state.visible6,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,footer:!1,closable:!1,className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"SuccessOrFailureResult_box":"light_img SuccessOrFailureResult_box",children:[" ",Object(g.jsx)("img",{className:"all_pc_show close_pc_img",src:"/resource/close_new.svg",width:"24px",style:{position:"absolute",cursor:"pointer",right:"-2px",top:"-6px"},onClick:this.handleCancel}),Object(g.jsx)("div",{className:"SuccessOrFailureResult_border",children:Object(g.jsxs)("div",{className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"dark_NewConfirmExchange_main":"light_NewConfirmExchange_main",children:[Object(g.jsx)(x.default,{type:this.state.swap_status}),Object(g.jsx)("div",{className:"SuccessOrFailureResult_box_btn_border all_pc_show",children:Object(g.jsx)(m.a,{block:!0,size:"large",className:"SuccessOrFailureResult_box_btn",style:{boxShadow:"none"},type:"primary",onClick:this.handleOk,children:this.props.t("Mynftdetail_switch_off")},"submit")}),Object(g.jsx)("div",{className:"SuccessOrFailureResult_box_phone_close_span all_phone_show",children:Object(g.jsxs)("span",{className:"phone_close_span_s1",children:["Close after ",Object(g.jsx)("span",{className:"phone_close_span_s2",children:"3"}),"s...",Object(g.jsx)("span",{onClick:this.handleOk,className:"phone_close_span_s3",children:"Close Now"})]})})]})})]})]})}}]),s}(p.a.Component);t.default=Object(j.b)(O.b,O.a)(Object(b.a)()(S))}}]);