module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-type-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'comment-empty-line-before': null,
    'no-descending-specificity': null,
  },
};
