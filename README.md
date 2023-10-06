# MobileDT

### Project Description

This is a demo project for my Mobile System Development paper.
The primary functions for this app include:

1. A dashboard page with a list of asset cards. Each asset card represent a machine in the manufacturing process.
2. Clicking on a card from dashboard will open asset detail page. There are asset basic information on the detail page and real-time data monitoring for multiple sensors.
3. The sensor data showed on asset detail view are from firebase database which collect data from a simulator app.
4. There is logic in this MobileDT app which will send event notification when temperature value exceed limit value 28°C.

### Setup environment

1. install node.js 16 or higher.
2. install Android Studio to enable simulator for debug and test app feature.
3. Prepare a physical Android phone to deploy app. Install Expo Go app from Google Play app. This would allow app deployment on the physical phone.

### Setup MobileST to prepare test data

Use command to build MobileST app. <br>

```shell
npm install
yarn start
```

Scan the QR code with Expo GO (Android) will run the app on Android phone.<br>
Note: Since there are two apps running, suggest to run one app on Android Studio simulator and the other one on physical phone.

### Install dependencies

```shell
npm install
```

### Build MobileDT system

Use below command will start metro bundler and user can select where to build the system.<br>

```shell
yarn start
```

Scan the QR code with Expo GO (Android) will run the app on Android phone.<br>
Enter "a" in the console window will run the app on Android Studio Simulator.

### How to get real-time data

1. Click the button on the simulator page to start/stop send mock data.Currently the data from simulator will send to firebase every 2 senconds.
2. Check the data showed on MobileDT detail view. The sensor data should update real-time.
3. Once there is tempreture value exceed 28°C, MobileDT will send event to firebase database and MobileST will get this event notification real-time.
