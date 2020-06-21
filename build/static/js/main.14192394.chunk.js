(this["webpackJsonpbtc-message-verifier"]=this["webpackJsonpbtc-message-verifier"]||[]).push([[0],{104:function(e,t,a){e.exports=a(181)},109:function(e,t,a){},116:function(e,t){},118:function(e,t){},132:function(e,t){},134:function(e,t){},154:function(e,t){},157:function(e,t){},158:function(e,t){},177:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),c=(a(109),a(87));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){"use strict";(function(e){var n=a(88),r=a(89),i=a(93),s=a(90),c=a(91),o=a(94),l=a(92),u=a(0),d=a.n(u),m=a(183),h=a(96),f=a(36),g=a(60),v=a(184),b=a(59),p=a.n(b),y=(a(177),a(4)),E=function(t){Object(o.a)(u,t);var a=Object(l.a)(u);function u(){var t;Object(s.a)(this,u);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=a.call.apply(a,[this].concat(c))).state={address:"",message:"",signature:"",result:""},t.simpleVerification=function(e,t,a){var n=!1;try{n=p.a.verify(e,t,a)}catch(r){}return n},t.fallbackVerification=function(t,a,n){var s,c=!1,o=Object(i.a)(Array(12).keys()).map((function(e){return e+31})),l=Object(r.a)(o);try{for(l.s();!(s=l.n()).done;){var u=s.value,d=e.alloc(1);d.writeInt8(u);var m=e.from(n,"base64").slice(1),h=(m=e.concat([d,m])).toString("base64");try{if(c=p.a.verify(t,a,h))break}catch(f){}}}catch(g){l.e(g)}finally{l.f()}return c},t.onVerifyClicked=function(e){e.preventDefault();var a=t.state,n=a.message,r=a.address,i=a.signature,s=!1;(s=t.simpleVerification(n,r,i))||(s=t.fallbackVerification(n,r,i)),t.setState({result:s?"Valid signature":"Invalid signature"})},t.onChange=function(e){switch(e.target.id){case"address":t.setState({address:e.target.value,result:""});break;case"signature":t.setState({signature:e.target.value,result:""});break;case"message":t.setState({message:e.target.value,result:""})}},t}return Object(c.a)(u,[{key:"render",value:function(){var e=this.props.classes;return d.a.createElement(m.a,{className:"App"},d.a.createElement(h.a,{maxWidth:"sm"},d.a.createElement(f.a,{variant:"h3"},"Verify a signed bitcoin message"),d.a.createElement(f.a,{variant:"body1"},"Compatible with the new Segwit Bech32 addresses (beginning with bc1)! This site is the only one on the internet that can do this right now.")),d.a.createElement(h.a,{maxWidth:"sm"},d.a.createElement("form",{className:e.form},d.a.createElement(g.a,{id:"address",type:"text",variant:"outlined",fullWidth:!0,label:"Bitcoin Address",value:this.state.address,onChange:this.onChange}),d.a.createElement("br",null),d.a.createElement(g.a,{id:"message",type:"text",variant:"outlined",multiline:!0,fullWidth:!0,rows:"6",label:"Message",value:this.state.message,onChange:this.onChange}),d.a.createElement("br",null),d.a.createElement(g.a,{id:"signature",type:"text",variant:"outlined",fullWidth:!0,label:"Signature",value:this.state.signature,onChange:this.onChange}),d.a.createElement("br",null)),d.a.createElement(v.a,{color:"primary",size:"large",variant:"contained",onClick:this.onVerifyClicked},"Verify"),d.a.createElement("p",{id:"result"},this.state.result),d.a.createElement(f.a,{variant:"caption"},"** Works only when the Bech32 address arises from a single public/private key pair with no other conditions. Id it's multisig or timelocked for example, it won't work."),d.a.createElement("br",null),d.a.createElement(f.a,{variant:"caption"},"This website is hosted and maintained by an individual as a charitable endeavour. Please donate to support it!"),d.a.createElement("br",null),d.a.createElement(f.a,Object(n.a)({variant:"body1"},"variant","outlined"),"bitcoin address: bc1qkxtzzd3xdv9amc9xhcrpg84z7794m5ju79npf8"),d.a.createElement(f.a,null,"legacy: 19fkQrHcM6TNUCfCKTyp9stDpc4F78EStP")))}}]),u}(u.Component);t.a=Object(y.a)((function(e){return{form:{"& > *":{margin:e.spacing(1)}}}}))(E)}).call(this,a(13).Buffer)}},[[104,1,2]]]);
//# sourceMappingURL=main.14192394.chunk.js.map