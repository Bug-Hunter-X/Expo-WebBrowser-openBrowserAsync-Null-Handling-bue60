# Expo WebBrowser openBrowserAsync Null Handling
This repository demonstrates a common error when using the `openBrowserAsync` function from `expo-web-browser`. The error occurs when the user cancels the browser action, resulting in a `null` return value that causes an error if not handled correctly.

## Bug
The provided sample code shows how this can happen.  If the user cancels the browser opening, the application will crash with a null pointer error.  The `result` object will be `null`. 

## Solution
The solution involves checking for a null result before accessing any properties of the result object, preventing crashes and providing a more robust user experience.  The corrected code includes this check.