let shopList = [
  {
    id: 1,
    name: "jeans shirt",
    brand: "BRAND-buffelo",
    size: "medium",
    color: "Blue",
    price: 999,
    image: "https://i.pinimg.com/originals/25/04/fa/2504fac12ee93b3f3bfb643ab58f0488.jpg",
    
  },
  {
    id: 2,
    name: "cotton shirt",
    brand: "BRAND-us polo",
    size: "large",
    color: "white",
    price: 900,
    image: "https://cdn.luxe.digital/media/2019/09/12085003/casual-dress-code-men-style-summer-luxe-digital.jpg",
    
  },

  {
    id: 3,
    name: "tshirt",
    brand: "BRAND-us polo",
    size: "large",
    color: "grey",
    price: 990,
    image: "https://cdn.luxe.digital/media/2019/09/12084906/casual-dress-code-men-street-style-luxe-digital-1.jpg",
    
  },

  {
    id: 4,
    name: "jacket",
    brand: "BRAND-tommy",
    size: "medium",
    color: "black",
    price: 1599,
    image: "https://www.business-casualforwomen.com/wp-content/uploads/2015/11/casual-dress-outfits-for-men-best-outfits-5.jpg",
    
  },

  {
    id: 5,
    name: "shirt",
    brand: "BRAND-us polo",
    size: "medium",
    color: "white",
    price: 740,
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-922984664-1545417921.jpg",
    
  },

  {
    id: 6,
    name: "full hand tshirt",
    brand: "BRAND-calvin kalvin",
    size: "large",
    color: "red ",
    price: 930,
    image:"https://cdn.luxe.digital/media/2019/09/12085322/smart-casual-dress-code-men-knitwear-style-luxe-digital.jpg",
    
  },
  {
    id: 7,
    name: "tshirt",
    brand: "BRAND-tommy",
    size: "large",
    color: "blue",
    price: 899,
    image: "https://target.scene7.com/is/image/Target//GUEST_86e60c18-1b5e-486d-8ced-0774505dca9d",
    
  },
  {
    id: 8,
    name: "jacket",
    brand: "BRAND-calvin kalvin ",
    size: "medium",
    color: "brown",
    price: 1499,
    image: "https://cdn.luxe.digital/media/2019/09/12085344/smart-casual-dress-code-men-summer-style-luxe-digital.jpg",
    
  },
  {
    id: 9,
    name: "cap tshirt",
    brand: "BRAND-denim",
    size: "medium",
    color: "navy blue",
    image: "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPHVBK-MENS-FUOSM-1160440476FD4BB/1589962166138_0..jpg?imwidth=282&impolicy=hq",
    price: 499,
    
  },
  {
    id: 10,
    name: "tshirt",
    brand: "BRAND-denim",
    size: "small",
    color: "violet",
    price: 599,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4nawBB2I1jQFVzJP2a9BcDM5eulChWvTYbg&usqp=CAU",
   
  },
  {
    id: 11,
    name: " fashion shirt",
    brand: "BRAND-tommy",
    size: "small",
    color: "pink",
    price: 399,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR8zkbytAuzT7or6ZSurrTbnjdsqWK-EuJXA&usqp=CAU",
   
  },
  {
    id: 12,
    name: "kurtha",
    brand: "BRAND-ramraj",
    size: "large",
    color: "dark red",
    price: 2999,
    image: "https://rukminim1.flixcart.com/image/332/398/k12go7k0/ethnic-set/y/2/g/44-vasmk051manprg-vastramay-original-imafkpks8khpygx9.jpeg?q=50",
    
  },
];

 let cart=[];
 let count=0;
 const displayList = (subLst, cCheck) => {
    
    let products = "";
    
    subLst.forEach((value, index) => {
      let {id, name, brand, size, color, price, image} = value
       
          products += `<div class="col-md-4 col-10 mx-auto">
            <div className="card border-primary mb-5 " style="width: 28rem; height: auto;" >
                        <img class="card-img-top" src=${image} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${brand} </h6>
                            <p> <strong>Size</strong>: ${size} <br/>
                                <strong>color</strong>: ${color} <br/>
                                <strong>price</strong>: ${price} <br/>
                                
                            </p>`;
                            (cCheck === undefined) ?
                              products +=`<button onclick="addCart(${id})" 
                                class="btn btn-outline-primary">add to cart</button>    
                               </div>
                              </div>
                            </div>` :
                            products +=`<button onclick="removeCart(${id})" 
                                class="btn btn-outline-primary">remove</button>
                                </div>
                                </div>
                                </div>`
    });   
    (cCheck === undefined) ?
      document.getElementById("bCard").innerHTML = products :
   
      document.getElementById("cart").innerHTML = products
   
      document.getElementById("cartimg").innerHTML = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAxlBMVEX///8mGBUREiQAAADa2tsbBwAlFhNzbGodCQAZAAAQAADk4+MMAAB+eXevrKq7ubchEQ34+fg9MS9GPToAABoVAAAfDQkAABcIAAAaAAAAABwQEiMLDSEAABP08/MxJSLRz85SS0mfm5pKSlSUlJonKDaOioiHgoDr6ulbU1HX1dXCv760sLB4cnCloqBnaHGcnKB5eYFycnoAAAyHiJAhITFMTVdmYF5hWllJPT0tHxxqZWQ6PEc0M0BZWWFiY2upqa8iIjB2rwjsAAAIfUlEQVR4nO2dD1viPAzAZYUp/wRkAxwDB9sEQYHNgd45hnz/L/UOkbYI8oKSFu7J7zk9QLTN1qZpkoaLCwRBEARBEARBEARBEARBEARBEARBEARBEAQ5YUrbkN2pX9NsP9xsofwyaMru2q/I3tUqxW2kcuq17M79guZdKvEdRdKR3b2fM6h9K1cMGcju3495rewSTE11ZXfwp5SLuwRLZNqyO/hTXr6fYgsqD7I7+FMGZKdg6t9z1fmlcnqnZCQpu4c/pVsmqc1FjAqWO9+1rDR4KX/lhkqWPuOlbAtZOvOKZdl9OSrNO5VOsvO3hnle6LpNLNl9OSr3Ol2iz1d7bKNPTcjUpey+HJXs7WqSFW9k9+W43FGFr16KJH8NbHYz7ZG4SgkknSN5UD08yOy0tCDJlCEls3ZuQGHR3wAFK+22+kFRQdfOu907UFDSeUDB8rfyBKu0AAW7lqc9YssbUH0kJU4yUIdEs6iyllQRsOZgN4EPFSbWlQAqTLLaI6RgHWrg6+1uFp4u2wPmQB0tBWbgP0G2s4KtnOodqGssSe9Y8Q6ynRXM1gF2ZpaYR0cX4ehm1ql+D9sS0x45C7alD96uaHN92JbazD0gwoPPogi5LGxLnHvgBbalBdmrlVJUi8BNdZlz8QbeB2fR1lKv0G1Rv0ciAzw4Lni/mA4+8C9piKkGPJ0veN0B78kUp4DjxYXzPYNHrtiwr4AP+67IaEGTDnv1Flp7PFIVDLp9/qTFPPjQ8T/Opy4gUyFPo50Z0I1EzB+6PJMecFMxjzlh44OZ9n8FGKZJKhi0B7/H9BSkI2cFF//LwWoP5joSoTsEGvhP1NmXK4A29IkwXcVM+4yQ/IsCnWSw8b+uKsy0X5IlNP4Hag9wbgERuiMmTa/kFaSB32ZWqaCstFcx2QNC9xEfMPcApIFfYrqDCEqQ7NOF8wowGtelU1kV4umLaXJNwi3R7PKJS74QMkjaAt0CK5iBD2gSPAh0C6wQ4h6gZoBaEZZc3WNL9B+oNrJiTfsl3b/MyQLVBtv2iYnrLOHcA1Bb2w6bx9AbdY48fKucaS/ALbCiAD5Omgm6ViYEprNy7gEgA7+XE7OF+IrOrieMLr6mlw7e4czTgjbwRbsFVoDH/1rMaoMP6nD0gbMHumyspyH+/vcNA8f/uNCHgMApD03wU0EMfBmm/RK2bycQ+3bgP78D4EvKcqgygs9NcpMAIGWGj/gJPkbTrUAa+DLPZHBL9PEXGrERv3We6PS+7VwfmUcuIccSLRgz5hLp3JHJsKMmqvAz1z0hec8SzhaWuKxWOMRE/Nb5I+JwgUi3wAqmuQARa9ovYe4BOCpg3r0dZAUcLpBzyDUFrj2IUK8A5W13DYnfoqaJpPIazMBPFGtHh+hvAv2Ja7AAVrHVLxwbS15pjS5L8EtI6wQEEoLEghAf1hfEQHgihiAsanucb3mgrXSLLHsgeVwkmIg8THuoeua4qFIHd353MaSfoyZU8iqxyssjpIFfk2MofgB6eljVJZb1qkEa+DIL8zxB7qJFe+15kgTwlslwC1D+p/zdb0iJS8jZRpsAOauKNUuqYBf9G5JJHx29pkuWK8Zq549OR2iqAIIgCBg/3muccmX27vVT66b8cn/wmahSv/NQLj90+icpXKlTzKUqxWJKz70eJtrjDdHjX6ykyY2EcNj/kVRpXlcidUgd8tILs8qK5OXUbpqlr9mM+8cTSq21rY/eOi3JmuoXW5jsaxNdfgnSZ06riujbV7eOmtlvY1/Y2PfI3F9usMX5kdnPF7NZ/++k6qN2Nl0E+5V32laKUvZGjGdb5f+9zgFsSz04oc8J4M66cBd+n7my7SMDII8RHkh2Wz3J3D5r2cOWT6+AL4CyN6wyMi/YPmWtT1wwrq7CgUNxW+bBKdXDbm1eeFXfxy24rfLwXmNYEO3N/u2XkJfcou6hi6EdQnfTI0z2M9Q3Jxl8zbBDuP965St72g+9TZPqtD5i5MsHoqi1fdNq2uuSqbLyjL6jWeZtiEpmf0u2ww9jVVJe2A6ab3S/qObuDkmDGpDVMqjqtRPSiJT+H5LRU3qG3LYP2yxmL0lNT6X1HLk8IYXIk73uXOYH1uG/2CzcPz3dF871I5cQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQhOfItUVOhgvyj3Kh/KOgYOfGp2Dm55fC/a8omqGY7NnikcaenjhLwczQVEx3vHw8rS9/VK9GUcMNqSi2WZ9H03ORbCmYMZxp1aDaqNarDRIoZqOhmQ3yHuOPSIMQ0yRk2iMkDGzBgtW5h/Xv37Z8H/+Gzzs2Dxpzz3MC4jm+50wdx7NHk+SEkGE3cnqWGyaTdj9MuqHYO2bWF1NhOR3MGGX1bPnK4okW/6ubxuKn2uKJYvCCKQ1HGfp+1feHhASGoxDfj55DK+n5jmuR2Xs/JG63p5mmWLk8zYv764ZKPEvGwTDUXMMYB1o8bZT54pvpDp1x4M1GfjQM3OFwGEw9r8oLps2iIHJmQ8/WGoE5eq4Og4nxTIyk50wKJCxYzw03a80Fj8Oq50XvTvxlB8FoEkTvked5s/dAsz078AJ/5PmKZ048EtjRs2P7XvBu2MGaYIr57o0D03Udcz6b+ZHiRBNj5AdWPPySft9zHr3QspPPYgUz7fepM3FsZxILZsQy+kPHsUdBOPGiIPDcwPGfA3vkBvWJ70wiJxjFd+dT260EM/y54Qae6QZ+Y0iGwXg6NSPHqzYi23Bmjed4SPrEDwXfsnjoTV0zrE7dsWuEc2UcmoY9HodaOJ6Ox8o81tm2O7FdbRqGkavNlWl9MlkXTDHimVnVPr40xaguZpPRqC5WLrMRz0etYWoSVjFT+dAYS8VhfuqL5Uuxkly+yn1fvn9dsH8NFOzc+GcF+w8QugoGs2orpAAAAABJRU5ErkJggg==" alt="cart" class="src"> <span style="color:black;">${count} </span>`;
    
}
displayList(shopList);




//search 
const searchprod = (srch) => {

  let searchLst = shopList.filter(ele => {
      return (ele.name.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
              (ele.brand.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
              (ele.color.toUpperCase().indexOf(srch.toUpperCase()) != -1);
              
  });
  displayList(searchLst);
}



//add to cart
const productid = (id) => shopList.find(ele => { return ele.id == id });
const cartCheck = (id) => cart.filter(ele => {return ele.id == id ? true : false });

const addCart = id  => {   
    
    let product = productid(id)
       
    if(cartCheck(id) == false){
        cart.push(product);
        count++;
    }
    else alert("product already in cart");
    displayList(cart, "cart");
}

//remove from cart
const removeCart = id => {
    let index = cart.findIndex(ele => {
        return ele.id == id;
    });
    cart.splice(index, 1);
    count--;
    displayList(cart, "cart");
}


//search products by minimum to maximum values
const filterpro = event => {

    event.preventDefault();
    let min = (document.getElementById("min").value != 0)? document.getElementById("min").value : 1000;
    let max = (document.getElementById("max").value != 0)? document.getElementById("max").value : 100000;
    let filterLst = shopList.filter(ele => {
        return (ele.price>=min && ele.price<=max);
    });
     
    displayList(filterLst);
    document.getElementById("min").value=""; document.getElementById("max").value=""
}