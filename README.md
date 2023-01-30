# Hoppa RN Tech Test

In the project you'll find two folders, one with basic wireframes and the other with a barebones Expo Typescript app. The task is to create a
simple Expo RN app that displays the weekly forecast in a list and then allows the user to go to a detail screen for the selected day's forecast.
This isn't supposed to be a complex or lengthy task so please don't spend more than an hour or two.

## Setup
1. Fork this repository and give [@alexcatch](https://github.com/AlexCatch) read access 
2. Signup for a free developer account with https://www.weatherapi.com and get your API key.
3. Ensure you have either the iOS simulator or an Android emulator installed (or you can use the Expo Go app on your physical device)
4. Clone down the project and install node dependencies in the `hoppa-weather` folder with either yarn or npm, it's up to you which package manager you'd like to use.
5. Start the Expo dev server with `npx expo start`
6. Run the app on your [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/), your [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
or on your [physical device](https://docs.expo.dev/workflow/run-on-device/)

## Task

1. Using the [Forecast API](https://www.weatherapi.com/docs/), fetch the next 7 day's forecast and implement the basic wireframe for the [list screen](https://github.com/hoppa/hoppa-rn-tech-test/blob/main/wireframes/forecast-list.png).
Don't worry too much about the design but try to keep the layout the same as the wireframe.
2. When a user taps on one of the daily forecast items, it should navigate them to a [detail screen](https://github.com/hoppa/hoppa-rn-tech-test/blob/main/wireframes/forecast%20detail.png)
that matches the detail screen wireframe.
3. Push up your finished task to your forked repository and ensure [@alexcatch](https://github.com/AlexCatch) has read access 

## Considerations
- You can use any third party libraries you want but ensure they don't include native dependencies not bundled in the Expo Go app.
- Design isn't important but the layout is, try to stick to the general layouts in the wireframes as much as possible.
- The app uses Typescript so make full use of it, try to avoid using any / unknown but implicit types are fine.
