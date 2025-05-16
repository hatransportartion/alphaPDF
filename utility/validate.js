async function validateGenerateRequestBody(requestBody){
    const { templateID, data } = requestBody;
    console.log("ValidateRequestBody() -->> ", JSON.stringify(requestBody));
    if (!templateID) {
        return { error: true , message: "templateID is required" };
    }
    //template must be string
    if (typeof templateID !== "string") {
        return { error: true, message: "templateID must be a string" };
    }
    
    if (!data) {
        return { error: true, message: "data is required" };
    }
    //data must be json
    if (typeof data !== "object") {
        return { error: true, message: "data must be a json" };
    }

    return { error: null };
}

module.exports = {
    validateGenerateRequestBody
};