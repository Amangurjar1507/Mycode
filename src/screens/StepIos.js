// CMD 
// step iOS
// nano ~/.bash_profile 
// path set cmd
// echo "$PATH"
 
// Path set
// export ANDROID_HOME=$HOME/Library/Android/sdk
// export PATH=$PATH:$ANDROID_HOME/emulator
// export PATH=$PATH:$ANDROID_HOME/platform-tools


//   (cd ios && pod install)
// React Native for web setup-
// 1. Install new dependencies to support react native for web
// 2. include some new files to run react native app on web
// 3. Add ‘build’ and ‘web’ script in package.json to run to app
// 4. Start the app on web as well as android emulator
// -----------------------------
// Step -1 
// 1.npx react-native init AwesomeProject
// 2. npx react-native run-android
// Step - 2

// 1. npm install react-dom react-native-web --legacy-peer-deps

// 2. npm install --save-dev babel-plugin-react-native-web babel-plugin-module-resolver --legacy-peer-deps

// 3. npm i -D babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack --legacy-peer-deps

// 4.add this code in the package.json file 

// "jest": {
//     "preset": "react-native-web",
//     "moduleFileExtensions": [
//       "ts",
//       "tsx",
//       "js",
//       "jsx",
//       "json",
//       "node"
//     ]
//   }

// 5. include these four files in root folder(project folder) of your project 

// https://gist.github.com/arrygoo/81d95ecc55313a7d0668f6711cfc7ff9

// 6. include these two scripts in the package.json file

// "build": "rm -rf dist/ && webpack --mode=production --config webpack.config.js",
//    "web": "webpack serve --mode=development --config webpack.config.js"

// 7. you are all set and now run the app on web with this command
// npm run web


// React Native Web configuration
// https://gist.github.com


// Hello all Whenever we are generating a build then please follow below steps

// For android

// 1). Clean project from android studio

// 2). Hit this command 2 times - npx react-native bundle --platform android --dev false --entry-file ./index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res/ --sourcemap-output ./android/app/src/main/assets/index.android.map



// 3). Then generate the build from android studio - Build->Build Bundle Apk->Build Apk

// For iOS 
// 1). Clean Build folder from xcode - Product->Clean Build Folder

// 2). Hit this command 2 times - npx react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios

// 3). Then Generate the build from xcode - Product=>Archive



// npm  i @react-native-async-storage/async-storage @react-native-community/masked-view @react-navigation/native @react-navigation/stack moment react-native-gesture-handler react-native-safe-area-context react-native-screens react-native-svg react-native-virtualized-view redux redux-thunk redux-persist react-native-splash-screen react-native-push-notification @invertase/react-native-apple-authentication @notifee/react-native @react-native-community/netinfo @react-native-firebase/app @react-native-firebase/messaging @react-native-google-signin/google-signin @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/material-top-tabs moment react-native-biometrics react-native-linear-gradient react-native-reanimated