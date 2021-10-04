import React from 'react';
import { Form } from 'react-bootstrap';
import { FaHome, FaRegEnvelopeOpen } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-8 p-4 ">
                    <h5>Send a message and we'll responed as soos as possible
                    </h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <button className='button-contact'>Send Message</button>
                    </Form>

                </div>
                <div className="col-md-4 pt-4">
                    <div>
                        <FaHome color='#03B97C' size='1.5em' />
                        <h3>  Reach Us
                        </h3>
                        <p>
                            2512, New Market, <br />
                            Eliza Road, Sincher 80 CA,<br />
                            Canada, USA
                        </p>
                    </div>
                    <div>
                        <FaRegEnvelopeOpen color='#03B97C' size='1.5em' />
                        <h3>  Reach Us
                        </h3>
                        <p>
                            Mdnowsdhad9@gmail.com<br />
                            nowshadmd74@gmail.com
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
