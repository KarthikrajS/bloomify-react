module.exports = {
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/prop-types": 0
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['dist/*'],
  env: { browser: true, es2020: true, node: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ]
}
