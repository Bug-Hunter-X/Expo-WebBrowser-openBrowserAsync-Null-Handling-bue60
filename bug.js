import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log(result);
}

// This will produce an error in Expo Go if the result of openBrowserAsync is not handled correctly.
// For example, if the user cancels the action, the result will be null and cause an error if you try to access properties of null.
//To avoid this, you should always check for null values before accessing properties of result