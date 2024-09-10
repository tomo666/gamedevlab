"use strict";(self.webpackChunkgb_studio_xv_plugins_docs=self.webpackChunkgb_studio_xv_plugins_docs||[]).push([[563],{8982:(e,A,i)=>{i.r(A),i.d(A,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var n=i(4848),t=i(8453);const l={sidebar_position:6},s="Sprite Tile Replacer",r={id:"gbs_plugins/docs/sprite_tile_replacer",title:"Sprite Tile Replacer",description:"Replaces a specified sprite tile with ability to select a VRAM bank.",source:"@site/docs/gbs_plugins/docs/sprite_tile_replacer.md",sourceDirName:"gbs_plugins/docs",slug:"/gbs_plugins/docs/sprite_tile_replacer",permalink:"/tomo666/gamedevlab/gbs_plugins/docs/sprite_tile_replacer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"gbsPluginsSidebar",previous:{title:"Obstacle Checker",permalink:"/tomo666/gamedevlab/gbs_plugins/docs/obstacle_checker"}},d={},a=[{value:"Description",id:"description",level:2},{value:"<em>Actor</em>",id:"actor",level:3},{value:"<em>VRAM Bank</em>",id:"vram-bank",level:3},{value:"<em>Tile Bank</em>",id:"tile-bank",level:3},{value:"<em>Tileset</em>",id:"tileset",level:3},{value:"<em>Background Tile Index</em>",id:"background-tile-index",level:3},{value:"<em>Sprite Tile Index</em>",id:"sprite-tile-index",level:3},{value:"How do I obtain the sprite tile index?",id:"how-do-i-obtain-the-sprite-tile-index",level:3}];function o(e){const A={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.header,{children:(0,n.jsx)(A.h1,{id:"sprite-tile-replacer",children:"Sprite Tile Replacer"})}),"\n",(0,n.jsx)(A.p,{children:"Replaces a specified sprite tile with ability to select a VRAM bank."}),"\n",(0,n.jsx)(A.admonition,{type:"info",children:(0,n.jsx)(A.p,{children:"This plugin is only compatible with Color Only mode."})}),"\n",(0,n.jsx)(A.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(A.p,{children:"Replaces a sprite tile with another tileset tile. Basic functionality is same as the GBVM command: VM_ACTOR_REPLACE_TILE. However, in GB Studio up to version 4.0.x, Color Only mode does not allow you to access extended VRAM bank. This plugin will allow you to specify which VRAM bank to reference."}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Sprite Tile Replacer Event UI",src:i(5589).A+"",width:"482",height:"243"})}),"\n",(0,n.jsx)(A.h3,{id:"actor",children:(0,n.jsx)(A.em,{children:"Actor"})}),"\n",(0,n.jsx)(A.p,{children:"The actor in which you want to replace the sprite\u2019s tile."}),"\n",(0,n.jsx)(A.h3,{id:"vram-bank",children:(0,n.jsx)(A.em,{children:"VRAM Bank"})}),"\n",(0,n.jsx)(A.p,{children:"The bank you want to reference. 0 = Bank 0, 1 = Bank 1."}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"VRAM bank example in GB Studio",src:i(7739).A+"",width:"376",height:"332"})}),"\n",(0,n.jsx)(A.h3,{id:"tile-bank",children:(0,n.jsx)(A.em,{children:"Tile Bank"})}),"\n",(0,n.jsx)(A.p,{children:"The source tile bank reference to use for replacing."}),"\n",(0,n.jsx)(A.h3,{id:"tileset",children:(0,n.jsx)(A.em,{children:"Tileset"})}),"\n",(0,n.jsx)(A.p,{children:"The source tileset reference to use for replacing."}),"\n",(0,n.jsx)(A.h3,{id:"background-tile-index",children:(0,n.jsx)(A.em,{children:"Background Tile Index"})}),"\n",(0,n.jsx)(A.p,{children:"The background tile index in the source tileset to replace with."}),"\n",(0,n.jsx)(A.h3,{id:"sprite-tile-index",children:(0,n.jsx)(A.em,{children:"Sprite Tile Index"})}),"\n",(0,n.jsx)(A.p,{children:"The sprite\u2019s tile index to be replaced by the background tile."}),"\n",(0,n.jsxs)(A.admonition,{type:"tip",children:[(0,n.jsx)(A.h3,{id:"how-do-i-obtain-the-sprite-tile-index",children:"How do I obtain the sprite tile index?"}),(0,n.jsx)(A.p,{children:"Sprite tiles are scattered elsewhere in somewhat random position inside the VRAM bank(s). First you will need to check which tile index is the one to be replaced. One way of doing this is to create an event like the one below (using this plugin!) and replacing all sprite tiles with a tile image with numberings on it (placeholder tiles)."}),(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Obtaining sprite index setup example in GB Studio",src:i(8257).A+"",width:"988",height:"562"})}),(0,n.jsx)(A.p,{children:"Then, once you run the scene, you will see the sprite being replaced with these placeholder tiles which makes it more visible which index to be used as the replacement tile. Note that if the [Flip \u2018Right\u2019 To Create \u2018Left\u2019 Facing Frames] is checked in the Sprite Editor, the placeholder tiles will be flipped as well."}),(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Flipped sprite tiles example",src:i(675).A+"",width:"290",height:"73"})}),(0,n.jsx)(A.p,{children:"The placeholder tiles can be found as a sample inside this plugin for you to use if needed."}),(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.img,{alt:"placeholder tiles dark",src:i(1692).A+"",width:"160",height:"144"})," ",(0,n.jsx)(A.img,{alt:"placeholder tiles light",src:i(1174).A+"",width:"160",height:"144"})]})]})]})}function c(e={}){const{wrapper:A}={...(0,t.R)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8257:(e,A,i)=>{i.d(A,{A:()=>n});const n=i.p+"assets/images/obtaining_sprite_index-ddb029ecfbd264e41e00d1d236fdf6e1.png"},1692:(e,A,i)=>{i.d(A,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACQCAMAAAC4a5CyAAAAAXNSR0IArs4c6QAAAA9QTFRFZf8A4PjPhsBsMGhQBxghfemWOwAAAAV0Uk5TAP////8c0CZSAAACJklEQVR4nO2XjW7DIAyEEfL7P/O0FfAPNmQKCUy7L4s87JS4t/japXQ6dDgp50x8Eul1OcnJhSeJSGZdItnr4pjK7X8OKi+muqZsDl3p62KPT/lz1rWp21JfDxpUqg1ia1DkvQZbfhJbgyLvN2gUihTl67nuNki+kvH1XE9XniuiIB89swv3O3+Kj2e3QjMe8MG1+yU5oTxu+pRzLWNf13HFfqnzsAXTuHK/JHs2duS+S/96rYJV0CoUKcrXcw0+eJfdLjdnt0IzUvMkKr6l1iVS9vNeXO2DsgHKdk5Ng6bS1/0pj1zAnt7dz/fB1b613Adr16PYNrL5uuFITfjgbnYrNOP874Orfcubymhq7b36+gM+6NrGxCVGbvH//i+uuVFsjdl8bVDkz5/i49mt0Iy/4IP9VEZTG3ledKzY7/zvg947vuWD8vdq1EStNvpk4eu5hv+L77Lb5ebsVmjG95B8fsT81TVHCvLldTryTkR1Rx3r0fI5jLLB7mUttgZNNLfTM84N1mm3U3/NB70GA6W6qFvLfYuBgvy3Umuz30BBrZBtSDRK+nWBgp2SNWt91PHVa89gqCxJ5fiNTp5BVsoo6DyT50/x8exWaEbynqnf+OALDaqBlLPG0U1S/frxdIPXPzG86X6jQSIz5r1fZX/9fH8XFRz44OMNPn+Le+x2OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBNvgBCyGVP3c6prAAAAABJRU5ErkJggg=="},1174:(e,A,i)=>{i.d(A,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACQCAMAAAC4a5CyAAAAAXNSR0IArs4c6QAAAA9QTFRFZf8A4PjPhsBsMGhQBxghfemWOwAAAAV0Uk5TAP////8c0CZSAAACJklEQVR4nO2XjW7DIAyEQfL7P/O0FfAPNmQKCUy7L4s87JS4t/japXQ6dDgp50x8Eul1OcnJhSeJSGZdItnr4pjK7X8OKi+muqZsDl3p62KPT/lz1rWp21JfDxpUqg1ia1DkvQZbfhJbgyLvN2gUihTl67nuNki+kvH1XE9XniuiIB89swv3O3+Kj2e3QjMe8MG1+yU5oTxu+pRzLWNf13HFfqnzsAXTuHK/JHs2duS+S/96rYJV0CoUKcrXcw0+eJfdLjdnt0IzUvMkKr6l1iVS9vNeXO2DsgHKdk5Ng6bS1/0pj1zAnt7dz/fB1b613Adr16PYNrL5uuFITfjgbnYrNOP874Orfcubymhq7b36+gM+6NrGxCVGbvH//i+uuVFsjdl8bVDkz5/i49mt0Iy/4IP9VEZTG3ledKzY7/zvg947vuWD8vdq1EStNvpk4eu5hv+L77Lb5ebsVmjG95B8fsT81TVHCvLldTryTkR1Rx3r0fI5jLLB7mUttgZNNLfTM84N1mm3U3/NB70GA6W6qFvLfYuBgvy3Umuz30BBrZBtSDRK+nWBgp2SNWt91PHVa89gqCxJ5fiNTp5BVsoo6DyT50/x8exWaEbynqnf+OALDaqBlLPG0U1S/frxdIPXPzG86X6jQSIz5r1fZX/9fH8XFRz44OMNPn+Le+x2OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBNvgATxlq2licozAAAAABJRU5ErkJggg=="},5589:(e,A,i)=>{i.d(A,{A:()=>n});const n=i.p+"assets/images/sprite_tile_replacer_event-44fa4cf30adcca227f44b20ac97cc2fd.png"},675:(e,A,i)=>{i.d(A,{A:()=>n});const n="data:image/png;base64,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"},7739:(e,A,i)=>{i.d(A,{A:()=>n});const n=i.p+"assets/images/vram_bank_example-00ded65a059b0e15f3e3478562209070.png"},8453:(e,A,i)=>{i.d(A,{R:()=>s,x:()=>r});var n=i(6540);const t={},l=n.createContext(t);function s(e){const A=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function r(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(l.Provider,{value:A},e.children)}}}]);