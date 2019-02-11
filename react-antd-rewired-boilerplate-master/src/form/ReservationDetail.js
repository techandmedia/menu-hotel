import React from "react";
import { Form, Input, Button, Col, Cascader } from "antd";
import moment from '../Fetch/moment'
// import { success, error } from "../../Basic Component/InformationModal";
// import { postJadwalKuliah } from "../../data/PostData";
// import './styles.css'
// tanggal: moment(jadwal.tanggal).format("DD MMMM YYYY"),
// Form Isi Jadwal
const FormItem = Form.Item;

class FormReservasi extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    dataForm: [],
    inputButtonOne: 0,
    selectedRsv: null
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  componentDidMount() {}

  testOnChangePlus = () => {
    this.setState(prevState => ({
      inputButtonOne: prevState.inputButtonOne + 1
    }));
  };

  testOnChangeMinus = () => {
    this.setState(prevState => ({
      inputButtonOne: prevState.inputButtonOne - 1
    }));
  };

  onChangeSelect = e => {
    this.setState({ selectedRsv: e[0] });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataForm } = this.props;
    const { selectedRsv } = this.state;
    // console.log(dataForm);

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

    const resFormLayout = {
      labelCol: {
        sm: { span: 4 }
      },
      wrapperCol: {
        sm: { span: 8 }
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
      <Form>
        <FormItem {...resFormLayout} label="ResNo" className="resno">
          {getFieldDecorator("reservation_number", {
            initialValue: dataForm.reservation_number,
            rules: [
              {
                // required: true,
                message: "Harap isi jam kuliah"
              }
            ]
          })(
            // <span>\
            <Input />
            // </span>
          )}
        </FormItem>
        <div className="code-box">
          <span className="code-box-title">Reservation Detail</span>
          <Col span={12}>
            <FormItem {...formItemLayout} label="Arrival">
              {getFieldDecorator("arrival_date", {
                initialValue: moment(dataForm.arrival_date).format("DD/MM/YY"),
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Nights">
              {getFieldDecorator("nights", {
                initialValue: dataForm.nights,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Departure">
              {getFieldDecorator("depart_date", {
                initialValue: moment(dataForm.depart_date).format("DD/MM/YY"),
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Adults">
              {getFieldDecorator("adults", {
                initialValue: dataForm.adults,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Child">
              {getFieldDecorator("child", {
                initialValue: dataForm.child,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Infant">
              {getFieldDecorator("infant", {
                initialValue: dataForm.infant,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Rm Qty">
              {getFieldDecorator("quantity", {
                initialValue: dataForm.quantity,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Cat">
              {getFieldDecorator("category", {
                initialValue: dataForm.category,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Argt">
              {getFieldDecorator("argt", {
                initialValue: dataForm.argt,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Rsv Status">
              {getFieldDecorator("reservation_status", {
                initialValue: selectedRsv
                // rules: [
                //   {
                //     // required: true,
                //     message: "Harap isi jam kuliah"
                //   }
                // ]
              })(
                <Cascader
                  options={reservation_status}
                  onChange={this.onChangeSelect}
                />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="RmNo">
              {getFieldDecorator("room_no", {
                initialValue: dataForm.room_no,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Voucher">
              {getFieldDecorator("voucher", {
                initialValue: dataForm.voucher,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Code">
              {getFieldDecorator("code", {
                initialValue: dataForm.code,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>
          </Col>

          {/* Kolom ke 2 */}
          <Col span={12}>
            <FormItem {...formItemLayout}>
              <span>
                <Button onClick={this.testOnChangePlus}>+1</Button>
                <Button onClick={this.testOnChangeMinus}>-1</Button>
                <p className="day-date">Frid</p>
              </span>
            </FormItem>
            <FormItem {...formItemLayout}>
              <p style={{ fontSize: 10, color: "white" }}>Ini text putih</p>
            </FormItem>
            <FormItem {...formItemLayout}>
              <span className="departure">
                <Button onClick={this.testOnChangePlus}>+1</Button>
                <Button onClick={this.testOnChangeMinus}>-1</Button>
                <p className="day-date">Sun</p>
              </span>
            </FormItem>
            <FormItem {...formItemLayout} label="Compl">
              {getFieldDecorator("compl", {
                initialValue: dataForm.compl,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Age">
              {getFieldDecorator("age", {
                initialValue: dataForm.age,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="ComCh">
              {getFieldDecorator("comch", {
                initialValue: dataForm.comch,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout}>
              <p style={{ fontSize: 10, color: "white" }}>Ini text putih</p>
            </FormItem>
            <FormItem {...formItemLayout} label="RTC">
              {getFieldDecorator("rtc", {
                initialValue: dataForm.rtc,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout}>
              <p style={{ fontSize: 12, color: "white" }}>Ini text putih</p>
            </FormItem>
            <FormItem {...formItemLayout}>
              <p style={{ fontSize: 12, color: "white" }}>Ini text putih</p>
            </FormItem>
            <FormItem {...formItemLayout}>
              <p style={{ fontSize: 12, color: "white" }}>Ini text putih</p>
            </FormItem>
            <FormItem {...formItemLayout} label="Memo RmNo">
              {getFieldDecorator("memo_rmno", {
                initialValue: dataForm.memo_rmno,
                rules: [
                  {
                    // required: true,
                    message: "Harap isi jam kuliah"
                  }
                ]
              })(<Input />)}
            </FormItem>
          </Col>
        </div>
      </Form>
    );
  }
}

const ReservationDetail = Form.create()(FormReservasi);

export default ReservationDetail;
