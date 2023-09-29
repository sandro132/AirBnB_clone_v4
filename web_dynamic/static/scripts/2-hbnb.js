#!/usr/bin/node
const api_URL = 'http://' + window.location.hostname + ':5001/';
window.onload = function () {
  // Create empty object to store amenities
  const checkedAmenities = {};
  $('input').css('margin-left', '10px');
  // Listen for changes on each input checkbox
  $('input:checkbox').change(function () {
    const myId = ($(this).data('id'));
    const myName = ($(this).data('name'));
    if ($(this).is(':checked')) {
      checkedAmenities[myId] = myName;
    } else {
      if (checkedAmenities[myId]) {
        delete checkedAmenities[myId];
      }
    }
    const amenitiyList = Object.values(checkedAmenities).join(', ');
    $('.amenities h4').text(amenitiyList).css({ width: '220px', height: '16px', overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' });
  });
};
$.get(api_URL + 'api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
