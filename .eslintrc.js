module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "amd": true,
        "commonjs": true,
        "node": true,
        "jasmine": true,
        "jquery": true
    },
    "rules": {
        "no-console": "off",
        // Possible Errors
        "comma-dangle": ["error", "never"],
        "no-extra-parens": ["error", "functions"],
        "no-prototype-builtins": "warn",
        "no-negated-in-lhs": "error",
        "valid-jsdoc": "off",
        // Best Practices
        "curly": "error",
        "no-alert": "off",
        "no-new": "off",
        // Stylistic
        "block-spacing": ["off", "never"],
        "consistent-this": "error",
        "func-names": "off",
        "indent": ["error", 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            }
        }],
        "linebreak-style": "off",
        "max-depth": ["error", 6],
        "max-len": ["error", 150, 4, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],
        "max-lines": "off",
        "no-plusplus": ["off", {
            "allowForLoopAfterthoughts": true
        }],
        "no-useless-escape": "off",
        "no-restricted-syntax": ["off", "WithStatement"],
        "no-underscore-dangle": "off",
        "object-curly-spacing": ["error", "never"],
        "one-var": ["error", "always"],
        "space-before-function-paren": ["error", {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'never'
        }],
        "spaced-comment": "off"
    }
}
