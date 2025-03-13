var evaConfiguration = {
  "isEvaMobileApp": true,
  "uiConfig": {
    "company": "Openstream Inc.",
    "theme": "dark", // "light" / "dark"
    "application": "lucidcustomercare",
    "frameworkType": "standalone" // "evamobileapp" / "standalone"
  },
  "isDeveloperModeEnabled": false,
  "isTestingBuild": false,
  "evaBotConfig": {
    "theme": "dark", // "light" / "dark"
    "evaSpeechEnabled": false,
    "disableTTS": true,
    "isActivelyAwaitingUserResponse": true,
    "botResponsePosition": "bottom", // "bottom" / "top"
    "csrAgentServerDomain": "https://eva-cdb.cue-me.com",
    "connectionOptions": {
      "botappid": "75582.56726710792",
      "webSocket": true,
      "user": "lucidcustomercare",
    },
    "styleOptions": {
      "dark": {
        "botAvatarInitials": "",
        "botAvatarImage": "assets/images/lucid_chatboticon.svg",
        "botAvatarBackgroundColor": "transparent",
        "backgroundColor": "#1E1E1E", // light -- "white"; dark -- "#211F26"
        "bubbleBackground": "#0439D9",  // light -- "#0439D9"; dark -- "#0439D9"
        "bubbleBorderColor": "#0439D9", // light -- "transparent"; dark -- "transparent"
        "bubbleTextColor": "white", // light -- "#F4F4F4"; dark -- "#F4F4F4"
        "bubbleFromUserBackground": "#2B2930", // light -- "#F4F4F4"; dark -- "#2B2930"
        "bubbleFromUserBorderColor": "#2B2930", // light -- "transparent"; dark -- "transparent"
        "bubbleFromUserTextColor": "white", // light -- "#141218"; dark -- "#F4F4F4"
        "suggestedActionLayout": "stacked",
        "hideUploadButton": true,
        "sendTimeout": 30000,
        "primaryFont": "roboto-medium, Open Sans, sans-serif, helvetica, arial",
        "timestampColor": "#5F646D",
        "bubbleNubOffset": "bottom",
        "bubbleNubSize": 2,
        "bubbleFromUserNubOffset": "bottom",
        "bubbleFromUserNubSize": 2,
        "bubbleBorderRadius": 20,
        "bubbleFromUserBorderRadius": 20,
        "sendBoxTextWrap": true,
        "suggestedActionHeight": 0,
        "suggestedActionBorderColor": "transparent",
        "sendBoxButtonColor": "white"
      },
      "light": {
        "botAvatarInitials": "",
        "botAvatarImage": "assets/images/lucid_chatboticon-light.svg",
        "botAvatarBackgroundColor": "transparent",
        "backgroundColor": "white", // light -- "white"; dark -- "#211F26"
        "bubbleBackground": "#F5F5F7",  // light -- "#0439D9"; dark -- "#0439D9"
        "bubbleBorderColor": "transparent", // light -- "transparent"; dark -- "transparent"
        "bubbleTextColor": "#141218", // light -- "#F4F4F4"; dark -- "#F4F4F4"
        "bubbleFromUserBackground": "#0439D9", //"#FFEAE7", // light -- "#F4F4F4"; dark -- "#2B2930"
        "bubbleFromUserBorderColor": "transparent", // light -- "transparent"; dark -- "transparent"
        "bubbleFromUserTextColor": "white", //"#141218", // light -- "#141218"; dark -- "#F4F4F4"
        "suggestedActionLayout": "stacked",
        "hideUploadButton": true,
        "sendTimeout": 30000,
        "primaryFont": "roboto-medium, Open Sans, sans-serif, helvetica, arial",
        "timestampColor": "#5F646D",
        "bubbleNubOffset": "bottom",
        "bubbleNubSize": 2,
        "bubbleFromUserNubOffset": "bottom",
        "bubbleFromUserNubSize": 2,
        "bubbleBorderRadius": 20,
        "bubbleFromUserBorderRadius": 20,
        "sendBoxTextWrap": true,
        "suggestedActionHeight": 0,
        "suggestedActionBorderColor": "transparent",
        "sendBoxButtonColor": "white"
      }
    },
    "supportedLanguages": [
      { "name": "English", "code": "en-US", "lang_code": "en", "voice_type": "en-US-JennyNeural", "tts_voicename": "JennyNeural" },
      { "name": "Arabic", "code": "ar-AE", "lang_code": "ar", "voice_type": "ar-AE-FatimaNeural", "tts_voicename": "FatimaNeural" }
    ],
    "userSettings": [
      {
        "id": "speech",
        "label": "Speech",
        "checked": false,
        "type": "toggle",
        "options": [
          { "id": "speech", "label": "Speech", "value": "speech" }
        ]
      }
    ]
  },
  "evaTTSConfig": {
    "enabled": true,
    "domain": "https://api.deepgram.com",
    "tts_client": "deepgram",
    "voice_name": "aura-asteria-en"
  }
};