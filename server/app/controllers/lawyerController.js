'use strict'

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
const UserModel = require('../model/users')
var nodemailer = require("nodemailer");
const Role = require('../model/role')
const UserRole = require('../model/userRole');
const { userDetails } = require('./userControllers');
const FirmLawyer = require('../model/firmLawyer')
// sending request to lawyer
exports.addLawyer = async (req, res) => {
    try {
        const { email, firm_id } = req.body;

        if (!email || !firm_id) {
            res.json({ success: false, message: 'email or id not found' })
            return;
        }
        const firmLawyer = new FirmLawyer({
            firm_id: firm_id,
            email: email
        });
        await firmLawyer.save();


        var transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 465,
            secure: true,
            auth: {
                user: 'testing@cognuitive.com',
                pass: '.a6evBvb'
            }
        });
        var link = `${process.env.frontendUrl}/auth/signup/${firmLawyer.firm_id}`;
        console.log(link);
        var mailOptions = {
            from: 'testing@cognuitive.com',
            to: req.body.email,
            title: 'brownie Inc',
            subject: 'Please accept request',
            html: "<!DOCTYPE html><html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'><head>    <meta charset='utf-8'>    <meta name='viewport' content='width=device-width'>    <meta http-equiv='X-UA-Compatible' content='IE=edge'>    <meta name='x-apple-disable-message-reformatting'>    <title></title>    <style id='' media='all'>        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 300;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 300;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 400;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 400;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }        /* latin-ext */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 700;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');            unicode-range: U+0100-02AF, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;        }        /* latin */                @font-face {            font-family: 'Lato';            font-style: normal;            font-weight: 700;            font-display: swap;            src: url(/fonts.gstatic.com/s/lato/v23/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;        }    </style>    <style>        /* What it does: Remove spaces around the email design added by some email clients. */        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */                html,        body {            margin: 0 auto !important;            padding: 0 !important;            height: 100% !important;            width: 100% !important;            background: #f1f1f1;        }        /* What it does: Stops email clients resizing small text. */                * {            -ms-text-size-adjust: 100%;            -webkit-text-size-adjust: 100%;        }        /* What it does: Centers email on Android 4.4 */                div[style*='margin: 16px 0'] {            margin: 0 !important;        }        /* What it does: Stops Outlook from adding extra spacing to tables. */                table,        td {            mso-table-lspace: 0pt !important;            mso-table-rspace: 0pt !important;        }        /* What it does: Fixes webkit padding issue. */                table {            border-spacing: 0 !important;            border-collapse: collapse !important;            table-layout: fixed !important;            margin: 0 auto !important;        }        /* What it does: Uses a better rendering method when resizing images in IE. */                img {            -ms-interpolation-mode: bicubic;        }        /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */                a {            text-decoration: none;        }        /* What it does: A work-around for email clients meddling in triggered links. */                *[x-apple-data-detectors],        /* iOS */                .unstyle-auto-detected-links *,        .aBn {            border-bottom: 0 !important;            cursor: default !important;            color: inherit !important;            text-decoration: none !important;            font-size: inherit !important;            font-family: inherit !important;            font-weight: inherit !important;            line-height: inherit !important;        }        /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */                .a6S {            display: none !important;            opacity: 0.01 !important;        }        /* What it does: Prevents Gmail from changing the text color in conversation threads. */                .im {            color: inherit !important;        }        /* If the above doesn't work, add a .g-img class to any image in question. */                img.g-img+div {            display: none !important;        }        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */        /* Create one of these media queries for each additional viewport size you'd like to fix */        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {            u~div .email-container {                min-width: 320px !important;            }        }        /* iPhone 6, 6S, 7, 8, and X */                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {            u~div .email-container {                min-width: 375px !important;            }        }        /* iPhone 6+, 7+, and 8+ */                @media only screen and (min-device-width: 414px) {            u~div .email-container {                min-width: 414px !important;            }        }    </style>    <style>        .primary {            background: #30e3ca;        }                .bg_white {            background: #ffffff;        }                .bg_light {            background: #fafafa;        }                .bg_black {            background: #000000;        }                .bg_dark {            background: rgba(0, 0, 0, .8);        }                .email-section {            padding: 2.5em;        }        /*BUTTON*/                .btn {            padding: 10px 15px;            display: inline-block;        }                .btn.btn-primary {            border-radius: 5px;            background: #30e3ca;            color: #ffffff;        }                .btn.btn-white {            border-radius: 5px;            background: #ffffff;            color: #000000;        }                .btn.btn-white-outline {            border-radius: 5px;            background: transparent;            border: 1px solid #fff;            color: #fff;        }                .btn.btn-black-outline {            border-radius: 0px;            background: transparent;            border: 2px solid #000;            color: #000;            font-weight: 700;        }                h1,        h2,        h3,        h4,        h5,        h6 {            font-family: 'Lato', sans-serif;            color: #000000;            margin-top: 0;            font-weight: 400;        }                body {            font-family: 'Lato', sans-serif;            font-weight: 400;            font-size: 15px;            line-height: 1.8;            color: rgba(0, 0, 0, .4);        }                a {            color: #30e3ca;        }                table {}        /*LOGO*/                .logo h1 {            margin: 0;        }                .logo h1 a {            color: #30e3ca;            font-size: 24px;            font-weight: 700;            font-family: 'Lato', sans-serif;        }        /*HERO*/                .hero {            position: relative;            z-index: 0;        }                .hero .text {            color: rgba(0, 0, 0, .3);        }                .hero .text h2 {            color: #000;            font-size: 40px;            margin-bottom: 0;            font-weight: 400;            line-height: 1.4;        }                .hero .text h3 {            font-size: 24px;            font-weight: 300;        }                .hero .text h2 span {            font-weight: 600;            color: #30e3ca;        }        /*HEADING SECTION*/                .heading-section {}                .heading-section h2 {            color: #000000;            font-size: 28px;            margin-top: 0;            line-height: 1.4;            font-weight: 400;        }                .heading-section .subheading {            margin-bottom: 20px !important;            display: inline-block;            font-size: 13px;            text-transform: uppercase;            letter-spacing: 2px;            color: rgba(0, 0, 0, .4);            position: relative;        }                .heading-section .subheading::after {            position: absolute;            left: 0;            right: 0;            bottom: -10px;            content: '';            width: 100%;            height: 2px;            background: #30e3ca;            margin: 0 auto;        }                .heading-section-white {            color: rgba(255, 255, 255, .8);        }                .heading-section-white h2 {            font-family: line-height: 1;            padding-bottom: 0;        }                .heading-section-white h2 {            color: #ffffff;        }                .heading-section-white .subheading {            margin-bottom: 0;            display: inline-block;            font-size: 13px;            text-transform: uppercase;            letter-spacing: 2px;            color: rgba(255, 255, 255, .4);        }                ul.social {            padding: 0;        }                ul.social li {            display: inline-block;            margin-right: 10px;        }        /*FOOTER*/                .footer {            border-top: 1px solid rgba(0, 0, 0, .05);            color: rgba(0, 0, 0, .5);        }                .footer .heading {            color: #000;            font-size: 20px;        }                .footer ul {            margin: 0;            padding: 0;        }                .footer ul li {            list-style: none;            margin-bottom: 10px;        }                .footer ul li a {            color: rgba(0, 0, 0, 1);        }                @media screen and (max-width: 500px) {}    </style>    <meta name='robots' content='noindex, follow'>    <script nonce='dd803d05-b5a2-41be-8fa8-717dd7f12816'>        (function(w, d) {            ! function(bv, bw, bx, by) {                bv[bx] = bv[bx] || {};                bv[bx].executed = [];                bv.zaraz = {                    deferred: [],                    listeners: []                };                bv.zaraz.q = [];                bv.zaraz._f = function(bz) {                    return function() {                        var bA = Array.prototype.slice.call(arguments);                        bv.zaraz.q.push({                            m: bz,                            a: bA                        })                    }                };                for (const bB of['track', 'set', 'debug']) bv.zaraz[bB] = bv.zaraz._f(bB);                bv.zaraz.init = () => {                    var bC = bw.getElementsByTagName(by)[0],                        bD = bw.createElement(by),                        bE = bw.getElementsByTagName('title')[0];                    bE && (bv[bx].t = bw.getElementsByTagName('title')[0].text);                    bv[bx].x = Math.random();                    bv[bx].w = bv.screen.width;                    bv[bx].h = bv.screen.height;                    bv[bx].j = bv.innerHeight;                    bv[bx].e = bv.innerWidth;                    bv[bx].l = bv.location.href;                    bv[bx].r = bw.referrer;                    bv[bx].k = bv.screen.colorDepth;                    bv[bx].n = bw.characterSet;                    bv[bx].o = (new Date).getTimezoneOffset();                    if (bv.dataLayer)                        for (const bI of Object.entries(Object.entries(dataLayer).reduce(((bJ, bK) => ({...bJ[1],                                ...bK[1]                            }))))) zaraz.set(bI[0], bI[1], {                            scope: 'page'                        });                    bv[bx].q = [];                    for (; bv.zaraz.q.length;) {                        const bL = bv.zaraz.q.shift();                        bv[bx].q.push(bL)                    }                    bD.defer = !0;                    for (const bM of[localStorage, sessionStorage]) Object.keys(bM || {}).filter((bO => bO.startsWith('_zaraz_'))).forEach((bN => {                        try {                            bv[bx]['z_' + bN.slice(7)] = JSON.parse(bM.getItem(bN))                        } catch {                            bv[bx]['z_' + bN.slice(7)] = bM.getItem(bN)                        }                    }));                    bD.referrerPolicy = 'origin';                    bD.src = '/cdn-cgi/zaraz/s.js?z=' + btoa(encodeURIComponent(JSON.stringify(bv[bx])));                    bC.parentNode.insertBefore(bD, bC)                };                ['complete', 'interactive'].includes(bw.readyState) ? zaraz.init() : bv.addEventListener('DOMContentLoaded', zaraz.init)            }(w, d, 'zarazData', 'script');        })(window, document);    </script></head><body width='100%' style='margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f1f1f1;'>    <center style='width: 100%; background-color: #f1f1f1;'>        <div style='display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;'>            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;        </div>        <div style='max-width: 600px; margin: 0 auto;' className='email-container'>            <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='margin: auto;'>                <tr>                    <td valign='top' className='bg_white' style='padding: 1em 2.5em 0 2.5em;'>                        <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>                            <tr>                                <td className='logo' style='text-align: center;'>                                    <h1><a href='#'>Brownie Inc.</a></h1>                                </td>                            </tr>                        </table>                    </td>                </tr>                <tr>                    <td valign='middle' className='hero bg_white' style='padding: 3em 0 2em 0;'>                        <img src='images/email.png' alt='' style='width: 300px; max-width: 600px; height: auto; margin: auto; display: block;'>                    </td>                </tr>                <tr>                    <td valign='middle' className='hero bg_white' style='padding: 2em 0 4em 0;'>                        <table>                            <tr>                                <td>                                    <div className='text' style='padding: 0 2.5em; text-align: center;'>                                        <h2>Hi , lets reset your password.</h2>                                        <h3>if you didn’t ask to reset you password, you can disregard this email.</h3>                                        <p><a href='" + link + "' className='btn btn-primary'>Accept request</a></p>                                    </div>                                </td>                            </tr>                        </table>                    </td>                </tr>            </table>        </div>    </center>    <script async src='https://www.googletagmanager.com/gtag/js?id=UA-23581568-13'></script>    <script>        window.dataLayer = window.dataLayer || [];        function gtag() {            dataLayer.push(arguments);        }        gtag('js', new Date());        gtag('config', 'UA-23581568-13');    </script>    <script defer src='https://static.cloudflareinsights.com/beacon.min.js/vb26e4fa9e5134444860be286fd8771851679335129114' integrity='sha512-M3hN/6cva/SjwrOtyXeUa5IuCT0sedyfT+jK/OV+s+D0RnzrTfwjwJHhd+wYfMm9HJSrZ1IKksOdddLuN6KOzw==' data-cf-beacon='{' rayId        ':'7b28dd480df5a3dc ','token ':'cd0b4b3a733644fc843ef0b185f98241 ','version ':'2023.3.0 ','si ':100}' crossorigin='anonymous'></script></body></html>",
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.json({
            'success': true,
            message: 'Link sended on your email!',
        });



    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }



}

// get firm awyer detail
exports.getFirmLawyerDetail = async (req, res) => {
    const id = req.body.id;
    if (!id) {
        res.json({ success: false, message: 'id not found' });
        return;
    }
    const firmLaywer = await FirmLawyer.findOne({ _id: req.body.id }).populate('firm_id');
    
    const modifiedFirmLawyer = {
        _id: firmLaywer._id,
        firm_id: {
            _id:firmLaywer.firm_id._id,
            name: firmLaywer.firm_id.name,
        },
        email: firmLaywer.email,
        createdAt: firmLaywer.createdAt,
        updatedAt: firmLaywer.updatedAt,
        __v: firmLaywer.__v,
    };
    
    res.json({
        success: true,
        data: modifiedFirmLawyer
    });
}


// accept request to make lawyer
exports.acceptRequest = async (req, res) => {
    const id = req.params.id;
    const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        {
            active: true
        },
        { new: true }
    );

    res.json(updatedUser); // Send the updated user data as a JSON response
}


// get team lawyers list
exports.getTeamLawyer = async (req, res) => {
    const role = await Role.findOne({ title: 'lawyer' });

    const userRole = await UserRole.find({ role_id: role._id })

    const user_ids = userRole.map((item) => {
        return item.user_id
    })
    console.log(user_ids);
    const teamLayer = await UserModel.find({ _id: { $in: user_ids }, active: 'true' });
    res.json({
        success: true,
        teamLayer,
        updatedUser: teamLayer.find(user => user._id.toString() === req.params.id)
    })
}


// get simple lawyers list
exports.getSimpleLawyers = async (req, res) => {
    const role = await Role.findOne({ title: 'lawyer' });

    const userRole = await UserRole.find({ role_id: role._id })

    const user_ids = userRole.map((item) => {
        return item.user_id
    })
    console.log(user_ids);
    const teamLayer = await UserModel.find({ _id: { $in: user_ids }, active: 'false' }).populate('firm_id')
    res.json({
        success: true,
        teamLayer
    })
}


//Delete Lawyer from Team
exports.deleteTeamMember = async (req, res) => {
    try {
        await UserModel.findOneAndDelete({ _id: req.params.id })

        res.json({
            success: true,
            message: 'User Removed successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


// get firm lawyers
exports.getFirmTeamLawyer = async (req, res) => {
    const firm_id = req.body.firm_id;
    if (!firm_id) {
        return res.json({
            success: false,
            message: 'firm_id missing!'
        });
    }
    try {
        const lawyers = await UserModel.find({ firm_id: firm_id });
        if (lawyers.length < 1) {
            return res.json({
                success: false,
                message: 'No lawyers exist against this firm'
            });
        }
        return res.json({
            success: true,
            data: lawyers
        });
    } catch (error) {
        // Handle any errors that occur during the query or processing
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

