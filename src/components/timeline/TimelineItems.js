const TimelineItems = [
	{
		dateRange: 'SEP. 2020 - DEC. 2020',
		title: 'Back-end Developer',
		company: 'Centennial College: WIMTACH',
		duties: [
			'Implemented REST APIs of Java EMR application back-end with Spring Boot working with complex models and MSSQL queries',
			"Replaced Hibernate/JPQL queries with SQL Server queries to increase routers' performance",
			'Built and maintained an automated test suite with JUnit and REST Assured',
			'Resolved technical issues arising during development in an Agile manner',
			'Maintained the internal test tracking list and Confluence & Swagger API documentation'
		],
		techStacks: [
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/java-4
				link: './images/techStacks/java.svg',
				altTxt: 'Java'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/spring-3
				link: './images/techStacks/spring.svg',
				altTxt: 'Spring'
			},
			{
				// Icon retrieved from https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png
				link: './images/techStacks/mssql.png',
				altTxt: 'SQL Server'
			},
			{
				// Icon retrieved from https://junit.org/junit5/assets/img/junit5-logo.png
				link: './images/techStacks/junit5.png',
				altTxt: 'Junit5'
			},
			{
				// Icon retrieved from https://avatars.githubusercontent.com/u/19369327?s=400&v=4
				link: './images/techStacks/rest-assured.png',
				altTxt: 'REST-assured'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/git-icon
				link: './images/techStacks/git.svg',
				altTxt: 'Git'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/github-icon
				link: './images/techStacks/github.svg',
				altTxt: 'GitHub'
			},
			{
				// By Fehguy - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=61631304
				link: './images/techStacks/swagger.png',
				altTxt: 'Swagger'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/jira-1
				link: './images/techStacks/jira.svg',
				altTxt: 'Jira'
			},
			{
				// Icon retrieved from https://www.atlassian.com/software/confluence
				link: './images/techStacks/confluence.png',
				altTxt: 'Confluence'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/trello
				link: './images/techStacks/trello.svg',
				altTxt: 'Trello'
			}
		]
	},

	{
		dateRange: 'SEP. 2019 - DEC. 2019',
		title: 'Co-op Application Developer',
		company: 'CIBC: Personal Banking Products Technology',
		duties: [
			'Optimized and conducted API testing for Spring MVC banking middleware with SOAP UI',
			'Created and modified Shell Scripts for archiving access log and assisting with the API testing',
			'Conducted audit on VCS of the team to provide recommendation on migration options in collaboration with a senior developer',
			'Assisted senior developers in creating technical documents and examination of server information'
		],
		techStacks: [
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/java-4
				link: './images/techStacks/java.svg',
				altTxt: 'Java'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/spring-3
				link: './images/techStacks/spring.svg',
				altTxt: 'Spring'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/struts
				link: './images/techStacks/struts.svg',
				altTxt: 'Struts'
			},
			{
				// Icon retrieved from https://www.soapui.org/open-source/features/
				link: './images/techStacks/soapui.png',
				altTxt: 'SOAP UI'
			},
			{
				// Icon retrieved from https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png
				link: './images/techStacks/mssql.png',
				altTxt: 'SQL Server'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/git-icon
				link: './images/techStacks/git.svg',
				altTxt: 'Git'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/github-icon
				link: './images/techStacks/github.svg',
				altTxt: 'GitHub'
			}
		]
	},
	// {
	// 	dateRange: 'MAY. 2019 - SEP. 2019',
	// 	title: 'Volunteer Bugfix Developer',
	// 	company: 'Centennial College',
	// 	duties: [
	// 		'Acted in a chat room application project that allows students to vote and offer feedback about related topics posted in the room.',
	// 		'Analyzed the original source code, thoroughly tested the functionalities and reported and/or fixed the bug',
	// 		'Implemented additional functionalities with ASP.NET Core, Angular 7 and SQL Server stack and dealt with missing requirements in the original application',
	// 		'Led the latter part of the project to completion by taking initiative and updating the team'
	// 	],
	// 	techStacks: [
	// 		{
	// 			// Icon retrieved from https://worldvectorlogo.com/logo/angular-icon-1
	// 			link: './images/techStacks/angular.svg',
	// 			altTxt: 'Angular'
	// 		},
	// 		{
	// 			// Icon retrieved from https://worldvectorlogo.com/logo/c--4
	// 			link: './images/techStacks/c-sharp.svg',
	// 			altTxt: 'C#'
	// 		},
	// 		{
	// 			// Icon retrieved from https://www.pngegg.com/en/png-dbugy
	// 			link: './images/techStacks/aspnetcore.png',
	// 			altTxt: 'ASP.NET'
	// 		},
	// 		{
	// 			// Icon retrieved from https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png
	// 			link: './images/techStacks/mssql.png',
	// 			altTxt: 'SQL Server'
	// 		}
	// 	]
	// },

	{
		dateRange: 'JAN. 2019 - APR. 2019',
		title: 'Co-op Application Developer',
		company: 'CIBC: Treasury & Risk Management Technology',
		duties: [
			'Acted in a wealth management web application development',
			'Implemented both the front-end and back-end of the application with ASP.NET Core, Angular 5, Kendo UI, and Entity Framework 4.5',
			'Examined technical specifications and architecture of a legacy Java EE application for its migration',
			'Collaborated with the developer team and BA/QA with Team Foundation Server and Git',
			'Conducted research and made presentation on biometric ID verification systems with a team of four'
		],
		techStacks: [
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/angular-icon-1
				link: './images/techStacks/angular.svg',
				altTxt: 'Angular'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/c--4
				link: './images/techStacks/c-sharp.svg',
				altTxt: 'C#'
			},
			{
				// Icon retrieved from https://www.pngegg.com/en/png-dbugy
				link: './images/techStacks/aspnetcore.png',
				altTxt: 'ASP.NET'
			},
			{
				// Icon retrieved from https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png
				link: './images/techStacks/mssql.png',
				altTxt: 'SQL Server'
			},
			{
				// Icon retrieved from https://aurelia-ui-toolkits.github.io/demo-kendo/images/kendo-ui-logo.png
				link: './images/techStacks/kendo-ui.png',
				altTxt: 'Kendo UI'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/jee-2
				link: './images/techStacks/j2ee.svg',
				altTxt: 'J2EE'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/azure-1
				link: './images/techStacks/azure.svg',
				altTxt: 'Microsoft Azure'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/git-icon
				link: './images/techStacks/git.svg',
				altTxt: 'Git'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/github-icon
				link: './images/techStacks/github.svg',
				altTxt: 'GitHub'
			}
		]
	},
	{
		dateRange: 'APR. 2008 - MAR. 2016',
		title: 'On-Site IT Support Programmer',
		company: 'Wizard Inc.',
		duties: [
			'Performed proactive maintenance, troubleshooting, backup and update of LAMP servers of a university library management system',
			'Built, maintained, and refactored ETL pipelines using Perl 5 & Shell scripts to process Marc 21 bibliographic records into a variety of data formats',
			'Implemented two-language (EN/JP) support for library digital archive search and an external website while handling character encoding issues',
			'Analysed and refactored existing interanal scripts/modules or escalates problems to other IT staff',
			'Automated/Streamlined library staff’s business procedures by introducing digital tools and/or scripting such as visualization of circulation statistics into web pages',
			'Conducted installation and configuration of open-source Java CMS for scholarly digital content',
			'Reported web access information and project status to the library staff on a monthly basis',
			'Implemented, modified, optimized, and tested institutional websites in PHP and MySQL',
			'Performed other related duties as required'
		],
		techStacks: [
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/linux-tux
				link: './images/techStacks/linux.svg',
				altTxt: 'Linux'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/red-hat-1
				link: './images/techStacks/red-hat.svg',
				altTxt: 'Red Hat'
			},
			{
				// The Apache Software Foundation, Apache License 2.0 <http://www.apache.org/licenses/LICENSE-2.0>, via Wikimedia Commons
				link: './images/techStacks/apache.png',
				altTxt: 'Apache'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/mysql-6
				link: './images/techStacks/mysql.svg',
				altTxt: 'MySQL'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/php
				link: './images/techStacks/php.svg',
				altTxt: 'PHP'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/perl-programming-language
				link: './images/techStacks/perl.svg',
				altTxt: 'Perl'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/java-4
				link: './images/techStacks/java.svg',
				altTxt: 'Java'
			},
			{
				// Icon retrieved from https://worldvectorlogo.com/logo/postgresql
				link: './images/techStacks/postgresql.svg',
				altTxt: 'PostgreSQL'
			},
			{
				// Icon retrieved from https://www.loc.gov/marc/bibliographic/
				link: './images/techStacks/marc21.png',
				altTxt: 'MARC 21'
			},
			{
				// Icon retrieved from https://duraspace.org/dspace/
				link: './images/techStacks/dspace.png',
				altTxt: 'DSPACE'
			}
		]
	}
];

export default TimelineItems;
