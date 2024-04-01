import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = ({ item }) => {
    return (
        <Row className="contact-item">
            <Col lg={1}>
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                    alt=""
                    width={50}
                />
            </Col>
            <Col lg={10}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    );
};

export default ContactItem;
