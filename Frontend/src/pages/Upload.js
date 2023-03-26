import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { storeNFT } from "../utils/uploadMetadata";
import { mintRollVideo } from "../utils/contractIntraction";
import "../Styles/VideoInput.css";

function Upload() {
    const { register, handleSubmit } = useForm();
    const [loaderHidden, setLoaderHidden] = useState(true);
    async function onSubmit(data) {
        setLoaderHidden(false);
        const token = await storeNFT(data.video[0], data.name, data.description, data.ageCategory);
        console.log(token);
        const transaction = await mintRollVideo(token.url);
        setLoaderHidden(true);
      }
    return (
        <div className='minter-container'>
            <div hidden={loaderHidden} className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
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
                    <h5>Name: </h5>
                    <input
                        {...register("name", { required: true })}
                        placeholder="e.g. Crypto dance"
                        type="text"
                        className="form-InputBase-input form-OutlinedInput-input"
                    />
                </div>
                <div className="mbsc-row">
                    <h5>Description: </h5>
                    <input
                        {...register("description", { required: true })}
                        type="textarea"
                        className="form-InputBase-input form-OutlinedInput-input"
                    />
                </div>
                <div className="mbsc-row">
                    <h5>Select Age Category: </h5>
                    <select {...register("ageCategory")}>
                        <option value="3">3+</option>
                        <option value="12">12+</option>
                        <option value="18">18+</option>
                    </select>
                </div>
                <div className="mbsc-row" ><input type="submit" /></div>
            </form>
        </div>
    )
}

export default Upload;