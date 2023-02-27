# webhack

## Inspiration
Cyberbullying is sadly a pervasive part of the Internet. According to the National Institute of Health, cyberbullying causes more depression-like symptoms in teenagers than regular bullying. This can lead to issues such as depression and problems with self-image with social media use. We wanted to fix this.

## What it does
Our app solves cyberbullying by hiding mean and harmful comments on popular social media and content creation apps, such as Twitter, Instagram, and YouTube. It is used as a Chrome extension (which works on Chrome, Edge, and most other popular browsers). Then, it searches for harmful or mean comments on social media, using OpenAI's GPT-3 model. Using this, it then hides the harmful comments.

## How we built it
We used Flask, hosted on PythonAnywhere, to create an API that could access OpenAI's GPT-3 endpoints. Then, we had a content script and service worker using Chrome Extensions which communicate to each other and the API to classify different comments.

## Challenges we ran into
There were many issues with calls to the server. For example, cross-origin request scripting policies on the webpages didn't allow our injected content script to make calls to our server. We had to work around this by adding a background script, which received messages from the content script, relayed them to the API, and sent them back asynchronously. We also needed to use many different selectors, filters, and layers in the document object model of the social media apps to find the comments.

## Accomplishments that we're proud of
We are proud of how we made modular code which easily allows us to add many more social media apps quickly. We are also proud of the consistency of the comment removal. Lastly, we are proud of our ability to isolate the comments in the social media apps, as that took a lot of work.

## What we learned
We learned a lot about APIs and wrappers, and we also needed to become familiar with cross-origin request scripting and asynchronous message sending through the Chrome extension. Also, none of us had made a Chrome extension before, so we needed to learn the process and the file structure involved.

## What's next for Constructive Connections
We plan to add features to support it on mobile apps, and we also want to add capabilities for more social media apps.
