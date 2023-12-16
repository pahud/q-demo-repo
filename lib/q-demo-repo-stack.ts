import {
  Stack, StackProps, 
  aws_lambda as lambda,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class QDemoRepoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'Func', {
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromInline(`def handler(e, c): return {"foo":"bar"}`),
      handler: 'index.handler',
    })

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'QDemoRepoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
