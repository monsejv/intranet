import React from 'react'

import { Form,
        FormGroup,
        Label,
        Input,
        Button, 
        Container,
        Row,
        Col} from 'reactstrap'

const Index = () => {
    return(
        <Container>
            <Row>
                <Col sm="6">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Index