Hi, and welcome to this short video where we will look at how you can find and fix bugs within your software. So there are many, many numbers of different techniques and ways to identify and fix bugs, but there are some of more common ones that are used by developers and testers within software development.

And, but one of the first things that you need to consider is so, How do you know if a bug is valid or not? So, it may be a case that, you know, you've got a tester and you'll identify a bug that is not really a bug, and the bug's marked invalid. But how does he know it's not really a bug? This tends to happen when the functionality that is being tested works okay.

But the tester isn't actually sure. He still thinks there's something not right with it. And so then to check if that bug is valid, they'll make sure that it wasn't caused by the code itself. So, sorry, that it was caused by the code itself rather than an external factor or utilising the code in a way that wasn't.

intended. So another way of thinking about this as well is that sometimes a tester will identify a bug and it's actually not in scope. So when we're talking about in scope and out of scope, is it something that you've been asked to test? Is there a test plan and is that? Element of the code involved or part of that test plan And if it's not it may be that it that they're already aware of it And it is an out of it's out of scope And it may still be worthwhile reporting that but then obviously the developer when they look at it again say yes We can just ignore that because it we expected that to happen.

It wasn't in the scope of that test So that is an invalid bug.

So what are the common sources of bugs? So there are Half a dozen of the most common sources of bugs and functional errors are one of the most common. So what is a functional error? So, this is where the software does not behave as expected. So, an example of this would be if you press the Save button, but the data that had been entered isn't saved.

Similarly, you could have a Save As button. It's basically anything that, sort of, when you're expecting the software to do something, and it's carrying out a function, if it doesn't do what is expected, that is a functional error. And it is one of the most common errors out there.

You then have syntax or type errors and typos are a very common one where you fail to add a simple character or a letter and that is then picked up as a type or the syntax error that as you can see there's a an example there and it it mentions that this is caught by the most commonly caught by compilers which will if you put your write your code run it through the compiler.

The compiler can't understand it. It will give you an error message, which is a really good function of the compiler. So as you can see here, the quotation marks there on Python are missing on the end of Python. So it's telling you that there is a syntax error. while scanning the string literal. So it's telling you exactly where it is, that little indication mark there.

And again, these are quite common errors. A lot of the type errors are just quite simply a case of proofreading the work, and syntax errors, very similar. You're using the wrong syntax, or the syntax is incomplete.

Logic or calculation errors. Again, these are quite common and it basically represents a mistake in the software flow which causes it to behave incorrectly. So, it could even crash the software. So, not like syntax errors, these will not prevent a program from compiling. So, as you saw in the previous example.

The compiler gave you a warning on a logic or a calculation error, it will still run through and it could actually end up getting caught in what's called an infill loop. And these tend to occur when you've assigned a value to the wrong variable of another example, dividing two numbers instead of multiplying resulting in an incorrect output.

So again, it tends to be due to poorly written code. And the software will behave erratically or you'll constantly get the wrong outputs due to the fact that the calculations and the logic is wrong. It tends not to actually, um, be, they can be quite difficult to find because as I mentioned, the compiler doesn't pick these up.

So what are the common sources of bugs? You've also got... Unit level bugs and these are bugs that occur in a small section of code. So you've learned about unit testing previously again because these are small elements of code These can be quite easy to identify because if you're testing the actual unit level of code It does make it easy to find you're not having to go through pages and pages of the actual code.

It's just there you're testing that unit, which obviously the benefits of that are that you are only working with 5, 6, 7, lines of code maximum for a unit level. System level integration bugs. And again, this tends to happen when you've got More than one coder or people in different people in the development team writing different pieces of code And they fail to interact with each other.

So they can be hard to fix Because you tend to find that um, if this is the case of that You've got code that was written by different developers or even different pieces of software Then it isn't easy to sort of find out exactly what the problem is can be quite Difficult, um, you know, examples of the type of bug that this can cause a byte swap, non message parsing or even memory overflow issues can be caused with these system level integration bugs.

Out of bounds bugs. So, again, this is a. An example of this is when the sort of the end user, the person using the product, interacts with the software in, in ways that weren't expected. So it's actually like sort of, um, entering parameters that were outside of the, the remit of what the software wants to do.

So, um, say you expect to. Input of five or six numbers and somebody keeps putting in 25 numbers and it would, you know, or inputting incorrect data types into the fields. So inputting numbers when, uh, there should have been text, but that hasn't been considered when the code was being written. And obviously that can cause quite a few.

Errors and issues, but again, you will find that most of these are considered when you're writing the software So there should be, um, far less of these than the other common types of bugs So we've looked at different types of bugs and how they occur, but one of the things there is so how do you fix the problems?

how do you fix these when you find the bugs and One of the ways that could this be done is the incremental and bottom up programming development. So again, this is talking about you develop the code incrementally and carry out tests after adding each piece of code. So this is obviously quite straightforward, but it's, and it keeps things simple, but it can be very effective.

So you create a unit of code or a small element of code. It's tested. Does it work? Yes. Okay. Then go, go on and create the next piece of code. Okay. Does that work? Yes, it works. Does it work with the previous piece of code? So they're working together and again, it will eliminate the potential issues that you may find.

Error detection tools. So one of the things that there's an awful lot of error detection tools out there. Um, They're basically designed to find either errors at the run time or at compile time. So you've got your compilation where it picks up errors while it's compiling or you get the detection tools which will pick up errors when the program is actually being run.

And certain examples of that, you've got Purify, which is a, it's identifying memory errors, um, such as invalid access or memory leaks. You've got Escape Java and Spec Hash, which are tools that, uh, you can use. To, you know, give the general, it checks the general user specifications, and then you've also got to consider data flow analysis, which detects violations of safety properties within the software.

So there's quite a lot of, um, ways of error detection tools out there. Some are purely designed for different types of programming languages. Some are a bit of a catch all. Bug clustering. Bug clustering is quite straightforward. It is what it says. You, you, you group the, the bugs, uh, the classes of related bugs.

So if you're getting large numbers of errors, if you class them into, um, put them all into one classification, so if they're all very similar errors, and then you can just examine one of the bugs. So it may be a case that you're getting 50 or 60 errors. But if they're all the same type of errors, you just need to look at one and that would probably give you a good idea of how that can be resolved.

Scientific method. This is quite a complex one where you have to form a hypothesis for the cause of the bug that is consistent with the observed data, then design and run a simple test to check the hypothesis. So quite a complex one that it may want to carry out some further research on that one because it is quite a difficult one to explain, but.

It's basically that you will then, um, create the hypothesis. If it's incorrect, you will then come up with another hypothesis and then continue the process until you come to a solution. If you've got to think about, this is like the simplification of a process or a, that'll allow you to break it down. And so if it's, if you create a hypothesis and it's incorrect, okay, let's look at the next one and then the next one and the next one until you find the one that will work.

Which brings us on to problem simplification. So, in this one here, again, similar to using the scientific method, what you'll do is you'll eliminate portions of the code that aren't relevant to the bug. So, I'll put an example on here where if a function, which is fun, so you've got that function there. If it's given you an error, try eliminating the calls to G, H, and K one at a time to determine which one is causing the problem.

So it's very similar to If you find that, um, a good analogy would be a Christmas tree lights. If the Christmas tree lights aren't working, you go around and you test the connection for each one. Screw them out, screw them in, make sure they're in. And ultimately you will find the error. And backtracking, again, it's a quite a straightforward one.

Start from the point where the problem occurred and go back through the code to see how it might have happened. So this is basically you're just looking at that code again and working your way backwards to see whereabouts in the code that this Error is, is occurring, but again, this can be very, very time consuming if you've got a large portion of code or if you've got quite a significant amount of code, backtracking can be a very, very time, um, intense activity.

Error logs, and you may have heard of error logs, so error logs tend to point to the part of the code that's causing the issue, so it's a very precise way of finding errors within code, and it allows you to check logs from previous, um, running of the software to see if other similar issues have come up, so this is something where you would find if you are doing maintenance on a piece of software, error logs will be something that you would look at and see, right, how many times has this occurred in the previous 30 days?

So, you know, error logs are very useful. Again, we've got the backtracking, which is asking you to start from the point where the problem occurred and go back through the code and binary search. So, Binary search is asking you to explore the code using a divide and conquer approach, so If you've got a large piece of code, you may place a checkpoint halfway through the code So if the error doesn't show up at that point So if nothing's happened as you run the code up to that point it means that the bugs gonna occur in the the second half and This can, or you could break it down into, break the code down into five chunks or six chunks and then run it and it allows you to, when you repeat the process, it can quickly get you to the actual problem.

So we've looked at the different types of bugs and the common ways that bugs have happened and how you can resolve them, but how do you ensure that the similar problems won't occur in the future? So one of the things there is that if you're getting, um, a bug occurring in a piece of code. Check all those areas of code that relate to that.

So, again, it depends if you're looking at inputs. If you're getting errors on input areas of code, check all of the input areas of code. And then you've got Error logs, you can add them if they don't exist, because if you have error logs, that means that you can then identify it and you can go back and see that if it's happened previously, and then you could also look at using, um, the tracing system for bugs.

Now, the tracing system is really useful because it allows you to track if bugs happen elsewhere in the code. So again, this is relevant if you're part of a large team, you may be aware of a bug and you fix it. And other people wouldn't be aware of that. So using a tracking system helps other team members to quickly fix any problems because they can look and say, yes, you've had that problem before and look for it and then be able to identify it and rectify that.

So let's look at the benefits of variable watching. So what is variable watching? So basically, a watch variable, it's any item of data in a program that a program wants to observe while you're debugging. So what you would do is, so, when you think about that you're running a program, Even when you're using a debugger, you start the program, and it starts at the beginning, and it continues until completion, or until an error occurs.

So, the debugger may tell you there's an error, but not where the error is. So, what you can do to track down the exact location, you can use what's called variable watching. And you insert sort of a watchpoint or a breakpoint to stop the program execution whenever the value of a particular expression, which is the watchpoint or breakpoint expression, changes.

So, these sort of, these tell the debugger where to halt the execution of your program so you can see what's going on. So it may be that... You want to halt the code whenever there's an input, um, from one of the users. So whenever there's a variable being inputted, you may want to test up to that point or test that point.

So you would then set a variable watch on a specific line. Where that variable is being input and it allows you to um give lines of code You can have multiple breakpoints within the code and it allows you to inspect carry out those inspections You know, there's quite a few benefits of variable watching So it reduces the time to debug the code because you're yeah, you're looking for specific things It gives you a better understanding of the code which enables you to consider how the code can be tamed more easily so When we're talking about there is that you could then, um, look at the code and think, right, if I had it done this a different way, I could have made it much simpler, or I could write the piece of code in a different way, which would then allow you to have a more streamlined, and, and the code would work better and would be easier to maintain in the future.

And you can learn how to build smarter tests so that you can identify bugs more easily. So it, it's a learning curve. So when you're using. Variable Watching. As with most of the, um, the ways that you, you know, carry out your testing. You, it's a learning process all the time, and you'll learn how to build smarter tests.

So then we'll look at the benefits of compiler warnings. So, compiler warnings, one of the beauties is that it it, it allows you to fix books before the software's released. Um, you know, the compiler will give you warnings. So if you can utilize the compiler and take note of those warnings, it will ensure that you can get those bugs fixed before it goes out to the, the customer or the client.

And which then obviously you get a happy customer, a happy client and less complaints. And again, it gives you the opportunity to give you to create simpler and easier, I mean, to maintain code. So as you're, as you're learning all the time, you know, the complexity of the code, it may be relevant that it has to be that complex, but does it, it gives you an opportunity to look at it and see if I did this in a different way because of the way the warnings are indicating what the error is.

You gain a greater understanding of the code. So the more you test something, the more and the more errors you see of the way the code works, it gives you a better understanding of that code, which then obviously can lead to, um, creating simpler and easier to maintain code and. It gives you a faster build time and increases productivity, which is very important in today's world of coding and development, because there are normally quite tight deadlines and timescales to work towards.

And the benefits of unit tests. So we've obviously looked at units and unit testing, um, quite a bit as we've looked at things because they are a very, very small component to test and unit tests do make the process much more agile. One of the beauties of unit testing there is that you tend to find that in software development, people are working in an Agile environment.

So when you're working in Agile, it'll, you tend to, you build tests that allow you to make changes much more easily. You tend to find that also the quality of the code tends to improve because you're obviously testing out small units. And it allows you to look at that code and say, can it be done better?

Because you're only testing small elements, the benefits are there's that you can find the software bugs early, and it provides documentation. So, one of the things there is when you're looking to learn what functionality is provided by a unit, and how to use it, you can look at the test again, and the basic understanding of the unit's interface, which allows you to, you get that documentation relating to what the software is doing or what that piece of code is doing.

Design, it allows you to, you know, when you focus on design, it tends to allow you to design code in a way that is much better. It works better and it reduces costs because one of the things there is, which is, you know, can be quite critical. It is important that. If you can find bugs early and you can make the process more agile, you will take less time to produce the code, test the code, refactor the code if necessary, which obviously leads to a reduction in the cost.

