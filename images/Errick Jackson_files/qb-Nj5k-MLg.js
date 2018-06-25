if (self.CavalryLogger) { CavalryLogger.start_js(["fHANF"]); }

__d("Keyframes",["Promise","Bootloader","Deferred","NavigationMetrics","XHRRequest","emptyFunction","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="::",h={},i={},j="tti";b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(a,b){var event=b.event;j=event});function k(){return new(b("Promise"))(function(a){b("Bootloader").loadModules(["KeyframesRenderer"],function(b){return a(b)},"Keyframes")})}function l(){return new(b("Promise"))(function(a){b("Bootloader").loadModules(["FBKeyframesLoggedSession"],function(b){return a(b)},"Keyframes")})}function m(){return new(b("Promise"))(function(a){b("Bootloader").loadModules(["KeyframesAssetDecoder"],function(b){return a(b)},"Keyframes")})}function n(){return b("Promise").all([l(),m(),k()]).then(b("emptyFunction"))}function o(a){return!a||typeof a!=="string"?b("Promise").reject("Request: invalid uri "+a):new(b("Promise"))(function(c,d){new(b("XHRRequest"))(a).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function(a){return d(a)}).setAbortHandler(function(a){return d(a)}).setResponseHandler(function(a){return c(a)}).send()})}function p(a){return h[a]!=null}function q(a){h[a]==null&&(h[a]=new w(a));return h[a]}function r(a){return i[a]!=null}function s(a){i[a]==null&&(i[a]=new x(a));return i[a]}function t(){return u(Date.now(),j)}function u(a,b){return{value:a,phase:b}}function v(a,b){this.$1={start:b||t(),"package":!1,utilized:!1},this.$3=l().then(function(b){b=new b("network",a,this.$1.start);this.$4(b);return b}.bind(this))}v.prototype.getSession=function(){return this.$3};v.prototype.$4=function(a){__p&&__p();this.$2=a;if(this.$1.assetRequest!=null){var b=a.startAssetRequest(this.$1.assetRequest);if(this.$1.assetRequestError!=null){b.error(this.$1.assetRequestError);return}this.$1.assetResponse!=null&&b.loadedFromNetwork(this.$1.assetResponse)}if(this.$1.assetDecode!=null){b=a.startAssetDecode(this.$1.assetDecode);if(this.$1.assetDecodeError!=null){b.error(this.$1.assetDecodeError);return}this.$1.finish!=null&&b.finish(this.$1.finish)}this.$1.utilized&&a.utilizeAsset();this.$1["package"]&&a.markAsPackage()};v.prototype.startAssetDecode=function(a){if(this.$2)return this.$2.startAssetDecode(a);else{this.$1.assetDecode=a||t();return{finish:function(a){this.$2?this.$2.startAssetDecode(this.$1.assetDecode).finish(a):this.$1.finish=a||t()}.bind(this),error:function(a){this.$2?this.$2.startAssetDecode(this.$1.assetDecode).error(a):this.$1.assetDecodeError=a||t()}.bind(this)}}};v.prototype.startAssetRequest=function(a){__p&&__p();if(this.$2)return this.$2.startAssetRequest(a);else{this.$1.assetRequest=a||t();a=function(a){if(this.$2)return this.$2.startAssetRequest(this.$1.assetRequest).loadedFromNetwork(a);else{this.$1.assetResponse=a||t();return{startAssetDecode:this.startAssetDecode.bind(this)}}}.bind(this);var b=function(a){this.$2?this.$2.startAssetRequest(this.$1.assetRequest).error(a):this.$1.assetRequestError=a||t()}.bind(this);return{loadedFromCache:a,loadedFromNetwork:a,cancel:b,error:b}}};v.prototype.utilizeAsset=function(){this.$2?this.$2.utilizeAsset():this.$1.utilized=!0};v.prototype.markAsPackage=function(){this.$2?this.$2.markAsPackage():this.$1["package"]=!0};function w(a,b){__p&&__p();var c=this;this.$1=[];this.$3=[];this.$4=[];this.$5="requesting";this.$7=!1;this.$6=a;b&&(function(){var a=b.stubs,d=b.bytes;c.$5="decoding";c.$2=m().then(function(b){this.$1.push.apply(this.$1,a.map(function(a){return a.startAssetDecode()}));return this.$8(d,b)}.bind(c))})()}w.prototype.isLoaded=function(){return this.$5==="done"};w.prototype.getAsset=function(a){return this.$9(a)};w.prototype.getRenderer=function(a){return b("Promise").all([this.$9(a),a.getSession(),k()]).then(function(a){var b=a[0],c=a[1];a=a[2];this.$10();return new a(b,c.getPerformanceLogIfEnabled())}.bind(this))};w.prototype.$10=function(){this.$7||(this.$4.forEach(function(a){return a.utilizeAsset()}),this.$7=!0)};w.prototype.$9=function(a){__p&&__p();this.$4.push(a);this.$7&&a.utilizeAsset();switch(this.$5){case"requesting":this.$3.push(a.startAssetRequest());break;case"decoding":this.$1.push(a.startAssetDecode());break}if(!this.$2){n();a=b("Promise").all([o(this.$6),m()]).then(function(a){var b=a[0];a=a[1];while(this.$3.length)this.$1.push(this.$3.pop().loadedFromNetwork().startAssetDecode());return this.$8(b,a)}.bind(this));a["catch"](function(a){this.$3.forEach(function(a){return a.error()}),this.$5="error"}.bind(this));this.$2=a}return this.$2};w.prototype.$8=function(a,c){this.$5="decoding";c=c.fromDocumentBytes(a);b("promiseDone")(c,function(){this.$5="done",this.$1.forEach(function(a){return a.finish()}),this.$11()}.bind(this),function(){this.$5="error",this.$1.forEach(function(a){return a.error()})}.bind(this));return c};w.prototype.$11=function(){this.$3.length=0,this.$1.length=0};function x(a){this.$1=[],this.$2=[],this.$4="requesting",n(),this.$3=this.$5(a)}x.prototype.isLoaded=function(){return this.$4==="done"};x.prototype.getDecodedAssetRequests=function(a){this.$6(a).getSession();return this.$3};x.prototype.getRenderer=function(a,c){__p&&__p();if(a<0)return b("Promise").reject("Package request: out of bounds index "+a+" "+("for "+c.projectName+" "+c.packageName));var d=this.$6(c);c=this.$7(a,c);k();d.getSession();return b("Promise").all([this.$3,c]).then(function(c){var e=c[0];c=c[1];e=e[a].getRenderer(c);b("promiseDone")(e,function(){return d.utilizeAsset()});return e})};x.prototype.$6=function(a){var b=t();a=new v({projectName:a.projectName,assetName:a.packageName},b);a.markAsPackage();this.$4==="requesting"&&this.$2.push({log:a.startAssetRequest(b),timestamp:b});this.$4==="error"&&a.startAssetRequest(b).error();return a};x.prototype.$7=function(a,c){__p&&__p();var d=t();c={projectName:c.projectName,assetName:c.packageName+g+c.assetName};if(this.$4==="requesting"){var e={metadata:c,timestamp:d,deferredSessionStub:new(b("Deferred"))()};this.$1[a]||(this.$1[a]=[]);this.$1[a].push(e);return e.deferredSessionStub.getPromise()}a=new v(c,d);this.$4==="error"&&a.startAssetRequest(d).error();return b("Promise").resolve(a)};x.prototype.$5=function(a){__p&&__p();a=b("Promise").all([m(),this.$8(a)]).then(function(a){__p&&__p();a[0];var b=a[1],c=b.endTime.value-b.startTime.value;a=b.documentSlices.map(function(a){return a.byteLength/b.byteLength}).map(function(a){return a*c});var d=a.map(function(a){return a/c});a=c-a.reduce(function(a,b){return a+=b},0);a=a/c;this.$9(a,b.endTime);this.$10(b.documentSlices.length);return b.documentSlices.map(function(a,c){c=this.$11(c,d[c],b.endTime);return new w("",{bytes:a,stubs:c})}.bind(this))}.bind(this));b("promiseDone")(a["catch"](function(a){this.$4="error",this.$1.forEach(function(b){b.forEach(function(b){return b.deferredSessionStub.reject("Package decode error: "+a)})})}.bind(this)),function(){this.$4="done",this.$12()}.bind(this));return a};x.prototype.$8=function(a){__p&&__p();var c=t();a=o(a);var d=a.then(function(a){return{startTime:c,endTime:t(),byteLength:a.byteLength}});a=b("Promise").all([m(),a]).then(function(a){var b=a[0];a=a[1];return b.getDocumentByteSlicesFromPackage(a)});d=b("Promise").all([d,a]).then(function(a){var b=a[0];a=a[1];return babelHelpers["extends"]({},b,{documentSlices:a})});d["catch"](function(a){this.$4="error",this.$2.forEach(function(a){return a.log.error()}),this.$1.forEach(function(b){b.forEach(function(b){return b.deferredSessionStub.reject("Package request error: "+a)})}),this.$12()}.bind(this));return d};x.prototype.$9=function(a,b){this.$2.forEach(function(c){var d=b.value-c.timestamp.value;d=a*d+c.timestamp.value;c.log.loadedFromNetwork(u(d,b.phase)).startAssetDecode(b).finish(t())})};x.prototype.$11=function(a,b,c){return(this.$1[a]||[]).map(function(a){var d=c.value-a.timestamp.value;d=b*d;var e=new v(a.metadata,a.timestamp);e.startAssetRequest(a.timestamp).loadedFromNetwork(u(a.timestamp.value+d,a.timestamp.phase));a.deferredSessionStub.resolve(e);return e})};x.prototype.$10=function(a){this.$1.slice(a).forEach(function(a){a.forEach(function(a,b){var c=a.deferredSessionStub;a=a.metadata;c.reject("Package decode: out of bounds index "+b+" "+("for "+a.projectName+" "+a.assetName))})})};x.prototype.$12=function(){this.$1=[],this.$2=[]};a={requestDecodedAssetOnly:function(a,b){return q(a).getAsset(new v(b))},requestRenderer:function(a,b){return q(a).getRenderer(new v(b))},requestRendererFromBytes:function(a,b){b=new v(b);return new w("",{bytes:new Uint8Array(a),stubs:[b]}).getRenderer(b)},requestRendererFromPackage:function(a,b,c){return s(a).getRenderer(b,c)},preloadPackage:function(a,c){return s(a).getDecodedAssetRequests(c).then(b("emptyFunction"))},hasLoaded:function(a){return p(a)&&q(a).isLoaded()||r(a)&&s(a).isLoaded()},clearCache:function(){h={},i={}}};e.exports=a}),null);