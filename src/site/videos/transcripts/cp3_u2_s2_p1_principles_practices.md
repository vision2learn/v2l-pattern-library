**Chris:** Software developers need to use good coding principles and practices.

Good coding practices are important in programming and are achieved by using a variety of principles, which may initially seem tedious and time consuming but may be advantageous long term.

**Leah:** Cluttered code can cause problems when it is further extended, and when the same code needs to be worked on by a wider ‘Developer team’, so this is one of the reasons why there are rules for writing good code.

Let’s take a look at some of the most common principles used in programming and software development:

**Chris:** The KISS Principle 

The KISS Principle is a term that is widely used in a variety of different industries so let’s look at what it means especially in relation to coding.

KISS is an acronym for a design principle noted by the US Navy in 1960 and it stands for ‘Keep it Simple and Straightforward’ and covers many different areas of design including engineering and programming. There are other variations of this including ‘keep it short and simple’ and ‘keep it simple, stupid’. Whatever way it is used it means the same thing.

**Leah:** ‘Keep it simple stupid’ or even ‘keep it short simple’ are most commonly used in programming. By keeping the programming simple, service and maintenance are much easier and there are no hard and fast rules regarding the implementation of code, only that it should be simple and therefore easily modified.

There are a number of ways to keep your code simple these could include:

**Chris:** variables – keep the scope as small as possible, don’t reuse variables, declare the variables you are using and name them properly.

Functions – keep as small as possible and ‘pure’

DRY – write ‘Don’t Repeat Yourself’ code

YAGNI – Use the ‘You Aren’t Gonna Need It’ principle – in other words write the least amount of code that you need

SOLID – use the SOLID principle.

**Leah:** There are many reasons for implementing the KISS philosophy. It may prevent you from wasting time and effort developing complicated protocols which take a long time to write. However, the primary benefits, are for those that may use the software afterwards. This could include both other programmers and customers who want a product which is simple to use. 

**Chris:** SOLID principles

In programming S O L I D is a mnemonic acronym used for the five design principles which are intended to make programs more ‘understandable’, ‘flexible’ and ‘maintainable’. Let’s look at what these are.

**Leah:** S - The Single Responsibility Principle

The Single Responsibility Principle [SRP] states that every class or method is responsible for one single, separate part of a program’s functionality. In other words each class should only have one reason to change. Good practice of SRP will prevent side-effects from future changes and make software easier to implement.

**Chris:** O – Open / Closed Principle

Software entities should be open for extension but closed for modification. In other words you should be able to add new functionality without changing the existing code. So, for example with OCP, if you change one class there is no need to change all related classes.

**Leah:** L – Liskov Substitution Principle

Properties of one original class should be replaceable with objects built from classes adapted from the original without breaking the application. For example, if you had a ‘superclass’ with its own ‘subclasses’, with LSP you can change the objects of the ‘subclass’ without affecting its associated ‘superclass’.

**Chris:** I – Interface Segregation Principle

No client should be forced to depend on methods they do not use. With ISP it is good practice to have several client specific interfaces rather than one large general-purpose interface. This reduces the side effects that could occur from using a larger interface as the developers would be focused on their own client specific interface. 

**Leah:** D – Dependency Inversion Principle

Abstraction should be used to decouple high-level and low-level modules from each other. This way high-level modules which sustain complex systems, are not affected by low-level modules which provide utility features. High and low level modules should depend on abstractions which do not depend on details. This means that if the details change, they do not affect the abstraction.

Abstraction is one of the key principles of object-oriented programming where the programmer hides all but the relevant data about an object to reduce its complexity and increase efficiency.

