export function verifyPassword(password) {
    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    
    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }
    
    // Check if password contains at least one digit
    if (!/\d/.test(password)) {
        return false;
    }
    
    // Check if password contains at least one special character
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        return false;
    }
    
    // If all conditions are met, return true
    return true;
}
