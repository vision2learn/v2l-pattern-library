**Chris:** Unit testing is an essential instrument in the toolbox of any serious software developer.

A unit test is simply ‘a method that tests a small portion of an application and verifies its behaviour independently from other parts’. 

**Leah:** A typical unit test contains 3 phases: 

• First, it initializes a small piece of an application it wants to test which is also known as the ‘system under test’, or SUT. 

• Then it applies some stimulus to the system under test, usually by ‘calling a method on it’, 

• and finally, it observes the resulting behaviour. 

If the ‘observed behaviour’ is consistent with the expectations, the unit test passes, otherwise, it fails, indicating that there is a problem somewhere within the unit under test. 

**Chris:** These three ‘unit test phases’ are also known as Arrange, Act and Assert, or AAA.

Let’s take a more detailed look at these.

Arrange, the first step of a unit test application, is where the test is arranged or set up. For example, to perform the test we may need to create an object of the targeted class, if necessary, then we need to create mock objects setting up variables or anything else that may be required for the test. 

**Leah:** Act, or the middle step of a unit step application is where we will execute the test and do the actual unit testing, obtaining a result. We will call the targeted function in this step, using the object that we created in the previous step.

Assert, the last step of a unit test application is where we check and verify the returned ‘result’ with ‘expected results’

**Chris:** Some people also distinguish a fourth section, ‘teardown’, which comes after ‘Arrange, Act, and Assert’. For example, you can use this section to remove any files created by the test, close a database connection, and so on. The ‘teardown’ is usually represented by a separate method, which is reused across all tests in the class.

**Leah:** Performing unit tests can have many advantages such as:

Making it safer and easier to refactor the code by putting tests into a place that make sure refactoring occurs without problems and disruption. It takes the risk out of changing older source code.

Carrying out unit tests is essentially doing quality assurance of the code. It shows problems and bugs before the product has an integration test. Creating a testing process before the coding is completed solves issues and challenges creators, to write better code.

It can help find problems and resolve them before further testing, so they won’t impact other bits of code. This includes bugs in a programmer’s execution and issues with a specification for the unit itself.

**Chris:** Unit testing maps a system and creates documentation. It helps developers understand the unit’s interface.

Using a unit test and good unit testing tools means you reduce the overall cost of a project. Early bug detection means fewer late changes and easier to spot issues than if it is done at a later stage.

It can also help to make you more efficient at writing code. When you build, run, and fix your code, you can more quickly find and fix problems because you are testing your code as you write it.

But, what about the disadvantages?

**Leah:** Unit testing is a time-consuming process. It can take a lot of time to develop even one small unit test, not to mention the larger ones.

Developers need to spend time on experimentation, research, figuring out how the test method should be structured, and what methods, parameters, and objects, the test case needs. It’s easy to spend an entire day on one single ‘unit test’. Not only is time spent creating the ‘unit test’ itself, but also it takes time to figure out the best way to use it.

Unit tests are problematic when you need to test your ‘user interface’ or UI. They are good for when you need to test business logic implementation, but not great for UI.

**Chris:** Unit testing for individual components of a software system, will catch many errors, but they can’t catch them all. For example, it can’t catch ‘integration bugs’ which occur when combining several units of work. To catch an ‘integration bug’, an integration test is needed which we cover elsewhere in this unit.

So even though there are disadvantages, we can see that unit testing is valuable tool to detect defects in the software, in the early development stage. No matter what code you are testing, finding bugs and errors ahead of time is helpful. If you are working with a good QA team, using unit tests should be an efficient process and prove helpful, if you know what to avoid.

