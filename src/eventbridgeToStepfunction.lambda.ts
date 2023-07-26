import { SFNClient, StartExecutionCommand } from '@aws-sdk/client-sfn';
import { EventBridgeHandler } from 'aws-lambda';
import { paramCase } from 'change-case';
import { JSONPath } from 'jsonpath-plus';
import { ulid } from 'ulid';

let stepFunctionClient: SFNClient;

export const handler: EventBridgeHandler<
string,
{ [key: string]: unknown },
void
> = async (event) => {
  if (!stepFunctionClient) {
    stepFunctionClient = new SFNClient({
      region: process.env.AWS_REGION || process.env.DEFAULT_REGION,
    });
  }

  if (!process.env.STATE_MACHINE_ARN) {
    throw new Error('No statemachine ARN provided');
  }

  const pathPatterns = JSON.parse(
    process.env.PATH_PATTERNS || '[]',
  ) as string[];
  const formattedParts = pathPatterns
    .map((pathPattern) => {
      return JSONPath({ json: event, path: pathPattern })?.[0];
    })
    .filter(v => !!v)
    .map((v) => paramCase(v));

  const name: string = [ulid(), ...formattedParts].join('-');

  const params = {
    name,
    stateMachineArn: process.env.LUKE_INDEXER_ARN,
    input: JSON.stringify({ event, executionName: name }),
  };

  await stepFunctionClient.send(new StartExecutionCommand(params));
};
