import React, { useState } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import axios from 'axios'

export default function Login() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [data, setData] = useState({
    login: '',
    password: '',
  })

  const formClick = (e) => {
    e.preventDefault()
    localStorage.setItem('data', JSON.stringify(data))
    axios
      .post(url, {
        login: data.login,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data)
      })
  }

  function inputChanger(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <div className="content">
      <div className="login">
        <Form onSubmit={formClick}>
          <FormGroup>
            <Input
              type="text"
              id="login"
              placeholder="login"
              onChange={(e) => inputChanger(e)}
              value={data.login}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Input
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => inputChanger(e)}
              value={data.password}
            />
          </FormGroup>
          <br />
          <Button color="info">Submit</Button>
        </Form>
      </div>
    </div>
  )
}
