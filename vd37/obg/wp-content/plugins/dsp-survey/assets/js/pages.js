var pageGender=`
<div class="well semi-trans">
    <div class="row">
        <div class="col-md-10 offset-md-1 p-0" style="background: #fff;">
            <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você!</h3>
            <div class="container my-4">
                <div class="outer-progress">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 15%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="15"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-center text-aqua my-4 p-2" id="tituloPagInicial"></h2>
            <div class="container p-3 mb-5">
                <div class="row">
                    <div class="col-6 col-md-4 offset-md-2 mx-auto" id="mostrarMulher">
                        <a onclick="selectGender('female')" style="cursor:pointer">
                            <img id="WOMAN" class="img-fluid" src="https://docs.google.com/uc?id=1yx-tzJRQF-CSRypb6QG3OuzbLv4sgrL2" alt="Woman">
                        </a>
                    </div>
                    <div class="col-6 col-md-4 mx-auto" id="mostrarHomem">
                        <a onclick="selectGender('male')" style="cursor: pointer;">
                            <img id="original-man" class="img-fluid" src="https://docs.google.com/uc?id=1jnHavb0N2TVTN_fKvxbvpImBFwzKatWL" alt="Man" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;var pageMaleAge=`<div class="well semi-trans">
<div class="row">
    <div class="col-md-10 offset-md-1 p-0" style="background: #fff;">
        <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
        <div class="container my-4">
            <div class="outer-progress">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30"></div>
                </div>
            </div>
        </div>
        <h2 class="text-center text-aqua my-4 p-2">Qual a sua faixa de idade?</h2>
        <div class="container p-3 mb-5">
            <div class="row">
                <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                    <a href="#" onclick="selectAge('teens')"><img id="original-age1" src="https://docs.google.com/uc?id=1eRkEWItmGMvyuiDRTMG0JDWH8cG6Ye-o" class="img-fluid" alt="Teen Male" test-id="teensButtonMale" /></a>
                </div>
                <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                    <a href="#" onclick="selectAge('20s')"><img id="original-age2" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/original-age2.png" class="img-fluid" alt="20s Male" test-id="20sButtonMale" /></a>
                </div>
            </div>
            <div class="row survey_hidden">
                <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                    <a href="#" onclick="selectAge('30s')"><img id="original-age3" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/original-age3.png" class="img-fluid" alt="30s Male" test-id="30sButtonMale" /></a>
                </div>
                <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                    <a href="#" onclick="selectAge('40s')"><img id="original-age4" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/original-age4.png" class="img-fluid" alt="40sMale" test-id="40sButtonMale" /></a>
                </div>
            </div>
            <div class="row survey_hidden">
                <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                    <a href="#" onclick="selectAge('50s')"><img id="original-age5" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/original-age5.png" class="img-fluid" alt="50s Male" test-id="50sButtonMale" /></a>
                </div>
                <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                    <a href="#" onclick="selectAge('60s')"><img id="original-age6" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/original-age6.png" class="img-fluid" alt="60s Male" test-id="60sButtonMale" /></a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;var pageFemaleAge=`
<div class="well semi-trans">
    <div class="row">
        <div class="col-md-10 offset-md-1 p-0" style="background: #fff;">
            <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
            <div class="container my-4">
                <div class="outer-progress">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-center text-aqua my-4 p-2">Qual a sua faixa de idade?</h2>
            <div class="container p-3 mb-5">
                <div class="row">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" onclick="selectAge('teens')"><img id="womanAGE1" src="https://docs.google.com/uc?id=1nkMyGCMQ7yAwRP1IF5z0ftPYZxsxYM2R" class="img-fluid" alt="Teens Female" test-id="teensButtonFemale" /></a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" onclick="selectAge('20s')"><img id="womanAGE2"src="https://docs.google.com/uc?id=1XT86eZYFKnSvnfoKjYR_TGsff-AqXhdT" class="img-fluid" alt="20s Female" test-id="20sButtonFemale" /></a>
                    </div>
                </div>
                <div class="row survey_hidden">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" onclick="selectAge('30s')"><img id="womanAGE3" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/womanAGE3.png" class="img-fluid" alt="30s Female" test-id="30sButtonFemale" /></a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" onclick="selectAge('40s')"><img id="womanAGE4" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/womanAGE4.png" class="img-fluid" alt="40s Female" test-id="40sButtonFemale" /></a>
                    </div>
                </div>
                <div class="row survey_hidden">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" onclick="selectAge('50s')"><img id="womanAGE5" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/womanAGE5.png" class="img-fluid" alt="50s Female" test-id="50sButtonFemale" /></a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" onclick="selectAge('60s')"><img id="womanAGE6" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/womanAGE6.png" class="img-fluid" alt="60s Female" test-id="60sButtonFemale" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;var pageHeight=`
<div class="well semi-trans">
    <div class="row">
        <div class="col-md-10 offset-md-1 p-0 pb-5" style="background: #fff;">
            <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
            <div class="container my-4">
                <div class="outer-progress">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"></div>
                    </div>
                </div>
            </div>
            <div class="imperial" style="display: none;">
                <h2 class="p-3 text-aqua">Sua altura: <span id="inchesVal" test-id="imperialHeightLabel">0' 0"</span></h2>
            </div>
            <div class="metric">
                <h2 class="p-3 text-aqua">Sua altura: <span id="centimetersVal" test-id="metricHeightLabel">90</span>cm</h2>
            </div>
            <div class="form-check form-check-inline" style="display: none;">
                <label class="form-check-label">
                    <input onclick="imperialRadioClicked()" class="form-check-input" type="radio" name="units" id="unitsImperial" test-id="imperialRadioButton" value="imperial" /> Imperial
                </label>
            </div>
            <div class="form-check form-check-inline" style="display: none;">
                <label class="form-check-label">
                    <input onclick="metricRadioClicked()" class="form-check-input" type="radio" name="units" id="unitsMetric" test-id="metricRadioButton" value="metric" checked="checked" /> Métrico
                </label>
            </div>
            <div class="imperial">
                <div class="form-group mt-3" style="display: none;">
                    <label for="inches" class="mr-3">Polegadas</label>
                    <input
                        id="inches"
                        test-id="inchesSlider"
                        name="inches"
                        data-slider-id="inches"
                        type="number"
                        data-slider-min="0"
                        data-slider-max="96"
                        data-slider-step="1"
                        data-slider-value="0"
                        value="0"
                        data-slider-tooltip="hide"
                    />
                </div>
            </div>
            <div class="metric">
                <div class="form-group mt-3">
                    <label for="centimeters" class="mr-4">Centímetros</label>
                    <!--input id="centimeters" onchange="alturaInCM()" name="centimeters" type="text" min="90" max="220"value="90" /-->
                    <input id="centimeters" test-id="centimetersSlider" name="centimeters" data-slider-id='centimeters' type="text" data-slider-min="90" data-slider-max="220" data-slider-step="1" data-slider-value="90" value="90" data-slider-tooltip="hide"
                </div>
            </div>
            <a href="#" test-id="heightContinueButton" class="btn btn-primary btn-lg genderButton" onclick="return selectHeight()">Continuar</a>
        </div>
    </div>
</div>
`;var pageWeight=`
<div class="well semi-trans">
  <div class="row">
      <div class="col-md-10 offset-md-1 p-0 pb-5" style="background: #fff;">
          <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
          <div class="container my-4">
              <div class="outer-progress">
                  <div class="progress">
                      <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 55%;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="55"></div>
                  </div>
              </div>
          </div>
          <h2 class="text-center text-aqua my-4 p-2">Quanto você pesa?</h2>
          <div class="imperial" style="display: none;">
              <h2 class="p-3"><span id="poundsVal" test-id="imperialWeightLabel">0</span> lbs</h2>
              <div class="form-group">
                  <label for="weight" class="mr-3">Libras</label>
                  <input
                      name="weight"
                      id="weight"
                      test-id="imperialWeightSlider"
                      data-slider-id="weight"
                      type="text"
                      data-slider-min="0"
                      data-slider-max="400"
                      data-slider-step="5"
                      data-slider-value="0"
                      data-slider-tooltip="hide"
                      value="0"
                  />
              </div>
              <a href="#" class="btn btn-primary btn-lg genderButton" onclick="return selectWeight()">Continuar</a>
          </div>
          <div class="metric">
              <h2 class="p-3"><span id="kilogramsVal" test-id="metricWeightLabel">50</span>kg</h2>
              <div class="form-group">
                  <label for="kilograms" class="mr-3">Quilogramas</label>
                  <!--input
                      name="kilograms"
                      id="kilograms"
                      test-id="metricWeightSlider"
                      data-slider-id="kilograms"
                      type="number"
                      min="50"
                      max="200"
                      step="0.5"
                      value="50"
                      onchange="pesoInKG()"
                  /-->
                  <input name="kilograms" id="kilograms" test-id="metricWeightSlider" data-slider-id='kilograms' type="text" data-slider-min="50" data-slider-max="200" data-slider-step="1" data-slider-value="60" data-slider-tooltip="hide" value="60" />
              </div>
              <a href="#" test-id="weightContinueButton" class="btn btn-primary btn-lg genderButton" onclick="return selectWeight()">Continuar</a>
          </div>
      </div>
  </div>
</div>
`;var pageMaleActivity=`
<div class="well semi-trans">
    <div class="row">
        <div class="col-md-10 offset-md-1 p-0 pb-5" style="background: #fff;">
            <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
            <div class="container my-4">
                <div class="outer-progress">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="70"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-center text-aqua my-4 p-2">O quanto você é ativo?</h2>
            <div class="container p-3 mb-5">
                <div class="row">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="activityLightMale" onclick="selectActivity('light')">
                            <img id="original-active1" src="https://docs.google.com/uc?id=1xZARMQbMsSjbETsQruFRxtwRDdmq9ozK" alt="Lightly Active" class="img-fluid" />
                        </a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="activityModerateMale" onclick="selectActivity('moderate')">
                            <img id="original-active2" src="https://docs.google.com/uc?id=1EkQZY616B1Galtq5GX0ujrc3lMFK2P--" alt="Moderately Active" class="img-fluid" />
                        </a>
                    </div>
                </div>
                <div class="row survey_hidden">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="activityVeryMale" onclick="selectActivity('very')">
                            <img id="original-active3" src="https://docs.google.com/uc?id=1fkhtTORIRzPfLJqM1WPAg0K6kaYpF9YL" alt="Very Active" class="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;var pageFemaleActivity=`
<div class="well semi-trans">
    <div class="row">
        <div class="col-md-10 offset-md-1 p-0 pb-5" style="background: #fff;">
            <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
            <div class="container my-4">
                <div class="outer-progress">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="70"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-center text-aqua my-4 p-2">O quanto você é ativo?</h2>
            <div class="container p-3 mb-5">
                <div class="row">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="activityLightFemale" onclick="selectActivity('light')">
                            <img id="womanACTIVE1" src="https://docs.google.com/uc?id=1PvYNxo7sh9ZnuoGh_0oO_qUY2KbCkrVc" alt="Lightly Active" class="img-fluid" />
                        </a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="activityModerateFemale" onclick="selectActivity('moderate')">
                            <img id="womanACTIVE2" src="https://docs.google.com/uc?id=1QKj-XmbgqDK8DC_JhE2S_xAd7rc0-TAI" alt="Moderately Active" class="img-fluid" />
                        </a>
                    </div>
                </div>
                <div class="row survey_hidden">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="activityVeryFemale" onclick="selectActivity('very')">
                            <img id="womanACTIVE3" src="https://docs.google.com/uc?id=1lAgw7kPLJWCgt7HswLmlIzV2Bt8vtpYf" alt="Very Active" class="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;var pageMaleCondition=`

<div class="well semi-trans">
    <div class="row">
        <div class="col-md-10 offset-md-1 p-0 pb-5" style="background: #fff;">
            <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
            <div class="container my-4">
                <div class="outer-progress">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="85"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-center text-aqua my-4 p-2">O que melhor te descreve?</h2>
            <div class="container p-3 mb-5">
                <div class="row">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="maleHardGainer" onclick="selectCondition('maleHardGainer')">
                            <img id="original-statement1" src="https://docs.google.com/uc?id=1d7d9rX9yMfqe__4mMBSg35LtOtDBVO35" alt="I can't get bigger or gain muscle no matter how much I eat" class="img-fluid" />
                        </a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="maleSkinnyFat" onclick="selectCondition('maleSkinnyFat')">
                            <img id="original-statement2" src="https://docs.google.com/uc?id=1OXlACGCvtJXt7T4m-2Jy1ZXW3tbem1JO" alt="I'm Skinny Fat I look slim in clothes but I do have body fat" class="img-fluid" />
                        </a>
                    </div>
                </div>
                <div class="row survey_hidden">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="maleGetRipped" onclick="selectCondition('maleGetRipped')">
                            <img id="original-statement3" src="https://docs.google.com/uc?id=1GCJGtiwae-ijwy4_B1eGpRzpdAI6-kQ6" alt="I'm happy with my body but I need to lose one last layer of fat" class="img-fluid" />
                        </a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="maleFatLoss" onclick="selectCondition('maleFatLoss')">
                            <img id="original-statement4" src="https://docs.google.com/uc?id=1W-Fossyr9bNcdqJU8HWZfOGRWAybOHgc" alt="I'm not happy with my body and want to lose a serious amount of weight" class="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;var pageFemaleCondition=`
<div class="well semi-trans">
    <div class="row">
        <div class="col-md-10 offset-md-1 p-0 pb-5" style="background: #fff;">
            <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
            <div class="container my-4">
                <div class="outer-progress">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="85"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-center text-aqua my-4 p-2">O que melhor te descreve?</h2>
            <div class="container p-3 mb-5">
                <div class="row">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="femaleGetToned" onclick="selectCondition('femaleGetToned')">
                            <img id="womanSTATEMENT1" src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/womanSTATEMENT1.png" alt="I'm Soft I need to lose 5 to 10lbs and tone up my stomach, butt, and amrs" class="img-fluid" />
                        </a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="femaleFatLoss" onclick="selectCondition('femaleFatLoss')">
                            <img id="womanSTATEMENT2"
                                src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/womanSTATEMENT2.png"
                                alt="I have 20lbs or more of fat I really need to lose while building sexy muscle tone"
                                class="img-fluid"
                            />
                        </a>
                    </div>
                </div>
                <div class="row survey_hidden">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="femaleSkinnyFat" onclick="selectCondition('femaleSkinnyFat')">
                            <img id="womanSTATEMENT3"
                                src="https://d12hfwo7xdmxn8.cloudfront.net/salespages/survey/img/womanSTATEMENT3.png"
                                alt="I'm skinny I need to add some toned muscle while burning that stubborn fat in certain areas and I would look amazing"
                                class="img-fluid"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;var pageConditionFemaleMetric=`

<div class="well semi-trans">
    <div class="row">
        <div class="col-md-10 offset-md-1 p-0 pb-5" style="background: #fff;">
            <h3 class="p-4 surveyHeader">Descubra EXATAMENTE qual dieta e treinamento são melhores para você</h3>
            <div class="container my-4">
                <div class="outer-progress">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="85"></div>
                    </div>
                </div>
            </div>
            <h2 class="text-center text-aqua my-4 p-2">O que melhor te descreve?</h2>
            <div class="container p-3 mb-5">
                <div class="row">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="femaleGetTonedMetric" onclick="selectCondition('femaleGetToned')">
                            <img id="womanSTATEMENT1-metric"
                                src="https://docs.google.com/uc?id=1eo1omjXKiQwj2lX-71YbEzOWexJMIspk"
                                alt="I'm Soft I need to lose 5 to 10lbs and tone up my stomach, butt, and amrs"
                                class="img-fluid"
                            />
                        </a>
                    </div>
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="femaleFatLossMetric" onclick="selectCondition('femaleFatLoss')">
                            <img id="womanSTATEMENT2-metric"
                                src="https://docs.google.com/uc?id=1IrHHEmroqq18LD3ziT_ijdYJCgYV5a4G"
                                alt="I have 20lbs or more of fat I really need to lose while building sexy muscle tone"
                                class="img-fluid"
                            />
                        </a>
                    </div>
                </div>
                <div class="row  survey_hidden">
                    <div class="col-6 col-md-4 offset-md-1 mx-auto mb-4">
                        <a href="#" test-id="femaleSkinnyFatMetric" onclick="selectCondition('femaleSkinnyFat')">
                            <img id="womanSTATEMENT3"
                                src="https://docs.google.com/uc?id=1nPJvt16EMx_wxKGu-SdHcxkKSUNFxhYg"
                                alt="I'm skinny I need to add some toned muscle while burning that stubborn fat in certain areas and I would look amazing"
                                class="img-fluid"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;document.getElementById('pageGender').innerHTML=pageGender;document.getElementById('page1').innerHTML=pageMaleAge;document.getElementById('page1Female').innerHTML=pageFemaleAge;document.getElementById('pageHeight').innerHTML=pageHeight;document.getElementById('pageWeight').innerHTML=pageWeight;document.getElementById('pageActivity').innerHTML=pageMaleActivity;document.getElementById('pageActivityFemale').innerHTML=pageFemaleActivity;document.getElementById('pageCondition').innerHTML=pageMaleCondition;document.getElementById('pageConditionFemale').innerHTML=pageFemaleCondition;document.getElementById('pageConditionFemaleMetric').innerHTML=pageConditionFemaleMetric;