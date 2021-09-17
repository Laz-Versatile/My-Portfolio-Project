import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState();

    const { register, handleSubmit, formState: { errors }} = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_5DQtXXN4a0TyMCG8OENk5";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Kind fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
            <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    {/* NAME INPUT */}
                    <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            {...register("name", { 
                                required: true,
                                maxLength: 20 })}
                        />
                        <div className="line"></div>
                    </div>
                    <span>
                        {errors.name && <p className="error-message">Please enter a name with fewer than 20 characters</p>}
                    </span>
                    {/* PHONE INPUT */}
                    <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            {...register("phone", { required: true })}
                        />
                        <div className="line"></div>
                    </div>
                        {errors.phone && <p className="error-message">Please add your phone number</p>}
                    
                    {/* EMAIL INPUT */}
                    <div className="text-center">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="johndoe@example.com"
                            name="email"
                            {...register("email", { 
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                        />
                        <div className="line"></div>
                    </div>
                        {errors.email && <p className="error-message">Invalid email</p>}
                   
                    {/* SUBJECT INPUT */}
                    <div className="text-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            {...register("subject", { required: true, })}
                        />
                        <div className="line"></div>
                    </div>
                        {errors.subject && <p className="error-message">OOPS, you forgot to add the subject</p>}
                    </div> 
                  <div className="col-md-6 col-xs-12">
                      {/* DESCRIPTION INPUT */}
                      <div className="text-center">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Kindly describe your project..."
                            name="description"
                            {...register("description", {
                                    required: true, })}
                        ></textarea>
                        <div className="line"></div>
                    </div>
                        {errors.description && <p className="error-message">Please describe shortly your project...</p>}
                    <button className="btn-main-offer contacts-btn" type="submit">contact me</button>
                      </div> 
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
