//ERROR HANDLE:----

export const errorMiddleware = (err, req, res, next) =>{
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

//ERROR HANDLE WITH TRY CATCH BECAUSE I WILL USE EVERYWHERE ASYNC AWAIT FUNCTION:----

export const asyncError = (passedFunction) => (req, res, next) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);

};
    

