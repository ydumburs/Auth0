# Summary
This is a basic JavaScript can be used as [pre-request scripts] in Postman for signed with base64 JWT creation. With this, you can automate generating JWT every time before you run a request.

# Reference
- Adapted from https://gist.github.com/corbanb/db03150abbe899285d6a86cc480f674d
- Scripting in Postman https://learning.postman.com/docs/writing-scripts/intro-to-scripts/
- Postman JavaScript reference https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/
- Crypt-JS https://cryptojs.gitbook.io/docs/ 

# Step
1. Install Postman app https://www.postman.com/downloads/
2. Add this script in [pre-request scripts] either collection root or folder or single request level
3. Add the following variables on your Postman environment
- 'apiKey' with your api key
- 'apiSecret' with your api secret
4. Send any request for testing

# Step to run
1. Replace YOUR_HEROKU_APP_NAME with your Heroku app name in the fetchSessionConnectionData() method.
If you don't have a Heroku account, you'll need to sign up. See detail from here: https://tokbox.com/developer/tutorials/android/basic-video-chat/#server
2. Run the app once and you'll see your SESSION_ID from Logcat which is generated via Heroku server with your credentials. Grab it and create a second settion from OpenTok Playground: https://tokbox.com/developer/tools/playground/
3. You'll see a basic video app on your device. If you run the app on an emulator, the publisher video will display an animated graphic instead of your camera feed since the emulator cannot access your webcam.

If you want to try hardcoded authentication, grab your credentials from your TokBox Account (https://tokbox.com/account) and replace YOUR_API_KEY, YOUR_SESSION_ID, and YOUR_TOKEN with them. Do not forget to comment out the fetchSessionConnectionData() method where using Heroku authentication and uncomment the requestPermissions() method.

If you want to use a PHP server (https://github.com/opentok/learning-opentok-php) to get credentials instead of the Heroku, replace URL in the fetchSessionConnectionData() method with your localhost address like http://10.0.2.2:8080.


# Disclaimer
This example is not not created, maintained, or supported by Auth0 and provided AS IS. Use it as your own risk.
