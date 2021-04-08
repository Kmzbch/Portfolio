(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(10),n=a.n(s),r=a(39),c=a(33),o=a(70),l=a(35),m="SET_CURRENT_PAGE",d="FETCH_CURRENT_PAGE",g={currentPage:"default"};var u=Object(c.c)({storage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)({},e);case m:return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.payload.pageType});default:return e}}}),h=[o.a],p=Object(c.d)(u,{},c.a.apply(void 0,h)),j=(a(96),a(12)),b=a(13),k=a(15),x=a(14),v=a(43),f=function(){return function(e){e({type:d})}},O=a(139),y=a(140),S=a(141),T=a(134),N=a(138),w=a(60),P=[{title:"About",url:"about",className:"navbar-links"},{title:"Projects",url:"project",className:"navbar-links"},{title:"Timeline",url:"timeline",className:"navbar-links"},{title:"Contact",url:"contact",className:"navbar-links"}],C=(a(97),a(1)),A=function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(e){var i;return Object(j.a)(this,a),(i=t.call(this,e)).updateWindowWidth=function(){i.setState({windowWidth:window.innerWidth}),i.state.menuOpened&&i.state.windowWidth>=960&&i.toggleMenuIcon()},i.toggleMenuIcon=function(){i.setState({menuOpened:!i.state.menuOpened})},i.linkClicked=function(){i.state.menuOpened&&i.toggleMenuIcon()},i.state={menuOpened:!1,windowWidth:0},i}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCurrentPage(),this.updateWindowWidth(),window.addEventListener("resize",this.updateWindowWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowWidth)}},{key:"render",value:function(){var e=this;return Object(C.jsx)("div",{className:"navbar",children:Object(C.jsxs)("div",{className:"nav-container",children:[Object(C.jsx)("div",{className:"logo",children:Object(C.jsx)(w.a,{className:"logo-link",to:"#",smooth:!0,onClick:this.linkClicked,children:"KEI MIZUBUCHI"})}),this.state.menuOpened?Object(C.jsx)("div",{className:"menu-icon opened",onClick:this.toggleMenuIcon,children:Object(C.jsx)(T.a,{fontSize:"large"})}):Object(C.jsx)("div",{className:"menu-icon",onClick:this.toggleMenuIcon,children:Object(C.jsx)(N.a,{fontSize:"large"})}),Object(C.jsx)("div",{className:this.state.menuOpened?"menu opened":"menu",children:Object(C.jsx)(O.a,{className:"menu-list",children:P.map((function(t,a){return Object(C.jsx)(y.a,{button:!0,className:e.props.storage.currentPage===t.title.toLowerCase()?"nav-links active active-menu":"nav-links",component:w.a,smooth:!0,to:"#"+t.url,onClick:e.linkClicked,children:Object(C.jsx)(S.a,{primary:t.title})},t.title)}))})})]})})}}]),a}(i.Component),q=Object(r.b)((function(e){return{storage:e.storage}}),{fetchCurrentPage:f})(A),E=a(51),z=a(142),L=a(143),M=(a(100),function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsx)("div",{id:"home",className:"page home",children:Object(C.jsxs)("div",{className:"content",children:[Object(C.jsxs)("div",{className:"greeting",children:[Object(C.jsxs)(E.a,{variant:"h2",component:"span",children:["Hi,"," "]}),Object(C.jsxs)(E.a,{variant:"h2",component:"span",children:["I'm"," "]}),Object(C.jsx)(E.a,{variant:"h2",className:"highlight",component:"span",noWrap:!0,children:"Kei Mizubuchi"}),Object(C.jsx)(E.a,{variant:"h3",className:"jobtitle",noWrap:!0,children:"Software Developer"})]}),Object(C.jsx)(z.a,{className:"view-button",size:"large",variant:"outlined",href:"#about",endIcon:Object(C.jsx)(L.a,{className:"endicon"}),children:"Explore my work"})]})})}}]),a}(i.Component)),I=a(144),H=a(145),D="I am a software developer who completed a Software Engineering Diploma program at Centennial College. I am currently seeking a software engineering position where reliability is valued.\nI have five-year work experience in a university library as an On-Site IT Support Programmer, in which I performed maintenance, troubleshooting, system integration of library management system on LAMP servers. Closely interacting with the library staff and the team, I streamlined their business processes with technologies such as bibliographic record conversion.\nIn my most recent positions in Canada, I have accumulated further experience in web development with various modern technologies, including but not limited to ASP.NET Core, Angular, SQL Server stacks.",R="./images/about/language.jpg",F="./images/about/library.jpg",W="library",J="./images/about/dbm.jpg",B="books",G={link:"./images/about/design.jpg",altTxt:"whiteboard with sticky notes"},Q=[{link:"./images/techStacks/java.svg",altTxt:"Java"},{link:"./images/techStacks/c-sharp.svg",altTxt:"C#"},{link:"./images/techStacks/javascript.svg",altTxt:"JavaScript"},{link:"./images/techStacks/typescript.svg",altTxt:"TypeScript"},{link:"./images/techStacks/html5.svg",altTxt:"HTML5"},{link:"./images/techStacks/css3.svg",altTxt:"CSS3"},{link:"./images/techStacks/sass.svg",altTxt:"SASS"},{link:"./images/techStacks/perl.svg",altTxt:"Perl"},{link:"./images/techStacks/php.svg",altTxt:"PHP"},{link:"./images/techStacks/python.svg",altTxt:"Python"}],K=[{link:"./images/techStacks/angular.svg",altTxt:"Angular"},{link:"./images/techStacks/aspnetcore.png",altTxt:"ASP.NET"},{link:"./images/techStacks/spring.svg",altTxt:"Spring"},{link:"./images/techStacks/react.svg",altTxt:"React"},{link:"./images/techStacks/jquery.svg",altTxt:"jQuery"},{link:"./images/techStacks/junit5.png",altTxt:"Junit5"},{link:"./images/techStacks/rest-assured.png",altTxt:"REST-assured"},{link:"./images/techStacks/expressjs.png",altTxt:"Express.js"},{link:"./images/techStacks/nodejs.svg",altTxt:"Node.js"}],U=[{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/mysql.svg",altTxt:"MySQL"},{link:"./images/techStacks/oracle.png",altTxt:"Oracle"},{link:"./images/techStacks/firebase.svg",altTxt:"Firebase"},{link:"./images/techStacks/mongodb.svg",altTxt:"MongoDB"},{link:"./images/techStacks/linux.svg",altTxt:"Linux"},{link:"./images/techStacks/azure.svg",altTxt:"Microsoft Azure"},{link:"./images/techStacks/aws.svg",altTxt:"Amazon Web Service"}],_=[{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"},{link:"./images/techStacks/swagger.png",altTxt:"Swagger"},{link:"./images/techStacks/visio.png",altTxt:"Visio"},{link:"./images/techStacks/confluence.png",altTxt:"Confluence"},{link:"./images/techStacks/trello.svg",altTxt:"Trello"},{link:"./images/techStacks/adobexd.svg",altTxt:"Adobe XD"},{link:"./images/techStacks/photoshop.svg",altTxt:"Photoshop"}],V=function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(j.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).renderProfileContent=function(){return D.split(/\n+/).map((function(e,t){return Object(C.jsx)(E.a,{style:{fontSize:"1.1em",margin:"2vh auto"},children:e},t)}))},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsxs)(I.a,{className:"about-me",container:!0,spacing:3,justify:"center",children:[Object(C.jsxs)(I.a,{className:"description",item:!0,sm:12,md:7,children:[Object(C.jsx)(E.a,{className:"profile-header",variant:"h4",children:"Profile"}),this.renderProfileContent()]}),Object(C.jsxs)(I.a,{className:"profile",item:!0,sm:12,md:5,children:[Object(C.jsx)("img",{className:"profile-image",src:"./images/about/profile.png",alt:"profile"}),Object(C.jsx)(E.a,{variant:"h4",children:"Kei Mizubuchi"}),Object(C.jsx)(E.a,{variant:"h6",style:{margin:"1vh 0",color:"#555"},children:"Software Developer"}),Object(C.jsxs)("div",{className:"profile-location",children:[Object(C.jsx)(H.a,{className:"location-icon"}),Object(C.jsx)(E.a,{component:"span",children:"Toronto, Ontario"})]}),Object(C.jsx)(z.a,{className:"view-button",size:"large",variant:"outlined",color:"primary",href:"#project",children:"My Projects"})]})]})}}]),a}(i.Component),Y=(a(101),function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsx)("div",{className:"tech-stack-wrapper",children:Object(C.jsxs)("div",{children:[Object(C.jsx)("img",{className:"tech-stack-image",src:this.props.src,title:this.props.title,alt:"Logo of "+this.props.alt}),Object(C.jsx)("div",{className:"middle-wrapper",children:Object(C.jsx)("div",{className:"tech-stack-description",children:this.props.alt})})]})})}}]),a}(i.Component)),X=(a(67),function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsxs)(I.a,{className:"about-tech",container:!0,spacing:2,justify:"center",children:[Object(C.jsx)(E.a,{className:"caption",variant:"h4",children:"What can I offer?"}),Object(C.jsxs)(I.a,{className:"panel",container:!0,spacing:2,direction:"row",children:[Object(C.jsxs)(I.a,{item:!0,sm:12,md:7,children:[Object(C.jsx)(E.a,{className:"sub-header",variant:"h4",children:"Languages"}),Q.map((function(e,t){return Object(C.jsx)(Y,{src:e.link,title:e.altTxt,alt:e.altTxt},e.link)}))]}),Object(C.jsx)(I.a,{item:!0,sm:12,md:5,className:"image-panel",children:Object(C.jsx)("img",{className:"about-tech-image",src:R,alt:R.altTxt})})]}),Object(C.jsxs)(I.a,{className:"panel",container:!0,spacing:2,direction:"row-reverse",children:[Object(C.jsxs)(I.a,{item:!0,sm:12,md:6,children:[Object(C.jsx)(E.a,{className:"sub-header",variant:"h4",children:"Frameworks & Libraries"}),Object(C.jsx)("div",{className:"tech-panel",children:K.map((function(e,t){return Object(C.jsx)(Y,{src:e.link,title:e.altTxt,alt:e.altTxt},e.link)}))})]}),Object(C.jsx)(I.a,{item:!0,sm:12,md:6,className:"image-panel",children:Object(C.jsx)("img",{className:"about-tech-image",src:F,alt:W})})]}),Object(C.jsxs)(I.a,{className:"panel",container:!0,spacing:2,direction:"row",children:[Object(C.jsxs)(I.a,{item:!0,sm:12,md:7,children:[Object(C.jsx)(E.a,{className:"sub-header",variant:"h4",children:"DBM & Servers"}),U.map((function(e,t){return Object(C.jsx)(Y,{src:e.link,title:e.altTxt,alt:e.altTxt},e.link)}))]}),Object(C.jsx)(I.a,{item:!0,sm:12,md:5,className:"image-panel",children:Object(C.jsx)("img",{className:"about-tech-image",src:J,alt:B})})]}),Object(C.jsxs)(I.a,{className:"panel",container:!0,spacing:2,direction:"row-reverse",children:[Object(C.jsxs)(I.a,{item:!0,sm:12,md:6,children:[Object(C.jsx)(E.a,{className:"panel-header",variant:"h4",children:"Design & Management"}),Object(C.jsx)("div",{className:"tech-panel",children:_.map((function(e,t){return Object(C.jsx)(Y,{src:e.link,title:e.altTxt,alt:e.altTxt},e.link)}))})]}),Object(C.jsx)(I.a,{item:!0,sm:12,md:6,className:"image-panel",children:Object(C.jsx)("img",{className:"about-tech-image",src:G.link,alt:G.path})})]})]})}}]),a}(i.Component)),Z=a(146),$=a(147),ee=a(148),te=a(149),ae=a(150),ie=a(151),se=a(152),ne=a(153),re=function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsxs)(I.a,{className:"about-skills",container:!0,spacing:3,justify:"center",direction:"row",children:[Object(C.jsx)(E.a,{variant:"h4",className:"center",children:"My Skills & Qualifications"}),Object(C.jsxs)(I.a,{container:!0,justify:"space-around",style:{margin:"5vh 0"},children:[Object(C.jsxs)(I.a,{className:"skill-item specialties",item:!0,xs:12,sm:6,md:3,children:[Object(C.jsx)(Z.a,{className:"specialty-icon"}),Object(C.jsx)(E.a,{variant:"h6",children:"Full-Stack Development"}),Object(C.jsx)(E.a,{className:"skill-description",children:"Design, code, and test"}),Object(C.jsx)(E.a,{className:"skill-description",children:"in front-end and/or back-end"})]}),Object(C.jsxs)(I.a,{className:"skill-item specialties",item:!0,xs:12,sm:6,md:3,children:[Object(C.jsx)($.a,{className:"specialty-icon"}),Object(C.jsx)(E.a,{variant:"h6",children:"Scripting"}),Object(C.jsx)(E.a,{className:"skill-description",children:"Build scripts for workflow"}),Object(C.jsx)(E.a,{className:"skill-description",children:"automation/streamlining"})]}),Object(C.jsxs)(I.a,{className:"skill-item specialties",item:!0,xs:12,sm:6,md:3,children:[Object(C.jsx)(ee.a,{className:"specialty-icon"}),Object(C.jsx)(E.a,{variant:"h6",children:"On-Site IT Support"}),Object(C.jsx)(E.a,{className:"skill-description",children:"Provide issue resolution"}),Object(C.jsx)(E.a,{className:"skill-description",children:"in a client-centered approach"})]}),Object(C.jsxs)(I.a,{className:"skill-item specialties",item:!0,xs:12,sm:6,md:3,children:[Object(C.jsx)(te.a,{className:"specialty-icon"}),Object(C.jsx)(E.a,{variant:"h6",children:"Linux Server"}),Object(C.jsx)(E.a,{className:"skill-description",children:"Experienced in working with"}),Object(C.jsx)(E.a,{className:"skill-description",children:"LAMP servers"})]})]}),Object(C.jsxs)(I.a,{style:{margin:"3vh 0"},container:!0,justify:"space-around",children:[Object(C.jsxs)(I.a,{className:"skill-item soft-skills",item:!0,xs:12,sm:6,md:3,children:[Object(C.jsx)(ae.a,{className:"soft-skill-icon"}),Object(C.jsx)(E.a,{variant:"h6",children:"Attention to Detail"}),Object(C.jsx)(E.a,{className:"skill-description",children:"Analyze for solutions"}),Object(C.jsx)(E.a,{className:"skill-description",children:"and further improvement"})]}),Object(C.jsxs)(I.a,{className:"skill-item soft-skills",item:!0,xs:12,sm:6,md:3,children:[Object(C.jsx)(ie.a,{className:"soft-skill-icon"}),Object(C.jsx)(E.a,{variant:"h6",children:"Tenacity"}),Object(C.jsx)(E.a,{className:"skill-description",children:"Carry things through within"}),Object(C.jsx)(E.a,{className:"skill-description",children:"a limited timeframe"})]}),Object(C.jsxs)(I.a,{className:"skill-item soft-skills",item:!0,xs:12,sm:6,md:3,children:[Object(C.jsx)(se.a,{className:"soft-skill-icon"}),Object(C.jsx)(E.a,{variant:"h6",children:"Collaboration"}),Object(C.jsx)(E.a,{className:"skill-description",children:"Enjoy collaboration as well"}),Object(C.jsx)(E.a,{className:"skill-description",children:"as working independently"})]}),Object(C.jsxs)(I.a,{className:"skill-item soft-skills",item:!0,xs:12,sm:6,md:3,children:[Object(C.jsx)(ne.a,{className:"soft-skill-icon"}),Object(C.jsx)(E.a,{variant:"h6",children:"Adaptability"}),Object(C.jsx)(E.a,{className:"skill-description",children:"Grow skill sets to"}),Object(C.jsx)(E.a,{className:"skill-description",children:"adapt to changing needs"})]})]})]})}}]),a}(i.Component),ce=function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsx)("div",{id:"about",className:"page about",children:Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("div",{className:"header",children:"ABOUT"}),Object(C.jsx)("hr",{className:"divider pink center"}),Object(C.jsx)(V,{}),Object(C.jsx)(re,{}),Object(C.jsx)(X,{})]})})}}]),a}(i.Component),oe=a(157),le=a(50),me=a.n(le),de=a(63),ge=a.n(de),ue=[{title:"ProHub",projectType:"team",techStack:"AngularJS | Firebase | GCP | OOP | Agile | Angular Material",description:"Web application that meets all communication needs of landlords, staff, and tenants.",details:"",imageLink:"./images/projects/prohub.png",projectLink:"https://codepros2020.github.io/ProHub/",githubLink:"https://github.com/CodePros2020/ProHub"},{title:"ProHub Mobile",projectType:"team",techStack:"Android | Firebase | GCP | MVVM | Agile",description:"Android app that meets all communication needs of landlords, staff, and tenants.",details:"",imageLink:"./images/projects/prohub-mobile.png",projectLink:"",githubLink:"https://github.com/CodePros2020/ProHub-Android"},{title:"Fury: the Destroyer",projectType:"team",techStack:"TypeScript | CreateJS | OOP | Agile",description:"Web-based single screen PvP submarine game for 2 players.",details:"",imageLink:"./images/projects/fury.png",projectLink:"https://cosmos-games.github.io/Fury-The_Destroyer/",githubLink:"https://github.com/COSMOS-Games/Fury-The_Destroyer"},{title:"Staktekst",projectType:"personal",techStack:"jQuery | JavaScript | HTML | CSS | Messaging Architecture",description:"Chrome extension for web search, text-clipping, and note-taking",details:"This tool was developed to fulfil my own needs for English learning.\nHere's a brief article about my approach. https://scrapbox.io/scrapbox-live-demo/Staktekst",imageLink:"./images/projects/staktekst.png",projectLink:"https://chrome.google.com/webstore/detail/staktekst/ecnhgpnligcapbfpaoklofmigomdjhkb/en",githubLink:"https://github.com/Kmzbch/staktekst.git"}],he=(a(68),a(154)),pe=a(155),je=a(156),be=(i.Component,function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(e){return Object(j.a)(this,a),t.call(this,e)}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsx)("div",{id:"project",className:"page project",children:Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("div",{className:"header",children:"PROJECTS"}),Object(C.jsx)("hr",{className:"divider yellow center"}),ue.map((function(e,t){return Object(C.jsx)(oe.a,{className:"personal"===e.projectType?"panel personal":"panel",children:Object(C.jsxs)(I.a,{container:!0,spacing:2,justify:"center",children:[Object(C.jsxs)(I.a,{item:!0,className:"sub-panel left",xs:12,sm:12,md:6,children:[Object(C.jsx)(E.a,{className:"project-title",variant:"h3",children:e.title}),Object(C.jsx)("div",{variant:"h3",className:"personal"===e.projectType?"project-type personal":"project-type",children:e.projectType+" project"}),""===e.techStack?Object(C.jsx)("div",{}):Object(C.jsx)("div",{variant:"h3",className:"project-techstack",children:e.techStack}),Object(C.jsx)(E.a,{className:"project-description",children:e.description}),""===e.projectLink?Object(C.jsxs)(I.a,{container:!0,direction:"column",children:[Object(C.jsx)(z.a,{className:"view-button",size:"large",variant:"outlined",color:"secondary",startIcon:Object(C.jsx)(me.a,{}),href:e.githubLink,target:"_blank",children:"View Code"}),Object(C.jsx)(z.a,{style:{opacity:"0",pointerEvents:"none"},className:"view-button",size:"large",variant:"outlined",color:"secondary",startIcon:Object(C.jsx)(ge.a,{}),href:e.projectLink,target:"_blank",children:"View Demo"})]}):Object(C.jsxs)(I.a,{container:!0,direction:"column",children:[Object(C.jsx)(z.a,{className:"view-button",size:"large",variant:"outlined",color:"secondary",startIcon:Object(C.jsx)(ge.a,{}),href:e.projectLink,target:"_blank",children:"View Demo"}),Object(C.jsx)(z.a,{className:"view-button",size:"large",variant:"outlined",color:"secondary",startIcon:Object(C.jsx)(me.a,{}),href:e.githubLink,target:"_blank",children:"View Code"})]})]}),Object(C.jsx)(I.a,{item:!0,className:"sub-panel right",xs:12,sm:12,md:6,children:Object(C.jsx)("img",{className:"project-image",src:e.imageLink,alt:"screenshots of "+e.title})})]})},e.title)}))]})})}}]),a}(i.Component)),ke=a(158),xe=[{dateRange:"SEP. 2020 - DEC. 2020",title:"Back-end Developer",company:"Centennial College: WIMTACH",duties:["Created RESTful APIs and related modules of Java Electronic Medical Record web application with Spring Boot to replace Flash-based legacy system","Translated Hibernate queries into SQL Server queries / data access helpers to ensure code reusability and router\u2019s performance","Built automated unit/integration test suite with JUnit & REST Assured ","Maintained Swagger & Confluence API documentation and test tracking lists","Participated the Daily Scrum and discussed a solution with the dev team","Resolved technical issues arising during development in an Agile manner"],techStacks:[{link:"./images/techStacks/java.svg",altTxt:"Java"},{link:"./images/techStacks/spring.svg",altTxt:"Spring"},{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/junit5.png",altTxt:"Junit5"},{link:"./images/techStacks/rest-assured.png",altTxt:"REST-assured"},{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"},{link:"./images/techStacks/swagger.png",altTxt:"Swagger"},{link:"./images/techStacks/jira.svg",altTxt:"Jira"},{link:"./images/techStacks/confluence.png",altTxt:"Confluence"},{link:"./images/techStacks/trello.svg",altTxt:"Trello"}]},{dateRange:"SEP. 2019 - DEC. 2019",title:"Co-op Application Developer",company:"CIBC: Personal Banking Products Technology",duties:["Conducted and optimized API/web services testing of Spring MVC banking middleware with SOAP UI","Created/modified Shell Scripts for archiving access log and assisting with the API testing","Performed interface testing of the web portal and documented test reports","Conducted audit on VCS of the team to provide recommendation on migration options in collaboration with a senior developer","Assisted senior developers in creating technical documents and examination of server information"],techStacks:[{link:"./images/techStacks/j2ee.svg",altTxt:"J2EE"},{link:"./images/techStacks/spring.svg",altTxt:"Spring"},{link:"./images/techStacks/soapui.png",altTxt:"SOAP UI"},{link:"./images/techStacks/xml.png",altTxt:"XML"},{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"}]},{dateRange:"MAY. 2019 - SEP. 2019",title:"Volunteer Bugfix Developer",company:"Centennial College",duties:["Acted in a chat room web application project that allows students to vote and offer feedback about related topics posted","Investigated the original source code, tested the functionalities, and performed bugfix","Implemented additional functionalities with ASP.NET Core, Angular 7 and SQL Server stack","Dealt with missing requirements in the original application","Led the latter part of the project to completion with the team of four"],techStacks:[{link:"./images/techStacks/angular.svg",altTxt:"Angular"},{link:"./images/techStacks/c-sharp.svg",altTxt:"C#"},{link:"./images/techStacks/aspnetcore.png",altTxt:"ASP.NET"},{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"}]},{dateRange:"JAN. 2019 - APR. 2019",title:"Co-op Application Developer",company:"CIBC: Treasury & Risk Management Technology",duties:["Acted in a web-based wealth management application development","Implemented both the front-end and back-end of the application with ASP.NET Core, Angular 5, Kendo UI, and Entity Framework 4.5","Investigated technical specifications and architecture of a legacy J2EE application for its migration","Collaboratively worked with the developer team and BA/QA in a Azure DevOps Server & Git environment","Conducted research on biometric ID verification systems and made recommendation with a team of four","Performed other related tasks as assigned"],techStacks:[{link:"./images/techStacks/angular.svg",altTxt:"Angular"},{link:"./images/techStacks/c-sharp.svg",altTxt:"C#"},{link:"./images/techStacks/aspnetcore.png",altTxt:"ASP.NET"},{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/kendo-ui.png",altTxt:"Kendo UI"},{link:"./images/techStacks/j2ee.svg",altTxt:"J2EE"},{link:"./images/techStacks/azure.svg",altTxt:"Microsoft Azure"},{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"}]},{dateRange:"APR. 2008 - MAR. 2016",title:"On-Site IT Support Programmer",company:"Wizard Inc.",duties:["Performed maintenance, troubleshooting, and system integration of LAMP servers of a university library management system","Built and continuously refactored ETL pipelines by Perl 5/Bash scripting to process Marc 21 bibliographic records into a variety of data formats","Implemented two-language(EN/JP) support for digital archives while handling character encoding issues, webpage generation, and integration of full-text search engine","Analysed and refactored existing interanal scripts/modules or escalated problems to other IT staff","Automated/Streamlined library staff\u2019s business processes by introducing digital tools and/or scripting such as visualization of circulation statistics into web pages","Conducted installation and configuration of open-source Java CMS for scholarly digital content","Reported web access information and project status to the library staff on a monthly basis","Added features and modified internal/external websites in PHP & MySQL","Worked collaboratively with multiple departments across the organization","Performed other related duties as required"],techStacks:[{link:"./images/techStacks/linux.svg",altTxt:"Linux"},{link:"./images/techStacks/red-hat.svg",altTxt:"Red Hat"},{link:"./images/techStacks/apache.png",altTxt:"Apache"},{link:"./images/techStacks/mysql.svg",altTxt:"MySQL"},{link:"./images/techStacks/php.svg",altTxt:"PHP"},{link:"./images/techStacks/perl.svg",altTxt:"Perl"},{link:"./images/techStacks/java.svg",altTxt:"Java"},{link:"./images/techStacks/postgresql.svg",altTxt:"PostgreSQL"},{link:"./images/techStacks/marc21.png",altTxt:"MARC 21"},{link:"./images/techStacks/dspace.png",altTxt:"DSPACE"}]}],ve=(a(103),function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsx)("div",{id:"timeline",className:"page timeline",children:Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("div",{className:"header",children:"TIMELINE"}),Object(C.jsx)("hr",{className:"divider pink center"}),Object(C.jsx)("ul",{className:"panel",children:xe.map((function(e,t){return Object(C.jsxs)("li",{className:"timeline-event",children:[Object(C.jsx)("div",{className:"timeline-event-icon"}),Object(C.jsxs)("div",{className:"timeline-event-item",children:[Object(C.jsx)("div",{className:"timeline-date-range",children:e.dateRange}),Object(C.jsx)(E.a,{className:"timeline-title",variant:"h3",children:e.title}),Object(C.jsx)(E.a,{className:"timeline-company",variant:"h4",children:e.company}),Object(C.jsx)(O.a,{className:"timeline-duty-list",children:e.duties.map((function(e,t){return Object(C.jsxs)(y.a,{children:[Object(C.jsx)(ke.a,{className:"duty-icon",children:"\u25aa"}),Object(C.jsx)(S.a,{className:"duty-item",children:e})]},t)}))}),Object(C.jsx)("div",{className:"timeline-tech-stack",children:e.techStacks.map((function(e,t){return Object(C.jsx)(Y,{src:e.link,title:e.altTxt,alt:e.altTxt},t)}))})]})]},t)}))})]})})}}]),a}(i.Component)),fe=a(161),Oe=a(159),ye=a(160),Se=a(75),Te=a.n(Se),Ne=a(77),we=a.n(Ne),Pe=a(76),Ce=a.n(Pe),Ae=[{link:"mailto:cdfray@gmail.com",icon:Object(C.jsx)(Te.a,{className:"contact-icon"})},{link:"https://www.linkedin.com/in/kmzbch",icon:Object(C.jsx)(Ce.a,{className:"contact-icon"})},{link:"https://github.com/Kmzbch",icon:Object(C.jsx)(me.a,{className:"contact-icon"})},{link:"Toronto, Ontario",icon:Object(C.jsx)(we.a,{className:"contact-icon"})}],qe=(a(104),function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(j.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={messageSent:!1,inEditing:!1,hasError:!1},e.resetFormMessage=function(t){e.state.inEditing||e.setState({messageSent:!1,inEditing:!0,hasError:!1})},e.submitForm=function(t){t.preventDefault();var a=t.target,i=new FormData(a),s=new XMLHttpRequest;s.open(a.method,a.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&200===s.status?(e.setState({inEditing:!1,messageSent:!0,hasError:!1}),a.reset()):e.setState({inEditing:!1,messageSent:!1,hasError:!0})},s.send(i)},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(C.jsx)("div",{id:"contact",className:"page contact",children:Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)("div",{className:"header white",children:"CONTACT"}),Object(C.jsx)("hr",{className:"divider pink center"}),Object(C.jsx)(E.a,{className:"caption white",variant:"h5",children:"Have a question or want to work together?"}),Object(C.jsxs)(I.a,{className:"panel",container:!0,spacing:2,children:[Object(C.jsx)(I.a,{item:!0,sm:12,md:6,children:Object(C.jsx)(O.a,{className:"contact-list",children:Ae.map((function(e,t){return Object(C.jsxs)(y.a,{children:[Object(C.jsx)(ke.a,{children:e.icon}),Object(C.jsx)(S.a,{primary:Object(C.jsx)(he.a,Object(l.a)(Object(l.a)({className:e.link.match(/^https?:\/\/(www\.)?|mailto:/i)?"contact-link":"contact-link disabled",href:e.link},e.link.match(/^https?:\/\//i)?{target:"_blank"}:{}),{},{variant:"h6",children:e.link.replace(/^https?:\/\/(www\.)?|mailto:/i,"")}))})]},e.link)}))})}),Object(C.jsx)(I.a,{item:!0,sm:12,md:6,children:Object(C.jsx)("div",{className:"contact-form",children:Object(C.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/mnqokoqj",method:"POST",children:[Object(C.jsx)(fe.a,{className:"form-input",id:"name",type:"text",name:"name",label:"Name",variant:"filled",size:"small",onFocus:this.resetFormMessage,required:!0}),Object(C.jsx)(fe.a,{className:"form-input",id:"email",type:"email",name:"email",label:"Email",variant:"filled",size:"small",onFocus:this.resetFormMessage,required:!0}),Object(C.jsx)(fe.a,{className:"form-input",id:"message",name:"message",label:"Message",variant:"filled",multiline:!0,rows:8,onFocus:this.resetFormMessage,required:!0}),Object(C.jsx)(z.a,{className:"form-button",type:"submit",size:"large",variant:"outlined",disabled:this.state.messageSent,children:"Send"}),Object(C.jsxs)("div",{className:"form-message",hidden:!this.state.messageSent,children:[Object(C.jsx)(Oe.a,{className:"form-message-icon"}),"Thank you! Your message has been successfully sent."]}),Object(C.jsxs)("div",{className:"form-message-error",hidden:!this.state.hasError,children:[Object(C.jsx)(ye.a,{className:"form-message-icon"}),"There was an error trying to send your message."]})]})})})]})]})})}}]),a}(i.Component)),Ee=a(78),ze=function(e){return Object(Ee.a)(e),Object(C.jsx)("div",{id:"footer",className:"footer",style:{position:"relative",width:"100%",height:"6vh",backgroundColor:"#3f4e67",color:"rgba(255,255,255, 0.4)",margin:"0 auto",textAlign:"center"},children:"\xa92021 Kei Mizubuchi"})},Le=a(11),Me=a(79),Ie=function(){function e(){Object(j.a)(this,e),Le.a.registerPlugin(Me.a)}return Object(b.a)(e,[{key:"initializeAnimation",value:function(e){var t=.75;if("default"===e)this.setHomeAnimation(),t=7.5;else{var a=document.querySelector("html");Le.a.to(a,{opacity:1})}this.setNavbarAnimation(t),this.setAboutAnimation(),this.setProjectAnimation(),this.setTimelineAnimation(),this.setContactAnimation()}},{key:"setNavbarAnimation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.75,t=document.querySelector(".nav-container"),a=document.querySelector("html"),i=Le.a.timeline();i.from(t,{delay:e,duration:.75,top:-100,ease:"ease.out",opacity:0}).to(a,{delay:1,overflowY:"auto"})}},{key:"setHomeAnimation",value:function(){var e=document.querySelector("#home"),t=e.querySelector(".greeting").children,a=e.querySelector(".view-button"),i=document.querySelector("html"),s=Le.a.timeline();Le.a.to(i,{opacity:1,overflowY:"hidden"}),s.from([e],{delay:.75,duration:1,opacity:0}).from([e],.5,{backgroundColor:"rgba(0,0,0,0)",duration:3}).from(t[0],1,{duration:.5,opacity:0}).from([t[1],t[2]],1.5,{duration:.5,opacity:0,stagger:{amount:.3}}).from(t[3],1.4,{duration:.5,opacity:0}).from([a],1.5,{duration:1,y:75,ease:"back.out",opacity:0})}},{key:"setAboutAnimation",value:function(){var e=document.querySelector("#about"),t=e.querySelector(".header"),a=e.querySelector(".divider"),i=e.querySelector(".description"),s=e.querySelector(".profile-header"),n=e.querySelector(".profile"),r=e.querySelector(".about-skills"),c=e.querySelectorAll(".skill-item.specialties"),o=e.querySelectorAll(".skill-item.soft-skills"),l=e.querySelectorAll(".about-tech .caption"),m=e.querySelectorAll(".about-tech .panel");Le.a.from([t,a],{delay:.5,duration:.8,ease:"ease.out",x:-100,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[t],start:"top 75%"}}),Le.a.from([s,i],{delay:.5,duration:.8,ease:"ease.out",x:-100,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[i,s],start:"top 75%"}}),Le.a.from([n],{delay:.5,duration:.8,ease:"ease.out",y:50,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[n],start:"top 75%"}}),Le.a.from([r],{delay:.5,duration:.8,ease:"back.out",transformOrigin:"center",scaleX:.8,scaleY:.8,z:.1,opacity:0,scrollTrigger:{trigger:[r],start:"top 75%"}}),Le.a.from(c,{delay:2,duration:.6,ease:"back.out",scaleX:.9,scaleY:.9,y:50,opacity:0,z:.1,stagger:{amount:.5},scrollTrigger:{trigger:c,start:"top 75%"}}),Le.a.from(o,{delay:2,duration:.6,ease:"back.out",scaleX:.9,scaleY:.9,y:50,opacity:0,z:.1,stagger:{amount:.5},scrollTrigger:{trigger:o,start:"top 75%"}}),Le.a.from([l],{delay:.5,duration:.8,ease:"ease.out",y:50,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[l],start:"top 75%"}});for(var d=0,g=0;g<m.length;g++){d=g%2===0?50:-50,Le.a.from([m[g]],{delay:.5,duration:.8,ease:"ease.out",x:d,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[m[g]],start:"top 75%"}});var u=m[g].querySelectorAll(".tech-stack-image");Le.a.from(u,{delay:1.5,duration:.6,ease:"ease.out",y:50,z:.1,opacity:0,stagger:{amount:.5},scrollTrigger:{trigger:u,start:"top 75%"}})}}},{key:"setProjectAnimation",value:function(){var e=document.querySelector("#project"),t=e.querySelector(".header"),a=e.querySelector(".divider"),i=e.querySelectorAll(".panel");Le.a.from([t,a],{delay:.5,duration:.8,ease:"ease.out",x:100,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[t],start:"top 75%"}});for(var s=0;s<i.length;s++){var n=i[s].querySelector(".sub-panel.left"),r=n.children;Le.a.from([i[s]],{delay:.5,duration:.8,ease:"ease.out",y:50,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[i[s]],start:"top 85%"}}),Le.a.from(r,{delay:2,duration:.5,ease:"ease.out",y:50,z:.1,opacity:0,stagger:{amount:.5},scrollTrigger:{trigger:n,start:"top 85%"}})}}},{key:"setTimelineAnimation",value:function(){var e=document.querySelector("#timeline"),t=e.querySelector(".header"),a=e.querySelector(".divider"),i=e.querySelectorAll(".panel"),s=e.querySelectorAll(".timeline-event-icon"),n=e.querySelectorAll(".timeline-event");Le.a.from([t,a],{delay:.5,duration:.8,ease:"ease.out",x:-100,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[t],start:"top 75%"}}),Le.a.from([i],{delay:.5,duration:.8,ease:"ease.out",z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[i],start:"top 75%"}});for(var r=0;r<s.length;r++)Le.a.from([s[r]],.7,{rotation:-680,z:.1,scrollTrigger:{trigger:[s[r]],start:"top 75%"}});for(var c=0;c<n.length;c++){var o=n[c].querySelector(".timeline-duty-list"),l=n[c].querySelectorAll(".tech-stack-image");Le.a.from([n[c]],{delay:.5,duration:.8,ease:"ease.out",y:50,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[n[c]],start:"top 75%"}}),Le.a.from(o.children,{delay:3,duration:1,ease:"power3.out",x:100,z:.1,opacity:0,stagger:{amount:.5},scrollTrigger:{trigger:[o],start:"top 75%"}}),Le.a.from(l,{delay:1.5,duration:.6,ease:"ease.out",y:50,z:.1,opacity:0,stagger:{amount:.3},scrollTrigger:{trigger:l,start:"top 100%"}})}}},{key:"setContactAnimation",value:function(){var e=document.querySelector("#contact"),t=e.querySelector(".header"),a=e.querySelector(".divider"),i=e.querySelector(".caption"),s=e.querySelector(".contact-list"),n=e.querySelectorAll(".contact-link"),r=e.querySelector(".contact-form");Le.a.from([t,a,i],{delay:.5,duration:.8,ease:"ease.out",x:-100,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[t],start:"top 75%"}}),Le.a.from(s,{delay:.5,duration:.8,ease:"ease.out",x:-50,z:.1,opacity:0,stagger:{amount:.5},scrollTrigger:{trigger:s,start:"top 75%"}}),Le.a.from(n,{delay:.5,duration:.8,ease:"ease.out",z:.1,opacity:0,stagger:{amount:.5},scrollTrigger:{trigger:n,start:"top 75%"}}),Le.a.from([r],{delay:.5,duration:.8,ease:"ease.out",y:50,z:.1,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[r],start:"top 75%"}})}}]),e}(),He=(a(105),function(e){Object(k.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(j.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).homePos=0,e.aboutPos=0,e.projectPos=0,e.timelinePos=0,e.contactPos=0,e.monitorCurrentPage=function(){var t=e.props.storage.currentPage,a=window.scrollY;e.props.fetchCurrentPage(),0===a?"default"!==t&&e.props.setCurrentPage("default"):a<e.homePos-50?"home"!==t&&(e.props.setCurrentPage("home"),document.title="Home - Kei's Portfolio"):a<e.aboutPos-50?"about"!==t&&(e.props.setCurrentPage("about"),document.title="About - Kei's Portfolio"):a<e.projectPos-50?"projects"!==t&&(e.props.setCurrentPage("projects"),document.title="Projects - Kei's Portfolio"):a<e.timelinePos-50?"timeline"!==t&&(e.props.setCurrentPage("timeline"),document.title="Timeline - Kei's Portfolio"):a<e.contactPos-50?"contact"!==t&&(e.props.setCurrentPage("contact"),document.title="Contact - Kei's Portfolio"):"default"!==t&&e.props.setCurrentPage("default")},e}return Object(b.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.monitorCurrentPage)}},{key:"componentDidMount",value:function(){var e=this;console.log("Welcome to Kei's portfolio!"),console.log("This portfolio is built with React and Redux"),document.title="Kei's Portfolio",this.homePos=document.querySelector("#home").clientHeight,this.aboutPos=this.homePos+document.querySelector("#about").clientHeight,this.projectPos=this.aboutPos+document.querySelector("#project").clientHeight,this.timelinePos=this.projectPos+document.querySelector("#timeline").clientHeight,this.contactPos=this.timelinePos+document.querySelector("#contact").clientHeight,setTimeout((function(){e.monitorCurrentPage(),(new Ie).initializeAnimation(e.props.storage.currentPage),setInterval(e.monitorCurrentPage,750)}),300)}},{key:"render",value:function(){return Object(C.jsxs)(v.a,{basename:"/Portfolio",children:[Object(C.jsx)(q,{}),Object(C.jsx)(M,{}),Object(C.jsx)(ce,{}),Object(C.jsx)(be,{}),Object(C.jsx)(ve,{}),Object(C.jsx)(qe,{}),Object(C.jsx)(ze,{})]})}}]),a}(i.Component)),De=Object(r.b)((function(e){return{storage:e.storage}}),{fetchCurrentPage:f,setCurrentPage:function(e){return{type:m,payload:{pageType:e}}}})(He),Re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,163)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),n(e),r(e)}))};n.a.render(Object(C.jsx)(r.a,{store:p,children:Object(C.jsx)(De,{})}),document.getElementById("root")),Re()},67:function(e,t,a){},68:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.871bb000.chunk.js.map