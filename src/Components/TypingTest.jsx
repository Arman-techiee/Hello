import React, { useState, useEffect, useRef } from 'react';
import { Clock, RotateCcw, Trophy, Target, Settings, BarChart3, Keyboard, CheckCircle } from 'lucide-react';

const TypingTest = () => {
  const professionalTexts = [
    "The modern workplace demands exceptional communication skills and technical proficiency. Professionals must adapt to rapidly evolving technologies while maintaining high standards of accuracy and efficiency in their written correspondence.",
    "Effective project management requires clear documentation, timely communication, and precise attention to detail. Each milestone must be carefully tracked and reported to ensure successful completion of deliverables.",
    "Data analysis involves systematic examination of complex datasets to identify meaningful patterns and trends. Statistical methods and visualization techniques help transform raw information into actionable business insights.",
    "Software development follows structured methodologies including requirements gathering, system design, implementation, testing, and deployment. Version control and collaborative workflows ensure code quality and maintainability.",
    "Financial reporting requires meticulous accuracy and compliance with regulatory standards. Quarterly statements must reflect true performance metrics while adhering to established accounting principles and procedures.",
    "Market research encompasses competitive analysis, consumer behavior studies, and trend identification. Strategic decision-making relies on comprehensive data collection and statistical interpretation of market dynamics.",
    "Quality assurance processes involve systematic testing protocols, defect tracking, and continuous improvement initiatives. Standardized procedures ensure consistent product reliability and customer satisfaction metrics."
  ];

  const [testSettings, setTestSettings] = useState({
    duration: 60,
    showKeyboard: false,
    difficulty: 'professional'
  });

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [completed, setCompleted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [errors, setErrors] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [testHistory, setTestHistory] = useState([]);
  const inputRef = useRef(null);

  const currentText = professionalTexts[currentTextIndex];

  // Timer effect
  useEffect(() => {
    let timer;
    if (startTime && !completed && isActive) {
      timer = setInterval(() => {
        const seconds = Math.floor((Date.now() - startTime) / 1000);
        setElapsedTime(seconds);

        if (seconds >= testSettings.duration) {
          completeTest();
        }
      }, 100);
    }
    return () => clearInterval(timer);
  }, [startTime, completed, isActive, testSettings.duration]);

  // Input tracking effect
  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now());
      setIsActive(true);
    }

    if (input === currentText && !completed) {
      completeTest();
    }

    // Calculate real-time stats
    if (startTime && input.length > 0) {
      const minutes = elapsedTime / 60;
      const wordsTyped = input.trim().split(' ').filter(word => word.length > 0).length;
      const currentWPM = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
      setWpm(currentWPM);

      // Calculate accuracy and errors
      let correctCount = 0;
      let errorCount = 0;
      for (let i = 0; i < input.length; i++) {
        if (input[i] === currentText[i]) {
          correctCount++;
        } else {
          errorCount++;
        }
      }
      setCorrectChars(correctCount);
      setErrors(errorCount);
      const currentAccuracy = input.length > 0 ? Math.round((correctCount / input.length) * 100) : 100;
      setAccuracy(currentAccuracy);
    }
  }, [input, elapsedTime, startTime, currentText, completed]);

  const completeTest = () => {
    setCompleted(true);
    setIsActive(false);
    const finalMinutes = elapsedTime / 60;
    const wordsTyped = input.trim().split(' ').filter(word => word.length > 0).length;
    const finalWPM = finalMinutes > 0 ? Math.round(wordsTyped / finalMinutes) : 0;
    setWpm(finalWPM);

    // Save to history
    const testResult = {
      wpm: finalWPM,
      accuracy,
      duration: elapsedTime,
      errors,
      date: new Date().toLocaleString(),
      textLength: input.length
    };
    setTestHistory(prev => [testResult, ...prev.slice(0, 4)]);
  };

  const handleRestart = () => {
    setCurrentTextIndex((prev) => (prev + 1) % professionalTexts.length);
    setInput("");
    setStartTime(null);
    setElapsedTime(0);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setCorrectChars(0);
    setCompleted(false);
    setIsActive(false);
    inputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= currentText.length) {
      setInput(value);
    }
  };

  const remainingTime = Math.max(0, testSettings.duration - elapsedTime);
  const progress = (input.length / currentText.length) * 100;

  const renderTextWithHighlight = () => {
    return currentText.split('').map((char, index) => {
      let className = "text-gray-400";
      
      if (index < input.length) {
        if (input[index] === char) {
          className = "text-green-700 bg-green-50";
        } else {
          className = "text-red-700 bg-red-50";
        }
      } else if (index === input.length) {
        className = "text-gray-900 bg-blue-100 border-l-2 border-blue-500 animate-pulse";
      }

      return (
        <span key={index} className={`${className} ${char === ' ' ? 'inline-block w-2' : 'inline'}`}>
          {char}
        </span>
      );
    });
  };

  const getPerformanceLevel = (wpm) => {
    if (wpm >= 80) return { level: "Expert", color: "text-purple-700", bgColor: "bg-purple-50 border-purple-200" };
    if (wpm >= 60) return { level: "Advanced", color: "text-blue-700", bgColor: "bg-blue-50 border-blue-200" };
    if (wpm >= 40) return { level: "Proficient", color: "text-green-700", bgColor: "bg-green-50 border-green-200" };
    if (wpm >= 25) return { level: "Developing", color: "text-yellow-700", bgColor: "bg-yellow-50 border-yellow-200" };
    return { level: "Beginner", color: "text-red-700", bgColor: "bg-red-50 border-red-200" };
  };

  const performance = getPerformanceLevel(wpm);

  const SettingsPanel = () => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Settings className="w-5 h-5 mr-2" />
          Test Settings
        </h3>
        <button
          onClick={() => setShowSettings(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Test Duration</label>
          <select
            value={testSettings.duration}
            onChange={(e) => setTestSettings(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={30}>30 seconds</option>
            <option value={60}>1 minute</option>
            <option value={120}>2 minutes</option>
            <option value={300}>5 minutes</option>
          </select>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="showKeyboard"
            checked={testSettings.showKeyboard}
            onChange={(e) => setTestSettings(prev => ({ ...prev, showKeyboard: e.target.checked }))}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="showKeyboard" className="ml-2 text-sm text-gray-700">
            Show virtual keyboard
          </label>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ icon: Icon, label, value, subtext, color = "blue" }) => (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow`}>
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-5 h-5 text-${color}-600`} />
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      <div className="text-sm font-medium text-gray-700">{label}</div>
      {subtext && <div className="text-xs text-gray-500 mt-1">{subtext}</div>}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto bg-gray-50 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Keyboard className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Professional Typing Assessment</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Measure your typing proficiency with professional-grade content. 
            Assess your words per minute, accuracy, and overall performance.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>
            <button
              onClick={handleRestart}
              className="flex items-center px-4 py-2 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              New Test
            </button>
          </div>
          
          <div className="text-sm text-gray-500">
            Test {currentTextIndex + 1} of {professionalTexts.length}
          </div>
        </div>

        {showSettings && <SettingsPanel />}

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <StatCard
            icon={Clock}
            label="Time Remaining"
            value={`${Math.floor(remainingTime)}s`}
            color="blue"
          />
          <StatCard
            icon={Trophy}
            label="Words per Minute"
            value={wpm}
            subtext={isActive ? performance.level : ""}
            color="green"
          />
          <StatCard
            icon={Target}
            label="Accuracy"
            value={`${accuracy}%`}
            subtext={`${correctChars} correct chars`}
            color="purple"
          />
          <StatCard
            icon={BarChart3}
            label="Characters"
            value={input.length}
            subtext={`of ${currentText.length}`}
            color="orange"
          />
          <StatCard
            icon={CheckCircle}
            label="Errors"
            value={errors}
            subtext={errors > 0 ? "Check accuracy" : "Perfect!"}
            color="red"
          />
        </div>

        {/* Text Display */}
        <div className="mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 min-h-[140px] overflow-hidden">
            <div className="text-lg leading-relaxed font-mono tracking-wide break-words whitespace-pre-wrap">
              {renderTextWithHighlight()}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="mb-6">
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            disabled={completed || remainingTime === 0}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-mono text-lg transition-colors"
            rows="4"
            placeholder={completed || remainingTime === 0 ? "Assessment completed" : "Begin typing here..."}
            autoFocus
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Characters typed: {input.length}/{currentText.length}</span>
            <span>Words: {input.trim().split(' ').filter(word => word.length > 0).length}</span>
          </div>
        </div>

        {/* Live Performance Indicator */}
        {isActive && !completed && (
          <div className={`${performance.bgColor} border rounded-lg p-4 mb-6`}>
            <div className="flex items-center justify-center">
              <span className="text-gray-700 mr-2">Current Performance Level:</span>
              <span className={`font-bold text-lg ${performance.color}`}>
                {performance.level}
              </span>
            </div>
          </div>
        )}

        {/* Results */}
        {completed && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-600" />
              Assessment Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-700">{wpm}</div>
                <div className="text-gray-600 font-medium">Words per Minute</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700">{accuracy}%</div>
                <div className="text-gray-600 font-medium">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-700">{elapsedTime}s</div>
                <div className="text-gray-600 font-medium">Time Taken</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-700">{errors}</div>
                <div className="text-gray-600 font-medium">Total Errors</div>
              </div>
            </div>
            <div className={`text-center p-4 ${performance.bgColor} border rounded-lg`}>
              <div className="text-lg font-semibold text-gray-700">Performance Classification</div>
              <div className={`text-2xl font-bold ${performance.color}`}>{performance.level}</div>
            </div>
          </div>
        )}

        {/* Time Up Message */}
        {remainingTime === 0 && !completed && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6 text-center">
            <h3 className="text-xl font-bold text-orange-700 mb-2">Time Expired</h3>
            <p className="text-gray-600">
              Assessment completed: {input.length} characters, {accuracy}% accuracy, {wpm} WPM
            </p>
          </div>
        )}

        {/* Test History */}
        {testHistory.length > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Recent Performance History
            </h4>
            <div className="space-y-3">
              {testHistory.map((result, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white rounded border">
                  <div className="flex space-x-6">
                    <span className="font-medium">{result.wpm} WPM</span>
                    <span className="text-gray-600">{result.accuracy}% accuracy</span>
                    <span className="text-gray-600">{result.errors} errors</span>
                  </div>
                  <span className="text-sm text-gray-500">{result.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        {!isActive && !completed && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Assessment Guidelines
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-blue-800 space-y-2">
                <li>• Type the displayed text exactly as shown</li>
                <li>• Assessment begins when you start typing</li>
                <li>• Green highlighting indicates correct input</li>
                <li>• Red highlighting shows errors</li>
              </ul>
              <ul className="text-blue-800 space-y-2">
                <li>• Complete as much text as possible within the time limit</li>
                <li>• Focus on accuracy over speed initially</li>
                <li>• Professional standard is 40+ WPM with 95%+ accuracy</li>
                <li>• Use proper touch typing technique</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypingTest;