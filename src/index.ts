import { Stack } from 'aws-cdk-lib';
import {
  EventBus,
  EventBusProps,
  EventPattern,
  Rule,
} from 'aws-cdk-lib/aws-events';
import {
  LambdaFunction,
  LambdaFunctionProps,
} from 'aws-cdk-lib/aws-events-targets';
import { FunctionOptions } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { StateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { paramCase } from 'change-case';
import { Construct } from 'constructs';
import { EventbridgeToStepfunctionFunction } from './eventbridgeToStepfunction-function';

export interface EventbridgeToStepfunctionProps {
  /**
   * An existing event bus to use
   */
  readonly existingEventBusInterface?: EventBus;

  /**
   * Properties for a new event bus
   * If you provide both an existing event bus and event bus props, an error will be thrown
   * If you provide neither an existing event bus nor event bus props, an error will be thrown
   */
  readonly eventBusProps?: EventBusProps;

  /**
   * The log retention for the log group
   */
  readonly logRetention?: RetentionDays;

  /**
   * The event pattern to use for the logger rule, defaults to events in the current region
   */
  readonly eventPattern?: EventPattern;

  // /**
  //  * The name of the log group to create, defaults to '/aws/events/{eventBusName}/ingress'
  //  */
  // readonly logGroupName?: string;

  /**
   * Function options for the lambda function
   */
  readonly functionOptions?: FunctionOptions;

  /**
   * The event rule target lambda function props
   */
  readonly lambdaFunctionProps: LambdaFunctionProps;

  /**
   * state machine
   */
  readonly stateMachine: StateMachine;

  /**
   * naming pattern
   *
   * JsonPath expression to extract a value from the event and use it as the execution name.
   *
   * For example
   *
   * ```json
   * {
   *   "detailType": "Item Created",
   *  "detail": {
   *   "eventName": "CreateBucket",
   *   "item": {
   *   "id": "3423423234"
   *  }
   * }
   * ```
   *
   * JsonPath expression to extract the detail type and item id
   *
   * ```json
   * [
   *  "$.detailType",
   * "$.detail.item.id"
   * ]
   * ```
   *
   * The execution name will be `{unique id}-item-created-3423423234`
   */
  readonly namePathPatterns?: string[];
}

export class EventbridgeToStepfunction extends Construct {
  eventBus: EventBus;
  constructor(
    scope: Construct,
    id: string,
    props: EventbridgeToStepfunctionProps,
  ) {
    super(scope, id);
    const {
      existingEventBusInterface,
      eventBusProps,
      eventPattern,
      logRetention,
      functionOptions,
      lambdaFunctionProps,
      stateMachine,
      namePathPatterns,
    } = props;

    // Event bus setup
    const eventBus =
      existingEventBusInterface || new EventBus(this, 'Bus', eventBusProps);
    const normalizedId = paramCase(id);

    const eventbridgeToStepfunctionLambda =
      new EventbridgeToStepfunctionFunction(
        this,
        'eventbridgeToStepfunctionLambda',
        {
          functionName: `${normalizedId}-event-bridge-to-step-function-lambda`,
          logRetention,
          ...functionOptions,
        },
      );

    eventbridgeToStepfunctionLambda.addEnvironment(
      'STATE_MACHINE_ARN',
      stateMachine.stateMachineArn,
    );

    eventbridgeToStepfunctionLambda.addEnvironment(
      'PATH_PATTERNS',
      JSON.stringify(namePathPatterns || []),
    );

    stateMachine.grantStartExecution(eventbridgeToStepfunctionLambda);

    new Rule(this, 'Rule', {
      eventBus,
      eventPattern: eventPattern || {
        region: [Stack.of(this).region],
      },
      targets: [
        new LambdaFunction(
          eventbridgeToStepfunctionLambda,
          lambdaFunctionProps,
        ),
      ],
    });

    // machine

    this.eventBus = eventBus;
  }
}
