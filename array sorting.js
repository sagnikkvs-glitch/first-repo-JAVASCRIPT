
        let arr = ["Banana", "Orange", "Apple", "Mango"];
        arr.sort();
        console.log(arr); // Output: alphabetically sorted array

        let arr1= ["Banana", "Orange", "Apple", "Mango"];
        arr1.reverse();
        console.log(arr1); // Output:  alphabetically reversed array

        //for nos \

        let points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b) {
            return a - b;
        });         // this is the more preferreable way
        console.log(points); // Output: [1, 5, 10, 25, 40, 100]ascending order

        // u can do it following way as well
        let points1 = [0, 1548, 154, 5, 2558, 1045454545];
        points1.sort((a, b) => a - b);
        console.log(points1); // Output: ascending order as well

        // for descending order
        
        points1.sort(function(a, b){
            return b-a;
        });
        console.log(points1); // Output: descending order


        // array mapping? it is used to create a new array by applying a function to each element of the original array
        
        let numbers = [1, 2, 3, 4, 5];
        let squaredNumbers = numbers.map(function(num) {
            return num * num;
        });
        console.log(squaredNumbers); // Output: nos are squared


        //using of the eval function to evaluate a string as JavaScript code
        let expression = "2 + 3 * 4";
        let result = eval(expression);
        console.log(result);        // Output: 14
        //but if
        console.log("2 + 3 * 4");     // Output:    2 + 3 * 4

        // this happens because js always considers things inside the double quotes "" as a string and does not evaluate it as code. 
        //so if u want to evaluate it as code then u have to use eval function

          console.log (eval("2 + 3 * 4"));           // Output: 14


    