## Build a basic version of PayTM

form handling

button submit -
const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
username,
firstName,
lastName,
password
})

localStorage.setItem("token", response.data.token)
localStorage.removeItem("token")

in the dashboard add logic to not see yourself

const navigate = useNavigate()
navigate("to")

const [searchParams] = useSearchParams();
const id = searchParams.get("id")

## Transfer

```js
axios.post(
  'http://localhost:3000/api/v1/account/transfer',
  {
    to: id,
    amount,
  },
  {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
);
```

1 - tackle the signin/signup page when the user is already signed in
2 - when landing on / user should redirected to either dashboard or login
3 - adding transactions page
4 - no one should be able to access the send page from anywhere else