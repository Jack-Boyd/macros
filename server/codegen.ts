import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: './src/graphql/schemas/**/*.graphql',
  generates: {
    './src/graphql/resolvers/generated.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;