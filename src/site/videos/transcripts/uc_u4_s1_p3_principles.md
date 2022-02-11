**Leah:** So, to illustrate the principles of Single Responsibility Principle [SRP], Separation of Concerns [SoC], and Abstraction, let’s imagine we want to make a class which calculates pay after tax.

Look at this example. 

As you can see from this example, our class is responsible for doing many things, not all of them related to the main purpose: ‘to calculate the pay after taxes’. This could increase the chances of a bug or make it more complicated to adapt when changes or updates are needed. 

To simplify this, we can apply Single Responsibility Principles [SRP] gathering things together that change for the same reasons, and Separation of Concern principles [SoC] separating those that change for different reasons.

So, let’s see this example again but using SRP and SoC

Here, we have collected all the things that are relevant to the single responsibility of the class – calculating the pay after tax. This adheres to SRP.

We have also created separate classes which could change for different reasons, for example using different code to generate the payslip or changing delivery method from email to post. This adheres to SoC.

Finally using this example again, we apply the principle of Abstraction which involves hiding things which are not required, outside of the class.

There may be information which we do not want to complicate the code or which may be sensitive in nature which can be hidden outside of the class. 

In this example, we hide these as private attributes, so we would only have access to the pay after taxes from outside of the class. 

