# WeatherAPItests

Modules used in this solution
chai
mochawesome
mochawesome-report-generator
supertest
mocha


*** How to install the required software
- Go to project directory any IDE (I used VS Code)
- Run the command 'npm install' ( this command should pull all required tools/packages)


*** How to run the test:
=> For positive, happy path testing, please provide correct number in 'test_data.js' file in 'helper' module

// Sunday - 0, Mon - 1, Tues - 2, Wed - 3, Thurs - 4, fri - 5, Saturday : 6
exports.dayOfTheWeek = 6;

=> on terminal windo, run the fllowing command
'npm test' ( this command should pull all required tools/packages)



*** How to check result:
- Console Logs
- {projectDirectory}\wooliesX\mochawesome-report\mochawesome.html



*** Assumption : 
- OpenWeatherAPI is up and running
- API given by OpenWeather is valid


