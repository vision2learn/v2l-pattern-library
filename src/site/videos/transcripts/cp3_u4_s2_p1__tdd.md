**Leah:** What is Test Driven Development?

The Test Driven Development approach creates test cases to specify and validate what the code will do. Test cases for each function are ‘created and tested first’ before the actual development of the application or program and if the test fails, new code is written.

**Chris:** TDD is based on 3 main principles which are:

1. Do not write any production code unless it is to make a ‘failing unit test’ ‘pass’.

2. Do not write any more of a ‘unit test’ than is sufficient to ‘fail’.

3. Do not write any more production code than is sufficient to ‘pass’ the ‘one failing unit test’.

**Leah:** Since points 1 and 3 are both involve “refactoring” of code, this can be simplified to ‘2 points’ which are:

1. Write only enough of a unit test to fail.

2. Write only enough production code to make the failing unit test, pass.

So how is this done in practice?

**Chris:** Step 1

A developer writes the ‘test case’ without any code in front of them. This may sound tricky, but it ensures that the developer understands the functionality required. The test case is not biased to show the ‘code’ works, rather to test the ‘expected feature’. In this step you will try to ‘run the test’ and as the ‘actual code’ has not been written, your test will ‘fail’. 

**Leah:** Step 2

The developer writes only the minimum required code, to pass the test case, that just ‘got failed’. This becomes a challenging activity for developers who are used to writing code for the ‘full module’ in one go. The “Just enough” code concept, helps in ensuring that no extra bit of code is added. The developer again runs the test case, and make sure it passes.

Step 3

**Chris:** The developers ‘refactor’ the code, to ensure the functionality is intact and code is refined. In steps 1 and 2 the focus is to write code only, whereas other important points for efficient design, maintainable code etc. are not considered. Once the test ‘passes’ the developer will check for any ‘unnecessary code’ which can be removed. 

**Leah:** While TDD may seem like it adds extra work to the development of software, it constrains the complexity and effort which is put into the initial coding. 

**Chris:** This comes with several benefits such as:

• Reducing rework time and enhancing productivity.

• Allowing for quick exploration of bugs and errors.

**Leah:** • Making it quick to get feedback, and encouraging knowledge sharing and collaboration, so that anyone should be able to make a start on any section of code.

• Allowing programmers to easily change overarching program architecture and encouraging cleaner program design.

**Chris:** • It results in the creation of extensive code that is flexible and easy to maintain.

• It also means that requirements in the design spec are addressed directly during implementation.

