import { Stage, StageProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { ApplicationStack } from './application-stack'

// Main deployment setup. Collection of the stacks and deployment sequence
export class ApplicationDeployment extends Stage {
  constructor (scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props)
    // Deploy the main stack in the Deployment stage
    new ApplicationStack(this, 'ApplicationStack', {
      description: 'This is the main stack with IaC.'
    })
  }
}