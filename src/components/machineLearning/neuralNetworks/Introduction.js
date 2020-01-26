import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 512,
  },
  code: {
    backgroundColor: 'black',
    color: 'white'
  }
});
const code0 = `(x + y >= 2) => (x + y - 2 <= 0)`;
const code1 = `
/**
 * Takes an numerical input i
 * Returns 0 if i is a negative number
 * Returns 1 is i is a positive number
 */
const sigmoid = ( i ) => {
    return ( i < 0 ) ? 0 : 1;
}

const randomNumber = () => {
    const n = Math.floor(Math.random() * 30);
    return randomBoolean() ? n*-1 : n;
}

const randomBoolean = () => {
    return Math.random() >= 0.5;
}

const arraysEqual = (array1, array2) => {
    return array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]})
}


let count = 0;
let keepGoing = true;
const inputs = [ {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, {x: 1, y: 1} ]
while(count< 1000 && keepGoing){
    const weightX = randomNumber();
    const weightY = randomNumber();

    const biasX = randomNumber();
    const biasY = randomNumber();

    const weightZ = randomNumber();
    const biasZ = randomNumber();

    let sig1;
    let sig2
    const res = inputs.map( input => {
        const { x, y } = input;
        const input1 = x*weightX + y*weightX + biasX;
        const input2 = x*weightY + y*weightY + biasY;
        sig1 = sigmoid(input1)
        sig2 = sigmoid(input2)
        const input3 = sig1*weightZ + sig2*weightZ + biasZ;
        const sig3 = sigmoid(input3);
        return sig3;
    });

    const xor = [ 0, 1, 1, 0];
    if(arraysEqual(xor, res)){
        console.log(\`found a result after \${count} tries\`)
        console.log(\`\${weightX} \${biasX} \${weightY} \${biasY} \${weightZ} \${biasZ}\`);
        console.log(\`(0,0) => sig(0*\${weightX} + 0*\${weightX} + \${biasX}) sig(0*\${weightY} + 0*\${weightY} + \${biasY}) => sig(\${sig1}*\${weightZ} + \${sig2}*\${weightZ} + \${biasZ}) => 0\`);
        console.log(\`(0,1) => sig(0*\${weightX} + 1*\${weightX} + \${biasX}) sig(0*\${weightY} + 1*\${weightY} + \${biasY}) => sig(\${sig1}*\${weightZ} + \${sig2}*\${weightZ} + \${biasZ}) => 1\`);
        console.log(\`(1,0) => sig(1*\${weightX} + 0*\${weightX} + \${biasX}) sig(1*\${weightY} + 0*\${weightY} + \${biasY}) => sig(\${sig1}*\${weightZ} + \${sig2}*\${weightZ} + \${biasZ}) => 1\`);
        console.log(\`(1,1) => sig(1*\${weightX} + 1*\${weightX} + \${biasX}) sig(1*\${weightY} + 1*\${weightY} + \${biasY}) => sig(\${sig1}*\${weightZ} + \${sig2}*\${weightZ} + \${biasZ}) => 0\`);
        keepGoing = false;
    }
    
    count = count + 1;
}
`

const code2 = `
Shanes-MacBook-Pro:xor shane$ node index.js 
found a result after 231 tries
-16 25 9 -7 4 -8
(0,0) => sig(0*-16 + 0*-16 + 25) sig(0*9 + 0*9 + -7) => sig(0*4 + 1*4 + -8) => 0
(0,1) => sig(0*-16 + 1*-16 + 25) sig(0*9 + 1*9 + -7) => sig(0*4 + 1*4 + -8) => 1
(1,0) => sig(1*-16 + 0*-16 + 25) sig(1*9 + 0*9 + -7) => sig(0*4 + 1*4 + -8) => 1
(1,1) => sig(1*-16 + 1*-16 + 25) sig(1*9 + 1*9 + -7) => sig(0*4 + 1*4 + -8) => 0
Shanes-MacBook-Pro:xor shane$ node index.js 
found a result after 160 tries
20 -25 -8 1 -27 18
(0,0) => sig(0*20 + 0*20 + -25) sig(0*-8 + 0*-8 + 1) => sig(1*-27 + 0*-27 + 18) => 0
(0,1) => sig(0*20 + 1*20 + -25) sig(0*-8 + 1*-8 + 1) => sig(1*-27 + 0*-27 + 18) => 1
(1,0) => sig(1*20 + 0*20 + -25) sig(1*-8 + 0*-8 + 1) => sig(1*-27 + 0*-27 + 18) => 1
(1,1) => sig(1*20 + 1*20 + -25) sig(1*-8 + 1*-8 + 1) => sig(1*-27 + 0*-27 + 18) => 0
Shanes-MacBook-Pro:xor shane$ node index.js 
found a result after 107 tries
25 -17 -17 26 15 -26
(0,0) => sig(0*25 + 0*25 + -17) sig(0*-17 + 0*-17 + 26) => sig(1*15 + 0*15 + -26) => 0
(0,1) => sig(0*25 + 1*25 + -17) sig(0*-17 + 1*-17 + 26) => sig(1*15 + 0*15 + -26) => 1
(1,0) => sig(1*25 + 0*25 + -17) sig(1*-17 + 0*-17 + 26) => sig(1*15 + 0*15 + -26) => 1
(1,1) => sig(1*25 + 1*25 + -17) sig(1*-17 + 1*-17 + 26) => sig(1*15 + 0*15 + -26) => 0
Shanes-MacBook-Pro:xor shane$ node index.js 
found a result after 667 tries
-21 12 16 -24 -24 7
(0,0) => sig(0*-21 + 0*-21 + 12) sig(0*16 + 0*16 + -24) => sig(0*-24 + 1*-24 + 7) => 0
(0,1) => sig(0*-21 + 1*-21 + 12) sig(0*16 + 1*16 + -24) => sig(0*-24 + 1*-24 + 7) => 1
(1,0) => sig(1*-21 + 0*-21 + 12) sig(1*16 + 0*16 + -24) => sig(0*-24 + 1*-24 + 7) => 1
(1,1) => sig(1*-21 + 1*-21 + 12) sig(1*16 + 1*16 + -24) => sig(0*-24 + 1*-24 + 7) => 0
`
function Introduction() {
  const classes = useStyles();
    return (
        <div>
          <h3>Here's the story with neural networks</h3>
          <div>
            Think of neural networks as a collection of simple nodes (neurons) that represent a binary state: on or off (0 or 1).<br />
            This activation state is determined by an <strong>activation function</strong>. <br />
            An activation function typically <ul>
              <li>multiplies each input by a given weight</li>
              <li>adds the weighted input values to a given bias</li>
              <li>converts the answer to a sigmoid value - 0 or 1 representing the active state</li>
            </ul> 
            The outputs of these nodes may become inputs into other nodes, depending on the complexity of the problem. <br />
            This concept is better explained with examples...<br />

            <h4>Cans with the lads - cans and truth tables</h4>
            <p>
            <strong>AND</strong><br />
            Say you want to go drinking cans, but you only want to go drinking cans if your two friends Jim and Jack are going too.<br />
            This is the classic case for using an <strong>AND</strong> type truth table.<br /></p>
            <TableContainer component={Paper}>
             <Table className={classes.table} size="small" aria-label="AND truth table">
               <TableHead>
                 <TableRow>
                   <TableCell>x</TableCell><TableCell>y</TableCell><TableCell>result</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                   <TableRow><TableCell>0</TableCell><TableCell>0</TableCell><TableCell>0</TableCell></TableRow>
                   <TableRow><TableCell>0</TableCell><TableCell>1</TableCell><TableCell>0</TableCell></TableRow>
                   <TableRow><TableCell>1</TableCell><TableCell>0</TableCell><TableCell>0</TableCell></TableRow>
                   <TableRow><TableCell>1</TableCell><TableCell>1</TableCell><TableCell>1</TableCell></TableRow>
               </TableBody>
             </Table>
            </TableContainer>
            Applying this logic to our neural network, we say that our activation node represents if we are going drinking or not.<br />
            The inputs to this node are x and y values representing if Jim is going drinking and if Jack is going drinking.<br />
            You set a threshold of 2 meaning you only go drinking (activate) if the sum of the inputs is greater than or equal to 2.<br />
            More formally we call this threshold our bias and use simple algebra to structure the function as if the sum of inputs plus bias is less than zero.<br />
            { code0 } <br />
            Later you will see weights being applied to certain inputs, this means that some inputs are more significant than others.<br />
            To keep using this example, you decide you will go for cans if Jack and Jim go, or if Jack goes, but not if neither or only Jim goes.<br />
            You keep the threshold score as 2, but give Jacks answer a weight of 2. <br />

            <br /><p>
            <strong>OR</strong><br />
            Say you still want to go drinking cans, but now you're happy to go as long as anyone else goes.<br />
            This is the classic case for using an <strong>OR</strong> type truth table.<br /></p>
            <TableContainer component={Paper}>
             <Table className={classes.table} size="small" aria-label="OR truth table">
               <TableHead>
                 <TableRow>
                   <TableCell>x</TableCell><TableCell>y</TableCell><TableCell>result</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                   <TableRow><TableCell>0</TableCell><TableCell>0</TableCell><TableCell>0</TableCell></TableRow>
                   <TableRow><TableCell>0</TableCell><TableCell>1</TableCell><TableCell>1</TableCell></TableRow>
                   <TableRow><TableCell>1</TableCell><TableCell>0</TableCell><TableCell>1</TableCell></TableRow>
                   <TableRow><TableCell>1</TableCell><TableCell>1</TableCell><TableCell>1</TableCell></TableRow>
               </TableBody>
             </Table>
            </TableContainer>
            We apply this logic to our neural network by modifying our activation function and lowering the threshold to 1.<br />

            <br /><p>
            <strong>XOR</strong><br />
            Jack and Jim are dead. Your other options for drinking partners are Alice and Bob.
            Alice and Bob are a couple who are grand on their own but annoying together.<br />
            You decide to go if either is free, but not if neither or both are free.
            This is the classic case for using an <strong>XOR</strong> type truth table.<br />
            </p>
            <TableContainer component={Paper}>
             <Table className={classes.table} size="small" aria-label="XOR truth table">
               <TableHead>
                 <TableRow>
                   <TableCell>x</TableCell><TableCell>y</TableCell><TableCell>result</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                   <TableRow><TableCell>0</TableCell><TableCell>0</TableCell><TableCell>0</TableCell></TableRow>
                   <TableRow><TableCell>0</TableCell><TableCell>1</TableCell><TableCell>1</TableCell></TableRow>
                   <TableRow><TableCell>1</TableCell><TableCell>0</TableCell><TableCell>1</TableCell></TableRow>
                   <TableRow><TableCell>1</TableCell><TableCell>1</TableCell><TableCell>0</TableCell></TableRow>
               </TableBody>
             </Table>
            </TableContainer>
            There is a major problem applying this logic to our activation function because now we have two threshold values - 0 and 2<br />
            We need to add weights and hidden neuron layers to our network to get the values we want.<br/>
            So what weights do we assign our inputs and biases to make sure we correctly classify our inputs into a 1 or 0?<br />
            Great question, the answer is we don't, although we can work it out by hand for small examples, it quickly becomes impossible with 
            the addition of extra neurons and hidden layers.<br />
            Luckily neural networks are very good at assigning weights, checking how accurate their answers are, and then going back and adjusting their weights and thresholds to make their predictions more accurate. <br />
            There is always a danger that you will overfit the data, and just have weights and biases that will only fit your exact data set but 
            is not flexible to new data. Techniques such as randomly dropping neurons prevent this overfitting.

            

            <p>
            In the diagram below we can see that it is hard to solve the xor problem using a linear classifier<br />
          This simply means we can't separate our positive results from negative results using a single hyperplane<br />
          We take our set of possible inputs/coordinates &#123; (0,0),(0,1),(1,0),(1,1) &#125; and pass them through two activation functions.<br />
          For each input pair (x1, x2) we pass each value through two functions representing possible outputs. < br />
          h1 takes each input and weights them (20), adds the bias (-10) and gets the sigmoid of this number to reduce it to 0 or 1. < br />
          h2 takes each input and weights them (-20), adds the bias (30) and gets the sigmoid of this number to reduce it to 0 or 1 <br />
          The output of h1 and h2 are then weighted and passed to the activation function y, which adds the values to the bias, reduces it to a 0 or 1 <br />
          <img alt="solving xor with neural networks" src="/images/neuralxor.png" width="512" height="512"></img>
            </p>
            The following code snippet demonstrates a primitive neural network designed to solve the XOR problem.<br />
            The network does not learn from its mistakes, it simple assigns random values to weights and biases and checks if they satisfy the requirements.
              <pre className={classes.code}>
                {code1}
              </pre>
              We can see from the following output, that after 4 runs of the program it takes an average of 291 iterations to get the values correct.
              <pre className={classes.code}>
                {code2}
              </pre>

              
          </div>

        </div>

       )
}

export default Introduction
