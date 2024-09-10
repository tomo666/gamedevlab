"use strict";(self.webpackChunkgb_studio_xv_plugins_docs=self.webpackChunkgb_studio_xv_plugins_docs||[]).push([[541],{404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=i(4848),n=i(8453);const a={sidebar_position:4},s="Actor Walkability Checker",r={id:"gbs_plugins/docs/actor_walkability_checker",title:"Actor Walkability Checker",description:"Obtains an obstacle info relative to the actor's facing direction.",source:"@site/docs/gbs_plugins/docs/actor_walkability_checker.md",sourceDirName:"gbs_plugins/docs",slug:"/gbs_plugins/docs/actor_walkability_checker",permalink:"/tomo666/gamedevlab/gbs_plugins/docs/actor_walkability_checker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"gbsPluginsSidebar",previous:{title:"Array Manager (Get Value)",permalink:"/tomo666/gamedevlab/gbs_plugins/docs/array_manager_get"},next:{title:"Obstacle Checker",permalink:"/tomo666/gamedevlab/gbs_plugins/docs/obstacle_checker"}},c={},l=[{value:"Description",id:"description",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"actor-walkability-checker",children:"Actor Walkability Checker"})}),"\n",(0,o.jsx)(t.p,{children:"Obtains an obstacle info relative to the actor's facing direction."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"This plugin only supports 8x8 tile size mode."})}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Checks for any obstacle (map collisions or other actors) found relative to the specified actor's position and facing direction, given the offset tile amount to walk relatively towards the destination. If there are no map collisions or other actors, it means there are no obstacles, and 0 will be assigned to the specified return variable. Otherwise, this plugin will return the obstacle ID information. Example: No obstacle = 0, Obstacle found = Map Collision ID, or the actor ID represented with a negative value (Note that if the obstacle was a Player actor, the returned ID will be -128). If a map collision ID is found, the actor/player ID will be ignored."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Actor Walkability Checker Description",src:i(5755).A+"",width:"804",height:"531"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5755:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/actor_walkability_checker_description-a3bdbaf0d26a15ccf7cc54bdcd13b56c.png"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var o=i(6540);const n={},a=o.createContext(n);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);