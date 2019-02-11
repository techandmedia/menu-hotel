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

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }

  onCheckboxChange = checked => {
    // console.log(checked.target.checked);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataForm } = this.props;
    // console.log(dataForm);

    const firstColumn = {
      labelCol: {
        sm: { span: 6 }
      },
      wrapperCol: {
        sm: { span: 16 }
      }
    };

    return (
      <div className="code-box">
        <FormItem {...firstColumn} label="Group">
          {getFieldDecorator("group", {
            initialValue: ""
          })(<Input />)}
        </FormItem>
        <FormItem {...firstColumn} label="Segment">
          {getFieldDecorator("segment", {
            initialValue: "1 BFR"
          })(<Input />)}
        </FormItem>
        <FormItem {...firstColumn} label="Source">
          {getFieldDecorator("source", {
            initialValue: "9 OTA"
          })(<Input />)}
        </FormItem>
        <FormItem {...firstColumn} label="LetterNo">
          {getFieldDecorator("letterno", {
            initialValue: "1 Confirmation Individ"
          })(<Input />)}
        </FormItem>
        <FormItem {...firstColumn} label="Contact">
          {getFieldDecorator("contact", {
            initialValue: ""
          })(<Input />)}
        </FormItem>
        <FormItem {...firstColumn} label="Voucher">
          {getFieldDecorator("voucher", {
            initialValue: dataForm.voucher
          })(<Input />)}
        </FormItem>
        <FormItem {...firstColumn} label="CutOff Day">
          {getFieldDecorator("contact", {
            initialValue: "0"
          })(<Input />)}
        </FormItem>
      </div>
    );
  }
}

const GroupSegment = Form.create()(FormReservasi);

export default GroupSegment;
