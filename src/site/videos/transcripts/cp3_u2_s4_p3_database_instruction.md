Most databases will use a software tool to handle the administration of a database, such as this one. This one is called phpMyAdmin, it's probably one of the most popular administration tools used for MySQL and Maria database servers. It's quite a useful interface for beginners, because of its graphical user interface.

Because you can also use the query tool to create queries rather than writing them from scratch. It also displays the SQL as well in this box here. It's a good way to learn. This example database here is an example for employees. And as you can see it's got six tables. All the data has already been imported.

And also the relationships have been set up, which you can see here in its schema. Most of the relationships are one to many, with the exception of one, which is this one here. So this, this is a many to many. so it has a look, what's called a lookup table. So.

Once you've actually set up your database, as we have here, you can run what's called a query. A lot of businesses use, tend to use queries to run reports as well.

Queries are a lot more powerful than that. You can also actually create databases using queries and new tables and so forth.

So one of the most common type of queries is a select query. And what this query does, it retrieves It just reads the data and allows you to view it. So, in its simplest form, so for example, you could select the Employees table, and as you can see the tool here has actually written the SQL code, and it's selected all data, all fields, from the Employees table, and that's the output from that.

Obviously there's a lot more than that, so that's just showing the first page and 25 rows.

To see the structure of the table, you'd click on that tab there. So to run something a little bit more complex, we're going to go back to the database, and click on the SQL tab, and I'm going to, it's the one I created earlier. So what this query will do, it will actually look at two of the tables, so it will look at the employees table and the titles table.

Because what we want to do is find out, which of those employees are senior engineers. So you would type the SQL query in this box here, under this tab, and then you select the Go button, and then that will give you your information. So here it is showing all the employees that are senior engineers.

Okay, so as we mentioned earlier, you have a graphical user interface where you can also run a query. So, but as you can see, this tab isn't actually showing. The reason why is because we're on a specific table. So what you do here is select the database, select the query tab, and then you would decide, using the GUI, what exactly you wish to see.

So, for example, if we want to see employees are managers of the departments, we could do this. So we set the departments table first. And select all. Then we would select department manager table. Select all. And then we would select employees. Now the good thing with this tool is it will actually show you the code.

So if you select update query

and then submit and there you are. So you've got the data from the employees table and from the department and the department managers table.

So another type of query is called an insert query. And this query allows you to insert new data into an existing table within the database. Uh, so for this example, we are inserting a new department into the departments table. So as usual, you would write your SQL query here, press the go button, and it's saying it's inserted a new record into the departments table.

So let's check that. And as you can see, we now have a new department called Test Department. So another SQL query that you can run is Delete. So we are now going to delete that new department that we've just created. So we'd write the query here, press the Go button, and it's actually given us a warning, which is quite good, because obviously you don't want to be deleting data, without being absolutely sure.

So you press OK here. And it's saying that this has now been done, so we go back to our table. And as we can see, that record row no longer exists. You would use an update query to update a set of data in the database. So, in our example, we're going to update a specific record job title. To test engineer.

So, you would update the titles table. You would set the title to what you want it to be. So in this example, we're setting it to test engineer. And you want that to be for a certain employee. So you would put the employee number there. So you write your SQL. Select Go. And there you go. It's saying that it's done this.

So if you go to the titles table and you can see here, it's been changed to test engineer.

