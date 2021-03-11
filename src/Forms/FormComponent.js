import React from 'react';
import useForm from './useForm';
import validateLogin from './validateLogin';

const FormComponent = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(submit, validateLogin);

    function submit() {

    }

    return(
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                <label>Email</label>
                  <div>
                   <input name="email" type="email" value={values.email} onChange={handleChange}/>
                      {errors.email && <p>{errors.email}</p>}
                  </div>
                </div>

                <div>
                <label>Password</label>
                  <div>
                   <input name="password" type="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                  </div>
                </div>
 
               <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default FormComponent;

// by placing a type of 'email' the browser will autmatically try and validate it. Since we're tyring to do our own we instead put 'noValidate'.