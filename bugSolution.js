import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  if (result !== null) {
    console.log('Result:', result);
    // Access properties of result only if it's not null
    console.log(result.type, result.url);
  } else {
    console.log('User cancelled');
  }
}

//This solution handles the null result gracefully, preventing crashes.