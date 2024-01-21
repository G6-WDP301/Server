const Validator = {
    checkInputDateWithNow : (dateInput) => {
        const date = new Date(dateInput);
        const dateNow = new Date();
        if(date < dateNow){
            return false;
        }
        return true;
    },
    checkString : (dataInput) => {
        const pattern = /^[a-zA-ZÀ-Ỹà-ỹ\s]+$/;
        return pattern.test(dataInput);
    },
    checkEmail : (dataInput) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(dataInput)) {
            return false; // Invalid email format
          }
        const domain = dataInput.split('@')[1];
        return domain.toLowerCase() === 'gmail.com';
    },
    isValidPhoneNumber : (dataInput) => {
        const pattern = /^\d{10}$/;
        return pattern.test(dataInput);
    },
    checkLengthsString : (dataInput,lengths) => {
        return dataInput.length > lengths;
    }
}
export default Validator;