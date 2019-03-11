function check(){
	var score = 0;
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
	//part2
	var q11 = document.quiz.q11.value;
	var q12 = document.quiz.q12.value;
	var q13 = document.quiz.q13.value;
	var q14 = document.quiz.q14.value;
	var q15 = document.quiz.q15.value;
	var q16 = document.quiz.q16.value;
	var q17 = document.quiz.q17.value;
	var q18 = document.quiz.q18.value;
	var q19 = document.quiz.q19.value;
	var q20 = document.quiz.q20.value;
	if (q1 == "4") {
		score += 10;
	}
	if (q2 == "1") {
		score += 10;
	}
	if (q3 == "2") {
		score += 10;
	}
	if (q4 == "2") {
		score += 10;
	}
	if (q5 == "3") {
		score += 10;
	}
	if (q6 == "2") {
		score += 10;
	}
	if (q7 == "3") {
		score += 10;
	}
	if (q8 == "1") {
		score += 10;
	}
	if (q9 == "1") {
		score += 10;
	}
	if (q10 == "2") {
		score += 10;
	}
	if (q11 == "1") {
		score += 10;
	}
	if (q12 == "3") {
		score += 10;
	}
	if (q13 == "2") {
		score += 10;
	}
	if (q14 == "1") {
		score += 10;
	}
	if (q15 == "3") {
		score += 10;
	}
	if (q16 == "4") {
		score += 10;
	}
	if (q17 == "3") {
		score += 10;
	}
	if (q18 == "2") {
		score += 10;
	}
	if (q19 == "3") {
		score += 10;
	}
	if (q20 == "4") {
		score += 10;
	}

	var v = confirm("diem " + score + "\nBạn có muốn quay về trang chủ không?");
	if (v == true) {
		document.getElementById("click").click();
	}
	else{
		document.getElementById("click").click();
	}
}

