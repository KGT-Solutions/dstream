import React, { useState } from 'react';
import { Button, Input } from '@mobiscroll/react-lite';
import VideoInput from "../components/VideoInput";
import "../Styles/VideoInput.css";
import UploadIcon from '@mui/icons-material/Upload';


function Upload() {
    // const [inputField, setInputField] = useState({
    //     first_name: '',
    //     last_name: '',
    //     gmail: ''
    // })

    // const inputsHandler = (e) => {
    //     setInputField({ [e.target.name]: e.target.value })
    // }

    // const submitButton = () => {
    //     alert(inputField.first_name)
    // }

    return (
        <div>
            <div className="mbsc-row">
                <div className="gap mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                    <Input label="Title" inputStyle="box" labelStyle="floating" placeholder="Enter your Video Title" />
                </div>
                <div className="gap mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                    <Input label="Access" inputStyle="box" labelStyle="floating" placeholder="Access to" />
                </div>
                <div className="gap mbsc-col-12 mbsc-col-lg-6">
                    <Input label="Address" inputStyle="box" labelStyle="floating" placeholder="What is your address?" />
                </div>
            </div>

            <div className="mbsc-row">
                <div className="gap mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                    <Input label="Town" inputStyle="box" labelStyle="floating" placeholder="Enter your town" />
                </div>
                <div className="gap mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                    <Input label="State" inputStyle="box" labelStyle="floating" placeholder="Select your state" />
                </div>
                <div className="gap mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                    <Input label="Zip" inputStyle="box" labelStyle="floating" placeholder="What is your zip code" />
                </div>
                <div className="gap">
                    <VideoInput width={400} height={300} />
                </div>
            </div>
            <div className="mbsc-row">
                <div className="gap mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
                    <div className="mbsc-button-group-block">
                        <Button color="success"><UploadIcon /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload;