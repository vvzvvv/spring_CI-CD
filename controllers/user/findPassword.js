const smtpTransport = require("../../emailVerificationConfig");

const findPassword = async function (req, res) {

    const { email } = req.body;

    const emailOptions = {
        from: "VerifySpringEmail@gmail.com",
        to: email,
        subject: "비밀번호 초기화",
        text: "http://localhost:3000/user/password/change"
    };

    try {
        await smtpTransport.sendMail(emailOptions);
        res.send('Email sent with password reset instructions');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    } finally {
        smtpTransport.close();
    }
};

module.exports = findPassword;