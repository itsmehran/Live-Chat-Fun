$('#button').click(function fetchGiphy(){

    const searchText = $('input').val();


const xhr = new XMLHttpRequest();

xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=5pyP4aPinFvg7Bo0T8aXIgTTCkrMmqin&rating=pg&limit=10`, true);

xhr.onload= function() {
    if(this.status === 200) {
        const response = JSON.parse(this.responseText);
       
          
           response.data.forEach(function(gifSearch){

               const output = `<img src = ${gifSearch.images.original.url} alt="imported-gifs">`;
               
               $('.gifResults').append(output);
       
           });
         
    }
}
xhr.send();

});
