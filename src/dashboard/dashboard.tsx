import { CalenderMeetingSchedule } from './calender-meeting-schedule';
import './style.css';
import { Card, Col, Row, Tag } from 'antd';

export const Dashboard: React.FC = () => {

    return (
        <div style={{ height: '100%' }}>
            <h1 className='dashboard-title dashboard-title-font'>Welcome to Connect2Investors!</h1>

            <Row className='dashboard-count-card-row' gutter={16}>
                <Col className="col-margin-align" xl={7} lg={8} md={24} sm={24} xs={24}>
                    <Card hoverable={true} className='dashboard-card-custom-design'>
                        <div>
                            <h2 className='count-title'> No.of Startups</h2>
                            <Row>
                                <Col span={6}>
                                    <label className='count-value-style'>
                                        20
                                    </label>

                                    <Tag color="purple" className='tag-custom-design'>Year of 2023</Tag>

                                </Col>
                                <Col span={18}>
                                    <img alt='' className='dashboard-count-icon'
                                        src="/images/icon/savings.png"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>


                <Col className="col-margin-align" xl={7} lg={8} md={24} sm={24} xs={24}>
                    <Card hoverable={true} className='dashboard-card-custom-design'>
                        <div>
                            <h2 className='count-title'> No.of Startups</h2>
                            <Row>
                                <Col span={6}>
                                    <label className='count-value-style'>
                                        20
                                    </label>

                                    <Tag color="purple" className='tag-custom-design'>Year of 2023</Tag>

                                </Col>
                                <Col span={18}>
                                    <img alt='' className='dashboard-count-icon'
                                        src="/images/icon/partner_exchange.png"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col className="col-margin-align" xl={7} lg={8} md={24} sm={24} xs={24}>
                    <Card hoverable={true} className='dashboard-card-custom-design'>
                        <div>
                            <h2 className='count-title'> No.of Startups</h2>
                            <Row>
                                <Col span={6}>
                                    <label className='count-value-style'>20</label>
                                    <Tag color="purple" className='tag-custom-design'>Year of 2023</Tag>

                                </Col>
                                <Col span={18}>
                                    <img alt='' className='dashboard-count-icon'
                                        src="/images/icon/rocket_launch.png"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* //Calender Schedule card// */}
            <CalenderMeetingSchedule />

        </div>
    )
}