// Variables

let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.quote');
 let person = document.querySelector('.person'); 

 const qoutes = [ {

    qoute : ` "Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person : ` "Mother Teresa "` },
    { quote : `"Spread love everywhere you go. Let no one ever come to you without leaving happier." `,
    person : `Franklin D. Roosevelt `},
    { qoute : `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person : `Margaret Mead`},
    {qoute : `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
    person: `Robert Louis Stevenson`},
    {qoute : `"The future belongs to those who believe in the beauty of their dreams." `,
      person : `Eleanor Roosevelt` },
    {person: `"Tell me and I forget. Teach me and I remember. Involve me and I learn. "`,
    qoute : `Benjamin Franklin `},
    {person: `"The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart." `,
    qoute : `Helen Keller`},
    {person : `"It is during our darkest moments that we must focus to see the light." `,
    qoute : `Aristotle`},
    {person : ` "Whoever is happy will make others happy too. "`,
    person : `Anne Frank`},
    {person : ` "Do not go where the path may lead, go instead where there is no path and leave a trail."` ,
      qoute: `Ralph Waldo Emerson`},];


    btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * qoutes.length);

    if( random > 0 )
    {

    for(var a = 1 ;a <= qoutes.length ;a++) {

    qoute.innerText = qoutes[random].qoute;

    person.innerText = qoutes[random].person;
    }
    }

    else {

        qoute.innerText = "Ran Out of Qoutes"
        person.innerText ="Oops"

    }

})