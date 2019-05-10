/*! Sortable 1.0.0 - MIT | git://github.com/rubaxa/Sortable.git */
!function(a){"use strict";"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a():"undefined"!=typeof Package?Sortable=a():window.Sortable=a()}(function(){"use strict";function a(a,b){this.el=a,this.options=b=b||{};var d={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(a.nodeName)?"li":">*",ghostClass:"sortable-ghost",ignore:"a, img",filter:null,animation:0,setData:function(a,b){a.setData("Text",b.textContent)}};for(var e in d)!(e in b)&&(b[e]=d[e]);var g=b.group;g&&"object"==typeof g||(g=b.group={name:g}),["pull","put"].forEach(function(a){a in g||(g[a]=!0)}),K.forEach(function(d){b[d]=c(this,b[d]||L),f(a,d.substr(2).toLowerCase(),b[d])},this),a[D]=g.name+" "+(g.put.join?g.put.join(" "):"");for(var h in this)"_"===h.charAt(0)&&(this[h]=c(this,this[h]));f(a,"mousedown",this._onTapStart),f(a,"touchstart",this._onTapStart),H&&f(a,"selectstart",this._onTapStart),f(a,"dragover",this._onDragOver),f(a,"dragenter",this._onDragOver),O.push(this._onDragOver),b.store&&this.sort(b.store.get(this))}function b(a){t&&t.state!==a&&(i(t,"display",a?"none":""),!a&&t.state&&u.insertBefore(t,q),t.state=a)}function c(a,b){var c=N.call(arguments,2);return b.bind?b.bind.apply(b,[a].concat(c)):function(){return b.apply(a,c.concat(N.call(arguments)))}}function d(a,b,c){if(a){c=c||F,b=b.split(".");var d=b.shift().toUpperCase(),e=new RegExp("\\s("+b.join("|")+")\\s","g");do if(">*"===d&&a.parentNode===c||(""===d||a.nodeName==d)&&(!b.length||((" "+a.className+" ").match(e)||[]).length==b.length))return a;while(a!==c&&(a=a.parentNode))}return null}function e(a){a.dataTransfer.dropEffect="move",a.preventDefault()}function f(a,b,c){a.addEventListener(b,c,!1)}function g(a,b,c){a.removeEventListener(b,c,!1)}function h(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(/\s+/g," ").replace(" "+b+" ","");a.className=d+(c?" "+b:"")}}function i(a,b,c){var d=a&&a.style;if(d){if(void 0===c)return F.defaultView&&F.defaultView.getComputedStyle?c=F.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];b in d||(b="-webkit-"+b),d[b]=c+("string"==typeof c?"":"px")}}function j(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;f>e;e++)c(d[e],e);return d}return[]}function k(a){a.draggable=!1}function l(){I=!1}function m(a,b){var c=a.lastElementChild,d=c.getBoundingClientRect();return b.clientY-(d.top+d.height)>5&&c}function n(a){for(var b=a.tagName+a.className+a.src+a.href+a.textContent,c=b.length,d=0;c--;)d+=b.charCodeAt(c);return d.toString(36)}function o(a){for(var b=0;a&&(a=a.previousElementSibling)&&"TEMPLATE"!==a.nodeName;)b++;return b}function p(a,b){var c,d;return function(){void 0===c&&(c=arguments,d=this,setTimeout(function(){1===c.length?a.call(d,c[0]):a.apply(d,c),c=void 0},b))}}var q,r,s,t,u,v,w,x,y,z,A,B,C={},D="Sortable"+(new Date).getTime(),E=window,F=E.document,G=E.parseInt,H=!!F.createElement("div").dragDrop,I=!1,J=function(a,b,c,d,e,f){var g=F.createEvent("Event");g.initEvent(b,!0,!0),g.item=c||a,g.from=d||a,g.oldIndex=e,g.newIndex=f,a.dispatchEvent(g)},K="onAdd onUpdate onRemove onStart onEnd onFilter onSort".split(" "),L=function(){},M=Math.abs,N=[].slice,O=[];return a.prototype={constructor:a,_dragStarted:function(){h(q,this.options.ghostClass,!0),a.active=this,J(u,"start",q,u,r)},_onTapStart:function(a){var b=a.type,c=a.touches&&a.touches[0],e=(c||a).target,g=e,h=this.options,l=this.el,m=h.filter;if(!("mousedown"===b&&0!==a.button||h.disabled)){if(h.handle&&(e=d(e,h.handle,l)),e=d(e,h.draggable,l),r=o(e),"function"==typeof m){if(m.call(this,a,e,this))return J(g,"filter",e,l,r),a.preventDefault(),void 0}else if(m&&(m=m.split(",").some(function(a){return a=d(g,a.trim(),l),a?(J(a,"filter",e,l,r),!0):void 0})))return a.preventDefault(),void 0;if(e&&!q&&e.parentNode===l){"selectstart"===b&&e.dragDrop(),A=a,u=this.el,q=e,w=q.nextSibling,z=this.options.group,q.draggable=!0,h.ignore.split(",").forEach(function(a){j(e,a.trim(),k)}),c&&(A={target:e,clientX:c.clientX,clientY:c.clientY},this._onDragStart(A,!0),a.preventDefault()),f(F,"mouseup",this._onDrop),f(F,"touchend",this._onDrop),f(F,"touchcancel",this._onDrop),f(q,"dragend",this),f(u,"dragstart",this._onDragStart),f(F,"dragover",this);try{F.selection?F.selection.empty():window.getSelection().removeAllRanges()}catch(n){}"clone"==z.pull&&(t=q.cloneNode(!0),i(t,"display","none"),u.insertBefore(t,q))}}},_emulateDragOver:function(){if(B){i(s,"display","none");var a=F.elementFromPoint(B.clientX,B.clientY),b=a,c=this.options.group.name,d=O.length;if(b)do{if((" "+b[D]+" ").indexOf(c)>-1){for(;d--;)O[d]({clientX:B.clientX,clientY:B.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);i(s,"display","")}},_onTouchMove:function(a){if(A){var b=a.touches[0],c=b.clientX-A.clientX,d=b.clientY-A.clientY,e="translate3d("+c+"px,"+d+"px,0)";B=b,i(s,"webkitTransform",e),i(s,"mozTransform",e),i(s,"msTransform",e),i(s,"transform",e),this._onDrag(b),a.preventDefault()}},_onDragStart:function(a,b){var c=a.dataTransfer,d=this.options;if(this._offUpEvents(),b){var e,g=q.getBoundingClientRect(),h=i(q);s=q.cloneNode(!0),i(s,"top",g.top-G(h.marginTop,10)),i(s,"left",g.left-G(h.marginLeft,10)),i(s,"width",g.width),i(s,"height",g.height),i(s,"opacity","0.8"),i(s,"position","fixed"),i(s,"zIndex","100000"),u.appendChild(s),e=s.getBoundingClientRect(),i(s,"width",2*g.width-e.width),i(s,"height",2*g.height-e.height),f(F,"touchmove",this._onTouchMove),f(F,"touchend",this._onDrop),f(F,"touchcancel",this._onDrop),this._loopId=setInterval(this._emulateDragOver,150)}else c.effectAllowed="move",d.setData&&d.setData.call(this,c,q),f(F,"drop",this);if(v=d.scroll,v===!0){v=u;do if(v.offsetWidth<v.scrollWidth||v.offsetHeight<v.scrollHeight)break;while(v=v.parentNode)}setTimeout(this._dragStarted,0)},_onDrag:p(function(a){if(u&&this.options.scroll){var b,c,d=this.options,e=d.scrollSensitivity,f=d.scrollSpeed,g=a.clientX,h=a.clientY,i=window.innerWidth,j=window.innerHeight,k=(e>=i-g)-(e>=g),l=(e>=j-h)-(e>=h);k||l?b=E:v&&(b=v,c=v.getBoundingClientRect(),k=(M(c.right-g)<=e)-(M(c.left-g)<=e),l=(M(c.bottom-h)<=e)-(M(c.top-h)<=e)),(C.vx!==k||C.vy!==l||C.el!==b)&&(C.el=b,C.vx=k,C.vy=l,clearInterval(C.pid),b&&(C.pid=setInterval(function(){b===E?E.scrollTo(E.scrollX+k*f,E.scrollY+l*f):(l&&(b.scrollTop+=l*f),k&&(b.scrollLeft+=k*f))},24)))}},30),_onDragOver:function(a){var c,e,f,g=this.el,h=this.options,j=h.group,k=j.put,n=z===j,o=h.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),a.stopPropagation()),!I&&z&&(n?o||(f=!u.contains(q)):z.pull&&k&&(z.name===j.name||k.indexOf&&~k.indexOf(z.name)))&&(void 0===a.rootEl||a.rootEl===this.el)){if(c=d(a.target,h.draggable,g),e=q.getBoundingClientRect(),f)return b(!0),t||w?u.insertBefore(q,t||w):o||u.appendChild(q),void 0;if(0===g.children.length||g.children[0]===s||g===a.target&&(c=m(g,a))){if(c){if(c.animated)return;r=c.getBoundingClientRect()}b(n),g.appendChild(q),this._animate(e,q),c&&this._animate(r,c)}else if(c&&!c.animated&&c!==q&&void 0!==c.parentNode[D]){x!==c&&(x=c,y=i(c));var p,r=c.getBoundingClientRect(),v=r.right-r.left,A=r.bottom-r.top,B=/left|right|inline/.test(y.cssFloat+y.display),C=c.offsetWidth>q.offsetWidth,E=c.offsetHeight>q.offsetHeight,F=(B?(a.clientX-r.left)/v:(a.clientY-r.top)/A)>.5,G=c.nextElementSibling;I=!0,setTimeout(l,30),b(n),p=B?c.previousElementSibling===q&&!C||F&&C:G!==q&&!E||F&&E,p&&!G?g.appendChild(q):c.parentNode.insertBefore(q,p?G:c),this._animate(e,q),this._animate(r,c)}}},_animate:function(a,b){var c=this.options.animation;if(c){var d=b.getBoundingClientRect();i(b,"transition","none"),i(b,"transform","translate3d("+(a.left-d.left)+"px,"+(a.top-d.top)+"px,0)"),b.offsetWidth,i(b,"transition","all "+c+"ms"),i(b,"transform","translate3d(0,0,0)"),clearTimeout(b.animated),b.animated=setTimeout(function(){i(b,"transition",""),b.animated=!1},c)}},_offUpEvents:function(){g(F,"mouseup",this._onDrop),g(F,"touchmove",this._onTouchMove),g(F,"touchend",this._onDrop),g(F,"touchcancel",this._onDrop)},_onDrop:function(b){var c=this.el;if(clearInterval(this._loopId),clearInterval(C.pid),g(F,"drop",this),g(F,"dragover",this),g(c,"dragstart",this._onDragStart),this._offUpEvents(),b){if(b.preventDefault(),b.stopPropagation(),s&&s.parentNode.removeChild(s),q){g(q,"dragend",this);var d=o(q);k(q),h(q,this.options.ghostClass,!1),u!==q.parentNode?(J(q.parentNode,"sort",q,u,r,d),J(u,"sort",q,u,r,d),J(q,"add",q,u,r,d),J(u,"remove",q,u,r,d)):q.nextSibling!==w&&(J(u,"update",q,u,r,d),J(u,"sort",q,u,r,d),t&&t.parentNode.removeChild(t)),a.active&&J(u,"end",q,u,r,d)}u=q=s=w=t=A=B=x=y=z=a.active=null,this.save()}},handleEvent:function(a){var b=a.type;"dragover"===b?(this._onDrag(a),e(a)):("drop"===b||"dragend"===b)&&this._onDrop(a)},toArray:function(){for(var a,b=[],c=this.el.children,e=0,f=c.length;f>e;e++)a=c[e],d(a,this.options.draggable,this.el)&&b.push(a.getAttribute("data-id")||n(a));return b},sort:function(a){var b={},c=this.el;this.toArray().forEach(function(a,e){var f=c.children[e];d(f,this.options.draggable,c)&&(b[a]=f)},this),a.forEach(function(a){b[a]&&(c.removeChild(b[a]),c.appendChild(b[a]))})},save:function(){var a=this.options.store;a&&a.set(this)},closest:function(a,b){return d(a,b||this.options.draggable,this.el)},option:function(a,b){var c=this.options;return void 0===b?c[a]:(c[a]=b,void 0)},destroy:function(){var a=this.el,b=this.options;K.forEach(function(c){g(a,c.substr(2).toLowerCase(),b[c])}),g(a,"mousedown",this._onTapStart),g(a,"touchstart",this._onTapStart),g(a,"selectstart",this._onTapStart),g(a,"dragover",this._onDragOver),g(a,"dragenter",this._onDragOver),Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),O.splice(O.indexOf(this._onDragOver),1),this._onDrop(),this.el=null}},a.utils={on:f,off:g,css:i,find:j,bind:c,is:function(a,b){return!!d(a,b,a)},throttle:p,closest:d,toggleClass:h,dispatchEvent:J,index:o},a.version="1.0.0",a.create=function(b,c){return new a(b,c)},a});