(this["webpackJsonparticles-ranker"]=this["webpackJsonparticles-ranker"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","body":[{"type":"heading","model":{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}},{"type":"paragraph","model":{"text":"Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."}},{"type":"image","model":{"url":"https://picsum.photos/640/420/?random","altText":"Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel","height":"420","width":"640"}},{"type":"paragraph","model":{"text":"Nulla tortor nunc, posuere eu purus eget, ultricies ullamcorper sapien. Duis viverra lectus eget dolor gravida rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce molestie, odio at mattis auctor, mauris lectus luctus risus, eget pulvinar tortor erat a est."}},{"type":"paragraph","model":{"text":"Mauris accumsan maximus enim, eleifend consectetur turpis molestie malesuada. Proin vulputate dui non mattis venenatis. Nam ornare sapien eget nibh placerat, faucibus dapibus lacus consectetur."}},{"type":"list","model":{"type":"unordered","items":["Vestibulum viverra viverra ullamcorper","Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"]}}]},{"title":"Praesent bibendum nec velit a fringilla. Nulla facilisi","body":[{"type":"heading","model":{"text":"Nam eu varius magna, vel molestie diam"}},{"type":"image","model":{"url":"https://picsum.photos/640/420/?random","altText":"Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel","height":"420","width":"640"}},{"type":"paragraph","model":{"text":"Integer lobortis, magna et tempor facilisis, arcu dui finibus mauris, pellentesque fringilla massa sem non justo. Phasellus vel arcu eu eros commodo egestas at non dui. Ut ultricies quis nunc ut commodo"}},{"type":"paragraph","model":{"text":"Aenean justo urna, tempor vitae consectetur nec, ornare eget nunc. Duis ornare ipsum in quam auctor feugiat. Vestibulum sapien metus, rutrum et mattis ut, tincidunt in dolor. Praesent semper laoreet augue. Etiam lacinia hendrerit euismod."}},{"type":"image","model":{"url":"https://picsum.photos/640/420/?random","altText":"Curabitur dictum leo bibendum lacus ultrices fringilla et quis justo","height":"420","width":"640"}},{"type":"paragraph","model":{"text":"Morbi venenatis aliquam cursus. Sed eros elit, consequat id faucibus vel, interdum fringilla massa."}},{"type":"image","model":{"url":"https://picsum.photos/640/420/?random","altText":"Curabitur dictum leo bibendum lacus ultrices fringilla et quis justo","height":"420","width":"640"}},{"type":"paragraph","model":{"text":"Morbi venenatis aliquam cursus. Sed eros elit, consequat id faucibus vel, interdum fringilla massa."}}]},{"title":"Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu","body":[{"type":"heading","model":{"text":"Nulla nibh erat, pharetra at ultricies nec, tincidunt luctus arcu"}},{"type":"image","model":{"url":"https://picsum.photos/640/420/?random","altText":"Donec purus augue, lobortis et velit maximus, rutrum scelerisque ipsum","height":"420","width":"640"}},{"type":"image","model":{"url":"https://picsum.photos/640/420/?random","altText":"Etiam at nisl diam","height":"420","width":"640"}},{"type":"paragraph","model":{"text":"Suspendisse id erat a nibh rutrum consectetur. Ut porttitor arcu id nibh pellentesque, et laoreet sapien accumsan. Phasellus quis finibus ipsum. Cras malesuada eu arcu sed laoreet. Nulla egestas ac eros vel eleifend. Nam porta ornare nisl, quis gravida dolor sagittis a."}}]}]')},,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.0229c364.png"},,,function(e,t,a){e.exports=a.p+"static/media/green_tick.e1f0bf09.png"},function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),s=(a(30),a(6)),u=a(7),o=a(9),c=a(8),m=a(10),p=a(13),d=a(11),h=a(21),g=a.n(h);a(31);function f(){return r.a.createElement("header",null,r.a.createElement("img",{src:g.a,id:"logo",alt:"logo"}))}a(32);var b=a(4),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).isEmpty=function(e){return 0===Object.keys(e).length},a.parseBody=function(e){for(var t=[],n=0;n<e.length;++n){var i=e[n];"paragraph"===i.type?t.push(a.parseParagraph(i.model,n)):"heading"===i.type?t.push(a.parseHeading(i.model,n)):"image"===i.type?t.push(a.parseImage(i.model,n)):"list"===i.type?t.push(a.parseList(i.model,n)):t.push(r.a.createElement("h1",null,"Error"))}return t},a.parseParagraph=function(e,t){return r.a.createElement("p",{key:t},e.text)},a.parseHeading=function(e,t){return r.a.createElement("h2",{key:t},e.text)},a.parseImage=function(e,t){return r.a.createElement("img",{key:t,className:"image-margin",src:e.url,height:e.height,width:e.width,alt:e.altText})},a.parseList=function(e,t){return"unordered"===e.type?r.a.createElement("ul",{key:t},e.items.map((function(e){return r.a.createElement("li",{key:e},e)}))):r.a.createElement("ol",{key:t},e.items.map((function(e){return r.a.createElement("li",{key:e},e)})))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=b[this.props.match.params.id];return r.a.createElement("div",{className:"container-fluid page-width"},r.a.createElement("h1",null,e.title),this.parseBody(e.body),r.a.createElement(p.b,{className:"btn btn-primary",to:"/"},"Return"))}}]),t}(n.Component),y=(a(38),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card card-width align-text-center card-margin shadow rounded"},r.a.createElement("img",{src:this.props.src,className:"card-width",alt:this.props.altImage}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.title),r.a.createElement("br",null),r.a.createElement(p.b,{onClick:function(){return e.props.visit(e.props.id)},className:"btn btn-primary",to:"/article/".concat(this.props.id)},"Read more")))}}]),t}(n.Component)),E=(a(39),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).getTitles=function(){return b.map((function(e){return e.title}))},a.getTitleOptionElms=function(e){return e.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))},a.createArticleRanker=function(){for(var e=[],t=0;t<b.length;++t)e.push(r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("div",{className:"number-box"},t+1)),r.a.createElement("td",null,r.a.createElement("select",{id:"option".concat(t),name:"dropdown",className:"dropdown-size"},a.getTitleOptionElms(a.getTitles())))));return e},a.hasDuplicates=function(e){return new Set(e).size!==e.length},a.getResponses=function(){for(var e=[],t=0;t<b.length;++t){var a=document.getElementById("option".concat(t));e.push(a.value)}return e},a.submitResponse=function(){a.hasDuplicates(a.getResponses())?alert("Please choose unique values for each box"):window.location.replace("/message/1")},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"container-fluid page-width"},r.a.createElement("p",null,"Please rank the article in order of most interesting. (1 meaning most interesting and ",b.length," meaning least interesting)"),r.a.createElement("table",{id:"ranking-structure"},r.a.createElement("tbody",null,this.createArticleRanker())),r.a.createElement("button",{className:"btn btn-primary",onClick:this.submitResponse},"Submit"))}}]),t}(n.Component)),k=a(24),w=a.n(k);function x(e){return"1"===e.match.params.success?r.a.createElement("main",{className:"container-fluid",style:{width:1e3}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("h1",null,"Thank you"),r.a.createElement("img",{src:w.a,alt:"green tick",style:{width:150,marginLeft:20}})),r.a.createElement("br",null),r.a.createElement("p",null,"Your results have been submitted and saved"),r.a.createElement("a",{href:"https://www.bbc.co.uk/"},"BBC homepage")):r.a.createElement("main",{className:"container-fluid",style:{width:1e3}},r.a.createElement("h1",null,"Error"),r.a.createElement("br",null),r.a.createElement("p",null,"An error has occurred and your results have not been submitted"),r.a.createElement("p",null,"Please try again"),r.a.createElement("a",{href:"/rank"},"Rank items"))}a(40);var O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={numOfArticlesVisited:0},a.visitPage=function(){a.setState({numOfArticlesVisited:a.state.numOfArticlesVisited+1})},a.getTitle=function(e){return e.title},a.getImage=function(e){if(e)for(var t=0;t<e.length;++t)if("image"===e[t].type)return[e[t].model.url,e[t].model.altText]},a.generateCards=function(e){for(var t=[],n=0;n<e.length;++n){var i=a.getTitle(e[n]),l=a.getImage(e[n].body);t.push(r.a.createElement(y,{visit:a.visitPage,key:n,id:n,src:l[0],altText:l[1],title:i}))}return t},a.goToRankPage=function(){a.state.numOfArticlesVisited>=b.length?window.location.replace("/rank"):alert("Please read all the articles before ranking")},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return r.a.createElement("div",{className:"container-fluid page-width"},r.a.createElement("main",{className:"flexbox cards-section"},e.generateCards(b)),r.a.createElement("button",{className:"btn btn-primary rank-button",onClick:e.goToRankPage},"Rank articles"))}}),r.a.createElement(d.a,{path:"/article/:id",component:v}),r.a.createElement(d.a,{path:"/rank",component:E}),r.a.createElement(d.a,{path:"/message/:success",component:x})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.c762f994.chunk.js.map