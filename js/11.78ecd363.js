(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"0668":function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{directives:[{name:"scroll",rawName:"v-scroll",value:t.scrolled,expression:"scrolled"}],attrs:{view:"hhh lpR fff"}},[a("q-header",{staticClass:"navbar text-white q-pa-sm q-pr-md",attrs:{id:"nav",reveal:""}},[a("q-toolbar",{staticClass:"constrainNav"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",{staticClass:"foerderer sp-text"},[t._v("Förderer:")])]),a("div",{staticClass:"col"},[a("a",{attrs:{href:"https://www.leifheit-stiftung-nassau.de/",target:"_blank"}},[a("img",{staticClass:"sp-img-stiftung",attrs:{src:"Stiftung_logo.png"}})])]),a("div",{staticClass:"col"},[a("a",{attrs:{href:"https://www.lotto-rlp.de/lotto-stiftung/stiftungsportrait",target:"_blank"}},[a("img",{staticClass:"sp-img-lotto",attrs:{src:"lotto2.jpg"}})])]),a("div",{staticClass:"col partner"},[a("p",{staticClass:"sp-text"},[t._v("Partner:")])]),a("div",{staticClass:"col"},[a("a",{attrs:{href:"https://www.leifheit-campus.de/",target:"_blank"}},[a("img",{staticClass:"sp-img-lc",attrs:{src:"LC-Logo.png"}})])])]),a("a",{attrs:{href:"/"}},[a("img",{staticClass:"logo",attrs:{src:"auk-logo.svg"}})]),a("q-toolbar-title",{staticClass:"logo-name",on:{click:function(e){return t.handleScroll("home")}}}),a("q-btn",{staticClass:"small-screen-only menu-btn",attrs:{dense:"",flat:"",round:"",color:"$secondary",icon:"menu"},on:{click:function(e){t.right=!t.right}}}),a("q-tabs",{staticClass:"large-screen-only menu2",attrs:{"indicator-color":"transparent",shrink:"",stretch:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-btn-dropdown",{staticClass:"stream-dropdown",attrs:{"auto-close":"",stretch:"",flat:""},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",[a("div",{staticClass:"row items-center no-wrap"},[t._v("\n                Streaming\n              ")])])]},proxy:!0}])},[a("q-list",[a("q-item",{attrs:{clickable:"",to:"/stream1"},on:{click:function(e){t.tab="stream-1"}}},[a("q-item-section",[t._v("Stream 1")])],1),a("q-item",{attrs:{clickable:"",to:"/stream2"},on:{click:function(e){t.tab="stream-2"}}},[a("q-item-section",[t._v("Stream 2")])],1),a("q-item",{attrs:{clickable:"",to:"/stream3"},on:{click:function(e){t.tab="stream-3"}}},[a("q-item-section",[t._v("Stream 3")])],1),a("q-item",{attrs:{clickable:"",to:"/stream4"},on:{click:function(e){t.tab="stream-4"}}},[a("q-item-section",[t._v("Stream 4")])],1)],1)],1),a("q-route-tab",{attrs:{name:"movies",label:"Aktuelles Konzept",to:"/concept"}}),a("q-route-tab",{attrs:{name:"movies",label:"Kontakt",to:"/contact"}}),a("q-route-tab",{attrs:{name:"movies",label:"Impressum",to:"/impressum"}}),a("q-route-tab",{attrs:{name:"movies",label:"Datenschutz",to:"/datenschutz"}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"false",side:"right",overlay:"",bordered:"","right-side":""},model:{value:t.right,callback:function(e){t.right=e},expression:"right"}},[a("q-tabs",{attrs:{shrink:"",stretch:"",vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{name:"home",label:"Home",to:"/"}}),a("q-btn-dropdown",{staticClass:"streaming-dropdown-drawer",attrs:{"auto-close":"",stretch:"",flat:""},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",[a("div",{staticClass:"row items-center no-wrap"},[t._v("\n              Streaming\n            ")])])]},proxy:!0}])},[a("q-list",[a("q-item",{attrs:{clickable:"",to:"/stream1"},on:{click:function(e){t.tab="stream-1"}}},[a("q-item-section",[t._v("Stream 1")])],1),a("q-item",{attrs:{clickable:"",to:"/stream2"},on:{click:function(e){t.tab="stream-2"}}},[a("q-item-section",[t._v("Stream 2")])],1),a("q-item",{attrs:{clickable:"",to:"/stream3"},on:{click:function(e){t.tab="stream-3"}}},[a("q-item-section",[t._v("Stream 3")])],1),a("q-item",{attrs:{clickable:"",to:"/stream4"},on:{click:function(e){t.tab="stream-4"}}},[a("q-item-section",[t._v("Stream 4")])],1)],1)],1),a("q-route-tab",{attrs:{name:"movies",label:"Konzept",to:"/concept"}}),a("q-route-tab",{attrs:{name:"movies",label:"Kontakt",to:"/contact"}}),a("q-route-tab",{attrs:{name:"movies",label:"Impressum",to:"/impressum"}}),a("q-route-tab",{attrs:{name:"movies",label:"Datenschutz",to:"/datenschutz"}})],1)],1),a("q-page-container",[a("keep-alive",[a("router-view")],1),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,40]}},[a("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"secondary"}})],1)],1)],1)},o=[],r=(a("ddb0"),a("0831"));const{getScrollTarget:n,setScrollPosition:i}=r["a"];console.log("remove service worker"),navigator.serviceWorker.getRegistrations().then((function(t){for(let e of t)e.unregister()}));var l={name:"MainLayout",data(){return{right:!1,scrollInfo:{},tab:"",menus:[{id:1,icon:"home",label:"Home",tab:"tab1",section:"#home",to:"/"},{id:2,icon:"send",label:"Streaming",tab:"tab2",section:"#theGame",to:"/streaming"},{id:3,icon:"delete",label:"Kontakt",tab:"tab3",section:"#rules",to:"/contact"},{id:4,icon:"error",label:"Konzept",tab:"tab4",section:"#download",to:"/concept"},{id:5,icon:"error",label:"Impressum",tab:"tab5",section:"#faq",to:"/impressum"}]}},methods:{handleScroll(t){const e=document.getElementById(t),a=n(e);this.right=!1;const s=e.offsetTop,o=600;i(a,s,o)},onItemChanged(t,e,a){console.log("changed")},scrolled(t){if(t>window.innerHeight/10*7){var e=document.getElementById("nav");e.style.backgroundColor="#141111",e.style.transitionDuration="1s"}else{e=document.getElementById("nav");e.style.backgroundColor="transparent",e.style.transitionDuration=".5s"}}}},c=l,m=(a("83ec"),a("2877")),b=a("4d5a"),u=a("e359"),d=a("65c6"),p=a("6ac5"),g=a("9c40"),f=a("429b"),v=a("7867"),h=a("f20b"),q=a("1c1c"),k=a("66e5"),w=a("4074"),C=a("9404"),_=a("09e3"),S=a("5096"),y=a("f09f"),Q=a("7460"),x=a("4396"),I=a("eebe"),T=a.n(I),z=Object(m["a"])(c,s,o,!1,null,null,null);e["default"]=z.exports;T()(z,"components",{QLayout:b["a"],QHeader:u["a"],QToolbar:d["a"],QToolbarTitle:p["a"],QBtn:g["a"],QTabs:f["a"],QRouteTab:v["a"],QBtnDropdown:h["a"],QList:q["a"],QItem:k["a"],QItemSection:w["a"],QDrawer:C["a"],QPageContainer:_["a"],QPageScroller:S["a"],QCard:y["a"],QTab:Q["a"]}),T()(z,"directives",{Scroll:x["a"]})},"83ec":function(t,e,a){"use strict";var s=a("0668"),o=a.n(s);o.a}}]);