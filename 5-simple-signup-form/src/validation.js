export const validateCredentials = (name, email, password) => {
    if(!name) return "Name field is required!";
    if(!isValidEmail(email)) return "Invalid email address!";
    if(password.length < 8) return "Password must be at least 8 characters!";
    return null;
}

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
