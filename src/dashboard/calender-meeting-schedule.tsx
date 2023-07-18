import './style.css';
import { CalendarOutlined } from '@ant-design/icons';
import { Card, Col, Row, Space, Tag } from 'antd';

export const CalenderMeetingSchedule: React.FC = () => {

    return (
        <div>
            <Row gutter={24}>
                <Col offset={1} span={22} className="remove-col-padding">
                    <Card title="Calender Schedule" className="card-custom-title calender-schedule-margin-align" hoverable={true} bordered={true} >
                        <table className="table dashboard-table" width="100%">
                            <thead>
                                <tr>
                                    <th className="dashboard-meeting-font dashboard-title">Name</th>
                                    <th className="dashboard-meeting-font dashboard-title">Description</th>
                                    <th className="dashboard-meeting-font dashboard-title">Meeting Importance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-content-align">
                                        <h3 className="dashboard-title" style={{ marginBottom: '0px', fontSize: '18px' }}> {'Call with Hilda'}</h3>
                                        <p style={{ marginTop: '0px' }}>
                                            <CalendarOutlined
                                                className="meeting-sub-text"
                                            />{' '}
                                            {'21 Jul | 08:20-10.30'}
                                        </p>
                                    </td>
                                    <td className="td-content-align">a list of topics, action item, and activities you want to discuss during the meeting.</td>
                                    <td className="td-content-align"> <Space size={[0, 8]} wrap>
                                        <Tag color="green" className="tag-custom-design tag-success">Avg</Tag>
                                    </Space></td>
                                </tr>

                                <tr>
                                    <td className="td-content-align">
                                        <h3 className="dashboard-title" style={{ marginBottom: '0px', fontSize: '18px' }}> {'Call with Hilda'}</h3>
                                        <p style={{ marginTop: '0px' }}>
                                            <CalendarOutlined
                                                className="meeting-sub-text"
                                            />{' '}
                                            {'21 Jul | 08:20-10.30'}
                                        </p>
                                    </td>
                                    <td className="td-content-align">a list of topics, action item, and activities you want to discuss during the meeting.</td>
                                    <td className="td-content-align">
                                        <Space size={[0, 8]} wrap>
                                            <Tag color="red" className="tag-custom-design tag-danger">High</Tag>
                                        </Space></td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>

                </Col>


            </Row>
        </div>
    )


}