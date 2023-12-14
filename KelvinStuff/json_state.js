import React, {useState, useEffect} from 'react';

const App = () => {
    const [jsonData, setJsonData] = useState(
        {"schema": {
            "profile": {
                "username": "string",
                "timestamp": "string"
            },
            "ability" : {
                "mobility" : {
                    "question" : "How would I describe the difficulty for myself to move around the house? Do I plan my next movement carefully as it is an event or is it something I do not even think about?",
                    "rating": "int",
                    "response": "string"
                },
                "social-public" : {
                    "question" : "How comfortable am I in public? Am I able to go and do my regular routine such as work, hangout with friends, or do hobbies?",
                    "rating": "int",
                    "response": "string"
                },
                "part-job-study" : {
                    "question" : "How would I describe the difficulty for myself to hold a part time job or study part time?",
                    "rating": "int",
                    "response": "string"
                },
                "full-job-study" : {
                    "question" : "How would I describe the difficulty for myself to hold a full time job or study full time?",
                    "rating": "int",
                    "response": "string"
                }, 
                "leave-bed" : {
                    "question" : "How would I describe the difficulty for myself to leave my bed?",
                    "rating": "int",
                    "response": "string"
                }
            },
            "habits" : {
                "sleep" : {
                    "question" : "How is my sleep schedule?",
                    "rating": "int",
                    "response": "string"
                },
                "eating" : {
                    "question" : "How is my eating schedule?",
                    "rating": "int",
                    "response": "string"
                },
                "hydration" : {
                    "question" : "How is my water intake schedule?",
                    "rating": "int",
                    "response": "string"
                },
                "receational_drugs" : {
                    "question" : "How is my recreational drug use?",
                    "rating": "int",
                    "response": "string"
                }, 
                "urination" : {
                    "question" : "How is my urination schedule?",
                    "rating": "int",
                    "response": "string"
                },
                "grades" : {
                    "question" : "How are my grades?",
                    "rating": "int",
                    "response": "string"
                },
                "relationships" : {
                    "question" : "How are my relationsips?",
                    "rating": "int",
                    "response": "string"
                },
                "improvement" : {
                    "question" : "How do I feel compared to the last time I filled out this form?",
                    "rating": "int",
                    "response": "string"
                }
            },
            "feedback":{
                "response": "string"
            }
        
        }
        })};

const updateJsonData = (key,value) => {
    setJsonData({
        key: value
    });
}

//when filing out values from the form they should just be inserted in the 
//format is given above


