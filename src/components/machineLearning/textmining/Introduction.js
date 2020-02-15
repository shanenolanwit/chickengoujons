import React from "react"

function Introduction() {
    return (
        <div>
          <h3>Text Mining</h3>
          <pre>Applying technology to understand values of unstructured text</pre>
          <div>According to a study by Merril Lynch & Gartner, 85% of all corporate data is unstructured</div>
          <h4>Applications of text mining</h4>
          <ul>
              <li>Information Extraction: using pattern matching to identify key words and sequences</li>
              <li>Topic Tracking: predicting documents of interest based on user profile and activity</li>
              <li>Summerization: assuming its a real word, this process summarises data to save end users time</li>
              <li>Categorization: identify main themes and place into a set of predefined categories</li>
              <li>Clustering: grouping similar documents without having a predefined set of categories</li>
              <li>Concept Linking: connect related documents by identifying shared concepts</li>
              <li>Question Answering: find the best answer to a given question through knowledge driven pattern matching</li>
          </ul>
          <h4>Algorithms</h4>
          <ul>
              <li>Bag of Words: use methods that treat words as tokens without understanding or context</li>
              <li>Focus on Meaning: identify parts of speech associated with sentiment, use the meaning of words to analyse text</li>
          </ul>
          <h4>Natural Language Processing</h4>
          <ul>
              Field of computer science associated with AI and linguistics. NLP is concerned with the interactions between computers and human language.
              The goal of  NLP is complete understanding of language.
              <li>Utterance - this is any input or sentence passed to a computer program to be interpreted</li>
              <li>Intent - this is the intention of the utterance - if an utterance is 'pass me the cans', the intent could be 'getCans' or 'drinkCans'</li>
              <li>Entity - sometimes referred to as a slot, an entity typically represents the key words, usually nouns, in an utterance 
                  in the example 'buy me cans on friday', the entities could be who - 'me', what - 'cans', and when - 'friday'</li>
              <li>Slot filling - term used regularly when talking about chatbots, slot filling involves prompting a user to provide entities 
                  for example if the user says 'buy me cans', the 'when' slot/entity still needs to be clarified so the chatbot might ask 
                  'when should i buy you cans?'
              </li>
              There are several resources for researching more about NLP
              <li><a href="https://aws.amazon.com/lex/">Lex</a> - NLP with AWS</li>
              <li><a href="https://dialogflow.com/">DialogFlow</a> - NLP with Google</li>
              <li><a href="https://rasa.com/">Rasa</a> - Open Source NLP</li>
              <li><a href="https://servisbot.com/">Servisbot</a> - Industry leaders in chatbots and conversational AI</li>
              <li><a href="https://wordnet.princeton.edu/">Wordnet</a> - Big DB of words</li>
          </ul>

          <h4>Github</h4>
          <pre><a href="https://github.com/shanenolanwit/tunnel-snakes-101/blob/master/text_density.ipynb">Word Frequency</a></pre>
          In the linked github project I took a csv that lists utterances and intents and done some analysis on the data.
          <h4><strong>Requirements</strong></h4>
          <ul>
            <li>import data from a csv</li>
            <li>clean/transform the data</li>
            <li>count the number of unique utterances and intents</li>
            <li>investigate patterns such as min and max length in utterances associated with each intent</li>
            <li>find and graph the most frequent words across all intents</li>
            <li>find and graph the most frequent words for each intent</li> 
          </ul>

        </div>
       
      )
}

export default Introduction
