(this.webpackJsonpCoSoSwap=this.webpackJsonpCoSoSwap||[]).push([[16],{1225:function(e,t,s){"use strict";s.r(t);var a=s(9),i=s(10),c=s(11),n=s(13),r=s(2),o=(s(562),s(53)),l=s(8),_=s(20),m=s(15),d=s(231),h=s(0),b=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isSeeTheEnded:!1,igoTokensList:"en"==e.props.Language?l.igoTokensList_EN:l.igoTokensList,isover:1},e.settime2=function(t,s,a,i,c){var n,r;Object(l.inArray)(t.igoAddress,l.OldIgoList)?(n=i+3*(s-c),r=i+3*(a-c)):(n=s,r=a);var o=(new Date).getTime();o<1e3*r?e.setState({isover:0}):o>=1e3*r&&o<=1e3*n?e.setState({isover:1}):o>1e3*n&&e.setState({isover:2})},e.randerImgs=function(){var t=e.state.igoTokensList[e.props.value.nftDetail_NFTtreaty].community,s="";return t.Youtube&&(s=s+"<a  class='item_left_contact_item' href="+t.Youtube+' target="_blank"><img src="/resource/youtube.svg"/></a>'),t.Discord&&(s=s+"<a class='item_left_contact_item' href="+t.Discord+' target="_blank"><img src="/resource/dic.svg"/></a>'),t.Medium&&(s=s+"<a class='item_left_contact_item' href="+t.Medium+' target="_blank"><img src="/resource/medi.svg"/></a>'),t.Steam&&(s=s+"<div class='item_left_contact_item' href="+t.Steam+' target="_blank"><img src="/resourcse/Steam.png"/></div>'),t.Twitter&&(s=s+"<a class='item_left_contact_item' href="+t.Twitter+' target="_blank"><img src="/resource/twitter.svg"/></a>'),t.facebook&&(s=s+"<a class='item_left_contact_item' href="+t.facebook+' target="_blank"><img src="/resource/facebook.svg"/></a>'),t.Website&&(s=s+"<a class='item_left_contact_item' href="+t.Website+' target="_blank"><img src="/resource/home.svg"/></a>'),t.Gitbook&&(s=s+"<a  class='item_left_contact_item' href="+t.Gitbook+' target="_blank"><img src="/resource/peper.svg"/></a>'),s},e}return Object(i.a)(s,[{key:"componentWillUpdate",value:function(e,t){e.Language!=this.props.Language&&("en"==e.Language&&this.setState({igoTokensList:l.igoTokensList_EN}),"zh_cn"==e.Language&&this.setState({igoTokensList:l.igoTokensList}))}},{key:"componentDidMount",value:function(){var e=this.props.value,t=parseInt(e.blocknumber),s=parseInt(e.endBlock),a=parseInt(e.timestamp),i=parseInt(e.startBlock);this.settime2(e,s,i,a,t)}},{key:"render",value:function(){var e=this.props,t=e.value,s=(e.imageList,this.state),a=s.igoTokensList,i=s.isover,c=a[t.nftDetail_NFTtreaty].NFT_img;return Object(h.jsxs)("div",{className:"LaunchPad_list_item_border",children:[Object(h.jsx)("div",{className:"LaunchPad_list_item_nft_img",children:Object(h.jsx)("img",{src:c})}),Object(h.jsx)("div",{className:"LaunchPad_list_item",children:Object(h.jsxs)("div",{className:2==i?"item_lock_coso_end":"item_lock_coso",children:[Object(h.jsxs)("div",{className:"LaunchPad_list_item_left all_pc_show",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"item_left_title",children:a[t.nftDetail_NFTtreaty].name}),"MetaOasis"==a[t.nftDetail_NFTtreaty].name?Object(h.jsx)("div",{className:"noRepurchaseBox",children:Object(h.jsx)("span",{children:this.props.t("Repurchase_is_not_supported")})}):"",Object(h.jsx)("div",{className:"state_box all_pc_show",children:2==i?Object(h.jsx)("div",{className:"other_state"}):Object(h.jsx)("div",{className:"countdown_box"})})]}),Object(h.jsx)("span",{className:"item_left_info",dangerouslySetInnerHTML:{__html:a[t.nftDetail_NFTtreaty].aboutGame}}),Object(h.jsx)("div",{className:2===this.state.isover?"item_left_contact_is_over":"item_left_contact",dangerouslySetInnerHTML:{__html:this.randerImgs()}})]}),Object(h.jsxs)("div",{className:"LaunchPad_list_item_right",children:[Object(h.jsxs)("div",{className:"item_info2 all_phone_show ",children:[Object(h.jsx)("span",{className:"item_left_title",children:a[t.nftDetail_NFTtreaty].name}),"MetaOasis"==a[t.nftDetail_NFTtreaty].name?Object(h.jsx)("div",{className:"noRepurchaseBox",children:Object(h.jsxs)("span",{children:[" ",this.props.t("Repurchase_is_not_supported")]})}):"",Object(h.jsx)("span",{className:"item_left_info",dangerouslySetInnerHTML:{__html:a[t.nftDetail_NFTtreaty].aboutGame}})]}),Object(h.jsx)("div",{className:"item_right_btn_border",children:Object(h.jsx)("div",{className:"completed_btn",children:Object(h.jsx)(o.b,{to:"/NewLaunchPadDetail/"+t.orderId,children:Object(h.jsx)("span",{children:this.props.t("PersonalCenterResult_check")})})})})]})]})})]})}}]),s}(r.Component);t.default=Object(_.b)(m.b,m.a)(Object(d.a)()(b))}}]);