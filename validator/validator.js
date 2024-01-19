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
        const pattern = /^[a-zA-Z\s]+$/;
        return pattern.test(dataInput);
    }
}
export default Validator;