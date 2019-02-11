import React from "react";
import { Form, Input, Button, Col, Row } from "antd";
import ReservationDetail from "./ReservationDetail";
import RateDetail from "./RateDetail";
import GuestDetail from "./GuestDetail";
import FlightDetail from "./FlightDetail";
import GroupSegment from "./GroupSegment";
import DepositForm from "./Deposit";
// import { success, error } from "../../Basic Component/InformationModal";
// import { postJadwalKuliah } from "../../data/PostData";
// import './styles.css'

// Form Isi Jadwal
const FormItem = Form.Item;

class FormReservasi extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    dataForm: [],
    inputButtonOne: 0
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  componentDidMount() {
    this.props.dataReservation.map(res => {
      if (this.props.reservation_number === res.reservation_number) {
        this.setState({
          dataForm: res
        });
      }
    });
  }

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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataForm } = this.state;
    // console.log(dataForm)
    const resFormLayout = {
      labelCol: {
        sm: { span: 4 }
      },
      wrapperCol: {
        sm: { span: 8 }
      }
    };

    return (
      <Row gutter={16}>
        <Col span={8}>
          <ReservationDetail dataForm={dataForm} />
        </Col>

        <Col span={8}>
          <Form>
            <FormItem {...resFormLayout} className="resno">
              <Input />
            </FormItem>
            <RateDetail URL={this.props.URL} dataForm={dataForm} />
            <GuestDetail dataForm={dataForm} />
            <FlightDetail />
          </Form>
        </Col>

        <Col span={8}>
          <GroupSegment dataForm={dataForm} />
          <DepositForm />
        </Col>
      </Row>
    );
  }
}

const FormResNumber = Form.create()(FormReservasi);

export default FormResNumber;
