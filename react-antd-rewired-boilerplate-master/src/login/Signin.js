import React from "react";
import { Form, Icon, Input, Col, Row, Button, Card } from "antd";
import { success, error } from "../Basic/InformationModal";

import { loginAdmin } from "../Fetch//Login";
import "./signin.css";

const FormItem = Form.Item;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  // componentDidMount() {
  //   console.log(this.props.admin);
  // }

  // componentDidUpdate() {
  //   console.log(this.props.admin);
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const username = values.admin;
      const password = values.password;
      // const responden_id = values.admin;
      // const password = values.password;
      if (!err) {
        // if (this.props.admin) {
          loginAdmin(this.props.URL, username, password).then(response => {
            console.log(response);
            // const user = response.data[0];
            const code = response.data.code;
            if (code === 204) {
              error(
                "Email dan Password salah",
                "Silahkan masukkan email dan password yang benar"
              );
            } else if (code === 205) {
              error(
                "Email Tidak Terdaftar",
                "Silahkan masukkan email yang sudah terdaftar, atau silahkan register untuk membuat akun baru"
              );
            } else if (username) {
              success("Sukses", "Anda berhasil log in");
              // this.props.loadUser(admin_name);
              this.props.onRouteChange("operator-dashboard");
            } else {
              alert(
                "Ada sesuatu yang salah dengan diri Anda :). Just Kidding. Mungkin internet Anda sedang error. Coba lagi ya!"
              );
            }
          });
        // } 
        // else {
        //   loginResponden(this.props.URL, responden_id, password).then(response => {
        //     // const user = response.data[0];
        //     const code = response.data.code;
        //     if (code === 204) {
        //       error(
        //         "NIP/NIM dan Password salah",
        //         "Silahkan masukkan nip/nim dan password yang benar"
        //       );
        //     } else if (code === 205) {
        //       error(
        //         "NIP/NIM Tidak Terdaftar",
        //         "Silahkan masukkan nip/nim yang sudah terdaftar, atau silahkan register untuk membuat akun baru"
        //       );
        //     } else if (responden_id) {
        //       success("Sukses", "Anda berhasil log in");
        //       this.props.loadUser(responden_id);
        //       this.props.onRouteChange("user-dashboard");
        //     } else {
        //       alert(
        //         "Ada sesuatu yang salah dengan diri Anda :). Just Kidding. Mungkin internet Anda sedang error. Coba lagi ya!"
        //       );
        //     }
        //   });
        // }
      }
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "65vh", padding: "1em" }}
      >
        <Col>
          <Card>
            <h3 style={{ textAlign: "center", marginBottom: 15 }}>
              {this.props.admin ? (
                <span>Admin Login Page</span>
              ) : (
                <span>Operator Login Page</span>
              )}
            </h3>

            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator("admin", {
                  rules: [
                    {
                      message: "The input is not valid E-mail!"
                    },
                    { required: true, message: "Please input your Email!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="User Name"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const WrappedSignInForm = Form.create()(SignIn);

export default WrappedSignInForm;
