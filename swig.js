let swig = require('swig');


let template = `{ 
    "@context" : [ "https://www.w3.org/2018/credentials/v1","https://schema.opencerta.org/fhir/202009"],
    "type": ["VerifiableCredential","FHIRCredential"],
    "id": "{{ credential_id }}",
    "issuer": "{{ issuer_ref }}",
    "issuanceDate": "{{ formatedIssuanceDate() }}",
    "expirationDate": "{{ formatedExpirationDate() }}",
    "credentialSubject": {
        "type": "FHIRCredential",
        "id": "{{ subject.id }}",
        "givenName": "{{ subject.givenName}}",
        "additionalName": "{{ subject.additionalName}}",
        "familyName": "{{ subject.familyName}}",
        "gender": "{{ subject.gender}}",
        "honorificPrefix": "{% if subject.honorificPrefix %}{{ subject.honorificPrefix.toUpperCase()}}{% else %}{% endif %}",
        "honorificSuffix": "{% if subject.honorificSuffix %}{{ subject.honorificSuffix.toUpperCase()}}{% else %}{% endif %}",
        "photograph": "{{ subject.photograph}}",
        "fhirVersion": "{{ fhir.version }}"
    }
}`;


let subject = {
    id : "did:example:ebfeb1f712ebc6f1c276e12ec21",
    givenName : "Saul",
    additionalName : "Additional Name",
    familyName : "Family Name",
    gender : "Male",
    honorificPrefix : "",
    honorificSuffix : "",
    photograph : "photograph"
};

let fhir = {
    version : "1.0.0"
}

let values = {
    credential_id : "http://example.edu/credentials/1872",
    issuer_ref : "https://example.edu/issuers/565049",
    formatedIssuanceDate : () => {

        let issuance_date = "05 October 2011 14:48 UTC";
        
        const event = new Date(issuance_date);

        return event.toISOString();

    },
    formatedExpirationDate : () => {
        
        let expiration_date = "05 October 2012 14:48 UTC";

        const event = new Date(expiration_date);

        console.log(event);

        return event.toISOString();
    },
    subject : subject,
    fhir : fhir
}


let result = swig.render(template, { locals : values});

console.log(result);
console.log(JSON.parse(result));