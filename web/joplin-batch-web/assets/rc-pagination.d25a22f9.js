import{d as C,f as se,g as oe,h as le,i as ue,a as me,e as G}from"./@babel/runtime.77033aed.js";import{R as l,r as k}from"./react.bcb0ff15.js";import{c as I}from"./classnames.fcae7549.js";const Ie={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};var J=function(u){var h,i="".concat(u.rootPrefixCls,"-item"),e=I(i,"".concat(i,"-").concat(u.page),(h={},C(h,"".concat(i,"-active"),u.active),C(h,"".concat(i,"-disabled"),!u.page),C(h,u.className,!!u.className),h)),t=function(){u.onClick(u.page)},n=function(o){u.onKeyPress(o,u.onClick,u.page)};return l.createElement("li",{title:u.showTitle?u.page:null,className:e,onClick:t,onKeyPress:n,tabIndex:"0"},u.itemRender(u.page,"page",l.createElement("a",{rel:"nofollow"},u.page)))};const _={ZERO:48,NINE:57,NUMPAD_ZERO:96,NUMPAD_NINE:105,BACKSPACE:8,DELETE:46,ENTER:13,ARROW_UP:38,ARROW_DOWN:40};var ce=function(P){se(h,P);var u=oe(h);function h(){var i;le(this,h);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i=u.call.apply(u,[this].concat(t)),i.state={goInputText:""},i.buildOptionText=function(r){return"".concat(r," ").concat(i.props.locale.items_per_page)},i.changeSize=function(r){i.props.changeSize(Number(r))},i.handleChange=function(r){i.setState({goInputText:r.target.value})},i.handleBlur=function(r){var o=i.props,a=o.goButton,s=o.quickGo,p=o.rootPrefixCls,c=i.state.goInputText;a||c===""||(i.setState({goInputText:""}),!(r.relatedTarget&&(r.relatedTarget.className.indexOf("".concat(p,"-item-link"))>=0||r.relatedTarget.className.indexOf("".concat(p,"-item"))>=0))&&s(i.getValidValue()))},i.go=function(r){var o=i.state.goInputText;o!==""&&(r.keyCode===_.ENTER||r.type==="click")&&(i.setState({goInputText:""}),i.props.quickGo(i.getValidValue()))},i}return ue(h,[{key:"getValidValue",value:function(){var e=this.state.goInputText;return!e||isNaN(e)?void 0:Number(e)}},{key:"getPageSizeOptions",value:function(){var e=this.props,t=e.pageSize,n=e.pageSizeOptions;return n.some(function(r){return r.toString()===t.toString()})?n:n.concat([t.toString()]).sort(function(r,o){var a=isNaN(Number(r))?0:Number(r),s=isNaN(Number(o))?0:Number(o);return a-s})}},{key:"render",value:function(){var e=this,t=this.props,n=t.pageSize,r=t.locale,o=t.rootPrefixCls,a=t.changeSize,s=t.quickGo,p=t.goButton,c=t.selectComponentClass,x=t.buildOptionText,y=t.selectPrefixCls,f=t.disabled,z=this.state.goInputText,N="".concat(o,"-options"),d=c,D=null,O=null,T=null;if(!a&&!s)return null;var U=this.getPageSizeOptions();if(a&&d){var W=U.map(function(w,b){return l.createElement(d.Option,{key:b,value:w.toString()},(x||e.buildOptionText)(w))});D=l.createElement(d,{disabled:f,prefixCls:y,showSearch:!1,className:"".concat(N,"-size-changer"),optionLabelProp:"children",dropdownMatchSelectWidth:!1,value:(n||U[0]).toString(),onChange:this.changeSize,getPopupContainer:function(b){return b.parentNode},"aria-label":r.page_size,defaultOpen:!1},W)}return s&&(p&&(T=typeof p=="boolean"?l.createElement("button",{type:"button",onClick:this.go,onKeyUp:this.go,disabled:f,className:"".concat(N,"-quick-jumper-button")},r.jump_to_confirm):l.createElement("span",{onClick:this.go,onKeyUp:this.go},p)),O=l.createElement("div",{className:"".concat(N,"-quick-jumper")},r.jump_to,l.createElement("input",{disabled:f,type:"text",value:z,onChange:this.handleChange,onKeyUp:this.go,onBlur:this.handleBlur,"aria-label":r.page}),r.page,T)),l.createElement("li",{className:"".concat(N)},D,O)}}]),h}(l.Component);ce.defaultProps={pageSizeOptions:["10","20","50","100"]};const ve={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"};function Q(){}function ie(P){var u=Number(P);return typeof u=="number"&&!isNaN(u)&&isFinite(u)&&Math.floor(u)===u}function xe(P,u,h){return h}function E(P,u,h){var i=typeof P>"u"?u.pageSize:P;return Math.floor((h.total-1)/i)+1}var Ce=function(P){se(h,P);var u=oe(h);function h(i){var e;le(this,h),e=u.call(this,i),e.getJumpPrevPage=function(){return Math.max(1,e.state.current-(e.props.showLessItems?3:5))},e.getJumpNextPage=function(){return Math.min(E(void 0,e.state,e.props),e.state.current+(e.props.showLessItems?3:5))},e.getItemIcon=function(a,s){var p=e.props.prefixCls,c=a||l.createElement("button",{type:"button","aria-label":s,className:"".concat(p,"-item-link")});return typeof a=="function"&&(c=l.createElement(a,me({},e.props))),c},e.savePaginationNode=function(a){e.paginationNode=a},e.isValid=function(a){var s=e.props.total;return ie(a)&&a!==e.state.current&&ie(s)&&s>0},e.shouldDisplayQuickJumper=function(){var a=e.props,s=a.showQuickJumper,p=a.total,c=e.state.pageSize;return p<=c?!1:s},e.handleKeyDown=function(a){(a.keyCode===_.ARROW_UP||a.keyCode===_.ARROW_DOWN)&&a.preventDefault()},e.handleKeyUp=function(a){var s=e.getValidValue(a),p=e.state.currentInputValue;s!==p&&e.setState({currentInputValue:s}),a.keyCode===_.ENTER?e.handleChange(s):a.keyCode===_.ARROW_UP?e.handleChange(s-1):a.keyCode===_.ARROW_DOWN&&e.handleChange(s+1)},e.handleBlur=function(a){var s=e.getValidValue(a);e.handleChange(s)},e.changePageSize=function(a){var s=e.state.current,p=E(a,e.state,e.props);s=s>p?p:s,p===0&&(s=e.state.current),typeof a=="number"&&("pageSize"in e.props||e.setState({pageSize:a}),"current"in e.props||e.setState({current:s,currentInputValue:s})),e.props.onShowSizeChange(s,a),"onChange"in e.props&&e.props.onChange&&e.props.onChange(s,a)},e.handleChange=function(a){var s=e.props,p=s.disabled,c=s.onChange,x=e.state,y=x.pageSize,f=x.current,z=x.currentInputValue;if(e.isValid(a)&&!p){var N=E(void 0,e.state,e.props),d=a;return a>N?d=N:a<1&&(d=1),"current"in e.props||e.setState({current:d}),d!==z&&e.setState({currentInputValue:d}),c(d,y),d}return f},e.prev=function(){e.hasPrev()&&e.handleChange(e.state.current-1)},e.next=function(){e.hasNext()&&e.handleChange(e.state.current+1)},e.jumpPrev=function(){e.handleChange(e.getJumpPrevPage())},e.jumpNext=function(){e.handleChange(e.getJumpNextPage())},e.hasPrev=function(){return e.state.current>1},e.hasNext=function(){return e.state.current<E(void 0,e.state,e.props)},e.runIfEnter=function(a,s){if(a.key==="Enter"||a.charCode===13){for(var p=arguments.length,c=new Array(p>2?p-2:0),x=2;x<p;x++)c[x-2]=arguments[x];s.apply(void 0,c)}},e.runIfEnterPrev=function(a){e.runIfEnter(a,e.prev)},e.runIfEnterNext=function(a){e.runIfEnter(a,e.next)},e.runIfEnterJumpPrev=function(a){e.runIfEnter(a,e.jumpPrev)},e.runIfEnterJumpNext=function(a){e.runIfEnter(a,e.jumpNext)},e.handleGoTO=function(a){(a.keyCode===_.ENTER||a.type==="click")&&e.handleChange(e.state.currentInputValue)};var t=i.onChange!==Q,n="current"in i;n&&!t&&console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");var r=i.defaultCurrent;"current"in i&&(r=i.current);var o=i.defaultPageSize;return"pageSize"in i&&(o=i.pageSize),r=Math.min(r,E(o,void 0,i)),e.state={current:r,currentInputValue:r,pageSize:o},e}return ue(h,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.prefixCls;if(t.current!==this.state.current&&this.paginationNode){var r=this.paginationNode.querySelector(".".concat(n,"-item-").concat(t.current));r&&document.activeElement===r&&r.blur()}}},{key:"getValidValue",value:function(e){var t=e.target.value,n=E(void 0,this.state,this.props),r=this.state.currentInputValue,o;return t===""?o=t:isNaN(Number(t))?o=r:t>=n?o=n:o=Number(t),o}},{key:"getShowSizeChanger",value:function(){var e=this.props,t=e.showSizeChanger,n=e.total,r=e.totalBoundaryShowSizeChanger;return typeof t<"u"?t:n>r}},{key:"renderPrev",value:function(e){var t=this.props,n=t.prevIcon,r=t.itemRender,o=r(e,"prev",this.getItemIcon(n,"prev page")),a=!this.hasPrev();return k.exports.isValidElement(o)?k.exports.cloneElement(o,{disabled:a}):o}},{key:"renderNext",value:function(e){var t=this.props,n=t.nextIcon,r=t.itemRender,o=r(e,"next",this.getItemIcon(n,"next page")),a=!this.hasNext();return k.exports.isValidElement(o)?k.exports.cloneElement(o,{disabled:a}):o}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.className,o=t.style,a=t.disabled,s=t.hideOnSinglePage,p=t.total,c=t.locale,x=t.showQuickJumper,y=t.showLessItems,f=t.showTitle,z=t.showTotal,N=t.simple,d=t.itemRender,D=t.showPrevNextJumpers,O=t.jumpPrevIcon,T=t.jumpNextIcon,U=t.selectComponentClass,W=t.selectPrefixCls,w=t.pageSizeOptions,b=this.state,g=b.current,V=b.pageSize,pe=b.currentInputValue;if(s===!0&&p<=V)return null;var m=E(void 0,this.state,this.props),v=[],F=null,Y=null,Z=null,H=null,R=null,A=x&&x.goButton,S=y?1:2,X=g-1>0?g-1:0,ee=g+1<m?g+1:m,te=Object.keys(this.props).reduce(function(re,B){return(B.substr(0,5)==="data-"||B.substr(0,5)==="aria-"||B==="role")&&(re[B]=e.props[B]),re},{});if(N)return A&&(typeof A=="boolean"?R=l.createElement("button",{type:"button",onClick:this.handleGoTO,onKeyUp:this.handleGoTO},c.jump_to_confirm):R=l.createElement("span",{onClick:this.handleGoTO,onKeyUp:this.handleGoTO},A),R=l.createElement("li",{title:f?"".concat(c.jump_to).concat(g,"/").concat(m):null,className:"".concat(n,"-simple-pager")},R)),l.createElement("ul",G({className:I(n,"".concat(n,"-simple"),C({},"".concat(n,"-disabled"),a),r),style:o,ref:this.savePaginationNode},te),l.createElement("li",{title:f?c.prev_page:null,onClick:this.prev,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterPrev,className:I("".concat(n,"-prev"),C({},"".concat(n,"-disabled"),!this.hasPrev())),"aria-disabled":!this.hasPrev()},this.renderPrev(X)),l.createElement("li",{title:f?"".concat(g,"/").concat(m):null,className:"".concat(n,"-simple-pager")},l.createElement("input",{type:"text",value:pe,disabled:a,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onChange:this.handleKeyUp,onBlur:this.handleBlur,size:"3"}),l.createElement("span",{className:"".concat(n,"-slash")},"/"),m),l.createElement("li",{title:f?c.next_page:null,onClick:this.next,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterNext,className:I("".concat(n,"-next"),C({},"".concat(n,"-disabled"),!this.hasNext())),"aria-disabled":!this.hasNext()},this.renderNext(ee)),R);if(m<=3+S*2){var ne={locale:c,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,showTitle:f,itemRender:d};m||v.push(l.createElement(J,G({},ne,{key:"noPager",page:1,className:"".concat(n,"-item-disabled")})));for(var j=1;j<=m;j+=1){var he=g===j;v.push(l.createElement(J,G({},ne,{key:j,page:j,active:he})))}}else{var ge=y?c.prev_3:c.prev_5,fe=y?c.next_3:c.next_5;D&&(F=l.createElement("li",{title:f?ge:null,key:"prev",onClick:this.jumpPrev,tabIndex:"0",onKeyPress:this.runIfEnterJumpPrev,className:I("".concat(n,"-jump-prev"),C({},"".concat(n,"-jump-prev-custom-icon"),!!O))},d(this.getJumpPrevPage(),"jump-prev",this.getItemIcon(O,"prev page"))),Y=l.createElement("li",{title:f?fe:null,key:"next",tabIndex:"0",onClick:this.jumpNext,onKeyPress:this.runIfEnterJumpNext,className:I("".concat(n,"-jump-next"),C({},"".concat(n,"-jump-next-custom-icon"),!!T))},d(this.getJumpNextPage(),"jump-next",this.getItemIcon(T,"next page")))),H=l.createElement(J,{locale:c,last:!0,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:m,page:m,active:!1,showTitle:f,itemRender:d}),Z=l.createElement(J,{locale:c,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:1,page:1,active:!1,showTitle:f,itemRender:d});var $=Math.max(1,g-S),L=Math.min(g+S,m);g-1<=S&&(L=1+S*2),m-g<=S&&($=m-S*2);for(var K=$;K<=L;K+=1){var de=g===K;v.push(l.createElement(J,{locale:c,rootPrefixCls:n,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:K,page:K,active:de,showTitle:f,itemRender:d}))}g-1>=S*2&&g!==1+2&&(v[0]=k.exports.cloneElement(v[0],{className:"".concat(n,"-item-after-jump-prev")}),v.unshift(F)),m-g>=S*2&&g!==m-2&&(v[v.length-1]=k.exports.cloneElement(v[v.length-1],{className:"".concat(n,"-item-before-jump-next")}),v.push(Y)),$!==1&&v.unshift(Z),L!==m&&v.push(H)}var ae=null;z&&(ae=l.createElement("li",{className:"".concat(n,"-total-text")},z(p,[p===0?0:(g-1)*V+1,g*V>p?p:g*V])));var M=!this.hasPrev()||!m,q=!this.hasNext()||!m;return l.createElement("ul",G({className:I(n,r,C({},"".concat(n,"-disabled"),a)),style:o,unselectable:"unselectable",ref:this.savePaginationNode},te),ae,l.createElement("li",{title:f?c.prev_page:null,onClick:this.prev,tabIndex:M?null:0,onKeyPress:this.runIfEnterPrev,className:I("".concat(n,"-prev"),C({},"".concat(n,"-disabled"),M)),"aria-disabled":M},this.renderPrev(X)),v,l.createElement("li",{title:f?c.next_page:null,onClick:this.next,tabIndex:q?null:0,onKeyPress:this.runIfEnterNext,className:I("".concat(n,"-next"),C({},"".concat(n,"-disabled"),q)),"aria-disabled":q},this.renderNext(ee)),l.createElement(ce,{disabled:a,locale:c,rootPrefixCls:n,selectComponentClass:U,selectPrefixCls:W,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:g,pageSize:V,pageSizeOptions:w,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:A}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n={};if("current"in e&&(n.current=e.current,e.current!==t.current&&(n.currentInputValue=n.current)),"pageSize"in e&&e.pageSize!==t.pageSize){var r=t.current,o=E(e.pageSize,t,e);r=r>o?o:r,"current"in e||(n.current=r,n.currentInputValue=r),n.pageSize=e.pageSize}return n}}]),h}(l.Component);Ce.defaultProps={defaultCurrent:1,total:0,defaultPageSize:10,onChange:Q,className:"",selectPrefixCls:"rc-select",prefixCls:"rc-pagination",selectComponentClass:null,hideOnSinglePage:!1,showPrevNextJumpers:!0,showQuickJumper:!1,showLessItems:!1,showTitle:!0,onShowSizeChange:Q,locale:ve,style:{},itemRender:xe,totalBoundaryShowSizeChanger:50};export{Ce as P,Ie as e};
