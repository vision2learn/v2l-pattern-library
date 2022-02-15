**Leah:** Let’s start by reviewing what we have already discussed.

• How DRY code helps avoid repetition.

• How KISS principles help to keep code maintainable.

• How coding conventions keep code readable. 

• How SOLID principles help us produce modular accessible code.

• How testing allows us to identify bugs.

• How debugging allows us to rectify these mistakes.

**Jack:** So, what if a program crashes when an error or bug occurs, how can we prepare our code to deal with this? We can use ‘robust programming principles’ to ensure that we can pre-empt and deal with errors appropriately.

‘Robust coding and programming’ focus on handling invalid inputs, actions, and errors. It utilises specific code to handle these by displaying accurate and unambiguous error messages. This way, it can deal with specific errors in a way that prevents termination of the program, or it can provide error messages which provide clear information to the user or programmer on what caused the error so that they can debug it.

**Leah:** With robust programming you must bear in mind 4 basic things when writing your code.

Let’s start with Paranoia. Assume that users of your code aim to break it, and that it can fail or run incorrectly by itself. Therefore, you should write error handling code accordingly and don’t trust anything you haven’t generated yourself.

Next let’s look at Stupidity. Write the error messages assuming that the caller or user is stupid and unable to read manual pages of documentation. This way, the error messages should be self-explanatory so other users of the code [and yourself after time has passed!] will be able to understand the problem.

**Jack:** Keep Dangerous Implements away from users. Anything that your routines expect to remain consistent across calls are known as ‘dangerous implements’ and should be kept inaccessible to users. They may [accidently or even deliberately] if accessed, modify, and affect the way the program runs in ways that they had not intended [side effects]. This also makes the code more modular.

And finally, don’t think it can't happen. Never assume that it is impossible that certain bugs or errors can occur so write the error handling code accordingly. In the worst case scenario, your program should at least contain code for flagging an error message in seemingly impossible cases, even if it cannot fix the issue. 

**Leah:** If you anticipate the problems which may occur, you can use robust programming to secure your code against the occurrence of errors, and respond appropriately to either keep the program running, or to provide the user with the exact nature of the error. This is done through employing appropriate defensive programming and exception handling which you will learn more about in this session.
