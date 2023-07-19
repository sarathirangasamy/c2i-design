import './styles.css';
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Row } from 'antd';

export const Mentor: React.FC = () => {

    const extraButton = (
        <div className="head-box-content">
            <div>
                <Input
                    autoComplete="off"
                    placeholder="Search by Title"
                    className="customize-form-input search-input-organization"
                    prefix={<SearchOutlined />}
                />
            </div>

            <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                className="mentor-create-btn"
                block
            >
                Create
            </Button>
        </div>
    );

    return (

        <div>
            {/* //Mentor Card Ui// */}

            <Card
                title={'Mentor List'}
                extra={extraButton}
                className="card-custom-title mentor-card-margin-align"
            >
                <Row gutter={16}>
                    <Col xl={{ span: 11, offset: 1 }} lg={12} md={24} sm={24} xs={24} className="mentor-custom-col">
                        <Card className="dashboard-cards" hoverable={true}>
                            <Row className="card-content" gutter={16}>

                                <Col span={6} style={{ margin: 'auto' }}>
                                    <div className="">
                                        <img alt='' className='mentor-img-align' src="/images/icon/ellipse.png" />
                                    </div>
                                </Col>


                                <Col span={14}>
                                    <div className="card-headers">
                                        <h4 className='mentor-custom-style mentor-text-primary'>Sarathi</h4>
                                        <h6 className='mentor-custom-style mentor-text-secondary'>sarathi@blackflux.in</h6>
                                        <h6 className='mentor-custom-style mentor-text-secondary'>
                                            91
                                            6464656544
                                        </h6>
                                    </div>
                                </Col>

                                <Col span={4}>
                                    <div>
                                        <h5
                                            className='mentor-status-text'
                                            style={
                                                { color: 'red' }
                                            }
                                        >
                                            InActive
                                        </h5>

                                        <span
                                            className="mentor-detail-text"
                                        >
                                            <h5>Details</h5>
                                        </span>
                                    </div>
                                </Col>

                            </Row>
                        </Card>
                    </Col>

                    <Col xl={{ span: 11 }} lg={12} md={24} sm={24} xs={24} className="mentor-custom-col">
                        <Card className="dashboard-cards" hoverable={true}>
                            <Row className="card-content" gutter={16}>

                                <Col span={6} style={{ margin: 'auto' }}>
                                    <div className="">
                                        <img alt='' className='mentor-img-align' src="/images/icon/ellipse.png" />
                                    </div>
                                </Col>

                                <Col span={14}>
                                    <div className="card-headers">
                                        <h4 className='mentor-custom-style mentor-text-primary'>Sarathi</h4>
                                        <h6 className='mentor-custom-style mentor-text-secondary'>sarathi@blackflux.in</h6>
                                        <h6 className='mentor-custom-style mentor-text-secondary'>
                                            91
                                            6464656544
                                        </h6>
                                    </div>
                                </Col>

                                <Col span={4}>
                                    <div>
                                        <h5
                                            className='mentor-status-text'
                                            style={
                                                { color: '#56CA00' }
                                            }
                                        >
                                            Active
                                        </h5>

                                        <span
                                            className="mentor-detail-text"
                                        >
                                            <h5>Details</h5>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col xl={{ span: 11, offset: 1 }} lg={12} md={24} sm={24} xs={24} className="mentor-custom-col">
                        <Card className="dashboard-cards" hoverable={true}>
                            <Row className="card-content" gutter={16}>

                                <Col span={6} style={{ margin: 'auto' }}>
                                    <div className="">
                                        <img alt='' className='mentor-img-align' src="/images/icon/ellipse.png" />
                                    </div>
                                </Col>


                                <Col span={14}>
                                    <div className="card-headers">
                                        <h4 className='mentor-custom-style mentor-text-primary'>Sarathi</h4>
                                        <h6 className='mentor-custom-style mentor-text-secondary'>sarathi@blackflux.in</h6>
                                        <h6 className='mentor-custom-style mentor-text-secondary'>
                                            91
                                            6464656544
                                        </h6>
                                    </div>
                                </Col>

                                <Col span={4}  >
                                    <div>
                                        <h5
                                            className='mentor-status-text'
                                            style={
                                                { color: 'red' }
                                            }
                                        >
                                            InActive
                                        </h5>

                                        <span
                                            className="mentor-detail-text"
                                        >
                                            <h5>Details</h5>
                                        </span>
                                    </div>
                                </Col>

                            </Row>
                        </Card>
                    </Col>

                    <Col xl={{ span: 11 }} lg={12} md={24} sm={24} xs={24} className="mentor-custom-col">
                        <Card className="dashboard-cards" hoverable={true}>
                            <Row className="card-content" gutter={16}>

                                <Col span={6} style={{ margin: 'auto' }}>
                                    <div className="">
                                        <img alt='' className='mentor-img-align' src="/images/icon/ellipse.png" />
                                    </div>
                                </Col>

                                <Col span={14}>
                                    <div className="card-headers">
                                        <h4 className='mentor-custom-style mentor-text-primary'>Sarathi</h4>
                                        <h6 className='mentor-custom-style mentor-text-secondary'>sarathi@blackflux.in</h6>
                                        <h6 className='mentor-custom-style mentor-text-secondary'>
                                            91
                                            6464656544
                                        </h6>
                                    </div>
                                </Col>

                                <Col span={4}>
                                    <div>
                                        <h5
                                            className='mentor-status-text'
                                            style={
                                                { color: '#56CA00' }
                                            }
                                        >
                                            Active
                                        </h5>

                                        <span
                                            className="mentor-detail-text"
                                        >
                                            <h5>Details</h5>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Card>

        </div>

    )
}