(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[5739],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return p}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},1395:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var o=t(7294),a=t(944),r=t(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,d=e.values,m=e.groupId,p=e.className,f=(0,a.Z)(),y=f.tabGroupChoices,v=f.setTabGroupChoices,h=(0,o.useState)(u),g=h[0],b=h[1],w=o.Children.toArray(e.children),k=[];if(null!=m){var O=y[m];null!=O&&O!==g&&d.some((function(e){return e.value===O}))&&b(O)}var x=function(e){var n=e.currentTarget,t=k.indexOf(n),o=d[t].value;b(o),null!=m&&(v(m,o),setTimeout((function(){var e,t,o,a,r,i,s,c;(e=n.getBoundingClientRect(),t=e.top,o=e.left,a=e.bottom,r=e.right,i=window,s=i.innerHeight,c=i.innerWidth,t>=0&&r<=c&&a<=s&&o>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case c:var o=k.indexOf(e.target)+1;t=k[o]||k[0];break;case s:var a=k.indexOf(e.target)-1;t=k[a]||k[k.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},p)},d.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":g===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:x,onClick:x},t)}))),n?(0,o.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},w.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},9443:function(e,n,t){"use strict";var o=(0,t(7294).createContext)(void 0);n.Z=o},944:function(e,n,t){"use strict";var o=t(7294),a=t(9443);n.Z=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5956:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=t(2122),a=t(9756),r=(t(7294),t(3905)),i=t(1395),l=t(8215),s={sidebar_position:1,slug:"/"},c={unversionedId:"intro",id:"version-1.5.2/intro",isDocsHomePage:!1,title:"Install Monaco",description:"To use monaco you will need to install it. Monaco is distributed as a binary package.",source:"@site/versioned_docs/version-1.5.2/intro.md",sourceDirName:".",slug:"/",permalink:"/dynatrace-monitoring-as-code/1.5.2/",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/versioned_docs/version-1.5.2/intro.md",version:"1.5.2",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"version-1.5.2/tutorialSidebar",next:{title:"Validating Configuration",permalink:"/dynatrace-monitoring-as-code/1.5.2/commands/validating-configuration"}},u=[{value:"Verify Download",id:"verify-download",children:[]}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To use monaco you will need to install it. Monaco is distributed as a binary package."),(0,r.kt)("p",null,"To install Monaco, find the appropriate package for your system and download it as a zip archive. After downloading Monaco, unzip the package. Monaco runs as a single binary named monaco. Ensure the binary is available on your PATH. This process will differ depending on your operating system."),(0,r.kt)("p",null,"Binaries are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases"},"release page"),"."),(0,r.kt)(i.Z,{defaultValue:"operating system",values:[{label:"Operating System",value:"operating system"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"operating system",mdxType:"TabItem"},(0,r.kt)(i.Z,{defaultValue:"linux-macos",values:[{label:"Linux / macOS",value:"linux-macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux-macos",mdxType:"TabItem"},(0,r.kt)("p",null,"This is an example using ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),". If you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),", install it, or use ",(0,r.kt)("inlineCode",{parentName:"p"},"wget"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Linux\n# x64\n$ curl -L https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases/download/v1.5.2/monaco-linux-amd64 -o monaco\n\n# x86\n$ curl -L https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases/download/v1.5.2/monaco-linux-386 -o monaco\n\n# macOS\n$ curl -L https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/releases/download/v1.5.2/monaco-darwin-10.12-amd64 -o monaco\n")),(0,r.kt)("p",null,"Make the binary executable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ chmod +x monaco\n")),(0,r.kt)("p",null,"Optionally install driftctl to a central location in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),".\nThis command assumes that the binary is currently in your downloads folder and that your PATH includes ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# use any path that suits you, this is just a standard example. Install sudo if needed.\n$ sudo mv ~/Downloads/monaco /usr/local/bin/\n")),(0,r.kt)("h2",{id:"verify-download"},"Verify Download"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ monaco\nYou are currently using the old CLI structure which will be used by\ndefault until monaco version 2.0.0\nCheck out the beta of the new CLI by adding the environment variable\n  \"NEW_CLI\".\nWe can't wait for your feedback.\nNAME:\n   monaco-linux-amd64 - Automates the deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments.\nUSAGE:\n   monaco-linux-amd64 [global options] command [command options] [working directory]\nVERSION:\n   1.5.1\nDESCRIPTION:\n   Tool used to deploy dynatrace configurations via the cli\n   Examples:\n     Deploy a specific project inside a root config folder:\n       monaco -p='project-folder' -e='environments.yaml' projects-root-folder\n     Deploy a specific project to a specific tenant:\n       monaco --environments environments.yaml --specific-environment dev --project myProject\nCOMMANDS:\n   help, h  Shows a list of commands or help for one command\nGLOBAL OPTIONS:\n   --verbose, -v                             (default: false)\n   --environments value, -e value            Yaml file containing environments to deploy to\n   --specific-environment value, --se value  Specific environment (from list) to deploy to (default: none)\n   --project value, -p value                 Project configuration to deploy (also deploys any dependent configurations) (default: none)\n   --dry-run, -d                             Switches to just validation instead of actual deployment (default: false)\n   --continue-on-error, -c                   Proceed deployment even if config upload fails (default: false)\n   --help, -h                                show help (default: false)\n   --version                                 print the version (default: false)\n2021-05-04 11:25:04 ERROR Required flag \"environments\" not set\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,"From the user interface, use this ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1618280/where-can-i-set-path-to-make-exe-on-windows"},"Stack OverFlow")," instructions to set the PATH on Windows.\nVerify the installation by running ",(0,r.kt)("inlineCode",{parentName:"p"},"monaco"),"  from your terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ monaco\nYYou are currently using the old CLI structure which will be used by\ndefault until monaco version 2.0.0\n\nCheck out the beta of the new CLI by adding the environment variable\n  \"NEW_CLI\".\n\nWe can't wait for your feedback.\n\nNAME:\n   monaco.exe - Automates the deployment of Dynatrace Monitoring Configuration to one or multiple Dynatrace environments.\n\nUSAGE:\n   monaco.exe [global options] command [command options] [working directory]\n\nVERSION:\n   1.5.0\n\nDESCRIPTION:\n   Tool used to deploy dynatrace configurations via the cli\n\n   Examples:\n     Deploy a specific project inside a root config folder:\n       monaco -p='project-folder' -e='environments.yaml' projects-root-folder\n\n     Deploy a specific project to a specific tenant:\n       monaco --environments environments.yaml --specific-environment dev --project myProject\n\nCOMMANDS:\n   help, h  Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --verbose, -v                             (default: false)\n   --environments value, -e value            Yaml file containing environments to deploy to\n   --specific-environment value, --se value  Specific environment (from list) to deploy to (default: none)\n   --project value, -p value                 Project configuration to deploy (also deploys any dependent configurations) (default: none)\n   --dry-run, -d                             Switches to just validation instead of actual deployment (default: false)\n   --continue-on-error, -c                   Proceed deployment even if config upload fails (default: false)\n   --help, -h                                show help (default: false)\n   --version                                 print the version (default: false)\n2021-05-06 14:19:32 ERROR Required flag \"environments\" not set\n")))))))}m.isMDXComponent=!0},6010:function(e,n,t){"use strict";function o(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);