//```
// 
// 
// 

// ```
// var total_price = []
var obj = {
    // properties
        name: ["Rice", "Dal", "Salt"],
        quantity: [2, 3, 1],
        price: [60, 50, 20],
    // methods
        total: function(){
            var total = 0
            for(var j=0; j<=2; j++){
                var quant = this.quantity[j]
                var rup = this.price[j]
                var tp1 = quant*rup
                total += tp1
            }  
            return total  
        }
    }
    
    console.log(obj.total())
    