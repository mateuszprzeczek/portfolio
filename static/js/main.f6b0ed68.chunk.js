(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(n,t,e){},43:function(n,t,e){},44:function(n,t,e){},56:function(n,t,e){"use strict";e.r(t);var r=e(2),i=e(1),o=e.n(i),a=e(15),c=e.n(a),s=(e(43),e(16)),l=(e(44),e(9)),u=e(14),d=e(57),f=e(58),p=e(0),j=e(3),b=e(4),x=e(31),h=e(7);function m(){var n=Object(j.a)(["\n    border-radius: 50px;\n    background: #fff;\n    white-space: nowrap;\n    padding: 16px 24px;\n    color: black;\n    font-size: 16px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition: 0.2s ease-in-out;\n        background: gold;\n        color: white;\n    }\n"]);return m=function(){return n},n}function g(){var n=Object(j.a)(["\n    border-radius: 50px;\n    background: white;\n    white-space: nowrap;\n    padding: 19px 24px;\n    margin-right: 20px;\n    color: #010606;\n    font-size: 16px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    transition: 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition: 0.2s ease-in-out;\n        background: #fff;\n        color: gold;\n    }\n"]);return g=function(){return n},n}function O(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: center;\n"]);return O=function(){return n},n}function v(){var n=Object(j.a)(["\n    grid-area: col4;\n    display: flex;\n    alignItems: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    color: #fff;\n    cursor: pointer;\n    margin-bottom: 40px;\n    &:hover {\n        color: gold;\n        transition: 0.2s ease-in-out;\n    }\n"]);return v=function(){return n},n}function y(){var n=Object(j.a)(["\n    grid-area: col3;\n    display: flex;\n    alignItems: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    color: #fff;\n    cursor: pointer;\n    margin-bottom: 40px;\n\n    &:hover {\n        color: gold;\n        transition: 0.2s ease-in-out;\n    }\n"]);return y=function(){return n},n}function w(){var n=Object(j.a)(["\n    grid-area: col2;\n    display: flex;\n    alignItems: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    color: #fff;\n    cursor: pointer;\n    \n\n    &:hover {\n        color: gold;\n        transition: 0.2s ease-in-out;\n    }\n"]);return w=function(){return n},n}function z(){var n=Object(j.a)(["\n    grid-area: col1;\n    display: flex;\n    alignItems: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    color: #fff;\n    cursor: pointer;\n    margin-bottom: 40px;\n\n    &:hover {\n        color: gold;\n        transition: 0.2s ease-in-out;\n    }\n"]);return z=function(){return n},n}function k(){var n=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 20px);\n    text-align: center;\n\n    @media screen and (max-width: 480px) {\n        grid-template-rows: repeat(6, 12px);\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr;\n        grid-template-areas: 'col1' 'col2' 'col3' 'col4';\n    }\n\n    @media (orientation: landscape) { \n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr;\n        grid-template-areas: 'col1 col2' 'col3 col4';\n    }\n"]);return k=function(){return n},n}function T(){var n=Object(j.a)(["\n    color: #fff;\n"]);return T=function(){return n},n}function P(){var n=Object(j.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-size: 2rem;\n    cursor: pointer;\n    outline: none;\n"]);return P=function(){return n},n}function L(){var n=Object(j.a)(["\n    color: #fff;\n    right: 0;\n"]);return L=function(){return n},n}function C(){var n=Object(j.a)(["\n    position: fixed;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    background: #0d0d0d;\n    display: grid;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-in-out;\n    opacity: ",";\n    top: ",";\n"]);return C=function(){return n},n}var D=b.a.aside(C(),(function(n){return n.isOpen?"100%":"0"}),(function(n){return n.isOpen?"0":"-100%"})),M=Object(b.a)(x.f)(L()),S=b.a.div(P()),H=b.a.div(T()),J=b.a.ul(k()),R=Object(b.a)(h.Link)(z()),B=Object(b.a)(h.Link)(w()),I=Object(b.a)(h.Link)(y()),N=Object(b.a)(h.Link)(v()),W=b.a.div(O()),E=b.a.a(g()),F=b.a.a(m()),G=function(n){var t=n.isOpen,e=n.toggle;return Object(r.jsxs)(D,{isOpen:t,onClick:e,children:[Object(r.jsx)(S,{onClick:e,children:Object(r.jsx)(M,{})}),Object(r.jsxs)(H,{children:[Object(r.jsxs)(J,{children:[Object(r.jsx)(R,{to:"about",onClick:e,children:"O mnie"}),Object(r.jsx)(B,{to:"projects",onClick:e,children:"Projekty"})]}),Object(r.jsxs)(J,{children:[Object(r.jsx)(I,{to:"techs",onClick:e,children:"Technologie"}),Object(r.jsx)(N,{to:"contact",onClick:e,children:"Kontakt"})]}),Object(r.jsxs)(W,{children:[Object(r.jsx)(p.b.Provider,{value:{size:"2rem",title:"M\xf3j Github"},children:Object(r.jsx)(E,{href:"https://github.com/mateuszprzeczek",children:Object(r.jsx)(d.a,{})})}),Object(r.jsx)(p.b.Provider,{value:{size:"2.4rem"},children:Object(r.jsx)(F,{href:"https://www.linkedin.com/in/mateusz-prz%C4%99czek-b32b761b0/",children:Object(r.jsx)(f.a,{})})})]})]})]})},K=e(8);function Y(){var n=Object(j.a)(["\n    border-radius: 10%;\n \n    white-space: nowrap;\n    padding: 0 2px 0 2px;\n    color: #fff;\n    font-size: 10px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.5s ease-in-out;\n         transform: rotateX(50deg);\n        transform: scaleY(-1);\n        // background: #fff;\n        // color: #010606;\n    }\n"]);return Y=function(){return n},n}function X(){var n=Object(j.a)(["\n    border-radius: 50px;\n    margin: 10px;\n    white-space: nowrap;\n    padding: 4px 8px 0 8px;\n    color: #fff;\n    font-size: 16px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    transition: all 0.6s ease-in-out;\n    \n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.8s ease-in-out;\n        transform: rotate(0.25turn);\n        // background-color: #fff;\n        // color: #010606;\n    }\n"]);return X=function(){return n},n}function q(){var n=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    transition: all 0.2s ease-in-out;\n\n\n    @media screen and (max-width: 768px) {\n        display: none;\n    }\n\n    &:hover {\n        transition: all 0.6s ease-in-out;\n    }\n"]);return q=function(){return n},n}function A(){var n=Object(j.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n\n    &.active {\n        border-bottom: 3px solid gold;\n    }\n    &:hover {\n        transition: all 0.2s ease-in-out;\n        color: gold;\n    }\n"]);return A=function(){return n},n}function Q(){var n=Object(j.a)(["\n    height: 80px;\n"]);return Q=function(){return n},n}function U(){var n=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    text-align: center;\n    margin-right: -22px;\n\n    @media screen and (max-width: 768px) {\n        display:none;\n    }\n"]);return U=function(){return n},n}function V(){var n=Object(j.a)(["\n    display: none;\n\n    @media screen and (max-width: 768px) {\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        color: #fff;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        cursor: pointer;\n    }\n"]);return V=function(){return n},n}function Z(){var n=Object(j.a)(["\n    color: #fff;\n    justify-self: flex-start;\n    cursor: pointer;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    margin-left: 24px;\n    font-weight: bold;\n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n        color: gold;\n    }\n"]);return Z=function(){return n},n}function $(){var n=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 80px;\n    z-index: 1;\n    width: 100%;\n    padding: 0 24px;\n    max-width: 1100px;\n"]);return $=function(){return n},n}function _(){var n=Object(j.a)(["\n    background: #000;\n    height: 80px;\n    margin-top: -80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.4rem;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n\n    @media screen and (max-width: 960px) {\n        transition: 0.8s all ease;\n    }\n"]);return _=function(){return n},n}var nn=Object(b.a)(K.a.nav)(_()),tn=b.a.div($()),en=Object(b.a)(s.b)(Z()),rn=b.a.div(V()),on=Object(b.a)(K.a.ul)(U()),an=Object(b.a)(K.a.li)(Q()),cn=Object(b.a)(h.Link)(A()),sn=Object(b.a)(K.a.nav)(q()),ln=b.a.a(X()),un=b.a.a(Y()),dn=function(n){var t=n.toggle,e=Object(i.useState)(!1),o=Object(u.a)(e,2),a=o[0],c=o[1],s=function(){window.scrollY>=80?c(!0):c(!1)};Object(i.useEffect)((function(){window.addEventListener("scroll",s)}),[]);var l={hover:{scale:1.2,transition:{duration:1}},tap:{scale:.9,rotate:50},transition:{type:"spring",restDelta:.5}};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(nn,{scrollNav:a,initial:{opacity:0,top:"-200px"},animate:{opacity:1,top:"0"},transition:{duration:5},children:Object(r.jsxs)(tn,{children:[Object(r.jsx)(en,{to:"/portfolio",smooth:"true",duration:500,exact:"true",offset:-80,onClick:function(){return window.scrollTo(0,0)},children:"Portfolio"}),Object(r.jsx)(rn,{onClick:t,children:Object(r.jsx)(x.a,{})}),Object(r.jsxs)(on,{children:[Object(r.jsx)(an,{whileHover:l.hover,whileTap:l.tap,transition:l.transition,children:Object(r.jsx)(cn,{to:"about",smooth:"true",duration:500,spy:!0,exact:"true",offset:-80,children:"O mnie"})}),Object(r.jsx)(an,{whileHover:l.hover,whileTap:{scale:.9,rotate:-50},transition:l.transition,children:Object(r.jsx)(cn,{to:"projects",smooth:"true",duration:500,spy:!0,exact:"true",offset:-80,children:"Projekty"})}),Object(r.jsx)(an,{whileHover:l.hover,whileTap:l.tap,transition:l.transition,children:Object(r.jsx)(cn,{to:"techs",smooth:"true",duration:500,spy:!0,exact:"true",offset:-80,children:"Technologie"})}),Object(r.jsx)(an,{whileHover:l.hover,whileTap:{scale:.9,rotate:-50},transition:l.transition,children:Object(r.jsx)(cn,{to:"contact",smooth:"true",duration:500,spy:!0,exact:"true",offset:-80,children:"Kontakt"})})]}),Object(r.jsxs)(sn,{initial:{justifyContent:"flex-end"},animate:{justifyContent:"center"},whileHover:{transition:1},whileTap:l.tap,transition:l.transition,children:[Object(r.jsx)(p.b.Provider,{value:{size:"2rem",title:"M\xf3j Github"},children:Object(r.jsx)(ln,{initial:{opacity:0},animate:{opacity:1},transition:{duration:7},href:"https://github.com/mateuszprzeczek",children:Object(r.jsx)(x.c,{})})}),Object(r.jsx)(p.b.Provider,{value:{size:"2.2rem"},children:Object(r.jsx)(un,{initial:{opacity:0},animate:{opacity:1},transition:{duration:7},href:"https://www.linkedin.com/in/mateusz-prz%C4%99czek-b32b761b0/",children:Object(r.jsx)(x.e,{})})})]})]})})})},fn=e(35),pn=e.n(fn),jn=function(){return Object(r.jsx)("div",{className:pn.a.Loader,children:"Loading..."})},bn=e.p+"static/media/matcv.adcac634.jpg",xn=e.p+"static/media/react.e412c59e.svg",hn=e.p+"static/media/html.80fe3603.svg",mn=e.p+"static/media/ola.7e391a7f.mp4",gn={id:"about",lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"O mnie",headline:"Mateusz Prz\u0119czek",description:"Web Developer, programista Java, samouk. Na codzie\u0144 freelancer, kt\xf3ry tworzy responsywne strony internetowe wykorzystuj\u0105c framework React.",buttonLabel:"Technologie",imgStart:!1,img:bn,alt:"Mateusz Prz\u0119czek",dark:!0,primary:!0,darkText:!1},On={id:"projects",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Projekty",headline:"Mateusz Prz\u0119czek",description:"Web Developer, programista Java, samouk. Na codzie\u0144 freelancer, kt\xf3ry tworzy responsywne strony internetowe wykorzystuj\u0105c framework React.",buttonLabel:"Technologie",imgStart:!0,alt:"Mateusz Prz\u0119czek",dark:!0,primary:!0,darkText:!0},vn={id:"techs",lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Web Developer, programista Java, samouk. Na codzie\u0144 freelancer, kt\xf3ry tworzy responsywne strony internetowe wykorzystuj\u0105c framework React.",headline:"Mateusz Prz\u0119czek",description:"Css, Html5, RWD, JavaScript, React, Redux, Bootstrap",buttonLabel:"Technologie",imgStart:!1,img:xn,img2:hn,video:mn,alt:"Mateusz Prz\u0119czek",dark:!0,primary:!0,darkText:!1},yn={id:"contact"},wn=o.a.lazy((function(){return e.e(5).then(e.bind(null,92))})),zn=o.a.lazy((function(){return Promise.all([e.e(10),e.e(6)]).then(e.bind(null,91))})),kn=o.a.lazy((function(){return e.e(9).then(e.bind(null,89))})),Tn=o.a.lazy((function(){return e.e(8).then(e.bind(null,93))})),Pn=o.a.lazy((function(){return Promise.all([e.e(3),e.e(4)]).then(e.bind(null,90))})),Ln=o.a.lazy((function(){return e.e(7).then(e.bind(null,94))})),Cn=function(){var n=Object(i.useState)(!1),t=Object(u.a)(n,2),e=t[0],o=t[1],a=function(){o(!e)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(G,{isOpen:e,toggle:a}),Object(r.jsx)(dn,{toggle:a}),Object(r.jsxs)(i.Suspense,{fallback:Object(r.jsx)(jn,{}),children:[Object(r.jsx)(zn,{}),Object(r.jsx)(wn,Object(l.a)({},gn)),Object(r.jsx)(kn,Object(l.a)({},On)),Object(r.jsx)(Tn,Object(l.a)({},vn)),Object(r.jsx)(Pn,Object(l.a)({},yn)),Object(r.jsx)(Ln,{})]})]})};var Dn=function(){return Object(r.jsx)(s.a,{children:Object(r.jsx)(Cn,{})})};c.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Dn,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.f6b0ed68.chunk.js.map