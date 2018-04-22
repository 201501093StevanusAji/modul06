function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Stikom Yos Sudarso berada di kota?',
	['Jakarta', 'Bandung', 'Surabaya', 'Purwokerto'],
	'3'); 
	var q2 = new Question('Siapakah nama dosen Pemrograman Web?',
	['Pak Oscar', 'Bu Etty', 'Pak Suyudi', 'Pak Safar'],
	'0');
	var q3 = new Question('Warna apakah jas almamater Stikom Yos Sudarso Purwokerto?',
	['Biru', 'Merah', 'Hijau', 'Ungu'],
	'0');
	var q4 = new Question('Matakuliah apakah yang di ajarkan Pak Suyudi?',
	['Perpajakan', 'SIA','Akuntansi'],
	'0');
	var q5 = new Question('Pak Padosroha menjadi dosen matakuliah??',
	['Religiositas', 'Nirmana', 'Desain' , 'ISBD' , 'Pemrog I, II, III'],
	'4');
    var q6 = new Question('Berapa SKS matakuliah Pemrograman web?',
    ['1','4','5','3'],
    '3')
    var q7 = new Question('Siapakah nama pemilik kantin Stikom?',
    ['Bu Kadar','Bu Ani','Pak Bambang','Bu Lina'],
    '0')
    var q8 = new Question('Pada hari apakah matakuliah Pemrog Web kelas C berlangsung?',
    ['selasa','kamis','senis','rabu'],
    '2')
    var q9 = new Question('Siapa nama Puket 1 di Stikom?',
    ['Pak Suyudi','Pak GH','Romo Ari','Romo Suraji'],
    '1')
    var q10 = new Question('Siapakah bagian keuangan Stikom?',
    ['Bu Etty','Bu Ani','Suster Ria','Bu Lina'],
    '1')

	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'EXIT')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};