function SEARCHBOOK(){


    
    window.location='SEARCH BOOK.HTML'

}  

function BookStore(){

    books={  
     
    ubookname:a2.value,
    ubookid:a1.value,

    uauthorname:a3.value,
    udiscription:a4.value

    }
    if(a2.value in localStorage){
        alert("Book already present")
    }
    else{
          localStorage.setItem(a2.value,JSON.stringify(books))
          alert("new book details added")
          window.location="SEARCH BOOK.HTML"
    }

}
    
function BOOKSFIND(){

    bname=z1.value
    if (bname in localStorage) {


        selectedBook=JSON.parse(localStorage.getItem(bname))

        result.innerHTML=`
        <h3 class="text-success">Book id      : ${selectedBook.ubookid}</h3>
        <h3 class="text-success">Book Name    : ${selectedBook.ubookname}</h3>
        <h3 class="text-success">Author Name  : ${selectedBook.uauthorname}</h3>
        <h3 class="text-success">Description  : ${selectedBook.udiscription}</h3>   `         
     
    }
    else{

        result.innerHTML=`<h3 class="text-danger">Book not found</h3> `
    }
}
    
    

    
    
    
// function changePage(){

//     window.location="search.html"
// }

// function StoreBook(){

//     book={
//         bookname:bname.value,
//         bookid:bid.value,
//         bookauthor:bauth.value,
//         desc:bdes.value 
//     }
//     if (bname.value in localStorage) {

//         alert("Book already present")
        
//     }
//     else{

//         localStorage.setItem(bname.value,JSON.stringify(book))
//         alert(" New book details added")
//         window.location="search.html"
//     }   
// }
// function findBook(){

//     bookname1=bn1.value
//     if (bookname1 in localStorage) {


//         selectedBook=JSON.parse(localStorage.getItem(bookname1))

//         result.innerHTML=`
//         <h3 class="text-success">Book id      : ${selectedBook.bookid}</h3>
//         <h3 class="text-success">Book Name    : ${selectedBook.bookname}</h3>
//         <h3 class="text-success">Author Name  : ${selectedBook.bookauthor}</h3>
//         <h3 class="text-success">Description  : ${selectedBook.desc}</h3>   `         
     
//     }
//     else{

//         result.innerHTML=`<h3 class="text-danger">Book not found</h3> `
//     }
// }
