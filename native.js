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

let primary = {
    credential_id : "http://example.edu/credentials/1872",
    issuer_ref : "https://example.edu/issuers/565049",
    issuance_date : "2010-01-01T19:73:24Z",
    expiration_date : "2010-01-01T20:73:24Z",
}


let template  = {
    "@context" : [
      "https://www.w3.org/2018/credentials/v1",
      "https://schema.opencerta.org/fhir/202009"
    ],
    "type": [
      "VerifiableCredential",
      "FHIRCredential"
    ],
    "id": `${primary.credential_id}`,
    "issuer": `${primary.issuer_ref}`,
    "issuanceDate": `${primary.issuance_date}`,
    "expirationDate": `${primary.expiration_date}`,
    "credentialSubject": {
      "type": "FHIRCredential",
      "id": `${subject.id}`,
      "givenName": `${subject.givenName}`,
      "additionalName": `${subject.additionalName}`,
      "familyName": `${subject.familyName}`,
      "gender": `${subject.gender}`,
      "honorificPrefix" : `${ !subject.honorificPrefix ? 'default prefix' : subject.honorificPrefix }`,
      "honorificSuffix": `${ subject.honorificSuffix ? subject.honorificSuffix : 'default suffix'}`,
      "photograph": `${subject.photograph}`,
      "fhirVersion": `${fhir.version}`,
      "fhirSource": {
         //fhir.payload?json
        }
    }
  }

  console.log(template);