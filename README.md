
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: 
getElementById mean we can get any html tag with the help of ID of that tag, one tag can have only one unique ID,
getElementsByClassName means we can find html tag elements with the help of class name, multiple html can have same class,
querySelectorAll means we can get all the elements from a tag, its like an array
and querySelector means we can get only the first element of the specific html tag

2. How do you **create and insert a new element into the DOM**?
ans:
first we need to get the design field where we want to insert our new element, then we need to create new element with document.createElement('div')..last we need to append the new design
example:
const cardContainer=document.getElementById('right-container');
            const newCard=document.createElement('div')

             newCard.innerHTML=`
                        <div class=" flex justify-between items-center bg-gray-100 p-3 rounded-lg my-3">
                        <div>
                            <h1 class="font-semibold">${serviceName}</h1>
                             <h1>${serviceNumber}</h1>
                        </div>
                        <h1>${data.date}</h1>
                        </div>
            `
           
            cardContainer.append(newCard)
             }

3. What is **Event Bubbling** and how does it work?
ans:
event bubbling means travel to parent element step by step, then travel to child element. we can get any specific element with event bubbling process

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans:
to reduce loop iteration and make to website faster we use event delegation, its useful cause it helps to execute function faster

5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans:
preventDefault() method works to stop submit or reload the webpage when we click any button
stopPropagation() method works to stop travel to any parent node 

---

