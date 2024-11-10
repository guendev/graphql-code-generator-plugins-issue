import type { CodegenConfig } from '@graphql-codegen/cli'

import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'

const config: CodegenConfig = {
  generates: {
    'src/apollo/schema': defineConfig(
      {
        scalarsOverrides: {
          ID: {
            type: 'string'
          }
        },
        typesPluginsConfig: {
          typesPrefix: 'I'
        }
      }
    )
  },
  schema: [
    'src/modules/**/*.graphql'
  ]
}
export default config
