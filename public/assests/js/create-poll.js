function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.querySelector('.open-btn');

    if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0';
        openBtn.style.display = 'none';
    } else {
        sidebar.style.right = '-250px';
        openBtn.style.display = 'block';
    }
}

function createPositionForms() {
    const positionForms = document.getElementById('positionForms');
    const positionNumber = document.getElementById('positionNumber').value;
    positionForms.innerHTML = '';

    for (let i = 1; i <= positionNumber; i++) {
        const positionDiv = document.createElement('div');
        positionDiv.classList.add('position-form');

        positionDiv.innerHTML = `
            <h3>Position ${i}</h3>
            <label for="positionName${i}">Position Name:</label>
            <input type="text" id="positionName${i}" placeholder="Enter position ${i} name" oninput="validateField(this)">
            <span class="checkmark" id="checkmark${i}" style="display:none; color:green;">✓</span>
            
            <label for="candidateNumber${i}">How many candidates for Position ${i}?</label>
            <input type="number" id="candidateNumber${i}" placeholder="Enter number of candidates" onchange="updateCandidateForms()" oninput="validateField(this)">
            <span class="checkmark" id="candidateCheckmark${i}" style="display:none; color:green;">✓</span>
        `;
        positionForms.appendChild(positionDiv);
    }
}

function updateCandidateForms() {
    const candidateForms = document.getElementById('candidateForms');
    const positionNumber = document.getElementById('positionNumber').value;

    candidateForms.innerHTML = ''; // Clear existing candidate forms

    for (let i = 1; i <= positionNumber; i++) {
        const candidateCount = document.getElementById(`candidateNumber${i}`).value;
        const positionName = document.getElementById(`positionName${i}`).value || `Position ${i}`;

        for (let j = 1; j <= candidateCount; j++) {
            const candidateDiv = document.createElement('div');
            candidateDiv.classList.add('candidate-form');

            candidateDiv.innerHTML = `
                <h4>${positionName} - Candidate ${j}</h4>
                <label for="candidateName${i}_${j}">Name:</label>
                <input type="text" id="candidateName${i}_${j}" placeholder="Enter candidate ${j} name" oninput="validateField(this)">
                <span class="checkmark" id="candidateNameCheckmark${i}_${j}" style="display:none; color:green;">✓</span>
                
                <label for="candidateInfo${i}_${j}">Info:</label>
                <input type="text" id="candidateInfo${i}_${j}" placeholder="Enter candidate ${j} info" oninput="validateField(this)">
                <span class="checkmark" id="candidateInfoCheckmark${i}_${j}" style="display:none; color:green;">✓</span>
                
                <label for="candidatePhoto${i}_${j}">Upload Candidate ${j} Photo:</label>
                <input type="file" id="candidatePhoto${i}_${j}" accept="image/*">
            `;

            candidateForms.appendChild(candidateDiv);
        }
    }
}

function validateField(input) {
    const checkmark = input.nextElementSibling;
    if (input.value.trim() !== '') {
        checkmark.style.display = 'inline';
    } else {
        checkmark.style.display = 'none';
    }
}

function createPoll() {
    // Check if the form is filled correctly
    const positionNumber = document.getElementById('positionNumber').value;
    if (positionNumber === '') {
        alert('Please enter the number of positions.');
        return;
    }

    // You can add more validation checks here

    // Display success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Poll has been created successfully!';
    successMessage.style.color = 'green';
    successMessage.style.fontSize = '18px';
    successMessage.style.marginTop = '20px';

    const formContainer = document.querySelector('.form-container');
    formContainer.appendChild(successMessage);

    // Optionally, reset the form fields after submission
    document.getElementById('positionNumber').value = '';
    document.getElementById('positionForms').innerHTML = '';
    document.getElementById('candidateForms').innerHTML = '';
}

// Attach the createPoll function to the Create Poll button
document.getElementById('createPoll').addEventListener('click', createPoll);