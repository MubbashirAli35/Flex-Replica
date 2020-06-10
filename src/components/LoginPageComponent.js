import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function LoginPage(props) {
    return(
        <div classname='container'>
            <div className='row'>
                
                <div className='col-6'>
                    <div style={{ marginLeft: '20%'}}>
                        <div className="logo">
                            <img src={require('./images/flex-logo.png')} alt='logo' />
                        </div>
                        <h2 className='font-styles' style={{ marginTop: '7%', marginLeft: '25%' }} >Sign In</h2>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-8'>
                                    <Form>
                                        <FormGroup>
                                            <Label for='roll_no' style={{ fontFamily: 'Times New Roman'}}>Roll No.</Label>
                                            <Input type='roll_no' name='roll_no' id='roll_no' 
                                                placeholder='Roll Number i.e (17I-1234)' />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for='password' style={{ fontFamily: 'Times New Roman'}}>Password</Label>
                                            <Input type='password' name='password' id='password' 
                                                placeholder='Password' />
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check style={{ fontFamily: 'Times New Roman', marginBottom: '1%' }}>
                                                <Input type='checkbox' />
                                                Remember Me
                                            </Label>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <img src={require('./images/login-page-bg-image.jpg')} 
                        alt='background' className='bg-image' />
                        <h2 className='heading-over-img'>Welcome to Flex-Student</h2>
                        <p className='p1-over-img' >For Password related queries contact concerned Academic Officer</p>
                        <p className='p2-over-img'>For Application related queries contact flex.support@nu.edu.pk</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;