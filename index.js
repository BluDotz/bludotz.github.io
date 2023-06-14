function onButtonClick() {

  let options = {};
  options.acceptAllDevices = true;

  log('Requesting Bluetooth Device...');
  log('with ' + JSON.stringify(options));
  navigator.bluetooth.requestDevice(options)
  .then(device => {
    log('> Name:             ' + device.name);
    log('> Id:               ' + device.id);
    log('> Connected:        ' + device.gatt.connected);
  })
  .catch(error => {
    log('Argh! ' + error);
  });
}
