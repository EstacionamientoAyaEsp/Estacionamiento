function calculaTiempo (){
    fechaIni = document.getElementById("fechaInicio").value;
    fechaFin = document.getElementById("fechaTermino").value;
    
    fechaIni=fechaIni.split("-");
    fechaFin=fechaFin.split("-");
    
    horaIni = document.getElementById("horaInicio").value;
    horaFin = document.getElementById("horaTermino").value;
    
    hIni=(horaIni).split(":");
    hFin=(horaFin).split(":");

    fecha= new Date(fechaIni[2],fechaIni[1]-1,fechaIni[0],hIni[0],hIni[1],"00");
    fecha2= new Date(fechaFin[2],fechaFin[1]-1,fechaFin[0],hFin[0],hFin[1],"00");
    
    var minutos=fecha2-fecha;
    
    minutos=minutos/(1000*60);
    
    var dias= parseInt((minutos/60)/24);
    var horas = parseInt((minutos - dias*60*24)/60);
    var minutos= minutos-(dias*60*24)-(horas*60);
    
    var numDias;
    
    if (dias<2){
        numDias= dias + " día";
    }else{
        numDias= dias + " días";
    }
    if (dias<1){
        numDias="";
    }  

    var numHoras;
    
    if (horas<2){
        numHoras= horas + " hora";
    }else{
        numHoras= horas + " horas";
    }
    if (horas<1){
        numHoras="";
    }  
    
    var numMinutos;
    
    if (minutos<2){
        numMinutos= minutos + " minuto";
    }else{
        numMinutos= minutos + " minutos";
    }
    if (minutos<1){
        numMinutos="";
    }  
            
    document.getElementById('cnt_resultado').innerHTML ="El tiempo de uso es de: "+numDias+" "+numHoras+" "+numMinutos;
}

function calculaValor (){
    fechaIni = document.getElementById("fechaInicio").value;
    fechaFin = document.getElementById("fechaTermino").value;
    
    fechaIni=fechaIni.split("-");
    fechaFin=fechaFin.split("-");
    
    horaIni = document.getElementById("horaInicio").value;
    horaFin = document.getElementById("horaTermino").value;
    
    hIni=(horaIni).split(":");
    hFin=(horaFin).split(":");

    fecha= new Date(fechaIni[2],fechaIni[1]-1,fechaIni[0],hIni[0],hIni[1],"00");
    fecha2= new Date(fechaFin[2],fechaFin[1]-1,fechaFin[0],hFin[0],hFin[1],"00");
    
    var minutos=fecha2-fecha;
    
    minutos=minutos/(1000*60);
    
    var dias= parseInt((minutos/60)/24);
    var horas = parseInt((minutos - dias*60*24)/60);
    var minutos= minutos-(dias*60*24)-(horas*60);
    
        
    var valorDia = dias*15000;
    var valorHora = horas*1000;
    var ValorMinuto;
    var chkBox=document.getElementById("enLinea").checked;
    
    if (minutos<31){
        valorMinuto=500;
    }else{
        valorMinuto=minutos*16;
    }

    var total= valorDia+valorHora+valorMinuto;
    
    if (chkBox === true){
        total=total+250;
    }

    
    document.getElementById('cnt_valor').innerHTML = "El valor a pagar es de $"+total+" pesos (CLP)";
    document.getElementById('cnt_dias').innerHTML=(fecha2-fecha)/(1000*60);
}


function fechaActual (){
    
    var fechaAct = new Date();
    
    var dia =fechaAct.getDate();
    var mes= fechaAct.getMonth()+1;
    var anio=fechaAct.getFullYear();
    
    if(dia<10){
        dia="0"+dia;
    }
    if(mes<10){
        mes="0"+mes;
    }
    
    muestraFecha=(dia+'-'+mes+'-'+anio);
    
    
    document.getElementById('fechaTermino').value=muestraFecha;
      
}

function horaActual (){
    
    var horaAct = new Date();
    
    var hora =horaAct.getHours();
    var minutos= horaAct.getMinutes();
    //var segundos = horaAct.getSeconds();
    
    if(hora<10){
        hora="0"+hora;
    }
    if(minutos<10){
        minutos="0"+minutos;
    }
    /*if(segundos<10){
        segundos="0"+segundos;
    }*/
        
    var muestraHora=(hora+':'+minutos);
    
    document.getElementById('horaTermino').value=muestraHora;
   
      
}


