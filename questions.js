// Psychometric Assessment Questions Database
// Organized by position level with categories: Personality, Situational Judgment, Competencies

const assessmentQuestions = {
    'line-staff': [
        // Personality - Big 5 Traits
        {
            id: 1,
            category: 'personality',
            trait: 'extraversion',
            text: 'I enjoy meeting and interacting with new guests throughout my workday.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 2,
            category: 'personality',
            trait: 'conscientiousness',
            text: 'I always double-check my work to ensure everything is perfect before presenting it to guests.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 3,
            category: 'personality',
            trait: 'agreeableness',
            text: 'When working with teammates, I prioritize harmony and cooperation over personal preferences.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 4,
            category: 'personality',
            trait: 'emotional_stability',
            text: 'I remain calm and composed even during the busiest service periods.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 5,
            category: 'personality',
            trait: 'openness',
            text: 'I enjoy learning new skills and adapting to different roles within the resort.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        // Situational Judgment
        {
            id: 6,
            category: 'situational',
            competency: 'customer_service',
            text: 'A guest complains that their beach lounger is not in a good location. What would you do?',
            type: 'multiple_choice',
            options: [
                { text: 'Politely explain that all loungers are first-come, first-served', value: 1, score: 2 },
                { text: 'Immediately offer to move them to a better location and ensure they are comfortable', value: 2, score: 5 },
                { text: 'Tell them you will check if other locations are available later', value: 3, score: 3 },
                { text: 'Suggest they speak with your supervisor about premium seating options', value: 4, score: 4 }
            ]
        },
        {
            id: 7,
            category: 'situational',
            competency: 'teamwork',
            text: 'During a busy lunch service, you notice a colleague struggling with their section. What do you do?',
            type: 'multiple_choice',
            options: [
                { text: 'Focus on your own section to ensure your guests are well-served', value: 1, score: 2 },
                { text: 'Quickly help them with a few tables once your section is under control', value: 2, score: 5 },
                { text: 'Tell your supervisor that they need help', value: 3, score: 3 },
                { text: 'Offer encouragement but continue with your own tasks', value: 4, score: 3 }
            ]
        },
        {
            id: 8,
            category: 'situational',
            competency: 'problem_solving',
            text: 'A guest ordered a special dish, but the kitchen has run out of a key ingredient. How do you handle this?',
            type: 'multiple_choice',
            options: [
                { text: 'Apologize and tell them to choose something else from the menu', value: 1, score: 2 },
                { text: 'Consult with the chef about alternatives and present creative options to the guest', value: 2, score: 5 },
                { text: 'Offer them a complimentary appetizer while they decide on another dish', value: 3, score: 4 },
                { text: 'Explain the situation and ask what they would prefer instead', value: 4, score: 3 }
            ]
        },
        {
            id: 9,
            category: 'situational',
            competency: 'communication',
            text: 'A guest speaks limited English and is having difficulty explaining their dietary requirements. What is your approach?',
            type: 'multiple_choice',
            options: [
                { text: 'Use simple words and gestures, and show them the menu with pictures', value: 1, score: 4 },
                { text: 'Find a colleague who speaks their language to assist with the communication', value: 2, score: 5 },
                { text: 'Bring them samples of dishes so they can point to what they prefer', value: 3, score: 3 },
                { text: 'Recommend popular dishes that accommodate most dietary restrictions', value: 4, score: 3 }
            ]
        },
        {
            id: 10,
            category: 'situational',
            competency: 'adaptability',
            text: 'You are scheduled for beach service, but are suddenly asked to help with a special event setup. How do you respond?',
            type: 'multiple_choice',
            options: [
                { text: 'Express concern but agree to help where needed', value: 1, score: 3 },
                { text: 'Enthusiastically accept the new assignment and ask what needs to be done', value: 2, score: 5 },
                { text: 'Ask if someone else could do it since you prepared for beach service', value: 3, score: 2 },
                { text: 'Agree but mention you are not familiar with event setup', value: 4, score: 4 }
            ]
        },
        // Work Style & Values
        {
            id: 11,
            category: 'work_style',
            competency: 'initiative',
            text: 'When I notice something needs to be done, I usually:',
            type: 'multiple_choice',
            options: [
                { text: 'Wait for instructions from my supervisor', value: 1, score: 2 },
                { text: 'Take initiative and do it if it is within my capability', value: 2, score: 5 },
                { text: 'Mention it to a colleague and see if they will handle it', value: 3, score: 3 },
                { text: 'Make a note to tell my supervisor about it later', value: 4, score: 3 }
            ]
        },
        {
            id: 12,
            category: 'work_style',
            competency: 'attention_to_detail',
            text: 'When setting up a dining table for guests, what is most important to you?',
            type: 'multiple_choice',
            options: [
                { text: 'Making sure it is done quickly so guests do not wait', value: 1, score: 3 },
                { text: 'Ensuring every element is perfectly placed and visually appealing', value: 2, score: 5 },
                { text: 'Following the standard setup procedure correctly', value: 3, score: 4 },
                { text: 'Making sure all items are clean and functional', value: 4, score: 4 }
            ]
        },
        {
            id: 13,
            category: 'personality',
            trait: 'energy_level',
            text: 'I thrive in fast-paced, high-energy environments with constant activity.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 14,
            category: 'values',
            competency: 'service_excellence',
            text: 'What does "celebration of life" mean to you in a hospitality context?',
            type: 'multiple_choice',
            options: [
                { text: 'Providing efficient and professional service', value: 1, score: 3 },
                { text: 'Creating memorable, joyful experiences that guests will treasure', value: 2, score: 5 },
                { text: 'Maintaining a positive attitude throughout the workday', value: 3, score: 4 },
                { text: 'Organizing special events and entertainment for guests', value: 4, score: 4 }
            ]
        },
        {
            id: 15,
            category: 'situational',
            competency: 'stress_management',
            text: 'During an extremely busy period, multiple guests request your attention simultaneously. What do you do?',
            type: 'multiple_choice',
            options: [
                { text: 'Help the first guest who called you and deal with others afterwards', value: 1, score: 3 },
                { text: 'Acknowledge all guests, quickly assess priorities, and address them efficiently', value: 2, score: 5 },
                { text: 'Call for backup from a colleague to help manage the situation', value: 3, score: 4 },
                { text: 'Apologize for the wait and handle them one by one', value: 4, score: 3 }
            ]
        },
        {
            id: 16,
            category: 'personality',
            trait: 'dependability',
            text: 'I can be relied upon to show up on time and complete my assigned duties consistently.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 17,
            category: 'situational',
            competency: 'professionalism',
            text: 'A guest makes an inappropriate comment to you. How do you handle this?',
            type: 'multiple_choice',
            options: [
                { text: 'Ignore it and continue serving them professionally', value: 1, score: 3 },
                { text: 'Politely but firmly establish boundaries while maintaining service standards', value: 2, score: 5 },
                { text: 'Immediately inform your supervisor about the incident', value: 3, score: 4 },
                { text: 'Ask a colleague to take over serving that guest', value: 4, score: 3 }
            ]
        },
        {
            id: 18,
            category: 'work_style',
            competency: 'multitasking',
            text: 'How comfortable are you juggling multiple responsibilities at once?',
            type: 'likert',
            options: [
                { text: 'Very Uncomfortable', value: 1 },
                { text: 'Uncomfortable', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Comfortable', value: 4 },
                { text: 'Very Comfortable', value: 5 }
            ]
        },
        {
            id: 19,
            category: 'values',
            competency: 'cultural_fit',
            text: 'Nikki Beach blends music, dining, entertainment, fashion, film, and art. How does this resonate with you?',
            type: 'multiple_choice',
            options: [
                { text: 'It sounds interesting but I focus mainly on my job tasks', value: 1, score: 3 },
                { text: 'I love this creative, multi-sensory approach and want to contribute to it', value: 2, score: 5 },
                { text: 'I appreciate it and think it creates a unique atmosphere', value: 3, score: 4 },
                { text: 'I am not particularly interested in these aspects', value: 4, score: 1 }
            ]
        },
        {
            id: 20,
            category: 'situational',
            competency: 'guest_relations',
            text: 'A regular guest remembers you from their last visit and requests your service specifically. How do you feel?',
            type: 'multiple_choice',
            options: [
                { text: 'Pleased and ready to provide the same great service', value: 1, score: 4 },
                { text: 'Honored and excited to build on the relationship and exceed expectations', value: 2, score: 5 },
                { text: 'Happy but concerned about maintaining consistency', value: 3, score: 3 },
                { text: 'Grateful for the recognition', value: 4, score: 4 }
            ]
        },
        // Additional personality and competency questions
        {
            id: 21,
            category: 'personality',
            trait: 'positivity',
            text: 'I naturally maintain an upbeat, positive demeanor even when facing challenges.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 22,
            category: 'work_style',
            competency: 'feedback_receptiveness',
            text: 'When receiving constructive criticism from supervisors, I:',
            type: 'multiple_choice',
            options: [
                { text: 'Feel defensive but try to accept it', value: 1, score: 3 },
                { text: 'Welcome it as an opportunity to grow and improve', value: 2, score: 5 },
                { text: 'Listen politely and decide later if I agree', value: 3, score: 3 },
                { text: 'Appreciate the feedback and work to implement it', value: 4, score: 4 }
            ]
        },
        {
            id: 23,
            category: 'situational',
            competency: 'hygiene_standards',
            text: 'You notice a spill on the floor in a guest area during a busy period. What do you do?',
            type: 'multiple_choice',
            options: [
                { text: 'Mentally note it and clean it when you have time', value: 1, score: 2 },
                { text: 'Immediately address it to prevent accidents, even if it delays other tasks', value: 2, score: 5 },
                { text: 'Alert a housekeeping staff member to handle it', value: 3, score: 3 },
                { text: 'Place a caution sign and clean it as soon as possible', value: 4, score: 4 }
            ]
        },
        {
            id: 24,
            category: 'personality',
            trait: 'sociability',
            text: 'I genuinely enjoy small talk and building rapport with guests.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 25,
            category: 'values',
            competency: 'luxury_service',
            text: 'What does "barefoot luxury" hospitality mean to you?',
            type: 'multiple_choice',
            options: [
                { text: 'Casual service in a beach setting', value: 1, score: 2 },
                { text: 'High-end, personalized service delivered with warmth and approachability', value: 2, score: 5 },
                { text: 'Luxury amenities in a relaxed environment', value: 3, score: 4 },
                { text: 'Friendly service without formal protocols', value: 4, score: 3 }
            ]
        },
        {
            id: 26,
            category: 'work_style',
            competency: 'physical_stamina',
            text: 'How do you feel about roles requiring physical activity (standing, walking) for extended periods?',
            type: 'likert',
            options: [
                { text: 'Very Uncomfortable', value: 1 },
                { text: 'Uncomfortable', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Comfortable', value: 4 },
                { text: 'Very Comfortable', value: 5 }
            ]
        },
        {
            id: 27,
            category: 'situational',
            competency: 'upselling',
            text: 'A guest is enjoying their meal. What is your approach to suggesting additional items?',
            type: 'multiple_choice',
            options: [
                { text: 'I wait for them to ask if they want anything else', value: 1, score: 2 },
                { text: 'I enthusiastically recommend complementary items that enhance their experience', value: 2, score: 5 },
                { text: 'I mention dessert or drinks when clearing their plates', value: 3, score: 4 },
                { text: 'I offer a few suggestions if they seem interested', value: 4, score: 3 }
            ]
        },
        {
            id: 28,
            category: 'personality',
            trait: 'pride_in_work',
            text: 'I take personal pride in the quality of service I deliver to every guest.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 29,
            category: 'situational',
            competency: 'conflict_resolution',
            text: 'Two guests are having a loud disagreement near the pool area. How do you handle this?',
            type: 'multiple_choice',
            options: [
                { text: 'Immediately notify security or management', value: 1, score: 3 },
                { text: 'Approach calmly, offer to help resolve the issue or relocate them privately', value: 2, score: 5 },
                { text: 'Observe from a distance and intervene only if it escalates', value: 3, score: 2 },
                { text: 'Politely ask them to keep their voices down', value: 4, score: 3 }
            ]
        },
        {
            id: 30,
            category: 'values',
            competency: 'brand_alignment',
            text: 'Why do you want to work specifically for Nikki Beach?',
            type: 'multiple_choice',
            options: [
                { text: 'I need a job in hospitality and this seems like a good opportunity', value: 1, score: 2 },
                { text: 'I am passionate about the brand philosophy and lifestyle experience you create', value: 2, score: 5 },
                { text: 'I have heard good things about working here', value: 3, score: 3 },
                { text: 'I like the beachfront location and hospitality industry', value: 4, score: 4 }
            ]
        }
    ],

    'managerial': [
        // Leadership & Management
        {
            id: 1,
            category: 'leadership',
            competency: 'team_leadership',
            text: 'A team member consistently arrives late to shifts. As their manager, what is your approach?',
            type: 'multiple_choice',
            options: [
                { text: 'Issue a formal warning immediately', value: 1, score: 2 },
                { text: 'Have a private conversation to understand the root cause and offer support', value: 2, score: 5 },
                { text: 'Monitor for a few more days before taking action', value: 3, score: 2 },
                { text: 'Discuss it with HR and follow their recommendation', value: 4, score: 3 }
            ]
        },
        {
            id: 2,
            category: 'leadership',
            competency: 'motivation',
            text: 'Your team morale seems low after a particularly demanding week. What do you do?',
            type: 'multiple_choice',
            options: [
                { text: 'Give them a pep talk about professionalism and expectations', value: 1, score: 2 },
                { text: 'Organize a team gathering, acknowledge their hard work, and celebrate wins', value: 2, score: 5 },
                { text: 'Offer individual feedback and recognition to top performers', value: 3, score: 4 },
                { text: 'Hope they recover naturally once the busy period ends', value: 4, score: 1 }
            ]
        },
        {
            id: 3,
            category: 'personality',
            trait: 'decisiveness',
            text: 'I am comfortable making important decisions quickly, even with incomplete information.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 4,
            category: 'situational',
            competency: 'delegation',
            text: 'You have multiple urgent tasks. How do you handle the workload?',
            type: 'multiple_choice',
            options: [
                { text: 'Work longer hours to complete everything myself', value: 1, score: 2 },
                { text: 'Strategically delegate tasks based on team strengths while maintaining oversight', value: 2, score: 5 },
                { text: 'Ask everyone to help with a bit of everything', value: 3, score: 3 },
                { text: 'Prioritize critical tasks and delay less urgent ones', value: 4, score: 4 }
            ]
        },
        {
            id: 5,
            category: 'leadership',
            competency: 'coaching',
            text: 'A promising team member has potential but lacks confidence. How do you develop them?',
            type: 'multiple_choice',
            options: [
                { text: 'Assign them challenging tasks to force growth', value: 1, score: 3 },
                { text: 'Provide mentorship, gradual challenges, and consistent encouragement', value: 2, score: 5 },
                { text: 'Recommend external training programs', value: 3, score: 3 },
                { text: 'Pair them with a high-performing peer for learning', value: 4, score: 4 }
            ]
        },
        {
            id: 6,
            category: 'situational',
            competency: 'conflict_management',
            text: 'Two of your best employees are in conflict, affecting team dynamics. What is your approach?',
            type: 'multiple_choice',
            options: [
                { text: 'Tell them to resolve it professionally or face consequences', value: 1, score: 2 },
                { text: 'Facilitate a mediated conversation to address issues and find resolution', value: 2, score: 5 },
                { text: 'Separate them into different shifts or areas', value: 3, score: 3 },
                { text: 'Talk to each individually and hope they work it out', value: 4, score: 3 }
            ]
        },
        {
            id: 7,
            category: 'personality',
            trait: 'strategic_thinking',
            text: 'I regularly think about how current decisions will impact long-term operations.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 8,
            category: 'operational',
            competency: 'quality_control',
            text: 'You receive a complaint about service quality in your department. How do you respond?',
            type: 'multiple_choice',
            options: [
                { text: 'Defend your team and explain the circumstances', value: 1, score: 2 },
                { text: 'Investigate thoroughly, address the issue, and implement preventive measures', value: 2, score: 5 },
                { text: 'Apologize to the guest and remind staff of standards', value: 3, score: 3 },
                { text: 'Review procedures with the team and monitor closely', value: 4, score: 4 }
            ]
        },
        {
            id: 9,
            category: 'operational',
            competency: 'resource_management',
            text: 'Your department is over budget this quarter. What is your plan?',
            type: 'multiple_choice',
            options: [
                { text: 'Cut costs wherever possible immediately', value: 1, score: 2 },
                { text: 'Analyze spending patterns, identify inefficiencies, and strategically optimize', value: 2, score: 5 },
                { text: 'Discuss with senior management for budget adjustment', value: 3, score: 3 },
                { text: 'Reduce staffing or supplies until back on track', value: 4, score: 2 }
            ]
        },
        {
            id: 10,
            category: 'personality',
            trait: 'emotional_intelligence',
            text: 'I can easily read the mood and emotions of my team members.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 11,
            category: 'leadership',
            competency: 'performance_management',
            text: 'How do you approach performance reviews with your team?',
            type: 'multiple_choice',
            options: [
                { text: 'Focus on areas needing improvement to drive growth', value: 1, score: 3 },
                { text: 'Balance strengths and development areas with actionable goals and support', value: 2, score: 5 },
                { text: 'Praise good work and briefly mention areas to improve', value: 3, score: 3 },
                { text: 'Use standardized forms and criteria objectively', value: 4, score: 4 }
            ]
        },
        {
            id: 12,
            category: 'situational',
            competency: 'crisis_management',
            text: 'A VIP guest is extremely dissatisfied and threatening to escalate to corporate. How do you handle this?',
            type: 'multiple_choice',
            options: [
                { text: 'Immediately involve your director or GM', value: 1, score: 3 },
                { text: 'Listen empathetically, take ownership, and resolve with appropriate compensation', value: 2, score: 5 },
                { text: 'Explain policies and try to find middle ground', value: 3, score: 2 },
                { text: 'Apologize profusely and offer premium upgrades', value: 4, score: 4 }
            ]
        },
        {
            id: 13,
            category: 'personality',
            trait: 'accountability',
            text: 'I take full responsibility for my department outcomes, both successes and failures.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 14,
            category: 'operational',
            competency: 'scheduling',
            text: 'Multiple staff members request the same popular weekend off. How do you decide?',
            type: 'multiple_choice',
            options: [
                { text: 'First come, first served basis', value: 1, score: 3 },
                { text: 'Consider seniority, recent time-off history, and operational needs fairly', value: 2, score: 5 },
                { text: 'Rotate who gets popular days off each month', value: 3, score: 4 },
                { text: 'Deny all requests if too many people ask', value: 4, score: 1 }
            ]
        },
        {
            id: 15,
            category: 'leadership',
            competency: 'innovation',
            text: 'Your team suggests a new process that differs from established procedures. What do you do?',
            type: 'multiple_choice',
            options: [
                { text: 'Stick with current procedures that are proven to work', value: 1, score: 2 },
                { text: 'Evaluate the idea, pilot test if promising, and implement if successful', value: 2, score: 5 },
                { text: 'Thank them for the input but maintain current standards', value: 3, score: 2 },
                { text: 'Present the idea to upper management for approval', value: 4, score: 3 }
            ]
        },
        {
            id: 16,
            category: 'personality',
            trait: 'communication',
            text: 'I communicate expectations and feedback clearly and regularly to my team.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 17,
            category: 'situational',
            competency: 'recruitment',
            text: 'You are hiring for a critical position. Which candidate quality matters most?',
            type: 'multiple_choice',
            options: [
                { text: 'Extensive experience in luxury hospitality', value: 1, score: 4 },
                { text: 'Cultural fit with Nikki Beach values and trainable attitude', value: 2, score: 5 },
                { text: 'Technical skills and certifications', value: 3, score: 3 },
                { text: 'Availability and flexibility with scheduling', value: 4, score: 2 }
            ]
        },
        {
            id: 18,
            category: 'operational',
            competency: 'training',
            text: 'How do you ensure consistent service standards across your team?',
            type: 'multiple_choice',
            options: [
                { text: 'Conduct regular training sessions and refreshers', value: 1, score: 4 },
                { text: 'Model excellence, provide ongoing coaching, and create accountability systems', value: 2, score: 5 },
                { text: 'Distribute standard operating procedure manuals', value: 3, score: 3 },
                { text: 'Monitor service and provide feedback when issues arise', value: 4, score: 3 }
            ]
        },
        {
            id: 19,
            category: 'personality',
            trait: 'adaptability',
            text: 'I thrive in dynamic environments where priorities can shift quickly.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 20,
            category: 'leadership',
            competency: 'cross_functional',
            text: 'Another department needs your team support during a major event. How do you respond?',
            type: 'multiple_choice',
            options: [
                { text: 'Politely decline as it is not your responsibility', value: 1, score: 1 },
                { text: 'Collaborate enthusiastically to ensure overall resort success', value: 2, score: 5 },
                { text: 'Offer limited support if it does not impact your operations', value: 3, score: 3 },
                { text: 'Agree if reciprocal support is offered', value: 4, score: 3 }
            ]
        },
        {
            id: 21,
            category: 'operational',
            competency: 'data_analysis',
            text: 'Guest satisfaction scores for your area have declined slightly. What is your approach?',
            type: 'multiple_choice',
            options: [
                { text: 'Wait to see if it is a temporary trend', value: 1, score: 1 },
                { text: 'Analyze feedback, identify patterns, and implement targeted improvements', value: 2, score: 5 },
                { text: 'Remind staff about service excellence expectations', value: 3, score: 3 },
                { text: 'Increase your presence and supervision', value: 4, score: 3 }
            ]
        },
        {
            id: 22,
            category: 'personality',
            trait: 'resilience',
            text: 'I bounce back quickly from setbacks and use them as learning opportunities.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 23,
            category: 'situational',
            competency: 'financial_acumen',
            text: 'You have an opportunity to invest in new equipment that will increase efficiency but exceeds your budget. What do you do?',
            type: 'multiple_choice',
            options: [
                { text: 'Stay within budget and continue with current equipment', value: 1, score: 2 },
                { text: 'Prepare ROI analysis and business case to justify the investment', value: 2, score: 5 },
                { text: 'Request budget increase from senior management', value: 3, score: 3 },
                { text: 'Look for less expensive alternatives', value: 4, score: 4 }
            ]
        },
        {
            id: 24,
            category: 'leadership',
            competency: 'recognition',
            text: 'How do you recognize and reward exceptional performance?',
            type: 'multiple_choice',
            options: [
                { text: 'Verbal praise when I notice good work', value: 1, score: 3 },
                { text: 'Multi-faceted approach including public recognition, development opportunities, and rewards', value: 2, score: 5 },
                { text: 'Monthly employee of the month program', value: 3, score: 4 },
                { text: 'Include positive feedback in performance reviews', value: 4, score: 3 }
            ]
        },
        {
            id: 25,
            category: 'personality',
            trait: 'integrity',
            text: 'I maintain high ethical standards even when faced with pressure to compromise.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 26,
            category: 'operational',
            competency: 'guest_experience',
            text: 'What is your philosophy on creating memorable guest experiences?',
            type: 'multiple_choice',
            options: [
                { text: 'Deliver consistent, high-quality service according to standards', value: 1, score: 4 },
                { text: 'Empower team to personalize experiences and exceed expectations creatively', value: 2, score: 5 },
                { text: 'Respond to guest requests promptly and professionally', value: 3, score: 3 },
                { text: 'Offer premium upgrades and special amenities', value: 4, score: 4 }
            ]
        },
        {
            id: 27,
            category: 'situational',
            competency: 'policy_enforcement',
            text: 'A long-term employee violates a company policy. How do you address it?',
            type: 'multiple_choice',
            options: [
                { text: 'Give them a pass due to their tenure and good history', value: 1, score: 2 },
                { text: 'Apply policy consistently while showing respect for their contributions', value: 2, score: 5 },
                { text: 'Issue a stricter penalty to set an example', value: 3, score: 2 },
                { text: 'Discuss privately and give a warning', value: 4, score: 4 }
            ]
        },
        {
            id: 28,
            category: 'personality',
            trait: 'influence',
            text: 'I can effectively persuade and inspire others to support new initiatives.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 29,
            category: 'values',
            competency: 'brand_ambassadorship',
            text: 'How do you embody the "Celebration of Life" philosophy in your leadership?',
            type: 'multiple_choice',
            options: [
                { text: 'I ensure guests have positive experiences at the resort', value: 1, score: 3 },
                { text: 'I create a culture where team and guests feel joy, connection, and memorable moments', value: 2, score: 5 },
                { text: 'I support events and activities that enhance the guest experience', value: 3, score: 4 },
                { text: 'I maintain high energy and positive attitude', value: 4, score: 4 }
            ]
        },
        {
            id: 30,
            category: 'situational',
            competency: 'succession_planning',
            text: 'A key team member announces they are leaving. What is your priority?',
            type: 'multiple_choice',
            options: [
                { text: 'Begin recruiting for their replacement immediately', value: 1, score: 3 },
                { text: 'Identify internal candidates, facilitate knowledge transfer, and develop succession plan', value: 2, score: 5 },
                { text: 'Redistribute their responsibilities among current staff', value: 3, score: 2 },
                { text: 'Document their processes before they leave', value: 4, score: 4 }
            ]
        }
    ],

    'senior-management': [
        // Strategic Leadership & Vision
        {
            id: 1,
            category: 'strategic',
            competency: 'vision',
            text: 'How do you approach long-term strategic planning for a luxury hospitality brand?',
            type: 'multiple_choice',
            options: [
                { text: 'Analyze market trends and competitor positioning', value: 1, score: 4 },
                { text: 'Create compelling vision aligned with brand identity, market opportunities, and stakeholder value', value: 2, score: 5 },
                { text: 'Consult with board and senior leadership for direction', value: 3, score: 3 },
                { text: 'Focus on financial targets and growth metrics', value: 4, score: 3 }
            ]
        },
        {
            id: 2,
            category: 'personality',
            trait: 'strategic_vision',
            text: 'I naturally think 3-5 years ahead when making organizational decisions.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 3,
            category: 'strategic',
            competency: 'change_leadership',
            text: 'Your organization needs to undergo significant transformation. How do you lead this change?',
            type: 'multiple_choice',
            options: [
                { text: 'Announce changes and implement them decisively', value: 1, score: 2 },
                { text: 'Build compelling narrative, engage stakeholders, and guide transformation with clear milestones', value: 2, score: 5 },
                { text: 'Form committees to study and recommend changes', value: 3, score: 3 },
                { text: 'Hire external consultants to manage the transformation', value: 4, score: 3 }
            ]
        },
        {
            id: 4,
            category: 'situational',
            competency: 'crisis_leadership',
            text: 'A major reputational crisis threatens the brand. What is your immediate priority?',
            type: 'multiple_choice',
            options: [
                { text: 'Engage PR firm and legal counsel', value: 1, score: 3 },
                { text: 'Take ownership, communicate transparently, and demonstrate corrective action', value: 2, score: 5 },
                { text: 'Investigate root causes before public response', value: 3, score: 2 },
                { text: 'Hold press conference to address concerns', value: 4, score: 4 }
            ]
        },
        {
            id: 5,
            category: 'personality',
            trait: 'executive_presence',
            text: 'I am comfortable representing the organization in high-stakes situations with diverse stakeholders.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 6,
            category: 'strategic',
            competency: 'innovation',
            text: 'The luxury hospitality market is evolving. How do you position Nikki Beach for future success?',
            type: 'multiple_choice',
            options: [
                { text: 'Maintain core brand identity while monitoring trends', value: 1, score: 3 },
                { text: 'Drive innovation while preserving brand essence, anticipating guest expectations', value: 2, score: 5 },
                { text: 'Expand to new markets and demographics', value: 3, score: 3 },
                { text: 'Invest in technology and digital transformation', value: 4, score: 4 }
            ]
        },
        {
            id: 7,
            category: 'financial',
            competency: 'financial_strategy',
            text: 'How do you balance financial performance with brand experience investment?',
            type: 'multiple_choice',
            options: [
                { text: 'Prioritize profitability while maintaining acceptable standards', value: 1, score: 2 },
                { text: 'Strategically invest in experience knowing it drives long-term financial success', value: 2, score: 5 },
                { text: 'Use data to optimize spending in high-impact areas', value: 3, score: 4 },
                { text: 'Set minimum experience standards within budget constraints', value: 4, score: 3 }
            ]
        },
        {
            id: 8,
            category: 'personality',
            trait: 'decisiveness',
            text: 'I make difficult decisions confidently, even when they may be unpopular.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 9,
            category: 'leadership',
            competency: 'talent_development',
            text: 'What is your approach to developing future leaders within the organization?',
            type: 'multiple_choice',
            options: [
                { text: 'Identify high performers and provide additional training', value: 1, score: 3 },
                { text: 'Create comprehensive succession planning and mentorship culture with diverse opportunities', value: 2, score: 5 },
                { text: 'Send promising leaders to external development programs', value: 3, score: 3 },
                { text: 'Promote from within and provide on-the-job learning', value: 4, score: 4 }
            ]
        },
        {
            id: 10,
            category: 'strategic',
            competency: 'stakeholder_management',
            text: 'Different stakeholders have conflicting priorities. How do you navigate this?',
            type: 'multiple_choice',
            options: [
                { text: 'Prioritize based on authority and influence', value: 1, score: 2 },
                { text: 'Find strategic alignment that addresses core interests while advancing organizational goals', value: 2, score: 5 },
                { text: 'Address each stakeholder concern individually', value: 3, score: 3 },
                { text: 'Make decisions based on organizational best interest', value: 4, score: 4 }
            ]
        },
        {
            id: 11,
            category: 'personality',
            trait: 'emotional_intelligence',
            text: 'I effectively read organizational dynamics and adjust my approach accordingly.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 12,
            category: 'strategic',
            competency: 'market_expansion',
            text: 'Evaluating a new market for Nikki Beach expansion. What factors are most critical?',
            type: 'multiple_choice',
            options: [
                { text: 'Financial projections and ROI potential', value: 1, score: 4 },
                { text: 'Strategic fit with brand positioning, cultural alignment, and sustainable growth potential', value: 2, score: 5 },
                { text: 'Market size and competitive landscape', value: 3, score: 3 },
                { text: 'Availability of suitable real estate and partners', value: 4, score: 3 }
            ]
        },
        {
            id: 13,
            category: 'situational',
            competency: 'board_relations',
            text: 'The board questions your strategic direction. How do you respond?',
            type: 'multiple_choice',
            options: [
                { text: 'Defend your strategy with data and rationale', value: 1, score: 3 },
                { text: 'Listen to concerns, provide comprehensive context, and collaboratively refine approach', value: 2, score: 5 },
                { text: 'Request time to gather additional supporting evidence', value: 3, score: 3 },
                { text: 'Adjust strategy to align with board preferences', value: 4, score: 2 }
            ]
        },
        {
            id: 14,
            category: 'personality',
            trait: 'resilience',
            text: 'I maintain composure and clarity during periods of intense pressure and uncertainty.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 15,
            category: 'leadership',
            competency: 'culture_building',
            text: 'How do you shape and maintain organizational culture across multiple locations?',
            type: 'multiple_choice',
            options: [
                { text: 'Establish clear values and policies company-wide', value: 1, score: 3 },
                { text: 'Model values authentically, empower leaders, and create systems that reinforce culture', value: 2, score: 5 },
                { text: 'Conduct regular site visits and culture assessments', value: 3, score: 4 },
                { text: 'Hire culture ambassadors at each location', value: 4, score: 3 }
            ]
        },
        {
            id: 16,
            category: 'strategic',
            competency: 'partnerships',
            text: 'Approached with a potential strategic partnership. What is your evaluation process?',
            type: 'multiple_choice',
            options: [
                { text: 'Analyze financial terms and legal implications', value: 1, score: 3 },
                { text: 'Assess strategic alignment, brand fit, mutual value creation, and long-term implications', value: 2, score: 5 },
                { text: 'Research partner reputation and track record', value: 3, score: 3 },
                { text: 'Consult with leadership team and advisors', value: 4, score: 4 }
            ]
        },
        {
            id: 17,
            category: 'personality',
            trait: 'influence',
            text: 'I can effectively inspire and mobilize large organizations toward a common goal.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 18,
            category: 'financial',
            competency: 'investment_strategy',
            text: 'Limited capital available. How do you prioritize investments?',
            type: 'multiple_choice',
            options: [
                { text: 'Focus on projects with highest ROI', value: 1, score: 3 },
                { text: 'Balance strategic imperatives, guest impact, and financial returns holistically', value: 2, score: 5 },
                { text: 'Invest in maintaining current operations first', value: 3, score: 2 },
                { text: 'Allocate across departments proportionally', value: 4, score: 2 }
            ]
        },
        {
            id: 19,
            category: 'situational',
            competency: 'ethical_leadership',
            text: 'You discover a profitable practice that conflicts with your values. What do you do?',
            type: 'multiple_choice',
            options: [
                { text: 'Continue if legal while seeking alternatives', value: 1, score: 2 },
                { text: 'Immediately cease practice and find ethical alternative, even at cost', value: 2, score: 5 },
                { text: 'Consult ethics committee before deciding', value: 3, score: 3 },
                { text: 'Phase out practice gradually', value: 4, score: 3 }
            ]
        },
        {
            id: 20,
            category: 'personality',
            trait: 'global_mindset',
            text: 'I navigate diverse cultural contexts effectively and appreciate different perspectives.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 21,
            category: 'strategic',
            competency: 'digital_transformation',
            text: 'What role should technology play in the future of luxury hospitality?',
            type: 'multiple_choice',
            options: [
                { text: 'Essential for operations but minimized in guest experience', value: 1, score: 3 },
                { text: 'Seamlessly integrated to enhance personalization while preserving human connection', value: 2, score: 5 },
                { text: 'Used primarily for marketing and bookings', value: 3, score: 2 },
                { text: 'Implemented where it creates efficiency or innovation', value: 4, score: 4 }
            ]
        },
        {
            id: 22,
            category: 'leadership',
            competency: 'performance_accountability',
            text: 'A senior leader consistently underperforms despite support. How do you address this?',
            type: 'multiple_choice',
            options: [
                { text: 'Provide clear expectations and short timeline to improve', value: 1, score: 4 },
                { text: 'Have honest conversation about fit, explore alternatives, and make decisive action', value: 2, score: 5 },
                { text: 'Restructure their role to better match capabilities', value: 3, score: 3 },
                { text: 'Continue coaching while monitoring progress', value: 4, score: 2 }
            ]
        },
        {
            id: 23,
            category: 'personality',
            trait: 'authenticity',
            text: 'I lead with authenticity and remain true to my values regardless of external pressure.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 24,
            category: 'strategic',
            competency: 'sustainability',
            text: 'How do you balance luxury experience with environmental sustainability?',
            type: 'multiple_choice',
            options: [
                { text: 'Implement basic eco-friendly practices where feasible', value: 1, score: 3 },
                { text: 'Integrate sustainability as core brand value that enhances luxury positioning', value: 2, score: 5 },
                { text: 'Meet regulatory requirements and certifications', value: 3, score: 2 },
                { text: 'Offer sustainable options alongside traditional luxury', value: 4, score: 4 }
            ]
        },
        {
            id: 25,
            category: 'situational',
            competency: 'media_relations',
            text: 'Media requests interview about industry trends and competition. How do you approach this?',
            type: 'multiple_choice',
            options: [
                { text: 'Decline or defer to PR team', value: 1, score: 2 },
                { text: 'Share thought leadership that elevates brand while contributing value to conversation', value: 2, score: 5 },
                { text: 'Provide scripted corporate messaging', value: 3, score: 3 },
                { text: 'Share insights but avoid competitive comparisons', value: 4, score: 4 }
            ]
        },
        {
            id: 26,
            category: 'personality',
            trait: 'learning_orientation',
            text: 'I continuously seek new knowledge and perspectives to enhance my leadership.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        },
        {
            id: 27,
            category: 'leadership',
            competency: 'diversity_inclusion',
            text: 'What is your approach to building diverse and inclusive leadership teams?',
            type: 'multiple_choice',
            options: [
                { text: 'Focus on hiring the most qualified candidates regardless of background', value: 1, score: 3 },
                { text: 'Actively cultivate diversity recognizing it strengthens decision-making and innovation', value: 2, score: 5 },
                { text: 'Set diversity targets and recruitment goals', value: 3, score: 3 },
                { text: 'Ensure equal opportunity in promotion decisions', value: 4, score: 4 }
            ]
        },
        {
            id: 28,
            category: 'strategic',
            competency: 'brand_evolution',
            text: 'How do you ensure brand relevance across generations while maintaining core identity?',
            type: 'multiple_choice',
            options: [
                { text: 'Stay true to founding principles that made brand successful', value: 1, score: 3 },
                { text: 'Honor heritage while thoughtfully evolving to resonate with emerging guests', value: 2, score: 5 },
                { text: 'Create sub-brands targeting different demographics', value: 3, score: 3 },
                { text: 'Research generational preferences and adapt offerings', value: 4, score: 4 }
            ]
        },
        {
            id: 29,
            category: 'values',
            competency: 'celebration_of_life',
            text: 'As a senior leader, how do you embody and amplify the "Celebration of Life" philosophy?',
            type: 'multiple_choice',
            options: [
                { text: 'Ensure all properties deliver on brand promises', value: 1, score: 3 },
                { text: 'Infuse philosophy into strategy, culture, and operations creating transformative experiences', value: 2, score: 5 },
                { text: 'Support programming that brings philosophy to life', value: 3, score: 4 },
                { text: 'Communicate philosophy in internal and external messaging', value: 4, score: 4 }
            ]
        },
        {
            id: 30,
            category: 'personality',
            trait: 'legacy_thinking',
            text: 'I consider the lasting impact and legacy of my leadership decisions.',
            type: 'likert',
            options: [
                { text: 'Strongly Disagree', value: 1 },
                { text: 'Disagree', value: 2 },
                { text: 'Neutral', value: 3 },
                { text: 'Agree', value: 4 },
                { text: 'Strongly Agree', value: 5 }
            ]
        }
    ]
};

// Scoring interpretation data
const traitDescriptions = {
    extraversion: {
        low: 'Prefers focused, one-on-one interactions. May excel in behind-the-scenes roles requiring concentration.',
        medium: 'Balanced social engagement. Comfortable with both guest interaction and independent work.',
        high: 'Thrives on social interaction and energized by engaging with guests. Natural fit for front-facing roles.'
    },
    conscientiousness: {
        low: 'Flexible and spontaneous. May need structured systems for consistency.',
        medium: 'Reliably meets standards with some need for organizational support.',
        high: 'Highly detail-oriented and dependable. Consistently maintains exceptional standards.'
    },
    agreeableness: {
        low: 'Direct and assertive. May excel in roles requiring firm decision-making.',
        medium: 'Balances cooperation with healthy advocacy. Good team collaborator.',
        high: 'Exceptionally collaborative and harmonious. Natural team player focused on positive relationships.'
    },
    emotional_stability: {
        low: 'May be reactive to stress. Benefits from structured environment and support.',
        medium: 'Generally handles pressure well with occasional stress response.',
        high: 'Remarkably calm under pressure. Thrives in high-stress, fast-paced environments.'
    },
    openness: {
        low: 'Values tradition and proven methods. Excellent for maintaining consistency.',
        medium: 'Open to new ideas while respecting established practices.',
        high: 'Highly creative and adaptable. Embraces change and innovation enthusiastically.'
    }
};

const competencyDescriptions = {
    'line-staff': {
        customer_service: 'Ability to create positive guest experiences through attentive, personalized service',
        teamwork: 'Collaborates effectively with colleagues to ensure seamless operations',
        problem_solving: 'Handles unexpected situations creatively and efficiently',
        communication: 'Communicates clearly and effectively with guests and team members',
        adaptability: 'Adjusts smoothly to changing priorities and new assignments',
        initiative: 'Proactively identifies and addresses needs without prompting',
        attention_to_detail: 'Maintains high standards and notices important details',
        service_excellence: 'Committed to creating memorable, exceptional guest experiences',
        stress_management: 'Remains effective and composed during busy periods',
        professionalism: 'Maintains professional boundaries and comportment',
        multitasking: 'Manages multiple responsibilities simultaneously',
        cultural_fit: 'Aligns with Nikki Beach values and lifestyle approach',
        guest_relations: 'Builds rapport and lasting relationships with guests'
    },
    'managerial': {
        team_leadership: 'Effectively leads, motivates, and develops team members',
        delegation: 'Strategically assigns work based on strengths and development needs',
        coaching: 'Develops talent through mentorship and growth opportunities',
        conflict_management: 'Resolves interpersonal issues constructively',
        quality_control: 'Maintains and elevates service standards consistently',
        resource_management: 'Optimizes resources for maximum efficiency and impact',
        performance_management: 'Provides effective feedback and manages accountability',
        crisis_management: 'Handles difficult situations with composure and resolution',
        innovation: 'Encourages and implements process improvements',
        recruitment: 'Identifies and attracts talent aligned with organizational needs',
        training: 'Develops comprehensive training and standard operating procedures',
        cross_functional: 'Collaborates effectively across departments',
        data_analysis: 'Uses metrics and feedback to drive improvements',
        financial_acumen: 'Makes sound business decisions considering ROI',
        guest_experience: 'Creates systems and culture that deliver memorable experiences',
        policy_enforcement: 'Applies policies fairly and consistently',
        brand_ambassadorship: 'Embodies and promotes brand values authentically'
    },
    'senior-management': {
        vision: 'Creates compelling long-term strategy aligned with brand identity',
        change_leadership: 'Successfully guides organization through transformation',
        crisis_leadership: 'Leads effectively during reputational or operational crises',
        innovation: 'Drives organizational innovation while preserving brand essence',
        financial_strategy: 'Balances investment with financial performance strategically',
        talent_development: 'Builds leadership pipeline and succession planning',
        stakeholder_management: 'Navigates complex stakeholder dynamics effectively',
        market_expansion: 'Evaluates and executes growth opportunities strategically',
        board_relations: 'Manages board relationships with transparency and collaboration',
        culture_building: 'Shapes organizational culture across multiple locations',
        partnerships: 'Evaluates and structures strategic partnerships',
        investment_strategy: 'Prioritizes capital allocation for strategic impact',
        ethical_leadership: 'Maintains integrity even when costly',
        digital_transformation: 'Integrates technology to enhance guest experience',
        performance_accountability: 'Addresses leadership performance decisively',
        sustainability: 'Integrates environmental responsibility with luxury positioning',
        media_relations: 'Represents organization as thought leader effectively',
        diversity_inclusion: 'Builds diverse teams recognizing value of different perspectives',
        brand_evolution: 'Evolves brand while maintaining core identity',
        celebration_of_life: 'Embodies brand philosophy in all leadership dimensions'
    }
};
