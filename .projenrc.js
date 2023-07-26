const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'JP Wesselink',
  authorAddress: 'jpwesselink@gmail.com',
  cdkVersion: '2.88.0',
  constructsVersion: '10.2.69',
  defaultReleaseBranch: 'main',
  name: 'cdk-eventbridge-to-stepfunction',
  repositoryUrl: 'https://github.com/jpwesselink/cdk-eventbridge-to-stepfunction.git',
  bundledDeps: ['change-case', '@aws-sdk/client-sfn@^3.378.0', 'ulid', 'jsonpath-plus'],
  devDeps: ['@types/aws-lambda'],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();