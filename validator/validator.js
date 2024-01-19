const Validator = {
    checkInputDateWithNow : (dateInput) => {
        const date = new Date(dateInput);
        const dateNow = new Date();
        if(date < dateNow){
            return false;
        }
        return true;
    }
}
export default Validator;