// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

// Chat box JS
$('#send-message').click(function () {
  // Get message from input box
  var message = $('#chat-messages').val();
  var messageHTML = '<p class="chat-messages">' + message + '</p>';
  // Append formatted HTML of message to the chat box
  $('.chat-box').append(messageHTML);
});