// Get API Secret from Postman environment
var apiSecret = pm.environment.get('apiSecret') || ''

// Set headers for JWT
var header = {
	'typ': 'JWT',
	'alg': 'HS256'
};

// Prepare timestamp in seconds
var currentTimestamp = Math.floor(Date.now() / 1000)

// Set Payload
var payload = {
	'iss': pm.environment.get('apiKey') || '',
	'ist': 'project',
	'iat': currentTimestamp,
	'exp': currentTimestamp + 30, // Expired in 30 seconds from creation
	'jti': 'jwt_nonce'
}


function base64url(source) {
    // Encode in classical base64
    encodedSource = CryptoJS.enc.Base64.stringify(source)
    
    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '')
    
    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-')
    encodedSource = encodedSource.replace(/\//g, '_')
    
    return encodedSource
}

// Encode header
var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header))
var encodedHeader = base64url(stringifiedHeader)

// Encode payload
var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload))
var encodedData = base64url(stringifiedData)

// Build token
var token = `${encodedHeader}.${encodedData}`

// Sign token
var signature = CryptoJS.HmacSHA256(token, apiSecret)
signature = base64url(signature)
var signedToken = `${token}.${signature}`

// Set token as variable
pm.environment.set('jwt', signedToken)
console.log('Signed and encoded JWT', signedToken)