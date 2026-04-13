/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as dotenv from 'dotenv';
dotenv.config();

export default getViteConfig({
  test: {
  },
  plugins: [tsconfigPaths()]
});