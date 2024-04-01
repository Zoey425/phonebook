import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
const SearchBox = () => {
    const { contact } = useSelector(state => state.keyword);

    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const searchByName = event => {
        event.preventDefault();
        dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword } });
    };
    return (
        <Form onSubmit={searchByName}>
            <Row>
                <Col lg={10}>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력해주세요"
                        value={keyword}
                        onChange={event => setKeyword(event.target.value)}
                    />
                </Col>
                <Col lg={2}>
                    <Button variant="primary" type="submit">
                        찾기
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBox;
