"use strict";(self.webpackChunkyoutube_client=self.webpackChunkyoutube_client||[]).push([[732],{4732:(L,_,r)=>{r.r(_),r.d(_,{YoutubeModule:()=>R});var u=r(9808),g=r(3075),C=r(3306),t=r(5e3);let h=(()=>{class i{constructor(){}getDateDiff(e){return(new Date).getTime()-new Date(e).getTime()}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();var m=r(0),a=r(2976);const c={date:!1,view:!1};let y=(()=>{class i{transform(e,n,s,p){return n===a.tb.date&&this.sort(e,s,this.sortByDate),n===a.tb.view&&this.sort(e,p,this.sortByView),e}sort(e,n,s){const p=e.sort((z,J)=>s(z,J)?-1:1);return n||p.reverse(),p}sortByDate(e,n){return new Date(e.snippet.publishedAt).getTime()<new Date(n.snippet.publishedAt).getTime()}sortByView(e,n){return Number(e.statistics.viewCount)>Number(n.statistics.viewCount)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=t.Yjl({name:"sort",type:i,pure:!0}),i})(),d=(()=>{class i{constructor(){this.searchItems=a.ul.items,this.searchInputValue=""}sortByDate(){c.date=!c.date,this.isDeskSortDate=c.date,this.sortParam=a.tb.date}sortByViews(){c.view=!c.view,this.isDeskSortView=c.view,this.sortParam=a.tb.view}sorBytWord(e){this.searchInputValue=e}onSelectCard(e){return this.searchItems.find(n=>e===n.id)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();var l=r(9224),f=r(5245);function w(i,o){if(1&i&&(t.TgZ(0,"div",1)(1,"button",2)(2,"a",3),t._UZ(3,"img",4),t.qZA()(),t.TgZ(4,"div",5),t._UZ(5,"img",6),t.qZA(),t.TgZ(6,"div",7)(7,"h2",8),t._uU(8),t.qZA(),t.TgZ(9,"span",9),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"div",10)(13,"h3",11),t._uU(14,"Description:"),t.qZA(),t.TgZ(15,"p",9),t._uU(16),t.qZA()(),t.TgZ(17,"mat-card-content")(18,"mat-icon",12),t._uU(19,"visibility"),t.qZA(),t.TgZ(20,"mat-card-subtitle"),t._uU(21),t.qZA(),t.TgZ(22,"mat-icon",12),t._uU(23,"thumb_up"),t.qZA(),t.TgZ(24,"mat-card-subtitle"),t._uU(25),t.qZA(),t.TgZ(26,"mat-icon",12),t._uU(27,"thumb_down"),t.qZA(),t.TgZ(28,"mat-card-subtitle"),t._uU(29),t.qZA(),t.TgZ(30,"mat-icon",12),t._uU(31,"question_answer"),t.qZA(),t.TgZ(32,"mat-card-subtitle"),t._uU(33),t.qZA()()()()),2&i){const e=t.oxw();t.xp6(5),t.s9C("src",e.item.snippet.thumbnails.standard.url,t.LSH),t.xp6(3),t.Oqu(e.item.snippet.localized.title),t.xp6(2),t.Oqu(t.xi3(11,8,e.item.snippet.publishedAt,"EEEE, MMMM d, y")),t.xp6(6),t.Oqu(e.item.snippet.description),t.xp6(5),t.Oqu(e.item.statistics.viewCount),t.xp6(4),t.Oqu(e.item.statistics.likeCount),t.xp6(4),t.Oqu(e.item.statistics.dislikeCount),t.xp6(4),t.Oqu(e.item.statistics.commentCount)}}let x=(()=>{class i{constructor(e,n,s){this.dateService=e,this.route=n,this.youtubeService=s}ngOnInit(){const{id:e}=this.route.snapshot.params;this.item=this.youtubeService.onSelectCard(e)}getDateDiff(e){return this.dateService.getDateDiff(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h),t.Y36(m.gz),t.Y36(d))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-card-details-page"]],decls:1,vars:1,consts:[["class","details",4,"ngIf"],[1,"details"],[1,"details__button_back"],["routerLink","/search","routerLinkActive","active"],["src","assets/icons/back-button.svg","alt",""],[1,"details__image"],[3,"src"],[1,"details__description"],[1,"details__title"],[1,"details__date"],[1,"text-block"],[1,"details__subtitle"],["aria-hidden","false","aria-label","Example home icon"]],template:function(e,n){1&e&&t.YNc(0,w,34,11,"div",0),2&e&&t.Q6J("ngIf",n.item)},directives:[u.O5,m.yS,m.Od,l.dn,f.Hw,l.$j],pipes:[u.uU],styles:[".details[_ngcontent-%COMP%]{max-width:1200px;width:100%;margin:44px auto;display:flex;background:#E5E5E5;box-shadow:5px 5px 20px #33333340;border-radius:0 5px 5px 0}.details__image[_ngcontent-%COMP%]{max-width:729px}.details__description[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:10px 35px}.details__date[_ngcontent-%COMP%]{font-size:12px;text-align:left;padding-top:7px;color:#828282}.details__title[_ngcontent-%COMP%]{text-align:left;font-weight:700;font-size:24px;color:#000}.details__subtitle[_ngcontent-%COMP%]{font-size:14px;text-align:left}.details__button_back[_ngcontent-%COMP%]{border:none;display:flex;padding:0;cursor:pointer}.material-icons[_ngcontent-%COMP%]{font-size:19px;margin:0 5px}mat-card-content[_ngcontent-%COMP%]{display:flex;align-self:flex-end;max-width:300px}.mat-card-subtitle[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),i})();var D=r(7489);function b(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.sortDesk.date?"arrow_downward":"arrow_upward")}}function v(i,o){if(1&i&&(t.TgZ(0,"mat-icon"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.sortDesk.view?"arrow_downward":"arrow_upward")}}let S=(()=>{class i{constructor(e){this.youtubeService=e,this.sortDesk=c,this.toggleArrowDate=!1,this.toggleArrowView=!1}sortDate(){this.youtubeService.sortByDate(),this.toggleArrowDate=!0,this.toggleArrowView=!1}sortViews(){this.youtubeService.sortByViews(),this.toggleArrowView=!0,this.toggleArrowDate=!1}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sort-buttons"]],decls:8,vars:2,consts:[[1,"sort",3,"click"],[1,"sort__text"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"span",0),t.NdJ("click",function(){return n.sortDate()}),t.TgZ(1,"p",1),t._uU(2,"date"),t.qZA(),t.YNc(3,b,2,1,"mat-icon",2),t.qZA(),t.TgZ(4,"span",0),t.NdJ("click",function(){return n.sortViews()}),t.TgZ(5,"p",1),t._uU(6,"count of views"),t.qZA(),t.YNc(7,v,2,1,"mat-icon",2),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",n.toggleArrowDate),t.xp6(4),t.Q6J("ngIf",n.toggleArrowView))},directives:[u.O5,f.Hw],styles:["[_nghost-%COMP%]{display:flex;column-gap:20px;font-size:12px}.sort[_ngcontent-%COMP%]{display:flex;align-items:center;column-gap:3px;cursor:pointer}.sort__text[_ngcontent-%COMP%]{color:#2f80ed}.mat-icon[_ngcontent-%COMP%]{color:#929292}"],changeDetection:0}),i})(),Z=(()=>{class i{constructor(e){this.youtubeService=e,this.searchInputValue=""}inputValue(e){this.youtubeService.sorBytWord(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sort-by-words-button"]],decls:3,vars:1,consts:[[1,"sort"],["type","text","name","search",1,"search__input",3,"ngModel","ngModelChange","input"]],template:function(e,n){1&e&&(t.TgZ(0,"span",0),t._uU(1,"by word or sentance"),t.qZA(),t.TgZ(2,"input",1),t.NdJ("ngModelChange",function(p){return n.searchInputValue=p})("input",function(){return n.inputValue(n.searchInputValue)}),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngModel",n.searchInputValue))},directives:[g.Fj,g.JJ,g.On],styles:["[_nghost-%COMP%]{display:flex;align-items:center;column-gap:10px;font-size:12px}.sort[_ngcontent-%COMP%]{color:#2f80ed;cursor:pointer}.search__input[_ngcontent-%COMP%]{height:18px;padding:0 5px;border:none;outline:none;color:gray}"],changeDetection:0}),i})(),T=(()=>{class i{constructor(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-filter"]],inputs:{toggleFilter:"toggleFilter"},decls:7,vars:0,consts:[[1,"filter"],[1,"filter-container"],[1,"title"],[1,"buttons-container"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p",2),t._uU(3,"Sorting by:"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"app-sort-buttons")(6,"app-sort-by-words-button"),t.qZA()()())},directives:[S,Z],styles:[".filter[_ngcontent-%COMP%]{background:#e5e5e5}.filter-container[_ngcontent-%COMP%]{max-width:680px;height:50px;display:flex;align-items:center;margin:0 auto}.filter-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:21px;font-size:12px;line-height:14px;color:#929292;cursor:pointer}.buttons-container[_ngcontent-%COMP%]{display:flex;align-items:center;column-gap:20px}"],changeDetection:0}),i})(),P=(()=>{class i{constructor(e,n){this.element=e,this.renderer=n}ngOnInit(){this.renderer.setStyle(this.element.nativeElement,"border-bottom-color",this.setStatusDate())}setStatusDate(){return this.color=this.diffDay<6048e5?a.kf.blue:this.diffDay<2592e6?a.kf.green:this.diffDay>2592e6&&this.diffDay<15552e6?a.kf.yellow:a.kf.red,this.color}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.Qsj))},i.\u0275dir=t.lG2({type:i,selectors:[["","appHighlight",""]],inputs:{diffDay:["appHighlight","diffDay"]}}),i})();var O=r(7423);function A(i,o){if(1&i&&(t.TgZ(0,"div",1)(1,"mat-card",2),t._UZ(2,"img",3),t.TgZ(3,"mat-card-content")(4,"mat-icon",4),t._uU(5,"visibility"),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.qZA(),t.TgZ(8,"mat-icon",4),t._uU(9,"thumb_up"),t.qZA(),t.TgZ(10,"mat-card-subtitle"),t._uU(11),t.qZA(),t.TgZ(12,"mat-icon",4),t._uU(13,"thumb_down"),t.qZA(),t.TgZ(14,"mat-card-subtitle"),t._uU(15),t.qZA(),t.TgZ(16,"mat-icon",4),t._uU(17,"question_answer"),t.qZA(),t.TgZ(18,"mat-card-subtitle"),t._uU(19),t.qZA()(),t.TgZ(20,"mat-card-content")(21,"mat-card-title"),t._uU(22),t.qZA()(),t.TgZ(23,"mat-card-actions")(24,"button",5),t._uU(25,"more..."),t.qZA()()()()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("appHighlight",e.getDateDiff(e.item.snippet.publishedAt))("routerLink","/search/"+e.item.id),t.xp6(1),t.s9C("src",e.itemImageUrl,t.LSH),t.xp6(5),t.Oqu(e.item.statistics.viewCount),t.xp6(4),t.Oqu(e.item.statistics.likeCount),t.xp6(4),t.Oqu(e.item.statistics.dislikeCount),t.xp6(4),t.Oqu(e.item.statistics.commentCount),t.xp6(3),t.Oqu(e.itemTitle)}}let M=(()=>{class i{constructor(e){this.dateService=e}ngOnInit(){const{snippet:{thumbnails:{medium:{url:e}}}}=this.item;this.itemImageUrl=e;const{snippet:{localized:{title:n}}}=this.item;this.itemTitle=n}getDateDiff(e){return this.dateService.getDateDiff(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-search-card"]],inputs:{item:"item"},decls:1,vars:1,consts:[["class","card-container",4,"ngIf"],[1,"card-container"],[1,"example-card",3,"appHighlight","routerLink"],["mat-card-image","",3,"src"],["aria-hidden","false","aria-label","Example home icon"],["mat-button",""]],template:function(e,n){1&e&&t.YNc(0,A,26,8,"div",0),2&e&&t.Q6J("ngIf",n.item)},directives:[u.O5,l.a8,P,m.rH,l.G2,l.dn,f.Hw,l.$j,l.n5,l.hq,O.lW],styles:["[_nghost-%COMP%]{width:264px;height:327px;margin:0}.example-card[_ngcontent-%COMP%]{border-bottom:5px solid}.mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:263px;height:327px;padding:10px 7px 20px;background:#e5e5e5;border-radius:5px;font-family:Montserrat,sans-serif;filter:drop-shadow(2px 2px 4px rgba(0,0,0,.25))}.mat-card-image[_ngcontent-%COMP%]{max-width:calc(100% - 40px);background-position:center;background-size:cover;margin:5px auto}.mat-card-image[_ngcontent-%COMP%]:first-child{margin:0}.mat-button[_ngcontent-%COMP%]{background:#2f80ed;border-radius:5px;font-weight:400;font-size:12px;display:flex;align-items:center;text-align:center;color:#fff;padding:0 30px}.material-icons[_ngcontent-%COMP%]{font-size:19px;margin:0 5px}mat-card-content[_ngcontent-%COMP%]{display:flex;align-items:center;max-width:300px}.mat-card-title[_ngcontent-%COMP%]{font-weight:700;font-size:18px;line-height:23px;text-align:center;color:#4f4f4f}mat-card-subtitle[_ngcontent-%COMP%]{font-weight:400;font-size:10px;text-align:center;color:#000;margin:0}"],changeDetection:0}),i})(),k=(()=>{class i{transform(e,n){return e&&n?e.filter(s=>s.snippet.title.toLowerCase().indexOf(n)>-1):e}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=t.Yjl({name:"filter",type:i,pure:!0}),i})();function q(i,o){1&i&&t._UZ(0,"app-search-card",1),2&i&&t.Q6J("item",o.$implicit)}let U=(()=>{class i{constructor(){this.items=[]}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-search-card-list"]],inputs:{items:"items",isToggleResult:"isToggleResult",isDeskDate:"isDeskDate",isDeskView:"isDeskView",sortParam:"sortParam",searchWord:"searchWord"},decls:3,vars:9,consts:[[3,"item",4,"ngFor","ngForOf"],[3,"item"]],template:function(e,n){1&e&&(t.YNc(0,q,1,1,"app-search-card",0),t.ALo(1,"filter"),t.ALo(2,"sort")),2&e&&t.Q6J("ngForOf",t.xi3(1,1,t.gM2(2,4,n.items,n.sortParam,n.isDeskDate,n.isDeskView),n.searchWord))},directives:[u.sg,M],pipes:[k,y],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row;flex-wrap:wrap;row-gap:30px;column-gap:30px;width:100%;max-width:1200px;margin:30px auto}"],changeDetection:0}),i})();function B(i,o){1&i&&t._UZ(0,"app-filter")}function V(i,o){if(1&i&&t._UZ(0,"app-search-card-list",3),2&i){const e=t.oxw();t.Q6J("items",e.searchItems)("isDeskDate",e.isDeskSortDate)("isDeskView",e.isDeskSortView)("sortParam",e.sortParam)("searchWord",e.searchInputValue)("isToggleResult",e.isToggleResult)}}function Y(i,o){1&i&&(t.TgZ(0,"span",4),t._uU(1,"No video yet"),t.qZA())}const I=[{path:"",component:(()=>{class i{constructor(e,n){this.toggleService=e,this.youtubeService=n,this.searchItems=a.ul.items,this.sortDesk=c,this.searchInputValue=""}ngDoCheck(){this.isToggleResult=this.toggleService.toggleSearchResult,this.isToggleFilter=this.toggleService.toggleFilter,this.isDeskSortDate=this.youtubeService.isDeskSortDate,this.isDeskSortView=this.youtubeService.isDeskSortView,this.searchInputValue=this.youtubeService.searchInputValue,this.sortParam=this.youtubeService.sortParam}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(D.Y),t.Y36(d))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-card-result-page"]],decls:5,vars:3,consts:[[4,"ngIf"],[3,"items","isDeskDate","isDeskView","sortParam","searchWord","isToggleResult",4,"ngIf","ngIfElse"],["noSearchResult",""],[3,"items","isDeskDate","isDeskView","sortParam","searchWord","isToggleResult"],[1,"template"]],template:function(e,n){if(1&e&&(t.YNc(0,B,1,0,"app-filter",0),t.YNc(1,V,1,6,"app-search-card-list",1),t.YNc(2,Y,2,0,"ng-template",null,2,t.W1O),t._UZ(4,"app-card-details-page")),2&e){const s=t.MAs(3);t.Q6J("ngIf",n.isToggleFilter),t.xp6(1),t.Q6J("ngIf",n.isToggleResult)("ngIfElse",s)}},directives:[u.O5,T,U,x],styles:[".template[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:calc(100vh - 140px)}"]}),i})()},{path:":id",component:x}];let F=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.Bz.forChild(I)],m.Bz]}),i})(),R=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[h,d],imports:[[u.ez,C.Z,g.u5,g.UX,F]]}),i})()}}]);