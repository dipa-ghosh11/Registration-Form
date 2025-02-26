const InputComponents = ({ name, type, handleChange, handleBlur, values, errors, touched })=>{
    const toCapital = (str) =>
        str.charAt(0).toUpperCase() + str.slice(1);

    const customhandler = (e) => {
        handleChange(e);
        localStorage.setItem(name, e.target.value);
    }

    return (
        <div className="relative flex flex-col input-group">
            <input
                type={type}
                id={name}
                name={name}
                placeholder=""
                className="outline-none h-15 bg-transparent border-2 border-gray-300 rounded-md"
                value={values[name]}
                onChange={customhandler}
                onBlur={handleBlur}
            /><label htmlFor={name} className='absolute top-1/2 left-1 px-1 -translate-y-1/2 text-slate-500 text-lg pointer-events-none bg-white transition-all-0.2s-ease '>{errors[name] && touched[name] ? <span className='text-red-500'>{errors[name]}</span> : toCapital(name)}</label>
        </div>
    )
}

export default InputComponents;