import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "quotes": ["error", "double"],
      "prefer-const": "error",
      "indent": ["warn", 4],
      "max-len": ["error", { "code": 120 }],
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["warn", "always"],
    }
  },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
