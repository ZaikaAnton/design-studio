import requests

data = {'username':'admin','password':'admin'}
print(f"[Request][POST]: /authenticate, data={data}")
r = requests.post('http://127.0.0.1:5000/authenticate', data=data)
print(f'{r}\n{r.text}')


print("[Request][GET]: /login")
r = requests.get('http://127.0.0.1:5000/login')
print(f'{r}\n{r.text}')
