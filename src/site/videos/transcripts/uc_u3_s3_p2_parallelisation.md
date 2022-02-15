**Jack:** So, let’s look at parallelisation in more detail.

Parallelisation is a method of processing in which separate parts of an overall task are broken up and run simultaneously on multiple CPUs which in turn reduces the amount of time involved in processing. 

**Leah:** This also allows large problems or processes to be divided into smaller ones, which can be run and solved at the same time.

Imagine a road which consists of one lane, traffic will be slow, and any blockages will cause it to stop. Now think about a motorway with 3 lanes, slow traffic can still go slow without holding up the faster traffic in the other lanes and a lot more traffic can get to the end of the road quicker and more efficiently.

**Jack:** So how does this work in processing?

Let’s say, for example, that we have a list variable of length 100 which contains numerical values, and that we want to perform a mathematical operation on each value. 

**Leah:** For arguments sake, let’s say that each computation will take 1 second and use 1mb of memory, and that we have 20mb of RAM available to use. 

If we do this in a sequential manner, we will have to wait for the previous computation to finish before the next one starts. 

This would then take 100 seconds to complete this operation [number of operations x length of time to complete one operation: 100 x 1 second], and process at a rate of 1mbps. 

**Jack:** If with the process, there are no dependencies [for example one operation does not depend on the outcome of a previous] we can use parallel processing to perform multiple operations at once and maximise the use of the memory that is available. 

With 20mb free, this means we can process 20 x 1mb operations at a time. 

**Leah:** This process will then take 5 seconds to complete [[number of operations/memory available] x length of time to complete one operation: [100/20 mb] x 1 second] and process at a rate of 20mbps, therefore 20 times faster than our first example

However, to ensure that processes can be parallelized, there are certain dependencies. 

**Jack:** This is where pure functions are useful for parallelisation. If all of the parallel processes were dependent on a global variable that it modified, like an impure function could, this would change the outcome each time a process completed. 

We can therefore use pure functions with no external dependencies to ensure that a parallel process can be computed reliably.

