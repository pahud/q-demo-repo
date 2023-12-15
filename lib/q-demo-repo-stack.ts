import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class QDemoRepoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new sqs.Queue(this, 'Queue');

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'QDemoRepoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
