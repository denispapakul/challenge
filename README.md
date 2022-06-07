# Challenge 07.06.2022

There was not enough time to finish with GraphQL, I had to spend more time on design and fixing designer errors, such as: 
1) Some PNG icons were not centered and found in rectangles, which is a bug - had to fix this with additional styles
2) A part of the design was inserted in Zeplin just like a picture, from which it was impossible to get or find out the font sizes, indents, colors, shadow darkening, shadow transparency, icon size and much more - I had to do this part of the work approximately like in the design.

I considered these two points to be quite weighty due to the requirement to make a design with a perfect pixel.

## Setup

To install Node dependencies, run `yarn` or `mpn install`

### For iOS Development

**You need a device running macOS to develop for iOS.** iOS apps need the Xcode toolchain to compile and build. Follow instructions [here](https://mac.install.guide/commandlinetools/5.html) to install Xcode.

> ⚠️ Xcode's package is ~40GB and can take a long time to install.

In the iOS folder of this project, run `sudo gem update --system` to update RubyGems software and bundle install to install everything in the gemfile.

### For Android Development (Optional)

#### JDK

First, install a v11 JDK. This lets you compile your code into native Java/Kotlin. We recommend using Adoptium Temurin, or Azul Zulu if you use an M1 Mac.

Install **Temurin 11** on macOS by running the following:

```
$ brew tap homebrew/cask-versions
$ brew install --cask temurin11
```

For all other platforms, [grab your download](https://adoptium.net/index.html?variant=openjdk11&jvmVariant=hotspot) and follow the instructions [here](https://adoptium.net/installation.html?variant=openjdk11&jvmVariant=hotspot).

Alternatively, to install **Azul Zulu**, [grab your download](https://www.azul.com/downloads/#download-openjdk) and follow the instructions [here](https://docs.azul.com/core/zulu-openjdk/install/windows).

Make sure to make a `JAVA_HOME` environment variable if your installer hasn't, pointing to the Home folder of your JDK install:

The watchOS simulator is notoriously difficult to use, it's recommended to use a real watch for debugging.

### Android
**macOS, Linux:** in your bash profile (or config file for terminal of choice), set it like so: `export JAVA_HOME="/Library/Java/JavaVirtualMachines/temurin-11.jdk/Contents/Home"`

**Windows:** see instructions [here](https://mkyong.com/java/how-to-set-java_home-on-windows-10/).

#### Android Studio

Next, download either [Android Studio](https://developer.android.com/studio#downloads) (which comes with an IDE) or the [Android Command line Tools](https://gist.github.com/dylmye/d3c55afa6d1cbefe55d0afe4e9df5ae5).

Finally, install the following packages in either [Android Studio's SDK Manager](https://developer.android.com/studio/intro/update#sdk-manager) or using the [`sdkmanager` command line tool](https://developer.android.com/studio/command-line/sdkmanager):

- Android SDK Build-Tools 30.0.2
- Android Emulator
- Android SDK Platform-Tools
- Platform - Android 29

If you don't have an Android device to test with, you can install emulator images too.

## Testing

You need a packager to debug the app, regardless of platform. Run `yarn start --reset-cache` to run [Metro](https://facebook.github.io/metro/), the programme that compiles the app into a single JavaScript file.

Once your bundler is running, run `react-native run-ios` or `react-native run-android` to build the app.
