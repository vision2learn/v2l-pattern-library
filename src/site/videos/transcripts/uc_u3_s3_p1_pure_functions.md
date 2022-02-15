**Leah:** So, what are the functional and practical benefits of using pure functions? Let’s have a look at these in more detail.

**Jack:** Pure functions are easier to read as they are self-contained, as all inputs and dependencies are provided within the function. To understand the function, you do not have to look through the code for variables which are affected by the function call, like you might have to with an impure function. 

**Leah:** The same function can be reused in different contexts as it only depends on what occurs inside the function. In contrast, you might have to write a separate ‘impure function’ for each global variable that is changed, rather than relying on pure functions which do not access these.

**Jack:** Pure functions have no side effects, making them much easier to test. We only need to check the state of internal variables, not global variables. 

Referential transparency. 

**Leah:** When testing a program, the more processes that run, the longer it takes. You might want to test a program but not run certain resource-heavy functions which make it take longer. Referential transparency is when you can replace a function with whatever the output would be, without making any other parts of the program run differently. This compiles faster and helps readability.

**Jack:** Caching refers to using techniques to store results of functions, so they only need to be calculated once. As pure function’s outputs are always constant, caching is possible with pure functions.

