import React from "react"

function Introduction() {
    return (
        <div>
          <h3>Here's the story with neural networks</h3>
          <div>
              Think of neural networks as a load of lads who have to make simple yes or no decisions based on simple inputs.<br />
              If they are happy with the inputs, they say yes. If they don't like the inputs they say no and once they make a decision, their job is done.<br />
              Their answers are possibly combined and weighted to eventually narrow down to a single answer<br />
              However, they are not all asked the same question with the same inputs. In fact, one lads decision could be the input for the next group of lads.<br />

              <h4>Cans with the lads</h4>
              Say you want to go drinking cans, but you only want to go drinking cans if your two friends Jim and Jack are going too.<br />
              You ask them both the same question - <strong>"are you drinking cans?"</strong><br />
              <ul>
                <li>scenario one - Jim says yes (1) and Jack says no (0), you set a threshold earlier when you said you need at least two (2) friends 
                to go before you yes too. So 1 + 0 &lt; 2, or more formally 1 + 0 - 2 &lt; 0, which means no cans for you.
                </li>
                <li>scenario two - Jim says no (1) and Jack says yes (0). So 0 + 1 &lt; 2, or more formally 0 + 1 - 2 &lt; 0, which means no cans for you.
                </li>
                 <li>scenario three - Jim says no (0) and Jack says no (0). So 0 + 0 &lt; 2, or more formally 0 + 0 - 2 &lt; 0, which means no cans for you.
                 </li>
                 <li>scenario four - Jim says yes (1) and Jack says yes (1). So 1 + 1 &gt;= 2, or more formally 1 + 1 - 2 &gt;= 0, which means cans for all.
                 </li>
              </ul>
            
              Thats a lot of effort to go drinking cans. You change your mind and decide you'd be happy to go if either of them said yes to the cans.<br />
              You ask them both the same question - <strong>"are you drinking cans?"</strong><br />
              <ul>
              <li>scenario one - Jim says yes (1) and Jack says no (0), you set a threshold earlier when you said you need at least one (1) friend 
              to go before you yes too. So 1 + 0 &gt;= 1, or more formally 1 + 0 - 1 &gt;= 0, which means cans for you and Jim.
              </li>
              <li>scenario two - Jim says no (0) and Jack says yes (1). So 1 + 0 &gt;= 1, or more formally 1 + 0 - 1 &gt;= 0, which means cans for you and Jack.
              </li>
              <li>scenario three - Jim says no (0) and Jack says no (0). So 0 + 0 &lt; 1, or more formally 0 + 0 - 1 &lt; 0, which means no cans for you.
              </li><li>scenario four - Jim says yes (1) and Jack says yes (1). So 1 + 1 &gt;= 1, or more formally 1 + 1 - 1 &gt;= 0, which means cans for all.</li>
              </ul>
             
             <br />
              Slight problem, two lads were on one the night before, neither of them want to go, but you really need the cans. < br />
              You have two emergency friends, they are a couple and they are grand when on their own but not together. You make a decision 
              to ask Joe and Jane if they want cans. <br />
              If exactly one of them is free you'll go, but not if you have to be a third wheel.
              You ask them both the same question - <strong>"are you drinking cans?"</strong>< br />
              The problem is now you no longer have a fixed threshold. We can't work like this. We need a yes or no. <br />
              Enter the hidden layer of the neural network, you can't be expected to remember one answer while you wait for the other. <br />
              You just want two inputs with a threshold. You recruit more lads to help.
                <ul>
                    <li>One lad takes their answers and will say yes (1) if at least one is going.</li>
                    <li>The other lad takes their answers and will say yes (1) if at least one is <strong>not</strong> going.</li>
                    <li>You now have two inputs with a fixed threshold of two (2). If both lads give you the thumbs up if means exactly one is going.</li>
                    <li>If either lad gives you the thumbs down you know either both or none are going.</li>
                </ul>
              
              
              
              <h4>What does this have to do with machine learning</h4>
              When it comes down to non trivial classification problems, multiple layers of hidden neural layers are required. <br />
              And then not all answers are created equally. For example if you wanted to detect if a financial transaction was fraudulent, is the amount of the 
              transaction as important as the destination or source, how about time of day or currency? <br />In cases like this, some answers can be given 
              weights and thresholds can be moved around to accommodate these decisions. <br />
              Luckily neural networks are very good at assigning weights, checking how accurate their answers are, and then going back an adjusting their weights and thresholds to make their predictions more accurate. <br />
              There is always a danger that you will overfit the data, and just have weights and biases that will only fit your exact data set but 
              is not flexible to new data. Techniques such as randomly dropping neurons prevent this overfitting.

              
          </div>
          <h4>Solving XOR with neural networks</h4>
          <div>In the diagram below we can see that it is hard to solve the xor problem using a linear classifier<br />
          This simply means we can't separate our positive results from negative results using a single hyperplane</div>
          We take our set of possible inputs/coordinates &#123; (0,0),(0,1),(1,0),(1,1) &#125; and pass them through two activation functions.<br />
          For each input pair (x1, x2) we pass each value through two functions representing possible outputs. < br />
          h1 takes each input and weights them (20), adds the bias (-10) and gets the sigmoid of this number to reduce it to 0 or 1. < br />
          h2 takes each input and weights them (-20), adds the bias (30) and gets the sigmoid of this number to reduce it to 0 or 1 <br />
          The output of h1 and h2 are then weighted and passed to the activation function y, which adds the values to the bias, reduces it to a 0 or 1 <br />
          <h4>Where did the weights and biases come from?</h4>
          <div>Great questions, neural network algorithms will randomly assign weights and biases and see how far away from the expected results <br />
          It will then propagate backwards through the neural network adjusting weights and biases before running the sequence again <br />
          This continues until it has assigned weights and biases that can result in correct classification of the training set, or a certain amount of the training set
          <br/>Small examples such as XOR can be calculated quickly by hand by guessing numbers, and sometimes their will be countless numbers of 
          correct values, <br />however once you scale these problems and have 5+ layers with 5+ input nodes, it becomes unfeasible to attempt by hand</div>


          <img alt="solving xor with neural networks" src="/images/neuralxor.png"></img>
        </div>
       
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
       )
}

export default Introduction
