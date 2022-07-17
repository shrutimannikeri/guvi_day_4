// https://restcountries.eu/rest/v2/all -- tryied thi api but not working its giving This site can’t be reached

//use rest api countries API URL-->https://restcountries.com/v3.1/all and display all the country flags in the console

//setup http request;
let xhr=new XMLHttpRequest();

//open the request
xhr.open('GET',"https://restcountries.com/v3.1/all")

//set up our listenr to process the complete
let data=[]
xhr.onload=function(){
//get the data

if(xhr.status>=200 && xhr.status<300){
    // convesrt json string to object

    data=JSON.parse(this.response)
    //let flag=""
    let flags=data.map((item,index)=>{
        return item.flag;
    })
   console.log(flags)
}
else{
    console.log("ERROR..")
}
}
xhr.send()


//output

// (250) ['🇬🇺', '🇧🇩', '🇨🇰', '🇳🇵', '🇲🇨', '🇹🇷', '🇧🇱', '🇯🇲', '🇦🇩', '🇱🇾', '🇯🇪', '🇲🇹', '🇧🇴', '🇲🇺', '🇵🇷', '🇫🇷', '🇱🇺', '🇽🇰', '🇲🇬', '🇵🇰', '🇲🇼', '🇸🇮', '🇸🇿', '🇺🇸', '🇰🇮', '🇦🇿', '🇿🇲', '🇰🇪', '🇰🇼', '🇰🇿', '🇱🇻', '🇸🇱', '🇰🇳', '🇧🇿', '🇲🇶', '🇷🇴', '🇻🇬', '🇳🇿', '🇧🇷', '🇨🇫', '🇲🇭', '🇹🇫', '🇼🇫', '🇷🇺', '🇵🇦', '🇧🇳', '🇬🇮', '🇲🇾', '🇪🇨', '🇲🇦', '🇻🇨', '🇨🇺', '🇱🇮', '🇧🇸', '🇨🇦', '🇫🇯', '🇸🇦', '🇰🇾', '🇱🇹', '🇧🇶', '🇮🇪', '🇨🇱', '🇹🇲', '🇲🇲', '🇾🇪', '🇸🇭', '🇸🇹', '🇬🇹', '🇸🇬', '🇻🇪', '🇰🇲', '🇪🇭', '🇳🇦', '🇹🇱', '🇧🇦', '🇨🇻', '🇭🇰', '🇲🇩', '🇵🇭', '🇬🇵', '🇿🇼', '🇬🇩', '🇮🇲', '🇹🇿', '🇸🇨', '🇳🇱', '🇵🇾', '🇸🇲', '🇧🇬', '🇻🇮', '🇹🇳', '🇮🇸', '🇨🇩', '🇦🇼', '🇮🇩', '🇸🇻', '🇸🇰', '🇸🇪', '🇱🇦', '🇬🇲', …]
// [0 … 99]
// [100 … 199]
// [200 … 249]
// length: 250
// [[Prototype]]: Array(0)
