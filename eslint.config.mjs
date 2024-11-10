import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'src/apollo/schema/*.ts'
    ],
    typescript: {
      overrides: {
        'node/prefer-global/buffer': 'off',
        'ts/consistent-type-imports': 'error'
      }
    }
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              message: 'Please use alias @[alias] instead.',
              regex: '^\\.'
            }
          ]
        }
      ],
      'perfectionist/sort-array-includes': [
        'error',
        {
          groupKind: 'literals-first',
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-classes': [
        'error',
        {
          customGroups: [],
          groups: [
            'static-block',
            'index-signature',
            'static-property',
            ['protected-property', 'protected-accessor-property'],
            ['private-property', 'private-accessor-property'],
            ['property', 'accessor-property'],
            'constructor',
            'static-method',
            'protected-method',
            'private-method',
            'method',
            ['get-method', 'set-method'],
            'unknown'
          ],
          ignoreCase: true,
          matcher: 'minimatch',
          order: 'asc',
          partitionByComment: false,
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['@/**'],
          newlinesBetween: 'always'
        }
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          order: 'asc',
          partitionByNewLine: true,
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          partitionByNewLine: true,
          styledComponents: true,
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-switch-case': [
        'error',
        {
          order: 'asc',
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          order: 'asc',
          type: 'alphabetical'
        }
      ],
      'style/comma-dangle': ['error', 'never'],
      'style/no-mixed-spaces-and-tabs': 'off',
      'style/no-tabs': 'off'
    }
  }
)
