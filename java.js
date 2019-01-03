function jamberapa(){
    var jam;
            jam=prompt("jam piro ??","0");
            if(jam>=6 && jam <= 12){
            
                if(jam>=8.40 && jam<=10.20){
                    alert("Kuliah PBW");
                }
                else{
                    alert("Pagi");
                }
            }
            else if(jam>=12 && jam<= 15){
                alert("Siang");
            }
            else{
                alert("Malam");
            }

        var konfirmasi;
        konfirmasi = confirm("Apakah anda ingin menentukan jam lagi?");
        if(konfirmasi == true){
            document.location.href="index.html";
        }
        else{
            document.write("Terima Kasih");
        }
}