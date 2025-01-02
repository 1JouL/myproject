var total=0
    function enter(checkbox){
        
        if(checkbox.checked == true){
            total += parseInt (checkbox.value)
        }
        else{
            total -= parseInt (checkbox.value)
        }
        document.getElementById("demo").value = total
    }

    function enter1(radio){
        var total1=0
        if(radio.checked == true){
            total1 += parseInt(radio.value)
        }
        document.getElementById("demo1").value = total1
    }
    function enter2(radio){
        var total2=0
        if(radio.checked == true){
            total2 += parseInt (radio.value)
        }
        else{
            total2 -= parseInt (radio.value)
        }
        document.getElementById("demo2").value = total2
    }



    function calculate(){
        alert("18% Tax Add")
        var total =eval( document.getElementById("demo").value);
        var total1 =eval( document.getElementById("demo1").value);
        var total2 = eval( document.getElementById("demo2").value);
        var tax =eval( document.getElementById("demo5").value);
        var total3 = total + total1 + total2
       
        var total5= total3 *18 / 100

        document.getElementById("demo5").value=total5
        var result = total3+total5
        document.getElementById("demo4").value=result

    }