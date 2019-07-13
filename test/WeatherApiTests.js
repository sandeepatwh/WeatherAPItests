const apiHelper = require('../helper/api_helper.js');
const apiEndPointHelper = require('../helper/api_endpoints.js');
const testData = require('../helper/test_data.js');
var expect = require('chai').expect;

describe('WooliesX API Test ... ', () => {
   
    describe('Holiday in Sydney ..', () => {
        let city;
        var IsItcorrectDayOfTheWeekForHoliday = false;
        let responseData;


        it('I like to have holiday in Sydney', () => {
           city= testData.city;
        });

     
        it('I only like to holiday on thursday',function(done) {
            if(new Date().getDay() == testData.dayOfTheWeek){
                console.log('Today is thursday, so enjoy your holiday');
                IsItcorrectDayOfTheWeekForHoliday=true;
                done();
            }
            else{
                done(new Error("Today is not thursday, no holiday can be taken.."));
            }
        })
        
        it('I look up the weather forecast', async function() {

           if(IsItcorrectDayOfTheWeekForHoliday){
            let endpoint = '/data/2.5/weather?q='+city+ '&APPID='+testData.apiKey2+'&units=metric';
            responseData=  await apiHelper.sendGETRequest(apiEndPointHelper.baseUrl,endpoint);
            
            console.log('Response code for the API request is : ' + responseData.status );
        
            expect(responseData.status).to.equal(200);
            }
            else{
               throw console.error('No Weather forcast has been checked');
               ;
              //  done(new Error("No weather forcast has been checked.... "));
            }
        })

        //Assert that the response content Type is JSON
       it('I receive the weather forecast',function(done) {
            if(IsItcorrectDayOfTheWeekForHoliday){
                expect(responseData.type).to.equal('application/json'); //Assert
                done();
            }
            else{
                done(new Error("No weather forcast information is received... "));
            }
        } )

       // Verify that the temperature is above 10 degrees
        it('the maximum temperature is warmer than specfic degrees', function(done) {

            let json = JSON.parse(responseData.text);
            console.log(json.name + ' : Maximum Temperature => ' + json.main.temp_max);


            if(IsItcorrectDayOfTheWeekForHoliday)
             {              
                //Assert

                if(json.main.temp_max >= testData.MaxTemp){ 
                    expect(json.main.temp_max).is.greaterThan(testData.MaxTemp);
                     console.log(json.name + ' : Maximum Temperature => ' + json.main.temp_max);
                     console.log('Holiday begins ....');
                     done();
                    }
                    else{
                        done(new Error("Maximum temperature is below 10 degree, no holiday to be taken, even though its thursday... "));
                    }
                }
            else{
                done(new Error("No maximum temperature has been checked... "));
            }
        });



    });
   
});