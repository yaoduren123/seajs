(function(l){function r(d){for(var e={__KEYS:[]},f=0,c=d.length;f<c;f++)for(var h=d[f].replace("://","__").split("/"),a=e,b=0,g=h.length;b<g;b++){var k=h[b];a[k]||(a[k]={__KEYS:[]},a.__KEYS.push(k));a=a[k]}d=[];f=e.__KEYS;c=0;for(h=f.length;c<h;c++){a=b=f[c];b=e[b];for(g=b.__KEYS;1===g.length;)a+="/"+g[0],b=b[g[0]],g=b.__KEYS;g.length&&d.push([a.replace("__","://"),s(b)])}return d}function s(d){for(var e=[],f=d.__KEYS,c=0,h=f.length;c<h;c++){var a=f[c],b=s(d[a]),g=b.length;if(g)for(var k=0;k<g;k++)e.push(a+
"/"+b[k]);else e.push(a)}return e}function t(d){for(var e=0,f=d.length;e<f;e++){for(var c=d[e],h=c[0]+"/",a=c[1],c=[],b={},g=0,k=a.length;g<k;g++){var l=a[g],j;j=l;var m=j.lastIndexOf(".");(j=0<=m?j.substring(m):"")&&(b[j]||(b[j]=[])).push(l)}a=void 0;for(a in b)b.hasOwnProperty(a)&&c.push(b[a]);b=0;for(a=c.length;b<a;b++)p(h,c[b])}return n}function p(d,e){var f=d+m[0]+e.join(m[1]),c=f.length>q;if(1<e.length&&c){a:{for(var f=q-(d+m[0]).length,c=m[1],h=e[0],a=1,b=e.length;a<b;a++)if(h+=c+e[a],h.length>
f){f=[e.splice(0,a),e];break a}f=void 0}p(d,f[0]);p(d,f[1])}else{if(c)throw Error("The combo url is too long: "+f);c=0;for(h=e.length;c<h;c++)n[d+e[c]]=f}}var u=l.Module,x=u.STATUS.FETCHING,v=l.cache,j=l.data,n=j.comboHash={},m=["??",","],q=2E3;l.on("load",function(d){var e=d.length;if(!(2>e)){j.comboSyntax&&(m=j.comboSyntax);j.comboMaxLength&&(q=j.comboMaxLength);for(var f=j.comboExcludes,c=[],h=0;h<e;h++){var a=d[h];if(!n[a]){var b;if(b=(v[a]||(v[a]=new u(a))).status<x)if(b=!f||!f.test(a)){b=a;
var g=j.comboSyntax||["??",","],k=g[0],g=g[1];b=!(k&&0<b.indexOf(k)||g&&0<b.indexOf(g))}b&&c.push(a)}}1<c.length&&t(r(c))}});l.on("fetch",function(d){d.requestUri=n[d.uri]||d.uri});if(j.test){var w=l.test||(l.test={});w.uris2paths=r;w.paths2hash=t}define(l.data.dir+"plugin-combo",[],{})})(seajs);
