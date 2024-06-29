class customErrorHandler extends Error {
    constructor(message, statuscode, accessToken) {
      super();
      this.message = message;
      this.statuscode = statuscode;
      this.accessToken = accessToken;
    }
  
    static alreadyexist(message) {
      return new customErrorHandler(message, 409);
    }
  
    static DatanotSaved(message) {
      return new customErrorHandler(message, 400);
    }
  
    static Usernotfound(message) {
      return new customErrorHandler(message, 404);
    }
    static invalidcredentials(message) {
      return new customErrorHandler(message, 401, null);
    }
  }
  
  export default customErrorHandler;
  