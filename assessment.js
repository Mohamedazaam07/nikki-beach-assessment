// Assessment Application State
let currentState = {
    candidateInfo: {},
    positionLevel: '',
    currentQuestionIndex: 0,
    answers: [],
    startTime: null,
    endTime: null
};

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// Start Assessment
function startAssessment() {
    showScreen('candidateInfoScreen');
}

// Handle Candidate Form Submission
document.getElementById('candidateForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect candidate information
    currentState.candidateInfo = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        position: document.getElementById('position').value,
        location: document.getElementById('location').value,
        experience: document.getElementById('experience').value
    };
    
    currentState.positionLevel = currentState.candidateInfo.position;
    currentState.startTime = new Date();
    
    // Start the assessment
    showScreen('assessmentScreen');
    loadQuestion(0);
});

// Load Question
function loadQuestion(index) {
    const questions = assessmentQuestions[currentState.positionLevel];
    
    if (index >= questions.length) {
        finishAssessment();
        return;
    }
    
    currentState.currentQuestionIndex = index;
    const question = questions[index];
    
    // Update progress
    const progress = ((index + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = index + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    
    // Display question
    document.getElementById('questionText').textContent = question.text;
    
    // Display options based on question type
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    if (question.type === 'likert') {
        optionsContainer.className = 'options-container likert-scale';
        question.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'likert-option';
            optionDiv.innerHTML = `
                <input type="radio" name="answer" id="option${i}" value="${option.value}" onchange="enableNextButton()">
                <label for="option${i}">${option.text}</label>
            `;
            optionsContainer.appendChild(optionDiv);
        });
    } else {
        optionsContainer.className = 'options-container';
        question.options.forEach((option, i) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option.text;
            button.onclick = () => selectOption(button, option.value);
            optionsContainer.appendChild(button);
        });
    }
    
    // Update navigation buttons
    document.getElementById('prevBtn').style.display = index > 0 ? 'inline-flex' : 'none';
    document.getElementById('nextBtn').disabled = true;
}

// Select Option (for multiple choice)
function selectOption(button, value) {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    
    // Store temporary answer
    currentState.tempAnswer = value;
    enableNextButton();
}

// Enable Next Button
function enableNextButton() {
    const nextBtn = document.getElementById('nextBtn');
    
    // Check if an answer is selected
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
    const selectedButton = document.querySelector('.option-btn.selected');
    
    if (selectedRadio || selectedButton) {
        nextBtn.disabled = false;
        if (selectedRadio) {
            currentState.tempAnswer = parseInt(selectedRadio.value);
        }
    }
}

// Next Question
function nextQuestion() {
    const questions = assessmentQuestions[currentState.positionLevel];
    const currentQuestion = questions[currentState.currentQuestionIndex];
    
    // Save answer
    currentState.answers.push({
        questionId: currentQuestion.id,
        category: currentQuestion.category,
        trait: currentQuestion.trait || currentQuestion.competency,
        value: currentState.tempAnswer,
        score: currentQuestion.options.find(opt => opt.value === currentState.tempAnswer)?.score || currentState.tempAnswer
    });
    
    // Load next question
    loadQuestion(currentState.currentQuestionIndex + 1);
}

// Previous Question
function previousQuestion() {
    if (currentState.currentQuestionIndex > 0) {
        // Remove last answer
        currentState.answers.pop();
        loadQuestion(currentState.currentQuestionIndex - 1);
    }
}

// Finish Assessment
function finishAssessment() {
    currentState.endTime = new Date();
    const results = calculateResults();
    displayResults(results);
    showScreen('resultsScreen');
}

// Calculate Results
function calculateResults() {
    const answers = currentState.answers;
    const positionLevel = currentState.positionLevel;
    
    // Initialize scores
    const personalityScores = {};
    const competencyScores = {};
    
    // Calculate personality traits (Big 5)
    const personalityTraits = ['extraversion', 'conscientiousness', 'agreeableness', 'emotional_stability', 'openness'];
    
    answers.forEach(answer => {
        if (answer.category === 'personality') {
            if (!personalityScores[answer.trait]) {
                personalityScores[answer.trait] = { total: 0, count: 0 };
            }
            personalityScores[answer.trait].total += answer.value;
            personalityScores[answer.trait].count += 1;
        } else {
            // Competencies
            if (!competencyScores[answer.trait]) {
                competencyScores[answer.trait] = { total: 0, count: 0 };
            }
            competencyScores[answer.trait].total += answer.score;
            competencyScores[answer.trait].count += 1;
        }
    });
    
    // Calculate averages
    const personality = {};
    Object.keys(personalityScores).forEach(trait => {
        const avg = personalityScores[trait].total / personalityScores[trait].count;
        personality[trait] = {
            score: avg,
            percentage: (avg / 5) * 100,
            level: avg < 2.5 ? 'low' : avg < 3.75 ? 'medium' : 'high'
        };
    });
    
    const competencies = {};
    Object.keys(competencyScores).forEach(comp => {
        const avg = competencyScores[comp].total / competencyScores[comp].count;
        competencies[comp] = {
            score: avg,
            percentage: (avg / 5) * 100,
            rating: Math.round(avg)
        };
    });
    
    // Calculate overall scores
    const overallPersonality = Object.values(personality).reduce((sum, p) => sum + p.score, 0) / Object.keys(personality).length;
    const overallCompetency = Object.values(competencies).reduce((sum, c) => sum + c.score, 0) / Object.keys(competencies).length;
    const overallScore = ((overallPersonality + overallCompetency) / 2 / 5) * 100;
    
    // Generate recommendations
    const recommendations = generateRecommendations(personality, competencies, positionLevel);
    
    return {
        personality,
        competencies,
        overallScore,
        overallPersonality: (overallPersonality / 5) * 100,
        overallCompetency: (overallCompetency / 5) * 100,
        recommendations,
        completionTime: (currentState.endTime - currentState.startTime) / 1000 / 60 // minutes
    };
}

// Generate Recommendations
function generateRecommendations(personality, competencies, positionLevel) {
    const recommendations = [];
    
    // Strengths
    const topPersonalityTraits = Object.entries(personality)
        .sort((a, b) => b[1].score - a[1].score)
        .slice(0, 2)
        .map(([trait]) => trait);
    
    const topCompetencies = Object.entries(competencies)
        .sort((a, b) => b[1].score - a[1].score)
        .slice(0, 3)
        .map(([comp]) => comp);
    
    recommendations.push({
        type: 'strengths',
        title: 'Key Strengths',
        items: [
            Strong ${topPersonalityTraits.join(' and ')} personality traits,
            ...topCompetencies.map(comp => Excels in ${comp.replace(/_/g, ' ')})
        ]
    });
    
    // Development Areas
    const bottomCompetencies = Object.entries(competencies)
        .sort((a, b) => a[1].score - b[1].score)
        .slice(0, 2)
        .map(([comp]) => comp);
    
    if (bottomCompetencies.length > 0) {
        recommendations.push({
            type: 'development',
            title: 'Development Opportunities',
            items: bottomCompetencies.map(comp => Consider developing ${comp.replace(/_/g, ' ')} skills)
        });
    }
    
    // Role Fit
    const roleFitScore = (personality.extraversion?.score || 3) * 
                         (competencies.customer_service?.score || competencies.team_leadership?.score || 3);
    
    let roleMatch = '';
    if (positionLevel === 'line-staff') {
        roleMatch = roleFitScore > 15 ? 'Excellent fit for guest-facing roles' : 
                    roleFitScore > 10 ? 'Good fit with proper training and support' : 
                    'May be better suited for operational support roles';
    } else if (positionLevel === 'managerial') {
        roleMatch = roleFitScore > 15 ? 'Strong leadership potential' : 
                    roleFitScore > 10 ? 'Capable manager with development needs' : 
                    'May benefit from additional leadership training';
    } else {
        roleMatch = roleFitScore > 15 ? 'Executive leadership caliber' : 
                    roleFitScore > 10 ? 'Senior management potential with mentorship' : 
                    'Strategic contributor in specialized capacity';
    }
    
    recommendations.push({
        type: 'role_fit',
        title: 'Role Alignment',
        items: [roleMatch]
    });
    
    // Brand Fit
    const culturalFit = competencies.cultural_fit?.score || competencies.brand_ambassadorship?.score || competencies.celebration_of_life?.score || 3;
    
    let brandFit = '';
    if (culturalFit >= 4) {
        brandFit = 'Strongly aligned with Nikki Beach "Celebration of Life" philosophy';
    } else if (culturalFit >= 3) {
        brandFit = 'Good cultural alignment with room to deepen brand connection';
    } else {
        brandFit = 'Would benefit from immersion in Nikki Beach brand culture';
    }
    
    recommendations.push({
        type: 'brand_fit',
        title: 'Brand Cultural Fit',
        items: [brandFit]
    });
    
    return recommendations;
}

// Display Results
function displayResults(results) {
    const resultsContent = document.getElementById('resultsContent');
    let html = '';
    
    // Overall Score Card
    html += `
        <div class="result-section">
            <h3>Overall Assessment Score</h3>
            <div class="trait-item">
                <div class="trait-header">
                    <span class="trait-name">Overall Compatibility</span>
                    <span class="trait-score">${results.overallScore.toFixed(1)}%</span>
                </div>
                <div class="trait-bar">
                    <div class="trait-fill" style="width: ${results.overallScore}%"></div>
                </div>
                <p class="trait-description">
                    Completed in ${results.completionTime.toFixed(1)} minutes. 
                    ${results.overallScore >= 75 ? 'Excellent candidate profile.' : 
                      results.overallScore >= 60 ? 'Good candidate with development potential.' : 
                      'Candidate shows promise in specific areas.'}
                </p>
            </div>
        </div>
    `;
    
    // Personality Traits
    html += `
        <div class="result-section">
            <h3>Personality Profile</h3>
    `;
    
    Object.entries(results.personality).forEach(([trait, data]) => {
        const traitName = trait.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const description = traitDescriptions[trait]?.[data.level] || '';
        
        html += `
            <div class="trait-item">
                <div class="trait-header">
                    <span class="trait-name">${traitName}</span>
                    <span class="trait-score">${data.score.toFixed(1)}/5.0</span>
                </div>
                <div class="trait-bar">
                    <div class="trait-fill" style="width: ${data.percentage}%"></div>
                </div>
                <p class="trait-description">${description}</p>
            </div>
        `;
    });
    
    html += '</div>';
    
    // Competencies
    html += `
        <div class="result-section">
            <h3>Core Competencies</h3>
            <div class="competency-grid">
    `;
    
    const competencyDescs = competencyDescriptions[currentState.positionLevel] || {};
    
    Object.entries(results.competencies).forEach(([comp, data]) => {
        const compName = comp.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const description = competencyDescs[comp] || '';
        
        html += `
            <div class="competency-card">
                <h4>${compName}</h4>
                <div class="competency-rating">
                    ${[1, 2, 3, 4, 5].map(i => 
                        <span class="rating-dot ${i <= data.rating ? 'filled' : ''}"></span>
                    ).join('')}
                </div>
                <p>${description}</p>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    // Recommendations
    results.recommendations.forEach(rec => {
        html += `
            <div class="result-section">
                <h3>${rec.title}</h3>
                <ul class="recommendation-list">
                    ${rec.items.map(item => <li>${item}</li>).join('')}
                </ul>
            </div>
        `;
    });
    
    resultsContent.innerHTML = html;
    
    // Store results for submission
    currentState.results = results;
}

// Submit Results using EmailJS
function submitResults(event) {
    const submitBtn = event.target;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    const emailData = prepareEmailData();

    // Convert JSON attachment to Base64
    const attachmentBase64 = btoa(unescape(encodeURIComponent(emailData.attachments.content)));

    const templateParams = {
        to_email: 'mohamed.azaam@nikkibeachhotels.com', // updated HR email
        cc_email: currentState.candidateInfo.email,
        subject: emailData.subject,
        message: emailData.body,
        candidate_name: currentState.candidateInfo.fullName,
        attachment: attachmentBase64,
        attachment_filename: emailData.attachments.filename
    };

    emailjs.send(
        'service_7oybl97',
        'template_58nw56v',
        templateParams,
        'SmXoTrzBg_DMnKgDY'
    ).then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        showScreen('thankYouScreen');
    }, (error) => {
        console.error('Email sending failed:', error);
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit to HR';
        alert('Failed to send email. Please try again.');
    });
}

// Prepare Email Data
function prepareEmailData() {
    const results = currentState.results;
    const candidate = currentState.candidateInfo;
    
    // Create comprehensive report
    const report = {
        candidate: {
            name: candidate.fullName,
            email: candidate.email,
            phone: candidate.phone,
            position: candidate.position,
            preferredLocation: candidate.location,
            experience: candidate.experience + ' years'
        },
        assessment: {
            completedAt: currentState.endTime.toISOString(),
            duration: results.completionTime.toFixed(1) + ' minutes',
            overallScore: results.overallScore.toFixed(1) + '%'
        },
        personality: Object.entries(results.personality).map(([trait, data]) => ({
            trait: trait.replace(/_/g, ' '),
            score: data.score.toFixed(2),
            level: data.level
        })),
        competencies: Object.entries(results.competencies).map(([comp, data]) => ({
            competency: comp.replace(/_/g, ' '),
            score: data.score.toFixed(2),
            rating: data.rating
        })),
        recommendations: results.recommendations,
        answers: currentState.answers.map(a => ({
            questionId: a.questionId,
            category: a.category,
            value: a.value,
            score: a.score
        }))
    };
    
    return {
        to: 'mohamed.azaam@nikkibeachhotels.com', // HR email
        cc: candidate.email,
        subject: Psychometric Assessment Results - ${candidate.fullName} (${candidate.position}),
        body: generateEmailBody(report),
        attachments: {
            filename: ${candidate.fullName.replace(/\s+/g, '_')}_Assessment.json,
            content: JSON.stringify(report, null, 2)
        }
    };
}

// Generate Email Body
function generateEmailBody(report) {
    return `
Dear Nikki Beach HR Team,

A new psychometric assessment has been completed.

CANDIDATE INFORMATION
━━━━━━━━━━━━━━━━━━━━
Name: ${report.candidate.name}
Email: ${report.candidate.email}
Phone: ${report.candidate.phone}
Position Level: ${report.candidate.position.replace(/-/g, ' ').toUpperCase()}
Preferred Location: ${report.candidate.preferredLocation || 'Not specified'}
Experience: ${report.candidate.experience}

ASSESSMENT OVERVIEW
━━━━━━━━━━━━━━━━━━━━
Completed: ${new Date(report.assessment.completed