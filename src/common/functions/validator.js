const patterns = {
    name: /^[a-zA-Z]{3,}([" "][a-zA-Z]{3,})*$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    contactNum: /^[0-9]{10}$/,
    validId: /^[0-9]{12}$/,
    creditExpiration: /^((0[1-9])|(1[0-2]))[\/\.\-]*((1[5-9])|(2[0-9]))$/,
    creditNum: /^([0-9]{4}[ ]?[-][ ]?){3}[0-9]{4}$/,
    cvc: /^[0-9]{3}$/,
}

const constants = {
    enqType: [
        'Seller Inquiry',
        'Buyer Inquiry',
        'Customer Care Concern',
        'Other Concerns'
    ]
}

function NameValidation(name){
    let retVal = {
        valid: false,
        err: false,
    }

    if(name==null || !name.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.name.test(name.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Name';
    }

    return retVal;
}

function EmailValidation(email){
    let retVal = {
        valid: false,
        err: false,
    }

    if(email==null || !email.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.email.test(email.trim().toLowerCase())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Email';
    }

    return retVal;
}

function ContactNumValidation(num){
    let retVal = {
        valid: false,
        err: false,
    }

    if(num==null || !num.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.contactNum.test(num.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Contact Number';
    }

    return retVal;
}

function DoBValidation(dob){
    let retVal = {
        valid: false,
        err: false,
    }

    if(!dob || dob == ''){
        retVal.err = 'Field is required';
    } else if(dob < new Date()){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Date of Birth';
    }

    return retVal;
}

function CreditExpirationValidation(expiration){
    let retVal = {
        valid: false,
        err: false,
    }

    if(expiration==null || !expiration.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.creditExpiration.test(expiration.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Card Expiration';
    }

    return retVal;
}

function CreditNumValidation(creditNum){
    let retVal = {
        valid: false,
        err: false,
    }

    if(creditNum==null || !creditNum.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.creditNum.test(creditNum.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Card Number';
    }

    return retVal;
}

function CVCValidation(cvc){
    let retVal = {
        valid: false,
        err: false,
    }

    if(cvc==null || !cvc.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.cvc.test(cvc.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid CVC';
    }

    return retVal;
}

function IsInputEmpty(input){
    let isEmpty = true;

    if(input && input != ''){
        isEmpty = false;
    }

    return isEmpty;
}


export {
    NameValidation,
    EmailValidation,
    ContactNumValidation,
    DoBValidation,

    CreditNumValidation,
    CreditExpirationValidation,
    CVCValidation,

    IsInputEmpty,
}