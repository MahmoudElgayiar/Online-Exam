//Global Variable
var IQ_Exam = [
    {
        QuestionType: 1,
        QuestionText: "What is 1/2 of 1/4 of 1/5 of 200",
        Answers: [5, 25, 10, 50],
        CorrectAnswer: 1
    },
    {
        QuestionType: 1,
        QuestionText: "If you are in a race and you pass the person in second place what place are you in",
        Answers: ["1st", "2nd", "3rd", "4th"],
        CorrectAnswer: 2
    },
    {
        QuestionType: 1,
        QuestionText: "What was the tallest mountain before Mt. Everest was discovered ",
        Answers: ["Mt. Fugi", "Kilimanjaro", "Mt. Everest", "Gurla Mandhata"],
        CorrectAnswer: 3
    },
    {
        QuestionType: 2,
        QuestionText: "Select Animals only",
        Answers: ["Cat", "Dog", "Man", "Woman"],
        CorrectAnswer: [1, 2]
    },
    {
        QuestionType: 1,
        QuestionText: "5 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "Correct", "c3", "c4"],
        CorrectAnswer: 2
    },
    {
        QuestionType: 1,
        QuestionText: "6 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["Correct", "c2", "c3", "c4"],
        CorrectAnswer: 1
    },
    {
        QuestionType: 1,
        QuestionText: "7 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "c2", "Correct", "c4"],
        CorrectAnswer: 3
    },
    {
        QuestionType: 1,
        QuestionText: "8 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "Correct", "c3", "c4"],
        CorrectAnswer: 2
    },
    {
        QuestionType: 1,
        QuestionText: "9 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "c2", "c3", "Correct"],
        CorrectAnswer: 4
    },
    {
        QuestionType: 1,
        QuestionText: "10 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "Correct", "c3", "c4"],
        CorrectAnswer: 2
    },
    {
        QuestionType: 1,
        QuestionText: "11 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "c2", "Correct", "c4"],
        CorrectAnswer: 3
    }
];
var EN_Exam = [
    {
        QuestionType: 1,
        QuestionText: "1 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "Correct", "c3", "c4"],
        CorrectAnswer: 2
    },
    {
        QuestionType: 1,
        QuestionText: "2 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["Correct", "c2", "c3", "c4"],
        CorrectAnswer: 1
    },
    {
        QuestionType: 1,
        QuestionText: "3 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "c2", "c3", "Correct"],
        CorrectAnswer: 4
    },
    {
        QuestionType: 1,
        QuestionText: "4 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "c2", "Correct", "c4"],
        CorrectAnswer: 3
    },
    {
        QuestionType: 1,
        QuestionText: "5 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "Correct", "c3", "c4"],
        CorrectAnswer: 2
    },
    {
        QuestionType: 1,
        QuestionText: "6 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "Correct", "c3", "c4"],
        CorrectAnswer: 2
    },
    {
        QuestionType: 1,
        QuestionText: "7 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["Correct", "c2", "c3", "c4"],
        CorrectAnswer: 1
    },
    {
        QuestionType: 1,
        QuestionText: "8 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "c2", "Correct", "c4"],
        CorrectAnswer: 3
    },
    {
        QuestionType: 1,
        QuestionText: "9 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["c1", "c2", "c3", "Correct"],
        CorrectAnswer: 4
    },
    {
        QuestionType: 1,
        QuestionText: "10 -- asdasd sadasd asdasdsad sa das dasda ",
        Answers: ["Correct", "c2", "c3", "c4"],
        CorrectAnswer: 1
    }
];
var RandomQuestions = [];
var QuestionIndex = 0,
    countDown,
    examStarted,
    ExamTimeInSeconds = 900,
    CorrectQuestions = 0,
    WrongQuestions = 0,
    allAnswers = [],
    Object_Of_Selected_answers = [],
    examfinalresult = "";

//Exam Timer
function Timer() {
    "use strict";
    var minutes = Math.floor((ExamTimeInSeconds / 60)),
        remSeconds = ExamTimeInSeconds % 60;
    if (ExamTimeInSeconds < 10) {
        remSeconds = "0" + remSeconds;
    }
    if (ExamTimeInSeconds > 0) {
        ExamTimeInSeconds--;
    } else {
        clearInterval(countDown);
        $('#Examtimer-value').html('Time Finished');
    }
    $('#Examtimer-value').html(minutes + ":" + remSeconds);
    if ($('#Examtimer-value').text() == '0:00') {
        // alert('Time is Over');
        clearInterval(countDown);
        FinishExam();
    }
};

//Create Exam And Finish button
function CreateExam(Array_Of_Objects) {
    var numbers = [];
    var randomIQ = [];
    for (var i = 0; i < Array_Of_Objects.length; i++) {
        randomindex = Math.floor(Math.random() * Array_Of_Objects.length);
        var check = numbers.includes(randomindex);

        if (check === false) {
            numbers.push(randomindex);
            randomIQ.push(Array_Of_Objects[randomindex]);
        } else {
            while (check === true) {
                randomindex = Math.floor(Math.random() * Array_Of_Objects.length);
                check = numbers.includes(randomindex);
                if (check === false) {
                    numbers.push(randomindex);
                    randomIQ.push(Array_Of_Objects[randomindex]);
                }
            }
        }
    }
    RandomQuestions = randomIQ;
    CorrectQuestions = 0;
    WrongQuestions = 0;
// Create Elements of All Questions Start
    if ($('.Question-area').has('div.choice').length == 0) {
        for (let x = 0; x < randomIQ.length; x++) {
            $('.Question').append('<span style="display: none" class="Question Question_' + x + '"></span>');

        }
        for (let y = 0; y < randomIQ.length; y++) {
            $('.answers-box').append(
                '<div style="display: none" class="answer answer_' + y + '"></div>'
            )
            $('.answer_' + y).append(
                '<div class="choice choice_1">' +
                '<input id="q' + y + '-c0-input" name="choose_' + y + '" type="radio">' +
                '<label for="q' + y + '-c0-input" id="q' + y + '-c0-label"></label>' +
                '</div>',
                '<div class="choice choice_2">' +
                '<input id="q' + y + '-c1-input" name="choose_' + y + '" type="radio">' +
                '<label for="q' + y + '-c1-input" id="q' + y + '-c1-label"></label>' +
                '</div>',
                '<div class="choice choice_3">' +
                '<input id="q' + y + '-c2-input" name="choose_' + y + '" type="radio">' +
                '<label for="q' + y + '-c2-input" id="q' + y + '-c2-label"></label>' +
                '</div>',
                '<div class="choice choice_4">' +
                '<input id="q' + y + '-c3-input" name="choose_' + y + '" type="radio">' +
                '<label for="q' + y + '-c3-input" id="q' + y + '-c3-label"></label>' +
                '</div>'
            )
        }
    }
    //Fill Questions

    for (let d = 0; d < randomIQ.length; d++) {
        $('.Question_' + d).append(randomIQ[d].QuestionText)
        if (randomIQ[d].QuestionType == 2) {
            $('#q' + d + '-c0-input').attr("type", "checkbox");
            $('#q' + d + '-c1-input').attr("type", "checkbox");
            $('#q' + d + '-c2-input').attr("type", "checkbox");
            $('#q' + d + '-c3-input').attr("type", "checkbox");
            $('#q' + d + '-c0-input').attr("value", randomIQ[d].Answers[0]);
            $('#q' + d + '-c1-input').attr("value", randomIQ[d].Answers[1]);
            $('#q' + d + '-c2-input').attr("value", randomIQ[d].Answers[2]);
            $('#q' + d + '-c3-input').attr("value", randomIQ[d].Answers[3]);
            $('#q' + d + '-c0-label').text(randomIQ[d].Answers[0]);
            $('#q' + d + '-c1-label').text(randomIQ[d].Answers[1]);
            $('#q' + d + '-c2-label').text(randomIQ[d].Answers[2]);
            $('#q' + d + '-c3-label').text(randomIQ[d].Answers[3]);
        } else {
            $('#q' + d + '-c0-input').attr("type", "radio");
            $('#q' + d + '-c1-input').attr("type", "radio");
            $('#q' + d + '-c2-input').attr("type", "radio");
            $('#q' + d + '-c3-input').attr("type", "radio");
            $('#q' + d + '-c0-input').attr("value", randomIQ[d].Answers[0]);
            $('#q' + d + '-c1-input').attr("value", randomIQ[d].Answers[1]);
            $('#q' + d + '-c2-input').attr("value", randomIQ[d].Answers[2]);
            $('#q' + d + '-c3-input').attr("value", randomIQ[d].Answers[3]);
            $('#q' + d + '-c0-label').text(randomIQ[d].Answers[0]);
            $('#q' + d + '-c1-label').text(randomIQ[d].Answers[1]);
            $('#q' + d + '-c2-label').text(randomIQ[d].Answers[2]);
            $('#q' + d + '-c3-label').text(randomIQ[d].Answers[3]);
        }
    }
    DisplayQuestions(QuestionIndex);
};

//Mark Unanswered Questions
function MarkQuestions(index) {
    if ($('#q' + index + '-c0-input').is(':checked') ||
        $('#q' + index + '-c1-input').is(':checked') ||
        $('#q' + index + '-c2-input').is(':checked') ||
        $('#q' + index + '-c3-input').is(':checked')) {

    } else {
        if ($('.mark_Q').has('span.marked_' + index).length == 0) {
            $('.mark_Q').append(
                '<span class="marked marked_' + index + '" onclick="jumbtoQ(' + index + ')">' + "Skipped Q No." + (index + 1) + '</span>'
            );
        }
    }
};

//Remove from marked and jumb to Question:D
function jumbtoQ(index) {
    MarkQuestions(QuestionIndex);
    $('.Question_' + QuestionIndex).css("display", "none");
    $('.answer_' + QuestionIndex).css("display", "none");
    QuestionIndex = index;
    DisplayQuestions(QuestionIndex);
    $('.marked_' + QuestionIndex).remove();
};

//Display Questions
function DisplayQuestions(QuestionIndex) {
    $('.Question-Number').text(QuestionIndex + 1 + "/" + RandomQuestions.length);
    $('.Question_' + QuestionIndex).css("display", "block");
    $('.answer_' + QuestionIndex).css("display", "grid");
    if ($('.mark_Q').has('span.sticky_' + QuestionIndex).length != 0) {
        $('#mark-Q').html("UnMark");
    }else{
        $('#mark-Q').html("Mark");
    }
}

//Finish Exam
function FinishExam() {
    clearInterval(countDown);
    for (let c = 0; c < RandomQuestions.length; c++) {
        if (RandomQuestions[c].QuestionType == 1) {
            var qobject = {};
            for (let a = 0; a < 4; a++) {
                if ($('#q' + c + '-c' + a + '-input').is(':checked')) {

                    qobject.Question_Number = c + 1;
                    qobject.User_Answers = $('#q' + c + '-c' + a + '-input').val();
                    Object_Of_Selected_answers.push(qobject);
                }
            }
            if (Object.values(qobject).includes(c + 1)) {
                //Do Nothing
            } else {
                qobject.Question_Number = c + 1;
                qobject.User_Answers = "Not Answered";
                Object_Of_Selected_answers.push(qobject);
            }
        } else {
            var checkarray = [];
            var checkobject = {};
            for (let h = 0; h < 4; h++) {
                if ($('#q' + c + '-c' + h + '-input').is(':checked')) {
                    checkarray.push($('#q' + c + '-c' + h + '-input').val());
                }
            }
            checkobject.Question_Number = c + 1;
            checkobject.User_Answers = checkarray;
            Object_Of_Selected_answers.push(checkobject);

            if (Object.values(checkobject).includes(c + 1)) {

            } else {
                checkobject.Question_Number = c + 1;
                checkobject.User_Answers = "Not Answered";
                Object_Of_Selected_answers.push(checkobject);
            }
        }
    }
    allAnswers.push(Object_Of_Selected_answers);

    for (let b = 0; b < RandomQuestions.length; b++) {
        if (typeof (RandomQuestions[b].CorrectAnswer) != "object") {
            if (RandomQuestions[b].Answers[RandomQuestions[b].CorrectAnswer - 1] == allAnswers[0][b].User_Answers) {
                CorrectQuestions++;
            } else {
                WrongQuestions++;
            }
        } else {
            if (RandomQuestions[b].CorrectAnswer.length != allAnswers[0][b].User_Answers.length) {
                WrongQuestions++;
            } else {
                var found = 0;
                for (let m = 0; m < RandomQuestions[b].CorrectAnswer.length; m++) {
                    if (allAnswers[0][b].User_Answers.includes(RandomQuestions[b].Answers[RandomQuestions[b].CorrectAnswer[m] - 1])) {
                        found++;
                    }
                }
                if (found == 2) {
                    CorrectQuestions++;
                } else {
                    WrongQuestions++;
                }
            }
        }
    }

    if (CorrectQuestions > WrongQuestions || CorrectQuestions == WrongQuestions) {
        // alert('Congratulations,\n Correct Questions = ' + CorrectQuestions + '\n Wrong Questions = ' + WrongQuestions);
        examfinalresult = "Pass";
        $('.second').hide(1000);
        ClearFinishedExam();
        Report();
    } else {
        // alert("Sorry, You didn't pass the exam \n Correct Questions = " + CorrectQuestions + "\n Wrong Questions = " + WrongQuestions);
        $('.second').hide(1000);
        ClearFinishedExam();
        Report();
    }

};

function ClearFinishedExam() {

    QuestionIndex = 0;
    for (let s = 0; s < RandomQuestions.length; s++) {
        $('.Question_' + s).remove();
        $('.answer_' + s).remove();
        $('.Question_' + s).css("display", "none");
        $('.answer_' + s).css("display", "none");
    }
    clearInterval(countDown);
    ExamTimeInSeconds = 900;
    $('.marked').remove();
    RandomQuestions = [];
    allAnswers = [];
    Object_Of_Selected_answers = [];
    $('.Question-Number').text(QuestionIndex + 1 + "/" + IQ_Exam.length);
    $('.Question_0').css("display", "block");    //Show Question 0
    $('.answer_0').css("display", "grid");       // Show Question 0 Answers
}

//Exam Report
function Report() {
    if (examfinalresult == "Pass") {
        $('.exam_result').text("Congratulations, You Passed The Exam.");
        $('.examname').text('Exam Name : ' + $('.title').text());
        $('#TotalQuestion').text('Total Questions : ' + RandomQuestions.length);
        $('#Correct').text('Correct : ' + CorrectQuestions);
        $('#wrong').text('Wrong : ' + WrongQuestions);
        $('#exam_time').text('Time : ' + CalculateExamTime());
        $('.Result').css("background-color", "#5fb058");
        $('.resultContainer').css("display", "flex");
        examfinalresult = false;
        $('#gotomain').click(function () {
            if ($('.title').text() == "IQ Exam") {
                $('#IQ_EX').remove();
                $('.first').show(1000);
                $('.resultContainer').hide(1000);
            } else {
                $('#EN_EX').remove();
            }
        });
        $('#restartexam').click(function () {
            if ($('.title').text() == "IQ Exam") {
                $('#IQ_EX').attr("selected","selected");
                $('.first').show(1000);
                $('.resultContainer').hide(1000);
            } else {
                $('#EN_EX').attr("selected","selected");
                $('.first').show(1000);
                $('.resultContainer').hide(1000);
            }
        });
    }else {
        $('.exam_result').text("Sorry, You didn't Pass The Exam.");
        $('.examname').text('Exam Name : ' + $('.title').text());
        $('#TotalQuestion').text('Total Questions : ' + RandomQuestions.length);
        $('#Correct').text('Correct : ' + CorrectQuestions);
        $('#wrong').text('Wrong : ' + WrongQuestions);
        $('#exam_time').text('Time : ' + CalculateExamTime());
        $('#gotomain').click(function () {
            $('.first').show(1000);
            $('.resultContainer').hide(1000);
        });
        $('.Result').css("background-color", "#f18e8e");
        $('.resultContainer').css("display", "flex");
        $('#restartexam').click(function () {
            if ($('.title').text() == "IQ Exam") {
                $('#IQ_EX').attr("selected","selected");
                $('.first').show(1000);
                $('.resultContainer').hide(1000);
            } else {
                $('#EN_EX').attr("selected","selected");
                $('.first').show(1000);
                $('.resultContainer').hide(1000);
            }
        });
    }
};
// Mark Questions Button
$('#mark-Q').on('click', function () {
    if ($('.mark_Q').has('span.sticky_' + QuestionIndex).length == 0) {
        $('.mark_Q').append(
            '<span class="marked sticky_' + QuestionIndex + '" onclick="jumbtoQ(' + QuestionIndex + ')">' + "Marked Q No." + (QuestionIndex + 1) + '</span>');
        $('#mark-Q').html("UnMark");
    }else{
        $('.sticky_' + QuestionIndex).remove();
        $('#mark-Q').html("Mark")
    }
});


// $('#mark-Q')


//First Question
$('#first-Q').on('click', function () {
    $('.Question_' + QuestionIndex).css("display", "none");
    $('.answer_' + QuestionIndex).css("display", "none");
    if ($('.mark_Q').has('span.marked_' + QuestionIndex).length != 0) {
        $('.marked_' + QuestionIndex).remove();
    }
    MarkQuestions(QuestionIndex);
    QuestionIndex = 0;
    DisplayQuestions(QuestionIndex);
});

//Next Question
$('#next-Q').on('click', function () {
    if (QuestionIndex != RandomQuestions.length - 1) {
        $('.Question_' + QuestionIndex).css("display", "none");
        $('.answer_' + QuestionIndex).css("display", "none");
    }

    if ($('.mark_Q').has('span.marked_' + QuestionIndex).length != 0) {
        $('.marked_' + QuestionIndex).remove();
    }
    //Check If No Answers Is Selected
    MarkQuestions(QuestionIndex);


    if (QuestionIndex != RandomQuestions.length - 1) {
        DisplayQuestions(++QuestionIndex);
    }
});

//Prev Question
$('#prev-Q').on('click', function () {
    if (QuestionIndex != 0) {
        $('.Question_' + QuestionIndex).css("display", "none");
        $('.answer_' + QuestionIndex).css("display", "none");
    }

    if ($('.mark_Q').has('span.marked_' + QuestionIndex).length != 0) {
        $('.marked_' + QuestionIndex).remove();
    }
    MarkQuestions(QuestionIndex);

    if (QuestionIndex != 0) {
        DisplayQuestions(--QuestionIndex);
    }
});

//Last Question
$('#last-Q').on('click', function () {
    $('.Question_' + QuestionIndex).css("display", "none");
    $('.answer_' + QuestionIndex).css("display", "none");
    if ($('.mark_Q').has('span.marked_' + QuestionIndex).length != 0) {
        $('.marked_' + QuestionIndex).remove();
    }
    MarkQuestions(QuestionIndex);
    QuestionIndex = RandomQuestions.length - 1;
    DisplayQuestions(QuestionIndex);
});

//Start Exam Button
var selectexam = $('.exam-select');
$('#start-btn').click(function () {
    if ($(selectexam).val() == "selectexam") {
        $('.startexam_error').html("Please Select Exam First");
        $(selectexam).css("border-color", "red")
        $('.startexam_error').show(500);
    } else if ($(selectexam).val() == "iq") {
        countDown = setInterval(Timer, 1000);
        $('.first').hide(1000);
        $('.second').show(1000);
        CreateExam(IQ_Exam);       // Create Exam
        examStarted = Date.now();
        $('.title').text("IQ Exam")
    } else {
        //English Exam
        $('.first').hide(1000);
        $('.second').show(1000);
        countDown = setInterval(Timer, 1000);
        CreateExam(EN_Exam);
        $('.title').text("English Exam")
    }
});

//Clear Error Sign On Select Menu
$(selectexam).change(function () {
    $(selectexam).css("border-color", "inherit")
    $('.startexam_error').hide(500);
});

//Exam Date
var examdateblock = $('.exam-date'),
    todaydate = new Date().toDateString();
$('#examdate-value').html(todaydate);
//Exam Date End


$('#finish-exam').click(function () {
    var ConfirmFinish = confirm("Are You Sure ?");
    if(ConfirmFinish){
        FinishExam();
    }

});

function CalculateExamTime() {

    var Finished = $('#Examtimer-value').text();
    var examtimearray = Finished.split(":")
    var examminutes = parseInt(examtimearray[0]);
    var examseconds = parseInt(examtimearray[1]);
    var spentminutes =  15 - examminutes ;
    var spentseconds =  60 - examseconds ;
    if(examminutes == 14){
        return spentseconds + ' Seconds';
    }else if(examseconds != 0){
        return (spentminutes - 1) + ":" + spentseconds;
    }else{
        return spentminutes + " Minutes";
    }
}