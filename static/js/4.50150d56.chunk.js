(this.webpackJsonpCoSoSwap=this.webpackJsonpCoSoSwap||[]).push([[4],{1219:function(e,t,s){},1220:function(e,t,s){},1239:function(e,t,s){"use strict";s.r(t);var i=s(8),a=s(5),n=s(10),r=s(11),c=s(12),o=s(13),l=s(3),p=s.n(l),u=s(2),d=s.n(u),h=s(1206),b=s(163),m=s(22),j=s(232),v=(s(564),s(81)),x=s(47),f=(s(56),s(28),s(19)),O=s(16),_=s(7),g=(s(133),s(1219),s(4)),y=s(0),k=function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var i;return Object(n.a)(this,s),(i=t.call(this,e)).handleKeyPress=function(e){-1!==["-","+","e","E"].indexOf(e.key)&&e.preventDefault()},i.form=d.a.createRef(),i.state={value:0},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=Object(a.a)(p.a.mark((function e(){var t,s,i,a,n,r,c,o,l,u,d,h,b,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.type.amount/Math.pow(10,this.props.type[5][8][0]),s=this.props.type[5][6][0],this.setState({num:t,symbol:s,value:0}),i=this.props.type.order_info[7][0],e.next=6,Object(_.connect)();case 6:return a=e.sent,n=a.getAccount,r=a.getChainId,c=a.getImageList,e.next=10,n();case 10:return e.sent,e.next=13,r();case 13:o=e.sent,l=c(o),this.setState({imageList:l}),u=this.props.type[5],d=u[7],h=d[1],b=l[i],m=l[h],b||(b=g.a+"resource/token/no_verified.svg"),m||(m=g.a+"resource/token/no_verified.svg"),this.setState({img0:b,img1:m});case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(y.jsx)("div",{className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"dark":"light",children:Object(y.jsxs)("div",{className:"ConfirmRemovalResult",children:[Object(y.jsx)("div",{className:"title_box",children:Object(y.jsx)("span",{children:this.props.modalTitle})}),Object(y.jsxs)("div",{className:"coin_info_first_line",children:[Object(y.jsx)("img",{src:this.state.img0}),Object(y.jsxs)("span",{children:[this.props.type.amount/Math.pow(10,this.props.type[5][8][0])," ",this.props.type[5][6][0]]})]}),Object(y.jsxs)("div",{className:"coin_info_two_line",children:[Object(y.jsx)("span",{onClick:function(t){e.form.current.value=e.props.type.amount/Math.pow(10,e.props.type[5][8][0]),e.props.RemovalResult(e.props.type.amount/Math.pow(10,e.props.type[5][8][0]))},children:"MAX"}),Object(y.jsx)("input",{ref:this.form,onChange:function(t){return e.props.RemovalResult(t.target.value)},onKeyPress:this.handleKeyPress,defaultValue:"0"},"value")]})]})})}}]),s}(u.Component),w=Object(f.b)(O.b,O.a)(Object(j.a)()(k)),N=(s(1220),function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var i;return Object(n.a)(this,s),(i=t.call(this,e)).jian=Object(a.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Number(i.form.current.value>0)){e.next=7;break}return i.form.current.value=1*i.form.current.value-1,e.next=4,i.setState({value:i.form.current.value});case 4:i.props.DepositResult(i.form.current.value,i.state.balance),e.next=9;break;case 7:i.form.current.value=0,i.props.DepositResult(0,i.state.balance);case 9:case"end":return e.stop()}}),e)}))),i.jia=Object(a.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Number(i.form.current.value)<Number(i.state.balance))){e.next=7;break}return i.form.current.value=1*i.form.current.value+1,e.next=4,i.setState({value:i.form.current.value});case 4:i.props.DepositResult(i.form.current.value,i.state.balance),e.next=9;break;case 7:i.form.current.value=i.state.balance,i.props.DepositResult(i.state.balance,i.state.balance);case 9:case"end":return e.stop()}}),e)}))),i.inputNum=function(){var e=Object(a.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Number(t.target.value)<0&&(i.form.current.value=i.state.balance),!(Number(t.target.value)<=Number(i.state.balance))){e.next=7;break}return i.props.DepositResult(t.target.value,i.state.balance),e.next=5,i.setState({value:i.form.current.value});case 5:e.next=8;break;case 7:i.form.current.value=i.state.balance;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.handleKeyPress=function(e){-1!==["-","+","e","E"].indexOf(e.key)&&e.preventDefault()},i.form=d.a.createRef(),i.state={balance:0,price:0,symbol:"USDT",value:0},i}return Object(r.a)(s,[{key:"componentWillUnmount",value:function(){this.form.current.value=0}},{key:"componentDidMount",value:function(){var e=Object(a.a)(p.a.mark((function e(){var t,s,i,a,n,r,c,o,l,u,d,h,b,m,j,v;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.form.current.value=0,t=this.props.type.order_info[3]/Math.pow(10,18),s=this.props.type.order_info[7][0],i=this.props.type.order_info[6][0],a=this.props.type.order_info[8][0],e.next=7,this.props.getErc20balance(this.props.type.order_info[7][0],this.props.defaultAccount);case 7:return n=((n=e.sent)/Math.pow(10,a)).toFixed(6),e.next=11,Object(_.connect)();case 11:return r=e.sent,c=r.getAccount,o=r.getChainId,l=r.getImageList,e.next=15,c();case 15:return e.sent,e.next=18,o();case 18:u=e.sent,d=l(u),this.setState({balance:n,price:t,symbol:i,imageList:d,value:0}),h=this.props.type[5],b=h[7],m=b[1],j=d[s],v=d[m],j||(j=g.a+"resource/token/no_verified.svg"),v||(v=g.a+"resource/token/no_verified.svg"),this.setState({img0:j,img1:v});case 29:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(y.jsx)("div",{className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"dark":"light",children:Object(y.jsxs)("div",{className:"ConfirmDepositResult",children:[Object(y.jsx)("div",{className:"title_box",children:Object(y.jsx)("span",{children:this.props.modalTitle})}),Object(y.jsxs)("div",{className:"count",children:[Object(y.jsxs)("span",{className:"title1",children:[this.props.t("market_quantity"),"\uff1a"]}),Object(y.jsxs)("div",{className:"countRight",children:[Object(y.jsx)("span",{className:"max_btn",onClick:function(t){e.form.current.value=e.state.balance,e.props.DepositResult(e.state.balance,e.state.balance),e.setState({value:e.form.current.value})},children:"MAX"}),Object(y.jsx)("div",{className:"countButton",onClick:this.jian,children:Object(y.jsx)("img",{src:g.a+"resource/jian_new.png"})}),Object(y.jsx)("input",{ref:this.form,type:"number",placeholder:"Input Num",className:"input1",step:"0.0000001",onChange:function(t){return e.inputNum(t)},onKeyPress:this.handleKeyPress}),Object(y.jsx)("div",{className:"countButton",onClick:this.jia,children:Object(y.jsx)("img",{src:g.a+"resource/jia_new.png"})}),Object(y.jsxs)("span",{className:"title3 all_pc_show",children:["/",Object(_.toFixed2)(this.state.balance,2)]})]})]}),Object(y.jsx)("div",{className:"count2 all_phone_show",children:Object(y.jsxs)("span",{className:"title3",children:["/",Object(_.toFixed2)(this.state.balance,2)]})}),Object(y.jsxs)("div",{className:"price",children:[Object(y.jsxs)("span",{className:"title1",children:[this.props.t("liquid_price"),"\uff1a"]}),Object(y.jsx)("span",{className:"title2",children:this.state.price}),Object(y.jsx)("img",{className:"token_img",src:this.state.img1})]}),Object(y.jsxs)("div",{className:"total",children:[Object(y.jsxs)("span",{className:"title1",children:[this.props.t("\u603b\u6570\u91cf"),"\uff1a"]}),Object(y.jsx)("span",{className:"title2",children:this.state.price*this.state.value}),Object(y.jsx)("img",{className:"token_img",src:this.state.img1})]})]})})}}]),s}(u.Component)),R=Object(f.b)(O.b,O.a)(Object(j.a)()(N)),C=(s(516),function(e){Object(c.a)(s,e);var t=Object(o.a)(s);function s(e){var i;return Object(n.a)(this,s),(i=t.call(this,e)).GetList=function(e,t){var s=e.amount_ok,a=e.amount_all,n=(e.amount,e.can_ido,e.ido,e.order_md5,e[5][0],e[5]),r=n[3],c=n[8],o=n[6],l=n[7],p=(n[4],c[0]),u=(c[1],o[0]),d=o[1],h=l[0],b=l[1],m=i.state.imageList,j=m[h],x=m[b];j||(j="/resource/token/no_verified.svg"),x||(x="/resource/token/no_verified.svg");var f=Object(_.toFixed2)(new v.Decimal(a).div(Math.pow(10,p)),6),O=Object(_.toFixed2)(new v.Decimal(s).div(Math.pow(10,p)),6),g=Object(_.toFixed2)(new v.Decimal(r).div(Math.pow(10,18)),6),k=Object(_.toFixed2)(new v.Decimal(f).mul(g),6);return Object(y.jsxs)("div",{className:"my_order_main_list",children:[Object(y.jsxs)("div",{className:"main_list_coin_pair",children:[Object(y.jsx)("img",{className:"first_img",src:j}),Object(y.jsx)("div",{className:"double_line"}),Object(y.jsx)("img",{src:x}),Object(y.jsxs)("span",{className:"pair_name_s1",children:[u,"-",d]})]}),Object(y.jsx)("div",{className:"main_list_coin_num",children:Object(y.jsx)("span",{children:f})}),Object(y.jsx)("div",{className:"main_list_coin_value",children:Object(y.jsx)("span",{children:k})}),Object(y.jsx)("div",{className:"main_list_coin_sold",children:Object(y.jsxs)("span",{children:["  ",O,"/",f]})}),Object(y.jsxs)("div",{className:"main_list_operation_btn",children:[Object(y.jsx)("div",{children:Object(y.jsx)("span",{onClick:function(t){i.showModal("ConfirmDepositResult",e)},children:i.props.t("resting_deposit")})}),Object(y.jsx)("div",{className:"deposit_btn",children:Object(y.jsx)("span",{onClick:function(t){i.showModal("ConfirmRemovalResult",e)},children:i.props.t("resting_take_out")})})]})]},t)},i.handleOk=function(e){i.setState({visible:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,RemovalResultNum:0}),i.props.updateSpin(!1)},i.handleCancel=function(e){i.setState({visible:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,RemovalResultNum:0}),i.props.updateSpin(!1)},i.RemovalResult=function(e){i.setState({RemovalResultNum:e})},i.RemovalResult2=function(){var e=Object(a.a)(p.a.mark((function e(t,s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.props.updateSpin(!0),e.next=3,i.state.withdrawIdo(i.state.RemovalResultNum,s,i.state.defaultAccount);case 3:e.sent?(i.setState({visible4:!1,RemovalResultNum:0}),i.showModal("SuccessOrFailureResult","myorder_quchu_ok"),window.location.reload(),i.props.updateSpin(!1)):(i.showModal("SuccessOrFailureResult","myorder_quchu_bad"),i.props.updateSpin(!1));case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),i.showModal=function(e,t){i.setState({type:t}),"SuccessOrFailureResult"===e&&i.setState({visible2:!0,swap_status:t}),"PaymentToken"===e&&i.setState({type:t,visible:!0,visible2:!1,visible3:!1,visible4:!1,visible5:!1,modalTitle:i.props.t("liquid_choose_a_token")}),"ConfirmDepositResult"===e&&i.setState({modalTitle:i.props.t("resting_confirm_deposit"),visible1:!1,visible2:!1,visible3:!0,visible4:!1,visible5:!1}),"ConfirmRemovalResult"===e&&i.setState({modalTitle:i.props.t("resting_confirm_take_out"),visible1:!1,visible2:!1,visible3:!1,visible4:!0,visible5:!1}),"ConfirmExchangeResult"===e&&i.setState({modalTitle:i.props.t("home_confirm_transaction"),visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!0})},i.GetList0=function(){var e=i.props.AllOtcList,t=[];for(var s in e)e[s].chainId==i.state.chainId&&e[s][5][4]==i.state.defaultAccount&&0!=e[s].amount_all&&t.push(e[s]);i.setState({showAllOtcList:t,total:t.length,page:1})},i.InAllOtcListbyId=function(e){for(var t in i.props.AllOtcList)if(i.props.AllOtcList[t][5][0]==e)return i.props.AllOtcList[t];return""},i.InAllOtcListbyMd5=function(e){for(var t in i.props.AllOtcList)if(i.props.AllOtcList[t][5][1]==e)return i.props.AllOtcList[t];return""},i.DepositResult=function(e,t){i.setState({DepositResultNum:e})},i.DepositResult2=function(){var e=Object(a.a)(p.a.mark((function e(t,s){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.props.updateSpin(!0),e.next=3,i.state.erc20Approve(s.order_info[7][0],s.ido,i.state.DepositResultNum);case 3:if(!e.sent){e.next=12;break}return e.next=8,i.state.depositIdo(i.state.DepositResultNum,s,i.state.defaultAccount);case 8:e.sent?(i.setState({visible3:!1,DepositResultNum:0}),i.showModal("SuccessOrFailureResult","myorder_cunru_ok"),i.props.updateSpin(!1),window.location.reload()):(i.showModal("SuccessOrFailureResult","myorder_cunru_bad"),i.props.updateSpin(!1)),e.next=14;break;case 12:i.showModal("SuccessOrFailureResult","Approved_bad"),i.props.updateSpin(!1);case 14:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),i.props.updateLanguage(i.props.Language),i.form=d.a.createRef(),i.state={pagesize:10,total:10,page:1,isaction:0,isOpen:0,OtcAllListNum:0,choseMenu:1,showAllOtcList:[],isSpinning:!1,visible3:!1},i}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=Object(a.a)(p.a.mark((function e(){var t,s,i,a,n,r,c,o,l,u,d,h,b,m,j,v,x,f,O,g,y,k,w,N,R,C,S,L,I,A,T,E,D,B,M=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.connect)();case 2:return t=e.sent,s=t.getInOwnerSwap,t.massGetBalance,i=t.dodoApi,a=t.erc20Approve,n=t.web3,r=t.getAccount,c=t.getChainId,o=t.getTokenInfo,t.getInfoList,l=t.getErc20balance,t.getTokenList,u=t.getPairInfo,d=t.swapTokensForTokens,h=t.swapTokenForETH,b=t.swapETHForToken,m=t.addETHLiquidity,j=t.addErc20Liquidity,v=t.getPairInfoByPair,x=t.massGetPairInfoByPair,f=t.removeLiquidity,O=t.removeEthLiquidity,g=t.createIdoPair,y=t.getIdoListByUser,k=t.getOtcInfoByIndex,t.getOtcNum,w=t.withdrawIdo,N=t.depositIdo,R=t.swapIdo,C=t.getOtcInfoByIndexListAsync,S=t.getImageList,L=t.searchIdoListByAddress,I=t.getOtcInfoByMd5,e.next=6,r();case 6:return A=e.sent,e.next=9,c();case 9:return T=e.sent,E=S(T),this.setState({dodoApi:i,web3:n,defaultAccount:A,erc20Approve:a,getTokenInfo:o,chainId:T,swapTokensForTokens:d,getInOwnerSwap:s,addETHLiquidity:m,swapTokenForETH:h,swapETHForToken:b,getPairInfo:u,addErc20Liquidity:j,getPairInfoByPair:v,massGetPairInfoByPair:x,removeLiquidity:f,removeEthLiquidity:O,createIdoPair:g,getIdoListByUser:y,getOtcInfoByIndex:k,withdrawIdo:w,depositIdo:N,getErc20balance:l,swapIdo:R,getOtcInfoByIndexListAsync:C,imageList:E,searchIdoListByAddress:L,getOtcInfoByMd5:I}),e.next=14,this.state.getIdoListByUser(A,T);case 14:D=e.sent,D.id_list_num,B=D.id_list,this.state.getOtcInfoByIndexListAsync(B,(function(e,t){for(var s in e)M.props.updateallotclist(e[s]);M.GetList0()}));case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,s=this;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"my_order",children:[Object(y.jsxs)("div",{className:"my_nft_title_box",children:[Object(y.jsx)("span",{className:"my_nft_title",children:this.props.t("resting_my_pending_order")}),Object(y.jsxs)("div",{className:"pending_box",children:[Object(y.jsx)("img",{src:"./resource/left_icon_new.svg"}),Object(y.jsx)(m.b,{to:"/newmarket",children:Object(y.jsxs)("span",{children:[" ",this.props.t("resting_go_to-pending_order")," "]})})]})]}),Object(y.jsx)("div",{className:"my_order_main_border",children:Object(y.jsxs)("div",{className:"my_order_main",children:[Object(y.jsxs)("div",{className:"my_order_info_box",children:[Object(y.jsx)("div",{className:"info_box_coin_pair",children:Object(y.jsxs)("span",{children:[" ",this.props.t("market_transaction_pair")]})}),Object(y.jsx)("div",{className:"info_box_coin_num",children:Object(y.jsxs)("span",{children:[" ",this.props.t("market_quantity")]})}),Object(y.jsx)("div",{className:"info_box_coin_value",children:Object(y.jsxs)("span",{children:[" ",this.props.t("liquid_price")]})}),Object(y.jsx)("div",{className:"info_box_coin_sold",children:Object(y.jsxs)("span",{children:[" ",this.props.t("market_current_progress")]})})]}),this.state.showAllOtcList.length>0?this.state.showAllOtcList.map((function(e,t){return s.GetList(e,t)})):Object(y.jsxs)("div",{className:"no_order",children:[Object(y.jsx)("div",{className:"pending_order_btn",children:Object(y.jsx)(m.b,{to:"/NewPendingOrder",children:Object(y.jsx)("span",{children:this.props.t("resting_go_to-pending_order")})})}),Object(y.jsx)("span",{className:"not_found",children:this.props.t("blank_prompt")})]})]})})]}),Object(y.jsxs)(h.a,{visible:this.state.visible3,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,footer:!1,closable:!1,className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"ConfirmExchange_box":"light_img ConfirmExchange_box",children:[Object(y.jsx)("img",{className:"all_pc_show close_pc_img",src:"/resource/close_new.svg",width:"24px",style:{position:"absolute",cursor:"pointer",right:"-13px",top:"-13px"},onClick:this.handleCancel}),Object(y.jsx)("div",{className:"LiquidityConfirm_border",children:Object(y.jsxs)("div",{className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"dark_ConfirmExchangeResult_main2":"light_ConfirmExchangeResult_main2",children:[Object(y.jsx)(R,{modalTitle:this.state.modalTitle,type:this.state.type,getErc20balance:this.state.getErc20balance,defaultAccount:this.state.defaultAccount,DepositResult:this.DepositResult}),Object(y.jsx)("div",{className:"btn_border",children:Object(y.jsx)(b.a,(e={block:!0,size:"large",className:"fromBoxButton fromBoxButton_block",style:{boxShadow:"none"},type:"primary"},Object(i.a)(e,"className","ConfirmExchange_box_btn"),Object(i.a)(e,"disabled",this.state.isSpinning),Object(i.a)(e,"onClick",(function(e){return s.DepositResult2(e,s.state.type)})),Object(i.a)(e,"children",this.state.isSpinning?Object(y.jsxs)("div",{children:[this.props.t("resting_waitting")," ",Object(y.jsx)("img",{width:"30px",src:"./resource/loading.gif"})]}):this.props.t("resting_deposit")),e),"submit")})]})}),Object(y.jsx)("img",{className:"all_phone_show",src:"/resource/close_new.svg",width:"40px",style:{position:"absolute",cursor:"pointer",left:"44%",bottom:"-54px",width:"40px",height:"40px"},onClick:this.handleCancel})]}),Object(y.jsx)(h.a,{visible:this.state.visible2,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,footer:!1,closable:!1,children:Object(y.jsx)("div",{className:"SuccessOrFailureResult_border",children:Object(y.jsxs)("div",{className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"dark_NewConfirmExchange_main":"light_NewConfirmExchange_main",children:[Object(y.jsx)(x.default,{type:this.state.swap_status}),Object(y.jsx)("div",{className:"SuccessOrFailureResult_box_btn_border all_pc_show",children:Object(y.jsx)(b.a,{block:!0,size:"large",className:"SuccessOrFailureResult_box_btn",style:{boxShadow:"none"},type:"primary",onClick:this.handleOk,children:this.props.t("home_closure")},"submit")})]})})}),Object(y.jsxs)(h.a,{visible:this.state.visible4,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,footer:!1,closable:!1,className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"ConfirmExchange_box":"light_img ConfirmExchange_box",children:[Object(y.jsx)("img",{className:"all_pc_show close_pc_img",src:"/resource/close_new.svg",width:"24px",style:{position:"absolute",cursor:"pointer",right:"-13px",top:"-13px"},onClick:this.handleCancel}),Object(y.jsx)("div",{className:"LiquidityConfirm_border",children:Object(y.jsxs)("div",{className:"/"==this.props.LinkUrl||"dark"==this.props.Theme?"dark_ConfirmExchangeResult_main2":"light_ConfirmExchangeResult_main2",children:[Object(y.jsx)(w,{modalTitle:this.state.modalTitle,handleCancel:this.handleCancel,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,type:this.state.type,RemovalResult:this.RemovalResult}),Object(y.jsx)("div",{className:"btn_border",children:Object(y.jsx)(b.a,(t={block:!0,size:"large",className:"fromBoxButton fromBoxButton_block"},Object(i.a)(t,"className","ConfirmExchange_box_btn"),Object(i.a)(t,"style",{boxShadow:"none"}),Object(i.a)(t,"type","primary"),Object(i.a)(t,"disabled",this.state.isSpinning),Object(i.a)(t,"onClick",(function(e){return s.RemovalResult2(e,s.state.type)})),Object(i.a)(t,"children",this.state.isSpinning?Object(y.jsxs)("div",{children:[this.props.t("resting_waitting")," ",Object(y.jsx)("img",{width:"30px",src:"./resource/loading.gif"})]}):this.props.t("resting_take_out")),t),"submit")})]})}),Object(y.jsx)("img",{className:"all_phone_show",src:"/resource/close_new.svg",width:"40px",style:{position:"absolute",cursor:"pointer",left:"44%",bottom:"-54px",width:"40px",height:"40px"},onClick:this.handleCancel})]})]})}}]),s}(d.a.Component));t.default=Object(f.b)(O.b,O.a)(Object(j.a)()(C))}}]);