window.addEventListener("load", () => {

    setTimeout(() => {
        document.querySelector('.fas').classList.replace('fa-thermometer-empty','fa-thermometer-quarter'); 
        document.querySelector('#temp').textContent='-20°';
        document.querySelector('#temp_text').textContent='Excelente';
        document.querySelector('.far').classList.replace('fa-meh-blank','fa-grin-beam');  
        document.querySelector('#temp_text').style="color:black;";
        document.querySelector('.far').style="color:black;";
        document.querySelector('.icon_thermometer').style="color:#063d98;";  
        document.querySelector("#temp").style="color:#063d98;";
     }, 2000);
     setTimeout(() => {
        document.querySelector('.fas').classList.replace('fa-thermometer-quarter','fa-thermometer-half'); 
        document.querySelector('#temp').textContent='-18°';
        document.querySelector('#temp_text').textContent='Muy bien';
        document.querySelector('.icon_thermometer').style="color:#063d98;";  
        document.querySelector("#temp").style="color:#063d98;"; 
     }, 6000);
     setTimeout(() => {
        document.querySelector('.fas').classList.replace('fa-thermometer-half','fa-thermometer-three-quarters'); 
        document.querySelector('#temp').textContent='-10°';
        document.querySelector('#temp_text').textContent='Bien';
        document.querySelector('.far').classList.replace('fa-grin-beam','fa-smile');  
        document.querySelector('.icon_thermometer').style="color:#117df0;";
        document.querySelector("#temp").style="color:#117df0;"; 
     }, 10000);

     setTimeout(() => {
        document.querySelector('.fas').classList.replace('fa-thermometer-three-quarters','fa-thermometer-full'); 
        document.querySelector('#temp').textContent='-5°';
        document.querySelector('#temp_text').textContent='Mal';
        document.querySelector('.far').classList.replace('fa-smile','fa-tired');  
        document.querySelector('.icon_thermometer').style="color:#fe2858;";  
        document.querySelector("#temp").style="color:#fe2858;";
     }, 12000);
   });

   // MODAL
   function modal_save(){


      document.getElementById("modal_save").classList.add('active');
      document.getElementById("modal_save").innerHTML = `
      <!-- modal social -->

      <div class="container_modal">
      <div class="modal_icon"><i class="far fa-check-circle"></i></div>
          
            <div class="modal_body">
          <p>¡Gracias!</p>
          <span>Hiciste clic en guardar datos</span>


          <div class="modal_exit" onclick="exit_modal()">
          <span>Atrás</span><i class="fas fa-arrow-right "></i>
          </div>

          </div>

      </div>`;
  
  }
  
  function exit_modal() {
         document.getElementById("modal_save").classList.remove('active');
  }
   
