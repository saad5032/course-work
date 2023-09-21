import { useState } from "react";
import axios from "axios";

function Contact() {

    const [formData , setFormData] = useState({
        fname : "",
        lname : "",
        phone : "",
        email : "",
        date : "",
        houseNo : "",
        city : "",
        state : "",
        postcode : "",
    })

    async function onSubmitHandler(e){
        try {
            e.preventDefault();
            console.log(formData);
            let res = await axios.post("./contact",formData)
        } catch (error) {
            console.log(error);
        }
    } 

    const onChangeHandler = (e) =>{
        console.log(e.target, e.value);
        setFormData ( { 
            ...formData, 
            [e.target.name] : e.target.value
        })
  
    }

    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form onSubmit={onSubmitHandler}>
                    {/* {console.log(formData)} */}
                    <div className="formbold-mb-5">
                        <label htmlFor="fname" className="formbold-form-label"> first name </label>
                        <input type="text" name="fname" id="fname" placeholder="full name" className="formbold-form-input" value={formData.fname} onChange={onChangeHandler} />
                    </div>
                    <div className="formbold-mb-5">
                        <label htmlFor="lname" className="formbold-form-label"> last name </label>
                        <input type="text" name="lname" id="lname" placeholder="last name" className="formbold-form-input" value={formData.lname} onChange={onChangeHandler} />
                    </div>
                    <div className="formbold-mb-5">
                        <label htmlFor="phone" className="formbold-form-label"> Phone Number </label>
                        <input type="text" name="phone" id="phone" placeholder="Phone Number" className="formbold-form-input" value={formData.phone} onChange={onChangeHandler} />
                    </div>
                    <div className="formbold-mb-5">
                        <label htmlFor="email" className="formbold-form-label"> Email Address </label>
                        <input type="text" name="email" id="email" placeholder="Email Address" className="formbold-form-input" value={formData.email} onChange={onChangeHandler} />
                    </div>
                    <div className="flex flex-wrap formbold--mx-3">
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5 w-full">
                                <label htmlFor="date" className="formbold-form-label"> date </label>
                                <input type="date" name="date" id="date" placeholder="date" className="formbold-form-input" value={formData.date} onChange={onChangeHandler} />
                            </div>

                        </div>
                    </div>
                    <div className="formbold-mb-5">
                        <label htmlFor="houseNo" className="formbold-form-label"> House no  </label>
                        <input type="text" name="houseNo" id="houseNo" placeholder="house No" className="formbold-form-input" value={formData.houseNo} onChange={onChangeHandler} />
                    </div>

                    <div className="formbold-mb-5">
                        <label htmlFor="city" className="formbold-form-label"> city </label>
                        <input type="text" name="city" id="city" placeholder="city" className="formbold-form-input" value={formData.city} onChange={onChangeHandler} />
                    </div>

                    <div className="formbold-mb-5">
                        <label htmlFor="state" className="formbold-form-label"> state </label>
                        <input type="text" name="state" id="state" placeholder="state" className="formbold-form-input" value={formData.state} onChange={onChangeHandler} />
                    </div>

                    <div className="formbold-mb-5">
                        <label htmlFor="postcode" className="formbold-form-label"> postcode </label>
                        <input type="text" name="postcode" id="postcode" placeholder="postcode" className="formbold-form-input" value={formData.postcode} onChange={onChangeHandler} />
                    </div>

                    <div>
                        <button className="formbold-btn">Contact Us</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact