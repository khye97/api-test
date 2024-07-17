const API_KEY = `ttbqhfhfh3691231001`
let bookList = [];


//var main = $("div[id^=aladin-bookinfo]"); // aladin-bookinfo로 시작하는 id를 가진 div 엘리먼트를 찾습니다.
// 그 엘리먼트가 존재한다면
//if(main.length>0) { 
     //var id = main.attr("id").substr(16, 10); // ISBN(10자리)부분을 잘라내서 얻습니다 (16칸부터 10개만큼의 문자 얻기)
    //  var url = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101&callback=bookDisplay`
    //  //var url = `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${API_KEY}&cover=big&ItemId=${id}&output=js&callback=bookDisplay`;
    
    //  // 콜백 함수입니다.
    //  function bookDisplay(success, data) {
    //     let HTML = `<div>연습</div>`
    //     console.log(success);
    //     //console.log(data);
    //     /* 여기서 책 정보를 이용해 구조를 만듭니다! */
    //  }
 
    // // AJAX 요청을 보냅니다. getJSON() 함수는 알라딘 API 대용으로 사용불가.
    //  $.ajax({
    //     url: url,
    //     jsonp: "bookDisplay",
    //     dataType: "jsonp"
    //  });
//}



function 연습 (){
  //var id = main.attr("id").substr(16, 10); // ISBN(10자리)부분을 잘라내서 얻습니다 (16칸부터 10개만큼의 문자 얻기)
     var url = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101&callback=bookDisplay`
      
     //var url = `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${API_KEY}&cover=big&ItemId=${id}&output=js&callback=bookDisplay`;
 
    // AJAX 요청을 보냅니다. getJSON() 함수는 알라딘 API 대용으로 사용불가.
     $.ajax({
        url: url,
        jsonp: "bookDisplay",
        dataType: "jsonp"
     });
}

    // 콜백 함수입니다.
    function bookDisplay(success) {
      //console.log(success);
      console.log(success.item[0].title);

      bookList = success.item;
      console.log(bookList);
      //console.log(data);
      /* 여기서 책 정보를 이용해 구조를 만듭니다! */
      render();
    }

연습();

function render (){
  let bookHTML = ``;
  bookHTML = bookList.map(book => `
      <h4>${book.title}</h4>
      <img src=${book.cover}>
    `).join('');

  //bookHTML += `<img src=${bookList[0].thumbnail}><h4>${bookList[0].title}</h4>`;

  document.getElementById('book-board').innerHTML = bookHTML;
}

