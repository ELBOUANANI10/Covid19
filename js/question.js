export class Question {
    constructor() {
        this.questions_fr = [
            {
                question: "Quetion 1: Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
                type: "radio",
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "fièvre présente" } }
                ]
            },
            {
                question: " Quetion 2: Quelle est votre température corporelle ?",
                type: "number",
                label: "degés",
                conditions: [
                    { min: 37.8, max: 38.9, result: { value: 1, message: "seuil retenu" } },
                    { max: 39, min: 35.4, result: { value: 1, message: "Facteur de gravité" } }
                ]
            },
            {
                question: "Quetion 3: Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
                type: "radio",
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
            },
            {
                question: "Quetion 4: Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
                type: "radio",
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
            },
            {
                question: "Quetion 5: Ces derniers jours, avez-vous un mal de gorge ?",
                type: "radio",
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
            },
            {
                question: "Quetion 6: Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles mol les.",
                type: 'radio',
                answers: ['Oui', 'Non'],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
        
            }, {
                question: 'Quetion 7: Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "Facteur de gravité" } }
                ]
        
            },
            {
                question: 'Quetion 8: Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',
                type: 'radio',
                answers: ["oui", "non"],
                onditions: [
                    { label: "oui", result: { value: 1, message: "Facteur de gravité" } }
                ]
            },
            {
                question: 'Quetion 9: Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
                type: 'radio',
                answers: ["oui", "non"],
                onditions: [
                    { label: "oui", result: { value: 1, message: "Facteur de gravité" } }
                ]
        
            },
            {
                question: 'Quetion 10: Actuellement, comment vous vous sentez ?',
                type: 'radio',
                answers: ['Bien', 'Assez bien', 'Fatigué(e)', 'Très fatigué'],
                conditions: [
                    { label: "Fatigué(e)", result: { value: 1, message: "Facteur de gravité" } },
                    { label: "Très fatigué", result: { value: 1, message: "Facteur de gravité" } }
                ]
        
            },
            {
                question: 'Quetion 11: Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',
                type: 'number',
                label: 'ans',
                conditions: [
                    { max: 70, result: { value: 1, message: "" } },
                    { min: 15, result: { value: -1, message: "Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15" } }
                ]
            },
            {
                question: 'Quetion 12: Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',
                type: 'number',
                label: 'kg',
            },
            {
                question: 'Quetion 13: Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',
                type: 'number',
                label: 'cm'
        
            },
            {
                question: 'Quetion 14: Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
        
            },
            {
                question: 'Quetion 15: Êtes-vous diabétique ?',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
        
            },
            {
                question: 'Quetion 16: Avez-vous ou avez-vous eu un cancer ?',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
            },
            {
                question: 'Quetion 17: Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
        
            }, 
            {
                question: 'Quetion 18: Avez-vous une insuffisance rénale chronique dialysée ?',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
            }, 
            {
                question: 'Quetion 19: Avez-vous une maladie chronique du foie ?',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
            }, 
            {
                question: 'Quetion 20: Êtes-vous enceinte ?',
                type: 'radio',
                answers: ["oui", "non", "homme"]
            }, 
            {
                question: 'Quetion 21: Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
                
            }, 
            {
                question: 'Quetion 22: Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples: corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste nonexhaustive).',
                type: 'radio',
                answers: ["oui", "non"],
                conditions: [
                    { label: "oui", result: { value: 1, message: "" } }
                ]
            }
        ];
    }

    get_questions_length() { 
        return this.questions_fr.length 
    }

    get_question_by_id(id) { return this.questions_fr[id-1] }
}


const adviceFR = {
    num1 : "nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.",
    num2 : "téléconsultation ou médecin généraliste ou visite à domicile.",
    num3 : "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.",
    num4 : "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.",
    num5 : "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.",
    disclamer: "La recommandation affichée peut évoluer suivant les informations en provenance des autorités de santé et des chercheurs. Elle ne constitue pas un avis médical. En cas de doute, demandez conseil à votre médecin ou pharmacien."
}