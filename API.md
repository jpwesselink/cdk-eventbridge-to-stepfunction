# cdk-eventbridge-to-stepfunctions

:fire: do not use, this is not ready for primetime

This is a CDK construct library that allows you to easily create an EventBridge rule that sends events to a Step Functions state machine.

But, what about Eventbridge Pipes? Event Bridge Pipes are great, but Step Functions support is limited as of this writing. The sole purpose of this construct is to have human readable step function invocation entries.

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventbridgeToStepfunction <a name="EventbridgeToStepfunction" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction"></a>

#### Initializers <a name="Initializers" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.Initializer"></a>

```typescript
import { EventbridgeToStepfunction } from 'cdk-eventbridge-to-stepfunction'

new EventbridgeToStepfunction(scope: Construct, id: string, props: EventbridgeToStepfunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps">EventbridgeToStepfunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps">EventbridgeToStepfunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.isConstruct"></a>

```typescript
import { EventbridgeToStepfunction } from 'cdk-eventbridge-to-stepfunction'

EventbridgeToStepfunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.EventBus</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `eventBus`<sup>Required</sup> <a name="eventBus" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunction.property.eventBus"></a>

```typescript
public readonly eventBus: EventBus;
```

- *Type:* aws-cdk-lib.aws_events.EventBus

---


## Structs <a name="Structs" id="Structs"></a>

### EventbridgeToStepfunctionProps <a name="EventbridgeToStepfunctionProps" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps"></a>

#### Initializer <a name="Initializer" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.Initializer"></a>

```typescript
import { EventbridgeToStepfunctionProps } from 'cdk-eventbridge-to-stepfunction'

const eventbridgeToStepfunctionProps: EventbridgeToStepfunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.lambdaFunctionProps">lambdaFunctionProps</a></code> | <code>aws-cdk-lib.aws_events_targets.LambdaFunctionProps</code> | The event rule target lambda function props. |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | state machine. |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.eventBusProps">eventBusProps</a></code> | <code>aws-cdk-lib.aws_events.EventBusProps</code> | Properties for a new event bus If you provide both an existing event bus and event bus props, an error will be thrown If you provide neither an existing event bus nor event bus props, an error will be thrown. |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | The event pattern to use for the logger rule, defaults to events in the current region. |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.existingEventBusInterface">existingEventBusInterface</a></code> | <code>aws-cdk-lib.aws_events.EventBus</code> | An existing event bus to use. |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.functionOptions">functionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionOptions</code> | Function options for the lambda function. |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The log retention for the log group. |
| <code><a href="#cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.namePathPatterns">namePathPatterns</a></code> | <code>string[]</code> | naming pattern. |

---

##### `lambdaFunctionProps`<sup>Required</sup> <a name="lambdaFunctionProps" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.lambdaFunctionProps"></a>

```typescript
public readonly lambdaFunctionProps: LambdaFunctionProps;
```

- *Type:* aws-cdk-lib.aws_events_targets.LambdaFunctionProps

The event rule target lambda function props.

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

state machine.

---

##### `eventBusProps`<sup>Optional</sup> <a name="eventBusProps" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.eventBusProps"></a>

```typescript
public readonly eventBusProps: EventBusProps;
```

- *Type:* aws-cdk-lib.aws_events.EventBusProps

Properties for a new event bus If you provide both an existing event bus and event bus props, an error will be thrown If you provide neither an existing event bus nor event bus props, an error will be thrown.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.eventPattern"></a>

```typescript
public readonly eventPattern: EventPattern;
```

- *Type:* aws-cdk-lib.aws_events.EventPattern

The event pattern to use for the logger rule, defaults to events in the current region.

---

##### `existingEventBusInterface`<sup>Optional</sup> <a name="existingEventBusInterface" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.existingEventBusInterface"></a>

```typescript
public readonly existingEventBusInterface: EventBus;
```

- *Type:* aws-cdk-lib.aws_events.EventBus

An existing event bus to use.

---

##### `functionOptions`<sup>Optional</sup> <a name="functionOptions" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.functionOptions"></a>

```typescript
public readonly functionOptions: FunctionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.FunctionOptions

Function options for the lambda function.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

The log retention for the log group.

---

##### `namePathPatterns`<sup>Optional</sup> <a name="namePathPatterns" id="cdk-eventbridge-to-stepfunction.EventbridgeToStepfunctionProps.property.namePathPatterns"></a>

```typescript
public readonly namePathPatterns: string[];
```

- *Type:* string[]

naming pattern.

JsonPath expression to extract a value from the event and use it as the execution name.

For example

```json
{
   "detailType": "Item Created",
  "detail": {
   "eventName": "CreateBucket",
   "item": {
   "id": "3423423234"
  }
}
```

JsonPath expression to extract the detail type and item id

```json
[
  "$.detailType",
"$.detail.item.id"
]
```

The execution name will be `{unique id}-item-created-3423423234`

---



