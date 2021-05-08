module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
    ],
    plugins: ['promise', 'prettier', 'react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true,
        },
    },
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'prettier/prettier': ['error'],
        'import/prefer-default-export': [1],
        'import/no-named-as-default': [0],
        'react/jsx-one-expression-per-line': 0,
        'jsx-a11y/href-no-hash': [0],
        'react/no-array-index-key': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'react/require-default-props': [1],
        'prefer-arrow-callback': [1],
        eqeqeq: ['warn', 'smart'],
        'jsx-quotes': ['warn', 'prefer-double'],
        'react/button-has-type': [
            2,
            {
                button: true,
                submit: true,
                reset: true,
            },
        ],
    },
};
