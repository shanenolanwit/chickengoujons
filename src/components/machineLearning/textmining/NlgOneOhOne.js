import React from "react"

function NLGOneOhOne() {
    return (
        <div>
          <h3>Can a robot do my homework</h3>
          <pre> A guide for lazy financial analysts and optimistic investors</pre>
          
          <p>If there’s any industry thats both resistant to technology and the perfect 
              target for automation, its the finance industry. NLG (Natural Language Generation) can analyse, 
              interpret, summarise and explain large data in a fraction of the time it would take Johnny Wallstreet to do 
              manually with his calculator and dictionary. Using an NLG engine also removes human bias and error, providing 
              reliable, repeatable, consistent and honest results.</p> 

              <p>Contrary to the popular belief that finance is all about numbers, financial analysts are not worth the paper 
                  their degree was printed on if they can't effectively and efficiently communicate the meaning and context behind 
                  these numbers to their colleagues or clients or any other interested stakeholders.  
                  In a <a href="https://www2.deloitte.com/content/dam/Deloitte/us/Documents/finance-transformation/us-crunch-time-seven-reporting-in-a-digital-world.pdf">study by deloitte</a> and according 
                  to <a href="https://www.allbusinessschools.com/finance/common-questions/financial-analyst-job-description/">this</a> random article from the internet 
                  it is clear that the majority of a financial teams time is spent creating and updating reports, with very little time spent communicating findings 
                  with the business.</p>
              
              <p>The aim of NLG is to reverse this behaviour. Similar to the manual tasks a financial analyst like Johnny Wallstreet undertakes, 
                  NLG analyses data, extracts and interprets the most interesting and important facts, and summarises it suit it's target audience. 
                  Speed is not the only benefit of this process. As mentioned before, NLG removes bias and human error and produces consistent, 
                  objective reports. 
              </p>

              <p>Some brave financial institutes are already starting to realise the potential of investing in NLG, unlike their 
                  friends who are relying on technology like COBOL to <a href="https://www.anubex.com/news/detail/article/the-wall-street-journal-on-cobol/">run wall street</a> 
                  , some companies are embracing cutting edge technologies to drive their business and give them an edge over their competitors. 
                  In <a href="https://deloitte.wsj.com/cio/2017/10/05/digitizing-finance-communications-with-natural-language-generation/">this</a> wall 
                  street journal article, one financial institute states that <blockquote><i>Prior to using NLG, the 
                      client needed to engage more than 40 analysts around the world. With NLG, 
                      the organization could create the first draft in 10 minutes rather than several weeks</i></blockquote>
              </p>

          <h4>Github</h4>
          <pre><a href="https://github.com/shanenolanwit/tunnel-snakes-101/blob/master/OffLicenceNLG.ipynb">NLG for fun and finance</a></pre>
          In the linked github project to get started I took a csv that contains off license sales data for a week and uses nlg to describe the sales for the week. 
          I then move onto a more complex example and take a block of text representing a blog or article about whats going on in the world of finance and investments and then attempt to 
          use nlg to provide a quick summary of what to invest in or avoid. With a little graph for those who prefer pictures.
          Follow the link for the most up to date version of the case study but basically we aim to take an input such as this:
            <blockquote><i>greetings to first time readers this blog aims to inform you of useful stuff. 
              In todays financial news experts are predicting chicken goujons are a safe and secure bet. 
              i am particularly speculative of investments in antique typewriters and i believe calculators are still risky in the long term. 
              However with regard to precious metals, the returns are at all time high, our resident expert predicts gold prices will soar</i></blockquote>
          And produce a report like this: 
          <ul>
            <li>Invest in chicken goujons and gold</li>
            <li>Things are looking pretty shit for typewriters and calculators</li>
          </ul>
          We don't quite get there yet, our end results look something like this:<br/>
          <b>i'm getting [safe, secure] vibes off ['goujons', 'chicken']</b><br/>
          <b>i'm getting ['speculative'] vibes off ['investments', 'typewriters']</b>
          <ul>
            <li>chicken goujons safe secure bet - [safe, secure] [chicken, goujons]</li>
            <li>experts predicting chicken goujons safe - [safe, secure] [goujons]</li>
            <li>expert predicts gold prices soar - [predicts, experts, soar] [prices]</li>
            <li>particular speculative investments antique typewriters - [speculative] [investments, typewriters]</li>
            <li>calculators still risky long term - [risky] [calculators]</li>
          </ul>

          <h2>DISCLAIMER</h2>
          <p>Please don't use my code to invest real money. . . Unless you are willing to take full responsibility if you lose money and share the profits with me if you gain money</p>
        </div>
       
      )
}

export default NLGOneOhOne
