
const Calcular = document.getElementById('Calcular')

function consumo (){
    const Litro = document.getElementById('Litro').value;
    const KM = document.getElementById ('KM').value;
    const Media = document.getElementById('Media');

    if (Litro !=='' && KM !==''){
        
        const valorMedia = (KM/Litro).toFixed(2);

         Media.textContent= valorMedia + " Km/L";

    }else {
        alert ('Preencha todos os campos !');
    }
    
}
function Limpa() {
    
    document.getElementById('KM').value="";
    document.getElementById('Litro').value="";
    document.getElementById('Media').textContent="";
    
}
  
Calcular.addEventListener('click', consumo);
