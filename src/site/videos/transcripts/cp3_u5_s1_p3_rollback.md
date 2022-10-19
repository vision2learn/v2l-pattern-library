**Leah:** As we have already discussed previously choosing the right deployment strategy for a project would include several considerations. One serious consideration is it’s support with rollback.

**Chris:** Rollback is the process of ‘rolling back’ a software product to a previous version. This normally occurs when there is an issue with the current release [the latest version] such as several bug fixes that need to be done. It may be a simple process if it only involves small changes: However, it could become an issue if it involves several elements of a software project, as they may have multiple dependencies. 

It would also become an issue, if the deployment strategy choice, such as Basic deployment, makes it difficult to support rollback.

**Leah:** Rollbacks can be fully automated, this is where a system would examine a set measurement or metric, and would either, mark it as complete which would finish the deployment, or roll it back.

Rollbacks need to be quick, so as not to interrupt the end user using the product, and if the product uses a database, it will need to ensure that no data is lost.

**Chris:** For deployments to be successful, a rollback strategy would need to be considered in the Deployment plan. This written document outlines all the steps required to recover an application and or database to the point before the deployment, outlining the specific steps for each member of the deployment team. The plan would be tested so all the components could be determined, and it would include the locations of the scripts, needed to ‘rollback’ the deployment. It would also include the database name and the developer responsible for running the scripts. 

**Leah:** When something does go wrong with a deployment, a team is more likely to respond in a systematic, calm, and logical way if it has a rollback strategy. 

