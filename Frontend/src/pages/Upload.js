import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { storeNFT } from "../uploadMetadata";
import "../Styles/VideoInput.css";

function Upload() {
    const { register, handleSubmit } = useForm();
    async function onSubmit(data) {
        console.log("submitting", data, data.video[0]);
        const result = await storeNFT(data.video[0], data.name, data.description, data.ageCategory);
        console.log(result);
      }
    return (
        <div className='minter-container'>
            <h3 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
                Mint Video
            </h3>
            <form noValidate="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="mbsc-row">
                    <input
                        {...register("video", { required: true})}
                        className="upload"
                        type="file"
                    />
                </div>
                <div className="mbsc-row">
                    <input
                        {...register("name", { required: true })}
                        placeholder="e.g. Crypto dance"
                        type="text"
                        className="form-InputBase-input form-OutlinedInput-input"
                    />
                </div>
                <div className="mbsc-row">
                    <input
                        {...register("description", { required: true })}
                        type="textarea"
                        className="form-InputBase-input form-OutlinedInput-input"
                    />
                </div>
                <div className="mbsc-row">
                    <select {...register("ageCategory")}>
                        <option value="3">3+</option>
                        <option value="12">12+</option>
                        <option value="18">18+</option>
                    </select>
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Upload;