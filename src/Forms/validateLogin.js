export default function validateLogin(values) {
    let errors = {}

    if (!values.email) { 
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Put in Your email dummy";
    }
    if (!values.password) {
        errors.password = "Protect yo self";
    } else if (values.password.length < 6) {
        errors.password ="at least 6 characters fool";
    }
    return errors;
}