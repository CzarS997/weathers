# About WeatherS

 WeatherS is a weather App (surprise, surprise) => will predict your local weather (or even weather from random location),
 show forecast on whole week, etc.  
 I used lot of: 
+ HTML
+ Javascript( and libraries: jQuery, SheetJS)
+ CSS(and preprocessor - SCSS)
+ webpack, babel(configuration, in general)

 App is using [darksky](https://darksky.net/) and 
[google](https://developers.google.com/maps/documentation/javascript/tutorial) API.
Be aware, that my api keys could be invalid(in the future -> sooner or later).
How to change that? Simply:
+ Go to file: './src/js/base' 
+ In object 'keys' change relevant keys  
### **How to get that keys?**   
Visit both pages [darksky](https://darksky.net/) and 
[google](https://developers.google.com/maps/documentation/javascript/tutorial) , find API section, register(in case, when you haven't got an account), and get API keys!  


# Getting started

Download project from that repo.
You should also install all required nodu_modules. How to do that? 
+ Open terminal and enter to folder, where project exist
+ Simply type:
```bash
  npm install 
```
### But, how to run that?
Every script, assiociated with WeatherS, are in 'package.json' file. For example:
+ To run localhost server with loaded website:
```bash
  npm run start 
```
+ To run localhost in production mode:
```bash
  npm build
```  
And so on, and so forth. . .  

  **Remember!** You have to be in the folder, where the project is located.
 Otherwise, script won't work.
# License 

 This project is licensed under the MIT License - feel free to reproduct that!
