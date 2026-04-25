import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  // Add this block to bypass the ESLint v10 auto-detect crash
  {
    settings: {
      react: {
        // Hardcode your React version here (check your package.json)
        // Common modern values are "18.3.1" or "19.0.0"
        version: "19.2.5",
      },
    },
  },
]);

export default eslintConfig;
