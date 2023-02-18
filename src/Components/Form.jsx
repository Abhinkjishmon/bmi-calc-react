import React, { useState } from 'react'

const Form = () => {
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    const [alert,setAlert] = useState(false);
    const getWeight = (e) => {
        console.log(e.target.value);
        setweight(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(isNaN(weight) || isNaN(height)){
            console.log("Not a valid input");
            setAlert(true)
        }
        else{
            console.log(weight);
            console.log(height);
            setAlert(false)
        }
    }
    let alertMessage
    if(alert){
        alertMessage = <div className="alert alert-danger" role="alert">Please Enter Valid Datas</div>
    }
    else{
        alertMessage = ''
    }
    return (
            <div className="col-sm-4 shadow rounded px-5">
                <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col col-sm-6">
                            <div className="my-3">
                                <label className="form-label">Weight(kg) :</label>
                                <input
                                    type="text"
                                    value={weight}
                                    onChange={getWeight}
                                    className='form-control'
                                    required
                                />
                            </div>
                        </div>
                        <div className="col col-sm-6">
                            <div className="my-3">
                                <label className="form-label">Height(m) :</label>
                                <input
                                    type="text"
                                    value={height}
                                    onChange={(e) => setheight(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary my-3"
                        value="Get BMI"
                    />
                </form>
                {alertMessage}
            </div>
    )
}

export default Form