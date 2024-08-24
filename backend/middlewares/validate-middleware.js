

const validate = (schema)=> async(req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status =422;
        const extraDetails = err.errors && err.errors.length > 0 ? err.errors[0].message : 'Validation error';
        const message = "fill the inputs properly";
        const error = {
            status,
            message,
            extraDetails,
        };

        console.log(error);
        res.status(400).json({mssg: message,extraDetails});
        
    }
};


module.exports= validate;