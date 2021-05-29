import rasam from "./rasam_powder.jpg";
import vangi from "./vangi_powder.png";
import methi from "./methi_powder.png";
import pchutney from "./pchutney_powder.png";
import chutney from "./chutney_powder.png";
import bisi from "./bisi_powder.png";
import mandakki from "./mandakki_puri.png";
import holige from "./holige.png";
import kayi_holige from "./kayi_holige.png";
import sakkare_holige from "./sakkare_holige.png";
import puliyogare from "./puliyogare_gojju.png";

const productsArray = [{id:"1",
    title:"ಬೇಸನ್ ಉಂಡೆ",
    category: "box",
    image:"https://cdn.shopify.com/s/files/1/0398/6545/0645/products/69724367_2483046198423304_3890100649064398848_o-removebg-preview_1024x1024.png?v=1593273118",
    price:"72",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"2",
    title:"ಪುರಿ ಉಂಡೆ",
    category: "box",
    image:"https://m.media-amazon.com/images/I/41hzY651KAL._AC_UL480_QL65_.jpg",
    price:"78",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"3",
    title:"ಚೂಡಾ ಅವಲಕ್ಕಿ",
    category: "powder",
    image:"https://krushikendra.com/image/cache/catalog/Homemade%20food/farali-poha2-800x800.png",
    price:"250",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"4",
    title:"ಚಕ್ಕುಲಿ",
    category: "box",
    image:"https://m.media-amazon.com/images/I/51oJb+Kz2TS._AC_UL480_QL65_.jpg",
    price:"36",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"5",
    title:"ಬೆಣ್ಣೆ ಮುರುಕ್ಕು",
    category: "powder",
    image:"https://m.media-amazon.com/images/I/61Bhr+kmuUL._AC_UL480_QL65_.jpg",
    price:"300",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"6",
    title:"ಕಜ್ಜಾಯ",
    category: "box",
    image:"https://cdn.shopify.com/s/files/1/0398/6545/0645/products/4-12-removebg-preview_1024x1024.png?v=1593271672",
    price:"60",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"7",
    title:"ಕರ್ಜಿಕಾಯಿ",
    category: "box",
    image:"https://cdn.shopify.com/s/files/1/0398/6545/0645/products/7-13-removebg-preview_1024x1024.png?v=1593120521",
    price:"60",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"8",
    title:"ನಿಪ್ಪಟ್ಟು",
    category: "box",
    image:"https://m.media-amazon.com/images/I/61IJJ+JrXXL._AC_UL480_QL65_.jpg",
    price:"36",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"9",
    title:"ಮಂಡಕ್ಕಿ",
    category: "powder",
    image: mandakki,
    price:"50",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"10",
    title:"ತೆಂಗೊಳಲು",
    category: "box",
    image:"https://m.media-amazon.com/images/I/71+fPkLGf5L._AC_UL480_QL65_.jpg",
    price:"60",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"11",
    title:"ಹೋಳಿಗೆ",
    category: "box",
    image:holige,
    price:"96",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"12",
    title:"ಕಾಯಿ ಹೋಳಿಗೆ",
    category: "box",
    image:kayi_holige,
    price:"108",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"13",
    title:"ಸಕ್ಕರೆ ಹೋಳಿಗೆ",
    category: "box",
    image:sakkare_holige,
    price:"120",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"14",
    title:"ಸಾರಿನ ಪುಡಿ",
    category: "powder",
    image:rasam,
    price:"600",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"15",
    title:"ಹುಳಿ ಪುಡಿ",
    category: "powder",
    image:"https://m.media-amazon.com/images/I/51I4NPKCehL._AC_UL480_QL65_.jpg",
    price:"600",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"16",
    title:"ಮೆಂತ್ಯದ ಹಿಟ್ಟು",
    category: "powder",
    image:methi,
    price:"400",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"17",
    title:"ಚಟ್ನಿ ಪುಡಿ",
    category: "powder",
    image:chutney,
    price:"400",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"18",
    title:"ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ",
    category: "powder",
    image:pchutney,
    price:"400",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"19",
    title:"ಬಿಸಿ ಬೇಳೆ ಬಾತ್ ಪುಡಿ",
    category: "powder",
    image:bisi,
    price:"600",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"20",
    title:"ವಾಂಗಿ ಬಾತ್ ಪುಡಿ",
    category: "powder",
    image:vangi,
    price:"600",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"21",
    title:"ಗೊಜ್ಜಿನ ಪುಡಿ",
    category: "powder",
    image:rasam,
    price:"600",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"22",
    title:"ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು",
    category: "powder",
    image:puliyogare,
    price:"400",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}]

export default productsArray;
