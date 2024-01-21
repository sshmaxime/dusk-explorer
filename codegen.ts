import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "config/api/schema.graphql",
  documents: ["./config/api/index.ts"],
  generates: {
    "config/api/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
