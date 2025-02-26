import { useState } from 'react';
import { useFormik } from 'formik';
import { inputValidation } from '../schemas'
import { ToastContainer, toast } from 'react-toastify';
import InputComponents from './InputComponents';

const Form = () => {
    const [show, setShow] = useState(false);

    const clearStorage = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("age");
        localStorage.removeItem("email");
        localStorage.removeItem("cs");
    }

    const initialValues = {
        name: localStorage.getItem("name") || "",
        age: localStorage.getItem("age") || "",
        email: localStorage.getItem("email") || "",
        cs: localStorage.getItem("cs") || "",
    };
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema: inputValidation,
        onSubmit: (values, action) => {
            setTimeout(() => {
                setShow(false);
                console.log(JSON.stringify(values));
                clearStorage();
                toast.success("Form submitted successfully");
                action.resetForm();
            }, 3000);
            setShow(true);
        },
    });

    return (
        <>
            <ToastContainer />
            {show && <div className='absolute flex justify-center items-center h-screen w-screen bg-white/60 z-50'><div className="spinner">
                <div></div>
                <div></div>
                <div></div>
               
            </div></div>}
            <form className="bg-white rounded-lg px-10 py-10 flex flex-col gap-y-5 shadow-lg max-md:px-5 max-md:w-5/6" onSubmit={handleSubmit}>
                <h1 className="text-center text-slate-700 text-2xl font-extrabold mb-5 max-md:text-xl">Student Registration Form</h1>
                <InputComponents name="name" type="text" handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} />
                <InputComponents name="age" type="text" handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} />
                <InputComponents name="email" type="email" handleChange={handleChange} handleBlur={handleBlur} values={values} errors={errors} touched={touched} />
                <div className="flex flex-col relative input-group">
                    <select
                        name="cs"
                        id="cs"
                        className="outline-none h-15 bg-transparent border-2 border-gray-300 rounded-md"
                        value={values["cs"]}
                        onChange={(e) => {
                            handleChange(e);
                            localStorage.setItem("cs", e.target.value);  // Store in localStorage
                        }}
                        onBlur={handleBlur}

                    >
                        <option value="" hidden> </option>
                        <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                        <option value="Electronics and Communication Engineering">
                            Electronics and Communication Engineering
                        </option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Applied elctronics and instrumentation Engineering">
                            Applied elctronics and instrumentation Engineering
                        </option>
                        <option value="Civil Engineering">Civil Engineering</option>
                    </select><label htmlFor="cs" className='absolute top-1/2 left-1 px-1 -translate-y-1/2 text-slate-500 text-lg pointer-events-none bg-white transition-all-0.2s-ease '>{errors.cs && touched.cs ? <span className='text-red-500'>{errors.cs}</span> : "Course selection"}</label>
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white px-4 py-3 rounded-lg text-center w-full hover:bg-white hover:text-blue-500 border border-white hover:border-blue-500 transition-transform"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default Form;