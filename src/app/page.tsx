import React from 'react';

const InterviewSettings: React.FC = () => {
  return (
    <div className="interview-settings-container"> 
      <div className="interview-settings">
        <h2 className="Interview1">Interview Settings</h2>
        <p className="description1">
          We may still send you important notifications about your account outside of your notification settings.
        </p>
        <hr className="line"></hr>
        <div className="setting">
          <label className="setting-title1">
            Follow on Questions
          </label>
          <p className="setting-description " style={{ fontFamily: 'Switzer' }}>
            Follow-up questions are <b>AI Based </b> additional questions that build upon or explore further the response to an initial question.
          </p>
          <label className="question" style={{ fontFamily: 'Switzer' }}>
            <input type="checkbox" /> Enable Follow on Questions
          </label>
        </div>
        <hr className="line01"></hr>
        <div className="setting">
          <label className="setting-title2">
            Question per Category
          </label>
          <p className="setting-description" style={{ fontFamily: 'Switzer' }}>
            These are AI generated questions. The interview will be divided into 4 main categories.
          </p>
          <div className="ml-24">
          <select className="border border-gray-300 rounded-xl w-full sm:w-3/4 md:w-1/4 lg:w-1/6 xl:w-1/8 h-12 mt-[-70px] flex mx-auto md:flex-row md:justify-center">

            <option>Select option</option>
            <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
          </select></div>
        </div>
        <div className="setting">
        <hr className="line02"></hr>
          <label className="setting-title3">
    
            Set Question Delay
          </label>
          <p className="setting-description" style={{ fontFamily: 'Switzer' }}>
            These are AI generated questions. The interview will be divided into 4 main categories.
          </p>
          <div className="ml-24">
          <select className="border border-gray-300 rounded-xl w-full sm:w-3/4 md:w-1/4 lg:w-1/6 xl:w-1/8 h-12 mt-[-70px] flex mx-auto md:flex-row md:justify-center">
            <option className="fixed">Select option</option>
            <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
          </select>

          </div>
        </div>
        <div className="setting">
          <hr className="line03"/> 
          <label className="setting-title4">
            Show Interview Statistics
          </label>
          <p className="setting-description" style={{ fontFamily: 'Switzer' }}>
            These are AI generated questions. The interview will be divided into 4 main categories.
          </p>
          <div>
            <div className="yesno" style={{ fontFamily: 'Switzer' }}>
            <label className="yes flex justify-center sm:ml-[-4%] sm:mr-2 -mt-20">
              <input type="radio" name="stats" value="yes" /> Yes
            </label> </div>
          <label className="no flex justify-center ml-0 sm:ml-[25%] sm:mr-32 -mt-6" style={{ fontFamily: 'Switzer' }}>
              <input type="radio" name="stats" value="no" /> No
            </label> 
            </div>
          </div>
        </div>
      </div>

  );
}

export default InterviewSettings;
