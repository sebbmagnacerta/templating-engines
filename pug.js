const pug = require('pug');

let subject = {
  id : "did:example:ebfeb1f712ebc6f1c276e12ec21",
  givenName : "Saul",
  additionalName : "Additional Name",
  familyName : "Family Name",
  gender : "Male",
  honorificPrefix : "PREFIX",
  honorificSuffix : "SUFFIX",
  photograph : "photograph"
};

let fhir = {
  version : "1.0.0"
};

let values = {
  credential_id : "http://example.edu/credentials/1872",
  issuer_ref : "https://example.edu/issuers/565049",
  issuance_date : "2010-01-01T19:73:24Z",
  expiration_date : "2011-01-01T19:73:24Z",
  subject : subject,
  fhir : fhir
};

// Compile the source code
const compiledFunction = pug.compileFile('./resources/template.pug');

let result = compiledFunction(values);

console.log(result);
// Render a set of data
//console.log(JSON.parse(result));