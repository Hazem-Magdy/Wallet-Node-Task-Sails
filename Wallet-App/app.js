const sails = require('sails');

sails.lift({
  // Configuration options
}, (err) => {
  if (err) {
    console.error('Error occurred while lifting Sails: ', err);
    return;
  }

  // Sails is now lifted
  console.log('Sails app lifted successfully.');
});
