import React, { useState, useEffect } from "react";
import { Form, Input, Col, Cascader, Checkbox } from "antd";
import { getRate } from "../Fetch/GetData";

// Form Isi Jadwal
const FormItem = Form.Item;

function FormReservasi(props) {
  const URL = props.URL;
  const [dataRate, setDataRate] = useState([]);
  function getDataRate() {
    getRate(URL).then(data => {
      setDataRate(data);
    });
  }
  useEffect(() => {
    getDataRate();
  }, []);

  const [currentRate, setCurrentRate] = useState([
    { key: "XYZ", value: "XYZ", label: "XYZ" }
  ]);
  function getCurrentRate() {
    setCurrentRate(
      dataRate.map(data => ({
        value: data.rate_code,
        label: data.rate_code
      }))
    );
  }
  useEffect(() => {
    getCurrentRate();
  }, [dataRate]);

  const [selectedRate, setSelectedRate] = useState([]);

  function onSelectRate(selectedRate) {
    for (let i = 0; i < dataRate.length; i++) {
      if (dataRate[i].rate_code === selectedRate[0]) {
        setSelectedRate(dataRate[i]);
      }
    }
  }

  function onCheckboxChange(checked) {
    console.log(checked.target.checked);
  }

  const { getFieldDecorator } = props.form;
  console.log(selectedRate);

  const formItemLayout = {
    labelCol: {
      xs: { span: 12 },
      sm: { span: 12 }
    },
    wrapperCol: {
      xs: { span: 12 },
      sm: { span: 12 }
    }
  };

  const secondColumnLayout = {
    wrapperCol: {
      sm: {
        span: 24,
        offset: 0
      }
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 12
      },
      sm: {
        span: 24,
        offset: 12
      }
    }
  };

  return (
    <div className="code-box">
      <span className="code-box-title">Rate Detail</span>
      <Col span={12}>
        <FormItem {...formItemLayout} label="Rate Code">
          {getFieldDecorator("rate_code", {})(
            <Cascader
              key={currentRate.key}
              options={currentRate}
              onChange={onSelectRate}
            />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Room Rate">
          {getFieldDecorator("room_rate", {
            initialValue: selectedRate.room_rate
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Currency">
          {getFieldDecorator("currency", {
            initialValue: selectedRate.currency
          })(<Input />)}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator("early_booking", {})(
            <Checkbox className="checkbox" onChange={onCheckboxChange}>
              Early Booking Discount
            </Checkbox>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Checkbox className="checkbox" onChange={onCheckboxChange}>
            Bona Fide Commision
          </Checkbox>
        </FormItem>
      </Col>

      <Col span={12}>
        <FormItem {...secondColumnLayout}>
          {getFieldDecorator("selected", {
            // initialValue: selectedRate.currency
          })(
            <Checkbox className="fixed" onChange={onCheckboxChange}>
              Fixed Rate
            </Checkbox>
          )}
        </FormItem>
      </Col>
    </div>
  );
  // }
}

const ReservationDetail = Form.create()(FormReservasi);

export default ReservationDetail;
