// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');
let tabTopics;
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
      response.data.topics.forEach((topic)=> {
        tabCreator(topic);
      });

      tabTopics = document.querySelectorAll('.tab');
      console.log(tabTopics);

      tabTopics.forEach((topic) => {
        topic.addEventListener('click', () => {
          console.log(topic.textContent);
          topicOnly(topic.textContent);
        });
      });
})
  .catch(error => {console.log('Error! : ' + error)});


  function tabCreator(data){
      let tabDiv = document.createElement('div');

      tabDiv.classList.add('tab');

      tabDiv.textContent = data;

      topics.appendChild(tabDiv);
  }
  //console.log(tabCreator)