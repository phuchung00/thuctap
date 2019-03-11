
	var listen = 0;
	var listen_s = 0;
	var correct = 0;
	var correct_s = 0;
	
	var read = 0;



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
	var q21 = document.quiz.q21.value;
	var q22 = document.quiz.q22.value;
	var q23 = document.quiz.q23.value;
	var q24 = document.quiz.q24.value;
	var q25 = document.quiz.q25.value;
	var q26 = document.quiz.q26.value;
	var q27 = document.quiz.q27.value;
	var q28 = document.quiz.q28.value;
	var q29 = document.quiz.q29.value;
	var q30 = document.quiz.q30.value;
	var q31 = document.quiz.q31.value;
	var q32 = document.quiz.q32.value;
	var q33 = document.quiz.q33.value;
	var q34 = document.quiz.q34.value;
	var q35 = document.quiz.q35.value;
	var q36 = document.quiz.q36.value;
	var q37 = document.quiz.q37.value;
	var q38 = document.quiz.q38.value;
	var q39 = document.quiz.q39.value;
	var q40 = document.quiz.q40.value;

	//part 3
	var q41 = document.quiz.q41.value;
    var q42 = document.quiz.q42.value;
    var q43 = document.quiz.q43.value;
    var q44 = document.quiz.q44.value;
    var q45 = document.quiz.q45.value;
    var q46 = document.quiz.q46.value;
    var q47 = document.quiz.q47.value;
    var q48 = document.quiz.q48.value;
    var q49 = document.quiz.q49.value;
    var q50 = document.quiz.q50.value;
    var q51 = document.quiz.q51.value;
    var q52 = document.quiz.q52.value;
    var q53 = document.quiz.q53.value;
    var q54 = document.quiz.q54.value;
    var q55 = document.quiz.q55.value;
    var q56 = document.quiz.q56.value;
    var q57 = document.quiz.q57.value;
    var q58 = document.quiz.q58.value;
    var q59 = document.quiz.q59.value;
    var q60 = document.quiz.q60.value;
    var q61 = document.quiz.q61.value;
    var q62 = document.quiz.q62.value;
    var q63 = document.quiz.q63.value;
    var q64 = document.quiz.q64.value;
    var q65 = document.quiz.q65.value;
    var q66 = document.quiz.q66.value;
    var q67 = document.quiz.q67.value;
    var q68 = document.quiz.q68.value;
    var q69 = document.quiz.q69.value;
    var q70 = document.quiz.q70.value;

    //part 4
    var q71 = document.quiz.q71.value;
    var q72 = document.quiz.q72.value;
    var q73 = document.quiz.q73.value;
    var q74 = document.quiz.q74.value;
    var q75 = document.quiz.q75.value;
    var q76 = document.quiz.q76.value;
    var q77 = document.quiz.q77.value;
    var q78 = document.quiz.q78.value;
    var q79 = document.quiz.q79.value;
    var q80 = document.quiz.q80.value;
    var q81 = document.quiz.q81.value;
    var q82 = document.quiz.q82.value;
    var q83 = document.quiz.q83.value;
    var q84 = document.quiz.q84.value;
    var q85 = document.quiz.q85.value;
    var q86 = document.quiz.q86.value;
    var q87 = document.quiz.q87.value;
    var q88 = document.quiz.q88.value;
    var q89 = document.quiz.q89.value;
    var q90 = document.quiz.q90.value;
    var q91 = document.quiz.q91.value;
    var q92 = document.quiz.q92.value;
    var q93 = document.quiz.q93.value;
    var q94 = document.quiz.q94.value;
    var q95 = document.quiz.q95.value;
    var q96 = document.quiz.q96.value;
    var q97 = document.quiz.q97.value;
    var q98 = document.quiz.q98.value;
    var q99 = document.quiz.q99.value;
    var q100 = document.quiz.q100.value;

    //part 5
    var q101 = document.quiz.q101.value;
    var q102 = document.quiz.q102.value;
    var q103 = document.quiz.q103.value;
    var q104 = document.quiz.q104.value;
    var q105 = document.quiz.q105.value;
    var q106 = document.quiz.q106.value;
    var q107 = document.quiz.q107.value;
    var q108 = document.quiz.q108.value;
    var q109 = document.quiz.q109.value;
    var q110 = document.quiz.q110.value;
    var q111 = document.quiz.q111.value;
    var q112 = document.quiz.q112.value;
    var q113 = document.quiz.q113.value;
    var q114 = document.quiz.q114.value;
    var q115 = document.quiz.q115.value;
    var q116 = document.quiz.q116.value;
    var q117 = document.quiz.q117.value;
    var q118 = document.quiz.q118.value;
    var q119 = document.quiz.q119.value;
    var q120 = document.quiz.q120.value;
    var q121 = document.quiz.q121.value;
    var q122 = document.quiz.q122.value;
    var q123 = document.quiz.q123.value;
    var q124 = document.quiz.q124.value;
    var q125 = document.quiz.q125.value;
    var q126 = document.quiz.q126.value;
    var q127 = document.quiz.q127.value;
    var q128 = document.quiz.q128.value;
    var q129 = document.quiz.q129.value;
    var q130 = document.quiz.q130.value;
    var q131 = document.quiz.q131.value;
    var q132 = document.quiz.q132.value;
    var q133 = document.quiz.q133.value;
    var q134 = document.quiz.q134.value;
    var q135 = document.quiz.q135.value;
    var q136 = document.quiz.q136.value;
    var q137 = document.quiz.q137.value;
    var q138 = document.quiz.q138.value;
    var q139 = document.quiz.q139.value;
    var q140 = document.quiz.q140.value;

    //part 6
    var q141 = document.quiz.q141.value;
    var q142 = document.quiz.q142.value;
    var q143 = document.quiz.q143.value;
    var q144 = document.quiz.q144.value;
    var q145 = document.quiz.q145.value;
    var q146 = document.quiz.q146.value;
    var q147 = document.quiz.q147.value;
    var q148 = document.quiz.q148.value;
    var q149 = document.quiz.q149.value;
    var q150 = document.quiz.q150.value;
    var q151 = document.quiz.q151.value;
    var q152 = document.quiz.q152.value;

    //part 7
    var q153 = document.quiz.q153.value;
    var q154 = document.quiz.q154.value;
    var q155 = document.quiz.q155.value;
    var q156 = document.quiz.q156.value;
    var q157 = document.quiz.q157.value;
    var q158 = document.quiz.q158.value;
    var q159 = document.quiz.q159.value;
    var q160 = document.quiz.q160.value;
    var q161 = document.quiz.q161.value;
    var q162 = document.quiz.q162.value;
    var q163 = document.quiz.q163.value;
    var q164 = document.quiz.q164.value;
    var q165 = document.quiz.q165.value;
    var q166 = document.quiz.q166.value;
    var q167 = document.quiz.q167.value;
    var q168 = document.quiz.q168.value;
    var q169 = document.quiz.q169.value;
    var q170 = document.quiz.q170.value;
    var q171 = document.quiz.q171.value;
    var q172 = document.quiz.q172.value;
    var q173 = document.quiz.q173.value;
    var q174 = document.quiz.q174.value;
    var q175 = document.quiz.q175.value;
    var q176 = document.quiz.q176.value;
    var q177 = document.quiz.q177.value;
    var q178 = document.quiz.q178.value;
    var q179 = document.quiz.q179.value;
    var q180 = document.quiz.q180.value;
    var q181 = document.quiz.q181.value;
    var q182 = document.quiz.q182.value;
    var q183 = document.quiz.q183.value;
    var q184 = document.quiz.q184.value;
    var q185 = document.quiz.q185.value;
    var q186 = document.quiz.q186.value;
    var q187 = document.quiz.q187.value;
    var q188 = document.quiz.q188.value;
    var q189 = document.quiz.q189.value;
    var q190 = document.quiz.q190.value;
    var q191 = document.quiz.q191.value;
    var q192 = document.quiz.q192.value;
    var q193 = document.quiz.q193.value;
    var q194 = document.quiz.q194.value;
    var q195 = document.quiz.q195.value;
    var q196 = document.quiz.q196.value;
    var q197 = document.quiz.q197.value;
    var q198 = document.quiz.q198.value;
    var q199 = document.quiz.q199.value;
    var q200 = document.quiz.q200.value;


	// var listen = 0;
	// var listen_s = 0;
	// var correct = 0;
	// var correct_s = 0;
	
	// var read = 0;


	if (q1 == "4") {
		listen++;
	}
	if (q2 == "3") {
		listen++;
	}
	if (q3 == "4") {
		listen++;
	}
	if (q4 == "2") {
		listen++;
	}
	if (q5 == "1") {
		listen++;
	}
	if (q6 == "3") {
		listen++;
	}
	if (q7 == "4") {
		listen++;
	}
	if (q8 == "1") {
		listen++;
	}
	if (q9 == "2") {
		listen++;
	}
	if (q10 == "3") {
		listen++;
	}
//part2
	if (q11 == "1") {
		listen++;
	}
	if (q12 == "2") {
		listen++;
	}
	if (q13 == "2") {
		listen++;
	}
	if (q14 == "1") {
		listen++;
	}
	if (q15 == "3") {
		listen++;
	}
	if (q16 == "3") {
		listen++;
	}
	if (q17 == "3") {
		listen++;
	}
	if (q18 == "2") {
		listen++;
	}
	if (q19 == "1") {
		listen++;
	}
	if (q20 == "1") {
		listen++;
	}
	if (q21 == "3") {
		listen++;
	}
	if (q22 == "2") {
		listen++;
	}
	if (q23 == "3") {
		listen++;
	}
	if (q24 == "1") {
		listen++;
	}
	if (q25 == "3") {
		listen++;
	}
	if (q26 == "2") {
		listen++;
	}
	if (q27 == "2") {
		listen++;
	}
	if (q28 == "3") {
		listen++;
	}
	if (q29 == "1") {
		listen++;
	}
	if (q30 == "2") {
		listen++;
	}
	if (q31 == "3") {
		listen++;
	}
	if (q32 == "3") {
		listen++;
	}
	if (q33 == "1") {
		listen++;
	}
	if (q34 == "3") {
		listen++;
	}
	if (q35 == "2") {
		listen++;
	}
	if (q36 == "3") {
		listen++;
	}
	if (q37 == "1") {
		listen++;
	}
	if (q38 == "2") {
		listen++;
	}
	if (q39 == "1") {
		listen++;
	}
	if (q40 == "2") {
		listen++;
	}

	//part 3

	if (q41 == "2") {
	    listen++;
	}
	if (q42 == "1") {
	    listen++;
	}
	if (q43 == "2") {
	    listen++;
	}
	if (q44 == "1") {
	    listen++;
	}
	if (q45 == "3") {
	    listen++;
	}
	if (q46 == "2") {
	    listen++;
	}
	if (q47 == "2") {
	    listen++;
	}
	if (q48 == "3") {
	    listen++;
	}
	if (q49 == "4") {
	    listen++;
	}
	if (q50 == "4") {
	    listen++;
	}
	if (q51 == "4") {
	    listen++;
	}
	if (q52 == "3") {
	    listen++;
	}
	if (q53 == "1") {
	    listen++;
	}
	if (q54 == "4") {
	    listen++;
	}
	if (q55 == "2") {
	    listen++;
	}
	if (q56 == "1") {
	    listen++;
	}
	if (q57 == "4") {
	    listen++;
	}
	if (q58 == "3") {
	    listen++;
	}
	if (q59 == "1") {
	    listen++;
	}
	if (q60 == "4") {
	    listen++;
	}
	if (q61 == "1") {
	    listen++;
	}
	if (q62 == "3") {
	    listen++;
	}
	if (q63 == "3") {
	    listen++;
	}
	if (q64 == "2") {
	    listen++;
	}
	if (q65 == "1") {
	    listen++;
	}
	if (q66 == "2") {
	    listen++;
	}
	if (q67 == "4") {
	    listen++;
	}
	if (q68 == "1") {
	    listen++;
	}
	if (q69 == "3") {
	    listen++;
	}
	if (q70 == "4") {
	    listen++;
	}

	//part 4

	if (q71 == "2") {
		listen++;
	}
	if (q72 == "1") {
	    listen++;
	}
	if (q73 == "4") {
	    listen++;
	}
	if (q74 == "4") {
	    listen++;
	}
	if (q75 == "3") {
	    listen++;
	}
	if (q76 == "2") {
	    listen++;
	}
	if (q77 == "1") {
	    listen++;
	}
	if (q78 == "4") {
	    listen++;
	}
	if (q79 == "1") {
	    listen++;
	}
	if (q80 == "3") {
	    listen++;
	}
	if (q81 == "2") {
	    listen++;
	}
	if (q82 == "1") {
	    listen++;
	}
	if (q83 == "4") {
	    listen++;
	}
	if (q84 == "3") {
	    listen++;
	}
	if (q85 == "1") {
	    listen++;
	}
	if (q86 == "3") {
	    listen++;
	}
	if (q87 == "2") {
	    listen++;
	}
	if (q88 == "4") {
	    listen++;
	}
	if (q89 == "4") {
	    listen++;
	}
	if (q90 == "1") {
	    listen++;
	}
	if (q91 == "1") {
	    listen++;
	}
	if (q92 == "1") {
	    listen++;
	}
	if (q93 == "4") {
	    listen++;
	}
	if (q94 == "2") {
	    listen++;
	}
	if (q95 == "4") {
	    listen++;
	}
	if (q96 == "1") {
	    listen++;
	}
	if (q97 == "3") {
	    listen++;
	}
	if (q98 == "3") {
	    listen++;
	}
	if (q99 == "2") {
	    listen++;
	}
	if (q100 == "3") {
	    listen++;
	}

	//part 5

	if (q101 == "2") {
	    read++;
	}
	if (q102 == "3") {
	    read++;
	}
	if (q103 == "1") {
	    read++;
	}
	if (q104 == "1") {
	    read++;
	}
	if (q105 == "4") {
	    read++;
	}
	if (q106 == "1") {
	    read++;
	}
	if (q107 == "3") {
	    read++;
	}
	if (q108 == "4") {
	    read++;
	}
	if (q109 == "3") {
	    read++;
	}
	if (q110 == "4") {
	    read++;
	}
	if (q111 == "4") {
	    read++;
	}
	if (q112 == "2") {
	    read++;
	}
	if (q113 == "3") {
	    read++;
	}
	if (q114 == "4") {
	    read++;
	}
	if (q115 == "1") {
	    read++;
	}
	if (q116 == "1") {
	    read++;
	}
	if (q117 == "3") {
	    read++;
	}
	if (q118 == "2") {
	    read++;
	}
	if (q119 == "2") {
	    read++;
	}
	if (q120 == "2") {
	    read++;
	}
	if (q121 == "3") {
	    read++;
	}
	if (q122 == "3") {
	    read++;
	}
	if (q123 == "4") {
	    read++;
	}
	if (q124 == "2") {
	    read++;
	}
	if (q125 == "3") {
	    read++;
	}
	if (q126 == "4") {
	    read++;
	}
	if (q127 == "4") {
	    read++;
	}
	if (q128 == "4") {
	    read++;
	}
	if (q129 == "2") {
	    read++;
	}
	if (q130 == "1") {
	    read++;
	}
	if (q131 == "1") {
	    read++;
	}
	if (q132 == "3") {
	    read++;
	}
	if (q133 == "1") {
	    read++;
	}
	if (q134 == "2") {
	    read++;
	}
	if (q135 == "4") {
	    read++;
	}
	if (q136 == "4") {
	    read++;
	}
	if (q137 == "3") {
	    read++;
	}
	if (q138 == "3") {
	    read++;
	}
	if (q139 == "1") {
	    read++;
	}
	if (q140 == "2") {
	    read++;
	}

	//part 6
	if (q141 == "3") {
	    read++;
	}
	if (q142 == "4") {
	    read++;
	}
	if (q143 == "2") {
	    read++;
	}
	if (q144 == "3") {
	    read++;
	}
	if (q145 == "2") {
	    read++;
	}
	if (q146 == "2") {
	    read++;
	}
	if (q147 == "1") {
	    read++;
	}
	if (q148 == "3") {
	    read++;
	}
	if (q149 == "1") {
	    read++;
	}
	if (q150 == "2") {
	    read++;
	}
	if (q151 == "4") {
	    read++;
	}
	if (q152 == "1") {
	    read++;
	}

	//part 7
	if (q153 == "4") {
	    read++;
	}
	if (q154 == "2") {
	    read++;
	}
	if (q155 == "4") {
	    read++;
	}
	if (q156 == "4") {
	    read++;
	}
	if (q157 == "2") {
	    read++;
	}
	if (q158 == "3") {
	    read++;
	}
	if (q159 == "1") {
	    read++;
	}
	if (q160 == "3") {
	    read++;
	}
	if (q161 == "4") {
	    read++;
	}
	if (q162 == "1") {
	    read++;
	}
	if (q163 == "3") {
	    read++;
	}
	if (q164 == "4") {
	    read++;
	}
	if (q165 == "4") {
	    read++;
	}
	if (q166 == "2") {
	    read++;
	}
	if (q167 == "1") {
	    read++;
	}
	if (q168 == "3") {
	    read++;
	}
	if (q169 == "2") {
	    read++;
	}
	if (q170 == "3") {
	    read++;
	}
	if (q171 == "1") {
	    read++;
	}
	if (q172 == "2") {
	    read++;
	}
	if (q173 == "2") {
	    read++;
	}
	if (q174 == "4") {
	    read++;
	}
	if (q175 == "1") {
	    read++;
	}
	if (q176 == "1") {
	    read++;
	}
	if (q177 == "3") {
	    read++;
	}
	if (q178 == "4") {
	    read++;
	}
	if (q179 == "3") {
	    read++;
	}
	if (q180 == "2") {
	    read++;
	}
	if (q181 == "4") {
	    read++;
	}
	if (q182 == "3") {
	    read++;
	}
	if (q183 == "2") {
	    read++;
	}
	if (q184 == "1") {
	    read++;
	}
	if (q185 == "1") {
	    read++;
	}
	if (q186 == "1") {
	    read++;
	}
	if (q187 == "3") {
	    read++;
	}
	if (q188 == "3") {
	    read++;
	}
	if (q189 == "3") {
	    read++;
	}
	if (q190 == "2") {
	    read++;
	}
	if (q191 == "2") {
	    read++;
	}
	if (q192 == "1") {
	    read++;
	}
	if (q193 == "3") {
	    read++;
	}
	if (q194 == "4") {
	    read++;
	}
	if (q195 == "1") {
	    read++;
	}
	if (q196 == "2") {
	    read++;
	}
	if (q197 == "4") {
	    read++;
	}
	if (q198 == "1") {
	    read++;
	}
	if (q199 == "2") {
	    read++;
	}
	if (q200 == "4") {
	    read++;
	}

	read_s = (read < 1) ? read_s = 0 : read_s = (read * 5) - 5;
	listen_s = (listen < 1) ? listen_s = 0 : listen_s = (listen * 5) - 5;
	// read_s = (read * 5) - 5;
	// listen_s = (listen * 5) - 5;
	// correct = read_s + listen_s;

	
	var t;
	var v = confirm("Bạn được\n" + listen_s +" điểm nghe. \n" + read_s+ " điểm đọc. "+ "\nBạn có muốn xem đáp án không?");
	if(v == true)
		{
			document.getElementById("clicked").click();
		}
		else
		{
			document.getElementById("click").click();
		}
}


function countDown(mins,secs,elem) {
	var element = document.getElementById(elem);

	element.innerHTML = "Bạn còn "+ mins +" phút " +secs;
	if(secs < 1 && mins > 0) {
		secs = 59;
		mins--;
	}
	else if (mins < 1 && secs < 0) {
			clearTimeout(timer);
			element.innerHTML = '<h2>Hết giờ!</h2>';
			check().click();

		}
	secs--;
	var timer = setTimeout('countDown('+mins+','+secs+',"'+elem+'")',1000);
}
