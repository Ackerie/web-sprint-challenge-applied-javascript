import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

  
  
  let newDiv = document.createElement("div");
	newDiv.classList.add("topics");
	topics.forEach((topic) => {
		const newDiv1 = document.createElement("div");
		newDiv.append(newDiv1);
		newDiv1.classList.add("tab");
		newDiv1.textContent = topic;
	});



  // const newDiv = document.createElement('div'),
  //       newDiv1 = document.createElement('div'),
  //       newDiv2 = document.createElement('div'),
  //       newDiv3 = document.createElement('div')

  //       newDiv.appendChild(newDiv1)
  //       newDiv.appendChild(newDiv2)
  //       newDiv.appendChild(newDiv3)

  //       newDiv.classList.add('topics')
  //       newDiv1.classList.add('tab')
  //       newDiv2.classList.add('tab')
  //       newDiv3.classList.add('tab')

  //       topics.forEach(() => {
          
  //       });
      
      return newDiv

      }

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  
  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then((response) => {

    const tab = Tabs(response.data.topics)
    let newTab = document.querySelector(selector)
    newTab.append(tab)

  })
  .catch((err) => {
    console.log(err, 'opps somethings not right')
  })


  
}

export { Tabs, tabsAppender }
