function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("dsp-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Página não encontrada.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("dsp-include-html");
                includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

(function(scope) {
    // Default order urls
    /**
     * Exemplo de URL: meusitedestino.com/pagina-test ou /pagina-teste
     */
    var VS_FORM_URLS_DEFAULT = {
        maleHardGainer:     'aHR0cHM6Ly9idW1idW1kb3Nzb25ob3MubmV0LmJyL2JiZHMtaC1jZC1zLw==', // Ganho masculino pesado
        maleSkinnyFat:      'aHR0cHM6Ly9idW1idW1kb3Nzb25ob3MubmV0LmJyL2JiZHMtaC1jZC1zLw==', // Gordura magra masculina
        maleGetRipped:      'aHR0cHM6Ly9idW1idW1kb3Nzb25ob3MubmV0LmJyL2JiZHMtaC1jZC1zLw==', // NaN
        maleFatLoss:        'aHR0cHM6Ly9idW1idW1kb3Nzb25ob3MubmV0LmJyL2JiZHMtaC1jZC1zLw==', // Perder gordura masculina
        femaleFatLoss:      'aHR0cHM6Ly9idW1idW1kb3Nzb25ob3MubmV0LmJyL2JiZHMtaC1jZC1zLw==', // Perder gordura feminina
        femaleSkinnyFat:    'aHR0cHM6Ly9idW1idW1kb3Nzb25ob3MubmV0LmJyL2JiZHMtaC1jZC1zLw==', // Gordura magra feminina
        femaleGetToned:     'aHR0cHM6Ly9idW1idW1kb3Nzb25ob3MubmV0LmJyL2JiZHMtaC1jZC1zLw=='  // Ganhar tonificação feminina
    };

    // Use preset urls, use default if not found
    var VS_FORM_URLS = window.VS_FORM_URLS || VS_FORM_URLS_DEFAULT;

    // Simple and lightweight helper functions to replace jQuery calls
    var elements = [];
    var hideElementById = function(id) {
        var element = document.getElementById(id);
        if (element === null) return console.warn('Element ' + id + ' does not exist');
        if (element.style.display === 'none') return;
        elements[id] = element.style.display;
        element.style.display = 'none';
    }

    var showElementById = function(id) {
        var element = document.getElementById(id);
        if (element === null) return console.warn('Element ' + id + ' does not exist');
        if (element.style.display === 'none') {
            element.style.display = elements[id] || '';
            delete elements[id];
        }
    }

    var getEl = function(id) {
        return document.getElementById(id);
    }

    var forAllElementsWithClass = function(className, callback) {
        if (!className || !callback) console.warn('Missing parameters');
        var elements = document.querySelectorAll('.' + className);
        for (var i = 0; i < elements.length; ++i) {
            callback(elements[i]);
        }
    }

    var getParameterByName = function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Exported methods used by survey inputs
    scope.selectGender = function(gender) {
        document.forms['surveyForm']['gender'].value = gender;
        hideElementById('pageGender');
        hideElementById('as-seen-in');

        document.body.className = document.body.className.replace('survey-aka1--show-lander-bg', '');

        if (gender == 'male') {
            showElementById('page1');
        } else {
            showElementById('page1Female');
        }

        window.scrollTo(0, 0);
    }

    scope.selectAge = function(age) {
        var surveyForm = document.forms['surveyForm'];
        if (age == 'teens') {
            surveyForm['age'].value = '18';
        } else if (age == '20s') {
            surveyForm['age'].value = '25';
        } else if (age == '30s') {
            surveyForm['age'].value = '35';
        } else if (age == '40s') {
            surveyForm['age'].value = '45';
        } else if (age == '50s') {
            surveyForm['age'].value = '55';
        } else if (age == '60s') {
            surveyForm['age'].value = '65';
        } else {
            surveyForm['age'].value = 'test';
        }

        if (surveyForm['gender'].value == 'female') {
            hideElementById('page1Female');
            // Change the survey buttons and header to pink if female
            var genderButtons = document.querySelectorAll('.genderButton');
            for (var i = 0; i < genderButtons.length; ++i) {
                genderButtons[i].style.backgroundColor = '#d6498c';
            }
            var genderButtons = document.querySelectorAll('.surveyHeader');
            for (var i = 0; i < genderButtons.length; ++i) {
                genderButtons[i].style.backgroundColor = '#d6498c';
            }
        } else {
            hideElementById('page1');
        }

        showElementById('pageHeight');
        window.scrollTo(0, 0);
    }

    scope.metricRadioClicked = function() {
        // Show the metric template
        forAllElementsWithClass('metric', function(element) {
            element.style.display = 'block';
        });
        // Hide the imperial template
        forAllElementsWithClass('imperial', function(element) {
            element.style.display = 'none';
        });
    }

    scope.imperialRadioClicked = function() {
        // Hide the metric template
        forAllElementsWithClass('metric', function(element) {
            element.style.display = 'none';
        });
        // Show the imperial template
        forAllElementsWithClass('imperial', function(element) {
            element.style.display = 'block';
        });
    }

    scope.selectHeight = function() {
        if (document.querySelector('input[name=inches]').value == '0' && document.querySelector('input[type=radio][name=units]:checked').value == 'imperial') {
            alert('You must select your height!');
            return false;
        }

        if (document.querySelector('input[name=centimeters]').value == '90' && document.querySelector('input[type=radio][name=units]:checked').value == 'metric') {
            alert('You must select your height!');
            return false;
        }

        hideElementById('pageHeight');
        showElementById('pageWeight');
        window.scrollTo(0, 0);
    }

    scope.selectWeight = function() {
        if (document.querySelector('input[name=weight]').value == '0' && document.querySelector('input[type=radio][name=units]:checked').value == 'imperial') {
            alert('You must select your weight!');
            return false;
        }

        if (document.querySelector('input[name=kilograms]').value == '0' && document.querySelector('input[type=radio][name=units]:checked').value == 'metric') {
            alert('You must select your weight!');
            return false;
        }

        hideElementById('pageWeight');

        if (document.forms['surveyForm']['gender'].value == 'female') {
            showElementById('pageActivityFemale');
        } else {
            showElementById('pageActivity');
        }

        window.scrollTo(0, 0);

    }

    scope.selectActivity = function(activity) {
        document.forms['surveyForm']['activity'].value = activity;
        if (document.forms['surveyForm']['gender'].value == 'female') {
            hideElementById('pageActivityFemale');

            // If metric, show metric condition page
            if (document.querySelector('input[type=radio][name=units]:checked').value == 'metric') {
                showElementById('pageConditionFemaleMetric');
            } else {
                // Show imperial units condition page otherwise
                showElementById('pageConditionFemale');
            }
        } else {
            hideElementById('pageActivity');
            showElementById('pageCondition');
        }
        window.scrollTo(0, 0);
    }

    scope.selectCondition = function(condition) {
        document.forms['surveyForm']['condition'].value = condition;

        if (condition == 'maleHardGainer') {
            // 7
            document.forms['surveyForm']['segment'].value = 3;
            document.forms['surveyForm']['macro_goal'].value = 'build-muscle';
            //document.forms['surveyForm'].action = VS_FORM_URLS.maleHardGainer;
            document.forms['surveyForm'].action = atob(VS_FORM_URLS.maleHardGainer);
        } else if (condition == 'maleSkinnyFat') {
            // 8
            document.forms['surveyForm']['segment'].value = 1;
            document.forms['surveyForm']['macro_goal'].value = 'maintenance';
            //document.forms['surveyForm'].action = VS_FORM_URLS.maleSkinnyFat;
            document.forms['surveyForm'].action = atob(VS_FORM_URLS.maleSkinnyFat);
        } else if (condition == 'maleGetRipped') {
            // 6
            document.forms['surveyForm']['segment'].value = 2;
            document.forms['surveyForm']['macro_goal'].value = 'maintenance';
            //document.forms['surveyForm'].action = VS_FORM_URLS.maleGetRipped;
            document.forms['surveyForm'].action = atob(VS_FORM_URLS.maleGetRipped);
        } else if (condition == 'maleFatLoss') {
            // 5
            document.forms['surveyForm']['segment'].value = 4;
            document.forms['surveyForm']['macro_goal'].value = 'fat-loss';
            //document.forms['surveyForm'].action = VS_FORM_URLS.maleFatLoss;
            document.forms['surveyForm'].action = atob(VS_FORM_URLS.maleFatLoss);
        } else if (condition == 'femaleFatLoss') {
            // 2
            document.forms['surveyForm']['segment'].value = 5;
            document.forms['surveyForm']['macro_goal'].value = 'fat-loss';
            //document.forms['surveyForm'].action = VS_FORM_URLS.femaleFatLoss;
            document.forms['surveyForm'].action = atob(VS_FORM_URLS.femaleFatLoss);
        } else if (condition == 'femaleSkinnyFat') {
            // 4
            document.forms['surveyForm']['segment'].value = 7;
            document.forms['surveyForm']['macro_goal'].value = 'maintenance';
            //document.forms['surveyForm'].action = VS_FORM_URLS.femaleSkinnyFat;
            document.forms['surveyForm'].action = atob(VS_FORM_URLS.femaleSkinnyFat);
        } else if (condition == 'femaleGetToned') {
            // 3
            document.forms['surveyForm']['segment'].value = 6;
            document.forms['surveyForm']['macro_goal'].value = 'maintenance';
            //document.forms['surveyForm'].action = VS_FORM_URLS.femaleGetToned;
            document.forms['surveyForm'].action = atob(VS_FORM_URLS.femaleGetToned);
        }

        document.getElementById('surveyForm').submit();
    }

    scope.selectPlateau = function(plateau) {
        hideElementById('pagePlateau');
        showElementById('pageDiet');
        window.scrollTo(0, 0);
    }

    scope.selectDiet = function(diet) {
        hideElementById('pageDiet');
        if (document.forms['surveyForm']['gender'].value == 'female') {
            showElementById('pageConditionFemale');
        } else {
            showElementById('pageCondition');
        }
        window.scrollTo(0, 0);
    }
})(window);

function alturaInCM(){
    var altura = document.getElementById('centimeters');
    if ( typeof altura.value === null ) {
        document.getElementById('centimetersVal').innerHTML = "90";
    } else {
        document.getElementById('centimetersVal').innerHTML = altura.value;
    }
}

function pesoInKG(){
    var peso = document.getElementById('kilograms');
    if ( typeof peso.value === null ) {
        document.getElementById('kilogramsVal').innerHTML = "50";
    } else {
        document.getElementById('kilogramsVal').innerHTML = peso.value;
    }
}