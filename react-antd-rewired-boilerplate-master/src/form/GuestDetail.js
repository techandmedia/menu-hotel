import React from "react";
import { Form, Input, Button, Col, Row, Cascader, Checkbox } from "antd";

const FormItem = Form.Item;

class FormReservasi extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    guestDetail: []
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  componentDidMount() {
    // console.log(this.state.guestDetail);
  }

  componentDidUpdate(prevProps, prevState) {}

  onCheckboxChange = checked => {
    // console.log(checked.target.checked);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataForm } = this.props;
    // console.log(dataForm);

    const formItemLayout = {
      labelCol: {
        sm: { span: 7, offset: 0 }
      },
      wrapperCol: {
        sm: { span: 16, offset: 0 }
      }
    };

    const guestButtonColumn = {
      wrapperCol: {
        sm: { offset: 7 }
      }
    };

    const options = [
      {
        value: "ABCD",
        label: "ABCD"
      },
      {
        value: "XYZ",
        label: "XYZ"
      }
    ];

    const secondColumnLayout = {
      wrapperCol: {
        sm: {
          span: 24,
          offset: -1
        }
      }
    };

    const billColumn = {
      labelCol: {
        sm: { span: 7, offset: 0 }
      },
      wrapperCol: {
        sm: {
          span: 17
        }
      }
    };

    return (
      <div className="code-box">
        <span className="code-box-title">Guest Detail</span>
        <Col span={19}>
          <FormItem {...formItemLayout} label="Guest Name">
            {getFieldDecorator("reservation_guest", {
              initialValue: dataForm.reservation_guest
            })(<Input />)}
          </FormItem>

          <FormItem {...formItemLayout} label="Bill Receiver">
            {getFieldDecorator("reservation_name", {
              initialValue: dataForm.reservation_name
            })(<Input />)}
          </FormItem>

          <FormItem {...guestButtonColumn}>
            <Row gutter={8}>
              <Col span={12}>
                <Button>GUEST INFO</Button>
              </Col>
              <Col span={12}>
                {" "}
                <Button>RSV REMARK</Button>
              </Col>
            </Row>
          </FormItem>

          <FormItem {...formItemLayout} label="Purpose">
            {getFieldDecorator("purpose", {})(<Cascader options={options} />)}
          </FormItem>

          <FormItem {...billColumn} label="Bill Instruction">
            <Row gutter={8}>
              <Col span={6}>
                {getFieldDecorator("bill_instruction", {
                  initialValue: "0"
                })(<Input />)}
              </Col>
              <Col span={12} offset={2}>
                {" "}
                <Checkbox className="checkbox">GDPR</Checkbox>
              </Col>
            </Row>
          </FormItem>
        </Col>

        <Col span={5}>
          <FormItem {...secondColumnLayout}>
            {getFieldDecorator("selected", {})(<Button>Change</Button>)}
          </FormItem>
          <FormItem {...secondColumnLayout}>
            {getFieldDecorator("selected", {})(<Button>Change</Button>)}
          </FormItem>
        </Col>
      </div>
    );
  }
}

const GuestDetail = Form.create()(FormReservasi);

export default GuestDetail;
