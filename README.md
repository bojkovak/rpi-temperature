# Raspberry Pi - Temperature module

Node module for retrieving temperature data from the DS18B20 temperature sensor on Raspberry Pi.



## Setup

If this is the first time you are setting up your RPi and the temperature sensor then you should enable the 1-wire kernel modules that come pre-installed but not enabled: `echo "dtoverlay=w1-gpio" | sudo tee -a /boot/config.txt` and reboot `sudo reboot`. If you have an OS which was released before January of 2015 (kernel older then 3.18) then run `sudo modprobe w1-gpio && sudo modprobe w1_therm`.


## Installation

```bash
npm install rpi-temperature --save
```


## Usage

Print out the temperature value:

```bash
const tempValue = require('rpi-temperature')
console.log('Temperature: %s', tempValue)
```
