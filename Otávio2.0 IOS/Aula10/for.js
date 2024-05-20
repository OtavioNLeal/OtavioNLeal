let email = [
    'email1@gmailcom',
    'email2@gmailcom',
    'email3@gmailcom',
    'email4@gmailcom',

]

//for (let cont = 0; cont < email.length; cont++) {
//    console.log(`Email envido para: ${email[cont]}`);
//}

email.forEach((email)=>{
    console.log(`E-mail enviado para: ${email}`);
})
console.log('--- --- --- --- --- ---');

email.forEach((email, index, array)=>{
    console.log(`E-mail enviado para: ${email}`);
    console.log(`Você é o numero: ${index} da lista`);
    console.log(`Elemento da lista: ${array}`);
})
