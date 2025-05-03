

const shareButton=document.querySelector("#share-button");
shareButton.addEventListener("click", async()=>{
 const name= document.querySelector("#name").value.trim();
 const phone= document.querySelector("#phone").value.trim();
 const status= document.querySelector("#status");
 const data={
    name,
    phone
 }

 const jsonString=JSON.stringify(data,null,2);
  
 const file = new Blob([jsonString],{type:"application/json"});

 const textFile= new File([file],"data.json",{
    type:"text/plain" });

    console.log(textFile.size); // Make sure > 0
    console.log("Can Share Files:", navigator.canShare && navigator.canShare({ files: [textFile] }));

if (navigator.canShare && navigator.canShare({ files: [textFile] })) {
    try {
        await navigator.share({
        title: "User Data",
        text: "Here is my user data JSON file.",
        files: [textFile]
        });
        status.textContent="File shared successfully!";
    } catch (error) {
        console.error("Sharing failed:", error);
        status.textContent="Error sharing file.";
    }
    } else {
    status.textContent="Sharing not supported on this device.";
    }
});