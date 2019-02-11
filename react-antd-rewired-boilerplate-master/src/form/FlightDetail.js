import React from "react";
import { Form, Input, Col, Row, Checkbox } from "antd";

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

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  onCheckboxChange = checked => {
    // console.log(checked.target.checked);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log(dataForm);

    const firstColumn = {
      labelCol: {
        sm: { span: 8, offset: 4 }
      },
      wrapperCol: {
        sm: { span: 8, offset: 0 }
      }
    };

    const secondColumn = {
      labelCol: {
        sm: { span: 6, offset: 0 }
      },
      wrapperCol: {
        sm: { span: 12, offset: 0 }
      }
    };

    const thirdColumn = {
      labelCol: {
        sm: { span: 4, offset: 0 }
      },
      wrapperCol: {
        sm: { span: 18, offset: 0 }
      }
    };

    return (
      <div className="code-box">
        <span className="code-box-title">Flight Detail</span>
        <Row gutter={8}>
          <Col span={8}>
            <FormItem {...firstColumn} label="Flight">
              {getFieldDecorator("flight_arrival", {
                initialValue: ""
              })(<Input />)}
            </FormItem>
            <FormItem {...firstColumn} label="Flight">
              {getFieldDecorator("flight_depart", {
                initialValue: ""
              })(<Input />)}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem {...secondColumn} label="ETA">
              {getFieldDecorator("eta", {
                initialValue: "00:00"
              })(<Input />)}
            </FormItem>
            <FormItem {...secondColumn} label="ETD">
              {getFieldDecorator("etd", {
                initialValue: "00:00"
              })(<Input />)}
            </FormItem>
          </Col>{" "}
          <Col span={8}>
            <FormItem {...thirdColumn}>
              <Checkbox className="checkbox">Picked Up</Checkbox>
            </FormItem>
            <FormItem {...thirdColumn}>
              <Checkbox className="checkbox">Drop</Checkbox>
            </FormItem>
          </Col>
        </Row>
      </div>
    );
  }
}

const FlightDetail = Form.create()(FormReservasi);

export default FlightDetail;
