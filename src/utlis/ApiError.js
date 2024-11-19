// class ApiError extends Error {
//     constructor (
//         statusCode,
//         message="Soething went wrong",
//         errors=[],
//         stack =""
//     ){
//         super(message);
//         this.statusCode=statusCode;
//         this.data=null;
//         this.message=message;
//         this.success=false;
//         this.errors=this.errors;
// 

//     if(stack){
//         this.stack=stack
//     } else {
//         Error.captureStackTrace(this, 
//             this.constructor)
//     }
// }
// }
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message); // Calls the parent constructor to set the message
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;

        // Set the stack trace if provided, otherwise capture it
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}
