"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/dnagafonov/native-weather/expo-service-worker.js",{scope:"/dnagafonov/native-weather/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}));