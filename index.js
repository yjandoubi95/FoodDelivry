var sandwiches=[{
    name:'thon',
    price:4000,
    image:""
},{
    name:'fromage',
    price:3200,
    image:""
},{
    name:'jambon',
    price:3000,
    image:""
},{
    name:'salami',
    price:3500,
    image:""
},{
    name:'escalope',
    price:5000,
    image:""
},{
    name:'viande',
    price:5500,
    image:""
},{
    name:'thon fromage',
    price:5000,
    image:""
},{
    name:'escalope fromage',
    price:6500,
    image:""
},{
    name:'viande fromage',
    price:7000,
    image:""
},{
    name:'double fromage',
    price:4000,
    image:""
},{
    name:'salami fromage',
    price:4500,
    image:""
},{
    name:'thon oeuf',
    price:4700,
    image:""
},{
    name:'oeuf fromage',
    price:4000,
    image:""
},{
    name:'thon oeuf fromage',
    price:5500,
    image:""
}]
var jus=[{name:'jus de citron ',
price:3500,
image:''},
{name:"jus de d'orange ",
price:4000,
image:''},{name:"jus d'ananas" ,
price:6000,
image:''},{name:'jus de fraise ',
price:5000,
image:''},{name:'jus de cerise ',
price:6000,
image:''},{name:'jus de mangue ',
price:5000,
image:''},{name:'jus de peche ',
price:4500,
image:''},{name:'jus de abricot ',
price:4500,
image:''},{name:'jus de menthe ',
price:2500,
image:''},]
var iceCream=[{name:'glace a la fraise',
price:3500,
image:''},{name:'glace a la vanille',
price:3500,
image:''},{name:'glace au citron',
price:3500,
image:''},{name:'glace a la pistache',
price:3500,
image:''},{name:'glace a la chwingum',
price:3500,
image:''},{name:'glace au chocolat',
price:3500,
image:''},{name:'glace a la noisette',
price:3500,
image:''}]

var pizza=[{
    type : 'Margerita' ,
    size : 'S',
    price : 5000 , 
    img : ''
},
{
    type : 'Margerita' ,
    size : 'M',
    price : 7000 , 
    img : ''
},
{
type : 'Margherita' ,
    size : 'L',
    price : 17000 ,
    img : '' 
},
{
    type : 'Siciliana' ,
    size : 'S',
    price : 6500 , 
    img : ''
},
{
    type : 'Siciliana' ,
    size : 'M',
    price : 9500 , 
    img : ''
},
{
type : 'Siciliana' ,
    size : 'L',
    price : 19000 , 
    img : ''
},
{
    type : 'Tonno' ,
    size : 'S',
    price : 6500 , 
    img : ''
},
{
    type : 'Tonno' ,
    size : 'M',
    price : 9500 , 
    img : ''
},
{
type : 'Tonno' ,
    size : 'L',
    price : 19000 , 
    img : ''
},
{
    type : 'Regina' ,
    size : 'S',
    price : 6500 , 
    img : ''
},
{
    type : 'Regina' ,
    size : 'M',
    price : 9500 , 
    img : ''
},
{
type : 'Regina' ,
    size : 'L',
    price : 19000 , 
    img : ''
},
{
    type : 'Peperoni' ,
    size : 'S',
    price : 8000 , 
    img : ''
},
{
    type : 'Peperoni' ,
    size : 'M',
    price : 11000 , 
    img : ''
},
{
type : 'Peperoni' ,
    size : 'L',
    price : 22000 , 
    img : ''
},
{
    type : 'Frutti Di Mare' ,
    size : 'S',
    price : 16000 , 
    img : ''
},
{
    type : 'Frutti Di Mare' ,
    size : 'M',
    price : 22000 , 
    img : ''
},
{
    type : 'Frutti Di Mare' ,
    size : 'L',
    price : 39000 , 
    img : ''
}]


var Crepe = [{

    type : 'Sweet crepes',
    name : 'Nutella', 
    price : 8000, 
    img : ''
},
{
    type : 'Sweet crepes',
    name : 'Nutella and Bananas', 
    price : 12000, 
    img : ''
},
{
    type : 'Sweet crepes',
    name : 'Apple Cinnamon Brown Sugar ', 
    price : 12000, 
    img : ''
}, 
{
    type : 'Sweet crepes',
    name : 'Smores Nutella', 
    price : 12000, 
    img : ''
    
},  
{
    type : 'Savory crepes',
    name : 'Cheese', 
    price : 12000, 
    img : ''
},
{
    type : 'Savory crepes',
    name : 'Ham and Cheese', 
    price : 12000, 
    img : ''
}, 
{
    type : 'Savory crepes',
    name : 'Chiken and cheese', 
    price : 12000, 
    img : ''
}, 
{
    type : 'Savory crepes',
    name : 'Thon', 
    price : 12000, 
    img : ''
},     
]
var restos=[{name:'baguette & baguette',adresse:'menzeh 6',menu:sandwiches,category:'sandwiches', 
img : ''},
{name:'paradice',adresse:'lac ',menu:iceCream,category:'ice cream', 
img : ''},
{name:'fruit land',adresse:'Ariana ',menu:jus,category:'jus', 
img : ''},
{name:'popolare',adresse:'Nasr',menu:pizza,category:'pizza', 
img : ''},
{name:'Crepe Factory',adresse:'menzeh 9',menu:Crepe,category:'crepe', 
img : ''}]
function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }