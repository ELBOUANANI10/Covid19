import { Question } from "./question.js";

const demarer = document.getElementById('demarer');
const suivant = document.getElementById('suivant');
const precedent = document.getElementById('precedent');
const question_instance = new Question()

function create_question(id) {
  // Getting question object
  const question_object = question_instance.get_question_by_id(id);

  // Creating header for the question
  let question_header = document.createElement('p');
  question_header.classList.add('prg-question');
  question_header.setAttribute('id', id)
  question_header.innerText = question_object.question;

  // Preparing a form for the question
  let question_form = document.createElement('div');
  question_form.classList.add('les-inputs');

  // If the question type was choices "radio" ...
  if (question_object.type == "radio") {
    // Creating a form field
    let form_field = document.createElement('div');
    form_field.classList.add('inpt');

    // For every possible answer ...
    for(let answer of question_object.answers) {
      // Creating a form input for the answer
      let form_input = document.createElement('input');
      Object.assign(form_input, {
        type: 'radio',
        name: 'radio_input',
        id: answer,
        value: answer,
      })

      // Creating a form label for the answer
      let form_label = document.createElement('label')
      form_label.setAttribute('for', answer)
      form_label.innerText = answer

      // Append the last two parts into the field
      form_field.append(form_input, form_label)
    }

    // Append the field in the question form
    question_form.appendChild(form_field)
  }

  // If the question type was numerical "number" ...
  if (question_object.type == "number") {
    // Modifing the class of the question form
    question_form.setAttribute('class', 'answer-inputs');

    // Creating the form input
    let form_input = document.createElement('input');
    Object.assign(form_input, {
      type: 'number',
      name: 'number_input',
      id: 'NumberInput',
      min: '0',
      placeholder: question_object.label //hna fin kin l mochkil maki taba9ch hadchi 
    })

    // Creating the form label
    let form_label = document.createElement('span')
    form_label.classList.add('input-span')
    form_label.innerText = question_object.label

    // Appending the last two parts into the question form
    question_form.append(form_input, form_label)
  }

  // Returning the parts of the question block
  return [question_header, question_form];
}

// 
demarer.addEventListener('click', (event) =>{
  event.preventDefault()

  let question_container = document.querySelector('.question-affiche');
  let section = document.querySelectorAll('.section');

  section[0].classList.add('hide');
  section[1].classList.remove('hide');
  precedent.classList.add('hide');
  
  let question_parts = create_question(1)
  question_container.innerHTML = "";
  question_parts.forEach( part => question_container.appendChild(part) )
});

function quitter() {
  let section = document.querySelectorAll('.section');
  section[1].classList.add('hide');
  section[2].classList.remove('hide');
}

function recommancer() {
  let section = document.querySelectorAll('.section');
  section[0].classList.remove('hide');
  section[1].classList.add('hide');
}

suivant.addEventListener('click', (event) =>{
  event.preventDefault()

  let question_container = document.querySelector('.question-affiche');
  let question_header = document.querySelector('.prg-question');
  let question_id = parseInt(question_header.getAttribute('id'))

  // let current_question = question_instance.get_question_by_id(question_id)
  // update_score(current_question)

  if (question_id == question_instance.get_questions_length()){
    quitter();
  } else {
    let question_parts = create_question(question_id + 1)
    
    question_container.innerHTML = "";
    question_parts.forEach( part => question_container.appendChild(part) )
  }
  
  precedent.classList.remove('hide');
});

precedent.addEventListener('click', (event) =>{
  event.preventDefault()

  let question_container = document.querySelector('.question-affiche');
  let question_header = document.querySelector('.prg-question');
  let question_id = parseInt(question_header.getAttribute('id'))
  
  if (question_id-1 == 0){ recommancer(); } 
  else {
    let question_parts = create_question(question_id-1)
    
    question_container.innerHTML = "";
    question_parts.forEach( part => question_container.appendChild(part) )
  }
  
  precedent.classList.remove('hide');
});

// new work---------------------------->


const resMsg = document.querySelectorAll('#affichageResult');
const question_object = question_instance.get_question_by_id(id);



function Results() {

	var radios = question_object('[type="radio"]');
	var nbr = question_object('[type="number"]');
	var checked = [];
	var val = [];

	for (let i = 0; i < radios.length; i++) {

		if (radios[i].checked) {

			checked.push(radios[i].answers)
		}
	}


	for (let i = 0; i < nbr.length; i++) {

		val.push(nbr[i].answers)

	}


	if (((checked[0] === 'Oui' || checked[1] === 'Oui') && (checked[3] === 'Oui' || checked[1] === 'Oui') && (checked[2] === 'Oui' || checked[0] === 'Oui') && checked[4] === 'Oui') && (checked[9] === 'Non' && checked[10] === 'Non' && checked[11] === 'Non' && checked[12] === 'Non' && checked[13] === 'Non' && checked[14] === 'Non' && (checked[15] === 'Non' || checked[15] === 'Homme') && checked[16] === 'Non' && checked[17] === 'Non' && val[1] < 50)) {

		resMsg[0].innerText = 'Nous vous conseillons de rester à votre domicile et de contacter votre médecin' +
			' en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouv'
	}




	if (((checked[0] === 'Oui' || checked[1] === 'Oui') && (checked[3] === 'Oui' || checked[1] === 'Oui') && (checked[2] === 'Oui' || checked[0] === 'Oui') && checked[4] === 'Oui') && ((checked[9] === 'Non' && checked[10] === 'Non' && checked[11] === 'Non' && checked[12] === 'Non' && checked[13] === 'Non' && checked[14] === 'Non' && (checked[15] === 'Non' || checked[15] === 'Homme') && checked[16] === 'Non' && checked[17] === 'Non' && val[1] > 50) || ((val[0] >= 39) || (checked[5] === 'Oui') || (checked[8] === ' Fatigué(e)') || (checked[8] === 'Très fatigué')))) {

		resMsg[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
			"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p"
	}



	if (((checked[0] === 'Oui' || checked[1] === 'Oui') && (checked[3] === 'Oui' || checked[1] === 'Oui') && (checked[2] === 'Oui' || checked[0] === 'Oui') && checked[4] === 'Oui') && ((checked[9] === 'Oui' || checked[10] === 'Oui' || checked[11] === 'Oui' || checked[12] === 'Oui' || checked[13] === 'Oui' || checked[14] === 'Oui' || checked[15] === 'Oui' || checked[16] === 'Oui' || checked[17] === 'Oui') && (checked[5] === 'Non' && checked[6] === 'Non' && checked[12] === 'Non' && checked[8] === 'Assez bien' || checked[8] === 'Bien'))) {

		resMsg[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
			"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p"
	}



	if (((checked[0] === 'Oui' || checked[1] === 'Oui') && (checked[3] === 'Oui' || checked[1] === 'Oui') && (checked[2] === 'Oui' || checked[0] === 'Oui') && checked[4] === 'Oui') && (checked[9] === 'Oui' || checked[10] === 'Oui' || checked[11] === 'Oui' || checked[12] === 'Oui' || checked[13] === 'Oui' || checked[14] === 'Oui' || checked[15] === 'Oui' || checked[16] === 'Oui' || checked[17] === 'Oui') && (val[0] >= 39 || checked[5] === 'Oui' || checked[8] === 'Très fatigué' || checked[8] === 'Fatigué(e)')) {

		resMsg[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
			"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p"
	}




	if (((checked[0] === 'Oui' && checked[1] === 'Oui') && (checked[2] === 'Oui' && checked[3] === 'Oui') && (checked[3] === 'Oui' && checked[4] === 'Oui') && (checked[5] === 'Oui' && checked[6] === 'Oui')  && ((val[0] >= 39 && checked[5] === 'Oui') || (val[0] >= 39 && checked[8] === 'Fatigué(e)') || (val[0] >= 39 && checked[8] === 'Très fatigué') || (checked[5] === 'Oui' && checked[8] === 'Fatigué(e)') || (checked[5] === 'Oui' && checked[8] === 'Très fatigué'))))
	{

		resMsg[0].innerText = "Appelez le 141"
	}

	if (((checked[0] === 'Oui' || checked[1] === 'Oui'||checked[2] === 'Oui' || checked[3] === 'Oui'|| checked[4] === 'Oui'||checked[5] === 'Oui' || checked[6] === 'Oui')  && (val[0] <= 39) && ((val[0] <= 39 && checked[8] === 'Fatigué(e)') || (val[0] <= 39 && checked[8] === 'Très fatigué') )))
	{

		
		resMsg[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
			"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p"

	}

	if (((checked[0] === 'Oui' && checked[1] === 'Oui') && (checked[9] === 'Non' && checked[10] === 'Non' && checked[11] === 'Non' && checked[12] === 'Non' && checked[13] === 'Non' && checked[14] === 'Non' && (checked[15] === 'Non' || checked[15] === 'Homme') && checked[16] === 'Non' && checked[17] === 'Non')) && (checked[5] === 'Non' && checked[6] === 'Non' && checked[12] === 'Non' && checked[8] === 'Assez bien' || checked[8] === 'Bien') || ((val[0] >= 39 || checked['Q7'] === 'Oui' || checked['Q10'] === 'Très fatigué' || checked['Q10'] === 'Fatigué(e)') && val['Q2'] <= 35, 4 && checked['Q17'] === 'Non' && checked['Q8'] === 'Non')) {

		resMsg[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
			"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p"
	}


	if ((checked[0] === 'Oui' && checked[1] === 'Oui') && (checked[9] === 'Oui' || checked[10] === 'Oui' || checked[11] === 'Oui' || checked[12] === 'Oui' || checked[13] === 'Oui' || checked[14] === 'Oui' || checked[15] === 'Oui' || checked[16] === 'Oui' || checked[17] === 'Oui') && checked[5] === 'Non' && checked[6] === 'Non' && checked[12] === 'Non' && checked[8] === 'Assez bien' || checked[8] === 'Bien') {

		resMsg[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
			"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p"
	}


	if ((checked[0] === 'Oui' && checked[1] === 'Oui') && (checked[9] === 'Oui' || checked[10] === 'Oui' || checked[11] === 'Oui' || checked[12] === 'Oui' || checked[13] === 'Oui' || checked[14] === 'Oui' || checked[15] === 'Oui' || checked[16] === 'Oui' || checked[17] === 'Oui') && (val[0] >= 39 || checked[5] === 'Oui' || checked[8] === 'Très fatigué' || checked[8] === 'Fatigué(e)')) {

		resMsg[0].innerText = "Vous pouvez faire une téléconsultation ou médecin généraliste ou visite à domi" +
			"cile. Appelez le 141 si une gêne respiratoire ou des difficultés importantes p"
	}



	if (((checked[0] === 'Oui' && checked[1] === 'Oui') && (checked[9] === 'Oui' || checked[10] === 'Oui' || checked[11] === 'Oui' || checked[12] === 'Oui' || checked[13] === 'Oui' || checked[14] === 'Oui' || checked[15] === 'Oui' || checked[16] === 'Oui' || checked[17] === 'Oui')) && ((val[0] >= 39 && checked[5] === 'Oui') || (val[0] >= 39 && checked[8] === 'Fatigué(e)') || (val[0] >= 39 && checked[8] === 'Très fatigué') || (checked[5] === 'Oui' && checked[8] === 'Fatigué(e)') || (checked[5] === 'Oui' && checked[8] === 'Très fatigué'))) {

		resMsg[0].innerText = "Appelez le 141"
	}
	else
	{
		resMsg[0].innerText = 'Votre situation ne relève probablement pas du Covid-19.' +
		'N’hésitez pas à contacter votre médecin en cas de doute.' + 'Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation.' + 'Pour toute information concernant le Covid-19 allez vers la page d’accueil.'

	}


	if ((checked[0] === 'Oui' || checked[1] === 'Oui' || checked[3] === 'Oui' || checked[2] === 'Oui') && (checked[5] === 'Non' && checked[6] === 'Non' && checked[12] === 'Non' && checked[8] === 'Assez bien' || checked[8] === 'Bien')) {

		resMsg[0].innerText = 'Votre situation ne relève probablement pas du Covid-19.' +
			'Consultez votre médecin au moindre doute.'
	}
}