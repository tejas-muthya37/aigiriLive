(this["webpackJsonpaigiri-foods"]=this["webpackJsonpaigiri-foods"]||[]).push([[0],{36:function(e,i,t){},37:function(e,i,t){},38:function(e,i,t){},45:function(e,i,t){},46:function(e,i,t){},47:function(e,i,t){},48:function(e,i,t){},49:function(e,i,t){},50:function(e,i,t){},51:function(e,i,t){},52:function(e,i,t){},53:function(e,i,t){},54:function(e,i,t){},55:function(e,i,t){},57:function(e,i,t){"use strict";t.r(i);var a=t(0),c=t(1),s=t.n(c),r=t(25),n=t.n(r),o=(t(36),t(37),t(7)),l=(t(38),t.p+"static/media/aigiri_logo_cropped.ed88c8bd.png"),d=t(26),m=t.n(d),u=t(5),j=Object(c.createContext)(),p=function(e){var i=e.reducer,t=e.initialState,s=e.children;return Object(a.jsx)(j.Provider,{value:Object(c.useReducer)(i,t),children:s})},b=function(){return Object(c.useContext)(j)};var h=function(){var e=b(),i=Object(o.a)(e,1)[0].basket,t=function(){window.scroll({top:0,left:0})};return Object(a.jsx)("div",{className:"header",children:Object(a.jsxs)("nav",{children:[Object(a.jsx)("div",{className:"logo",onClick:t,children:Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("img",{alt:"",src:l})})}),Object(a.jsxs)("ul",{id:"nav-links",className:"nav-links",children:[Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)(u.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)("a",{href:"/about",children:"About Us"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)(u.b,{to:"/",children:"Contact"})}),Object(a.jsx)("li",{onClick:t,children:Object(a.jsx)(u.b,{to:"/",children:"Our Products"})})]}),Object(a.jsxs)("div",{className:"nav-basket",children:[Object(a.jsx)("div",{onClick:t,children:Object(a.jsx)(u.b,{to:"/cart",children:Object(a.jsx)(m.a,{})})}),Object(a.jsx)("span",{className:"nav-basketCount",children:null===i||void 0===i?void 0:i.length})]}),Object(a.jsxs)("div",{onClick:function(){var e=document.querySelector(".burger"),i=document.querySelector(".nav-links"),t=document.querySelectorAll(".nav-links li");i.classList.toggle("navSlide"),t.forEach((function(e,i){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.25s ease forwards ".concat(i/7+.15,"s")})),e.classList.toggle("toggle")},id:"burger",className:"burger",children:[Object(a.jsx)("div",{className:"line1"}),Object(a.jsx)("div",{className:"line2"}),Object(a.jsx)("div",{className:"line3"})]})]})})};t(45);var _=function(e){var i=b(),t=Object(o.a)(i,2),c=t[0].basket,s=t[1];return console.log(c),Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product_info",children:[Object(a.jsx)("p",{children:e.title}),Object(a.jsxs)("p",{className:"product_price",children:[Object(a.jsx)("small",{children:"\u20b9"}),Object(a.jsx)("strong",{children:e.price})]}),Object(a.jsx)("div",{className:"product_rating"})]}),Object(a.jsx)("div",{onClick:function(){window.scroll({top:0,left:0})},children:Object(a.jsx)(u.b,{to:"/recipe/"+e.id,children:Object(a.jsx)("img",{alt:e.id,src:e.image})})}),Object(a.jsx)("button",{onClick:function(){s({type:"ADD_TO_BASKET",item:{id:e.id,title:e.title,image:e.image,price:e.price,quantity:1}})},children:"Buy Now"})]})};t(46);var g=function(){return Object(a.jsxs)("div",{className:"best_seller",children:[Object(a.jsx)("h3",{className:"best_seller_title",children:"BEST SELLERS"}),Object(a.jsxs)("div",{className:"best_seller_list",children:[Object(a.jsx)("div",{className:"best_seller_products",children:Object(a.jsx)(_,{id:"1",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"})}),Object(a.jsx)("div",{className:"best_seller_products",children:Object(a.jsx)(_,{id:"2",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"})}),Object(a.jsx)("div",{className:"best_seller_products",children:Object(a.jsx)(_,{id:"3",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"})}),Object(a.jsx)("div",{className:"best_seller_products",children:Object(a.jsx)(_,{id:"4",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"})})]})]})};t(47);var x=function(){return Object(a.jsxs)("div",{className:"products",children:[Object(a.jsx)("h3",{className:"products_title",children:"OUR PRODUCTS"}),Object(a.jsxs)("div",{className:"products_row",children:[Object(a.jsx)("div",{id:"1",className:"row_product",children:Object(a.jsx)(_,{id:"1",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"})}),Object(a.jsx)("div",{id:"2",className:"row_product",children:Object(a.jsx)(_,{id:"2",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"})}),Object(a.jsx)("div",{id:"3",className:"row_product",children:Object(a.jsx)(_,{id:"3",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"})}),Object(a.jsx)("div",{id:"4",className:"row_product",children:Object(a.jsx)(_,{id:"4",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"})})]}),Object(a.jsxs)("div",{className:"products_row",children:[Object(a.jsx)("div",{id:"5",className:"row_product",children:Object(a.jsx)(_,{id:"5",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"})}),Object(a.jsx)("div",{id:"6",className:"row_product",children:Object(a.jsx)(_,{id:"6",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"})}),Object(a.jsx)("div",{id:"7",className:"row_product",children:Object(a.jsx)(_,{id:"7",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"})}),Object(a.jsx)("div",{id:"8",className:"row_product",children:Object(a.jsx)(_,{id:"8",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"})})]}),Object(a.jsxs)("div",{className:"products_row",children:[Object(a.jsx)("div",{id:"9",className:"row_product",children:Object(a.jsx)(_,{id:"9",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"})}),Object(a.jsx)("div",{id:"10",className:"row_product",children:Object(a.jsx)(_,{id:"10",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"})}),Object(a.jsx)("div",{id:"11",className:"row_product",children:Object(a.jsx)(_,{id:"11",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"})}),Object(a.jsx)("div",{id:"12",className:"row_product",children:Object(a.jsx)(_,{id:"12",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"})})]}),Object(a.jsxs)("div",{className:"products_row",children:[Object(a.jsx)("div",{id:"13",className:"row_product",children:Object(a.jsx)(_,{id:"13",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"})}),Object(a.jsx)("div",{id:"14",className:"row_product",children:Object(a.jsx)(_,{id:"14",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"})}),Object(a.jsx)("div",{id:"15",className:"row_product",children:Object(a.jsx)(_,{id:"15",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"})}),Object(a.jsx)("div",{id:"16",className:"row_product",children:Object(a.jsx)(_,{id:"16",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"})})]})]})},O=(t(48),t.p+"static/media/img5.ee091894.jpg"),v=t.p+"static/media/img6.df4a7688.jpg",N=t.p+"static/media/img7.e319d388.jpg",L=t.p+"static/media/img8.cc6b2138.jpg";var f=function(){return Object(a.jsx)("div",{id:"carouselExampleIndicators",className:"carousel carousel-fade carousel_laptop slide","data-ride":"carousel",children:Object(a.jsxs)("div",{className:"carousel-inner",children:[Object(a.jsx)("div",{className:"carousel-item active",children:Object(a.jsx)("img",{className:"d-block w-100",id:"img4",src:L,alt:"..."})}),Object(a.jsx)("div",{className:"carousel-item",children:Object(a.jsx)("img",{className:"d-block w-100",id:"img3",src:v,alt:"..."})}),Object(a.jsx)("div",{className:"carousel-item",children:Object(a.jsx)("img",{className:"d-block w-100",id:"img2",src:O,alt:"..."})}),Object(a.jsx)("div",{className:"carousel-item",children:Object(a.jsx)("img",{className:"d-block w-100",id:"img1",src:N,alt:"..."})})]})})},A=t(27),k=t.n(A),w=t(28),C=t.n(w),y=t(29),I=t.n(y);t(49);var q=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("div",{className:"footer_left",children:Object(a.jsx)("p",{children:"\xa9 2020 AFP - All Rights Reserved"})}),Object(a.jsxs)("div",{className:"footer_mid",children:[Object(a.jsx)("a",{href:"/",children:"About Us"}),Object(a.jsx)("a",{href:"/",children:"Payment & Shipping Policy"}),Object(a.jsx)("a",{href:"/",children:"Contact"}),Object(a.jsx)("a",{href:"/",children:"FAQ"}),Object(a.jsx)("a",{href:"/",children:"Refund Policy"})]}),Object(a.jsxs)("div",{className:"footer_right",children:[Object(a.jsx)("div",{className:"footer_icons",children:Object(a.jsx)(k.a,{fontSize:"large"})}),Object(a.jsx)("div",{className:"footer_icons",children:Object(a.jsx)(C.a,{fontSize:"large"})}),Object(a.jsx)("div",{className:"footer_icons",children:Object(a.jsx)(I.a,{fontSize:"large"})})]})]})},U=t.p+"static/media/img9.5844f2f9.jpg";t(50);var z=function(){return Object(a.jsx)("div",{className:"feature",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-6",children:Object(a.jsx)("img",{className:"feature_img",src:U,alt:""})}),Object(a.jsx)("div",{className:"col-lg-6",children:Object(a.jsx)("h3",{children:"LIP SMACKING AGE-OLD RECIPES!"})})]})})},Q=t(3),S=t.p+"static/media/group-family3.7914e854.jpg";t(51);var E=function(){return Object(a.jsxs)("div",{className:"about",children:[Object(a.jsx)("img",{className:"family_img",src:S,alt:""}),Object(a.jsxs)("div",{className:"about_content",children:[Object(a.jsxs)("h2",{children:[Object(a.jsx)("span",{className:"header_first_child",children:"A"}),"BOUT ",Object(a.jsx)("span",{className:"header_first_child",children:"U"}),"S"]}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})},P=(t(52),[{id:"1",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"},{id:"2",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"},{id:"3",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"},{id:"4",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"},{id:"5",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"},{id:"6",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"},{id:"7",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"},{id:"8",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"},{id:"9",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"},{id:"10",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"},{id:"11",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"},{id:"12",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"},{id:"13",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"449"},{id:"14",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"79"},{id:"15",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"299"},{id:"16",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"169"}]);var R=function(){var e=b(),i=Object(o.a)(e,2),t=i[0].basket,c=i[1];console.log(t);var s,r=Object(Q.f)().id;return P.forEach((function(e){e.id===r&&(s=e)})),Object(a.jsxs)("div",{className:"recipe",children:[Object(a.jsxs)("div",{className:"recipe_left",children:[Object(a.jsx)("h4",{id:"recipe_left_header",className:"recipe_left_header",children:s.title}),Object(a.jsxs)("h5",{className:"price",children:["\u20b9 ",s.price,".99"]}),Object(a.jsx)("div",{className:"recipe_left_quantity",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"quantity",children:"QUANTITY"}),Object(a.jsxs)("select",{id:"quantity",name:"quantity",children:[Object(a.jsx)("option",{value:"1",children:"1"}),Object(a.jsx)("option",{value:"2",children:"2"}),Object(a.jsx)("option",{value:"3",children:"3"}),Object(a.jsx)("option",{value:"4",children:"4"})]})]})}),Object(a.jsx)("button",{onClick:function(){c({type:"ADD_TO_BASKET",item:{id:s.id,title:s.title,image:s.image,price:s.price,quantity:document.getElementById("quantity").value}})},className:"recipe_button",children:"Add to Cart"})]}),Object(a.jsx)("div",{className:"recipe_mid",children:Object(a.jsx)("img",{alt:s.id,src:s.image})}),Object(a.jsxs)("div",{className:"recipe_right",children:[Object(a.jsxs)("h4",{className:"recipe_right_header",children:[Object(a.jsx)("span",{className:"header_first_child",children:"P"}),"RODUCT ",Object(a.jsx)("span",{className:"header_first_child",children:"D"}),"ESCRIPTION"]}),Object(a.jsx)("p",{className:"recipe_p",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(a.jsxs)("h4",{className:"best_results",children:[Object(a.jsx)("span",{className:"header_first_child",children:"B"}),"EST ",Object(a.jsx)("span",{className:"header_first_child",children:"R"}),"ESULTS"]}),Object(a.jsx)("p",{className:"recipe_p",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})};t(53);var B=function(e){var i=b(),t=Object(o.a)(i,2),c=t[0].basket,s=t[1];return console.log(c),Object(a.jsxs)("div",{className:"cart_product",children:[Object(a.jsx)("div",{className:"cart_product_left",children:Object(a.jsx)("img",{alt:e.id,src:e.image})}),Object(a.jsxs)("div",{className:"cart_product_right",children:[Object(a.jsx)("p",{children:e.title}),Object(a.jsxs)("p",{className:"price",children:["\u20b9 ",e.price]}),Object(a.jsxs)("p",{children:["Quantity - ",e.quantity]}),Object(a.jsx)("button",{onClick:function(){s({type:"REMOVE_FROM_BASKET",id:e.id})},id:"cart_product_button",className:"cart_product_button",children:"Remove From Cart"})]})]})},D=(t(54),t(14)),T=t(17),G=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,i){return e+Number(i.price)*i.quantity}),0)},J=function(e,i){switch(i.type){case"ADD_TO_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[].concat(Object(D.a)(e.basket),[i.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===i.id})),a=Object(D.a)(e.basket);return t>=0?a.splice(t,1):console.warn("Can't remove this item from the basket!"),Object(T.a)(Object(T.a)({},e),{},{basket:a});default:return e}};var F=function(){var e=b(),i=Object(o.a)(e,1)[0].basket;return Object(a.jsxs)("div",{className:"cart",children:[Object(a.jsxs)("div",{className:"cart_left",children:[0===i.length&&Object(a.jsx)("h3",{id:"empty_cart",children:"Your Shopping Cart is empty! :("}),i.length>0&&Object(a.jsx)("h3",{children:"Your Shopping Cart"}),i.map((function(e){return Object(a.jsx)(B,{id:e.id,title:e.title,price:e.price,image:e.image,quantity:e.quantity})}))]}),Object(a.jsxs)("div",{className:"cart_right",children:[i.length>0&&Object(a.jsxs)("h4",{children:["Subtotal (",null===i||void 0===i?void 0:i.length," items) : \u20b9 ",G(i)]}),i.length>0&&Object(a.jsx)("button",{className:"cart_button",children:"Proceed to Checkout"})]})]})};t(55);var M=function(){return Object(a.jsxs)("div",{className:"container contact",children:[Object(a.jsx)("h4",{children:"Order Now! \ud83d\ude00"}),Object(a.jsxs)("form",{className:"text-center",method:"post",action:"/",encType:"text/plain",children:[Object(a.jsx)("input",{type:"text",id:"defaultContactFormName",className:"form-control mb-4",placeholder:"Name"}),Object(a.jsx)("input",{type:"email",id:"defaultContactFormEmail",className:"form-control mb-4",placeholder:"E-mail"}),Object(a.jsx)("input",{type:"text",id:"defaultContactFormAddress",className:"form-control mb-4",placeholder:"Your Residential Address"}),Object(a.jsx)(u.b,{to:"/",children:Object(a.jsx)("button",{className:"contact-btn",children:"Place Order"})})]})]})};var K=function(){return Object(a.jsx)(u.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsxs)(Q.c,{children:[Object(a.jsx)(Q.a,{path:"/recipe/:id",children:Object(a.jsx)(R,{})}),Object(a.jsx)(Q.a,{path:"/about",children:Object(a.jsx)(E,{})}),Object(a.jsx)(Q.a,{path:"/checkout",children:Object(a.jsx)(M,{})}),Object(a.jsx)(Q.a,{path:"/cart",children:Object(a.jsx)(F,{})}),Object(a.jsxs)(Q.a,{path:"/",children:[Object(a.jsx)(f,{}),Object(a.jsx)(g,{}),Object(a.jsx)(z,{}),Object(a.jsx)(x,{})]})]}),Object(a.jsx)(q,{})]})})};n.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{initialState:{basket:[],user:null},reducer:J,children:Object(a.jsx)(K,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.28b6af19.chunk.js.map