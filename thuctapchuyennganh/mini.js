function check(){
	var q1 = document.quiz.q1.value;
	var q2 = document.quiz.q2.value;
	var q3 = document.quiz.q3.value;
	var q4 = document.quiz.q4.value;
	var q5 = document.quiz.q5.value;
	var q6 = document.quiz.q6.value;
	var q7 = document.quiz.q7.value;
	var q8 = document.quiz.q8.value;
	var q9 = document.quiz.q9.value;
	var q10 = document.quiz.q10.value;
	var q11 = document.quiz.q11.value;
	var q12 = document.quiz.q12.value;
	var q13 = document.quiz.q13.value;
	var q14 = document.quiz.q14.value;
	var q15 = document.quiz.q15.value;
	var q16 = document.quiz.q16.value;
	var q17 = document.quiz.q17.value;
	var q18 = document.quiz.q18.value;
	var q19 = document.quiz.q19.value;


	var score = 0;

	if (q1 == "substantially") {
		score++;
	}
	if (q2== "bilities") {
		score++;
	}
	if (q3 == "bnormalitie") {
		score++;
	}
	if (q4 == "system") {
		score++;
	}
	if (q5 == "rating") {
	    score++;
	}
	if (q6 == "predicted") {
	    score++;
	}
	if (q7 == "general") {
	    score++;
	}
	if (q8 == "thinking") {
	    score++;
	}
	if (q9 == "solution") {
	    score++;
	}
	if (q10 == "air") {
	    score++;
	}
	if (q11 == "consumption") {
	    score++;
	}
	if (q12 == "associated") {
	    score++;
	}
	if (q13 == "reduction") {
	    score++;
	}
	if (q14 == "equivalent") {
	    score++;
	}
	if (q15 == "power") {
	    score++;
	}
	if (q16 == "cloud") {
	    score++;
	}
	if (q17 == "plants") {
	    score++;
	}
	if (q18 == "friendly") {
	    score++;
	}
	if (q19 == "viable") {
	    score++;
	}
	
	var v = confirm("diem " + score + "\nBạn có muốn quay về trang chủ không?");
	if (v == true) {
		document.getElementById("click").click();
	}
	else{
		document.getElementById("click").click();
	}
	

}

