import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

function FormReservasi(props) {

  const { getFieldDecorator } = props.form;

  const firstColumn = {
    labelCol: {
      sm: { span: 6 }
    },
    wrapperCol: {
      sm: { span: 16 }
    }
  };
  const guestButtonColumn = {
    wrapperCol: {
      sm: { offset: 6 }
    }
  };

  return (
    <div className="code-box">
      <FormItem {...firstColumn} label="Deposit">
        {getFieldDecorator("deposit", {
          initialValue: "0"
        })(<Input />)}
      </FormItem>
      <FormItem {...firstColumn} label="Limit Date">
        {getFieldDecorator("limit_date", {
          initialValue: ""
        })(<Input />)}
      </FormItem>
      <FormItem {...firstColumn} label="Payment 1">
        {getFieldDecorator("payment_1", {
          initialValue: "0.00"
        })(<Input />)}
      </FormItem>
      <FormItem {...firstColumn} label="Payment 2">
        {getFieldDecorator("payment_2", {
          initialValue: "0.00"
        })(<Input />)}
      </FormItem>
      <FormItem {...firstColumn} label="Balance">
        {getFieldDecorator("balance", {
          initialValue: "0.00"
        })(<Input />)}
      </FormItem>
      <FormItem {...guestButtonColumn}>
        {getFieldDecorator("deposit", {})(<Button>POST DEPOSIT</Button>)}
      </FormItem>
    </div>
  );
}

const DepositForm = Form.create()(FormReservasi);

export default DepositForm;
