(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),i=(a(0),a(88)),b={id:"saveimage",title:"Class: SaveImage",sidebar_label:"SaveImage"},c={unversionedId:"api/classes/saveimage",id:"api/classes/saveimage",isDocsHomePage:!1,title:"Class: SaveImage",description:"Hierarchy",source:"@site/../docs/api/classes/saveimage.md",slug:"/api/classes/saveimage",permalink:"/megatar/api/classes/saveimage",editUrl:"https://github.com/felipecrs/megatar/edit/master/website/../docs/api/classes/saveimage.md",version:"current",sidebar_label:"SaveImage",sidebar:"sidebar",previous:{title:"Class: Image",permalink:"/megatar/api/classes/image"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"args",id:"args",children:[]},{value:"description",id:"description",children:[]},{value:"examples",id:"examples",children:[]}]},{value:"Methods",id:"methods",children:[{value:"run",id:"run",children:[]}]},{value:"Object literals",id:"object-literals",children:[{value:"flags",id:"flags",children:[]}]}],l={toc:s};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Command"),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("strong",{parentName:"p"},"SaveImage")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"args"},"args"),Object(i.b)("p",null,"\u25aa ",Object(i.b)("inlineCode",{parentName:"p"},"Static")," ",Object(i.b)("strong",{parentName:"p"},"args"),': { description: string = "the docker image to save"; name: string = "image"; required: boolean = true }[] = ','[ { name: "image", required: true, description: "the docker image to save" }, ]'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Overrides void")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",{parentName:"em",href:"https://github.com/felipecrs/megatar/blob/313c3c6/src/commands/save-image.ts#L31"},"src/commands/save-image.ts:31"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"description"},"description"),Object(i.b)("p",null,"\u25aa ",Object(i.b)("inlineCode",{parentName:"p"},"Static")," ",Object(i.b)("strong",{parentName:"p"},"description"),': string = "save a docker image to a tgz file"'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Overrides void")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",{parentName:"em",href:"https://github.com/felipecrs/megatar/blob/313c3c6/src/commands/save-image.ts#L10"},"src/commands/save-image.ts:10"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"examples"},"examples"),Object(i.b)("p",null,"\u25aa ",Object(i.b)("inlineCode",{parentName:"p"},"Static")," ",Object(i.b)("strong",{parentName:"p"},"examples"),": string[] = ",'[ "$ megatar save-image hello-world", "$ megatar save-image hello-world --new-tag test", ]'),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Overrides void")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",{parentName:"em",href:"https://github.com/felipecrs/megatar/blob/313c3c6/src/commands/save-image.ts#L12"},"src/commands/save-image.ts:12"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"run"},"run"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"run"),"(): Promise<void",">"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Overrides void")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",{parentName:"em",href:"https://github.com/felipecrs/megatar/blob/313c3c6/src/commands/save-image.ts#L35"},"src/commands/save-image.ts:35"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise<void",">"),Object(i.b)("h2",{id:"object-literals"},"Object literals"),Object(i.b)("h3",{id:"flags"},"flags"),Object(i.b)("p",null,"\u25aa ",Object(i.b)("inlineCode",{parentName:"p"},"Static")," ",Object(i.b)("strong",{parentName:"p"},"flags"),": object"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Overrides void")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",{parentName:"em",href:"https://github.com/felipecrs/megatar/blob/313c3c6/src/commands/save-image.ts#L17"},"src/commands/save-image.ts:17"))),Object(i.b)("h4",{id:"properties-1"},"Properties:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"discard-repository")),Object(i.b)("td",{parentName:"tr",align:null},"IBooleanFlag<boolean",">"),Object(i.b)("td",{parentName:"tr",align:null},'flags.boolean({       allowNo: true,       description:         "whether to discard the repository and registry fields or not",       default: true,     })')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"help")),Object(i.b)("td",{parentName:"tr",align:null},"IBooleanFlag<void",">"),Object(i.b)("td",{parentName:"tr",align:null},'flags.help({ char: "h" })')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"new-tag")),Object(i.b)("td",{parentName:"tr",align:null},"IOptionFlag<string",">"),Object(i.b)("td",{parentName:"tr",align:null},'flags.string({       char: "t",       description: "the new tag to write in the image",     })')))))}m.isMDXComponent=!0}}]);