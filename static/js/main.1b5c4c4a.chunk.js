(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(8),c=a.n(s),r=(a(87),a(13)),o=a(14),l=a(16),m=a(15),d=a(39),u=a(134),g=a(135),h=a(136),j=a(129),p=a(133),b=a(57),k=[{title:"About",url:"about",className:"navbar-links"},{title:"Projects",url:"project",className:"navbar-links"},{title:"Timeline",url:"timeline",className:"navbar-links"},{title:"Contact",url:"contact",className:"navbar-links"}],v=(a(88),a(1)),x=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).updateWindowDimensions=function(){i.setState({windowWidth:window.innerWidth,windowHeight:window.innerHeight}),i.state.active&&i.state.windowWidth>=1e3&&i.toggleMenuIcon()},i.toggleMenuIcon=function(){i.setState({active:!i.state.active})},i.linkClicked=function(){i.state.active&&i.toggleMenuIcon()},i.state={active:!1,windowWidth:0,windowHeight:0},i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this,t=this.props.currentScreen;return Object(v.jsx)("div",{className:"navbar",children:Object(v.jsxs)("div",{className:"nav-container",children:[Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)(b.a,{className:"logo-link",to:"#home",smooth:!0,onClick:this.linkClicked,children:"KEI MIZUBUCHI"})}),this.state.active?Object(v.jsx)("div",{className:"menu-icon opened",onClick:this.toggleMenuIcon,children:Object(v.jsx)(j.a,{fontSize:"large"})}):Object(v.jsx)("div",{className:"menu-icon",onClick:this.toggleMenuIcon,children:Object(v.jsx)(p.a,{fontSize:"large"})}),Object(v.jsx)("div",{className:this.state.active?"menu opened":"menu",children:Object(v.jsx)(u.a,{className:"menu-list",children:k.map((function(a,i){return Object(v.jsx)(g.a,{button:!0,className:t===a.title.toLowerCase()?"nav-links active active-menu":"nav-links",component:b.a,smooth:!0,duration:1e3,to:"#"+a.url,onClick:e.linkClicked,children:Object(v.jsx)(h.a,{primary:a.title})},a.title)}))})})]})})}}]),a}(i.Component),f=a(47),O=a(137),y=a(138),S=(a(95),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{id:"home",className:"page home",children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsxs)(f.a,{variant:"h2",className:"greeting",component:"span",children:["Hi,"," "]}),Object(v.jsxs)(f.a,{variant:"h2",className:"greeting",component:"span",children:["I'm"," "]}),Object(v.jsx)(f.a,{variant:"h2",className:"greeting highlight",component:"span",noWrap:!0,children:"Kei Mizubuchi"}),Object(v.jsx)(f.a,{variant:"h3",className:"greeting jobtitle",noWrap:!0,children:"Software Developer"}),Object(v.jsx)(O.a,{className:"view-button",size:"large",variant:"outlined",href:"#about",endIcon:Object(v.jsx)(y.a,{className:"endicon"}),children:"Explore my work"})]})})}}]),a}(i.Component)),N=a(139),T=a(140),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(N.a,{className:"about-me",container:!0,spacing:3,justify:"center",children:[Object(v.jsxs)(N.a,{className:"description",item:!0,sm:12,md:7,children:[Object(v.jsx)(f.a,{className:"profile-header",variant:"h4",children:"Profile"}),Object(v.jsx)(f.a,{style:{fontSize:"1.1em",margin:"2vh auto"},children:"I am a software developer who completed a Software Engineering Diploma program at Centennial College. I am currently seeking a software engineering/full-stack developer position where reliability is valued."}),Object(v.jsx)(f.a,{style:{fontSize:"1.1em",margin:"2vh auto"},children:"I have over five years of work experience in a university library as an On-Site IT Support Programmer, in which I performed maintenance, troubleshooting, system backup and upgrade of integrated library management system on LAMP servers. I closely communicated with the internal team and library staff and helped them out with streamlining their business processes by scripting in Shell script / Perl such as large-scale bibliographic record conversion."}),Object(v.jsx)(f.a,{style:{fontSize:"1.1em",margin:"2vh auto"},children:"In most recent positions in Canda, I have accumulated further experience in web application development with various modern technologies, including but not limited to ASP.NET Core, Angular, SQL Server stacks. My current focus are microservices and RESTful APIs but I am open to work both the front-end and back-end."})]}),Object(v.jsxs)(N.a,{className:"profile",item:!0,sm:12,md:5,children:[Object(v.jsx)("img",{className:"profile-image",src:"./images/about/profile2.png",alt:"profile"}),Object(v.jsx)(f.a,{variant:"h4",children:"Kei Mizubuchi"}),Object(v.jsx)(f.a,{variant:"h6",style:{margin:"1vh 0",color:"#555"},children:"Software Developer"}),Object(v.jsxs)("div",{className:"profile-location",children:[Object(v.jsx)(T.a,{className:"profile-location-icon"}),Object(v.jsx)(f.a,{component:"span",children:"Toronto, Ontario"})]})]})]})}}]),a}(i.Component),A=[{link:"./images/techStacks/java.svg",altTxt:"Java"},{link:"./images/techStacks/c-sharp.svg",altTxt:"C#"},{link:"./images/techStacks/javascript.svg",altTxt:"JavaScript"},{link:"./images/techStacks/typescript.svg",altTxt:"TypeScript"},{link:"./images/techStacks/html5.svg",altTxt:"HTML5"},{link:"./images/techStacks/css3.svg",altTxt:"CSS3"},{link:"./images/techStacks/sass.svg",altTxt:"SASS"},{link:"./images/techStacks/perl.svg",altTxt:"Perl"},{link:"./images/techStacks/php.svg",altTxt:"PHP"},{link:"./images/techStacks/python.svg",altTxt:"Python"}],C=[{link:"./images/techStacks/angular.svg",altTxt:"Angular"},{link:"./images/techStacks/aspnetcore.png",altTxt:"ASP.NET"},{link:"./images/techStacks/spring.svg",altTxt:"Spring"},{link:"./images/techStacks/react.svg",altTxt:"React"},{link:"./images/techStacks/jquery.svg",altTxt:"jQuery"},{link:"./images/techStacks/junit5.png",altTxt:"Junit5"},{link:"./images/techStacks/rest-assured.png",altTxt:"REST-assured"},{link:"./images/techStacks/expressjs.png",altTxt:"Express.js"},{link:"./images/techStacks/nodejs.svg",altTxt:"Node.js"}],P=[{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/mysql.svg",altTxt:"MySQL"},{link:"./images/techStacks/oracle.png",altTxt:"Oracle"},{link:"./images/techStacks/firebase.svg",altTxt:"Firebase"},{link:"./images/techStacks/mongodb.svg",altTxt:"MongoDB"},{link:"./images/techStacks/linux.svg",altTxt:"Linux"},{link:"./images/techStacks/azure.svg",altTxt:"Microsoft Azure"},{link:"./images/techStacks/aws.svg",altTxt:"Amazon Web Service"}],q=[{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"},{link:"./images/techStacks/swagger.png",altTxt:"Swagger"},{link:"./images/techStacks/visio.png",altTxt:"Visio"},{link:"./images/techStacks/confluence.png",altTxt:"Confluence"},{link:"./images/techStacks/trello.svg",altTxt:"Trello"},{link:"./images/techStacks/adobexd.svg",altTxt:"Adobe XD"},{link:"./images/techStacks/photoshop.svg",altTxt:"Photoshop"}],M=(a(96),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"tech-stack-wrapper",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{className:"tech-stack-image",src:this.props.src,title:this.props.title,alt:"Logo of "+this.props.alt}),Object(v.jsx)("div",{className:"middle-wrapper",children:Object(v.jsx)("div",{className:"tech-stack-description",children:this.props.alt})})]})})}}]),a}(i.Component)),L=(a(64),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).language="./images/about/language.jpg",i.library="./images/about/library.jpg",i.dbm="./images/about/dbm.jpg",i.design="./images/about/design.jpg",i}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(N.a,{className:"about-tech",container:!0,spacing:2,justify:"center",children:[Object(v.jsx)(f.a,{className:"caption",variant:"h4",children:"What can I offer?"}),Object(v.jsxs)(N.a,{className:"sub-panel",container:!0,spacing:2,direction:"row",children:[Object(v.jsxs)(N.a,{item:!0,sm:12,md:7,children:[Object(v.jsx)(f.a,{className:"sub-header",variant:"h4",children:"Languages"}),A.map((function(e,t){return Object(v.jsx)(M,{src:e.link,title:e.altTxt,alt:e.altTxt},e.link)}))]}),Object(v.jsx)(N.a,{item:!0,sm:12,md:5,className:"image-panel",children:Object(v.jsx)("img",{className:"about-tech-image",src:this.language,alt:"Keyboard"})})]}),Object(v.jsxs)(N.a,{className:"sub-panel",container:!0,spacing:2,direction:"row-reverse",children:[Object(v.jsxs)(N.a,{item:!0,sm:12,md:6,children:[Object(v.jsx)(f.a,{className:"sub-header",variant:"h4",children:"Frameworks & Libraries"}),Object(v.jsx)("div",{className:"tech-panel",children:C.map((function(e,t){return Object(v.jsx)(M,{src:e.link,title:e.altTxt,alt:e.altTxt},e.link)}))})]}),Object(v.jsx)(N.a,{item:!0,sm:12,md:6,className:"image-panel",children:Object(v.jsx)("img",{className:"about-tech-image",src:this.library,alt:"Books"})})]}),Object(v.jsxs)(N.a,{className:"sub-panel",container:!0,spacing:2,direction:"row",children:[Object(v.jsxs)(N.a,{item:!0,sm:12,md:7,children:[Object(v.jsx)(f.a,{className:"sub-header",variant:"h4",children:"DBM & Servers"}),P.map((function(e,t){return Object(v.jsx)(M,{src:e.link,title:e.altTxt,alt:e.altTxt},e.link)}))]}),Object(v.jsx)(N.a,{item:!0,sm:12,md:5,className:"image-panel",children:Object(v.jsx)("img",{className:"about-tech-image",src:this.dbm,alt:"Books"})})]}),Object(v.jsxs)(N.a,{className:"sub-panel",container:!0,spacing:2,direction:"row-reverse",children:[Object(v.jsxs)(N.a,{item:!0,sm:12,md:6,children:[Object(v.jsx)(f.a,{className:"sub-header",variant:"h4",children:"Design & Management"}),Object(v.jsx)("div",{className:"tech-panel",children:q.map((function(e,t){return Object(v.jsx)(M,{src:e.link,title:e.altTxt,alt:e.altTxt},e.link)}))})]}),Object(v.jsx)(N.a,{item:!0,sm:12,md:6,className:"image-panel",children:Object(v.jsx)("img",{className:"about-tech-image",src:this.design,alt:"Desk"})})]})]})}}]),a}(i.Component)),I=a(141),D=a(142),E=a(143),z=a(144),R=a(145),H=a(146),B=a(147),F=a(148),J=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(N.a,{className:"about-skills",container:!0,spacing:3,justify:"center",direction:"row",children:[Object(v.jsx)(f.a,{variant:"h4",className:"center",children:"My Skills & Qualifications"}),Object(v.jsxs)(N.a,{container:!0,justify:"space-around",style:{margin:"5vh 0"},children:[Object(v.jsxs)(N.a,{className:"skill-item",item:!0,xs:12,sm:6,md:3,children:[Object(v.jsx)(I.a,{className:"specialties"}),Object(v.jsx)(f.a,{variant:"h6",children:"Full-Stack Development"}),Object(v.jsx)(f.a,{className:"skill-description",children:"Design, code, and test"}),Object(v.jsx)(f.a,{className:"skill-description",children:"in front-end and/or back-end"})]}),Object(v.jsxs)(N.a,{className:"skill-item",item:!0,xs:12,sm:6,md:3,children:[Object(v.jsx)(D.a,{className:"specialties"}),Object(v.jsx)(f.a,{variant:"h6",children:"Scripting"}),Object(v.jsx)(f.a,{className:"skill-description",children:"Build scripts for workflow automation/streamlining"})]}),Object(v.jsxs)(N.a,{className:"skill-item",item:!0,xs:12,sm:6,md:3,children:[Object(v.jsx)(E.a,{className:"specialties"}),Object(v.jsx)(f.a,{variant:"h6",children:"On-Site IT Support"}),Object(v.jsx)(f.a,{className:"skill-description",children:"Provide issue resolution"}),Object(v.jsx)(f.a,{className:"skill-description",children:"in a client-centered approach"})]}),Object(v.jsxs)(N.a,{className:"skill-item",item:!0,xs:12,sm:6,md:3,children:[Object(v.jsx)(z.a,{className:"specialties"}),Object(v.jsx)(f.a,{variant:"h6",children:"Linux Server"}),Object(v.jsx)(f.a,{className:"skill-description",children:"Experienced in working with LAMP servers"})]})]}),Object(v.jsxs)(N.a,{style:{margin:"3vh 0"},container:!0,justify:"space-around",children:[Object(v.jsxs)(N.a,{className:"skill-item",item:!0,xs:12,sm:6,md:3,children:[Object(v.jsx)(R.a,{className:"soft-skills"}),Object(v.jsx)(f.a,{variant:"h6",children:"Attention to Detail"}),Object(v.jsx)(f.a,{className:"skill-description",children:"Analyze for solutions"}),Object(v.jsx)(f.a,{className:"skill-description",children:"and further improvement"})]}),Object(v.jsxs)(N.a,{className:"skill-item",item:!0,xs:12,sm:6,md:3,children:[Object(v.jsx)(H.a,{className:"soft-skills"}),Object(v.jsx)(f.a,{variant:"h6",children:"Tenacity"}),Object(v.jsx)(f.a,{className:"skill-description",children:"Carry things through within"}),Object(v.jsx)(f.a,{className:"skill-description",children:"a limited timeframe"})]}),Object(v.jsxs)(N.a,{className:"skill-item",item:!0,xs:12,sm:6,md:3,children:[Object(v.jsx)(B.a,{className:"soft-skills"}),Object(v.jsx)(f.a,{variant:"h6",children:"Collaboration"}),Object(v.jsx)(f.a,{className:"skill-description",children:"Enjoy team collaboration as well as working independently"})]}),Object(v.jsxs)(N.a,{className:"skill-item",item:!0,xs:12,sm:6,md:3,children:[Object(v.jsx)(F.a,{className:"soft-skills"}),Object(v.jsx)(f.a,{variant:"h6",children:"Adaptability"}),Object(v.jsx)(f.a,{className:"skill-description",children:"Grow skill sets to"}),Object(v.jsx)(f.a,{className:"skill-description",children:"adapt to changing needs"})]})]})]})}}]),a}(i.Component),W=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(v.jsx)("div",{id:"about",className:"page about",children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("div",{className:"header",children:"ABOUT"}),Object(v.jsx)("hr",{className:"divider pink center"}),Object(v.jsx)(w,{}),Object(v.jsx)(J,{}),Object(v.jsx)(L,{})]})})}}]),a}(i.Component),K=a(149),Q=a(46),G=a.n(Q),U=a(60),V=a.n(U),_=[{title:"ProHub",projectType:"team",description:"Web application that meets all communication needs of landlords, staff, and tenants.",details:"",imageLink:"./images/projects/prohub.png",projectLink:"https://codepros2020.github.io/ProHub/",githubLink:"https://github.com/CodePros2020/ProHub"},{title:"ProHub Mobile",projectType:"team",description:"Android app that meets all communication needs of landlords, staff, and tenants.",details:"",imageLink:"./images/projects/prohub-mobile.png",projectLink:"",githubLink:"https://github.com/CodePros2020/ProHub-Android"},{title:"Fury: the Destroyer",projectType:"team",description:"Web-based single screen PvP submarine game for 2 players.",details:"",imageLink:"./images/projects/fury.png",projectLink:"https://cosmos-games.github.io/Fury-The_Destroyer/",githubLink:"https://github.com/COSMOS-Games/Fury-The_Destroyer"},{title:"Staktekst",projectType:"personal",description:"Chrome extension for web search, text-clipping, and note-taking",details:"",imageLink:"./images/projects/staktekst.png",projectLink:"https://chrome.google.com/webstore/detail/staktekst/ecnhgpnligcapbfpaoklofmigomdjhkb/en",githubLink:"https://github.com/Kmzbch/staktekst.git"}],X=(a(97),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{id:"project",className:"page project",children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("div",{className:"header",children:"PROJECTS"}),Object(v.jsx)("hr",{className:"divider yellow center"}),_.map((function(e,t){return Object(v.jsx)(K.a,{className:"personal"===e.projectType?"panel personal":"panel",children:Object(v.jsxs)(N.a,{container:!0,spacing:2,justify:"center",children:[Object(v.jsxs)(N.a,{item:!0,className:"sub-panel left",xs:12,sm:12,md:6,children:[Object(v.jsx)(f.a,{className:"project-title",variant:"h3",children:e.title}),Object(v.jsx)("div",{variant:"h3",className:"personal"===e.projectType?"project-type personal":"project-type",children:e.projectType+" project"}),Object(v.jsx)(f.a,{className:"project-description",children:e.description}),""===e.details?Object(v.jsx)("div",{}):Object(v.jsx)(f.a,{className:"project-description",component:"span",children:e.details}),""===e.projectLink?Object(v.jsxs)(N.a,{container:!0,direction:"column",children:[Object(v.jsx)(O.a,{className:"view-button",size:"large",variant:"outlined",color:"secondary",startIcon:Object(v.jsx)(G.a,{}),href:e.githubLink,target:"_blank",children:"View Code"}),Object(v.jsx)(O.a,{style:{opacity:"0",pointerEvents:"none"},className:"view-button",size:"large",variant:"outlined",color:"secondary",startIcon:Object(v.jsx)(V.a,{}),href:e.projectLink,target:"_blank",children:"View App"})]}):Object(v.jsxs)(N.a,{container:!0,direction:"column",children:[Object(v.jsx)(O.a,{className:"view-button",size:"large",variant:"outlined",color:"secondary",startIcon:Object(v.jsx)(V.a,{}),href:e.projectLink,target:"_blank",children:"View App"}),Object(v.jsx)(O.a,{className:"view-button",size:"large",variant:"outlined",color:"secondary",startIcon:Object(v.jsx)(G.a,{}),href:e.githubLink,target:"_blank",children:"View Code"})]})]}),Object(v.jsx)(N.a,{item:!0,className:"sub-panel right",xs:12,sm:12,md:6,children:Object(v.jsx)("img",{className:"project-image",src:e.imageLink,alt:"screenshots of "+e.title})})]})},e.title)}))]})})}}]),a}(i.Component)),Y=a(150),Z=[{dateRange:"SEP. 2020 - DEC. 2020",title:"Back-end Developer",company:"Centennial College: WIMTACH",duties:["Implemented REST APIs of Java EMR application back-end with Spring Boot working with complex models and MSSQL queries","Replaced Hibernate/JPQL queries with SQL Server queries to increase routers' performance","Built and maintained an automated test suite with JUnit and REST Assured","Resolved technical issues arising during development in an Agile manner","Maintained the internal test tracking list and Confluence & Swagger API documentation"],techStacks:[{link:"./images/techStacks/java.svg",altTxt:"Java"},{link:"./images/techStacks/spring.svg",altTxt:"Spring"},{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/junit5.png",altTxt:"Junit5"},{link:"./images/techStacks/rest-assured.png",altTxt:"REST-assured"},{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"},{link:"./images/techStacks/swagger.png",altTxt:"Swagger"},{link:"./images/techStacks/jira.svg",altTxt:"Jira"},{link:"./images/techStacks/confluence.png",altTxt:"Confluence"},{link:"./images/techStacks/trello.svg",altTxt:"Trello"}]},{dateRange:"SEP. 2019 - DEC. 2019",title:"Co-op Application Developer",company:"CIBC: Personal Banking Products Technology",duties:["Optimized and conducted API testing for Spring MVC banking middleware with SOAP UI","Created and modified Shell Scripts for archiving access log and assisting with the API testing","Conducted audit on VCS of the team to provide recommendation on migration options in collaboration with a senior developer","Assisted senior developers in creating technical documents and examination of server information"],techStacks:[{link:"./images/techStacks/java.svg",altTxt:"Java"},{link:"./images/techStacks/spring.svg",altTxt:"Spring"},{link:"./images/techStacks/struts.svg",altTxt:"Struts"},{link:"./images/techStacks/soapui.png",altTxt:"SOAP UI"},{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"}]},{dateRange:"JAN. 2019 - APR. 2019",title:"Co-op Application Developer",company:"CIBC: Treasury & Risk Management Technology",duties:["Acted in a wealth management web application development","Implemented both the front-end and back-end of the application with ASP.NET Core, Angular 5, Kendo UI, and Entity Framework 4.5","Examined technical specifications and architecture of a legacy Java EE application for its migration","Collaborated with the developer team and BA/QA with Team Foundation Server and Git","Conducted research and made presentation on biometric ID verification systems with a team of four"],techStacks:[{link:"./images/techStacks/angular.svg",altTxt:"Angular"},{link:"./images/techStacks/c-sharp.svg",altTxt:"C#"},{link:"./images/techStacks/aspnetcore.png",altTxt:"ASP.NET"},{link:"./images/techStacks/mssql.png",altTxt:"SQL Server"},{link:"./images/techStacks/kendo-ui.png",altTxt:"Kendo UI"},{link:"./images/techStacks/j2ee.svg",altTxt:"J2EE"},{link:"./images/techStacks/azure.svg",altTxt:"Microsoft Azure"},{link:"./images/techStacks/git.svg",altTxt:"Git"},{link:"./images/techStacks/github.svg",altTxt:"GitHub"}]},{dateRange:"APR. 2008 - MAR. 2016",title:"On-Site IT Support Programmer",company:"Wizard Inc.",duties:["Performed proactive maintenance, troubleshooting, backup and update of LAMP servers of a university library management system","Built, maintained, and refactored ETL pipelines using Perl 5 & Shell scripts to process Marc 21 bibliographic records into a variety of data formats","Implemented two-language (EN/JP) support for library digital archive search and an external website while handling character encoding issues","Analysed and refactored existing interanal scripts/modules or escalates problems to other IT staff","Automated/Streamlined library staff\u2019s business procedures by introducing digital tools and/or scripting such as visualization of circulation statistics into web pages","Conducted installation and configuration of open-source Java CMS for scholarly digital content","Reported web access information and project status to the library staff on a monthly basis","Implemented, modified, optimized, and tested institutional websites in PHP and MySQL","Performed other related duties as required"],techStacks:[{link:"./images/techStacks/linux.svg",altTxt:"Linux"},{link:"./images/techStacks/red-hat.svg",altTxt:"Red Hat"},{link:"./images/techStacks/apache.png",altTxt:"Apache"},{link:"./images/techStacks/mysql.svg",altTxt:"MySQL"},{link:"./images/techStacks/php.svg",altTxt:"PHP"},{link:"./images/techStacks/perl.svg",altTxt:"Perl"},{link:"./images/techStacks/java.svg",altTxt:"Java"},{link:"./images/techStacks/postgresql.svg",altTxt:"PostgreSQL"},{link:"./images/techStacks/marc21.png",altTxt:"MARC 21"},{link:"./images/techStacks/dspace.png",altTxt:"DSPACE"}]}],$=(a(99),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(v.jsx)("div",{id:"timeline",className:"page timeline",children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("div",{className:"header",children:"TIMELINE"}),Object(v.jsx)("hr",{className:"divider pink center"}),Object(v.jsx)("ul",{className:"panel",children:Z.map((function(e,t){return Object(v.jsxs)("li",{className:"timeline-event",children:[Object(v.jsx)("div",{className:"timeline-event-icon"}),Object(v.jsxs)("div",{className:"timeline-event-item",children:[Object(v.jsx)("div",{className:"timeline-date-range",children:e.dateRange}),Object(v.jsx)(f.a,{className:"timeline-title",variant:"h3",children:e.title}),Object(v.jsx)(f.a,{className:"timeline-company",variant:"h4",children:e.company}),Object(v.jsx)(u.a,{className:"timeline-duties",children:e.duties.map((function(e,t){return Object(v.jsxs)(g.a,{children:[Object(v.jsx)(Y.a,{className:"duty-icon",children:"\u25aa"}),Object(v.jsx)(h.a,{className:"duty-item",children:e})]},t)}))}),Object(v.jsx)("div",{className:"timeline-tech-stack",children:e.techStacks.map((function(e,t){return Object(v.jsx)(M,{src:e.link,title:e.altTxt,alt:e.altTxt},t)}))})]})]},t)}))})]})})}}]),a}(i.Component)),ee=a(61),te=a(151),ae=a(154),ie=a(69),ne=a.n(ie),se=a(71),ce=a.n(se),re=a(70),oe=a.n(re),le=[{link:"mailto:cdfray@gmail.com",icon:Object(v.jsx)(ne.a,{className:"contact-icon"})},{link:"https://www.linkedin.com/in/kmzbch/",icon:Object(v.jsx)(oe.a,{className:"contact-icon"})},{link:"https://github.com/Kmzbch",icon:Object(v.jsx)(G.a,{className:"contact-icon"})},{link:"Toronto, Ontario",icon:Object(v.jsx)(ce.a,{className:"contact-icon"})}],me=(a(100),a(152)),de=a(153),ue=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).emailServiceApi="https://formspree.io/f/mnqokoqj",i.resetFormMessage=function(e){var t=document.querySelector(".form-message"),a=document.querySelector(".form-button"),i=document.querySelector(".form-message-error");c.a.findDOMNode(a).classList.remove("hidden"),t.classList.contains("hidden")||c.a.findDOMNode(t).classList.add("hidden"),i.classList.contains("hidden")||c.a.findDOMNode(i).classList.add("hidden")},i.submitForm=function(e){e.preventDefault();var t=e.target,a=new FormData(t),i=new XMLHttpRequest;i.open(t.method,t.action),i.setRequestHeader("Accept","application/json"),i.onreadystatechange=function(){var e=document.querySelector(".form-message"),a=document.querySelector(".form-button"),n=document.querySelector(".form-message-error");i.readyState===XMLHttpRequest.DONE&&(200===i.status?(t.reset(),c.a.findDOMNode(e).classList.remove("hidden"),c.a.findDOMNode(a).classList.add("hidden"),c.a.findDOMNode(n).classList.add("hidden")):c.a.findDOMNode(n).classList.remove("hidden"))},i.send(a)},i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(v.jsx)("div",{id:"contact",className:"page contact",children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("div",{className:"header white",children:"CONTACT"}),Object(v.jsx)("hr",{className:"divider pink center"}),Object(v.jsx)(f.a,{className:"caption white",variant:"h5",children:"Have a question or want to work together?"}),Object(v.jsxs)(N.a,{className:"panel",container:!0,spacing:2,children:[Object(v.jsx)(N.a,{item:!0,sm:12,md:6,children:Object(v.jsx)("div",{className:"contact-items",children:Object(v.jsx)(u.a,{children:le.map((function(e,t){return Object(v.jsxs)(g.a,{children:[Object(v.jsx)(Y.a,{children:e.icon}),Object(v.jsx)(h.a,{primary:Object(v.jsx)(te.a,Object(ee.a)(Object(ee.a)({className:e.link.match(/^https?:\/\/(www\.)?|mailto:/i)?"contact-links":"contact-links disabled",href:e.link},e.link.match(/^https?:\/\//i)?{target:"_blank"}:{}),{},{variant:"h6",children:e.link.replace(/^https?:\/\/(www\.)?|mailto:/i,"")}))})]},e.link)}))})})}),Object(v.jsx)(N.a,{item:!0,sm:12,md:6,children:Object(v.jsx)("div",{className:"contact-form",children:Object(v.jsxs)("form",{onSubmit:this.submitForm,action:this.emailServiceApi,method:"POST",children:[Object(v.jsx)(ae.a,{className:"form-input",id:"email",type:"email",name:"email",label:"Email",variant:"filled",size:"small",onFocus:this.resetFormMessage,required:!0}),Object(v.jsx)(ae.a,{className:"form-input",id:"name",type:"text",name:"name",label:"Name",variant:"filled",size:"small",onFocus:this.resetFormMessage,required:!0}),Object(v.jsx)(ae.a,{className:"form-input",id:"message",name:"message",label:"Message",variant:"filled",multiline:!0,rows:8,onFocus:this.resetFormMessage,required:!0}),Object(v.jsx)(O.a,{className:"form-button",type:"submit",size:"large",variant:"outlined",children:"Send"}),Object(v.jsxs)("div",{className:"form-message hidden",children:[Object(v.jsx)(me.a,{className:"form-message-icon"}),"Thank you! Your message has been successfully sent."]}),Object(v.jsxs)("div",{className:"form-message-error hidden",children:[Object(v.jsx)(de.a,{className:"form-message-icon"}),"There was an error trying to send your message."]})]})})})]})]})})}}]),a}(i.Component),ge=a(72),he=function(e){return Object(ge.a)(e),Object(v.jsx)("div",{id:"footer",className:"footer",style:{position:"relative",width:"100%",height:"6vh",backgroundColor:"#3f4e67",color:"rgba(255,255,255, 0.4)",margin:"0 auto",textAlign:"center"},children:"\xa92021 Kei Mizubuchi"})},je=a(12),pe=a(3),be=a(73),ke=function(){function e(){Object(r.a)(this,e),je.a.registerPlugin(be.a)}return Object(o.a)(e,[{key:"initializeAnimation",value:function(e){var t=.75;if("default"===e)this.setHomeAnimation(),t=7.5;else{var a=document.querySelector("html");je.a.to(a,{opacity:1})}this.setNavbarAnimation(t),this.setAboutAnimation(),this.setProjectAnimation(),this.setTimelineAnimation(),this.setContactAnimation()}},{key:"setNavbarAnimation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.75,t=document.querySelector(".nav-container"),a=new pe.c,i=document.querySelector("html");a.from(t,{delay:e,duration:.75,top:-100,ease:"ease.out",opacity:0}).to(i,{delay:1,overflowY:"auto"})}},{key:"setHomeAnimation",value:function(){var e=document.querySelector("#home"),t=document.querySelectorAll(".greeting"),a=document.querySelector(".home .view-button"),i=new pe.c,n=document.querySelector("html");je.a.to(n,{opacity:1,overflowY:"hidden"}),i.from([e],{delay:.75,duration:1,opacity:0}).from([e],.5,{backgroundColor:"rgba(0,0,0,0)",duration:3}).from(t[0],1,{duration:.5,opacity:0}).from([t[1],t[2]],1.5,{duration:.5,opacity:0,stagger:{amount:.3}}).from(t[3],1.4,{duration:.5,opacity:0}).from([a],1.5,{duration:1,y:75,ease:"back.out",opacity:0})}},{key:"setAboutAnimation",value:function(){var e=document.querySelector(".about .header"),t=document.querySelector(".about .divider");je.a.from([e,t],{delay:.5,duration:.8,ease:"ease.out",x:-100,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[e],start:"top 75%"}});var a=document.querySelector(".description"),i=document.querySelector(".profile-header"),n=document.querySelector(".profile");je.a.from([i,a],{delay:.5,duration:.8,ease:"ease.out",x:-100,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[a,i],start:"top 75%"}}),je.a.from([n],{delay:.5,duration:.8,ease:"ease.out",y:50,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[n],start:"top 75%"}});var s=document.querySelector(".about-skills");je.a.from([s],{delay:.5,duration:.8,ease:"back.out",transformOrigin:"center",scaleX:.8,scaleY:.8,opacity:0,scrollTrigger:{trigger:[s],start:"top 75%"}});var c=document.querySelectorAll(".about-tech .caption"),r=document.querySelectorAll(".about-tech .sub-panel");je.a.from([c],{delay:.5,duration:.8,ease:"ease.out",y:50,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[c],start:"top 75%"}});for(var o=0,l=0;l<r.length;l++){o=l%2===0?50:-50,je.a.from([r[l]],{delay:.5,duration:.8,ease:"ease.out",x:o,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[r[l]],start:"top 75%"}});var m=r[l].querySelectorAll(".tech-stack-image");je.a.from(m,{delay:1.5,duration:.6,ease:"ease.out",y:50,opacity:0,stagger:{amount:.5},scrollTrigger:{trigger:m,start:"top 75%"}})}}},{key:"setProjectAnimation",value:function(){var e=document.querySelector(".project .header"),t=document.querySelector(".project .divider"),a=document.querySelectorAll(".project .panel");je.a.from([e,t],{delay:.5,duration:.8,ease:"ease.out",x:100,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:".project .header",start:"top 75%"}});for(var i=0;i<a.length;i++)je.a.from([a[i]],{delay:.5,duration:.8,ease:"back.out",y:50,scaleX:.9,scaleY:.9,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[a[i]],start:"top 85%"}})}},{key:"setTimelineAnimation",value:function(){var e=document.querySelector(".timeline .header"),t=document.querySelector(".timeline .divider"),a=document.querySelectorAll(".timeline .panel"),i=document.querySelectorAll(".timeline .timeline-event");je.a.from([e,t],{delay:.5,duration:.8,ease:"ease.out",x:-100,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:".timeline .header",start:"top 75%"}}),je.a.from([a],{delay:.5,duration:.8,ease:"ease.out",opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[a],start:"top 75%"}});for(var n=0;n<i.length;n++){je.a.from([i[n]],{delay:.5,duration:.8,ease:"ease.out",y:50,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[i[n]],start:"top 75%"}});var s=i[n].querySelectorAll(".tech-stack-image");je.a.from(s,{delay:1.5,duration:.6,ease:"ease.out",y:50,opacity:0,stagger:{amount:.3},scrollTrigger:{trigger:s,start:"top 100%"}})}}},{key:"setContactAnimation",value:function(){var e=document.querySelector(".contact .header"),t=document.querySelector(".contact .divider"),a=document.querySelector(".contact .caption");je.a.from([e,t,a],{delay:.5,duration:.8,ease:"ease.out",x:-100,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[e],start:"top center"}});var i=document.querySelector(".contact .contact-items"),n=document.querySelectorAll(".contact .contact-links"),s=document.querySelector(".contact-form");je.a.from(i,{delay:.5,duration:.8,ease:"ease.out",x:-50,opacity:0,stagger:{amount:.5},scrollTrigger:{trigger:i,start:"top 100%"}}),je.a.from(n,{delay:.5,duration:.8,ease:"ease.out",opacity:0,stagger:{amount:.5},scrollTrigger:{trigger:n,start:"top 100%"}}),je.a.from([s],{delay:.5,duration:.8,ease:"ease.out",y:50,opacity:0,stagger:{amount:.15},scrollTrigger:{trigger:[s],start:"top 100%"}})}}]),e}(),ve=(a(101),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={currentScreen:"default"},e.monitorCurrentScreen=function(){var t=50,a=document.querySelector("#home"),i=document.querySelector("#about"),n=document.querySelector("#project"),s=document.querySelector("#timeline"),r=document.querySelector("#contact"),o=document.querySelector("#footer"),l=c.a.findDOMNode(a).getBoundingClientRect(),m=c.a.findDOMNode(i).getBoundingClientRect(),d=c.a.findDOMNode(n).getBoundingClientRect(),u=c.a.findDOMNode(s).getBoundingClientRect(),g=c.a.findDOMNode(r).getBoundingClientRect();c.a.findDOMNode(o).getBoundingClientRect();g.y-t<=0?"contact"!==e.state.currentScreen&&(e.setState({currentScreen:"contact"}),document.title="Contact - Kei's Portfolio"):u.y-t<0&&g.y-t>=0?"timeline"!==e.state.currentScreen&&(e.setState({currentScreen:"timeline"}),document.title="Timeline - Kei's Portfolio"):d.y-t<0&&u.y-t>=0?"projects"!==e.state.currentScreen&&(e.setState({currentScreen:"projects"}),document.title="Projects - Kei's Portfolio"):m.y-t<0&&d.y-t>=0?"about"!==e.state.currentScreen&&(e.setState({currentScreen:"about"}),document.title="About - Kei's Portfolio"):l.y<0&&m.y-t>=0?"home"!==e.state.currentScreen&&(e.setState({currentScreen:"home"}),document.title="Home - Kei's Portfolio"):e.setState({currentScreen:"default"})},e}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.monitorCurrentScreen)}},{key:"componentDidMount",value:function(){var e=this;console.log("Welcome to Kei's portfolio!"),console.log("This portfolio is built with React."),document.title="Kei's Portfolio",setTimeout((function(){e.monitorCurrentScreen(),setInterval(e.monitorCurrentScreen,750),(new ke).initializeAnimation(e.state.currentScreen)}),300)}},{key:"render",value:function(){return Object(v.jsxs)(d.a,{basename:"/Portfolio",children:[Object(v.jsx)(x,{currentScreen:this.state.currentScreen}),Object(v.jsx)(S,{}),Object(v.jsx)(W,{}),Object(v.jsx)(X,{}),Object(v.jsx)($,{}),Object(v.jsx)(ue,{}),Object(v.jsx)(he,{})]})}}]),a}(i.Component)),xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,156)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};c.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(ve,{})}),document.getElementById("root")),xe()},64:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.1b5c4c4a.chunk.js.map