import React from "react";
import { Table, Button, Row, Col, Card, Radio } from "antd";
import moment from "../Fetch/moment";

import FormResNumber from "../form/FormResNumber";

import { getReservation } from "../Fetch/GetData";

const RadioGroup = Radio.Group;

class OperatorDashboard extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    tabelUtama: true,
    dataReservation: null,
    len: null,
    // detail: {
    nights: 0,
    quantity: 0,
    formReservasi: false,
    reservation_number: null,
    value: null,
    departToday: false,
    departTable: [],
    dateToday: moment()
    // }
  };

  componentDidMount() {
    this.getDataReservation();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.dataReservation);
    // console.log(this.state.dataReservation);
    if (prevState.dataReservation !== this.state.dataReservation) {
      this.setState({
        len: this.state.dataReservation.length
      });
      this.getQuantity();
      this.getDepartToday();
    }
  }

  getDataReservation = () => {
    getReservation(this.props.URL).then(data => {
      this.setState({
        dataReservation: data
      });
    });
  };

  getDepartToday = () => {
    const { dataReservation, dateToday, departTable } = this.state;
    for (let i = 0; i < dataReservation.length; i++) {
      const dateTodayNow = moment(dataReservation[i].arrival_date).format(
        "DD/MM/YY"
      );
      // console.log(dateTodayNow);
      if (moment(dateToday).format("DD/MM/YY") === dateTodayNow) {
        // this.setState({ departTable: dataReservation[i] });
        departTable.push(dataReservation[i]);
      }
    }
  };

  getQuantity = () => {
    this.state.dataReservation.map(res => {
      this.setState(prevState => ({
        nights: prevState.nights + res.nights,
        quantity: prevState.quantity + res.quantity
      }));
    });
  };

  // handle Pagination
  handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  onFormNumberClick = (e, rn) => {
    // console.log(rn);
    this.setState({
      tabelUtama: false,
      formReservasi: true,
      reservation_number: rn,
      departToday: false
    });
  };

  onBackToMenu = () => {
    this.setState({
      tabelUtama: true,
      formReservasi: false
    });
  };

  onChange = e => {
    const radio = e.target.value;
    this.setState({
      value: radio
    });
    if (radio === 1) {
      console.log(radio);
      this.setState({
        departToday: false,
        tabelUtama: true,
        formReservasi: false
      });
    } else if (radio === 2) {
      console.log(radio);
    } else if (radio === 3) {
      console.log(radio);
    } else if (radio === 4) {
      console.log(radio);
      this.setState({
        departToday: true,
        tabelUtama: false,
        formReservasi: false
      });
    }
  };

  render() {
    const {
      dataReservation,
      tabelUtama,
      len,
      formReservasi,
      reservation_number,
      departToday,
      departTable
    } = this.state;

    console.log(dataReservation);

    const { URL } = this.props;

    let { sortedInfo } = this.state;

    sortedInfo = sortedInfo || {};

    const columns = [
      {
        title: "ResNo",
        dataIndex: "reservation_number",
        key: "reservation_number",
        sorter: (a, b) => a.reservation_number - b.reservation_number,
        sortOrder:
          sortedInfo.columnKey === "reservation_number" && sortedInfo.order,
        render: (text, record) => (
          <span
            style={{ cursor: "pointer" }}
            onClick={e => this.onFormNumberClick(e, record.reservation_number)}
          >
            {record.reservation_number}
          </span>
        )
      },
      {
        title: "Reserve Name",
        dataIndex: "reservation_name",
        key: "reservation_name",
        // sorter: (a, b) => a.name.length - b.name.length,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => <span>{record.reservation_name}</span>
      },
      {
        title: "Guest Name",
        dataIndex: "reservation_guest",
        key: "reservation_guest",
        // sorter: (a, b) => a.name.length - b.name.length,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        render: (text, record) => <span>{record.reservation_guest}</span>
      },
      {
        title: "Arrival",
        dataIndex: "arrival_date",
        key: "arrival_date",
        render: (text, record) => (
          <span>{moment(record.arrival_date).format("DD/MM/YY")}</span>
        )
      },
      {
        title: "Depart",
        dataIndex: "depart_date",
        key: "depart_date",
        render: (text, record) => (
          <span>{moment(record.depart_date).format("DD/MM/YY")}</span>
        )
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category"
      },
      {
        title: "Nights",
        dataIndex: "nights",
        key: "nights"
      },
      {
        title: "Qty",
        dataIndex: "quantity",
        key: "quantity"
      },
      {
        title: "Room Rate",
        dataIndex: "room_rate",
        key: "room_rate"
      }
    ];

    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    return (
      <div>
        <div className="table-operations" />
        <h1>
          Operator Dashboard{" "}
          {formReservasi && (
            <Button onClick={this.onBackToMenu} style={{ marginLeft: 10 }}>
              Kembali ke Menu Reservasi
            </Button>
          )}
        </h1>
        {(() => {
          if (tabelUtama) {
            return (
              <React.Fragment>
                <Table
                  columns={columns}
                  dataSource={dataReservation}
                  onChange={this.handleChange}
                  // Warning: Each record in table should have a unique `key` prop,
                  // or set `rowKey` to an unique primary key.
                  rowKey="reservation_number" //to prevent error above
                />
                <p>
                  Total: Room: {len}{" "}
                  <span style={{ marginLeft: 10 }}>
                    Total Nights: {this.state.nights}
                  </span>
                  <span style={{ marginLeft: 10 }}>
                    Total Quantity: {this.state.quantity}
                  </span>
                </p>
                <div style={{ background: "#ECECEC", padding: "30px" }}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card title="Display Options" bordered={false}>
                        <RadioGroup
                          onChange={this.onChange}
                          value={this.state.value}
                        >
                          <Radio style={radioStyle} value={1}>
                            Reservations
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            Resident
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            Arrival - Today
                          </Radio>
                          <Radio style={radioStyle} value={4}>
                            Depart - Today
                          </Radio>
                        </RadioGroup>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Main Reservation" bordered={false}>
                        Card content
                      </Card>
                    </Col>
                  </Row>
                </div>
              </React.Fragment>
            );
          } else if (departToday) {
            return (
              <React.Fragment>
                <Table
                  columns={columns}
                  dataSource={departTable}
                  onChange={this.handleChange}
                  // Warning: Each record in table should have a unique `key` prop,
                  // or set `rowKey` to an unique primary key.
                  rowKey="reservation_number" //to prevent error above
                />
                <p>
                  Total: Room: {len}{" "}
                  <span style={{ marginLeft: 10 }}>
                    Total Nights: {this.state.nights}
                  </span>
                  <span style={{ marginLeft: 10 }}>
                    Total Quantity: {this.state.quantity}
                  </span>
                </p>
                <div style={{ background: "#ECECEC", padding: "30px" }}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card title="Display Options" bordered={false}>
                        <RadioGroup
                          onChange={this.onChange}
                          value={this.state.value}
                        >
                          <Radio style={radioStyle} value={1}>
                            Reservations
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            Resident
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            Arrival - Today
                          </Radio>
                          <Radio style={radioStyle} value={4}>
                            Depart - Today
                          </Radio>
                        </RadioGroup>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card title="Main Reservation" bordered={false}>
                        Card content
                      </Card>
                    </Col>
                  </Row>
                </div>
              </React.Fragment>
            );
          } else if (formReservasi) {
            return (
              <div>
                <FormResNumber
                  URL={URL}
                  reservation_number={reservation_number}
                  dataReservation={dataReservation}
                  style={{ marginTop: 10 }}
                />
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default OperatorDashboard;
