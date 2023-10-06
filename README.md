# MobileDT

A demo project for my Mobile System Development paper.
The primary functions for this app include:

1. A dashboard page with a list of asset cards. Each asset card represent a machine in the manufacturing process.
2. Clicking on a card from dashboard will open asset detail page. There are asset basic information on the detail page and real-time data monitoring for multiple sensors.
3. The sensor data showed on asset detail view are from firebase database which collect data from a simulator app.
4. There is logic in this MobileDT app which will send event notification when temperature value exceed limit value 28°C.

### install dependencies

```shell
npm install
```

### build system

use below command will start metro bundler and use can select where to build the system.<br>
Scan the QR code with Expo GO (Android) will run the app on Android phone.<br>
enter a in the console window will run the app on Android Studio Simulator which should be installed and configure before this step.

```shell
yarn start
```
