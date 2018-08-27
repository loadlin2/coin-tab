console.log('start!!!');

let crypto= [
{
	name :"Bitcoin",
	price:1388.37
},
{
                name :"Ehereum",
                price:716            
},
{
                name :"Litecoin",
                price:140
}
]

 

var v_id=document.getElementById('first');
let max=0;


crypto.forEach(function(tt){

if (max<parseFloat(tt.price)) {
     max=parseFloat(tt.price)
}
})

var i=0;
crypto.forEach(function(cr){
var bl_div=document.createElement('div');
bl_div.className='bl_div';
var new_p=document.createElement('p');

new_p.innerText=cr.name;

new_p.className='font_h';

bl_div.appendChild(new_p);



var new_ps=document.createElement('p');

new_ps.innerText=cr.price;

new_ps.className='font_h_s';

bl_div.appendChild(new_ps);



var new_div=document.createElement('div');

new_div.className='box_div' +i;

new_div.style.width=parseInt(cr.price/max*100) +'%';

bl_div.appendChild(new_div);



v_id.appendChild(bl_div);





i=i+1;

})