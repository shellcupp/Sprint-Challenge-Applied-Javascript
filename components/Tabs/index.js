// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:

//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    const tabTopics = Object.values(response.data.topics)
    tabTopics.forEach(topic => {
        const topicTab = Tab(topic)
        addTab.appendChild(topicTab);
    })
})
.catch(err => {
    console.log('error', err)
})

function Tab(index) {
    const topics = document.createElement('div');

    topics.classList.add('tab');

    topics.textContent = index;

    return topics;
}

const addTab = document.querySelector('.topics')