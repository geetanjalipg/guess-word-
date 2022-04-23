player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " - ";
document.getElementById("player2_name").innerHTML = player2_name + " - ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    charat1 = word.charAt(1);
    mid_index = Math.floor(word.length / 2);
    charat2 = word.charAt(mid_index);
    charat3 = word.charAt(word.length - 1);

    replaced_charat1 = word.replace(charat1, "_");
    replaced_charat2 = replaced_charat1.replace(charat2, "_");
    replaced_charat3 = replaced_charat2.replace(charat3, "_");

    row_question = "<h4 id='word_display' > Q - " + replaced_charat3 + "</h4>";
    row_input = "<br>answer - <input id='input_checkbox' >";
    row_button = "<br><br><button class='btn btn-info' onclick='check()' >Check</button>";
    output = row_question + row_input + row_button;
    document.getElementById("output").innerHTML = output;
    document.getElementById("word").value = "";


}
question_turn = "player1";
answer_turn = "player2";
function check() {
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();
    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;

        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn- " + player2_name;

    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;

    }
    if(answer_turn=="player1"){
       answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn- " + player1_name;
    }
    document.getElementById("output").innerHTML="";
    
}

