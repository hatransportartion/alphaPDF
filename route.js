//Router for merge api /api/merge
const express = require("express");
const router = express.Router();

const { validateRequestBody } = require("./utility");

router.post("/get", async (req, res) => {
    const requestBody = req.body;
    if (!requestBody) {
        return res.status(400).json({ error:true, message: "Request body is required" });
    }
    const {error, message} = await validateRequestBody(requestBody);
    //if error is not null, return error
    if (error) {
        return res.status(400).json({ error:true, message: message });
    }
    const { templateID, data } = requestBody;
    res.status(200).json({ message: "API working" });
});


module.exports = router;
