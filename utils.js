const generator = require("generate-password");

const generatePassword = () => {
  const password = generator.generate({
    length: 9,
    numbers: true,
    uppercase: true,
    lowercase: true,
  });

  return `${password}1@`;
};

module.exports = {
  generatePassword,
};
