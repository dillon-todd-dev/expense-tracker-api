const express = require('express');
const userRoute = require('./routes/user.route');

module.exports.start = () => {
    const web = express();
    const PORT = process.env.PORT || 3000;

    web.use('/users', userRoute);

    web.listen(PORT, () => console.log(`server listing on port ${PORT}`));
}
