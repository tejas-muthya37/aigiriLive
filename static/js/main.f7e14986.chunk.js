(this["webpackJsonpaigiri-foods"]=this["webpackJsonpaigiri-foods"]||[]).push([[0],{38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var i=t(0),c=t(1),n=t.n(c),s=t(25),r=t.n(s),l=(t(38),t(5)),o=(t(39),t(40),t.p+"static/media/aigiri_logo_cropped.ed88c8bd.png"),d=t(26),m=t.n(d),u=t(4),j=Object(c.createContext)(),p=function(e){var a=e.reducer,t=e.initialState,n=e.children;return Object(i.jsx)(j.Provider,{value:Object(c.useReducer)(a,t),children:n})},h=function(){return Object(c.useContext)(j)};var b=function(){var e=h(),a=Object(l.a)(e,1)[0].basket;function t(){var e=document.querySelector(".burger"),a=document.querySelector(".nav-links"),t=document.querySelectorAll(".nav-links li");a.classList.toggle("navSlide"),t.forEach((function(e,a){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.25s ease forwards ".concat(a/7+.3,"s")})),e.classList.toggle("toggle")}function c(){window.scroll({top:0,left:0})}return Object(i.jsx)("div",{className:"header",children:Object(i.jsxs)("nav",{children:[Object(i.jsx)("div",{className:"logo",onClick:c,children:Object(i.jsx)(u.b,{to:"/",children:Object(i.jsx)("img",{alt:"",src:o})})}),Object(i.jsxs)("ul",{id:"nav-links",className:"nav-links",children:[Object(i.jsx)("li",{onMouseDown:c,onClick:t,children:Object(i.jsx)(u.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{onMouseDown:c,onClick:t,children:Object(i.jsx)(u.b,{to:"/about",children:"About Us"})}),Object(i.jsx)("li",{onMouseDown:c,onClick:t,children:Object(i.jsx)(u.b,{to:"/",children:"Contact"})}),Object(i.jsx)("li",{onMouseDown:c,onClick:t,children:Object(i.jsx)(u.b,{to:"/",children:"Our Products"})})]}),Object(i.jsxs)("div",{className:"nav-basket",children:[Object(i.jsx)("div",{children:Object(i.jsx)(u.b,{onClick:c,to:"/cart",children:Object(i.jsx)(m.a,{})})}),Object(i.jsx)("span",{className:"nav-basketCount",children:null===a||void 0===a?void 0:a.length})]}),Object(i.jsxs)("div",{onClick:t,id:"burger",className:"burger",children:[Object(i.jsx)("div",{className:"line1"}),Object(i.jsx)("div",{className:"line2"}),Object(i.jsx)("div",{className:"line3"})]})]})})};t(47);var g=function(e){return Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("div",{onClick:function(){window.scroll({top:0,left:0})},children:Object(i.jsx)(u.b,{to:"/recipe/"+e.id,children:Object(i.jsx)("img",{alt:e.id,src:e.image})})}),Object(i.jsxs)("div",{className:"product_info",children:[Object(i.jsx)("p",{children:e.title}),Object(i.jsxs)("p",{className:"product_price",children:["\u20b9",Object(i.jsxs)("strong",{children:[" ",e.price]})]})]})]})};t(48);var O=function(){return Object(i.jsxs)("div",{className:"best_seller",children:[Object(i.jsx)("h3",{className:"best_seller_title",children:"BEST SELLERS"}),Object(i.jsxs)("div",{className:"best_seller_list",children:[Object(i.jsx)("div",{className:"best_seller_products",children:Object(i.jsx)(g,{id:"1",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"})}),Object(i.jsx)("div",{className:"best_seller_products",children:Object(i.jsx)(g,{id:"2",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"})}),Object(i.jsx)("div",{className:"best_seller_products",children:Object(i.jsx)(g,{id:"3",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"})}),Object(i.jsx)("div",{className:"best_seller_products",children:Object(i.jsx)(g,{id:"4",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"})})]})]})};t(49);var x=function(){return Object(i.jsxs)("div",{className:"products",children:[Object(i.jsx)("h3",{className:"products_title",children:"OUR PRODUCTS"}),Object(i.jsxs)("div",{className:"products_row",children:[Object(i.jsx)("div",{id:"1",className:"row_product",children:Object(i.jsx)(g,{id:"1",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"})}),Object(i.jsx)("div",{id:"2",className:"row_product",children:Object(i.jsx)(g,{id:"2",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"})}),Object(i.jsx)("div",{id:"3",className:"row_product",children:Object(i.jsx)(g,{id:"3",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"})}),Object(i.jsx)("div",{id:"4",className:"row_product",children:Object(i.jsx)(g,{id:"4",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"})})]}),Object(i.jsxs)("div",{className:"products_row",children:[Object(i.jsx)("div",{id:"5",className:"row_product",children:Object(i.jsx)(g,{id:"5",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"})}),Object(i.jsx)("div",{id:"6",className:"row_product",children:Object(i.jsx)(g,{id:"6",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"})}),Object(i.jsx)("div",{id:"7",className:"row_product",children:Object(i.jsx)(g,{id:"7",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"})}),Object(i.jsx)("div",{id:"8",className:"row_product",children:Object(i.jsx)(g,{id:"8",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"})})]}),Object(i.jsxs)("div",{className:"products_row",children:[Object(i.jsx)("div",{id:"9",className:"row_product",children:Object(i.jsx)(g,{id:"9",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"})}),Object(i.jsx)("div",{id:"10",className:"row_product",children:Object(i.jsx)(g,{id:"10",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"})}),Object(i.jsx)("div",{id:"11",className:"row_product",children:Object(i.jsx)(g,{id:"11",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"})}),Object(i.jsx)("div",{id:"12",className:"row_product",children:Object(i.jsx)(g,{id:"12",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"})})]}),Object(i.jsxs)("div",{className:"products_row",children:[Object(i.jsx)("div",{id:"13",className:"row_product",children:Object(i.jsx)(g,{id:"13",title:"Sambar Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"})}),Object(i.jsx)("div",{id:"14",className:"row_product",children:Object(i.jsx)(g,{id:"14",title:"Rasam Powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"})}),Object(i.jsx)("div",{id:"15",className:"row_product",children:Object(i.jsx)(g,{id:"15",title:"Besan Laddoo",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"})}),Object(i.jsx)("div",{id:"16",className:"row_product",children:Object(i.jsx)(g,{id:"16",title:"Gulab Jamun",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"})})]})]})},_=(t(50),t.p+"static/media/img5.ee091894.jpg"),v=t.p+"static/media/img6.df4a7688.jpg",N=t.p+"static/media/img7.e319d388.jpg",f=t.p+"static/media/img8.cc6b2138.jpg";var y=function(){return Object(i.jsx)("div",{id:"carouselExampleIndicators",className:"carousel carousel-fade carousel_laptop slide","data-ride":"carousel",children:Object(i.jsxs)("div",{className:"carousel-inner",children:[Object(i.jsx)("div",{className:"carousel-item active",children:Object(i.jsx)("img",{className:"d-block w-100",id:"img4",src:f,alt:"..."})}),Object(i.jsx)("div",{className:"carousel-item",children:Object(i.jsx)("img",{className:"d-block w-100",id:"img3",src:v,alt:"..."})}),Object(i.jsx)("div",{className:"carousel-item",children:Object(i.jsx)("img",{className:"d-block w-100",id:"img2",src:_,alt:"..."})}),Object(i.jsx)("div",{className:"carousel-item",children:Object(i.jsx)("img",{className:"d-block w-100",id:"img1",src:N,alt:"..."})})]})})},k=t(27),L=t.n(k),A=t(28),I=t.n(A),S=t(29),w=t.n(S);t(51);var C=function(){return Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("div",{className:"footer_left",children:Object(i.jsx)("p",{children:"\xa9 2020 AFP - All Rights Reserved"})}),Object(i.jsxs)("div",{className:"footer_mid",children:[Object(i.jsx)("a",{href:"/",children:"About Us"}),Object(i.jsx)("a",{href:"/",children:"Payment & Shipping Policy"}),Object(i.jsx)("a",{href:"/",children:"Contact"}),Object(i.jsx)("a",{href:"/",children:"FAQ"}),Object(i.jsx)("a",{href:"/",children:"Refund Policy"})]}),Object(i.jsxs)("div",{className:"footer_right",children:[Object(i.jsx)("div",{className:"footer_icons",children:Object(i.jsx)(L.a,{fontSize:"large"})}),Object(i.jsx)("div",{className:"footer_icons",children:Object(i.jsx)(I.a,{fontSize:"large"})}),Object(i.jsx)("div",{className:"footer_icons",children:Object(i.jsx)(w.a,{fontSize:"large"})})]})]})},P=t.p+"static/media/img9.5844f2f9.jpg";t(52);var T=function(){return Object(i.jsx)("div",{className:"feature",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsx)("img",{className:"feature_img",src:P,alt:""})}),Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsx)("h3",{children:"LIP SMACKING AGE-OLD RECIPES!"})})]})})},E=t(3),R=t.p+"static/media/group-family3.7914e854.jpg";t(53);var q=function(){return Object(i.jsxs)("div",{className:"about",children:[Object(i.jsx)("img",{className:"family_img",src:R,alt:""}),Object(i.jsxs)("div",{className:"about_content",children:[Object(i.jsxs)("h2",{children:[Object(i.jsx)("span",{className:"header_first_child",children:"A"}),"BOUT ",Object(i.jsx)("span",{className:"header_first_child",children:"U"}),"S"]}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})},D=(t(54),[{id:"1",title:"Sambar Powder",category:"powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"},{id:"2",title:"Rasam Powder",category:"powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"},{id:"3",title:"Besan Laddoo",category:"box",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"},{id:"4",title:"Gulab Jamun",category:"box",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"},{id:"5",title:"Sambar Powder",category:"powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"},{id:"6",title:"Rasam Powder",category:"powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"},{id:"7",title:"Besan Laddoo",category:"box",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"},{id:"8",title:"Gulab Jamun",category:"box",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"},{id:"9",title:"Sambar Powder",category:"powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"},{id:"10",title:"Rasam Powder",category:"powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"},{id:"11",title:"Besan Laddoo",category:"box",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"},{id:"12",title:"Gulab Jamun",category:"box",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"},{id:"13",title:"Sambar Powder",category:"powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"450"},{id:"14",title:"Rasam Powder",category:"powder",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"80"},{id:"15",title:"Besan Laddoo",category:"box",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"300"},{id:"16",title:"Gulab Jamun",category:"box",image:"https://m.media-amazon.com/images/I/717Ak2hi0NL._AC_UL480_QL65_.jpg",price:"170"}]);var B=function(){var e=h(),a=Object(l.a)(e,2),t=a[0].basket,c=a[1];console.log(t);var n,s=Object(E.f)().id;return D.forEach((function(e){e.id===s&&(n=e)})),Object(i.jsxs)("div",{className:"recipe",children:[Object(i.jsxs)("div",{className:"recipe_left",children:[Object(i.jsx)("h5",{id:"recipe_left_header",className:"recipe_left_header font_alike",children:n.title}),("Sambar Powder"===n.title||"Rasam Powder"===n.title)&&Object(i.jsxs)("h5",{id:"price",className:"price",children:["\u20b9 ",n.price," / KG"]}),("Besan Laddoo"===n.title||"Gulab Jamun"===n.title)&&Object(i.jsxs)("h5",{id:"price",className:"price",children:["\u20b9 ",n.price," / Box of 6"]}),Object(i.jsx)("div",{className:"recipe_left_quantity",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{htmlFor:"quantity",children:Object(i.jsx)("h5",{className:"quantity font_alike",children:"QUANTITY"})}),("Besan Laddoo"===n.title||"Gulab Jamun"===n.title)&&Object(i.jsxs)("select",{id:"quantity",name:"quantity",children:[Object(i.jsx)("option",{id:"1",value:1,children:"1"}),Object(i.jsx)("option",{id:"2",value:2,children:"2"}),Object(i.jsx)("option",{id:"3",value:3,children:"3"}),Object(i.jsx)("option",{id:"4",value:4,children:"4"})]}),("Sambar Powder"===n.title||"Rasam Powder"===n.title)&&Object(i.jsxs)("select",{id:"quantity",name:"quantity",children:[Object(i.jsx)("option",{id:1,value:1,children:"1 KG"}),Object(i.jsx)("option",{id:.5,value:.5,children:"500 GRAMS"}),Object(i.jsx)("option",{id:1/4,value:1/4,children:"250 GRAMS"})]})]})}),Object(i.jsx)("button",{onClick:function(){c({type:"ADD_TO_BASKET",item:{key:n.id,id:n.id,title:n.title,category:n.category,image:n.image,price:n.price,quantity:document.getElementById("quantity").value,quantityValue:document.getElementById(document.getElementById("quantity").value).innerHTML}})},className:"recipe_button",children:"ADD TO CART"})]}),Object(i.jsx)("div",{className:"recipe_mid",children:Object(i.jsx)("img",{alt:n.id,src:n.image})}),Object(i.jsxs)("div",{className:"recipe_right",children:[Object(i.jsx)("h4",{className:"recipe_right_header",children:"PRODUCT DESCRIPTION"}),Object(i.jsx)("p",{className:"recipe_p",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(i.jsx)("h4",{className:"recipe_right_header best_results",children:"BEST RESULTS"}),Object(i.jsx)("p",{className:"recipe_p",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})};t(55);var U=function(e){var a=h(),t=Object(l.a)(a,2),c=t[0].basket,n=t[1];return console.log(c),Object(i.jsxs)("div",{className:"cart_product",children:[Object(i.jsx)("div",{className:"cart_product_left",children:Object(i.jsx)(u.b,{to:"/recipe/"+e.id,children:Object(i.jsx)("img",{alt:e.id,src:e.image})})}),Object(i.jsxs)("div",{className:"cart_product_right",children:[Object(i.jsx)("p",{className:"cart_product_title",children:e.title}),Object(i.jsxs)("p",{className:"cart_product_price",children:["\u20b9 ",e.price*e.quantity]}),("Sambar Powder"===e.title||"Rasam Powder"===e.title)&&Object(i.jsxs)("p",{children:["Quantity - ",e.quantityValue]}),("Besan Laddoo"===e.title||"Gulab Jamun"===e.title)&&Object(i.jsxs)("p",{children:["Quantity - ",e.quantity]}),Object(i.jsx)("button",{onClick:function(){n({type:"REMOVE_FROM_BASKET",id:e.id})},id:"cart_product_button",className:"cart_product_button",children:"Remove From Cart"})]})]})},M=(t(56),t(13)),K=t(16),z=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return e+Number(a.price)*a.quantity}),0)},G=function(e,a){switch(a.type){case"ADD_TO_BASKET":return Object(K.a)(Object(K.a)({},e),{},{basket:[].concat(Object(M.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),i=Object(M.a)(e.basket);return t>=0?i.splice(t,1):console.warn("Can't remove this item from the basket!"),Object(K.a)(Object(K.a)({},e),{},{basket:i});case"REMOVE_ALL":return Object(K.a)(Object(K.a)({},e),{},{basket:[]});default:return e}};var Q=function(){var e=h(),a=Object(l.a)(e,1)[0].basket;return Object(i.jsxs)("div",{className:"cart",children:[Object(i.jsxs)("div",{className:"cart_left",children:[0===a.length&&Object(i.jsx)("h3",{id:"empty_cart",children:"Your shopping cart is empty."}),a.length>0&&Object(i.jsx)("h3",{className:"cart_title",children:"YOUR SHOPPING CART"}),null===a||void 0===a?void 0:a.map((function(e){return Object(i.jsx)(U,{id:e.id,title:e.title,category:e.category,price:e.price,image:e.image,quantity:e.quantity,quantityValue:e.quantityValue},a.indexOf(e))}))]}),Object(i.jsxs)("div",{className:"cart_right",children:[a.length>0&&Object(i.jsxs)("h4",{children:["Subtotal (",null===a||void 0===a?void 0:a.length," items) : \u20b9 ",z(a)]}),a.length>0&&Object(i.jsx)("div",{className:"checkout_div",children:Object(i.jsx)(u.b,{to:"/checkout",children:Object(i.jsx)("button",{className:"cart_button",children:"Proceed to Checkout"})})})]})]})},J=(t(57),t(30)),H=t.n(J),V=t(31),F=t.n(V),Y=function(){var e=Object(c.useRef)(null),a=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useRef)(null),s=Object(c.useRef)(null),r=Object(c.useRef)(null),o=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useRef)(null);Object(c.useEffect)((function(){e.current.focus()}),[]);var j=Object(c.useState)("India"),p=Object(l.a)(j,2),h=p[0],b=p[1];var g=Object(c.useState)("COD"),O=Object(l.a)(g,2),x=O[0],_=O[1];function v(e){var a=e.target.value;_(a)}function N(e){"Enter"===e.key&&t.current.focus()}var f={"Andhra Pradesh":["Visakhapatnam","Vijayawada","Guntur","Nellore","Kurnool","Kakinada","Rajamahendravaram","Kadapa","Tirupati","Anantapuram","Vizianagaram","Eluru","Chirala","Ongole","Adoni","Madanapalle","Machilipatnam","Tenali","Proddatur","Chittoor","Hindupur","Srikakulam","Bhimavaram","Guntakal","Dharmavaram","Gudivada","Narasaraopet","Tadipatri","Mangalagiri","Tadepalligudem","Amaravati","Chilakaluripet"],Goa:["Bicholim","Canacona","Cuncolim","Curchorem","Mapusa","Margao","Mormugao","Panaji","Pernem","Ponda","Quepem","Sanguem","Sanquelim","Valpoi"],Gujarat:["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar","Junagadh","Gandhinagar","Gandhidham","Anand","Navsari","Morbi","Nadiad","Surendranagar","Bharuch","Mehsana","Bhuj","Daman","Porbandar","Palanpur","Valsad","Vapi","Gondal","Veraval","Godhara","Patan","Kalol, Gandhinagar","Dahod","Botad","Amreli","Deesa","Jetpur"],Karnataka:["Bengaluru","Hubli-Dharwad","Mysuru","Kalaburagi","Mangaluru","Belagavi","Davanagere","Ballari","Vijayapura","Shivamogga","Tumakuru","Raichur","Bidar","Hosapete","Gadag-Betageri","Robertsonpete","Hassan","Bhadravati","Chitradurga","Udupi","Kolara","Mandya","Chikkamagaluru","Gangavati","Bagalkote","Ranebennuru"],Kerala:["Alleppey","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Munnar","Palakkad","Thekkady","Thiruvananthapuram","Thrissur","Wayanad","Varkala"],Maharashtra:["Mumbai","Pune","Nagpur","Nashik","Thane","Aurangabad","Solapur","Dhule","Amaravati","Malegoan","Kolhapur","Nanded-Waghela","Sangli","Bhiwandi-Nizampur","Akola","Latur","Jalgaon","Ahmednagar","Miraj","Ichalkaranji","Chandrapur","Parbhani","Jalna","Bhusawal","Navi Mumbai Panvel Raigad","Panvel City","Satara","Beed","Yavatmal","Kamptee","Gondia","Barshi","Achalpur","Osmanabad","Nandurbar","Wardha","Udgir","Hinganghat"],Punjab:["Ludhiana","Amritsar","Jalandhar","Patiala","Bathinda","Hoshiarpur","Hoshiarpur","Mohali","Batala","Pathankot","Moga","Abohar","Malerkotla","Khanna","Phagwara","Muktsar","Barnala","Rajpura","Firozpur","Kapurthala","Sunam"],Rajasthan:["Jaipur","Jodhpur","Ajmer","Udaipur","Kota","Bikaner","Bhilwara","Alwar","Bharatpur","Sri Ganganagar","Sikar","Pali","Hanumangarh"],"Tamil Nadu":["Chennai","Coimbatore","Madurai","Tiruchirappalli","Tiruppur","Salem","Erode","Tirunelveli","Vellore","Thoothukkudi","Dindigul","Thanjavur","Ranipet","Sivakasi","Karur","Udhagamandalam","Hosur","Nagercoil","Kancheepuram","Kumarapalayam","Karaikkudi","Neyveli","Cuddalore","Kumbakonam","Tiruvannamalai","Pollachi","Rajapalayam","Gudiyatham","Pudukkottai","Vaniyambadi","Ambur","Nagapattinam"],Telangana:["Hyderabad","Warangal","Mahabubnagar","Khammam","Ramagundam","Nizamabad","Suryapet","Nalgonda","Miryalaguda","Karimnagar","Adilabad","Jagityal","Nirmal"],"West Bengal":["Kolkata","Asansol","Siliguri","Durgapur","Bardhaman","English Bazar","Baharampur","Habra","Kharagpur","Shantipur","Dankuni","Dhulian","Ranaghat","Haldia","Raiganj","Krishnanagar","Nabadwip","Medinipur","Jalpaiguri","Balurghat","Basirhat","Bankura","Chakdaha","Darjeeling","Alipurduar","Purulia","Jangipur","Bangaon","Cooch Behar"]};return Object(i.jsxs)("div",{onLoad:function(){document.getElementById("stateSelect").selectedIndex=0,document.getElementById("citySelect").selectedIndex=0},className:"container contact ss-item-required",children:[Object(i.jsx)("h4",{children:"Order Now"}),Object(i.jsxs)("form",{className:"text-center",children:[Object(i.jsx)("input",{name:"name",onKeyDown:function(e){"Enter"===e.key&&o.current.focus()},type:"text",id:"defaultContactFormName",ref:e,className:"form-control mb-4 border-required",placeholder:"Name"}),Object(i.jsx)("input",{name:"email",onKeyDown:function(e){"Enter"===e.key&&d.current.focus()},type:"email",id:"defaultContactFormEmail",ref:o,className:"form-control mb-4 border-required",placeholder:"E-mail"}),"India"===h&&Object(i.jsx)("input",{onKeyDown:N,placeholder:"10-Digit Contact Number",id:"defaultContactFormPhone",ref:d,className:"border-required phone",type:"",name:"phone",pattern:"[0-9]{10}",maxLength:"10"}),"Other"===h&&Object(i.jsx)("input",{onKeyDown:N,placeholder:"Contact Number with Country Code",id:"defaultContactFormPhone1",red:d,className:"border-required phone",type:"number",name:"phone"}),Object(i.jsxs)("div",{className:"locationInput",children:[Object(i.jsxs)("select",{name:"country",onKeyDown:function(e){"Enter"===e.key&&s.current.focus()},onChange:function(e){var a=e.target.value;b(a)},ref:t,id:"countrySelect",className:"locationInputs",children:[Object(i.jsx)("option",{value:"India",children:"India"}),Object(i.jsx)("option",{value:"Other",children:"Other"})]}),"India"===h&&Object(i.jsxs)("select",{onKeyDown:function(e){"Enter"===e.key&&n.current.focus()},name:"state",ref:s,defaultValue:"State",className:"locationInputs",id:"stateSelect",size:"1",onChange:function(e){return function(e){if(0===e.length)document.getElementById("citySelect").innerHTML="<option></option>";else{var a,t="";for(a in f[e])t+="<option>"+f[e][a]+"</option>";document.getElementById("citySelect").innerHTML=t}}(e.target.value)},children:[Object(i.jsx)("option",{className:"states",disabled:!0,children:"State"}),Object(i.jsx)("option",{className:"states",children:"Andhra Pradesh"}),Object(i.jsx)("option",{className:"states",children:"Goa"}),Object(i.jsx)("option",{className:"states",children:"Gujarat"}),Object(i.jsx)("option",{className:"states",children:"Karnataka"}),Object(i.jsx)("option",{className:"states",children:"Kerala"}),Object(i.jsx)("option",{className:"states",children:"Maharashtra"}),Object(i.jsx)("option",{className:"states",children:"Punjab"}),Object(i.jsx)("option",{className:"states",children:"Rajasthan"}),Object(i.jsx)("option",{className:"states",children:"Tamil Nadu"}),Object(i.jsx)("option",{className:"states",children:"Telangana"}),Object(i.jsx)("option",{className:"states",children:"West Bengal"})]})]}),Object(i.jsxs)("div",{className:"locationInput",children:["India"===h&&Object(i.jsxs)("select",{name:"city",onKeyDown:function(e){"Enter"===e.key&&r.current.focus()},defaultValue:"City",className:"locationInputs",ref:n,id:"citySelect",size:"1",children:[Object(i.jsx)("option",{disabled:!0,children:"City"}),Object(i.jsx)("option",{})]}),"India"===h&&Object(i.jsx)("input",{onKeyDown:function(e){"Enter"===e.key&&a.current.focus()},placeholder:"PINCODE",id:"defaultContactFormPin",ref:r,className:"border-required pincode locationInputs",type:"",name:"pin",pattern:"[0-9]{6}",maxLength:"6"})]}),Object(i.jsx)("input",{type:"text",name:"address",onKeyDown:function(e){"Enter"===e.key&&m.current.focus()},id:"defaultContactFormAddress",ref:a,className:"form-control mb-4 border-required address",placeholder:"Your Residential Address"}),"Other"===h&&Object(i.jsx)("p",{className:"international_shipping_note",children:"Note : Please mention the country, state and city in the address field in case you want the product to be shipped out of India."}),Object(i.jsxs)("div",{className:"payment_left",children:[Object(i.jsxs)("div",{className:"payment_options",children:[Object(i.jsxs)("div",{className:"form-check form-check-inline payment_option",children:[Object(i.jsx)("input",{className:"form-check-input check_input",onChange:v,type:"radio",name:"payment",id:"inlineRadio1",value:"COD"}),Object(i.jsxs)("label",{className:"form-check-label input_label",htmlFor:"inlineRadio1",children:[Object(i.jsx)(H.a,{})," - Cash On Delivery"]})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline payment_option",children:[Object(i.jsx)("input",{className:"form-check-input check_input",onChange:v,type:"radio",name:"payment",id:"inlineRadio2",value:"Online"}),Object(i.jsxs)("label",{className:"form-check-label input_label",htmlFor:"inlineRadio2",children:[Object(i.jsx)(F.a,{})," - Google Pay / PhonePe / Paytm"]})]})]}),"Online"===x&&Object(i.jsxs)("p",{className:"gpay_order",children:["Your order will be dispatched once you complete the online payment towards :-",Object(i.jsx)("br",{}),Object(i.jsx)("br",{})," AIGIRI FOODS - +91 9164187714",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"GRAND TOTAL will be displayed in the invoice."]})]}),Object(i.jsx)(u.b,{to:"/invoice",children:Object(i.jsx)("button",{onMouseDown:function(t){var i=String(e.current.value),c=String(a.current.value),l=String(n.current.value),m=String(s.current.value),u=String(h),j=Number(r.current.value),p=String(o.current.value),b=String(d.current.value);localStorage.setItem("srName",i),localStorage.setItem("srAddress",c),localStorage.setItem("srCity",l),localStorage.setItem("srState",m),localStorage.setItem("srCountry",u),localStorage.setItem("srPincode",j),localStorage.setItem("srEmail",p),localStorage.setItem("srPhone",b),localStorage.setItem("srPayment",x),t.preventDefault()},ref:m,type:"submit",className:"contact-btn",children:"CONTINUE"})})]})]})};t(58);var W=function(){var e=h(),a=Object(l.a)(e,1)[0].basket,t="";null===a||void 0===a||a.map((function(e){return t+="\n"+e.title+"\t|\t"+e.quantityValue+"\t|\t"+String(e.quantity*e.price)}));var c=new Headers;c.append("Content-Type","application/json");var n=JSON.stringify({email:"foodsaigiri@gmail.com",password:"foodsaigirifoods"});fetch("https://apiv2.shiprocket.in/v1/external/auth/login",{method:"POST",headers:c,body:n,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){var a=JSON.parse(e).token;localStorage.setItem("TOKEN",a)})).catch((function(e){return console.log("error",e)}));var s,r=(new Date).toLocaleDateString("en-CA"),d=localStorage.getItem("srName"),m=localStorage.getItem("srAddress"),u=localStorage.getItem("srCity"),j=localStorage.getItem("srState"),p=localStorage.getItem("srCountry"),b=localStorage.getItem("srPincode"),g=localStorage.getItem("srEmail"),O=localStorage.getItem("srPhone"),x=z(a),_=localStorage.getItem("srPayment");switch(j){case"Karnataka":case"Andhra Pradesh":s=100;break;default:s=100}var v=a.map((function(e){return{name:e.title,sku:e.id+e.id+e.id+e.id,units:1,selling_price:e.price}}));return Object(i.jsxs)("div",{className:"invoice_temp",children:[Object(i.jsxs)("form",{className:"invisible_form",method:"POST",action:"https://formsubmit.co/tejas.muthya37@gmail.com",children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{onClick:function(){window.print()},className:"generate_invoice_button",children:"Download A Copy"}),Object(i.jsx)("button",{type:"submit",className:"confirm_order_button",onMouseDown:function(e){var t=new Headers,i=localStorage.getItem("TOKEN");t.append("Content-Type","application/json"),t.append("Authorization","Bearer "+i);var c=(new Date).toLocaleDateString("en-CA")+" "+(new Date).toLocaleTimeString("en-US",{hour12:!1}).slice(0,5),n=localStorage.getItem("srName"),s=localStorage.getItem("srAddress"),r=localStorage.getItem("srCity"),l=localStorage.getItem("srState"),o=localStorage.getItem("srCountry"),d=localStorage.getItem("srPincode"),m=localStorage.getItem("srEmail"),u=localStorage.getItem("srPhone"),j=z(a),p=JSON.stringify({order_id:"123-999",order_date:c,pickup_location:"Primary",address:"Bengaluru, Karnataka, India",address_2:"JP Nagar, 8th Phase",city:"Bangalore",billing_customer_name:n,billing_last_name:"",billing_address:s,billing_city:r,billing_pincode:d,billing_state:l,billing_country:o,billing_email:m,billing_phone:u,shipping_is_billing:!0,order_items:Object(M.a)(v),payment_method:"Prepaid",sub_total:j,length:10,breadth:15,height:20,weight:2.5});fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",{method:"POST",headers:t,body:p,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)})),e.preventDefault()},children:"Confirm Order"})]}),Object(i.jsx)("input",{name:"NAME",type:"hidden",value:d}),Object(i.jsx)("input",{name:"EMAIL",type:"hidden",value:g}),Object(i.jsx)("input",{name:"CONTACT",type:"hidden",value:O}),Object(i.jsx)("input",{name:"COUNTRY",type:"hidden",value:p}),Object(i.jsx)("input",{name:"STATE",type:"hidden",value:j}),Object(i.jsx)("input",{name:"CITY",type:"hidden",value:u}),Object(i.jsx)("input",{name:"PINCODE",type:"hidden",value:b}),Object(i.jsx)("input",{name:"ADDRESS",type:"hidden",value:m}),Object(i.jsx)("input",{type:"hidden",name:"YOUR-ORDER",value:t}),Object(i.jsx)("input",{type:"hidden",name:"PAYMENT-METHOD",value:_}),Object(i.jsx)("input",{type:"hidden",name:"CART-TOTAL",value:x}),Object(i.jsx)("input",{type:"hidden",name:"SHIPPING-COST",value:s}),Object(i.jsx)("input",{type:"hidden",name:"GRAND-TOTAL",value:x+s}),"Online"===_&&Object(i.jsx)("input",{type:"hidden",name:"NOTICE",value:"Your order will be dispatched once you complete your online payment of \u20b9 "+(x+s)+" towards AIGIRI FOODS - +91 9164197714"}),Object(i.jsx)("input",{type:"hidden",name:"_subject",value:"Your order from Aigiri Foods"}),Object(i.jsx)("input",{type:"hidden",name:"_autoresponse",value:"Thank you for shopping with Aigiri Foods. This is a confirmation mail that we have successfully received your order."})]}),Object(i.jsxs)("div",{className:"invoice_temp_top",children:[Object(i.jsxs)("div",{className:"temp_top_left",children:[Object(i.jsx)("h2",{className:"invoice_header",children:"INVOICE"}),Object(i.jsx)("p",{className:"invoice_no",children:"No. 343434"})]}),Object(i.jsxs)("div",{className:"temp_top_right",children:[Object(i.jsx)("img",{alt:"",className:"aigiri_logo",src:o}),Object(i.jsx)("p",{className:"invoice_no",children:r})]})]}),Object(i.jsxs)("div",{className:"invoice_temp_mid",children:[Object(i.jsxs)("table",{className:"item_table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"item_table_headers",children:[Object(i.jsx)("th",{children:"ITEM"}),Object(i.jsx)("th",{children:"QUANTITY"}),Object(i.jsx)("th",{children:"PRICE"})]})}),Object(i.jsx)("tbody",{children:a.map((function(e){return Object(i.jsxs)("tr",{className:"item_data",children:[Object(i.jsx)("td",{children:e.title}),Object(i.jsx)("td",{className:"quantity_table",children:e.quantityValue}),Object(i.jsxs)("td",{children:["\u20b9 ",e.price*e.quantity]})]})}))})]}),Object(i.jsxs)("div",{className:"temp_mid_total",children:[Object(i.jsxs)("div",{className:"total_left",children:[Object(i.jsx)("p",{children:"CART TOTAL"}),Object(i.jsx)("p",{children:"SHIPPING COST"}),Object(i.jsx)("p",{className:"payment_method",children:"PAYMENT METHOD"}),Object(i.jsx)("p",{className:"grand_total total_last_child",children:"GRAND TOTAL"})]}),Object(i.jsxs)("div",{className:"total_mid",children:[Object(i.jsx)("p",{children:"-"}),Object(i.jsx)("p",{children:"-"}),Object(i.jsx)("p",{children:"-"}),Object(i.jsx)("p",{className:"total_last_child last_dash",children:"-"})]}),Object(i.jsxs)("div",{className:"total_right",children:[Object(i.jsxs)("p",{children:["\u20b9 ",z(a)]}),Object(i.jsxs)("p",{children:["\u20b9 ",s]}),Object(i.jsx)("p",{children:_}),Object(i.jsxs)("p",{className:"total_last_child grand_total_rupee",children:["\u20b9 ",z(a)+100]})]})]})]}),Object(i.jsxs)("div",{className:"invoice_temp_bottom",children:[Object(i.jsxs)("div",{className:"temp_bottom_left",children:[Object(i.jsx)("p",{className:"payable_to",children:"PAYABLE TO"}),Object(i.jsx)("p",{className:"name_phone",children:"AIGIRI FOODS"}),Object(i.jsx)("p",{className:"name_phone",children:"+91 9164187714 "}),Object(i.jsx)("p",{className:"address",children:"Girinagar, Bangalore - 560085, Karnataka"})]}),Object(i.jsxs)("div",{className:"temp_bottom_right",children:[Object(i.jsx)("p",{className:"payable_to",children:"SHIPPED TO"}),Object(i.jsx)("p",{className:"name_phone customer_name",children:d}),Object(i.jsx)("p",{className:"address",children:m})]})]})]})};var X=function(){var e=h(),a=Object(l.a)(e,1)[0].basket;return Object(i.jsx)(u.a,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(E.c,{children:[Object(i.jsxs)(E.a,{path:"/recipe/:id",children:[Object(i.jsx)(b,{}),Object(i.jsx)(B,{}),Object(i.jsx)(C,{})]}),Object(i.jsxs)(E.a,{path:"/about",children:[Object(i.jsx)(b,{}),Object(i.jsx)(q,{}),Object(i.jsx)(C,{})]}),(null===a||void 0===a?void 0:a.length)>0&&Object(i.jsxs)(E.a,{path:"/checkout",children:[Object(i.jsx)(b,{}),Object(i.jsx)(Y,{}),Object(i.jsx)(C,{})]}),0===(null===a||void 0===a?void 0:a.length)&&Object(i.jsx)(E.a,{path:"/checkout",children:Object(i.jsx)("h3",{id:"empty_cart",children:"Your shopping cart is empty."})}),Object(i.jsxs)(E.a,{path:"/cart",children:[Object(i.jsx)(b,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(C,{})]}),(null===a||void 0===a?void 0:a.length)>0&&Object(i.jsx)(E.a,{path:"/invoice",children:Object(i.jsx)(W,{})}),0===(null===a||void 0===a?void 0:a.length)&&Object(i.jsx)(E.a,{path:"/invoice",children:Object(i.jsx)("h3",{id:"empty_cart",children:"Your shopping cart is empty."})}),Object(i.jsxs)(E.a,{path:"/",children:[Object(i.jsx)(b,{}),Object(i.jsx)(y,{}),Object(i.jsx)(O,{}),Object(i.jsx)(T,{}),Object(i.jsx)(x,{}),Object(i.jsx)(C,{})]})]})})})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(p,{initialState:{basket:[],user:null},reducer:G,children:Object(i.jsx)(X,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.f7e14986.chunk.js.map