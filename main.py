import requests

# Define your API key
API_KEY = '9b496d216be38721e1b8d845cd464d84'

user_city = input("Enter City:")

weather_data =  requests.get(
    f"http://api.openweathermap.org/data/2.5/weather?q={user_city}&units=imperial&APPID={API_KEY}")
# Print the response status code
if weather_data.json()['cod'] == '404':
    print("No City Found")
else:
    weather = weather_data.json()['weather'][0]['main']
    temp = round(weather_data.json()['main']['temp'])

    print(f"The weather in {user_city} is: {weather}")
    print(f"The temperature in {user_city} is: {temp}ºF")