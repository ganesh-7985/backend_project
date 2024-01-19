class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", error = [], statck = "") {
      super(message);
      this.statusCode = statusCode;
      this.error = error;
     this.message=message
      this.success = false;
      this.data=data
    }
  }
  
 if (statck){
    this.stack= statck
 }
 else{
    Error.captureStackTrace(this,this.constructor)
 }