const key = 'AIzaSyCcLnGdiWhmcC1W1IjyDH_sFxaQ4zazJ_U'
let videoId = 'Cemk32wKN_k'

function getComments() { 
    fetch (`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=wtLJPvx7-ys&key=AIzaSyCcLnGdiWhmcC1W1IjyDH_sFxaQ4zazJ_U`)
    .then(respone=>{
        console.log("Response")
        return respone.json()
        
    }).then(data=>{
        console.log(JSON.stringify(data.items[0].snippet.topLevelComment.snippet.textDisplay))
    })
}
getComments()