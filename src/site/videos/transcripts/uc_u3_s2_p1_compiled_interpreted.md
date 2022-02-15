**Jack:** So, let’s look at the principles of compiled code and interpreted code in more detail.

With compiled code the program is written in the source language. The code is then run through a separate program called a compiler.

The compiler decomposes the original code, parses it into components and generates an executable file. 

This executable file is called a “binary”.

The binary can then be executed separately to run the program.

**Leah:** Since a binary must be generated to run the program with compiled code, this can make testing take longer, as this must be done every time a change is made which requires a new test. 

However, since the conversion to machine code is done during the process of generating an executable file, this means that compiled codes can run faster as this aspect of the work is already done. 

**Jack:** Before writing a binary, the compiler will run a check for syntax on the original source code. If there are errors, it will flag a message and it will not be able to compile. 

If there are no syntax errors, it continues compiling the program to generate a binary file.

Compilers must convert source code to a binary, which runs on the specific operating system that they are being compiled for. 

**Leah:** Compiled programs are therefore not cross-platform, meaning that they cannot be run directly from the source code on incompatible operating systems/CPUs. 

However, it is possible to generate binaries from the source code which run on different systems using the appropriate compiler. 

Examples of compiled languages are C, C++, Objective-C

**Jack:** With Interpreted code the program is written in the source language. When the program is executed, the original source code is run line by line through a separate program called an interpreter in real time code. 

**Leah:** As it runs, the interpreter “translates” the source code into actions which are then executable line by line.

Interpreted code can be easy to debug, as the code can be run whilst it is being written. 

This is often done using a program called an Integrated Development Environment [IDE]. This is a program used for development where the code can be edited, but also has a built-in interpreter for the language. 

The code can therefore be run within the IDE [for example Spyder for Python, and Microsoft Visual Studio, which has plug-ins for different languages].

**Jack:** When the code is run, the interpreter runs the program line by line, checking for syntax errors, then performing the operations directly. 

If an error is encountered on any line, the operation of the program will halt in the state that it is in when the error occurs, unless instructions on how to deal with the error are written in.

**Leah:** Interpreted code can essentially be run on any operating system or CPU, providing that there is an interpreter for that system. This means that the programs themselves can be much more “portable”, but that they may take longer to run that compiled programs as they are translated as they are run.

Examples of Interpreted languages are PHP, JavaScript.

**Jack:** In order to get the compatibility of interpretation and the speed of normal compilation [ahead-of-time], another method of interpretation has been developed. 

This is called just-in-time [JIT] compilation and it is where some compilation occurs ahead of time through an intermediate called byte code. 

**Leah:** The byte code converts as much of the program into machine code as is possible whilst still being portable across platforms. 

The remaining parts are then interpreted on a machine/operating system-specific interpreter.

Examples of this Hybrid are Java, C#, VB.NET, Python.

