import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function LoginPage(props) {
    return(
        <div classname='container'>
            <div className='row'>
                
                <div className='col-sm-5 offset-1'>
                    <div className="logo">
                        <img src={require('./images/flex-logo.png')} alt='logo' />
                    </div>
                </div>

                <div className='col-sm-6'>
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