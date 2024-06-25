import React, { useState } from 'react';
import data from './data1';
import SingleQuestion from './question';
function FAQ() {
  const [questions, setQuestions] = useState(data);
  return (
    <div class="site-section">
      <div className='container'>
        <h3 class="text-cursive">FAQ's related to Noor Education and healthcare Foundation Queries</h3>
        <section className='info' class="text-cursive">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default FAQ;