import requests

BASE_URL = "http://localhost:3000"

print(" ===================== SIGNUP =====================")
print()
name = str(input("Enter your name: "))
#username = str(input("Enter your username: "))
email = str(input("Enter your email: "))
password = str(input("Enter your password: "))

# 🔥 Data to send
data = {
    "name": name,
    #"username": username,
    "email": email,
    "password": password
}

# 1. POST → send data to API
post_response = requests.post(
    f"{BASE_URL}/api/signup",
    json=data
)

print("POST STATUS:", post_response.status_code)
print("POST RESPONSE:", post_response.json())

# 2. GET → fetch all users
get_response = requests.get(f"{BASE_URL}/api/users")

print("\nGET STATUS:", get_response.status_code)
print("GET RESPONSE:", get_response.json())

# patch_response = requests.patch(f"{BASE_URL}/api/users")
