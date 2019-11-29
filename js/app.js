import '../css/loader.css';
import '../css/style.css';
import '../css/navbar.css';

// spreadSheet
import sheetIDs from "../spreadSheet/sheetIDs";
import apiURLs from "../spreadSheet/apiURLs";

// utility functions
import getSheetsLength from "./fetchSheetsLength";
import Export2Doc from "./exportToWords";
import buildTable from "./makeTable";

let myData = [];

const posts = {
    postPerpage: 10,
    currentPage: 0,
    results: null,
    currentSheetID: '1mgbYLvqlZ9FIRFbiIhg6C4SQZtHihCOME7f5m49Ze84',
    currentApiURL: 'https://script.google.com/macros/s/AKfycbzyqLGZTdZSFlGtghA2wQRpPb8yMs88uWBB92iYnAga_OhSJ9c/exec',
    currentDay: 0,
    currentActive: 1
};

// let firstLoad = true;
const printBtn = document.querySelector('.printer');
const exportContent = document.getElementById('exportContent');
const choices = document.querySelectorAll('.choice');

// Event Listeners
window.addEventListener('load', init);
document.querySelector('.shuffleWords').addEventListener('click', function (e) {
    document.querySelector('.game').innerHTML = '';
    loadPage(posts.currentPage);
    document.getElementById('mySidenav').style.width = '0';
});

printBtn.addEventListener('click', function (e) {
    makeTwoCopies(e);
});

choices.forEach(choice => {
    choice.addEventListener('click', function (e) {
            choices.forEach(choice => {
            choice.classList.remove('active');
        });
        document.querySelector('.game').innerHTML = '';
        document.querySelector('.open-box').style.display = 'none';

        // document.querySelector('.showLevel').textContent = '';
        // document.querySelector('.showLevel').style.display = 'block';
        switch (this.dataset.level) {
            case '1':
                posts.currentSheetID = sheetIDs["level-1"];
                posts.currentApiURL = apiURLs['level-1'];
                posts.currentActive = this.dataset.level;
                getSheetsLength(posts.currentApiURL, loadJSON);
                // document.querySelector('.showLevel').textContent = '고1';

                break;
            case '2':
                posts.currentSheetID = sheetIDs["level-2"]
                posts.currentApiURL = apiURLs['level-2'];
                posts.currentActive = this.dataset.level;
                getSheetsLength(posts.currentApiURL, loadJSON);
                // document.querySelector('.showLevel').textContent = '고2';
                break;
            case '3':
                posts.currentSheetID = sheetIDs["level-3"]
                posts.currentApiURL = apiURLs['level-3'];
                posts.currentActive = this.dataset.level;
                getSheetsLength(posts.currentApiURL, loadJSON);
                // document.querySelector('.showLevel').textContent = '고3';
                break;
            case '4':
                posts.currentSheetID = sheetIDs['free']
                posts.currentApiURL = apiURLs['free'];
                posts.currentActive = this.dataset.level;
                getSheetsLength(posts.currentApiURL, loadJSON);
                // document.querySelector('.showLevel').innerHTML = '<i class="fa fa-smile-o" aria-hidden="true"></i>';
        }
        if (this.dataset.level === posts.currentActive) {
            choice.classList.add('active');
        }
    });
});


function init(e) {
    // Grid wrapper displaying message
    let div = document.createElement('div');
    div.setAttribute('class', 'message wrapper');
    // div.innerText = 'Press start button';
    wrapper.appendChild(div);

    // Start button
    let button = document.createElement('button');
    button.type = button;
    button.setAttribute('class', 'start');
    button.textContent = "Start Study";
    button.addEventListener('click', () => getSheetsLength(posts.currentApiURL, loadJSON));
    wrapper.appendChild(button);


    // Game element
    let game = document.createElement('div');
    game.classList.add('game');
    wrapper.insertBefore(game, document.querySelector('.index'));
}

function loadJSON(sheetLength) {
    let urls = [];
    var sheetID = posts.currentSheetID;

    for (let sheetNum = 1; sheetNum <= sheetLength; sheetNum++) {
        let jsonURL = `https://spreadsheets.google.com/feeds/list/${sheetID}/${sheetNum}/public/values?alt=json`;;
        urls = [...urls, jsonURL];
    }

    Promise.all(urls.map(url => {
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                let tempArr = [];
                let sheetName = data.feed.title.$t;
                data.feed.entry.forEach(item => {
                    let holder = {};
                    for (let key in item) {
                        if (key.substring(4) === 'english') {
                            holder.en = item[key].$t;
                        } else if (key.substring(4) === 'korean') {
                            holder.ko = item[key].$t;
                        }
                    }
                    tempArr = [...tempArr, holder];
                });
                return tempArr;
            })
    }))
        .then(result => {
            posts.results = result;
            loadPage(0, posts.results);
            document.querySelector('.loader').style.display = 'none';
        });
}


function loadPage(page) {
    document.querySelector('.game').innerHTML = '';
    document.querySelector('.open-box').style.display = 'block'
    posts.currentPage = page;
    document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1;
    // if (firstLoad) {
    //     document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1;
    //     firstLoad = false;
    // } else {
    //     document.querySelector('.numday').innerHTML = parseInt(posts.currentPage);
    // }
    document.querySelector('.index').classList.remove('hidden');
    document.querySelector('.start').style.display = 'none';
    loadNav();
    loadNumbers();
    let myWords = shuffle(posts.results[page]);
    const game = document.querySelector('.game');
    myWords.forEach(word => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.classList.add('tooltip-message');
        box.setAttribute('data-tooltip-message', word.en);
        box.innerText = word.en;
        box.addEventListener('mouseenter', function (e) {
            box.style.backgroundColor = "#4CAF50";
            box.innerText = word.ko;
            loadTooltips(e);
        });
        box.addEventListener('mouseleave', function (e) {
            box.style.backgroundColor = '#3b5998';
            box.innerText = word.en;

            const tooltipOutput = document.querySelector('.tooltip-output');
            tooltipOutput.style.display = 'none';
        });
        game.appendChild(box);
    });
    function add(a) {
        return a + 10;
    }


    function loadTooltips(event) {
        const tooltips = document.querySelectorAll('.tooltip-message');
        const tooltipOutput = document.querySelector('.tooltip-output');
        let myInterval;
        // clearInterval(myInterval);
        tooltipOutput.style.display = 'block';
        tooltipOutput.style.top = event.clientY + 5 + "px";
        tooltipOutput.style.left = event.clientX + 5 + "px";
        tooltipOutput.innerHTML = event.target.getAttribute("data-tooltip-message");
    }
}

function loadNumbers() {
    let firstRun = true;
    const numbers = document.querySelector('.numbers');
    numbers.innerHTML = '';
    posts.results.forEach((item, i) => {
        const span = document.createElement('span');
        span.classList.add('number');
        span.textContent = i + 1;
        span.addEventListener('click', function (e) {
            numbers.innerHTML = '';
            document.querySelector('.game').innerHTML = '';
            loadPage(parseInt(this.textContent) - 1);
            posts.currentDay = this.textContent;
        });

        if (i + 1 == posts.currentPage + 1) {
            console.log(posts.currentPage);
            span.classList.add('active');
        }
        numbers.appendChild(span);
        // if ((parseInt(this.textContent) - 1) == posts.currentPage) {
        //     this.classList.add('isActive');
        // }
    });
}


function loadNav() {
    document.querySelector('.navbar').classList.remove('hidden');
     document.querySelector('.curday').innerHTML = `Day-${parseInt(posts.currentPage) + 1} in ${posts.results.length}`;
     document.querySelector('.openbtn').addEventListener('click', function (e) {
            document.getElementById('mySidenav').style.width = '300px';
     });

    document.querySelector('.closebtn').addEventListener('click', function (e) {
            document.getElementById('mySidenav').style.width = '0';
     }, false);

}


function shuffle (arr) {
    var n = arr.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

function makeTwoCopies(event) {
    makeWordContent(event, "white");
    makeWordContent(event, "black");
}


function makeWordContent(event, color) {
    const numDay = document.querySelector('.numday').textContent;
    let index  = parseInt(numDay) - 1;
    let dayWords = posts.results[index];
    exportContent.innerHTML = `<h3
                                    style="text-align: center"
                                >
                                    Day-${index+1} TEST;
                                </h3><br>`;
    let tableHTML = `<table style="border: 1px solid black; border-collapse: collapse">
                        <tr>
                            <td 
                                style="border: 1px solid black;
                                       font-weight: bold;
                                       text-align: center;
                                       color: black 
                                ">
                                English
                                </td> 
                            <td 
                                style="border: 1px solid black;
                                       font-weight: bold;
                                       text-align: center;
                                       color: black;
                                ">
                                Korean
                                </td> 
                        </tr> 
                    `;

    let tableData = '';
    for (let i = 0; i < dayWords.length; i++) {
        let data = `<tr">
                        <td 
                            style=" border: 1px solid black;
                                    color: black;  
                                   "
                          >
                            ${i+1}. ${dayWords[i].en}</td>
                        <td 
                            style=" border: 1px solid black;
                                    color: ${color};  
                                   "
                           >
                            ${dayWords[i].ko}</td>
                     </tr>
                     `;
        tableData += data;
    }
    tableHTML += tableData + '</table>';

    exportContent.innerHTML += tableHTML;
    Export2Doc('exportContent', `day-${index+1}.test`);
    exportContent.innerHTML = '';
}



