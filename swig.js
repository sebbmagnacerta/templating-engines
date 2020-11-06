let swig = require('swig');


let template = `{ 
    "@context" : [ "https://www.w3.org/2018/credentials/v1","https://schema.opencerta.org/fhir/202009"],
    "type": ["VerifiableCredential","FHIRCredential"],
    "id": "{{ credential_id }}",
    "issuer": "{{ issuer_ref }}",
    "issuanceDate": "{{ issuance_date }}",
    "expirationDate": "{{ expiration_date }}",
    "credentialSubject": {
        "type": "FHIRCredential",
        "id": "{{ subject.id }}",
        "givenName": "{{ subject.givenName}}",
        "additionalName": "{{ subject.additionalName}}",
        "familyName": "{{ subject.familyName}}",
        "gender": "{{ subject.gender}}",
        "honorificPrefix": " {% if subject.honorificPrefix %}
                                {{ subject.honorificPrefix }}
                            {% else %}
                                default prefix
                            {% endif %}",
        "honorificSuffix": "{{ subject.honorificSuffix }}",
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
    honorificSuffix : "sufix",
    photograph : "photograph"
};

let fhir = {
    version : "1.0.0"
}

let values = {
    credential_id : "http://example.edu/credentials/1872",
    issuer_ref : "https://example.edu/issuers/565049",
    issuance_date : "2010-01-01T19:73:24Z",
    expiration_date : "2010-01-01T20:73:24Z",
    subject : subject,
    fhir : fhir
}


let result = swig.render(template, { locals : values});

console.log(result);
console.log(JSON.parse(result));