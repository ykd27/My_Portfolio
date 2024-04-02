import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import classnames from 'classnames';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

export const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // service id =service_5kcchtb
    // template id =template_2n9exkj
    // public key =6X4kBrOsFupuoHxFz

    emailjs
      .send(
        'service_5kcchtb',
        'template_deegk25',
        {
          from_name: form.name,
          to_name: 'Yogendra',
          from_email: form.email,
          to_email: 'ykdykd27@gmail.com',
          message: form.message,
        },
        '6X4kBrOsFupuoHxFz'
      )
      .then(
        () => {
          setLoading(false);
          if (!form.name || !form.email || !form.message) {
            alert(`Please fill in all the required fields  \n ${form.name}`);
            return;
          }
          alert(
            `Thank you. I will get back to you as soon as possible. ${form.name}`
          );

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(`Ahh, something went wrong. Please try again. \n ${form.name}`);
        }
      );
  };

  return (
    <>
      <section className="section section-lg section-shaped">
        <form ref={formRef} onSubmit={handleSubmit}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me?</h4>
                    <p className="mt-0">
                      Reach out to me using the form below.
                    </p>
                    <FormGroup className={classnames('mt-5', {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                      >
                        {loading ? 'Sending...' : 'Send'}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
