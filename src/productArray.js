import rasam from "./rasam_powder.jpg";
import vangi from "./vangi_powder.png";
import methi from "./methi_powder.png";
import pchutney from "./pchutney_powder.png";
import chutney from "./chutney_powder.png";
import bisi from "./bisi_powder.png";
import mandakki from "./mandakki_puri.png";
import kayi_holige from "./kayi_holige.png";
import sakkare_holige from "./sakkare_holige.png";
import puliyogare from "./puliyogare_gojju.png";
import tengol from "./tengol.jpg";


const productsArray = [{id:"1",
    title:"ಬೇಸನ್ ಉಂಡೆ",
    category: "box",
    image:"https://cdn.shopify.com/s/files/1/0398/6545/0645/products/69724367_2483046198423304_3890100649064398848_o-removebg-preview_1024x1024.png?v=1593273118",
    price:"72",
    desc: "Besan Laddoos are delicious sweet balls made with gram flour, sugar, ghee & cardamom. It makes for a delicious snack and is much loved by everyone since the combination of Ghee, Sugar and Flour is unbeatable in terms of it's taste! Aromatic, delicious and simply melt in the mouth.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"2",
    title:"ಪುರಿ ಉಂಡೆ",
    category: "box",
    image:"https://m.media-amazon.com/images/I/41hzY651KAL._AC_UL480_QL65_.jpg",
    price:"78",
    desc: "Puri Undes are traditional sweet balls made of puffed rice or Puri, roasted peanuts, roasted gram, dry coconut pieces and sweetened with jaggery. They are very easy to make and can be stored in airtight containers and served when required.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"3",
    title:"ಚೂಡಾ ಅವಲಕ್ಕಿ",
    category: "powder",
    image:"https://krushikendra.com/image/cache/catalog/Homemade%20food/farali-poha2-800x800.png",
    price:"250",
    desc: "Chivda Avalakki is an all time snack in most households in Karnataka, especially in North Karnataka. It can be served as breakfast or as an evening snack along with tea. It has many versions – fried, dry roasted and many more.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"4",
    title:"ಚಕ್ಕುಲಿ",
    category: "box",
    image:"https://m.media-amazon.com/images/I/51oJb+Kz2TS._AC_UL480_QL65_.jpg",
    price:"36",
    desc: "This classic deep fried South Indian snack includes a blend of rice flour, gram flour and spices for a light and crispy snack that’s easy to make at home. These instant Chaklis are a savory treat that you will love munching anytime!",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"5",
    title:"ಬೆಣ್ಣೆ ಮುರುಕ್ಕು",
    category: "powder",
    image:"https://m.media-amazon.com/images/I/61Bhr+kmuUL._AC_UL480_QL65_.jpg",
    price:"300",
    desc: "Benne Murukku is a deep fried crisp snack made with rice flour and gram flour. These are eaten through out the year and is most commonly made during fetivals. It is a lighter version of the traditional Chakli.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"6",
    title:"ಕಜ್ಜಾಯ",
    category: "box",
    image:"https://cdn.shopify.com/s/files/1/0398/6545/0645/products/4-12-removebg-preview_1024x1024.png?v=1593271672",
    price:"60",
    desc: "A traditional deep fried South Indian sweet recipe made with ground rice and jaggery. It is a popular dessert recipe made generally during festival celebrations like Deepavali, Navratri or for any auspicious occasion.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"7",
    title:"ಕರ್ಜಿಕಾಯಿ",
    category: "box",
    image:"https://cdn.shopify.com/s/files/1/0398/6545/0645/products/7-13-removebg-preview_1024x1024.png?v=1593120521",
    price:"60",
    desc: "An oval shaped sweet dumpling prepared especially during the festival of Ganesha Chaturthi. It is known as Karjikai in Kannada, Karanji in Maharashtra, Karachika in Tamil Nadu, Kajjikayalu in Andhra Pradesh and Gujiya in Gujarat.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"8",
    title:"ನಿಪ್ಪಟ್ಟು",
    category: "box",
    image:"https://m.media-amazon.com/images/I/61IJJ+JrXXL._AC_UL480_QL65_.jpg",
    price:"36",
    desc: "Nippattus are crispy deep fried rice crackers from Karnataka. These are eaten as an evening snack and are also made during festivals. Nippattu is similar to Thattai from Tamil Nadu and Chekkalu from Andhra Pradesh.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"9",
    title:"ಮಂಡಕ್ಕಿ",
    category: "pack",
    image: mandakki,
    price:"50",
    desc: "Mandakki Usli (Puffed Rice Upma) is a simple Karnataka style breakfast made with soaked puffed rice, onions, peanuts, and curry leaves and is typically relished along with Mirchi Bajji and Chai. It is also called Mandakki Oggarane or Mandakki Susla in Kannada.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"10",
    title:"ತೆಂಗೊಳಲು",
    category: "box",
    image:tengol,
    price:"60",
    desc: "Tengolu is a savory fried snack and a speciality of Karnataka. Just as good as Chakli / Murukku, this one is more popular in the region of Bangalore and Mysore. Delicious, golden brown, crispy, slightly tangy and salty!",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"12",
    title:"ಕಾಯಿ ಹೋಳಿಗೆ",
    category: "box",
    image:kayi_holige,
    price:"108",
    desc:"Kayi Holige is a popular sweet flatbread made with flour, coconut, jaggery and cardamoms. It is a festive delicacy and is made during Deepavali, Holi and Ganesha Chaturthi. Tastes best with Ghee or Milk.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"13",
    title:"ಸಕ್ಕರೆ ಹೋಳಿಗೆ",
    category: "box",
    image:sakkare_holige,
    price:"120",
    desc: "Sakkare Holige is a popular sweet flatbread made with flour, sugar, coconut and cardamoms. It is a festive delicacy and is made during Deepavali, Holi and Ganesha Chaturthi. Tastes best with Ghee or Milk.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"14",
    title:"ಸಾರಿನ ಪುಡಿ",
    category: "powder",
    image:rasam,
    price:"600",
    desc: "Base product for Rasam. Rasam, also known as Saaru in Kannada is a South Indian spiced soup made with tamarind, tomatoes (optional), spices, herbs and lentils (Optional). Mustard, Cumin, Fenugreek and Black Pepper are some of the key spices used.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}, {id:"15",
    title:"ಹುಳಿ ಪುಡಿ",
    category: "powder",
    image:"https://m.media-amazon.com/images/I/51I4NPKCehL._AC_UL480_QL65_.jpg",
    price:"600",
    desc: "Base product for Sambar. Sambar, also known as Huli in Kannada is a South Indian lentil and mix vegetable stew that is eaten with rice, mostly for lunch and dinner. It is also served in tiffin centres and restaurants as a side dish to Idly/Dosa.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"16",
    title:"ಮೆಂತ್ಯದ ಹಿಟ್ಟು",
    category: "powder",
    image:methi,
    price:"400",
    desc: "This dish is basically from North Karnataka and Maharashtra. Made from various mixed pulses and grains, this goes well with some hot rice topped with little ghee. Not being spicy or bitter, this is a very well suited dish for kids.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"17",
    title:"ಚಟ್ನಿ ಪುಡಿ",
    category: "powder",
    image:chutney,
    price:"400",
    desc: "A spiced lentil powder served as a condiment to enhance the taste of either hot steamed Rice, Idli or Dosa. Traditionally, it is prepared with Urad Dal, Chana Dal, Toor Dal, grated Coconut, Dried Red Chillies and some Curry Leaves.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"18",
    title:"ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ",
    category: "powder",
    image:pchutney,
    price:"400",
    desc: "A spiced powder served as a condiment to enhance the taste of either hot steamed Rice, Idli or Dosa. Traditionally, it is prepared with Peanuts, Bengal Gram, grated Coconut, dried Red Chillies and some Curry Leaves.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"19",
    title:"ಬಿಸಿ ಬೇಳೆ ಬಾತ್ ಪುಡಿ",
    category: "powder",
    image:bisi,
    price:"600",
    desc: "Base product for Bisi Bele Bath. Bisi Bele Bath is a traditional Karnataka Recipe that is prepared in most of the Kannada speaking homes. The authentic recipe is a no Onion and no Garlic recipe as it is a popular and special dish among the vegetarians who do not consume Onion and Garlic.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"20",
    title:"ವಾಂಗಿ ಬಾತ್ ಪುಡಿ",
    category: "powder",
    image:vangi,
    price:"600",
    desc: "Vangi Bath is a popular rice dish from Karnataka Cuisine. The term Vangi translates to brinjals and Bath means cooking together. Vangi Bath is a flavourful dish made with brinjals, spice powder, spices and herbs.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"21",
    title:"ಗೊಜ್ಜಿನ ಪುಡಿ",
    category: "powder",
    image:rasam,
    price:"600",
    desc: "Base product for Gojju. Gojju, Tamarind Curry is one of the most lip-smacking dish. Hunase Gojju acts as a side dish. It gives you a tangy flavour from the tamarind and the spice touch from the chillies that are used. It is a thick gravy consistency dish which can be mixed with rice or Khra Pongal, also known as Huggi in Kannada. ",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"},{id:"22",
    title:"ಪುಳಿಯೋಗರೆ ಗೊಜ್ಜು",
    category: "powder",
    image:puliyogare,
    price:"400",
    desc: "Base product for Puliyogare. Puliyogare is the South Indian version of a Tamarind Rice. Mostly served as an offering in temples, this dish is a treat to the taste buds with the sour kick of the tamarind and the crunch of the peanuts. It can be served along with some Curd or fresh Kosamabari. Puliyogare and Curd Rice form one of the favourite combinations of Karnataka.",
    length: "10",
    breadth: "10",
    height: "10",
    weight: "2"}]

export default productsArray;
