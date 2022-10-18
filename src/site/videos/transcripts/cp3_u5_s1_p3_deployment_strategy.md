**Chris:** So, what is a Deployment strategy?

A ‘deployment strategy’ is a process to change or upgrade a software product. One of the aims of a ‘deployment strategy’, is to release a new version without downtime, so that the user is free to continue using the product. One of the more common strategies is the ‘blue-green’ deployment strategy but there are several different strategies that can be used 

Let’s have a look at these in a little more detail.

**Leah:** Basic deployment is fast, simple, and cost-effective. To create a new version, it does a full update of the product in the environment simultaneously, This process makes it vulnerable, more difficult to update, and this strategy would make it harder to rollback. It carries the highest risk and would be unsuitable for business-critical products or services. 

**Chris:** The blue-green deployment strategy would have two versions of a software product at the same time. The new ‘blue’ version goes through testing and evaluation while the user continues to use the stable ‘green’ version. The user will be switched to the ‘blue’ version when it is ready. 

This is a good strategy to use, as if there is a problem, it can be switched back to the ‘green’ version. One way to think of this is how it would look in a source [version] code control environment such as ‘Git’ or ‘GitHub’, there would be a ‘Staging branch’ which would be the ‘blue’ version, and a Master branch which would be the ‘green’ version.

**Leah:** Multi-service deployments are also simple, fast, cheap but are not as risky as a ‘basic deployment’. This is due to it being used for products that have service or version dependencies, meaning they will only work if they are up to date. In a multi-service deployment, all the parts of the software are kept separately, but updated at the same time. This type of deployment is, however, slow to rollback and can be difficult to manage, test and verify.

**Chris:** Rather than doing a ‘full update’ at each deployment, a rolling deployment updates an ‘instance’ of the previous version of the software product. It will wait until it is ready before redirecting users to the new version, therefore eliminating downtime. If there is an issue such as a bug, the rolling deployment can be stopped, so is easy to rollback. 

**Leah:** A canary deployment is used to test a ‘new version’ of a software product and can be easily rolled back to the ‘previous version’ if there is an issue. This strategy is used within both ‘blue-green’ and ‘A/B testing’. A new version [the canary] is tested before the old instances are replaced. If it fails the readiness test, then the ‘canary instance’ is removed, and the deployment would automatically be rolled back. A ‘canary release’ has the lowest risk due to its element of control. 

**Chris:** An alternative strategy is to use A/B testing which is also known as ‘A/B versions’ This is where both versions are active at the same time with different groups of users on each version. It can be used to test ‘interface changes’ and ‘features’ to get ‘user feedback’ and be used for ‘verification’. This strategy differs to the other deployment strategies as its focus is on ‘experimentation and exploration’. A/B testing is more about testing multiple ideas, rather than deploying one specific tested idea.

