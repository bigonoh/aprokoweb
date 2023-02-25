const fs = require('fs');

const properties = {
  padding: {
    prefix: 'p',
    values: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5, 6, 8, 10],
  },
};

const generateUtilityClasses = (properties) => {
  let result = '';
  
  for (const [property, map] of Object.entries(properties)) {
    const prefix = map.prefix;
    const values = map.values;
    
    for (const value of values) {
      const className = `${prefix}-${value.toString().replace('.', '-')}`;
      result += `.${className} {\n  ${property}: ${value}rem;\n}\n`;
    }
  }
  
  return result;
};

const css = generateUtilityClasses(properties);

fs.writeFile('utility-classes.css', css, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('CSS file created successfully.');
  }
});
