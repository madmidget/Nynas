
        var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=nynashamn';
        var apiKey = '&appid=2be6f8515695135d7e20ba91872a4742';

        var URL = apiUrl + apiKey;

        var btn = document.getElementById("btn");

        btn.addEventListener("click", function(){
        var myRequest = new XMLHttpRequest();
        myRequest.open('GET', URL);
        myRequest.onload = function(){
            
        var weatherData = JSON.parse(myRequest.responseText);
        var todayDay = new Date().toLocaleString(); 
        var weatherRows = "";

        var tbodyTest = document.getElementById("info");
        
        
        for (var i = 0; i < weatherData.list.length; i++){
            
            var data = weatherData.list[i];
            if(todayDay.substr(0, 10) == data.dt_txt.substr(0, 10)) {

                
                //weatherRows += "<td>"+ data.dt_txt.substr(11, 5)+"</td>";
                var row = document.createElement("tr");
                var tid = document.createElement("td");
                var timeRaw = new Date(weatherData.list[i].dt_txt);
                var timeText = document.createTextNode(timeRaw.getHours() + ":00");
                tid.appendChild(timeText);
                row.appendChild(tid);                
                tbodyTest.appendChild(row);

                
                var weather = document.createElement("td");         //.description?
                var weatherText = document.createTextNode(data.weather[0].main);
                weather.appendChild(weatherText);
                row.appendChild(weather);

                var temp = document.createElement("td");
                //var tempText = document.createTextNode (data.main.temp - 273);
                var tempText = document.createTextNode (Math.round((data.main.temp-273.15) * 100) / 100);
                temp.appendChild (tempText);
                row.appendChild(temp);

                var wind = document.createElement("td");
                var windText = document.createTextNode(data.wind.speed);
                wind.appendChild(windText);
                row.appendChild(wind);



                console.log("tid " + data.dt_txt.substr(11, 5));
                console.log("väder " + data.weather[0].main);
                console.log("värme = " + data.main.temp.toFixed(2));
                console.log("vind = " + data.wind.speed.toFixed(1));
            }
         

            }
        }
        myRequest.send();
        });
        










/*
       'use strict';


       const KEY = '2be6f8515695135d7e20ba91872a4742';
       const API_URL = 'https://api.openweathermap.org'
                           + '/data/2.5/forecast?q=nynashamn&APPID=' + KEY;
       
       function HttpGet(url) {
         this.url = url;
         this.ajax = new XMLHttpRequest();
       }
       
       HttpGet.prototype.proceed = function(callback) {
         this.ajax.onreadystatechange = function() {
           if(this.readyState === 4 && this.status === 200){
             callback(this.response);
           }
         }
         this.ajax.open('GET', this.url, true);
         this.ajax.send();
       }
       
       
       function fetch(url) {
         return new HttpGet(url);
       }
       
       
       
       function $(selector) {
         return document.querySelector(selector);
       }
       
       
       function DOMElement(selector) {
         this.element = $(selector);
       }
       
       DOMElement.prototype.select = function(target) {
         this.selected = $(target);
         return this;
       }
       
       DOMElement.prototype.click = function(callback) {
         this.element.addEventListener('click', event => {
           event.selected = this.selected;
           callback(event);
         });
       }
       
       function find(selector) {
         return new DOMElement(selector);
       }
                           
                           
       
       fetch(API_URL).proceed(response => {
         var weatherData = JSON.parse(response);
         var weatherList = weatherData.list;
       
       
         var tbody = document.getElementById("info");
           for(var index = 0; index < 5; index++){
             var time = weatherList[index].dt_txt;
             var date = new Date(time);
             
             var hour = date.getHours() + ":00";
             if(hour.length < 5)
             hour = "0" + hour;
             var condition = weatherList[index].weather[0].description;  
             var temp = weatherList[index].main.temp - 273;
             var wind = weatherList[index].wind.speed + " m/s";
             
             var timestamp = `
               <tr>
                 <td>${hour}</td>
                 <td>${condition}</td>
                 <td>${temp.toFixed(2)}</td>
                 <td>${wind}</td>
                 <td>
               </tr>
             `;
             
             tbody.innerHTML += timestamp;
             
           }
         });

         */
        