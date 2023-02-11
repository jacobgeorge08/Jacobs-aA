const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(diffOfInput = null, ...params) {

    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MaximumLengthExceededError);
    }

    this.name = `MaximumLengthExceededError`;

    if (diffOfInput === null) {
      this.message = `Maximum length exceeded`;
    }
    else {
      this.message = `Maximum length exceeded by ${diffOfInput}`
    }


  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
