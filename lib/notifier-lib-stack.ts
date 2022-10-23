import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as codeArti from "aws-cdk-lib/aws-codeartifact";

export class NotifierLibStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const domain = new codeArti.CfnDomain(this, "notifier-lib-domain", {
      domainName: "notifier-lib",
    });

    new codeArti.CfnRepository(this, "notifier-lib-repo", {
      domainName: domain.domainName,
      repositoryName: "notifier-lib-repo",
    });
  }
}
