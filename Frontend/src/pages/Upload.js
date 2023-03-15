import React, { useState } from 'react';
import { Button, Input } from '@mobiscroll/react-lite';
import VideoInput from "../components/VideoInput";
import "../Styles/VideoInput.css";

function Upload() {
    return (
        <div>
            <div className="mbsc-row">
                <div className="gap">
                    <VideoInput width={400} height={300} />
                </div>
            </div>

            <div className="mbsc-row">
                <div className="gap mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                    <span className='smallSpan'>Video Name </span>
                    <Input label="Title" inputStyle="box" labelStyle="floating" />
                </div>
                <div className="gap mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
                    <label>
                        <span className='smallSpan'>Description </span>
                        <textarea name="postContent" rows={5} cols={40} />
                    </label>
                </div>

                <div className="mbsc-row">
                    <div className="gap mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
                        <span className='smallSpan'>Select Age category </span>
                        <select>
                            <option value="Orange">3+</option>
                            <option value="Radish">12+</option>
                            <option value="Cherry">18+</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mbsc-row">
                <div className="gap mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
                    <div className="mbsc-button-group-block">
                        <Button color="success">Upload Details</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload;