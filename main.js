$(document).ready(function(){

    var output = "";

    $("#outputBox").hide();

    $("#calculate").on("click", function(){
        var bill = $("#bill").val();
        var currency = $("#currency").find(":selected").val();
        var serviceQuality = $("#service").find(":selected").val();
        var people = $("#people").val();

        if(currency === "" || bill === "" || serviceQuality === "" || people === ""){
            $("#outputBox").show();
            $("#output").html("*All fields are required").css({"color":"#FF0000", "font-size":"1.6rem"});
            $("sup, small").hide();
        }else{
            var output = ((bill * serviceQuality) / people);
            output = Math.round(output * 100) / 100;
            output = output.toFixed(2);

            $("#outputBox").show();
            $("#output").html(output);
            if(currency === "INR"){
                $(".CurrencySymbol").html("₹");
            }else if(currency === "USD"){
                $(".CurrencySymbol").html("$");
            }else if(currency === "EUR"){
                $(".CurrencySymbol").html("€");
            }else if(currency === "AUD"){
                $(".CurrencySymbol").html("A$");
            }else{
                $(".CurrencySymbol").html("¥");
            }
        }
    });
});
