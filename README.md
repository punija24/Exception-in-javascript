# Exception-in-javascript
How to re-throw an exception in JavaScript, but preserve the stack?
Stack trace conveys some portion of the data whenever an exception is thrown. The stack trace is a collection of all the methods used in the program.
It starts with the method that throws an exception and ends with the method that catches the exception. 

In case if an exception is re-thrown, the stack trace is restarted at the current method. Thus the list of methods calls between the method that 
throws the exception and the current method is lost.

One way to avoid this is to catch the error and store it locally and then re-throw the error. However, in JavaScript, there is no rethrow() function.
Thus we throw the original error occurred. To understand the above context, refer to the following example.

Example 1: In a class test, Radha is supposed to answer the questions asked by the teacher. The teacher gives Radha a number and asks her if the given 
number is a valid day number and if yes then specify the corresponding day. If the given day number is invalid Radha should answer “Invalid Day Number”.
If we run the code the embedded page will show the stack trace. It will show the error is originating at day() and then was re-thrown at month() and 
finally caught in the year(). Since 8 is out of bound so the output is displayed as Invalid day.

Input: 8 

Output:Error originated in day() and was thrown

 Invalid day
 
 Error was caught and rethrown in month()
 
 Invalid day
 
 Error was finally caught in year()
 
 Invalid day
 
 Example 2: Number 5 is a valid day number, therefore, no error is thrown. Hence we get the output as a valid day.

Input: 5

Output:

valid day:

Fri
