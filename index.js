app.post("/registration", (req, res) => {
    let { name, email, password, gender } = req.body;

    let errors = {};

    // Name validation
    if (!name) {
        errors.name = "name daw";
    }

    // Email validation
    if (!email) {
        errors.email = "email daw";
    }

    // Password validation
    if (!password) {
        errors.password = "password daw";
    }

    // Gender validation
    if (!gender) {
        errors.gender = "gender daw";
    }

    // Check for errors
    if (
        errors.name ||
        errors.email ||
        errors.password ||
        errors.gender
    ) {
        return res.send(errors);
    }

    // Successful 
    res.send("registration done");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});