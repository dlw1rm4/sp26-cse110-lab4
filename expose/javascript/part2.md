# Expose: Part 2
## 1. What will happen at line 12 and why? If the code causes an error, explain why. 
The code prints 3 because the variable i is incremeneted every time the for loop goes through a new value in the array. Since there are 3 values in the array, i would be 3.

## 2.  What will happen at line 13 and why? If the code causes an error, explain why. 
The code prints 150 because it is the discounted price of the last element in the price array, since 300 * (1 - 0.5) = 150. Because discountedPrice updates every time we go through the loop, when the loop terminates, discountedPrice will be whatever it is set to in the last iteration.

## 3. What will happen at line 14 and why? If the code causes an error, explain why. 
The code prints 150 as well because finalPrice will be whatever the last iteration of the for loop updated it to. Since finalPrice rounds discountedPrice to the nearest hundredth, it would still be 150.

## 4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
The function will return the array [ 50, 100, 150 ] because it returns the discounted price of all the elements in the prices array. Because the discount is 0.5, each of the elements in the returned array would be half of their original value.

## 5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
The code causes an error because the variable followed by the keyword let (i in this case) only exists in the scope of the block, which is the for-loop in this case. So, you can't access it outside of the for-loop.

## 6. What will happen at line 13 and why? If the code causes an error, explain why.
The code causes an error because the variable followed by the keyword let (discountedPrice in this case) only exists in the scope of the block, which is the for-loop in this case. So, you can't access it outside of the for-loop.

## 7. What will happen at line 14 and why? If the code causes an error, explain why. 
The code will print out 150 because it is perfectly valid, since console.log calls finalPrice within its block's scope.

## 8. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
The function will return [ 50, 100, 150 ] because it is perfectly valid to, as the variables followed by the keyword let are not called outside of the block's scope. 

## 9. What will happen at line 11 and why? If the code causes an error, explain why. 
The code causes an error because the variable followed by the keyword let (i in this case) only exists in the scope of the block, which is the for-loop in this case. So, you can't access it outside of the for-loop.

## 10. What will happen at line 12 and why? If the code causes an error, explain why. 
At line 12, the code will print out 3 because the const variable length represents the length of the price array, which has 3 elements. Because const variables are immutable, it will remain the same throughout the entire run.

## 11. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
The function will return [ 50, 100, 150 ] because it is still perfectly valid to call the function. This is because the const variables are not being changed, as well as i not being called outside of its block's scope.

## 12. Given the above Object, write the notation for:  (These should be in your part2.md)
### a. Accessing the value of the name property in the student object
console.log(student.name);
### b. Accessing the value of the Grad Year property in the student object
console.log(student['Grad Year']);
### c. Calling the function for the greeting property in the student object
student.greeting();
### d. Accessing the name property of the object in the Favorite Teacher property in student
console.log(student['Favorite Teacher'].name);
### e. Access index zero in the array of the courseLoad property of the student object
console.log(student.courseLoad[0]);

## 13. Arithmetic
### a. '3' + 2
The output is '32' (a string) because 3 is a string, and the expression converts the integer 2 to a string. Thus, it would result in '32'.
### b. '3' - 2
The output is 1 (an integer) because the minus sign converts the string 3 to an integer. Thus, it would result in 3 - 2 = 1.
### c. 3 + null
The output is 3 (an integer) because null as an integer is 0, so adding it to 3 would just result in 3.
### d. '3' + null
The output is '3null' (a string) because 3 is a string, so null is converted to a string. Thus, it would result in '3null'.
### e. true + 3
The output is 4 (an integer) because true as an integer is 1, so 1 + 3 = 4.
### f. false + null
The output is 0 (an integer) because false as an integer is 0 and null as an integer is 0, so 0 + null = 0.
### g. '3' + undefined
The output is '3undefined'because 3 is a string, so undefined is converted to a string, which is then concatenated with the string 3. Thus, it would result in '3undefined'.
### h. '3' - undefined
The output is NaN (not a number) because the minus sign can only be used for integers. Thus, it would result in NaN.

## 14. Comparison
### a. '2' > 1
The output is true because 2 is converted to an integer, which is greater than 1.
### b.'2' < '12'
The output is false because we compare two strings from the first element to the last. Since we compare '2' and '1' first, the ASCII value of '2' is larger than '1' so '2' is actually greater than '12'. Thus, it would result in false.
### c. 2 == '2'
The output is true becuase the string 2 is converted to an integer, and 2 is equal to 2. Thus, it would result in true.
### d. 2 === '2'
The output is false because === does not allow for any type conversion. Since we are comparing an integer and a string, they cannot be equal. Thus, it would result in false.
### e. true == 2
The output is false because true is converted to an integer: 1. 1 is not equal to 2, thus this result would be false.
### f. true === Boolean(2)
The output is true because we typecast 2 into a boolean, which is equal to true because it is a non-zero, non-empty value. Thus, it would result in true.

## 15. Explain the difference between the == and === operators.
The difference between the two operators is that == converts the types of the values on each side to see if they are roughly equal, whereas === is strict and doesn't do type conversion.

## 16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)

## 17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

## 18. The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  (This should be a JS file - part2-question18.js)

## 19. What is the output of the above code? (This should be in your part2.md)
The output is:
1
4
3
2
because the setTimeout makes it so it delays printing 3 and 2 after a specific amount of time.