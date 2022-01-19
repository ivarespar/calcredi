// Listen for submit

document.getElementById("data").addEventListener("submit",computeResults);
document.getElementById("clear").addEventListener("click",clearForm);
document.getElementById("copy").addEventListener("click",copyData);
var contenido = document.getElementById("toclip");


function computeResults(e){
    //console.log(Nmcuota.toFixed(2));
    // CAPTURO VARIABLES
    const ncapital = document.getElementById("capital").value;
    const ncuotas = document.getElementById("cuotas").value;
    const ntcea = document.getElementById("tcea").value;
    //const ntem = document.getElementById("tem").value;

    //Hago cálculos
    const NCtem = Math.pow((1 + (parseFloat(ntcea)/100)),1/12)-1;
    const Nmcuota = parseFloat(ncapital) * ((NCtem * Math.pow(1+NCtem,ncuotas))/(Math.pow(1+NCtem,ncuotas) - 1));
    const Ncuotasin = ncapital / ncuotas;
    const Ninteresm = Nmcuota - Ncuotasin;
    const Nmtotal = Nmcuota * ncuotas;
    const Ninteres = Nmtotal - ncapital;
    
    // Muestro resultados
    document.getElementById("tem").value = (NCtem*100).toFixed(2);
    document.getElementById("monto").value = Nmcuota.toFixed(2);
    document.getElementById("montosin").value = Ncuotasin.toFixed(2);
    document.getElementById("interes").value = Ninteresm.toFixed(2);
    document.getElementById("interest").value = Ninteres.toFixed(2);
    document.getElementById("montotal").value = Nmtotal.toFixed(2);
    document.getElementById("copy").disabled = false;

    contenido.value = "+------ Cálculo de crédito ------+\n";
    contenido.value += "+-------  github/ivarespar ------+\n";
    contenido.value += "+--------------------------------+\n";
    contenido.value += "Capital: $ "+ Nmcuota.toFixed(2).toString() + "\n";
    contenido.value += "Cuotas: " + ncuotas.toString() + "\n";
    contenido.value += "TCEA / TEA: " + ntcea.toString() + " %\n";
    contenido.value += "TEM: "+ (NCtem*100).toFixed(2).toString() +" %\n";
    
    contenido.value += "Monto cuota: $ "+ Nmcuota.toFixed(2).toString() +"\n";
    contenido.value += "Monto sin interes: $ "+ Ncuotasin.toFixed(2).toString() +"\n";
    contenido.value += "Interes cuota: $ "+ Ninteresm.toFixed(2).toString() +"\n";
    contenido.value += "Interes total: $ "+ Ninteres.toFixed(2).toString() +"\n";
    contenido.value += "Monto total a pagar: $ "+ Nmtotal.toFixed(2).toString() +"\n";
    contenido.value += "+--------------------------------+\n";    
    //contenido.value += "\n"

    e.preventDefault();
}

function clearForm(){
    // Limpiar controles
    document.getElementById("data").reset();
    document.getElementById("monto").value = "";
    document.getElementById("montosin").value = "";
    document.getElementById("interes").value = "";
    document.getElementById("interest").value = "";
    document.getElementById("montotal").value = "";
    contenido.value = "";
    document.getElementById("capital").focus();
}

function copyData(){
    var content = contenido.value;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("Datos copiados")
    })
        .catch(err => {
        console.log('Ocurrió un error', err);
    })
}