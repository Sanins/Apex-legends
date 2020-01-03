module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "accessor-pairs": "off",
        "array-bracket-newline": "off",
        "array-bracket-spacing": "off",
        "array-callback-return": "off",
        "array-element-newline": "off",
        "arrow-parens": "off",
        "arrow-spacing": "off",
        "block-scoped-var": "off",
        "block-spacing": "off",
        "brace-style": [
            "error"
        ],
        "callback-return": "off",
        "camelcase": "error",
        "capitalized-comments": "error",
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "off",
        "complexity": [
            "error",
            {
                "max": 25
            }
        ],
        "computed-property-spacing": "off",
        "consistent-return": "off",
        "consistent-this": "off",
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "dot-location": "off",
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "for-direction": "error",
        "func-call-spacing": "off",
        "func-name-matching": "off",
        "func-names": "off",
        "func-style": "off",
        "function-paren-newline": "off",
        "generator-star-spacing": "off",
        "getter-return": "error",
        "global-require": "off",
        "guard-for-in": "off",
        "handle-callback-err": "off",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-length": "off",
        "id-match": "error",
        "implicit-arrow-linebreak": "off",
        "indent": ["error", "tab"],
        "indent-legacy": "off",
        "init-declarations": "off",
        "jsx-quotes": "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "line-comment-position": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "off",
        "lines-around-directive": "off",
        "lines-between-class-members": "off",
        "max-classes-per-file": [
            "error",
            2
        ],
        "max-depth": "off",
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "multiline-comment-style": "off",
        "multiline-ternary": "off",
        "new-cap": "off",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "off",
        "no-angle-bracket-type-assertion": "true",
        "no-array-constructor": "off",
        "no-async-promise-executor": "off",
        "no-await-in-loop": "off",
        "no-bitwise": "off",
        "no-buffer-constructor": "off",
        "no-caller": "off",
        "no-case-declarations": "error",
        "no-catch-shadow": "off",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "off",
        "no-console": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-continue": "off",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-div-regex": "off",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "off",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-function": "off",
        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "off",
        "no-extra-bind": "off",
        "no-extra-boolean-cast": "error",
        "no-extra-label": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "off",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "off",
        "no-implied-eval": "off",
        "no-inline-comments": "off",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "off",
        "no-label-var": "off",
        "no-labels": "off",
        "no-lone-blocks": "off",
        "no-lonely-if": "off",
        "no-loop-func": "off",
        "no-misleading-character-class": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "off",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "off",
        "no-multi-spaces": "off",
        "no-multi-str": "off",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "no-native-reassign": "off",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "off",
        "no-nested-ternary": "off",
        "no-new": "off",
        "no-new-func": "off",
        "no-new-object": "off",
        "no-new-require": "off",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "off",
        "no-param-reassign": "off",
        "no-path-concat": "off",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-proto": "off",
        "no-prototype-builtins": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
        "no-restricted-modules": "off",
        "no-restricted-properties": "off",
        "no-restricted-syntax": "off",
        "no-return-assign": "off",
        "no-return-await": "off",
        "no-script-url": "off",
        "no-self-assign": "error",
        "no-self-compare": "off",
        "no-sequences": "off",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-shadow-restricted-names": "off",
        "no-spaced-func": "off",
        "no-sparse-arrays": "error",
        "no-sync": "off",
        "no-tabs": "off",
        "no-template-curly-in-string": "off",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-throw-literal": "off",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "error",
        "no-unexpected-multiline": "error",
        "no-unmodified-loop-condition": "off",
        "no-unneeded-ternary": "off",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": [
            1
        ],
        "no-use-before-define": "off",
        "no-useless-call": "off",
        "no-useless-computed-key": "off",
        "no-useless-concat": "off",
        "no-useless-constructor": "off",
        "no-useless-escape": "error",
        "no-useless-rename": "off",
        "no-useless-return": "off",
        "no-var": "error",
        "no-void": "off",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "off",
        "no-with": "off",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": "off",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": "off",
        "operator-assignment": "off",
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "off",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": [
            1,
            "single"
        ],
        "radix": "error",
        "require-atomic-updates": "off",
        "require-await": "off",
        "require-jsdoc": "off",
        "require-unicode-regexp": "off",
        "require-yield": "error",
        "rest-spread-spacing": "off",
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": "off",
        "semi-style": "off",
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": "off",
        "space-infix-ops": "off",
        "space-unary-ops": "off",
        "spaced-comment": "error",
        "strict": "off",
        "switch-colon-spacing": "off",
        "symbol-description": "off",
        "template-curly-spacing": "off",
        "template-tag-spacing": "off",
        "unicode-bom": "off",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": "error",
        "vars-on-top": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "off",
        "yoda": "off",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/space-within-parens": [
            "off",
            "never"
        ],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        // "import/order": "error",
    }
};