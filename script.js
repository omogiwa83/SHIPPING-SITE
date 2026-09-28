function trackNow(){
  let id = document.getElementById('trackId').value.trim();
  if(!id){ alert("Please enter your tracking number"); return; }
  document.getElementById('trackResult').innerText = "📦 Searching... Shipment " + id + " is In Transit - Your package will arrive soon. Contact us on WhatsApp for update.";
}

function sendToWhatsApp(e){
  e.preventDefault();
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let route = document.getElementById('route').value;
  let weight = document.getElementById('weight').value;
  let msg = `Hello Nextwaves Ltd, I need a shipping quote:%0AName: ${name}%0APhone: ${phone}%0ARoute: ${route}%0AWeight: ${weight}`;
  window.open(`https://wa.me/2348137375251?text=${msg}`, '_blank');
}
