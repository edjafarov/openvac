(function(e,t){function nt(e){return $.test(e+"")}function rt(){var e,t=[];return e=function(n,r){if(t.push(n+=" ")>i.cacheLength){delete e[t.shift()]}return e[n]=r}}function it(e){e[b]=true;return e}function st(e){var t=c.createElement("div");try{return e(t)}catch(n){return false}finally{t=null}}function ot(e,t,n,r){var i,s,o,u,a,f,h,v,m,y;if((t?t.ownerDocument||t:w)!==c){l(t)}t=t||c;n=n||[];if(!e||typeof e!=="string"){return n}if((u=t.nodeType)!==1&&u!==9){return[]}if(!p&&!r){if(i=J.exec(e)){if(o=i[1]){if(u===9){s=t.getElementById(o);if(s&&s.parentNode){if(s.id===o){n.push(s);return n}}else{return n}}else{if(t.ownerDocument&&(s=t.ownerDocument.getElementById(o))&&g(t,s)&&s.id===o){n.push(s);return n}}}else if(i[2]){M.apply(n,_.call(t.getElementsByTagName(e),0));return n}else if((o=i[3])&&E.getByClassName&&t.getElementsByClassName){M.apply(n,_.call(t.getElementsByClassName(o),0));return n}}if(E.qsa&&!d.test(e)){h=true;v=b;m=t;y=u===9&&e;if(u===1&&t.nodeName.toLowerCase()!=="object"){f=ct(e);if(h=t.getAttribute("id")){v=h.replace(G,"\\$&")}else{t.setAttribute("id",v)}v="[id='"+v+"'] ";a=f.length;while(a--){f[a]=v+ht(f[a])}m=V.test(e)&&t.parentNode||t;y=f.join(",")}if(y){try{M.apply(n,_.call(m.querySelectorAll(y),0));return n}catch(S){}finally{if(!h){t.removeAttribute("id")}}}}}return wt(e.replace(q,"$1"),t,n,r)}function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||L)-(~e.sourceIndex||L);if(r){return r}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function at(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function lt(e){return it(function(t){t=+t;return it(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--){if(n[i=s[o]]){n[i]=!(r[i]=n[i])}}})})}function ct(e,t){var n,r,s,o,u,a,f,l=N[e+" "];if(l){return t?0:l.slice(0)}u=e;a=[];f=i.preFilter;while(u){if(!n||(r=R.exec(u))){if(r){u=u.slice(r[0].length)||u}a.push(s=[])}n=false;if(r=U.exec(u)){n=r.shift();s.push({value:n,type:r[0].replace(q," ")});u=u.slice(n.length)}for(o in i.filter){if((r=X[o].exec(u))&&(!f[o]||(r=f[o](r)))){n=r.shift();s.push({value:n,type:o,matches:r});u=u.slice(n.length)}}if(!n){break}}return t?u.length:u?ot.error(e):N(e,a).slice(0)}function ht(e){var t=0,n=e.length,r="";for(;t<n;t++){r+=e[t].value}return r}function pt(e,t,n){var i=t.dir,s=n&&i==="parentNode",o=x++;return t.first?function(t,n,r){while(t=t[i]){if(t.nodeType===1||s){return e(t,n,r)}}}:function(t,n,u){var a,f,l,c=S+" "+o;if(u){while(t=t[i]){if(t.nodeType===1||s){if(e(t,n,u)){return true}}}}else{while(t=t[i]){if(t.nodeType===1||s){l=t[b]||(t[b]={});if((f=l[i])&&f[0]===c){if((a=f[1])===true||a===r){return a===true}}else{f=l[i]=[c];f[1]=e(t,n,u)||r;if(f[1]===true){return true}}}}}}}function dt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--){if(!e[i](t,n,r)){return false}}return true}:e[0]}function vt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++){if(s=e[u]){if(!n||n(s,r,i)){o.push(s);if(f){t.push(u)}}}}return o}function mt(e,t,n,r,i,s){if(r&&!r[b]){r=mt(r)}if(i&&!i[b]){i=mt(i,s)}return it(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||bt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?vt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;if(n){n(m,g,u,a)}if(r){f=vt(g,p);r(f,[],u,a);l=f.length;while(l--){if(c=f[l]){g[p[l]]=!(m[p[l]]=c)}}}if(s){if(i||e){if(i){f=[];l=g.length;while(l--){if(c=g[l]){f.push(m[l]=c)}}i(null,g=[],f,a)}l=g.length;while(l--){if((c=g[l])&&(f=i?D.call(s,c):h[l])>-1){s[f]=!(o[f]=c)}}}}else{g=vt(g===o?g.splice(d,g.length):g);if(i){i(null,o,g,a)}else{M.apply(o,g)}}})}function gt(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,l=pt(function(e){return e===t},u,true),c=pt(function(e){return D.call(t,e)>-1},u,true),h=[function(e,n,r){return!o&&(r||n!==f)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];for(;a<s;a++){if(n=i.relative[e[a].type]){h=[pt(dt(h),n)]}else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[b]){r=++a;for(;r<s;r++){if(i.relative[e[r].type]){break}}return mt(a>1&&dt(h),a>1&&ht(e.slice(0,a-1)).replace(q,"$1"),n,a<r&&gt(e.slice(a,r)),r<s&&gt(e=e.slice(r)),r<s&&ht(e))}h.push(n)}}return dt(h)}function yt(e,t){var n=0,s=t.length>0,o=e.length>0,u=function(u,a,l,h,p){var d,v,m,g=[],y=0,b="0",w=u&&[],E=p!=null,x=f,T=u||o&&i.find["TAG"]("*",p&&a.parentNode||a),N=S+=x==null?1:Math.random()||.1;if(E){f=a!==c&&a;r=n}for(;(d=T[b])!=null;b++){if(o&&d){v=0;while(m=e[v++]){if(m(d,a,l)){h.push(d);break}}if(E){S=N;r=++n}}if(s){if(d=!m&&d){y--}if(u){w.push(d)}}}y+=b;if(s&&b!==y){v=0;while(m=t[v++]){m(w,g,a,l)}if(u){if(y>0){while(b--){if(!(w[b]||g[b])){g[b]=O.call(h)}}}g=vt(g)}M.apply(h,g);if(E&&!u&&g.length>0&&y+t.length>1){ot.uniqueSort(h)}}if(E){S=N;f=x}return w};return s?it(u):u}function bt(e,t,n){var r=0,i=t.length;for(;r<i;r++){ot(e,t[r],n)}return n}function wt(e,t,n,r){var s,o,a,f,l,c=ct(e);if(!r){if(c.length===1){o=c[0]=c[0].slice(0);if(o.length>2&&(a=o[0]).type==="ID"&&t.nodeType===9&&!p&&i.relative[o[1].type]){t=i.find["ID"](a.matches[0].replace(Z,et),t)[0];if(!t){return n}e=e.slice(o.shift().value.length)}s=X["needsContext"].test(e)?0:o.length;while(s--){a=o[s];if(i.relative[f=a.type]){break}if(l=i.find[f]){if(r=l(a.matches[0].replace(Z,et),V.test(o[0].type)&&t.parentNode||t)){o.splice(s,1);e=r.length&&ht(o);if(!e){M.apply(n,_.call(r,0));return n}break}}}}}u(e,c)(r,t,p,n,V.test(e));return n}function Et(){}var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b="sizzle"+ -(new Date),w=e.document,E={},S=0,x=0,T=rt(),N=rt(),C=rt(),k=typeof t,L=1<<31,A=[],O=A.pop,M=A.push,_=A.slice,D=A.indexOf||function(e){var t=0,n=this.length;for(;t<n;t++){if(this[t]===e){return t}}return-1},P="[\\x20\\t\\r\\n\\f]",H="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",B=H.replace("w","w#"),j="([*^$|!~]?=)",F="\\["+P+"*("+H+")"+P+"*(?:"+j+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+B+")|)|)"+P+"*\\]",I=":("+H+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+F.replace(3,8)+")*)|.*)\\)|)",q=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),R=new RegExp("^"+P+"*,"+P+"*"),U=new RegExp("^"+P+"*([\\x20\\t\\r\\n\\f>+~])"+P+"*"),z=new RegExp(I),W=new RegExp("^"+B+"$"),X={ID:new RegExp("^#("+H+")"),CLASS:new RegExp("^\\.("+H+")"),NAME:new RegExp("^\\[name=['\"]?("+H+")['\"]?\\]"),TAG:new RegExp("^("+H.replace("w","w*")+")"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+I),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,$=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,G=/'|\\/g,Y=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,Z=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,et=function(e,t){var n="0x"+t-65536;return n!==n?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,n&1023|56320)};try{_.call(w.documentElement.childNodes,0)[0].nodeType}catch(tt){_=function(e){var t,n=[];while(t=this[e++]){n.push(t)}return n}}o=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":false};l=ot.setDocument=function(e){var n=e?e.ownerDocument||e:w;if(n===c||n.nodeType!==9||!n.documentElement){return c}c=n;h=n.documentElement;p=o(n);E.tagNameNoComments=st(function(e){e.appendChild(n.createComment(""));return!e.getElementsByTagName("*").length});E.attributes=st(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"});E.getByClassName=st(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false}e.lastChild.className="e";return e.getElementsByClassName("e").length===2});E.getByName=st(function(e){e.id=b+0;e.innerHTML="<a name='"+b+"'></a><div name='"+b+"'></div>";h.insertBefore(e,h.firstChild);var t=n.getElementsByName&&n.getElementsByName(b).length===2+n.getElementsByName(b+0).length;E.getIdNotName=!n.getElementById(b);h.removeChild(e);return t});i.attrHandle=st(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild&&typeof e.firstChild.getAttribute!==k&&e.firstChild.getAttribute("href")==="#"})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}};if(E.getIdNotName){i.find["ID"]=function(e,t){if(typeof t.getElementById!==k&&!p){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}};i.filter["ID"]=function(e){var t=e.replace(Z,et);return function(e){return e.getAttribute("id")===t}}}else{i.find["ID"]=function(e,n){if(typeof n.getElementById!==k&&!p){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==k&&r.getAttributeNode("id").value===e?[r]:t:[]}};i.filter["ID"]=function(e){var t=e.replace(Z,et);return function(e){var n=typeof e.getAttributeNode!==k&&e.getAttributeNode("id");return n&&n.value===t}}}i.find["TAG"]=E.tagNameNoComments?function(e,t){if(typeof t.getElementsByTagName!==k){return t.getElementsByTagName(e)}}:function(e,t){var n,r=[],i=0,s=t.getElementsByTagName(e);if(e==="*"){while(n=s[i++]){if(n.nodeType===1){r.push(n)}}return r}return s};i.find["NAME"]=E.getByName&&function(e,t){if(typeof t.getElementsByName!==k){return t.getElementsByName(name)}};i.find["CLASS"]=E.getByClassName&&function(e,t){if(typeof t.getElementsByClassName!==k&&!p){return t.getElementsByClassName(e)}};v=[];d=[":focus"];if(E.qsa=nt(n.querySelectorAll)){st(function(e){e.innerHTML="<select><option selected=''></option></select>";if(!e.querySelectorAll("[selected]").length){d.push("\\["+P+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!e.querySelectorAll(":checked").length){d.push(":checked")}});st(function(e){e.innerHTML="<input type='hidden' i=''/>";if(e.querySelectorAll("[i^='']").length){d.push("[*^$]="+P+"*(?:\"\"|'')")}if(!e.querySelectorAll(":enabled").length){d.push(":enabled",":disabled")}e.querySelectorAll("*,:x");d.push(",.*:")})}if(E.matchesSelector=nt(m=h.matchesSelector||h.mozMatchesSelector||h.webkitMatchesSelector||h.oMatchesSelector||h.msMatchesSelector)){st(function(e){E.disconnectedMatch=m.call(e,"div");m.call(e,"[s!='']:x");v.push("!=",I)})}d=new RegExp(d.join("|"));v=v.length&&new RegExp(v.join("|"));g=nt(h.contains)||h.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&(n.contains?n.contains(r):e.compareDocumentPosition&&e.compareDocumentPosition(r)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false};y=h.compareDocumentPosition?function(e,t){var r;if(e===t){a=true;return 0}if(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t)){if(r&1||e.parentNode&&e.parentNode.nodeType===11){if(e===n||g(w,e)){return-1}if(t===n||g(w,t)){return 1}return 0}return r&4?-1:1}return e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,s=e.parentNode,o=t.parentNode,u=[e],f=[t];if(e===t){a=true;return 0}else if(!s||!o){return e===n?-1:t===n?1:s?-1:o?1:0}else if(s===o){return ut(e,t)}r=e;while(r=r.parentNode){u.unshift(r)}r=t;while(r=r.parentNode){f.unshift(r)}while(u[i]===f[i]){i++}return i?ut(u[i],f[i]):u[i]===w?-1:f[i]===w?1:0};a=false;[0,0].sort(y);E.detectDuplicates=a;return c};ot.matches=function(e,t){return ot(e,null,null,t)};ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==c){l(e)}t=t.replace(Y,"='$1']");if(E.matchesSelector&&!p&&(!v||!v.test(t))&&!d.test(t)){try{var n=m.call(e,t);if(n||E.disconnectedMatch||e.document&&e.document.nodeType!==11){return n}}catch(r){}}return ot(t,c,null,[e]).length>0};ot.contains=function(e,t){if((e.ownerDocument||e)!==c){l(e)}return g(e,t)};ot.attr=function(e,t){var n;if((e.ownerDocument||e)!==c){l(e)}if(!p){t=t.toLowerCase()}if(n=i.attrHandle[t]){return n(e)}if(p||E.attributes){return e.getAttribute(t)}return((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===true?t:n&&n.specified?n.value:null};ot.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};ot.uniqueSort=function(e){var t,n=[],r=1,i=0;a=!E.detectDuplicates;e.sort(y);if(a){for(;t=e[r];r++){if(t===e[r-1]){i=n.push(r)}}while(i--){e.splice(n[i],1)}}return e};s=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(!i){for(;t=e[r];r++){n+=s(t)}}else if(i===1||i===9||i===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=s(e)}}}else if(i===3||i===4){return e.nodeValue}return n};i=ot.selectors={cacheLength:50,createPseudo:it,match:X,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(Z,et);e[3]=(e[4]||e[5]||"").replace(Z,et);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){ot.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){ot.error(e[0])}return e},PSEUDO:function(e){var t,n=!e[5]&&e[2];if(X["CHILD"].test(e[0])){return null}if(e[4]){e[2]=e[4]}else if(n&&z.test(n)&&(t=ct(n,true))&&(t=n.indexOf(")",n.length-t)-n.length)){e[0]=e[0].slice(0,t);e[2]=n.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){if(e==="*"){return function(){return true}}e=e.replace(Z,et).toLowerCase();return function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&T(e,function(e){return t.test(e.className||typeof e.getAttribute!==k&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);if(i==null){return t==="!="}if(!t){return true}i+="";return t==="="?i===n:t==="!="?i!==n:t==="^="?n&&i.indexOf(n)===0:t==="*="?n&&i.indexOf(n)>-1:t==="$="?n&&i.slice(-n.length)===n:t==="~="?(" "+i+" ").indexOf(n)>-1:t==="|="?i===n||i.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,r,i){var s=e.slice(0,3)!=="nth",o=e.slice(-4)!=="last",u=t==="of-type";return r===1&&i===0?function(e){return!!e.parentNode}:function(t,n,a){var f,l,c,h,p,d,v=s!==o?"nextSibling":"previousSibling",m=t.parentNode,g=u&&t.nodeName.toLowerCase(),y=!a&&!u;if(m){if(s){while(v){c=t;while(c=c[v]){if(u?c.nodeName.toLowerCase()===g:c.nodeType===1){return false}}d=v=e==="only"&&!d&&"nextSibling"}return true}d=[o?m.firstChild:m.lastChild];if(o&&y){l=m[b]||(m[b]={});f=l[e]||[];p=f[0]===S&&f[1];h=f[0]===S&&f[2];c=p&&m.childNodes[p];while(c=++p&&c&&c[v]||(h=p=0)||d.pop()){if(c.nodeType===1&&++h&&c===t){l[e]=[S,p,h];break}}}else if(y&&(f=(t[b]||(t[b]={}))[e])&&f[0]===S){h=f[1]}else{while(c=++p&&c&&c[v]||(h=p=0)||d.pop()){if((u?c.nodeName.toLowerCase()===g:c.nodeType===1)&&++h){if(y){(c[b]||(c[b]={}))[e]=[S,h]}if(c===t){break}}}}h-=i;return h===r||h%r===0&&h/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);if(r[b]){return r(t)}if(r.length>1){n=[e,e,"",t];return i.setFilters.hasOwnProperty(e.toLowerCase())?it(function(e,n){var i,s=r(e,t),o=s.length;while(o--){i=D.call(e,s[o]);e[i]=!(n[i]=s[o])}}):function(e){return r(e,0,n)}}return r}},pseudos:{not:it(function(e){var t=[],n=[],r=u(e.replace(q,"$1"));return r[b]?it(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--){if(s=o[u]){e[u]=!(t[u]=s)}}}):function(e,i,s){t[0]=e;r(t,null,s,n);return!n.pop()}}),has:it(function(e){return function(t){return ot(e,t).length>0}}),contains:it(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),lang:it(function(e){if(!W.test(e||"")){ot.error("unsupported lang: "+e)}e=e.replace(Z,et).toLowerCase();return function(t){var n;do{if(n=p?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang){n=n.toLowerCase();return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1);return false}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===c.activeElement&&(!c.hasFocus||c.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false}}return true},parent:function(e){return!i.pseudos["empty"](e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t;return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)},first:lt(function(){return[0]}),last:lt(function(e,t){return[t-1]}),eq:lt(function(e,t,n){return[n<0?n+t:n]}),even:lt(function(e,t){var n=0;for(;n<t;n+=2){e.push(n)}return e}),odd:lt(function(e,t){var n=1;for(;n<t;n+=2){e.push(n)}return e}),lt:lt(function(e,t,n){var r=n<0?n+t:n;for(;--r>=0;){e.push(r)}return e}),gt:lt(function(e,t,n){var r=n<0?n+t:n;for(;++r<t;){e.push(r)}return e})}};for(n in{radio:true,checkbox:true,file:true,password:true,image:true}){i.pseudos[n]=at(n)}for(n in{submit:true,reset:true}){i.pseudos[n]=ft(n)}u=ot.compile=function(e,t){var n,r=[],i=[],s=C[e+" "];if(!s){if(!t){t=ct(e)}n=t.length;while(n--){s=gt(t[n]);if(s[b]){r.push(s)}else{i.push(s)}}s=C(e,yt(i,r))}return s};i.pseudos["nth"]=i.pseudos["eq"];i.filters=Et.prototype=i.pseudos;i.setFilters=new Et;l();if(typeof define==="function"&&define.amd){define(function(){return ot})}else{e.Sizzle=ot}})(window)
;
var wwQuotas = Sizzle(".will-work li");
var ywQuotas = Sizzle(".you-will li");
for (var i in wwQuotas){
	wwQuotas[i].pre = "You will work ";
}
for (var i in ywQuotas){
	ywQuotas[i].pre = "You will ";
}
var quotas = wwQuotas.concat(ywQuotas);

for (var i in quotas){
	quotas[i].onclick = quota(i, quotas);
}

function quota(i, list){
	return function(){
		setTwitAndBlockquota(list[i].pre + list[i].innerHTML);
	}
}

quota(Math.round(Math.random()*quotas.length), quotas)();

function setTwitAndBlockquota(text){
	var blockquotaEl = Sizzle(".share blockquote p")[0];
	blockquotaEl.innerHTML = text;
	var tweet = text +  " #js #kiev via @debitoor team";
	var parent = Sizzle(".share")[0];
	var iframe = Sizzle(".share iframe")[0];
	if(!parent || !iframe) {
		var that = this;
		var args= arguments;
		setTimeout(function(){
			setTwitAndBlockquota.apply(that, args);
		});
		return;
	}
	var newButton = document.createElement("a");
	var attrs = {
		"href":"https://twitter.com/share",
		"class":"twitter-share-button",
		"data-lang":"en",
		"data-size":"large",
		"data-count":"none",
		"data-text": tweet
	};
	for (var a in attrs){
		newButton.setAttribute(a, attrs[a]);
	}
	parent.removeChild(iframe);
	parent.appendChild(newButton);
	twttr.widgets.load();
}
