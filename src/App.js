import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// 좌측에는 연락처 등록하는 폼, 우측엔 연락처 리스트와 search 창
// 리스트에 유저 이름과 전화번호 추가
// 리스트에 아이템이 몇개 있는지 보임
// 사용자가 유저를 이름검색을 통해 찾을 수 있다.
function App() {
    return (
        <div className="App">
            <h1 className="title">연락처</h1>

            <Container>
                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                    <Col>
                        <ContactList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
