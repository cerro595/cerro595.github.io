function convertiTemperatura(tipo) {
    var temp = 1 * $('#temperatura').val();
    if(tipo==0){
        var temp_conv = (temp * 1.8) + 32;
        temp_conv = Math.round(temp_conv * 100) / 100;
        $('span#risultato').html(temp_conv + "°F");
    }
    if(tipo==1){
         var temp_conv = (temp - 32) / 1.8;
        temp_conv = Math.round(temp_conv * 100) / 100;
        $('span#risultato').html(temp_conv + "°C");
    } 
}
//---
function velocita_media() {
    var min = 1 * $('#min').val();
    var sec = 1 * $('#sec').val();
    var spazio = 1 * $('#spazio').val();
    
    sec += min * 60;
    var vms = spazio / sec;
    var vkmh = vms * 3.6;
    $('span#vms').html(vms);
    $('span#vkmh').html(vkmh);
}

