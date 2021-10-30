import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button } from 'antd'

const { Option } = Select
const residences = [
  {
    value: 'Россия',
    label: 'Россия',
    children: [
      {
        value: 'Москва',
        label: 'Москва',
        children: [
          {
            value: 'Кремль',
            label: 'Кремль',
          },
          {
            value: 'Арбат',
            label: 'Арбат',
          },
        ],
      },
      {
        value: 'Санкт-Петергбург',
        label: 'Санкт-Петергбург',
        children: [
          {
            value: 'Фонтанка',
            label: 'Фонтанка',
          },
          {
            value: 'Васильевский остров',
            label: 'Васильевский остров',
          },
        ],
      },
    ],
  },
  {
    value: 'Беларусь',
    label: 'Беларусь',
    children: [
      {
        value: 'Минск',
        label: 'Минск',
        children: [
          {
            value: 'Московский район',
            label: 'Московский район',
            children: [
              {
                value: 'Лермонтова',
                label: 'Лермонтова',
              },
              {
                value: 'Рафиева',
                label: 'Рафиева',
              },
              {
                value: 'Розы Люксембург',
                label: 'Розы Люксембург',
              },
            ],
          },
          {
            value: 'Фрунзенский район',
            label: 'Фрунзенский район',
            children: [
              {
                value: 'Бирюзова',
                label: 'Бирюзова',
              },
              {
                value: 'Скриганова',
                label: 'Скриганова',
              },
            ],
          },
          {
            value: 'Ленинский район',
            label: 'Ленинский район',
            children: [
              {
                value: 'проспект Рокоссовского',
                label: 'проспект Рокоссовского',
              },
              {
                value: 'Ташкентская',
                label: 'Ташкентская',
              },
            ],
          },
        ],
      },
    ],
  },
]

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

export default function Registry() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="375">+375</Option>
        <Option value="7">+7</Option>
      </Select>
    </Form.Item>
  )

  return (
    <div className="content">
      <div className="registry">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['Беларусь', 'Минск'],
            prefix: '375',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="api@example.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Please input your password!" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject(
                    new Error('Введенные пароли не совпадают!')
                  )
                },
              }),
            ]}
          >
            <Input.Password placeholder="Please confirm your password!" />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="Как к Вам обращаться?"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Please input your nickname!" />
          </Form.Item>

          <Form.Item
            name="residence"
            label="Ваше местонахождение"
            rules={[
              {
                type: 'array',
                required: true,
                message: 'Please select your habitual residence!',
              },
            ]}
          >
            <Cascader options={residences} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Captcha"
            extra="We must make sure that your are a human."
          >
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: 'Please input the captcha you got!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="https://www.google.com/">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
