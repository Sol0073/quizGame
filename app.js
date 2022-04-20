const quiz = [
    {
        question:'次の植物のうち、単子葉類はどれ？',
        answers: [
            'アサガオ',
            'ツユクサ',
            'ヘチマ',
            'タンポポ'
        ],
        correct: 'ツユクサ'
    },{
        question:'次の水溶液のうち、アルカリ性のものはどれ？',
        answers: [
            '食塩水',
            '塩酸',
            '炭酸水',
            'アンモニア水'
        ],
        correct: 'アンモニア水'
    },{
        question:'次のうち、外惑星はどれ？',
        answers: [
            '太陽',
            '月',
            '火星',
            '冥王星'
        ],
        correct: '火星'

    }
];

const quizLength = quiz.length
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = `第${quizIndex + 1}問` + '　' + quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    };
};

setupQuiz();

const kekkahyoziMaru = () => {
    document.getElementsByClassName('kekka')[0].textContent = '正解！';
    document.getElementsByClassName('kekka')[0].style.color = "red";
};

const kekkahyoziBatu = () => {
    document.getElementsByClassName('kekka')[0].textContent = '不正解！';
    document.getElementsByClassName('kekka')[0].style.color = "blue";

};

const scoreHhozi = () => {
    document.getElementsByClassName('score')[0].textContent = '終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
};

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        kekkahyoziMaru();
        score++;
    } else {
        kekkahyoziBatu();
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        scoreHhozi();
    }
};
//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}
