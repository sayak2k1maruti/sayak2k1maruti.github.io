"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{5411:function(e,t,a){a.d(t,{Z:function(){return Z}});var s=a(5893),r=a(7294),n=a(7788),o=a.n(n),i=["Work","Skill","Contact"],l=["Full Stack Web Development","Neural Networks","Artificial Intelligence","Machine Learning","Digital Electronics","VLSI Design"],c=[{name:"React.JS",progress:90},{name:"Express.JS",progress:80},{name:"HTML5 & CSS3",progress:95},{name:"NEXT.JS",progress:80},{name:"mySQL",progress:50},{name:"mongoDB",progress:50},{name:"C++",progress:80},{name:"Python",progress:80},{name:"JavaScript",progress:85},{name:"Kotlin",progress:20}],d=[{key:"Name",value:"Sayak Das"},{key:"Age",value:"21"},{key:"Current Address",value:"NIT Durgapur , Durgapur"},{key:"PIN Code",value:"713 209"},{key:"Email",value:"sayakdas2k1@gmail.com"},{key:"Work Email",value:"sd.19u10153@btech.nitdgp.ac.in"},{key:"Occupation",value:"Student"},{key:"University \n",value:"NIT Durgapur"},{key:"Degree",value:"B.Tech 2023"},{key:"Major",value:"Electronics & Communication Engineering"}],m=a(7814);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={name:void 0,email:void 0,message:void 0,error:{name:"",email:"",message:""}},h=function(){var e=(0,r.useState)(u),t=e[0],a=e[1],n=(0,r.useState)(!1),o=n[0],i=n[1],l=function(){return!(""===t.error.name&&""===t.error.email&&""===t.error.message)},c=function(e){var s=e.target.value,r=e.target.name,n=t.error;switch(r){case"name":n.name=s.length<6?"Please enter atleast 5 char long name":"";break;case"email":n.email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s)?"":"Invalid email id";break;case"message":n.message=s.length<10?"Please write atleast 10 characters":""}a(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){p(e,t,a[t])}))}return e}({},t,p({error:n},r,s)))};(0,r.useEffect)((function(){t.name&&t.email&&t.message?i(!l()):i(!1)}),[t]);return(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.name&&t.email&&t.message&&(l()||console.log(t))},className:" text-slate-500 w-[90%] bg-white flex flex-col p-[2.5vw] rounded-[.75vw] drop-shadow-lg",children:[(0,s.jsx)("p",{className:"font-bold text-[1vw]",children:"NAME"}),(0,s.jsx)("input",{onChange:c,className:"text-[1.5vw] appearance-none border-2 border-gray-200 rounded w-full py-[.5vw] px-[1vw] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",name:"name",value:t.name,placeholder:"Enter your full name"}),(0,s.jsx)("p",{className:"text-rose-600 py-[.5vw] mb-[.75vw] text-[1vw] font-bold",children:t.error.name}),(0,s.jsx)("p",{className:"opacity-80 font-bold text-[1vw]",children:"EMAIL"}),(0,s.jsx)("input",{onChange:c,name:"email",value:t.email,className:"text-[1.5vw] appearance-none border-2 border-gray-200 rounded w-full py-[.5vw] px-[1vw] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",placeholder:"Enter your email address"}),(0,s.jsx)("p",{className:"text-rose-600 py-[.5vw] mb-[.75vw] text-[1vw] font-bold",children:t.error.email}),(0,s.jsx)("p",{className:"opacity-80 font-bold text-[1vw]",children:"MESSAGE"}),(0,s.jsx)("textarea",{onChange:c,name:"message",value:t.message,className:"text-[1.5vw] appearance-none border-2 border-gray-200 rounded w-full py-[.5vw] px-[1vw] text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",placeholder:"Type your message"}),(0,s.jsx)("p",{className:"text-rose-600 py-[.5vw] mb-[.75vw] text-[1vw] font-bold",children:t.error.message}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{disabled:!o,className:"p-[1.25vw] bg-blue-500 disabled:bg-blue-300 text-[1.5vw] disabled:cursor-not-allowed hover:bg-blue-700 transition-colors duration-500 text-white rounded-full",type:"submit",children:"SUBMIT"})]})},x=a(1417),v=[{element:(0,s.jsx)(m.G,{icon:x.pUg,size:"2x"}),href:"https://github.com/sayak2k1maruti"},{element:(0,s.jsx)(m.G,{icon:x.hwn,size:"2x"}),href:"https://www.linkedin.com/in/sayak-das-2479901a3/"},{element:(0,s.jsx)(m.G,{icon:x.Xg5,size:"2x"}),href:"https://www.instagram.com/"}],w=function(){return(0,s.jsx)("div",{className:"flex flex-row my-2 w-full items-center justify-center",children:v.map((function(e,t){return(0,s.jsx)("a",{rel:"noreferrer",className:"w-10 h-10 hover:-translate-y-2 text-neutral-400 px-2 transition-all duration-500 hover:text-neutral-100",href:e.href,children:e.element},t)}))})},f=function(){return(0,s.jsxs)("div",{className:"text-[1.25vw] font-bold flex flex-col justify-center align-middle items-center text-neutral-200 bg-neutral-700 w-full h-min-[10vw] py-5",children:[(0,s.jsxs)("p",{children:["\xa9 2022 by Sayak Das",(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"mailto:sayakdas2k1@gmail.com",children:"sayakdas2k1@gmail.com"})]}),(0,s.jsx)(w,{})]})},g=function(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-[inherit] w-[inherit] cursor-pointer",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",clipRule:"evenodd"})})},b=function(){var e=(0,r.useRef)();return(0,s.jsxs)("div",{ref:e,className:"w-full flex flex-col align-center justify-center items-center h-screen",children:[(0,s.jsxs)("div",{className:"flex-flex-col leading-none text-light-100 mt-[-15%] align-center justify-center",children:[(0,s.jsx)("p",{className:"text-white text-[5vw] font-bold font-mono",children:"Hi, I am Sayak"}),(0,s.jsxs)("p",{className:"text-white font-serif font-normal w-[10em] overflow-x-show text-left py-[2.5vw] text-[4vw]",children:["I am a \xa0",(0,s.jsx)(o(),{strings:["<span class='text-highlight-100 font-extrabold'>Student</span>","<span class='text-highlight-100 font-extrabold'>Developer</span></span>","<span class='text-highlight-100 font-extrabold'>Coder</span>"],typeSpeed:100,backSpeed:50,backDelay:1,loop:!0,smartBackspace:!0})]})]}),(0,s.jsx)("button",{onClick:function(){window.scrollTo({top:e.current.getBoundingClientRect().height,behavior:"smooth"})},className:"text-gray-50 hover:text-gray-600 animate-bounce transition-colors duration-300 absolute h-20 w-20 right-[8vw] bottom-24",children:(0,s.jsx)(g,{})})]})},j=a(9547),k=a.n(j),y=a(3082),N=a.n(y),S=function(){var e=(0,r.useRef)(),t=(0,r.useState)(!1),a=t[0],n=t[1];return(0,s.jsxs)("div",{ref:e,className:"jsx-1a2456cd77dc67e4 w-[95%] relative",children:[(0,s.jsx)("div",{onClick:function(){console.log(e.current.getBoundingClientRect()),window.scrollTo({top:window.screen.availHeight+e.current.getBoundingClientRect().height,behavior:"smooth"})},className:"jsx-1a2456cd77dc67e4 w-20 z-[1000] h-20 absolute left-20 bottom-[15vw] animate-bounce  text-gray-50 hover:text-gray-600 transition-colors duration-300",children:(0,s.jsx)(g,{})}),(0,s.jsx)("div",{className:"jsx-1a2456cd77dc67e4 body relative w-full",children:(0,s.jsx)(N(),{onChange:function(e){var t=document.documentElement.scrollTop;console.log(t),e?n(!0):t<.9*window.screen.availHeight&&n(!1)},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"jsx-1a2456cd77dc67e4 container ",children:[(0,s.jsxs)("div",{className:"jsx-1a2456cd77dc67e4 "+"laptop-hood-container ".concat(a?"laptop-hood-opened":""),children:[(0,s.jsx)("div",{className:"jsx-1a2456cd77dc67e4 laptop-hood cover",children:(0,s.jsx)("img",{src:"./assets/images/laptop-cover.png",alt:"",className:"jsx-1a2456cd77dc67e4 background-img border-radius"})}),(0,s.jsxs)("div",{className:"jsx-1a2456cd77dc67e4 laptop-hood screen",children:[(0,s.jsx)("iframe",{embedded:"true",src:"/resumeGame/index.html",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",allowFullScreen:!0,className:"jsx-1a2456cd77dc67e4 cover frame frameScale wallpaper"}),(0,s.jsx)("div",{className:"jsx-1a2456cd77dc67e4 laptop-hood frame ",children:(0,s.jsx)("img",{src:"./assets/images/laptop_hood_frame.png",alt:"",className:"jsx-1a2456cd77dc67e4 background-img border-radius"})})]})]}),(0,s.jsx)("div",{className:"jsx-1a2456cd77dc67e4 laptop-bottom",children:(0,s.jsx)("img",{src:"./assets/images/laptop_keyboard.png",className:"jsx-1a2456cd77dc67e4 background-img border-radius"})})]}),(0,s.jsxs)("p",{className:"jsx-1a2456cd77dc67e4 text-center text-white text-[1.5vw] p-4",children:["Click ",(0,s.jsx)("a",{rel:"noreferrer",href:"/resumeGame/index.html",target:"_blank",className:"jsx-1a2456cd77dc67e4 text-amber-500 font-bold text-[2.5vw] hover:text-rose-500 transition-colors duration-500 ",children:"here"})," to launch my interactive resume game in full screen or",(0,s.jsx)("br",{className:"jsx-1a2456cd77dc67e4"}),"play on above virtual Laptop"]})]})})}),(0,s.jsx)(k(),{id:"1a2456cd77dc67e4",children:".body.jsx-1a2456cd77dc67e4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.container.jsx-1a2456cd77dc67e4{-webkit-transform:scale(.4);-moz-transform:scale(.4);-ms-transform:scale(.4);-o-transform:scale(.4);transform:scale(.4);position:relative;top:0;-webkit-perspective:400vw;-moz-perspective:400vw;perspective:400vw;-webkit-perspective-origin:bottom;-moz-perspective-origin:bottom;perspective-origin:bottom;--laptop--screen--width:100vw;--aspect--ratio:calc(9/16);--laptop--screen-height:calc(var(--aspect--ratio) * var(--laptop--screen--width));--laptop--hood--initial--angle:-120deg;--laptop--hood--final--angle:0deg;--laptop--keyboard--angle:-120deg;--laptop--screen--width--adjustment:10px}.border-radius.jsx-1a2456cd77dc67e4{-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}.background-img.jsx-1a2456cd77dc67e4{width:inherit;height:inherit}.laptop-hood-container.jsx-1a2456cd77dc67e4{--webkit-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;position:relative;width:var(--laptop--screen--width);height:var(--laptop--screen-height);-webkit-transition:all 2s ease-in-out;-moz-transition:all 2s ease-in-out;-o-transition:all 2s ease-in-out;transition:all 2s ease-in-out;-webkit-transform-origin:bottom;-moz-transform-origin:bottom;-ms-transform-origin:bottom;-o-transform-origin:bottom;transform-origin:bottom;-webkit-transform:rotateX(var(--laptop--hood--initial--angle));-moz-transform:rotateX(var(--laptop--hood--initial--angle));transform:rotateX(var(--laptop--hood--initial--angle))}.laptop-hood-opened.jsx-1a2456cd77dc67e4{-webkit-transform:rotateX(var(--laptop--hood--final--angle));-moz-transform:rotateX(var(--laptop--hood--final--angle));transform:rotateX(var(--laptop--hood--final--angle))}.laptop-hood.jsx-1a2456cd77dc67e4{--webkit-transform-style:preserve-3d;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;position:absolute;width:inherit;height:inherit;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.cover.jsx-1a2456cd77dc67e4{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);transform:rotateY(180deg);z-index:1;pointer-events:none}.screen.jsx-1a2456cd77dc67e4{position:relative}.frame.jsx-1a2456cd77dc67e4{position:absolute;top:0px;left:0px;pointer-events:none}.frameScale.jsx-1a2456cd77dc67e4{-webkit-transform:rotateZ(360deg);-moz-transform:rotateZ(360deg);transform:rotateZ(360deg)}.laptop-bottom.jsx-1a2456cd77dc67e4{pointer-events:stroke;position:absolute;z-index:-10;top:0px;-webkit-transform-origin:bottom;-moz-transform-origin:bottom;-ms-transform-origin:bottom;-o-transform-origin:bottom;transform-origin:bottom;-webkit-transform:rotateX(var(--laptop--keyboard--angle));-moz-transform:rotateX(var(--laptop--keyboard--angle));transform:rotateX(var(--laptop--keyboard--angle));width:var(--laptop--screen--width);height:var(--laptop--screen-height);-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px}.wallpaper.jsx-1a2456cd77dc67e4{pointer-events:all;width:-webkit-calc(var(--laptop--screen--width) - var(--laptop--screen--width--adjustment)*2);width:-moz-calc(var(--laptop--screen--width) - var(--laptop--screen--width--adjustment)*2);width:calc(var(--laptop--screen--width) - var(--laptop--screen--width--adjustment)*2);height:-webkit-calc(var(--laptop--screen-height) - var(--laptop--screen--width--adjustment)*2);height:-moz-calc(var(--laptop--screen-height) - var(--laptop--screen--width--adjustment)*2);height:calc(var(--laptop--screen-height) - var(--laptop--screen--width--adjustment)*2);margin-top:var(--laptop--screen--width--adjustment);margin-left:var(--laptop--screen--width--adjustment)}"})]})},C=a(1664),z=a.n(C),E=a(1163),T=function(){return(0,s.jsxs)("div",{className:"flex flex-row bg-dark-300 py-[5vw] mt-[.25vw] px-[2.5vw]",children:[(0,s.jsxs)("div",{className:"w-1/2",children:[(0,s.jsx)("h1",{className:"text-[9vw] font-bold font-mono my-[1.25vw]",children:(0,s.jsx)(o(),{strings:["<span class='text-white'>Hello,</span>","<span class=' text-rose-400 font-bold font-mono'>Namaste,</span>","<span class=' text-green-400 font-bold font-mono'>Bonjour,</span>"],typeSpeed:100,backSpeed:10,backDelay:1,loop:!0,smartBackspace:!0})}),(0,s.jsx)("p",{className:"my-[.75vw] text-light-200 text-[3vw] font-bold",children:"Ask Me Anyting ..."}),(0,s.jsx)("img",{className:"w-[60%]",src:"/assets/images/telephone.png",alt:"decorative image"}),(0,s.jsxs)("div",{className:"p-[1.25vw] text-neutral-300 flex flex-col",children:[(0,s.jsx)("p",{className:"text-[1.5vw]",children:"Sayak Das"}),(0,s.jsx)("a",{rel:"noreferrer",className:"text-[1.5vw]",href:"mailto:sayakds2k1@gmail.com",children:"sayakdask1@gmail.com"}),(0,s.jsx)(w,{})]})]}),(0,s.jsx)("div",{className:"w-1/2",children:(0,s.jsx)(h,{})})]})},I=function(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-[inherit] cursor-pointer w-[inherit]",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",clipRule:"evenodd"})})},R=function(e){var t=e.div,a=(0,r.useState)(!1),n=a[0],o=a[1];return(0,r.useEffect)((function(){t.current.addEventListener("scroll",(function(){var e=t.current.scrollTop,a=window.innerHeight;!n&&e>a&&o(!0),n&&e<a&&o(!1)}))})),(0,s.jsx)(s.Fragment,{children:n?(0,s.jsx)("div",{onClick:function(){t.current.scrollTo({top:10,left:0,behavior:"smooth"})},className:"fixed bottom-10 right-10 w-20 h-20 opacity-50 z-50 hover:opacity-70 transition-opacity ",children:(0,s.jsx)(I,{})}):""})},B="/_next/static/media/skills.75f87fa9.jpg",D=function(e){var t=e.name;return(0,s.jsx)("span",{className:"bg-green-100 text-green-800 text-[1.2vw] p-[.5vw] mx-[1.25vw] my-[.5vw] font-semibold mr-[.5vw] px-[.7vw] py-[.4vw] rounded dark:bg-green-200 dark:text-green-900",children:t})},L=function(e){var t=e.name,a=e.progress,n=(0,r.useState)("".concat(0,"%")),o=n[0],i=n[1];return(0,s.jsx)(N(),{onChange:function(e){console.log("d"),i("".concat(e?a:0,"%"))},children:(0,s.jsxs)("div",{className:"sm:w-1/2 w-full py-[1.3vw] px-[2.5vw]",children:[(0,s.jsxs)("div",{className:"flex text-[1.2vw] leading-[1.4vw] text-neutral-300 font-bold flex-row justify-between",children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)("p",{children:"".concat(a,"%")})]}),(0,s.jsx)("div",{className:"w-full h-[1.5vw] bg-gray-200 rounded-full dark:bg-gray-700",children:(0,s.jsx)("div",{className:"h-[1.5vw] bg-green-500 rounded-full transition-all duration-1000",style:{width:o}})})]})})},P=function(e){var t=e.parentDiv,a=(0,r.useRef)(),n=(0,r.useState)("white"),o=n[0],i=n[1],d=function(){a.current&&t.current&&(a.current.getBoundingClientRect().height-t.current.scrollTop<100?i("dark-300"):i("white"))};return(0,r.useEffect)((function(){t.current.addEventListener("scroll",d)})),(0,s.jsxs)("div",{className:"p-20 transition-colors leading-none duration-1000 w-full flex flex-col bg-".concat(o),children:[(0,s.jsx)("h1",{className:"my-5 text-[5.5vw] font-thin",children:"What I Know"}),(0,s.jsxs)("div",{ref:a,className:"p-[1.25vw] flex flex-row w-full items-center",children:[(0,s.jsxs)("div",{className:"w-1/2",children:[(0,s.jsx)("h2",{className:"my-[.75vw] text-[10vw] font-bold",children:"My Skills"}),(0,s.jsxs)("p",{className:"p-[.5vw] text-[1.8vw] leading-[2vw]",children:["Here are some key skills that I have. For more details and find everything please go through my ",(0,s.jsx)("a",{rel:"noreferrer",href:"https://docs.google.com/document/d/1awwHGpyhRx_0ocPTWBBQbTb2IhQZgLTU/",target:"_blank",className:"font-bold hover:opacity-70 transition-opacity duration-300",children:"Resume"})]})]}),(0,s.jsx)("img",{className:"w-1/2 shadow-sm",src:B})]}),(0,s.jsx)("div",{className:"flex flex-row flex-wrap my-[2.5vw]",children:c.map((function(e,t){return(0,s.jsx)(L,{name:e.name,progress:e.progress},t)}))}),(0,s.jsxs)("div",{className:"my-[2.5vw]",children:[(0,s.jsx)("h1",{className:"my-[1.25vw] text-neutral-100 text-[6vw] font-thin",children:"Interests"}),(0,s.jsx)("div",{className:"flex flex-row flex-wrap my-[1.25vw]",children:l.map((function(e,t){return(0,s.jsx)(D,{name:e},t)}))})]})]})},_={success:!0,total:7,data:[{title:"Code For Good 2022",description:"Code For Good is an annual Hackathon conducted by JP Morgan Chase for students in their second and third years of Engineering. It is a hackathon aimed at providing technology-based solutions to real-world problems faced by NGO's, NPO's etc.",img:"/assets/images/works/cfg.png",url:"https://c4g.bemyapp.com/#/projects/62a572e5683a3000391aa0a3"},{title:"Personal Portfolio",description:"The current portfolio you are watching right now. It is developed using NEXT.js",img:"/assets/images/works/portfolio.png",url:"https://github.com/sayak2k1maruti"},{title:"Sudoku Solver",description:"It is a web application to solve sudoku automatically.It is developed using REACT and backtracking algorithm is used to solve sudoku.Hosted on : https://sayak2k1maruti.github.io/Sudoku-Solver/",img:"/assets/images/works/sodukuSolver.png",url:"https://github.com/sayak2k1maruti/Sudoku-Solver"},{title:"FlipBoard : news web app",description:"It is a web app to read daily news, created using NEXT.js and news API. It is also hosted on : https://news-app-sayak.vercel.app/",img:"/assets/images/works/newsApp.png",url:"https://github.com/sayak2k1maruti/news-app-sayak"},{title:"Alien Strike",description:"It is a simple desktop game creaded using python and it's pygame module",img:"/assets/images/works/sodukuSolver.png",url:"https://github.com/sayak2k1maruti/alien_game"},{title:"Foodies",description:"It is a native android food delivery app developed using Kotlin. It's project of Internshala training program",img:"/assets/images/works/foodies.png",url:"https://github.com/sayak2k1maruti"},{title:"User Authentication : Node Js",description:"A node.Js template for user authentication using JWT token authentication technique",img:"/assets/images/works/userAuth.png",url:"https://github.com/sayak2k1maruti/userAuthenticationNode"}]},A=function(e){var t=e.url;return(0,s.jsxs)("a",{rel:"noreferrer",href:"".concat(t),target:"_blank",className:"flex pl-5 w-[15vw] flex-row items-center justify-between transition-[width] duration-500 hover:w-[12vw] hover:text-neutral-600 text-white",children:[(0,s.jsx)("p",{className:"text-[1.50vw] text-neutral-600",children:"Discover"}),(0,s.jsxs)("p",{className:"w-[70px] h-[70px]",children:[(0,s.jsx)("svg",{height:"75px",width:"px",className:"absolute",children:(0,s.jsx)("circle",{cx:"32",cy:"32",r:"32",stroke:"#ccc",strokeWidth:"1",fill:"currentColor",strokeLinecap:"round"})}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute h-[65px] w-[50px] ml-[6px] z-100",fill:"none",viewBox:"0 0 24 24",stroke:"#999",strokeWidth:1,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]})},M=function(e){var t=e.work,a=e.index,n=e.total,o=e.parentDiv,i=(0,r.useRef)();return(0,s.jsxs)("div",{ref:i,className:"flex w-full flex-row odd:flex-row-reverse p-[2.6vw] mb-5 justify-center items-center",children:[a!==n?(0,s.jsx)("div",{onClick:function(){var e=o.current.scrollTop,t=i.current.getBoundingClientRect().height;o.current.scrollTo({top:e+t,left:0,behavior:"smooth"})},className:"w-20 h-20 opacity-50 animate-bounce",children:(0,s.jsx)(g,{})}):"",(0,s.jsx)("div",{className:"w-[50%] h-auto shadow-lg overflow-hidden",children:(0,s.jsx)("img",{className:"scale-110 w-full transition duration-300 hover:scale-100",src:t.img,alt:"representative image"})}),(0,s.jsxs)("div",{className:"w-[50%] p-[2.5vw]",children:[(0,s.jsxs)("p",{className:"text-[.87vw] text-zinc-600 font-bold",children:[a,"/",n]}),(0,s.jsx)("h3",{className:"font-normal text-zinc-700 text-[4vw] py-[.7vh]",children:t.title}),(0,s.jsx)("p",{className:"py-5 text-[1.2vw] opacity-60 hover:opacity-100 transition-opacity duration-300",children:t.description}),(0,s.jsx)(A,{url:t.url})]})]})},H="/_next/static/media/workingTable.d4d7ebb6.jpg",O=function(e){var t=e.parentDiv,a=(0,r.useRef)(),n=(0,r.useState)("dark-300"),i=n[0],l=n[1],c=function(){a.current&&t.current&&(a.current.getBoundingClientRect().height-t.current.scrollTop<50?l("light-200"):l("dark-300"))};(0,r.useEffect)((function(){t.current.addEventListener("scroll",c)}));return(0,s.jsxs)("div",{className:"w-full transition-colors duration-1000 pt-10  bg-".concat(i),children:[(0,s.jsxs)("div",{ref:a,className:"flex h-screen justify-center items-center flex-col lg:flex-row-reverse",children:[(0,s.jsx)("img",{src:H,className:"w-[60%] p-[2.5vw] hover:-translate-y-10 transition-all duration-500"}),(0,s.jsxs)("div",{className:"w-[40%] leading-none text-zinc-100 flex flex-col items-center",children:[(0,s.jsxs)("h2",{className:"px-20 text-[8vw] font-normal m-[.8vw] py-[1.25vw]",children:["Featured",(0,s.jsx)("br",{className:"text-8xl"}),(0,s.jsx)(o(),{strings:["<span class='text-[7vw] text-lime-400 font-bold'>Works</span>","<span class='text-[7vw] text-lime-400 font-bold'>Projects</span></span>"],typeSpeed:100,backSpeed:50,backDelay:1,loop:!0,smartBackspace:!0})]}),(0,s.jsxs)("p",{className:"p-[2.5vw] text-[2.5vw] w-full text-left",children:["Experiences on",(0,s.jsx)("br",{}),(0,s.jsx)(o(),{strings:["<span class='text-pink-400 font-bold'>Full Stack Development</span>","<span class='text-pink-400 font-bold'>Android Development</span></span>","<span class='text-pink-400 font-bold'>and Others</span>"],typeSpeed:50,backSpeed:50,backDelay:1,loop:!0,smartBackspace:!0})]}),(0,s.jsx)("div",{onClick:function(){t.current.scrollTo({top:a.current.getBoundingClientRect().height+100,left:0,behavior:"smooth"})},className:"w-[5vw] h-[5vw] opacity-60 hover:opacity-90 animate-bounce",children:(0,s.jsx)(g,{})})]})]}),(0,s.jsx)("div",{className:"flex flex-col align-center items-center",children:_.data.map((function(e,a){return(0,s.jsx)(M,{parentDiv:t,work:e,total:_.total,index:a+1},a)}))})]})},X=function(e){var t=e.sidePane,a=((0,E.useRouter)(),(0,r.useRef)()),n=void 0;switch(t.component){case"skill":n=(0,s.jsx)(P,{parentDiv:a});break;case"work":n=(0,s.jsx)(O,{parentDiv:a});break;case"contact":n=(0,s.jsx)(T,{});break;case"default":n=(0,s.jsx)(s.Fragment,{})}return(0,s.jsxs)("div",{ref:a,className:"sm:animate-openSidePane z-[1000] fixed overflow-y-scroll scroll-smooth sm:left-[10%] left-0 right-0 shadow-xl h-screen bg-dark-300",children:[(0,s.jsx)(z(),{href:"/",children:(0,s.jsx)("button",{className:"h-20 w-20 absolute left-5 top-5 mb-5 cursor-pointer text-neutral-500 hover:text-neutral-700 transition-colors duration-500",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})}),(0,s.jsx)("span",{className:"text-neutral-500",children:(0,s.jsx)(R,{div:a})}),n]})},F="/_next/static/media/minion.74484e37.png",G="/_next/static/media/selfie.95203ba8.jpg",W=function(){return(0,s.jsxs)("div",{className:"p-[5vw] w-full flex flex-col",children:[(0,s.jsx)("h1",{className:"my-[1.25vw] text-[6vw] font-thin",children:"About Me"}),(0,s.jsxs)("div",{className:"p-[1.25vw] flex flex-row leading-none w-full items-center",children:[(0,s.jsxs)("div",{className:"w-1/2",children:[(0,s.jsx)("h2",{className:"my-[.75vw] text-[9vw] font-bold",children:"Hello There"}),(0,s.jsxs)("p",{className:"p-[.5vw] px-[1.5vw] leading-[2.5vw] font-thin text-justify text-[1.7vw]",children:["\nI am Sayak. Currently, I am a student at the National Institute of Technology Durgapur pursuing a Bachelor of Technology degree in Electronics and Communication Engineering. I am a vibrant and social person who loves taking on new challenges and learning new skills. I love meeting new people, swapping ideas and acquiring knowledge.\n",(0,s.jsx)(w,{})]})]}),(0,s.jsx)("img",{className:"w-1/2 hover:-translate-y-10 transition-all duration-500 shadow-sm",src:F})]}),(0,s.jsxs)("div",{className:"p-[1.25vw] my-[2.5vw] flex flex-row w-full items-center",children:[(0,s.jsx)("div",{className:"w-[35%] hover:-translate-y-10 transition-all duration-500 flex flex-row items-center justify-center",children:(0,s.jsx)("img",{className:"rounded-full w-[30vw] h-[30vw]",alt:"selfie",src:G})}),(0,s.jsxs)("div",{className:"w-[65%] flex flex-col pl-[5vw] justify-center",children:[(0,s.jsx)("table",{className:"text-left w-full text-[1.25vw] items-start",children:(0,s.jsx)("tbody",{children:d.map((function(e,t){return(0,s.jsxs)("tr",{className:"w-full",children:[(0,s.jsxs)("th",{className:"w-1/3 py-[.25vw]",children:[e.key," :"]}),(0,s.jsx)("td",{className:"w-2/3 py-[.25vw]",children:e.value})]},t)}))})}),(0,s.jsx)("a",{rel:"noreferrer",className:"w-[12em] font-bold mt-[2.5vw] bg-highlight-200 text-[1.25vw] text-white hover:bg-green-700 transition-colors cursor-pointer duration-500 rounded-lg px-[2.5vw] py-[.5vw]",href:"https://drive.google.com/drive/folders/1pBx5NCZQHfO03B6_KwW0ZucMvpU2-8tG?usp=sharing",target:"_blank",children:"Download CV"})]})]}),(0,s.jsxs)("p",{className:"leading-[1.5vw] text-[1.8vw] w-full",children:["Thank you for taking the time to go through my website. You can reach me via ",(0,s.jsx)("a",{href:"mailto:sayakdas2k1@gmail.com",className:"text-blue-500",children:"sayakdas2k1@gmail.com"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"P.S:"})," To jump ahead to the projects, click \xa0",(0,s.jsx)("span",{className:"text-blue-500",children:(0,s.jsx)(z(),{href:"/work",children:"here"})})]})]})},J="/_next/static/media/jerry.038872c4.gif",Z=function(e){var t=e.sidePane,a=(0,E.useRouter)(),n=(0,r.useState)("splash"),o=n[0],l=n[1],c=(0,r.useState)(!1),d=c[0],m=c[1],p=(0,r.useRef)(),u=(0,r.useRef)(),h=(0,r.useRef)(),x=((0,r.useRef)(),function(e){l(e)});(0,r.useEffect)((function(){window.addEventListener("scroll",(function(){p.current&&u.current&&h.current&&(u.current.getBoundingClientRect().y<50?(m(!1),x("dark-100")):p.current.getBoundingClientRect().y<70?(x("white"),m(!0)):h.current.getBoundingClientRect().y<50?(x("dark-200"),m(!0)):(x("dark-100"),m(!1)))}),!0)}),[]);return(0,s.jsxs)("div",{className:"w-screen ",children:[(0,s.jsx)("div",{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"w-20 h-20 text-neutral-500 hover:text-neutral-600 fixed right-[7vw] bottom-10 animate-bounce z-50",children:d?(0,s.jsx)(I,{}):""}),t.status?(0,s.jsx)(X,{sidePane:t}):"",(0,s.jsx)("div",{className:"fixed flex flex-col items-center right-0 w-[5vw] min-h-screen bg-lime-300",children:i.map((function(e,t){return(0,s.jsx)("nav",{name:e,className:"text-[2vw] cursor-pointer text-neutral-900 font-bold hover:text-neutral-400 transition duration-500 pt-[.5vw] mt-[2.5vw] ",style:{writingMode:"vertical-lr"},children:(0,s.jsx)(z(),{href:e,children:e})},t)}))}),(0,s.jsxs)("div",{onClick:function(){t.status&&a.push("/")},className:"bg-".concat(o," transition-colors duration-1000 w-screen h-auto flex flex-col align-middle justify-center items-center pr-[5vw]"),children:[(0,s.jsx)(b,{}),(0,s.jsx)("div",{ref:h,children:(0,s.jsx)(S,{})}),(0,s.jsx)("div",{ref:p,children:(0,s.jsx)(W,{})}),(0,s.jsx)("img",{ref:u,src:J,className:"sm:w-[35vw] sm:h-[35vw] rounded-full hover:-translate-y-10 transition-all duration-500 mt-[10vw] mb-10"}),(0,s.jsx)(f,{})]})]})}}}]);