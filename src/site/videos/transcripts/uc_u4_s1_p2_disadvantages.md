**Leah:** So, what are the disadvantages of writing complicated code?

Teams of professional programmers often collaborate on projects, where it is very common that other people will need to view their code. This could be to review it, extend it, or even just to understand it, in order to write other parts of the program which are dependent on it.

To try to mitigate some of the problems caused by complicated code, there are many coding practices and conventions which have been developed to try to standardise code. 

One example is ‘PEP8 for Python’. This is a document that provides guidelines and best practices to improve the readability and consistency of coding in Python. For more information on this check out our weblink.

**Jack:** So, what are the disadvantages of complicated coding and the effects it can have.

First let’s look how this affects Variables

If ‘variable names are too long’ this can clutter code

If ‘variable names are not descriptive’, they are ambiguous to what the variable holds or its function.

If ‘variable names are not standardised’, you might not be able to tell what sort of variable it is, for example local or global. There are however conventions for this in some languages such as capitalization, prefixed or suffixed with an underscore. 

**Leah:** So, now let’s look at how this affects ‘Functions’

Say a ‘function name is undescriptive’ you might not be able to tell what the function is supposed to do.

‘Functions may become bloated, non-specific, and have side effects’. Functions should generally serve one purpose, and not affect other code sections. It can make debugging difficult when a function is not constrained.

‘Functions are not generalised’. If functions are not written to be general, you may end up with many functions which serve a similar purpose, and this can make code confusing.

‘Too many lines of code are replaced with functions.’ Replacing sections of code with functions can be useful when this particular operation needs to occur a lot. However, this can confuse code and complicate debugging if the function is only called once or is only a single line.

**Jack:** Now let’s look at the what the effect is on Comments

‘Comments are missing in code’. If there are no comments in a confusing section of code, then its purpose may be unclear.

‘Comments describing functions are missing, unstandardised or too long’. Many languages have conventions which describe a function. This usually includes a short description of what it does, and the data types, and also short descriptions of the inputs, and the outputs. This is called a 'docstring’ and if it is missing, unstandardised, or too long, it can take longer for coders to resolve problems.

As a program develops, it often becomes more complex. It is therefore crucial, especially in the early stages, to keep code clean and accessible in order to ensure that it is maintainable and understandable when someone comes back to it.

