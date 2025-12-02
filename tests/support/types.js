const { defineParameterType } = require('@cucumber/cucumber');

defineParameterType({
    name: 'moeda',
    regexp: /[0-9]+(?:,[0-9]+)?/,
    transformer: s => parseFloat(s.replace(',', '.'))
});
