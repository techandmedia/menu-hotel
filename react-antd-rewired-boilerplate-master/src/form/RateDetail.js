import React from "react";
import { Form, Input, Col, Cascader, Checkbox } from "antd";
// import { success, error } from "../../Basic Component/InformationModal";
import { getRate } from "../Fetch/GetData";
// import './styles.css'

// Form Isi Jadwal
const FormItem = Form.Item;

class FormReservasi extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    dataRate: [],
    rate: [],
    selectedRate: []
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  getDataRate = () => {
    getRate(this.props.URL).then(data => {
      this.setState({
        dataRate: data
      });
    });
  };

  componentDidMount() {
    this.getDataRate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataRate !== this.state.dataRate) {
      this.setState({
        rate: this.state.dataRate.map(data => ({
          value: data.rate_code,
          label: data.rate_code
        }))
      });
    }
  }

  onSelectRate = selected => {
    for (let i = 0; i < this.state.dataRate.length; i++) {
      if (this.state.dataRate[i].rate_code === selected[0]) {
        this.setState({
          selectedRate: this.state.dataRate[i]
        });
      }
    }
  };

  onCheckboxChange = checked => {
    console.log(checked.target.checked);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataRate, rate, selectedRate } = this.state;
    const { dataForm } = this.props;
    console.log(dataForm);

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

    const reservation_status = [
      {
        value: "ga",
        label: "Guaranteed"
      },
      {
        value: "ng",
        label: "Not Guaranteed"
      }
    ];

    return (
      <div className="code-box">
        <span className="code-box-title">Rate Detail</span>
        <Col span={12}>
          <FormItem {...formItemLayout} label="Rate Code">
            {getFieldDecorator("rate_code", {})(
              <Cascader options={rate} onChange={this.onSelectRate} />
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
            {getFieldDecorator("early_booking", {
              // initialValue: selectedRate.currency
            })(
              <Checkbox className="checkbox" onChange={this.onCheckboxChange}>
                Early Booking Discount
              </Checkbox>
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Checkbox className="checkbox" onChange={this.onCheckboxChange}>
              Bona Fide Commision
            </Checkbox>
          </FormItem>
        </Col>

        <Col span={12}>
          <FormItem {...secondColumnLayout}>
            {getFieldDecorator("selected", {
              // initialValue: selectedRate.currency
            })(
              <Checkbox className="fixed" onChange={this.onCheckboxChange}>
                Fixed Rate
              </Checkbox>
            )}
          </FormItem>
        </Col>
      </div>
    );
  }
}

const ReservationDetail = Form.create()(FormReservasi);

export default ReservationDetail;
