(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(55)},48:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),s=a.n(o),c=(a(48),a(19)),l=a(20),u=a(33),i=a(21),d=a(36),f=function(e){return fetch("".concat("https://api.foursquare.com","/v2/venues/").concat(e,"?client_id=").concat("CX5YHC2KT4US3CNEUCVJRLQ1Z4TNTKP2IYKCPJFNNHWW3EWH","&client_secret=").concat("OQU5CNIMZAEM51Y5KNQIPH0T0IPNA4XBDWG200ZFBODOUDAZ","&v=").concat("20181105")).then(function(e){if(!e.ok)throw Error(e.statusText);return e}).then(function(e){return e.json()}).catch(function(e){console.log(e)})},m=a(39),p=a.n(m),g=a(58),h=a(61),b=a(59),v=a(57),y=a(60),E=[{name:"Barista's",location:{lat:37.738299,lng:-121.428354},address:"112 W. 10th Street, Tracy, CA",tags:"coffee, cafe, tea",foursquareId:"4b8016ccf964a520145130e3"},{name:"Tracy Thai",location:{lat:37.739229,lng:-121.426131},address:"1035 N Central Ave, Tracy, CA",tags:"restaurant, food, thai",foursquareId:"4b9aa92bf964a520b6ca35e3"},{name:"The Press",location:{lat:37.738864,lng:-121.429076},address:"A Street, Tracy, CA",tags:"bar, restaurant, wine, pub, beer, burgers, steak",foursquareId:"5a0e4af16f0aa20fbffe2c03"},{name:"Delta Brews",location:{lat:37.738598,lng:-121.427212},address:"47 W 10th St, Tracy, CA",tags:"bar, restaurant, pub, beer, wine, american, burgers, steak",foursquareId:"549f4134498ebcdda7412125"},{name:"Sweet Arts",location:{lat:37.738959,lng:-121.427737},address:"1020 B St, Tracy, CA",tags:"bakery, sweets",foursquareId:"55fd9ead498ea5a0043ee2fd"},{name:"THE|COMMONS",location:{lat:37.738676,lng:-121.427106},address:"49 W 10th St, Tracy, CA",tags:"bar, restaurant, pub, beer, wine, american, steak",foursquareId:"534c5210498e28c868cd9ff3"},{name:"Bistro 135",location:{lat:37.73876,lng:-121.428705},address:"135 W 10th St, Tracy, CA",tags:"bar, restaurant, pub, beer, wine, american, steakhouse",foursquareId:"5704519d498e87cf57eb55d5"},{name:"Helm's Ale House",location:{lat:37.734977,lng:-121.425592},address:"600 N Central Ave, Tracy, CA",tags:"bar, restaurant, pub, beer, wine, ale, american, salad",foursquareId:"4bdb23b5fed22d7f607e57c9"},{name:"Thai Cafe",location:{lat:37.73512,lng:-121.425557},address:"614 N Central Ave, Tracy, CA",tags:"restaurant, food, thai",foursquareId:"4bcf4d55caff952169e7ccf0"},{name:"Magellan's Restaurant",location:{lat:37.734987,lng:-121.425287},address:"15 E 6th St, Tracy, CA",tags:"restaurant, food, italian, wine, salad",foursquareId:"4c055e1e9a7920a1308ad279"},{name:"Thai Jasmine",location:{lat:37.738674,lng:-121.426778},address:"29 W 10th St, Tracy, CA",tags:"restaurant, food, thai",foursquareId:"538691ef498edfec60a568f5"},{name:"World Coffee House",location:{lat:37.738723,lng:-121.427695},address:"69 W 10th St, Tracy, CA",tags:"coffee, cafe, tea",foursquareId:"4dcedbc722718eed7a438b48"}],I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.foursquareInfo,t=e.response.venue.bestPhoto.prefix+"240x180"+e.response.venue.bestPhoto.suffix,a=e.response.venue.location.address+", "+e.response.venue.location.city+", "+e.response.venue.location.state,n=e.response.venue.contact.formattedPhone,o=e.response.venue.rating+" out of 10";return e.response.venue.location.address||(a="No address listed, "+e.response.venue.location.city+", "+e.response.venue.location.state),e.response.venue.contact.formattedPhone||(n="No phone listed"),e.response.venue.rating||(o="No rating provided"),r.a.createElement("div",null,r.a.createElement("h3",null,e.response.venue.name),r.a.createElement("img",{className:"d-block w-100",src:t,alt:e.response.venue.name}),r.a.createElement("p",{className:"lead"},a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"Price: ",r.a.createElement("span",{className:"text-success"},e.response.venue.price.message)),r.a.createElement("li",{className:"list-group-item"},"Phone: ",n),r.a.createElement("li",{className:"list-group-item"},e.response.venue.likes.count," people liked this place"),r.a.createElement("li",{className:"list-group-item"},"Rating: ",o)),r.a.createElement("small",{className:"text-muted"},"Data retrieved from FourSquare"))}}]),t}(n.Component),k=(a(50),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={selectedRestaurant:{},selectedRestaurantInfo:{},loaded:!1,locations:E,locationMap:E.location,query:"",result:[],noResult:!0,selected:!1,currentPosition:[37.7383176,-121.4291585],alertType:"",alertMessage:"",sidebar:!0},a.resetMap=function(){a.setState({selected:!1,alertMessage:""})},a.resetSelection=function(){a.setState({selectedRestaurantInfo:{},loaded:!1,alertMessage:""})},a.toggleSidebar=function(){a.state.sidebar?a.setState({sidebar:!1}):a.setState({sidebar:!0})},a.updateQuery=function(e){if(a.setState({query:e}),e){var t=new RegExp(p()(e),"i"),n=a.state.locations.filter(function(e){return t.test(e.name)||t.test(e.tags)});a.setState({result:n,noResult:!1,selected:!1})}else a.setState({result:[],noResult:!0,selected:!1})},a.updateSelectedRestaurant=function(e){a.setState({selectedRestaurant:e,selected:!0,loaded:!1,currentPosition:e.location})},a.fetchRestaurant=function(e){f(e).then(function(e){a.setState({selectedRestaurantInfo:e})}).then(function(e){a.state.selectedRestaurantInfo?a.setState({loaded:!0}):a.setState({loaded:!1,alertType:"error",alertMessage:"Unable to fetch FourSquare Info"})})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a=this,n=this.state,o=n.selectedRestaurant,s=n.sidebar,c=n.locations,l=n.query,u=n.result,i=n.noResult,d=n.selected,f=n.currentPosition,m=n.selectedRestaurantInfo,p=n.loaded,E=n.alertMessage;p?e=r.a.createElement(I,{foursquareInfo:m}):(t=E||"Loading...",e=r.a.createElement("p",null,t));return r.a.createElement("div",null,!s&&r.a.createElement("button",{type:"button",className:"btn btn-outline-dark map-toggle",tabIndex:"1",onClick:function(e){return a.toggleSidebar()}},"Toggle Menu"),s&&r.a.createElement("nav",{className:"sidebar"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary btn-block",tabIndex:"3",onClick:function(e){return a.toggleSidebar()}},"Toggle Menu"),r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("h1",{className:"logo"},"Downtown Tracy Eats")),r.a.createElement("input",{type:"text",className:"form-control search-form",role:"search",placeholder:"Search",tabIndex:"1",value:l,onChange:function(e){return a.updateQuery(e.target.value)},onClick:function(e){return a.resetMap()}}),u.length>0&&r.a.createElement("ul",{className:"list-unstyled components results"},u.map(function(e){return r.a.createElement("li",{key:e.foursquareId},r.a.createElement("button",{tabIndex:"2",onClick:function(t){return a.updateSelectedRestaurant(e)}},e.name))})),i&&r.a.createElement("ul",{className:"list-unstyled components results"},c.map(function(e){return r.a.createElement("li",{key:e.foursquareId},r.a.createElement("button",{tabIndex:"2",onClick:function(t){return a.updateSelectedRestaurant(e)}},e.name))})),0===u.length&&!i&&r.a.createElement("ul",{className:"list-unstyled components results",tabIndex:"2"},r.a.createElement("li",null,"No results"))),r.a.createElement(g.a,{center:f,zoom:16,onClick:function(e){return a.resetMap()},zoomControl:!1},r.a.createElement(h.a,{position:"topright"}),r.a.createElement(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),!d&&u.map(function(t){return r.a.createElement(v.a,{key:"marker-".concat(t.foursquareId),id:"marker-".concat(t.foursquareId),position:t.location,onClick:function(e){return a.fetchRestaurant(t.foursquareId)}},r.a.createElement(y.a,{className:"popup-content",id:t.foursquareId,key:"popup-".concat(t.foursquareId)},e))}),!d&&i&&c.map(function(t){return r.a.createElement(v.a,{key:"marker-".concat(t.foursquareId),id:"marker-".concat(t.foursquareId),position:t.location,onClick:function(e){return a.fetchRestaurant(t.foursquareId)},onPopupclose:function(e){return a.resetSelection()}},r.a.createElement(y.a,{className:"popup-content",id:t.foursquareId,key:"popup-".concat(t.foursquareId)},e))}),d&&r.a.createElement(v.a,{key:"marker-".concat(o.foursquareId),position:o.location,onClick:function(e){return a.fetchRestaurant(o.foursquareId)}},r.a.createElement(y.a,{className:"popup-content",id:o.foursquareId,key:"popup-".concat(o.foursquareId)},e))))}}]),t}(n.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/neighborhood-map-live",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/neighborhood-map-live","/service-worker.js");w?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):C(t,e)})}}()}},[[43,2,1]]]);
//# sourceMappingURL=main.b9ea31a1.chunk.js.map