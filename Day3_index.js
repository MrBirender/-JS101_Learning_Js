
var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  
  // if(sales.includes("discount")){
  //         obj["discount"] = array[j]["discount"]
  //     }
  
  // console.log(sales[0]["stock"])
  var nSales = []
  function calculateSalesTotals(array){
      for(var j=0; j<array.length; j++){
          var obj = {}
          obj["item"] = array[j]["item"]
          obj["stock"] = array[j]["stock"]
          obj["original"] = array[j]["original"]
          if(array[j]["discount"] !== undefined){
              var sales1 = array[j]["original"] * (1-(array[j]["discount"]))
              obj["discount"] = array[j]["discount"]
              obj["sales"] = sales1
              obj["total"] = sales1 * array[j]["stock"]
              nSales.push(obj)
  
          }
          else{
              var sales = array[j]["original"]
              obj["sales"] = sales
              obj["total"] = sales * array[j]["stock"]
              nSales.push(obj)
              
          }   
      }
      return nSales
  }
  
  console.log(calculateSalesTotals(sales))