import { CodeBuildStep, CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines'
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { ApplicationDeployment } from './application-deployment'

export class CodePipelineStack extends Stack {
  constructor (scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const source = CodePipelineSource.connection("JugueDev/code-pipeline-with-cdk-example", "main", {
        connectionArn: "arn:aws:codestar-connections:us-east-1:539548017896:connection/1dcf1f84-2491-4206-9144-144500b67da0",
        }
    );

    const pipeline = new CodePipeline(this, 'Pipeline', {
      synth: new ShellStep('Synth', {
        input: source,
        installCommands: [
          'cd cdk_code',
          'npm i'
        ],
        commands: [
          'npm run cdk synth',
        ],
        primaryOutputDirectory:"cdk_code/cdk.out"
      })
    })

    // Add dev DataPipelinedeployment
    const devStage = new ApplicationDeployment(this, 'Dev')
    pipeline.addStage(devStage)
 }
}