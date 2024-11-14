if(document.getElementById('YQContainer')){
    var scriptRastreio = document.createElement('script');
    scriptRastreio.src = "//www.17track.net/externalcall.js";
    document.body.appendChild(scriptRastreio);

    scriptRastreio.onload = function() {
      console.log('Tracking Script Loaded!');
    };

    function doTrack() {
        var num = document.getElementById("YQNum").value;
        if(num===""){
            alert("Please enter the tracking code correctly."); 
            return;
        }
        YQV5.trackSingle({
            YQ_ContainerId:"YQContainer",
            YQ_Height:600,
            YQ_Fc:"0",
            YQ_Lang:"en",
            YQ_Num:num
        });
    }
}
