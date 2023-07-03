//The Nft variable
const NFTs=[];


//NFT mint function
function mintNFT(name,color,symbol){
    const NFT ={
        "name":name,
        "color":color,
        "symbol":symbol
    }
    NFTs.push(NFT);
    console.log("Minted: "+name);
}

//function to list all NFTs
function listNFT(){
    for(let i=0;i<NFTs.length;i++){
        console.log("ID:\t"+(i+1));
        console.log("Name:\t"+NFTs[i].name);
        console.log("Color:\t"+NFTs[i].color);
        console.log("Symbol:\t"+NFTs[i].symbol);
    }
}

//function to log the total number of NFTs

function getAllSupply(){
    console.log(NFTs.length);
}

//calling functions

mintNFT("superMonkey","brown","monkey");
mintNFT("pinkPanda","pink","panda");
mintNFT("rocketCar","blue","car");
mintNFT("godzilla","black","godzilla");

listNFT();

getAllSupply();



