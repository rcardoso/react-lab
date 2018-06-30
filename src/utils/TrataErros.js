import Topics from "../utils/Topics"

export default class TrataErros {
    publicaErros(errorObject){
        
        errorObject.errors.forEach(function(error){
            Topics.AUTHOR_FORM_ERRORS.publish(error)
        })
    }
}