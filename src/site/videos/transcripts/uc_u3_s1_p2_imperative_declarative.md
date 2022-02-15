**Jack:** So, what is meant when we talk about Imperative and Declarative coding?

**Leah:** Imperative coding or programming can directly change the ‘State’ of the program through statements which provide instructions, or anything in the memory that holds the current values of your program.

Imperative statements are grouped into sections which are called procedures. When called, a procedure will run the input through a set of statements and return an output or change the program to the desired ‘state’. 

**Jack:** For example, let’s say we have a data structure containing individual student grades, and which class they are in. 

We then want to extract all grades from Class C.

An Imperative procedure might express [in code] the following statements:

1. Create a new variable called ‘Class C results’ to collect results

2. Go through one student at a time, and check the following:

3. Is the student in Class C

4. If they are, add their grades to ‘Class C results’

5. If they are not, move to the next student and continue this procedure until all have been checked

**Leah:** Because imperative source code can be low-level, we use procedures to make a step towards higher-level declarative programming.

Let’s look at an example of this in code.

Now let’s look at Declarative coding or programming.

Most forms of Declarative programming do not support change to the ‘State’ of a program.

The programs are run based on a series of ‘expressions’ which specify exactly what the program should accomplish, rather than how it does it.

This is accomplished through logical statements, or those that describe the function. 

Let’s go back to our example which contains student grades and classes. We want to achieve the same result as before, ‘extract all grades from Class C’.

Our declarative statement may be more direct, for example saying [in code]:

**Jack:** EXTRACT all grades from students in Class C and ADD them to a new variable ‘Class_C_results’

The output is the same as with imperative programming, but the result was achieved with an expression of what the results should be, not how to get them, as this is implicit in the program.

Now let’s look at an example of this in code.

