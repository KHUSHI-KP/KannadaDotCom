// Run with: node server.js

import http from "http";
import url from "url";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function sendJSON(res, code, obj) {

  const body = JSON.stringify(obj);

  res.writeHead(code,{
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"GET,OPTIONS",
    "Access-Control-Allow-Headers":"Content-Type"
  });

  res.end(body);

}

const now = Date.now();

/* ---------------- POSTS ---------------- */

const demoPosts=[

{
id:"p1",
business:{en:"Sara's Boutique",kn:"ಸಾರಾ ಬೋಟಿಕ್"},
location:{en:"Vijayanagar, Bengaluru",kn:"ವಿಜಯನಗರ, ಬೆಂಗಳೂರು"},
content:{en:"Flat 15% off on sarees this weekend",kn:"ಈ ವಾರಾಂತ್ಯ ಸೀರೆಗಳ ಮೇಲೆ 15% ರಿಯಾಯಿತಿ"},
tags:[{en:"Offer",kn:"ಆಫರ್"},{en:"Sarees",kn:"ಸೀರೆಗಳು"}],
likes:83,
comments:26,
saves:65,
image:"/images/saree.jpg",
createdAt:now-1000*60*30
},

{
id:"p2",
business:{en:"Coffee Roasters",kn:"ಕಾಫಿ ರೋಸ್ಟರ್ಸ್"},
location:{en:"Jayanagar, Bengaluru",kn:"ಜಯನಗರ, ಬೆಂಗಳೂರು"},
content:{en:"Celebrating our 1000th customer!!!!",kn:"ನಮ್ಮ 1000ನೇ ಗ್ರಾಹಕನ ಸಂಭ್ರಮ"},
tags:[{en:"SmallBusiness",kn:"ಸಣ್ಣ ವ್ಯಾಪಾರ"}],
likes:250,
comments:50,
saves:100,
image:"/images/coffee.jpg",
createdAt:now-1000*60*60*5
},

{
id:"p3",
business:{en:"Uptrend Craft",kn:"ಅಪ್‌ಟ್ರೆಂಡ್ ಕ್ರಾಫ್ಟ್"},
location:{en:"Indiranagar, Bengaluru",kn:"ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು"},
content:{en:"New scented candle collection launched today",kn:"ಹೊಸ ಸುಗಂಧ ಮೇಣದ ಬತ್ತಿ ಸಂಗ್ರಹ ಬಿಡುಗಡೆ"},
tags:[
{en:"EcoFriendly",kn:"ಪರಿಸರ ಸ್ನೇಹಿ"},
{en:"SupportLocal",kn:"ಸ್ಥಳೀಯ ಬೆಂಬಲ"}
],
likes:150,
comments:26,
saves:70,
image:"/images/candle.jpg",
createdAt:now-1000*60*60*10
},

{
id:"p4",
business:{en:"Blue Eyes Captures",kn:"ಬ್ಲೂ ಐಸ್ ಕ್ಯಾಪ್ಚರ್ಸ್"},
location:{en:"Nagarbhavi, Bengaluru",kn:"ನಗರಭವೀ, ಬೆಂಗಳೂರು"},
content:{en:"5 tips for hiring your wedding photographer",kn:"ಮದುವೆ ಫೋಟೋಗ್ರಾಫರ್ ಆಯ್ಕೆ ಮಾಡಲು 5 ಸಲಹೆಗಳು"},
tags:[
{en:"WeddingTips",kn:"ಮದುವೆ ಸಲಹೆಗಳು"},
{en:"Photography",kn:"ಫೋಟೋಗ್ರಫಿ"}
],
likes:99,
comments:50,
saves:12,
image:"/images/camera.jpg",
createdAt:now-1000*60*60*24
},

{
id:"p5",
business:{en:"Wahh Chaiiii",kn:"ವಾಹ್ ಚಾಯಿ"},
location:{en:"Kengeri, Bengaluru",kn:"ಕೆಂಗೇರಿ, ಬೆಂಗಳೂರು"},
content:{en:"Celebrating our 100th customer today!",kn:"ನಮ್ಮ 100ನೇ ಗ್ರಾಹಕನ ಸಂಭ್ರಮ"},
tags:[{en:"SmallBusiness",kn:"ಸಣ್ಣ ವ್ಯಾಪಾರ"}],
likes:150,
comments:15,
saves:10,
image:"/images/chai.jpg",
createdAt:now-1000*60*60*48
},

{
id:"p6",
business:{en:"Bendooza Delights",kn:"ಬೆಂಡೂಜಾ ಡಿಲೈಟ್ಸ್"},
location:{en:"Indiranagar, Bengaluru",kn:"ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು"},
content:{en:"20% off on weekend special orders",kn:"ವಾರಾಂತ್ಯ ವಿಶೇಷ ಆರ್ಡರ್‌ಗಳ ಮೇಲೆ 20% ರಿಯಾಯಿತಿ"},
tags:[
{en:"LocalBiz",kn:"ಸ್ಥಳೀಯ ವ್ಯವಹಾರ"},
{en:"AestheticCafes",kn:"ಅಂದವಾದ ಕ್ಯಾಫೆಗಳು"}
],
likes:500,
comments:275,
saves:300,
image:"/images/croissant.jpg",
createdAt:now-1000*60*60*3
},

{
id:"p7",
business:{en:"Green Basket Organics",kn:"ಗ್ರೀನ್ ಬಾಸ್ಕೆಟ್ ಆರ್ಗ್ಯಾನಿಕ್ಸ್"},
location:{en:"Malleshwaram, Bengaluru",kn:"ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು"},
content:{en:"Fresh organic vegetables delivered daily",kn:"ಪ್ರತಿದಿನ ತಾಜಾ ಆರ್ಗ್ಯಾನಿಕ್ ತರಕಾರಿಗಳ ವಿತರಣಾ"},
tags:[
{en:"EcoFriendly",kn:"ಪರಿಸರ ಸ್ನೇಹಿ"},
{en:"LocalBiz",kn:"ಸ್ಥಳೀಯ ವ್ಯವಹಾರ"}
],
likes:180,
comments:22,
saves:45,
image:"/images/organic.jpg",
createdAt:now-1000*60*60*12
},

{
id:"p8",
business:{en:"Pixel Studio",kn:"ಪಿಕ್ಸೆಲ್ ಸ್ಟುಡಿಯೋ"},
location:{en:"BTM Layout, Bengaluru",kn:"ಬಿಟಿಎಂ ಲೇಔಟ್, ಬೆಂಗಳೂರು"},
content:{en:"Professional product photography for startups",kn:"ಸ್ಟಾರ್ಟಪ್‌ಗಳಿಗೆ ವೃತ್ತಿಪರ ಉತ್ಪನ್ನ ಫೋಟೋಗ್ರಫಿ"},
tags:[
{en:"Photography",kn:"ಫೋಟೋಗ್ರಫಿ"},
{en:"SmallBusiness",kn:"ಸಣ್ಣ ವ್ಯಾಪಾರ"}
],
likes:210,
comments:38,
saves:55,
image:"/images/studio.jpg",
createdAt:now-1000*60*60*6
}

];

/* ---------------- BUSINESS ---------------- */

const demoBusiness={
id:"b1",
name:"Heritage Handloom",
description:"Local handloom and textiles with traditional patterns.",
visits:1283,
contact:{
phone:"+91-99999-00000",
email:"info@handloom.example"
}
};

/* ---------------- ANALYTICS ---------------- */

const demoAnalytics={
revenue:12450,
reach:8234,
leads:42,
series:[10,20,40,30,60,80,95]
};

/* ---------------- SPA FALLBACK ---------------- */

let indexHtml=null;

try{

indexHtml=fs.readFileSync(path.join(__dirname,"index.html"),"utf8");

}catch{

indexHtml=null;

}

/* ---------------- SERVER ---------------- */

const server=http.createServer((req,res)=>{

const parsed=url.parse(req.url,true);
const pathname=parsed.pathname || "/";

if(req.method==="OPTIONS"){

res.writeHead(204,{
"Access-Control-Allow-Origin":"*",
"Access-Control-Allow-Methods":"GET,OPTIONS",
"Access-Control-Allow-Headers":"Content-Type"
});

return res.end();

}

if(req.method!=="GET"){
return sendJSON(res,405,{error:"Only GET supported"});
}

/* -------- API ROUTES -------- */

if(pathname==="/api/posts"){
return sendJSON(res,200,{data:demoPosts});
}

if(pathname==="/api/business"){
return sendJSON(res,200,{data:[demoBusiness]});
}

if(pathname==="/api/analytics"){
return sendJSON(res,200,{data:demoAnalytics});
}

if(pathname==="/health"){
return sendJSON(res,200,{
ok:true,
endpoints:["/api/posts","/api/business","/api/analytics"]
});
}

/* -------- SPA FALLBACK -------- */

if(indexHtml){
res.writeHead(200,{"Content-Type":"text/html"});
return res.end(indexHtml);
}

sendJSON(res,404,{error:"Not found"});

});

/* ---------------- START SERVER ---------------- */

server.listen(PORT,()=>{

console.log(`Mock server running at http://localhost:${PORT}`);

console.log("Available endpoints:");
console.log("/api/posts");
console.log("/api/business");
console.log("/api/analytics");

});